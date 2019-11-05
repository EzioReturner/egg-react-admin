'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.login.login);
  router.get('/logout', controller.login.logout);
  router.get('/info', controller.login.info);
  router.get('/error', controller.home.error);

  router.get('/unauthorized', controller.oauth.unauthorized);
  router.all('/oauthApi/**', controller.oauth.oauthApi);

  router.all('/api/**', controller.api.api);
  router.all('/static/**', controller.api.static);
  router.get('/**', controller.home.index);
};
