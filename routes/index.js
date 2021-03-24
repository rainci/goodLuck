var express = require('express');
var router = express.Router();
// router.use('/',require('./page_index'));
router.get('/index.html', (req, res) => {
  // res.json('hello world!')
  res.render('../pages/index');
})
module.exports = router;