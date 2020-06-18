// Declarando dependencias
require('dotenv').config();
const crypto = require('crypto');
const async = require('async');
const { Op } = require('sequelize');

const db = require('../../models');
const Email = require('../../configs/email');

const authAPIController = {
    generateToken: (req, res) => {
        try{
        async.waterfall([   
            function(done) {
                console.log('step 1')
                crypto.randomBytes(10, function(err, buf) {
                  var token = buf.toString('hex');
                  done(err, token);
                });
    
              },
              function(token, done) {
                const { email } = req.body;
                console.log('step2',token,email)
                const msgReturn = 'An e-mail has been sent to ' + email + ' with further instructions.'
                db.Usuario.findOne({
                    include: [{
                        association: 'funcionario',
                        attributes: ['nome', 'email', 'avatar','telefone'],
                        where: {
                            email: email
                        }
                    }]
                }).then(function(user){
                    if(!user){
                        // req.flash('error', 'No account with that email address exists.');
                        // return res.status(400).send('Email não encontrado, segue a vida '+ token);
                        req.flash('info', 'An e-mail has been sent to ' + email + ' with further instructions.');
                        return res.status(200).json("info: 'OK'");
                    } else {
                        console.log('QRY OK')
                        user.resetPasswordToken = token;
                        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                        user.save();
                        done(null,token, user, msgReturn);
                        }
                    });
              },
              function(token, user, msg, done) {
                  const email = user.funcionario.email ;
                console.log('Envio Email para ' + email )
                let mailOptions = {
                  to: email,
                  from:`candySphere Password Recovery <${process.env.EMAIL_USER}>`,
                  subject: '[candySphere] Recuperação de senha',
                  text: 'You are receiving this because you (or someone else in ' + req.ip +') have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                const msgReturn = 'An e-mail has been sent to ' + email + ' with further instructions.'
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
              res.json(err);
           })
        } catch(err) {
            return res.status(500).json(err);
        }
        },
        

    resetPassword: (req, res,next) => {
        // console.log('teste')
        return res.status(200).render('index', {msgUser: 'Recurso em desenvolvimento!'})
    }

}

module.exports = authAPIController;