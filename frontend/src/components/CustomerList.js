import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerList.css'; // Add this line for styling

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/api/customers')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <div className="customer-list-container">
            <h2>Our Customers</h2>
            <div className="customers">
                {customers.map(customer => (
                    <div key={customer._id} className="customer-card">
                        <h3>{customer.name}</h3>
                        <p>Email: {customer.email}</p>
                        <p>Phone: {customer.phone}</p>
                        <p>Address: {customer.address}</p>
                    </div>
                ))}
            </div>
            <div className="bakery-photos">
                <h2>Our Bakery</h2>
                <div className="photos">
                    <img src="/Users/ankitsharma/Documents/Bakery Management system/frontend/public/Bakery-Items.png" alt="Bakery 1" />
                    <img src="/Users/ankitsharma/Documents/Bakery Management system/frontend/bms1 image.jpeg" alt="Bakery 2" />
                    <img src="/Users/ankitsharma/Documents/Bakery Management system/frontend/public/bms2 image.jpeg" alt="Bakery 3" />
                </div>
            </div>
        </div>
    );
}

export default CustomerList;
