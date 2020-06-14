const API_BASE = `${API}/produtos`

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

async function checkout() {
    const carrinhoFinal = []
    const carrinhoCompras = document.getElementsByClassName('itensCarrinho')
    const formCart = document.createElement('form')

    formCart.method = 'POST'
    formCart.action = '/admin/vendas'
    
    for(i = 0; i < carrinhoCompras.length; i++) {
        const itemId = document.createElement('input')
        const itemNome = document.createElement('input')
        const itemQtd = document.createElement('input')
        const itemValor = document.createElement('input')

        itemId.name = `id[]`
        itemNome.name = `nome[]`
        itemQtd.name = `qtd[]`
        itemValor.name = `valor[]`

        itemId.setAttribute('hidden', 'true')
        itemNome.setAttribute('hidden', 'true')
        itemQtd.setAttribute('hidden', 'true')
        itemValor.setAttribute('hidden', 'true')

        const itemInfo = carrinhoCompras[i].children

        itemId.value = carrinhoCompras[i].id
        itemNome.value = itemInfo[0].innerText
        itemQtd.value = itemInfo[1].firstChild.value
        itemValor.value = itemInfo[2].innerText

        formCart.appendChild(itemId)
        formCart.appendChild(itemNome)
        formCart.appendChild(itemQtd)
        formCart.appendChild(itemValor)
    }

    formCart.enctype = 'application/json'

    document.body.appendChild(formCart)

    return formCart.submit()
}

window.addEventListener('load', async () => {
    const clientsList = document.getElementById('clientes')

    if(clientsList != undefined || clientsList != null) {
        const listaAPI = await fetch(`${API}/clientes`)
        const lista = await listaAPI.json()

        lista.forEach((cliente, index) => {
            if(index == 0) {
                clientsList.innerHTML = `
                    <option value="${cliente.nome} CPF: ${cliente.cpf}">
                `
            } else {
                clientsList.innerHTML += `
                    <option value="${cliente.nome} CPF: ${cliente.cpf}">
                `
            }
        })
    }
})
