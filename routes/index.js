var express = require('express');
var router = express.Router();
router.use('/',require('./page_index'));
module.exports = router;