'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const requestPath = this.ctx.request.path;
    if (requestPath) {
      const viewName = requestPath.substring(1).split('/');
      if (viewName && this.ctx.app.views && this.ctx.app.views.indexOf(`${viewName}.html`) !== -1) {
        await this.ctx.render(`${viewName}.html`);
        return;
      }
    }
    await this.ctx.render('index.html');
  }

  /**
   * 错误提示
   * @returns {Promise<void>}
   */
  async error() {
    let msg = this.ctx.query.msg;
    if (!msg) {
      msg = '系统异常，请稍后重试';
    } else {
      msg = decodeURIComponent(msg);
    }
    this.ctx.app.logger.debug('error msg: ', msg);
    const pageData = {
      title: '地图分析',
      serverTime: Date.now(),
      message: msg
    };
    await this.ctx.render('/error', pageData);
  }
}

module.exports = HomeController;
