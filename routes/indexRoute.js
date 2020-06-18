const express = require('express');
const router = express.Router();
const authControllers =require('../controllers/authControllers')
const passport = require("../configs/passport");
const isAuthenticated = require('../middlewares/isAuthenticated');

/* GET index page. */
router.get('/', function(req, res, next) {
  // let tabActive = {homeAct: "active",
  //                 adminAct: "inactive",
  //                 financeiroAct: "inactive",
  //                 clientesAct: "inactive",
  //                 funcionariosAct: "inactive",
  //                 pdvAct: "inactive"};
  // res.render('index', {tabs: tabActive });
  return res.redirect('/home');
});

router.get('/index', function(req, res, next) {
  return res.render('index', {msgUser: req.flash('error') });
});

router.post('/', isAuthenticated, function(req, res) {
  res.redirect('/home');
});

router.get("/logar")
// router.post("/logar",authControllers.store)
router.post("/logar", 
  passport.authenticate("local", {
                                  failureFlash: 'Usuario ou senha inválidos!',
                                  session: true,
                                  successRedirect: '/home',
                                  failureRedirect: '/index',
                                  msgUser:  'Usuario ou senha inválidos!'
                                })

  , function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  // res.render('home');
  const tabActive = {
    homeAct: "active",
    operacaoAct: "inactive",
    financeiroAct: "inactive",
    clientesAct: "inactive",
    funcionariosAct: "inactive",
    pdvAct: "inactive"
  };
  res.render('home', { title: 'Express', tabs: tabActive,usuario: req.user });
});

router.get("/logout",(req,res) => {
  req.logout();
  res.redirect("/");

  req.session.user = {
    id: "",
    login: "",
    acesso:'',
}
  console.log(req.session.user)
  res.redirect('/')

})


module.exports = router;