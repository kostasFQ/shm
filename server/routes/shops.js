const express = require('express');
const router = express.Router();

const shopsController = require('../controlers/shopsController');

router.get('/', shopsController.getAllShops);
router.post('/', shopsController.postNewShop);

module.exports = router;