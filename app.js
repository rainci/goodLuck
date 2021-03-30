const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
app.set('trust proxy', 1) // trust first proxy
const { session } = require('./lib/sessionMiddle')
app.use((req, res, next) => {
  const auth = 'rainci';
  if (auth) {
    res.locals.auth = auth;
  }
  console.info('auth:', res.locals.auth)
  next();
})
//session 中间件
app.use(session)
app.use((req, res, next) => {
  if (req.session) {
    req.session.auth = 'rainci';
  }
  console.info('session2:', req.session)
  next()
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
//express static path
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes'))


const server = app.listen(8888, () => {
  const { host, port } = server.address();
  console.log(`Example app listening at http://localhost:${port}`);
})

// 官方案例
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app;


