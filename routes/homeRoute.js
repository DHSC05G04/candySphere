var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('home', { title: 'Express', tabs: tabActive });
});

module.exports = router;