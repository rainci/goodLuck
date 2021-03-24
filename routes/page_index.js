const express = require('express');
var router = express.Router();

router.get('/index.html', (req, res) => {
  res.json('hello world!')
})

module.exports = router;