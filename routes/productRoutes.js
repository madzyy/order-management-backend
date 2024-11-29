const express = require('express');
const { getAllProducts, updateProductQuantity } = require('../controllers/productController');
const router = express.Router();

router.get('/products', getAllProducts);
// Reduce product quantity by ID
router.put('/products/:id/quantity', updateProductQuantity);

module.exports = router;





