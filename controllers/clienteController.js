const fs = require('fs');
const path = require('path');

const clienteController = {
    listarCliente: (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "active",
            funcionariosAct: "inactive",
            pdvAct: "inactive"
        };

        const dataCliente = JSON.parse(
            fs.readFileSync(
                path.join('database', 'clientes.json')));
                res.render('clientes/listar', {
            title: 'Express',
            tabs: tabActive,
            clientes: dataCliente
        });
    }

}

module.exports = clienteController;