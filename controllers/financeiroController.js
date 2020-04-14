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
      
        res.render('financeiro', { title: 'Express', tabs: tabActive, dataFinanceiro,tipoGrafico:"home"});
      },
      relatorio: (req,res) =>{
       let {relatorio} = req.query;
        let tabActive = {homeAct: "inactive",
        adminAct: "inactive",
        financeiroAct: "active",
        clientesAct: "inactive",
        funcionariosAct: "inactive",
        pdvAct: "inactive"};
       
const dataFinanceiro = JSON.parse(
              fs.readFileSync(
              path.join('database','financeiro.json')));
                if(relatorio == 'financeiro'){
                  res.render('financeiro', { title: 'Express', tabs: tabActive, dataFinanceiro,tipoGrafico:"receita-despesa"});
                }else if(relatorio == 'vendas'){
                  res.render('financeiro', { title: 'Express', tabs: tabActive, dataFinanceiro,tipoGrafico:"vendas"});
                }

        
      }
}

module.exports = financeiroController;