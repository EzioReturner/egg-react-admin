'use strict';
const auth = require('../lib/auth');
const string = require('../lib/string');
/**
 * 登录拦截器
 * @returns {Function}
 */
module.exports = options => {
  return async function(ctx, next) {
    ctx.app.logger.debug('[visit url]', ctx.request.href);
    const authLogin = ctx.app.config.authLogin;
    // 只有开启了登录验证才生效
    if (options.enable) {
      const path = ctx.request.path;
      // 如果没有登录信息
      const session = await ctx.getSession(authLogin.sessionTokenKey);
      if (options.whitePath.indexOf(path) === -1 && !session) {
        if (path.indexOf('/api/') >= 0) {
          /* eslint-disable */
          ctx.body = await {
            msg: '登录过期'
          };
          ctx.status = 401;
          return;
        }
        /* eslint-enable */

        const timestamp = Date.now();
        const signature = auth.signLogin(authLogin, timestamp);
        const params = [];
        params.push(timestamp);
        params.push(authLogin.redirectUri);
        params.push(authLogin.appId);
        params.push(signature);
        const redirectUrl = string.format(authLogin.authUrl, params);
        ctx.app.logger.debug('[auth redirect to]', redirectUrl);

        ctx.redirect(redirectUrl);
        return;
      }
    }
    await next();
    // 如果有session登录信息了。往后继续推移
    const sessionOld = await ctx.getSession(authLogin.sessionTokenKey);
    if (sessionOld) {
      await ctx.setSession(authLogin.sessionTokenKey, sessionOld);
    }
  };
};
