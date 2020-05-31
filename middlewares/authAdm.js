const authAdm = (req,res,next) =>{
    if(req.session.user) {
        const {id, login, acesso} = req.session.user;
        if(acesso===1){
            return next();
        }
    } else {
        // return res.status(400).send("<h1 style = 'background: rgba(235, 85, 85, 0.863)'> Você não tem uma permisão ADM - ou a sessão foi encerrada tente fazer o login novamente - <a href ='/'>Voltar</a></h1>");
        return res.status(400).render(index2, {msgUser: "Sessão expirada, por favor logue novamente");
    }
    
}


module.exports = authAdm;