const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');
router.get('/', controller.getProducts);

router.get('/:id', controller.getProductId);

//Ruta para eliminar una store
router.delete("/:id/delete", controller.deleteProduct)

//Ruta para editar la información de una store
router.put("/:id/update", controller.changeProduct)

//Ruta para crear una store
router.post("/", controller.postProduct)




module.exports = router;