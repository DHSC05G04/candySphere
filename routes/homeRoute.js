var express = require('express');
var router = express.Router();
const authAdm = require('../middlewares/authAdm');

/* GET home page. */
router.get('/',authAdm, function(req, res, next) {
  let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
  res.render('home', { title: 'Express', tabs: tabActive,usuario:req.session.user });
});

module.exports = router;