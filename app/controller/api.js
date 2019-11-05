'use strict';

const Controller = require('egg').Controller;

/**
 * 接口请求封装
 */
class ApiController extends Controller {
  async api() {
    console.log(123);
    const path = this.ctx.request.path.replace('/api', '');
    const method = this.ctx.request.method;
    const params = method.toLocaleLowerCase() === 'get' ? this.ctx.query : this.ctx.request.body;
    const result = await this.ctx.apiRequest(path, method, params);
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.status = result.status;
    }
  }

  async static() {
    const path = this.ctx.request.path;
    const method = this.ctx.request.method;
    const params = method.toLocaleLowerCase() === 'get' ? this.ctx.query : this.ctx.request.body;
    const result = await this.ctx.staticRequest(path, method, params);
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.status = result.status;
    }
  }

  async storeImg() {
    const path = this.ctx.request.path.replace('/storeImg', '');
    const url = `http:${path}`;
    const curlParam = {
      method: 'get',
      headers: {},
      timeout: 5000
    };

    const result = await this.ctx.curl(url, curlParam);
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.body = {
        message: result.data
      };
      this.ctx.status = result.status;
    }
  }

  async proxyApi() {
    const { path, method } = this.ctx.request;
    const [, , apiKey, ...rest] = path.split('/');
    const params = method.toLocaleLowerCase() === 'get' ? this.ctx.query : this.ctx.request.body;
    const { domain, timeout } = this.app.config[apiKey];
    const url = domain + '/' + rest.join('/');
    const curlParam = {
      method: method,
      dataType: 'json',
      contentType: 'json',
      data: params,
      dataAsQueryString: method === 'GET',
      headers: {},
      timeout: timeout
    };

    const result = await this.ctx.curl(url, curlParam);

    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.body = {
        message: result.data
      };
      this.ctx.status = result.status;
    }
  }
}

module.exports = ApiController;
