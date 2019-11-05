'use strict';

const Controller = require('egg').Controller;
const upload = require('../lib/upload.js');

/**
 * 上传
 */
class UploadController extends Controller {
  async uploadLayerData() {
    const { ctx } = this;
    const layerId = ctx.request.header.layerid;
    const uploadUrl = ctx.app.config.api.domain + '/layer/custom/upload/' + layerId;
    this.app.logger.info('upload_file', `uploadUrl=${uploadUrl}`);
    const result = await upload.forSpringMvc(ctx, uploadUrl);
    this.app.logger.info('upload_file', `result=${result}`);
    ctx.body = result;
  }

  async uloadLayerIcon() {
    const { ctx } = this;
    const uploadUrl = ctx.app.config.api.domain + '/layer/uploadStyleImg';
    this.app.logger.info('upload_file', `uploadUrl=${uploadUrl}`);
    const result = await upload.forSpringMvc(ctx, uploadUrl, 'imgFile');
    this.app.logger.info('upload_file', `result=${result}`);
    ctx.body = result;
  }
}

module.exports = UploadController;
