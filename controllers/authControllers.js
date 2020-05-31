const { Usuario } = require('../models')
const bcrypt = require("bcrypt");

const authController = {
   
<<<<<<< HEAD
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        console.log('SESSION_FULL' + JSON.stringify(req.session, null, 2) )
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    
=======
>>>>>>> Mensagem de login na index
    index: (req,res) => {
        console.log('REQ.SESSION:'+req.session.user)
        console.log('SESSION_FULL' + JSON.stringify(req.session, null, 2) )
        if (req.session.user === undefined ||   req.session==''){
            console.log('Sessao nao iniciada')
            let tabActive = {homeAct: "active",
                  adminAct: "inactive",
                  financeiroAct: "inactive",
                  clientesAct: "inactive",
                  funcionariosAct: "inactive",
                  pdvAct: "inactive"};
            res.render('index', { title: 'Express', tabs: tabActive });
        } else {
            console.log('Sessao OK')
            console.log(req.session.user)
            res.redirect('/home')
        }
    },


    store: async (req, res) => {

        const {
            nome_usuario,
            senha
        } = req.body;

        const usuario = await Usuario.findOne({
            where: {nome_usuario}
        })

        if (usuario) {
            const id = usuario.dataValues.id
            const login = usuario.dataValues.nome_usuario
            const senhaHash = usuario.dataValues.senha
            const acesso = usuario.dataValues.acesso

            // if (login != nome_usuario) {
            //     return res.status(400).send('<h1 style="background-color: red;" >usuario ou senha invalido<h1>')
            // }

            // if (!bcrypt.compareSync(senha,senhaHash)) {
            //     return res.status(400).send('<h1 style="background-color: red;" >usuario ou senha invalido<h1>')
            // }
            if (login != nome_usuario || !bcrypt.compareSync(senha,senhaHash)) {
<<<<<<< HEAD
<<<<<<< HEAD
                return res.status(403).render('index2', { msgUser: 'Usuario ou Senha invalido!, tente novamente'})
=======
                return res.status(400).render('index2', { msgUser: 'Usuario ou Senha invalido!, tente novamente'})
>>>>>>> Mensagem de login na index
=======
                return res.status(403).render('index2', { msgUser: 'Usuario ou Senha invalido!, tente novamente'})
>>>>>>> Mensagem de login na index
            }

            req.session.user = {
                id: id,
                login: login,
                acesso:acesso,
            }
            console.log(req.session.user)
            res.redirect('/home')
        } else {
            return res.status(400).render('index2', { msgUser: 'Usuario ou Senha invalido!, tente novamente'})
        }

    }

}

module.exports = authController;