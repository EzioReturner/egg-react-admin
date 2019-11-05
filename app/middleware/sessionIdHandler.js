'use strict';
const uuidv4 = require('uuid/v4');
/**
 * 客户端缓存一份cookie，保存session中的id
 * @returns {agentHandler}
 */
module.exports = () => {
  return async function sessionIdHandler(ctx, next) {
    // 读取cookie中保存的sessionId
    let cookieId = ctx.cookies.get(ctx.app.config.session.sessionIdKey, {
      encrypt: true
    });
    // 如果没有cookie，则产生1个
    if (!cookieId) {
      cookieId = uuidv4();
      ctx.session.id = cookieId;
    }
    // 如果session中没有，则设置1个
    if (!ctx.session.id) {
      ctx.session.id = cookieId;
    }
    await next();
    // 每次写入 session
    ctx.cookies.set(ctx.app.config.session.sessionIdKey, cookieId, {
      encrypt: true,
      maxAge: ctx.app.config.session.maxAge
    });
  };
};
