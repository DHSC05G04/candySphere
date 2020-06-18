// const email = require("../../../configs/email");

const formRecovery = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const retornoReset = document.getElementById('retornoReset');
const btnRecovery = document.getElementById('recoverySubmit');
const baseUrl = window.location.origin;

 
btnRecovery.onclick = function(event){
   
    event.preventDefault();
    const userData = {
        email: emailInput.value.trim(),
    }

    if (!userData.email){
        retornoReset.innerHTML='Você precisa digitar um e-mail!';
        retornoReset.classList.add('msgErro');
        emailInput.focus()
        return;
    }

    recoverPass(userData)

};

function recoverPass(userData) {
    retornoReset.classList.remove('msgSucesso');
    retornoReset.classList.remove('msgErro');
    retornoReset.innerHTML='';
    // console.log("api call" + email)

//    formRecovery.post =('/api/v0/auth/recovery',{
//         email: email
    fetch(`${baseUrl}/api/v0/auth/recovery`, {
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(userData)

    })
    .then(function(retorno) {
        // console.log(retorno)
        const {status, statusText} = retorno;
        
        if(status ==200 || status ==201){
            retornoReset.innerHTML='<p>Um e-mail foi enviado para o endereço informado: <strong>'+ userData.email + '</strong>.</p>';
            retornoReset.classList.add('msgSucesso');
            emailInput.value = "";
            emailInput.focus();

        } else {

            retornoReset.innerHTML=`<p>Ocorreu um erro: ${status} (${statusText}</p>`;
            retornoReset.classList.add('msgErro');
            console.log(err);
        }

    }).catch(function(err) {
        retornoReset.innerHTML='<p>Ocorreu um erro: '+ err + '</p>';
        retornoReset.classList.add('msgErro');
        console.log(err);
    })
}
;
