var express = require('express');
var router = express.Router();

/* GET clientes page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "active",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('clientes', { title: 'Express', tabs: tabActive });
});

module.exports = router;