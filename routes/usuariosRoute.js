var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')
const resetController = require('../controllers/resetController')



router.get('/',(usuarioController.index));
router.post('/',(usuarioController.store));
router.put('/',(usuarioController.update));
router.delete('/',(usuarioController.delete));

router.get('/reset', resetController.resetPassword);



module.exports = router;