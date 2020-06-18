var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')
const resetController = require('../controllers/resetController')

const isAuthenticated = require('../middlewares/isAuthenticated');
router.use(isAuthenticated);

router.get('/',(usuarioController.index));
router.post('/',(usuarioController.store));
router.put('/',(usuarioController.update));
router.delete('/',(usuarioController.delete));

router.get('/reset', resetController.resetPassword);
router.get('/resetTESTE', function(req, res) {
    return res.render('resetPassword')
});



module.exports = router;