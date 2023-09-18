const controller = {};
const connection = require('../dbConnect/connect');
const ProductModel = require('../models/products.Model');
const OrdersModel = require('../models/orders.Model');
const ClientsModel = require('../models/clientes.Model');

/*---------------------Products------------------------------ */
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
    const { id } = req.params; //id de la Product
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
  
  module.exports.postProduct = async (req, res) => {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send(newProduct);
  };

  /*---------------------Orders------------------------------ */
  module.exports.getOrders = async (req, res) => {
    let orders = await OrdersModel.find();
    console.log(orders);
    res.send(orders);
  };

  module.exports.getOrderId = async (req, res) => {
    const { id } = req.params;
    const order = await OrdersModel.findById(id);
    order.toJSON().isOpen;
    res.json(order);
  };

  module.exports.deleteOrder = async (req, res) => {
    const { id } = req.params; //id de la orden
    const order = await OrdersModel.findByIdAndDelete(id);
    order.save();
    return res.json(order);
  };

  module.exports.changeOrder = async (req, res) => {
    const { id } = req.params;
    const order = await OrdersModel.findByIdAndUpdate(id, req.body, { new: true });
    order.save();
    return res.json(req.body);
  };
  
  module.exports.postOrder = async (req, res) => {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send(newOrder);
  };
  /*---------------------Clients------------------------------ */

  module.exports.postSumClients = async (req, res) => {
    let clients = await ClientsModel.find();
    clients[0].cantidad + 1;
    await clients.save();
    res.send(clients);
  };

  module.exports.postRestClients = async (req, res) => {
    let clients = await ClientsModel.find();
    clients[0].cantidad - 1;
    await clients.save();
    res.send(clients);
  };