const path = require('path');
const fs = require('fs');

const financeiroController = {
    index: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "inactive",
                        financeiroAct: "active",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
      
        const dataFinanceiro = JSON.parse(
                              fs.readFileSync(
                              path.join('database','financeiro.json')));
      
        res.render('financeiro', { title: 'Express', tabs: tabActive, dataFinanceiro});
      }
}

module.exports = financeiroController;