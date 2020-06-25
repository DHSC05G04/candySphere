const Sequelize = require('sequelize')
const dbConfig = require('../configs/database')
const moment = require('moment')

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

    res.render('relatorios/viewVendas', {
      title: 'Express',
      tabs: tabActive,
      sales,
      salesData,
      usuario: req.session.user,
      user: req.user
    });
  },
  receitas: async (req, res) => {
    let tabActive = {
      homeAct: "inactive",
      operacaoAct: "inactive",
      financeiroAct: "active",
      clientesAct: "inactive",
      funcionariosAct: "inactive",
      pdvAct: "inactive"
    };

    const despesasInfo = await db.query(`SELECT descricao, SUM(valor) as total FROM contas
            WHERE deleted_at IS NULL
            GROUP BY descricao`, {
        type: db.QueryTypes.SELECT
    });

    let despesas = {
      label: [],
      data: []
    }
    
    despesasInfo.forEach(item => {
      despesas.label.push(item.descricao)
      despesas.data.push(item.total)
    });

    const [salario] = await db.query(`SELECT SUM(salario) as folhaPag FROM funcionarios
        WHERE deleted_at IS NULL`, {
      type: db.QueryTypes.SELECT
    });

    despesas.label.push('Folha de Pagamento')
    despesas.data.push(salario.folhaPag)

    const [pedidos] = await db.query(`SELECT SUM(total) as vendas FROM pedidos WHERE deleted_at IS NULL`, {
      type: db.QueryTypes.SELECT
    });

    const [dbDespesas] = await db.query(`SELECT SUM(valor) as despesas FROM contas WHERE deleted_at IS NULL`, {
      type: db.QueryTypes.SELECT
    });

    let finData = {}
    finData.vendas = parseFloat(pedidos.vendas).toFixed(2)
    finData.despesas = parseFloat(dbDespesas.despesas).toFixed(2)

    finData.despesas = parseFloat(finData.despesas) + parseFloat(salario.folhaPag)

    finData.lucro = finData.vendas - finData.despesas
    finData.lucro = parseFloat(finData.lucro).toFixed(2)

    res.render('relatorios/viewReceitasDespesas', {
      title: 'Express',
      tabs: tabActive,
      finData,
      despesas,
      usuario: req.session.user,
      user: req.user
    });
  }
}

module.exports = financeiroController;