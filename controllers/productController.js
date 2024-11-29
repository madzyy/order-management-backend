const db = require('../models/db');

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }
};

exports.updateProductQuantity = async (req, res) => {
    const { id } = req.params; // Get product ID from the URL
    const { quantityToReduce } = req.body; // Quantity to reduce from request body
  
    try {
      // Fetch current quantity
      const [[product]] = await db.query('SELECT quantity FROM products WHERE id = ?', [id]);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      if (product.quantity < quantityToReduce) {
        return res.status(400).json({ message: 'Insufficient quantity' });
      }
  
      // Update the quantity
      const newQuantity = product.quantity - quantityToReduce;
      await db.query('UPDATE products SET quantity = ? WHERE id = ?', [newQuantity, id]);
  
      res.json({ message: 'Quantity updated successfully', newQuantity });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
