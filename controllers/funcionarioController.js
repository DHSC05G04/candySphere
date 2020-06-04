const fs = require('fs');
const path = require('path');
 const fetch = require('node-fetch');
const API_BASE ='http://localhost:3000/api/v0';
const funcionarioController = {
    listarFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };

        // const dataFuncionario = JSON.parse(
        //     fs.readFileSync(
        //         path.join('database', 'funcionarios.json')));

        try {
            const funcionarioAPI = await fetch(`${API_BASE}/funcionarios`);
            const funcionarios = await funcionarioAPI.json();
           
            
         
           return res.render('funcionarios', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: funcionarios,
                usuario:req.session.user
            });
            
        } catch (error) {
            return res.send(error)            
        }
         
    },
    verFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };
        try {
            
            const {id} = req.params
            const funcionarioAPI = await fetch(`${API_BASE}/funcionarios/${id}`);
                const funcionario = await funcionarioAPI.json();
                const usuarioAPI = await fetch(`${API_BASE}/usuarios/${id}`);
                const usuarioCadastrado = await usuarioAPI.json();
                    if(usuarioCadastrado.length <=0){
                        console.log("não tem cadastro")
                    }else{
                        console.log(usuarioCadastrado)
                    }
                   
                    res.render('funcionario/funcionarioView', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: funcionario,
                usuario:req.session.user,
                usuarioCadastrado
            });
        } catch (error) {
            return res.send(error)
        }
       
    },

}

module.exports = funcionarioController;