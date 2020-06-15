function addToCart(productId) {
    if(!sessionStorage.carrinho) {
        return sessionStorage.carrinho = JSON.stringify([{id:productId, qtd: 1}])
    } else {
        let carrinho = JSON.parse(sessionStorage.carrinho)
        for(let produto of carrinho) {
            if(produto.id == productId) {
                produto.qtd++;
                return sessionStorage.carrinho = JSON.stringify(carrinho)
            }
        };
        carrinho.push({id:productId, qtd:1})
        return sessionStorage.carrinho = JSON.stringify(carrinho)
    }
}

function iniciaModal(modalId){
    const tabelaCompras = document.getElementById('listaCompras')
    const produtosCarrinho = JSON.parse(sessionStorage.carrinho);
    console.log(produtosCarrinho)
    const API_BASE = 'http://localhost:3000/api/v0/produtos'

    produtosCarrinho.forEach(async produto => {
        const dados = await fetch(`${API_BASE}/${produto.id}`)
        const dadosObject = await dados.json()
        console.log(dadosObject)
        tabelaCompras.innerHTML += `
            <tr>
                <td>${dadosObject[0].itemEstoque.nome}</td>
                <td>${produto.qtd}</td>
                <td>${dadosObject[0].valor}</td>
            </tr>
        `
    })





    modalId.classList.add('mostrar');
    modalId.addEventListener('click',(e)=>{
    if(e.target.id =='fechar-tudo'){
        modal.classList.remove('mostrar');
    };
    });
};