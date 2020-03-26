var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  let tabActive = {homeAct: "inactive",
                  adminAct: "active",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('admin', { title: 'Express', tabs: tabActive });
});

module.exports = router;