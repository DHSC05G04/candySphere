var express = require('express');
var router = express.Router();

/* GET funcionarios page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "active",
                  pdvAct: "inactive"};
  res.render('funcionarios', { title: 'Express', tabs: tabActive });
});

module.exports = router;