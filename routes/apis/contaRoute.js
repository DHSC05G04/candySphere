const express = require('express');

const contasController = require('../../controllers/apis/contasController');

const router = express.Router();

router.get('/',contasController.index);
router.post('/',contasController.store);
router.put('/',contasController.update);
router.delete('/',contasController.delete);


module.exports = router;