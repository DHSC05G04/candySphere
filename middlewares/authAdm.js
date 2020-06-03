const authAdm = (req,res,next) =>{

    const {id, login, acesso} = req.session.user;

    if(req.session!=undefined && acesso===1){
        return next();
    }else{
        return res.send("<h1 style = 'background: rgba(235, 85, 85, 0.863)'> Você não tem uma permisão ADM - ou a sessão foi encerrada tente fazer o login novamente - <a href ='/'>Voltar</a></h1>");
    }
    
}


module.exports = authAdm;