'use strict';

const Controller = require('egg').Controller;

class OAuthController extends Controller {
  async join() {
    const token = this.ctx.query.token;
    const authLogin = this.ctx.app.config.authLogin;
    if (token) {
      await this.ctx.setSession(authLogin.sessionTokenKey, token);
      this.ctx.redirect('/');
    } else {
      this.ctx.app.logger.info('[auth login failed]');
      this.ctx.redirect('/unauthorized');
    }
  }
  async unauthorized() {
    this.ctx.body = '403 unauthorized';
  }
  async oauthApi() {
    const { path, method, body } = this.ctx.request;
    const params = method.toLocaleLowerCase() === 'get' ? this.ctx.query : body;
    const _path = path.replace('/oauthApi', '');

    const { headerTokenKey, defaultToken, domain, timeout } = this.app.config.oauthApi;
    const url = domain + _path;

    const headers = {};
    const sessionToken = await this.ctx.getSession(this.app.config.authLogin.sessionTokenKey);
    headers[headerTokenKey] = sessionToken || defaultToken;

    const curlParam = {
      method: 'get',
      dataType: 'json',
      contentType: 'json',
      data: params,
      dataAsQueryString: true,
      headers: headers,
      timeout: timeout
    };

    const result = await this.ctx.curl(url, curlParam);
    const logs = { url: url, headers: headers, params: curlParam.data, result: result.data };
    this.app.logger.info('auth request', JSON.stringify(logs));
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

module.exports = OAuthController;
