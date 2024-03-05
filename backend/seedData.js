require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust path if necessary
const Order = require('./models/Order'); // Adjust path if necessary
const Customer = require('./models/Customer'); // Adjust path if necessary

const products = [
    { name: 'Chocolate Cake', price: 15, stock: 50 },
    { name: 'Vanilla Cupcake', price: 3, stock: 100 },
    { name: 'ButterScorch ', price: 5, stock: 75 },
];

const customers = [
    { name: 'Neetesh Kumar', email: 'neetesh@example.com', phone: '123-456-7890' },
    { name: 'Dhaka', email: 'dhaka@example.com', phone: '098-765-4321' },
];

const orders = [
    { customer: 'Neetesh Kumar', items: [{ product: 'Chocolate Cake', quantity: 1 }], total: 15 },
    { customer: 'Dhaka', items: [{ product: 'Vanilla Cupcake', quantity: 5 }], total: 15 },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing data
        await Product.deleteMany({});
        await Customer.deleteMany({});
        await Order.deleteMany({});

        // Insert new data
        await Product.insertMany(products);
        await Customer.insertMany(customers);
        await Order.insertMany(orders);

        console.log('Database seeded successfully!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

seedDB();
