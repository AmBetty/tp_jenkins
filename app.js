require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());
console.log(process.env.DB_URL +"/"+ process.env.DB_NAME)
mongoose.connect(process.env.DB_URL +"/"+ process.env.DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', orderRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

module.exports = app;

