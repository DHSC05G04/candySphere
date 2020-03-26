var express = require('express');
var router = express.Router();

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

module.exports = router;