const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');


/*---------------------Products------------------------------ */
router.get('Products/', controller.getProducts);

router.get('Products/:id', controller.getProductId);

//Ruta para eliminar una store
router.delete("Products/:id/delete", controller.deleteProduct)

//Ruta para editar la información de una store
router.put("Products/:id/update", controller.changeProduct)

//Ruta para crear una store
router.post("Products/new", controller.postProduct)

  /*---------------------Orders------------------------------ */
  router.get('Orders/', controller.getOrders);

  router.get('Orders/:id', controller.getOrderId);
  
  //Ruta para eliminar una store
  router.delete("Orders/:id/delete", controller.deleteOrder)
  
  //Ruta para editar la información de una store
  router.put("Orders/:id/update", controller.changeOrder)
  
  //Ruta para crear una store
  router.post("Orders/new", controller.postOrder)
  
  /*---------------------Clients------------------------------ */
  router.put("Clients/:id/update/sum", controller.postSumClients)

  router.put("Clients/:id/update/rest", controller.postRestClients)


module.exports = router;