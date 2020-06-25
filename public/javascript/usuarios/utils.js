const API_BASE = API;
let selNivelAcesso = document.getElementById('acesso');

const requestOpts = {
    method:'GET',
    mode: 'cors',
    redirect: 'follow'
};

fetch(`${API_BASE}/nivelAcesso`, requestOpts)
    .then(
        function(resNivelAcesso){
            if(resNivelAcesso.status != '200') {
                console.warn('Bayblade - Status Code: ' + resNivelAcesso.status + '(' + resNivelAcesso.statusText+')')
                console.log(resNivelAcesso)
            return ;
            }
        
        resNivelAcesso.json().then(function(data){
            let option;
            console.log(data,data.length)
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i].descricao;
                option.value = data[i].id;
                selNivelAcesso.add(option);

            }
        });
    }
)
.catch(function(err){
    console.error('Fetch errror - ' + err)
});}
