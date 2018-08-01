const express = require('express');
const router = express.Router();

const userController = require('../controlers/userController')

//router.get('/login', userController.login);
router.post('/login', userController.sing_in);
router.post('/reg', userController.register);

module.exports = router;