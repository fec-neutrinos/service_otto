const express = require('express');
const router = express.Router();
const controllers = require('../controllers/relatedProductsController');

router.get('/category/:categoryId', controllers.getProductsFromCategory);

router.post('/insertproducts', controllers.postProducts);

module.exports = router;