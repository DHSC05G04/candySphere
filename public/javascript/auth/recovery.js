const formRecovery = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const retornoReset = document.getElementById('retonoReset');
const btnRecovery = document.getElementById('recoverySubmit');
 
formRecovery.onsubmit = function(event){
    event.preventDefault();
    const userData = {
        email: emailInput.value.trim(),
    }

    if (!userData.email){
        return;
    }

    recoverPass(userData.email)
    // emailInput.val("");
});

function recoverPass(email) {
    console.log("api call" + email)
   $.post('/api/v0/auth/recovery',{
        email: email
    }).then(function(retorno) {
        console.log(retorno)
        btnRecovery.style.display='none';
        retornoReset.innerHTML='<p>Um e-mail foi enviado para o endereço informado: <strong>'+ email + '</strong>.</p>';
        retornoReset.classList.add('msgSucesso');

    }).catch(function(err) {
        retornoReset.innerHTML='<p>Ocorreu um erro: '+ err + '</p>';
        retornoReset.classList.add('msgErro');
        console.log(err);
    })
}
;