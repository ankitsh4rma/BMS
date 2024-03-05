// src/components/InventoryManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios.get('/api/inventory')
            .then(response => setInventory(response.data))
            .catch(error => console.error('Error fetching inventory:', error));
    }, []);

    return (
        <div>
            <h2>Inventory Management</h2>
            <ul>
                {inventory.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.stock} in stock
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryManagement;
