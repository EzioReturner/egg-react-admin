'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  /**
   *
   * 退出登录
   */
  async logout() {
    await this.ctx.apiRequest('/user/loginout', 'get');
    const authLogin = this.ctx.app.config.authLogin;
    await this.ctx.setSession(authLogin.sessionTokenKey, null);
    this.ctx.redirect('/');
  }

  /**
   * 统一登录后获取 token
   * @returns {Promise<void>}
   */
  async login() {
    const token = this.ctx.query.token;
    const authLogin = this.ctx.app.config.authLogin;
    if (token) {
      await this.ctx.setSession(authLogin.sessionTokenKey, token);
      let loginResult = await this.ctx.apiRequest('/user/findLogin', 'get');
      loginResult = loginResult.data;
      // 登录失败
      if (loginResult.status !== 0) {
        this.ctx.redirect('/error?msg=' + encodeURIComponent('统一授权登录失败，请稍后尝试'));
        return;
      }
      let result = await this.ctx.apiRequest('/user/getUserInfo', 'get');
      const userInfo = result ? result.data : null;
      if (!userInfo || userInfo.status !== 0 || !userInfo.re) {
        await this.ctx.setSession(authLogin.sessionTokenKey, null);
        this.ctx.app.logger.info(`获取用户信息失败，请确认 token = ${token}`);
        this.ctx.redirect('/error?msg=' + encodeURIComponent('暂无权限，请联系管理员'));
      } else {
        this.ctx.app.logger.debug(`[auth login] token=${token}`);
        // 回到首页
        this.ctx.redirect('/?from=login');
      }
    } else {
      this.ctx.redirect('/error?msg=' + encodeURIComponent('统一授权登录失败，请稍后尝试'));
    }
  }

  /**
   * 获取用户信息
   * @returns {Promise<void>}
   */
  async info() {
    const authLogin = this.ctx.app.config.authLogin;
    const token = this.ctx.session[authLogin.sessionTokenKey];
    const sign = auth.signInfo(authLogin, token);
    const redirectUrl = string.format(authLogin.infoUrl, [token, sign]);
    const result = await this.ctx.curl(redirectUrl, {
      method: 'post',
      dataType: 'json',
      contentType: 'json'
    });
    this.ctx.app.logger.debug(result);
    this.ctx.body = result.data;
  }
}

module.exports = LoginController;
