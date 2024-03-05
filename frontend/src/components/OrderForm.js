// src/components/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send order data to the backend
        axios.post('/api/orders', { product, quantity })
            .then(response => {
                alert('Order placed successfully!');
                setProduct('');
                setQuantity('');
            })
            .catch(error => console.error('Error placing order:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place an Order</h2>
            <label>
                Product:
                <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
