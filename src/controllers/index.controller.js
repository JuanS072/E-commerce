const controller = {};
const connection = require('../dbConnect/connect');
const ProductModel = require('../models/products.Model');

module.exports.getProducts = async (req, res) => {
    await connection();
    let products = await ProductModel.find();
    console.log(products);
    res.send(products);
  };

  module.exports.getProductId = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    product.toJSON().isOpen;
    res.json(product);
  };

  module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params; //id de la store
    const product = await ProductModel.findByIdAndDelete(id);
    product.save();
    return res.json(product);
  };

  module.exports.changeProduct = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    product.save();
    return res.json(req.body);
  };
  
  //Crear STORE
  module.exports.postProduct = async (req, res) => {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send(newProduct);
  };