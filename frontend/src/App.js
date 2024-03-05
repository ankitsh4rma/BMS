import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import CustomerList from './components/CustomerList';
import InventoryManagement from './components/InventoryManagement';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Product List</Link></li>
                            <li><Link to="/order">Place Order</Link></li>
                            <li><Link to="/customers">Customer List</Link></li>
                            <li><Link to="/inventory">Inventory Management</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<h2>Welcome to the Bakery Management System</h2>} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/order" element={<OrderForm />} />
                        <Route path="/customers" element={<CustomerList />} />
                        <Route path="/inventory" element={<InventoryManagement />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
