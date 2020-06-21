const path = require('path');
const fs = require('fs');

const financeiroController = {
  index: (req, res, next) => {
    let tabActive = {
      homeAct: "inactive",
      operacaoAct: "inactive",
      financeiroAct: "active",
      clientesAct: "inactive",
      funcionariosAct: "inactive",
      pdvAct: "inactive"
    };

    res.render('financeiro', {
      title: 'Express',
      tabs: tabActive,
      usuario: req.session.user,
      user: req.user
    });
  },
  vendas: (req, res) => {
    let tabActive = {
      homeAct: "inactive",
      operacaoAct: "inactive",
      financeiroAct: "active",
      clientesAct: "inactive",
      funcionariosAct: "inactive",
      pdvAct: "inactive"
    };

    const dataFinanceiro = JSON.parse(
      fs.readFileSync(
        path.join('database', 'financeiro.json')));

    res.render('relatorios/viewVendas', {
      title: 'Express',
      tabs: tabActive,
      dataFinanceiro,
      usuario: req.session.user,
      user: req.user
    });
  },
  receitas: (req, res) => {
    let tabActive = {
      homeAct: "inactive",
      operacaoAct: "inactive",
      financeiroAct: "active",
      clientesAct: "inactive",
      funcionariosAct: "inactive",
      pdvAct: "inactive"
    };

    const dataFinanceiro = JSON.parse(
      fs.readFileSync(
        path.join('database', 'financeiro.json')));

    res.render('relatorios/viewReceitasDespesas', {
      title: 'Express',
      tabs: tabActive,
      dataFinanceiro,
      usuario: req.session.user,
      user: req.user
    });
  }
}

module.exports = financeiroController;