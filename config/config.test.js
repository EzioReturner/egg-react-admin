'use strict';
module.exports = (appInfo) => {
  const config = {};


  config.loginHandler = {
    // 是否开启登录拦截
    enable: true
  };

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

  /** 静态资源 */
  config.static = {
    prefix: '/',
    domain: 'http://statictest.luckycoffee.com'
  };

  config.api = {
    domain: 'https://polarisapitest.luckincoffee.com/luckypolarisapi',
  };

  /** 统一登录接入 **/
  config.authLogin = {
    // 测试1
    appId: 'XGetXqMMog09',
    appSecret: 'MmtTOXpTaDJHWUVwcmFCQUs3VURXU21V',
    redirectUri: 'http://findtest.luckincoffee.com/login'
  };

  /** 日志配置 */
  config.logger = {
    level: 'ERROR',
  };

  config.oauthApi = {
    domain: 'http://smartbitest.luckincoffee.com/luckysmartbi', // http://10.101.49.32:8080
    headerTokenKey: 'SMARTBI-AUTH-TOKEN',
    timeout: [ 5000, 15000 ],
  };
  
  return config;
};
