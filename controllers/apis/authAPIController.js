// Declarando dependencias
require('dotenv').config();
const crypto = require('crypto');
const async = require('async');
const moment = require('moment');
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
                        return res.status(201).json("info: 'OK'");
                    } else {
                        console.log('QRY OK')
                        user.reset_token = token;
                        user.reset_token_expires = Date.now() + 3600000; // 1 hour
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
                  text: 'Olá ' + user.funcionario.nome + '!\n\nVocê está recebendo este e-mail porque você (ou alguma outra pessoa) solicitou sua troca de senha do sistema candySphere.\n\n' +
                  'Por favor clique ou copie o link abaixo em seu navegador e siga as orientações na tela:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'Caso você desconheça esta ação ou lembrou-se de sua senha, fique tranquilo que sua senha anterior permancerá inalterada.\n\nLembre-se: Este link será válido por apenas 1h)'
                };
                const msgReturn = 'An e-mail has been sent to ' + email + ' with further instructions.'
                Email.sendMail(mailOptions, function(err) {
                    if(err){
                        console.log('Não foi possivel mandar o email: ' + err );
                        return res.status(500).send('Não foi possivel mandar o email: ' + err )
                    } else {
                        req.flash('info',msgReturn)
                        // done(err, 'done');
                        return res.status(201).send(msgReturn); 
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
    },

    getUserByToken: async function (req,res,next){
        const {token} = req.params;
        if(!token){
            return res.status(400).json("err: 'No token found on request!'")
        } else {
            console.log('TOKEN: ' + token)
            try{
                const userNotExpired = await db.Usuario.findOne(
                    {
                        where:{
                            reset_token_expires: {
                            [Op.gte]: new Date() + 300000 // tolerancia de 5 minutos
                        },
                        reset_token: token

                }})
                return res.status(200).json(userNotExpired);
            } catch(err) {
                return res.status(400).json(error);     
            }
    }
    }

}

module.exports = authAPIController;