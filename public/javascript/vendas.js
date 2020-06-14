const API_BASE = 'http://localhost:3000/api/v0/produtos'

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

    produtosCarrinho.forEach(async (produto, index) => {
        const dadosAPI = await fetch(`${API_BASE}/${produto.id}`)
        const dados = await dadosAPI.json()

        if(index == 0) {
            tabelaCompras.innerHTML = `
            <tr class="itensCarrinho" id=${produto.id}>
                <td>${dados[0].itemEstoque.nome}</td>
                <td><input type="number" pattern="0" step="1" value="${produto.qtd}"></td>
                <td>${dados[0].valor}</td>
            </tr>
            `
        } else {
            tabelaCompras.innerHTML += `
            <tr class="itensCarrinho" id=${produto.id}>
                <td>${dados[0].itemEstoque.nome}</td>
                <td><input type="number" pattern="0" step="1" value="${produto.qtd}"></td>
                <td>${dados[0].valor}</td>
            </tr>
        `
        }
    })

    modalId.classList.add('mostrar');
    modalId.addEventListener('click',(e)=>{
        if(e.target.id =='fechar-tudo'){
            modalId.classList.remove('mostrar');
        };
    });
};
