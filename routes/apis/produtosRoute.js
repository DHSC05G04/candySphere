const express = require('express');
const produtosController = require('../../controllers/apis/produtosControllers');

const router = express.Router();

router.get("/",produtosController.index);
  
module.exports = router;
