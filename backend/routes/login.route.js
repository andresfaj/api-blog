var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login.controller');

router.post('/login', loginController.postLogin);

module.exports = router;