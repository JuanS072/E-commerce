const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');


/*---------------------Products------------------------------ */
router.get('/', controller.getProducts);

router.get('/:id', controller.getProductId);

//Ruta para eliminar una store
router.delete("/:id/delete", controller.deleteProduct)

//Ruta para editar la información de una store
router.put("/:id/update", controller.changeProduct)

//Ruta para crear una store
router.post("/new", controller.postProduct)

  /*---------------------Orders------------------------------ */
  router.get('Ordenes/', controller.getOrders);

  router.get('Orden/:id', controller.getOrderId);
  
  //Ruta para eliminar una store
  router.delete("Orden/:id/delete", controller.deleteOrder)
  
  //Ruta para editar la información de una store
  router.put("Orden/:id/update", controller.changeOrder)
  
  //Ruta para crear una store
  router.post("Orden/new", controller.postOrder)
  
  /*---------------------Clients------------------------------ */
  router.put("Clientes/:id/update/sum", controller.postSumClients)

  router.put("Clientes/:id/update/rest", controller.postRestClients)


module.exports = router;