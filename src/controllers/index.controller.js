const controller = {};
const connection = require('../dbConnect/connect');
const ProductModel = require('../models/products.Model');
const OrdersModel = require('../models/orders.Model');
const ClientsModel = require('../models/clientes.Models');

/*---------------------Products------------------------------ */
module.exports.getProducts = async (req, res) => {
  try{
    await connection();
    let products = await ProductModel.find();
    console.log(products);
    res.send(products);
  } catch (error) {
    console.error(error);
  }
  };

  module.exports.getProductId = async (req, res) => {
    try{
    await connection();
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    product.toJSON().isOpen;
    res.json(product);
  } catch (error) {
    console.error(error);
  }
  };

  module.exports.deleteProduct = async (req, res) => {
    try{
    await connection();
    const { id } = req.params; //id de la Product
    const product = await ProductModel.findByIdAndDelete(id);
    product.save();
    return res.json(product);
  } catch (error) {
    console.error(error);
  }
  };

  module.exports.changeProduct = async (req, res) => {
    try{
    await connection();
    const { id } = req.params;
    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    product.save();
    return res.json(req.body);
  } catch (error) {
    console.error(error);
  }
  };
  
  module.exports.postProduct = async (req, res) => {
    try{
    await connection();
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    console.error(error);
  }
  };

  /*---------------------Orders------------------------------ */
  module.exports.getOrders = async (req, res) => {
    try {
      await connection();
      let orders = await OrdersModel.find();
      console.log(orders);
      res.send(orders);
    } catch (error) {
      console.error(error);
    }
    
  };

  module.exports.getOrderId = async (req, res) => {
    try{
    await connection();
    const { id } = req.params;
    const order = await OrdersModel.findById(id);
    order.toJSON().isOpen;
    res.json(order);
  } catch (error) {
    console.error(error);
  }
  };

  module.exports.deleteOrder = async (req, res) => {
    await connection();
    try{
    const { id } = req.params; //id de la orden
    const order = await OrdersModel.findByIdAndDelete(id);
    order.save();
    return res.json(order);
  } catch (error) {
    console.error(error);
  }
  };

  module.exports.changeOrder = async (req, res) => {
    try{
    await connection();
    const { id } = req.params;
    const order = await OrdersModel.findByIdAndUpdate(id, req.body, { new: true });
    order.save();
    return res.json(req.body);
  } catch (error) {
    console.error(error);
  }
  };
  
  module.exports.postOrder = async (req, res) => {
    try{
    await connection();
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send(newOrder);
  } catch (error) {
    console.error(error);
  }
  };
  /*---------------------Clients------------------------------ */

  module.exports.getClients = async (req, res) => {
    try {
      await connection();
   let clients = await ClientsModel.find();
    console.log(clients);
    res.send(clients);

  } catch (error) {
    console.error(error);
  }
  };

  module.exports.postClients = async (req, res) => {
    try {
    await connection();
    let newClients = await ClientsModel(req.body);
    await newClients.save();
    res.send(newClients);
  } catch (error) {
    console.error(error);
  }
  };