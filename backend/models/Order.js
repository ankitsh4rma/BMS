const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    items: [
        {
            product: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
