var express = require('express');
var router = express.Router();

/* GET pdv page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "active"};
  res.render('pdv', { title: 'Express', tabs: tabActive });
});

module.exports = router;