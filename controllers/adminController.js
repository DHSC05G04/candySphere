const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const adminController = {
    index: (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        res.render('admin/admin', {
            title: 'Express',
            tabs: tabActive,
            usuario:req.session.user,
            user: req.user
         });
    }
};

module.exports = adminController;
