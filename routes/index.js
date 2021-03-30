var express = require('express');
var router = express.Router();
// router.use('/',require('./page_index'));
router.get('/', (req, res) => {
  // res.json('hello world!')
  res.render('../views/index', {title: 'welcome rainci goodluck network'});
})
module.exports = router;