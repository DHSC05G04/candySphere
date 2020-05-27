const fs = require('fs');
const path = require('path');

const funcionarioController = {
    listarFuncionario: (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };

        const dataFuncionario = JSON.parse(
            fs.readFileSync(
                path.join('database', 'funcionarios.json')));
                res.render('funcionarios', {
            title: 'Express',
            tabs: tabActive,
            funcionarios: dataFuncionario,
            usuario:req.session.user
        });
    }

}

module.exports = funcionarioController;