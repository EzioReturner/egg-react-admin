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

  config.api = {
    domain: 'http://visiontest02.luckincoffee.com/luckyvision'
  };

  /** 静态资源 */
  config.static = {
    prefix: '/',
    domain: 'http://statictest02.luckycoffee.com'
  };

  /** 统一登录接入 **/
  config.authLogin = {
    // 测试2
    // appId: 'mPyW6Hy3M3Gm',
    // appSecret: 'MTVUd2xyWE9iWnZKVzJJQU9wU1A0VVQ3',
    // 测试1
    appId: 'cCT5gukca7v7',
    appSecret: 'eEhwSE9OS1MxNFBKblpMWTV6SDBYOFl4',
    redirectUri: 'https://findtest.luckincoffee.com/login',
  };

  return config;
};
