const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use((req, res, next) => {
  const auth = 'rainci';
  if(auth){
    res.locals.auth = auth;
  }
  next();
})

app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'jade')
//express static path
app.use(express.static(path.join(__dirname, 'public')))

// app.use(require('./routes'))

app.get('/', (req, res) => {
  res.send('rainci, Hello World!')
})

const server = app.listen(8888, () => {
  const { host, port } = server.address();
  console.log('Example app listening at http://%s:%s', host, port);
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


