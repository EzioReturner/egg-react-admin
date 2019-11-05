'use strict';

class Redis {
  async getReadRedis(ctx) {
    let redis = null;
    try {
      redis = await ctx.app.redis.get('slave');
      // 尝试读一次
      await redis.get('redis_write_test');
    } catch (e) {
      ctx.app.logger.error('slave redis is down, connect to master...', e);
      try {
        redis = await ctx.app.redis.get('master');
        // 尝试读写一次
        await redis.get('redis_write_test');
      } catch (e) {
        ctx.app.logger.error('master redis is down, please try to use session...', e);
      }
    }
    return redis;
  }

  async getWriteRedis(ctx) {
    let redis = null;
    try {
      redis = await ctx.app.redis.get('master');
      // 尝试写一次
      await redis.set('redis_write_test', 'redis_write_test');
    } catch (e) {
      ctx.app.logger.error('master redis is down, connect to slave...', e);
      try {
        redis = await ctx.app.redis.get('slave');
        // 尝试写一次
        await redis.set('redis_write_test', 'redis_write_test');
      } catch (e) {
        ctx.app.logger.error('slave redis is down, please try to use session...', e);
      }
    }
    return redis;
  }
}

module.exports = new Redis();
