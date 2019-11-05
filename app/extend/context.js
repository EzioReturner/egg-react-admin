'use strict';
const Redis = require('../lib/redis');

/**
 * 封装Api调用
 * @type {{api(*, *=, *=): void}}
 */
module.exports = {
  async apiRequest(path, method = 'GET', params = {}) {
    const url = this.app.config.api.domain + path;
    const headers = {};
    const sessionToken = await this.getSession(this.app.config.authLogin.sessionTokenKey);
    headers[this.app.config.api.headerTokenKey] = sessionToken || this.app.config.api.defaultToken;
    const curlParam = {
      method: method,
      dataType: 'json',
      contentType: 'json',
      data: params,
      dataAsQueryString: method === 'GET',
      headers: headers,
      timeout: this.app.config.api.timeout
    };
    const result = await this.curl(url, curlParam);
    this.app.logger.info(
      'api request url=',
      url,
      ' params=',
      JSON.stringify(curlParam.data),
      ' result=',
      JSON.stringify(result.data)
    );
    return result;
  },

  async staticRequest(path, method = 'GET', params = {}) {
    const url = this.app.config.api.domain + path;
    const headers = {};
    const sessionToken = await this.getSession(this.app.config.authLogin.sessionTokenKey);
    headers[this.app.config.api.headerTokenKey] = sessionToken || this.app.config.api.defaultToken;
    const curlParam = {
      method: method,
      dataAsQueryString: method === 'GET',
      headers: headers,
      timeout: this.app.config.api.timeout
    };
    const result = await this.curl(url, curlParam);
    this.app.logger.info(
      'static request url=',
      url,
      ' params=',
      JSON.stringify(curlParam.data),
      ' result=',
      JSON.stringify(result.data)
    );
    return result;
  },

  /**
   * 设置session，封装redis调用
   * @param key
   * @param value
   * @param delaySecond
   * @return {Promise.<boolean>}
   */
  async setSession(key, value, delaySecond) {
    await this.setRedis(this, this.session.id + '_' + key, value, delaySecond);
  },

  /**
   * 获取session，封装redis调用
   * @param key
   * @return {Promise.<*>}
   */
  async getSession(key) {
    return await this.getRedis(this, this.session.id + '_' + key);
  },

  /**
   * 保存到redis
   * @param ctx
   * @param key
   * @param value
   * @param delaySecond
   * @return {Promise.<void>}
   */
  async setRedis(ctx, key, value, delaySecond) {
    const redis = await Redis.getWriteRedis(ctx);

    if (!redis) {
      ctx.app.logger.error('redis is down, use local session.');
      ctx.session[key] = value;
    } else {
      await redis.set(
        key,
        value,
        'EX',
        delaySecond ? delaySecond : ctx.app.config.session.maxAge / 1000
      );
    }
  },

  /**
   * 从redis获取
   * @param ctx
   * @param key
   * @return {Promise.<*>}
   */
  async getRedis(ctx, key) {
    const redis = await Redis.getReadRedis(ctx);
    if (!redis) {
      ctx.app.logger.error('redis is down, use local session.');
      return ctx.session[key];
    }
    return await redis.get(key);
  }
};
