const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3000/api/v0';

const adminController = {
    index: (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        res.render('admin/admin', { title: 'Express', tabs: tabActive,usuario:req.session.user });
    }
};

module.exports = adminController;
