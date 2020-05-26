const path = require('path');
const fs = require('fs');

const adminController = {
    index: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        res.render('admin/admin', { title: 'Express', tabs: tabActive,usuario:req.session.user });
    },
    indexProdutos: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const produtos = JSON.parse(
                        fs.readFileSync(
                        path.join('database', 'produtos.json')));

        res.render('admin/produtos', { title: 'Express', tabs: tabActive , produtos,usuario:req.session.user});
    },
    indexEstoque: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

    const estoque = JSON.parse(
        fs.readFileSync(
        path.join('database', 'estoque.json')));

        res.render('admin/estoque', { title: 'Express', tabs: tabActive, estoque,usuario:req.session.user });
    },
    indexReceitas: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const receitas = JSON.parse(
                        fs.readFileSync(
                        path.join('database', 'receitas.json')));

        res.render('admin/receitas', { title: 'Express', tabs: tabActive, receitas,usuario:req.session.user });
    }
};

module.exports = adminController;