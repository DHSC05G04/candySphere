var express = require('express');
var multer = require('multer');
const path = require('path');
var router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images', 'avatar'))
    },
    filename: function (req, file, cb) {

        console.log(file.filename)
        cb(null, Date.now() + "." + file.originalname.split('.').pop())
    }
})
var upload = multer({
    storage: storage
})


/* GET funcionarios page. */
router.get('/',funcionarioController.listarFuncionario);
router.post('/',upload.any(), funcionarioController.store);
router.put('/',upload.any(), funcionarioController.update);
router.delete('/:id',funcionarioController.delete);
router.get('/verFuncionario/:id',funcionarioController.verFuncionario);
router.get('/atualizar/:id',funcionarioController.modal);


module.exports = router;
