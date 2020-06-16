// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {

    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      console.log('REQ.USER: ' + req.user.funcionario.nome);
      console.log('REQ.SESSION: ' + req.session.id);
      res.locals.user = req.session.user;
      return next();
    }
    // If the user isn't' logged in, redirect them to the login page
    console.log('NO SESSION')
    return res.redirect("/");
  };
  