const express = require('express');
const { getProducts } = require('../controllers/productController');
const router = express.Router();

// Define the route for getting all products
router.get('/', getProducts);

module.exports = router;
