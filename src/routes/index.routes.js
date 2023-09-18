const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');
const requiredAuth = require('../middlewares/requiredAuth');


/*---------------------Products------------------------------ */
router.get('/Products/', controller.getProducts);

router.get('/Products/Product/:id', controller.getProductId);

router.get('/Products/types/:type', controller.getProducByTypes);

router.get('/Products/Avaliables/:stock', controller.getProductsAvaliables);

//Ruta para eliminar una store
router.delete("/Products/delete/:id", requiredAuth.requiredAuth, controller.deleteProduct)

//Ruta para editar la información de una store
router.put("/Products/update/:id", requiredAuth.requiredAuth, controller.changeProduct)

//Ruta para crear una store
router.post("/Products/new", requiredAuth.requiredAuth, controller.postProduct)

  /*---------------------Orders------------------------------ */
  router.get('/Ordenes/', controller.getOrders);

  router.get('/Ordenes/Orden/:id/', controller.getOrderId);
  
  //Ruta para eliminar una store
  router.delete("/Ordenes/delete/:id", requiredAuth.requiredAuth, controller.deleteOrder)
  
  //Ruta para editar la información de una store
  router.put("Ordenes/update/:id", requiredAuth.requiredAuth, controller.changeOrder)
  
  //Ruta para crear una store
  router.post("/Ordenes/new", requiredAuth.requiredAuth, controller.postOrder)
  
  /*---------------------Clients------------------------------ */
  router.get("/Clientes/", controller.getClients)

  router.post("/Clientes/new/", requiredAuth.requiredAuth, controller.postClients)

/*---------------------UserAdmin------------------------------ */

router.post('/login', controller.login);



module.exports = router;