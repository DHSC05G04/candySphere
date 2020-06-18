// Declarando dependencias
require('dotenv').config();
const db = require('../models');
const crypto = require('crypto');
const Email = require('../configs/email');
const async = require('async');
const { Op } = require('sequelize');


const resetController = {
    generateToken: (req, res) => {
        async.waterfall([   
            function(done) {
                console.log('step 1')
                crypto.randomBytes(10, function(err, buf) {
                  var token = buf.toString('hex');
                  done(err, token);
                });
    
              },
              function(token, done) {
                  console.log('step2',token)
                  const { email } = req.body;
                  const msgReturn = 'An e-mail has been sent to ' + email + ' with further instructions.'
                  db.Usuario.findOne(
                    { where: {email: email}}).then(function(user){
                        if(!user){
                            // req.flash('error', 'No account with that email address exists.');
                            // return res.status(400).send('Email não encontrado, segue a vida '+ token);
                            req.flash('info', 'An e-mail has been sent to ' + email + ' with further instructions.');
                            return res.status(200).json("info: 'OK'");
                        } else {
                            user.resetPasswordToken = token;
                            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                            user.save();
                            done(null,token, user, msgReturn);
                            }
                        });

              },
              function(token, user, msg, done) {
                console.log('Envio Email para ' +user.email )
                let mailOptions = {
                  to: user.email,
                  from:`${process.env.EMAIL_USER}`,
                  subject: 'CRUD candySphere Password Reset',
                  text: 'You are receiving this because you (or someone else in ' + req.ip +') have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                const msgReturn = 'An e-mail has been sent to ' + user.email + ' with further instructions.'
                Email.sendMail(mailOptions, function(err) {
                    if(err){
                        console.log('Não foi possivel mandar o email: ' + err );
                        return res.status(500).send('Não foi possivel mandar o email: ' + err )
                    } else {
                        req.flash('info',msgReturn)
                        // done(err, 'done');
                        return res.status(200).send(msgReturn); 
                    }
                //   req.flash('info', 'An e-mail has been sent to ' + email + ' with further instructions.');
    
                });
              }
            ], function(err) {
              if (err) return next(err);
              res.redirect('/resetPassword');
           })},

    resetPassword: (req, res,next) => {
        // console.log('teste')
        return res.status(200).render('index', {msgUser: 'Recurso em desenvolvimento!'})
    }

}

module.exports = resetController;