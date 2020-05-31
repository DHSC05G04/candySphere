const express = require('express');

 const pagamentosController = require('../../controllers/apis/pagamentosController');

const router = express.Router();

 router.get('/',pagamentosController.index);
 router.post('/',pagamentosController.store);
 router.put('/',pagamentosController.update);
 router.delete('/',pagamentosController.delete);


module.exports = router;