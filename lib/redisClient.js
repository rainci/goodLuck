const redis = require('redis');
const redisClient = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  retry_strategy: function(options){
    if (options.error.code === 'ECONNREFUSED') {
      // 在一个指定错误或一个冲掉所有命令的错误后结束重连
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // 在一个指定超时或一个冲掉所有命令的错误后结束重连
      return new Error('Retry time exhausted');
    }
    if (options.times_connected > 10) {
      // 在一个内置错误后结束重连
      return undefined;
    }
    // eslint-disable-next-line
    console.info(`[Redis] reconnecting ${options.attempt} times`);
    // 指定时间后重连
    return Math.max(options.attempt * 100, 3000);
  }
})
module.exports = redisClient;