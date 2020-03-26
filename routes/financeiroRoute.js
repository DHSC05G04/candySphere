var express = require('express');
var router = express.Router();

/* GET financeiro page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  adminAct: "inactive",
                  financeiroAct: "active",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('financeiro', { title: 'Express', tabs: tabActive });
});

module.exports = router;