const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');

// Use the product routes
app.use('/api/products', productRoutes);
app.use(customerRoutes);

app.get('/', (req, res) => {
    res.send('Bakery Management System API');
});

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
