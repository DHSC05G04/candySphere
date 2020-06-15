var express = require('express');
var router = express.Router();
const authAdm = require('../middlewares/authAdm');
const isAuthenticated = require('../middlewares/isAuthenticated')

/* GET home page. */
router.get('/',isAuthenticated, function(req, res, next) {
  console.log('CB' + req.session.user)
  console.log('CB2' + req.user)
  let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('home', { title: 'Express', tabs: tabActive, user: req.user });
});

module.exports = router;