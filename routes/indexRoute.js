const express = require('express');
const router = express.Router();
const authControllers =require('../controllers/authControllers')

/* GET index page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('index', { title: 'Express', tabs: tabActive });
});

router.post('/', function(req, res) {
  res.redirect('/home');
});

router.post("/logar",authControllers.store)

module.exports = router;