const express = require('express');
const router = express.Router();
const main = require('./main');
const result_back = require('./result_back')

router.use('/', main);
router.use('/result_back', result_back);

module.exports = router;