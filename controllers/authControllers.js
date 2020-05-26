const {
    Usuario
} = require('../models')
const bcrypt = require("bcrypt");

const authController = {

    store: async (req, res) => {

        const {
            nome_usuario,
            senha
        } = req.body;

        const usuario = await Usuario.findOne({
            nome_usuario
        })
        const id = usuario.dataValues.id
        const login = usuario.dataValues.nome_usuario
        const senhaHash = usuario.dataValues.senha
        const acesso = usuario.dataValues.acesso

        if (login != nome_usuario) {
            return res.status(400).send('<h1 style="background-color: red;" >usuario ou senha invalido<h1>')
        }

        if (!bcrypt.compareSync(senha,senhaHash)) {
            return res.status(400).send('<h1 style="background-color: red;" >usuario ou senha invalido<h1>')
        }


        req.session.user = {
            id: id,
            login: login,
            acesso:acesso,
        }
        console.log(req.session.user)
        res.redirect('/home')

    }

}

module.exports = authController;