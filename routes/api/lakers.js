const express = require("express");
const router = express.Router();
const lakersController = require('./../../controllers/lakersController');

router.get('/', lakersController.index);

module.exports = router;