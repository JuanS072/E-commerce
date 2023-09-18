const mongoose = require('mongoose');
const {Schema} = mongoose;
const OrdersSchema = new Schema({
    Product: {
        type: String,
        required: true,
     },
    name: {
        type: String,
        required: true,
      },
    color: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    cliente: {
        type: String,
        required: true,
      },
      Valor: {
        type: String,
        required: true,
      },
});

const OrdersModels = mongoose.model('orders', OrdersSchema);

module.exports = OrdersModels;