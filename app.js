require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
// mongoose.connect(process.env.DB_URL +"/"+ process.env.DB_NAME, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use('/api', orderRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
app.use(bodyParser.json());

const orders = []; // Stockage des contacts en mémoire

app.get('/', (req, res) => {
    res.send('Welcome to the Contact Manager API');
});

app.get('/orders', (req, res) => {
    res.status(200).json(orders);
});

app.post('/orders', (req, res) => {
    const { date, client, numeroProduit } = req.body;
    if (!date || !client || !numeroProduit) {
        return res.status(400).send({ message: "All fields are required" });
    }
    const newOrder = { id: orders.length + 1, date, client, numeroProduit };
    orders.push(newOrder);
    res.status(201).send(newOrder);
});


module.exports = app;

