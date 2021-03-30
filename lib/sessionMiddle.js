const session = require('express-session');
const RedisConnection = require('connect-redis')(session);
const redisClient = require('./redisClient');
const redisStore = new RedisConnection({
  client: redisClient
})
const sessionOptions = {
  name: 'rainciStore',
  secret: process.env.COOKIE_SECRET,
  store: redisStore,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30000 }

}
module.exports = {
  redisStore,
  session: (req, res, next) => {
    session(sessionOptions)(req, res, next)
  }
}