const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');


/*---------------------Products------------------------------ */
router.get('/Products/', controller.getProducts);

router.get('/Products/Product/:id', controller.getProductId);

router.get('/Products/types/:type', controller.getProducByTypes);

router.get('/Products/Avaliables/:stock', controller.getProductsAvaliables);

//Ruta para eliminar una store
router.delete("/Products/delete/:id", controller.deleteProduct)

//Ruta para editar la información de una store
router.put("/Products/update/:id", controller.changeProduct)

//Ruta para crear una store
router.post("/Products/new", controller.postProduct)

  /*---------------------Orders------------------------------ */
  router.get('/Ordenes/', controller.getOrders);

  router.get('/Ordenes/Orden/:id/', controller.getOrderId);
  
  //Ruta para eliminar una store
  router.delete("/Ordenes/delete/:id", controller.deleteOrder)
  
  //Ruta para editar la información de una store
  router.put("Ordenes/update/:id", controller.changeOrder)
  
  //Ruta para crear una store
  router.post("/Ordenes/new", controller.postOrder)
  
  /*---------------------Clients------------------------------ */
  router.get("/Clientes/", controller.getClients)

  router.post("/Clientes/new/", controller.postClients)

/*---------------------UserAdmin------------------------------ */

router.post('/login', controller.login);



module.exports = router;