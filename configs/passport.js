//we import passport packages required for authentication
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
//
//We will need the models folder to check passport agains
const db = require('../models');

//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "nome_usuario",
    passwordField: "senha"
  },
  function(email, password, done) {
    console.log(email)
    // When a user tries to sign in this code runs
    db.Usuario.findOne({
      include: [{
        association: 'funcionario',
        attributes: ['nome', 'email', 'avatar','telefone'],
        where: {
          email: email
        }
      }]
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        console.log("Incorrect email.");
        return done(null, false, {
          message: "Incorrect email.",
          msgUser: 'Usuario ou Senha invalido!, tente novamente'
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        console.log("Incorrect pass.")
        return done(null, false, {
          message: "Incorrect password.",
          msgUser: 'Usuario ou Senha invalido!, tente novamente'
        });

      }
      // If none of the above, return the user
      console.log(dbUser)
      return done(null, dbUser);
    });
  }
));
//
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
//
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
//
// Exporting our configured passport
module.exports = passport;
