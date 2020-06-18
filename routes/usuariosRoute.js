var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')
const resetController = require('../controllers/resetController')
const isAuthenticated = require('../middlewares/isAuthenticated');


// Insira as rotas abertas neste trecho
router.get('/reset/:token', resetController.resetPassword);
router.get('/reset', function(req, res) {
    return res.render('resetPassword')
});

// Todas as rotas abaixo exigem autenticação
router.use(isAuthenticated);

router.get('/',(usuarioController.index));
router.post('/',(usuarioController.store));
router.put('/',(usuarioController.update));
router.delete('/',(usuarioController.delete));



module.exports = router;