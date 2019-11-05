'use strict';

const SHA256 = require('./sha256');

/**
 * 统一登录中签名生成方式
 */
class Auth {
  /**
   * 登录签名
   * @param config
   * @param timestamp
   */
  signLogin(config, timestamp) {
    // 前面拼接格式：下划线链接对应属性值，注意顺序。appid_backUrl_client_timestamp#appSecretKey
    return SHA256(
      `${config.appId}_${config.redirectUri}_${config.clientName}_${timestamp}#${config.appSecret}`
    );
  }

  /**
   * 获取用户信息签名
   * @param config
   * @param token
   */
  signInfo(config, token) {
    return SHA256(`${token}#${config.appSecret}`);
  }
}

module.exports = new Auth();
