const Order = require('../models/orderModels');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
    console.log(order)
  } catch (error) {
    res.status(400).json({ 
        message: error.message
    });
  }
};



// exports.getAllOrders = async (req, res) => {
//     console.log("YESSSIIIIRRRRR")
//   try {
//     const orders = await Order.find();
//     res.json(orders);
//     console.log(res.json)
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
