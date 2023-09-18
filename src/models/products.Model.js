const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductsSchema = new Schema({
    Product: {
        type: String,
        required: true,
     },
    name: {
        type: String,
        required: true,
      },
    img: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    stock: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
});

const ProductModels = mongoose.model('products', ProductsSchema);

module.exports = ProductModels;