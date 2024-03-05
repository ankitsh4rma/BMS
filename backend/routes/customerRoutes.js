const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

// Get all customers
router.get('/api/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

// Add more routes here as needed (e.g., create, update, delete customers)

module.exports = router;
