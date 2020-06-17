var express = require('express');
var router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);
/* GET pdv page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  operacaoAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "active"};
  res.render('pdv', { title: 'Express', tabs: tabActive });
});

module.exports = router;