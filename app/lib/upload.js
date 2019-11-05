'use strict';

const http = require('http');
const https = require('https');
const sendToWormhole = require('stream-wormhole');
const streamToArray = require('stream-to-array');
const querystring = require('querystring');

/**
 * 文件上传
 */
class Upload {
  /**
   * 适配后端 spring mvc 项目
   * @param ctx             请求上下文
   * @param uploadUrl       接口接收文件完整路径
   * @param uploadFileName  后端接收文件名称，默认 file
   * @param extraData 额外 json 数据
   * @returns {Promise<any>}
   */
  async forSpringMvc(ctx, uploadUrl, uploadFileName = 'file', extraData) {
    // 读取文件信息
    const fileStream = await ctx.getFileStream();
    const filename = fileStream.filename;
    const mimeType = fileStream.mimeType;
    const fileLength = fileStream._readableState.length;
    const sessionToken = await ctx.getSession(ctx.app.config.authLogin.sessionTokenKey);
    // 构建文件信息
    const headers = {};
    const boundaryKey = Math.random().toString(16);
    const startData =
      '--' +
      boundaryKey +
      '\r\n' +
      'Content-Type: ' +
      mimeType +
      '\r\n' +
      'Content-Disposition: form-data; name="' +
      uploadFileName +
      '"; filename="' +
      filename +
      '"\r\n' +
      'Content-Transfer-Encoding: binary\r\n\r\n';
    const endData = '\r\n--' + boundaryKey + '--';
    headers[ctx.app.config.api.headerTokenKey] = sessionToken || ctx.app.config.api.defaultToken;
    headers['Content-Type'] = 'multipart/form-data; boundary=' + boundaryKey + '';
    headers['Content-Length'] =
      Buffer.byteLength(startData) + Buffer.byteLength(endData) + fileLength; // fileLength;
    headers['Transfer-Encoding'] = 'chunked';
    // 请求
    const host = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.exec(
      uploadUrl
    )[0];
    let postUrl = uploadUrl.substring(uploadUrl.indexOf(host) + host.length);
    if (extraData) {
      postUrl += '?' + extraData.key + '=' + extraData.value;
    }
    const options = {
      // 远端服务器域名
      host,
      // 远端服务器端口号
      port: uploadUrl.indexOf('https:') > -1 ? 443 : 80,
      // 请求方式
      method: 'POST',
      // 上传路径
      path: postUrl,
      // 请求头
      headers
    };
    return new Promise(async (resolve, reject) => {
      const _http = options.port === 443 ? https : http;
      const req = _http.request(options, function(res) {
        const list = [];
        res.on('data', function(data) {
          ctx.app.logger.info('upload_file', `data=${data}`);
          list.push(data);
        });
        res.on('end', async function() {
          const body = Buffer.concat(list).toString('utf8');
          // 最好是把流处理掉
          await sendToWormhole(fileStream);
          ctx.app.logger.info('upload_file', `end=${body + ''}`);
          ctx.app.logger.info('fileupload status code=', res.statusCode, 'result=', body + '');
          resolve ? resolve(body + '') : '';
        });
      });
      ctx.app.logger.info('upload_file', 'start');
      req.write(startData);

      // 转 buffer
      await streamToArray(fileStream).then(function(parts) {
        let part = null;
        for (let i = 0, l = parts.length; i < l; ++i) {
          part = parts[i];
          req.write(part instanceof Buffer ? part : new Buffer(part));
          ctx.app.logger.info('upload_file', `write ${i}`);
        }
        req.end(endData);
        ctx.app.logger.info('upload_file', 'end');
      });
      req.on('error', function(e) {
        ctx.app.logger.info('upload_file', 'error');
        reject ? reject(e) : '';
      });
    });
  }

  /**
   * 适配后端普通 api 项目
   * @returns {Promise<void>}
   */
  forNormalApi() {}
}

module.exports = new Upload();
