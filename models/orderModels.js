const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: Date,
  client: String,
  status: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
