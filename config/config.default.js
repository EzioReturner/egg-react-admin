'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name + '_1553828837388_3153';
  config.middleware = ['sessionIdHandler', 'loginHandler'];

  config.loginHandler = {
    // 是否开启登录拦截
    enable: false,
    // 以下路径不参与登录拦截
    whitePath: ['/login', '/error']
  };

  config.session = {
    // 记录会话中对应redis中保存uid的key的cookie名称
    sessionIdKey: `LUCKIN_COFFEE_${appInfo.name.toUpperCase()}_SID`,
    // 记录本地会话的session key
    key: `LUCKIN_COFFEE_${appInfo.name.toUpperCase()}_SSID`,
    // 1小时
    maxAge: 12 * 3600 * 1000,
    httpOnly: true,
    encrypt: true
  };

  /** redis配置 */
  config.redis = {
    clients: {
      master: {
        port: 6379, // Redis port
        host: '10.104.105.98', // Redis host  10.104.105.98
        db: 1,
        password: ''
      },
      slave: {
        port: 6379, // Redis port
        host: '10.104.105.98', // Redis host  10.104.105.98
        db: 1,
        password: ''
      }
    }
  };

  /** view 引擎 */
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks'
    }
  };

  /** 日志配置 */
  config.logger = {
    dir: path.join(__dirname, '../../logs/', appInfo.name.toLowerCase()),
    consoleLevel: 'DEBUG', // NONE
    level: 'DEBUG',
    appLogName: `${appInfo.name.toLowerCase()}.log`,
    coreLogName: `${appInfo.name.toLowerCase()}.core.log`,
    agentLogName: `${appInfo.name.toLowerCase()}.agent.log`,
    errorLogName: `${appInfo.name.toLowerCase()}.error.log`
  };

  config.static = {
    prefix: '/'
  };

  config.cors = {
    origin: '*',
    allowMethods: ['GET', 'POST']
  };

  /** 本地开发关闭localhost **/
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => ctx.request.hostname === 'localhost'
    }
  };
  /** 允许上传文件格式 **/
  config.multipart = {
    // will append to whilelist
    fileExtensions: ['.xls', '.xlsx']
  };

  /** 统一登录接入 **/
  config.authLogin = {
    /** ----- 测试1环境 ----- **/
    // 授权url
    authUrl:
      'http://unionauthtest01.luckincoffee.com/luckyunionauth/auth/v2/login.do_?time={0}&client=website&back_url={1}&appid={2}&signature={3}',
    infoUrl:
      'http://unionauthtest01.luckincoffee.com/luckyunionauth/auth/v2/retrieve.do_?token={0}&signature={1}',
    // 测试1
    // appId: 'cCT5gukca7v7',
    // appSecret: 'eEhwSE9OS1MxNFBKblpMWTV6SDBYOFl4',
    appId: 'XGetXqMMog09',
    appSecret: 'MmtTOXpTaDJHWUVwcmFCQUs3VURXU21V',
    redirectUri: 'http://localhost:8080/login',
    // 客户端名称
    clientName: 'website',
    // session中保存token的key值
    sessionTokenKey: 'unionauth_token_session_key'
  };

  /** api调用 **/
  config.api = {
    // 10.104.116.207
    // http://polarisapitest.luckincoffee.com
    domain: 'https://polarisapitest.luckincoffee.com/luckypolarisapi',
    defaultToken: '123456',
    headerTokenKey: 'LUCKYPOLARISAPI-AUTH-TOKEN',
    timeout: [30000, 60000]
  };

  config.aiApi = {
    // domain: 'http://aitest02.luckycoffee.com',
    domain: 'http://ai.luckincoffee.com/luckyai',
    timeout: [5000, 30000]
  };

  config.oauthApi = {
    domain: 'http://smartbitest.luckincoffee.com/luckysmartbi', // http://10.101.49.32:8080
    defaultToken: '123456',
    headerTokenKey: 'SMARTBI-AUTH-TOKEN',
    timeout: [5000, 15000]
  };

  return config;
};
