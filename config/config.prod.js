'use strict';
module.exports = appInfo => {
  const config = {};


  config.loginHandler = {
    // 是否开启登录拦截
    enable: true
  };

  config.redis = {
    clients: {
      master: {
        port: 6381, // Redis port
        host: '10.212.11.42', // Redis host  10.104.105.98
        db: 1,
        password: ''
      },
      slave: {
        port: 6381, // Redis port
        host: '10.212.13.42', // Redis host  10.104.105.98
        db: 1,
        password: ''
      }
    }
  };

  config.api = {
    domain: 'https://polarisapi.luckincoffee.com/luckypolarisapi'
  };

  config.aiApi = {
    domain: 'http://ai.luckincoffee.com/luckyai'
  }

  /** 静态资源 */
  config.static = {
    prefix: '/',
    domain: 'https://static.luckincoffeecdn.com'
  };

  /** 统一登录接入 **/
  config.authLogin = {
    // 生产
    authUrl: 'https://unionauth.luckincoffee.com/luckyunionauth/auth/v2/login.do_?time={0}&client=website&back_url={1}&appid={2}&signature={3}',
    infoUrl: 'https://unionauth.luckincoffee.com/luckyunionauth/auth/v2/retrieve.do_?token={0}&signature={1}',
    appId: 'GXfKnIqrpizx',
    appSecret: 'dTFDUWw5MjlhS0w0MUFYZUFQaHhPdnh4',
    redirectUri: 'https://find.luckincoffee.com/login'
  };

  config.oauthApi = {
    domain: 'http://smartbi.luckincoffee.com/luckysmartbi', // http://10.101.49.32:8080
    headerTokenKey: 'SMARTBI-AUTH-TOKEN',
    timeout: [ 5000, 15000 ],
  };

  return config;
};
