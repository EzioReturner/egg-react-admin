'use strict';

const Controller = require('egg').Controller;

/**
 * 报表服务
 */
class DownloadController extends Controller {
  /**
   * 热力分析结果导出
   * @returns {Promise<void>}
   */
  async heat() {
    const param = this.ctx.query.param;
    const paramStr = encodeURI(param);
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${apiConfig.domain}/analysis/heatmap/downExcel?content=${paramStr}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[report download url]', url);
    this.ctx.redirect(url);
  }

  /**
   * 点面统计结果导出
   * @returns {Promise<void>}
   */
  async pointStatistics() {
    const param = this.ctx.query.param;
    const paramStr = encodeURI(param);
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${
      apiConfig.domain
    }/analysis/layerStatistics/exportStatisticsResult?content=${paramStr}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[report download url]', url);
    this.ctx.redirect(url);
  }

  /**
   * 导出门店围栏列表
   * @returns {Promise<void>}
   */
  async downFenceExcel() {
    const param = this.ctx.query.param;
    const paramStr = encodeURI(param);
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${apiConfig.domain}/fenceAnalysis/downFenceExcel?content=${paramStr}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[report download url]', url);
    this.ctx.redirect(url);
  }

  /**
   * 导出覆盖目标点位坐标围栏门店接口
   * @returns {Promise<void>}
   */
  async downCoverExcel() {
    const param = this.ctx.query.param;
    const paramStr = encodeURI(param);
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${apiConfig.domain}/fenceAnalysis/downCoverExcel?content=${paramStr}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[report download url]', url);
    this.ctx.redirect(url);
  }

  async downloadLayerDataTpl() {
    const type = this.ctx.query.type;
    const layerId = this.ctx.query.layerId;
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${
      apiConfig.domain
    }/layer/custom/download/template?type=${type}&layerId=${layerId}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[tpl download url]', url);
    this.ctx.redirect(url);
  }

  async unifyDownload() {
    const param = this.ctx.query.param;
    const paramStr = encodeURI(param);
    const apiConfig = this.ctx.app.config.api;
    const authLoginConfig = this.ctx.app.config.authLogin;
    const token = await this.ctx.getSession(authLoginConfig.sessionTokenKey);
    const url = `${apiConfig.domain}/task/downloadExcel?content=${paramStr}&token=${
      token ? token : this.ctx.app.config.api.defaultToken
    }`;
    this.ctx.app.logger.info('[report download url]', url);
    this.ctx.redirect(url);
  }
}

module.exports = DownloadController;
