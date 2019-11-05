'use strict';
const fs = require('fs');
const path = require('path');
/**
 * 启动
 */
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {}

  async didLoad() {}

  async willReady() {}

  async didReady() {
    // 静态资源服务器域名
    this.app.locals.staticPath = this.app.config.static.domain;
    // 读取已经存在的模板页面
    this.app.views = fs.readdirSync(path.resolve('./app/view/'));
    this.app.logger.info('[view views]', this.app.views);
  }

  async serverDidReady() {
    this.app.logger.info('[start up] success...');
  }
}

module.exports = AppBootHook;
