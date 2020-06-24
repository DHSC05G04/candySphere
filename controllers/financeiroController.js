const Sequelize = require('sequelize')
const dbConfig = require('../configs/database')
const moment = require('moment')

const path = require('path');
const fs = require('fs');

const db = new Sequelize(dbConfig)

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
  vendas: async (req, res) => {
    let tabActive = {
      homeAct: "inactive",
      operacaoAct: "inactive",
      financeiroAct: "active",
      clientesAct: "inactive",
      funcionariosAct: "inactive",
      pdvAct: "inactive"
    };

    const salesInfo = await db.query(`SELECT nome, SUM(comandas.quantidade) as qtd FROM estocaveis
            INNER JOIN produtos ON estocaveis.id = produtos.estoque_id
            INNER JOIN comandas ON produtos.id = comandas.produto_id
            GROUP BY nome`, {
        type: db.QueryTypes.SELECT
    });

    let sales = {
      label: [],
      data: []
    }
    
    salesInfo.forEach(item => {
      sales.label.push(item.nome)
      sales.data.push(item.qtd)
    });

    const [salesData] = await db.query(`SELECT SUM(total) as vendas, COUNT(total) as numPedidos, AVG(total) as tktMedio FROM pedidos`, {
      type: db.QueryTypes.SELECT
    });

    salesData.vendas = parseFloat(salesData.vendas).toFixed(2)
    salesData.tktMedio = parseFloat(salesData.tktMedio).toFixed(2)

    console.log(sales)

    res.render('relatorios/viewVendas', {
      title: 'Express',
      tabs: tabActive,
      sales,
      salesData,
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