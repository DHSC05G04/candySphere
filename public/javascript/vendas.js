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
    const formasPagamentoList = document.getElementById('pagamento')

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

    if(formasPagamentoList != undefined || formasPagamentoList != null) {
        const pagamentosAPI = await fetch(`${API}/forma-de-pagamento`)
        const pagamentos = await pagamentosAPI.json()

        pagamentos.forEach((formPag, index) => {
            if(index == 0) {
                formasPagamentoList.innerHTML = `
                    <option value="${formPag.descricao} id: ${formPag.id}">
                `
            } else if(formPag.ativo == 1) {
                formasPagamentoList.innerHTML += `
                    <option value="${formPag.descricao} id: ${formPag.id}">
                `
            }
        })
    }
})

async function salvarPedido() {
    const erroCliente = document.getElementById('clienteInvalido')
    const erroPagamento = document.getElementById('pagamentoInvalido')
    const cliente = document.getElementById('inputCliente')
    const pagamento = document.getElementById('inputPagamento')
    const entrega = document.getElementById('inputEntrega')
    const observacao = document.getElementById('inputObs')

    let errorCliente = false
    let errorPagamento = false
    let info = []
    
    if(cliente.value == undefined || cliente.value == null || 
        cliente.value == 'undefined' || cliente.value == 'null' || cliente.value == '') {
        erroCliente.classList.remove('hidden')
        errorCliente = true        
    } else {
        const [,CPFCliente] = cliente.value.split(' CPF: ')
        const infoClienteAPI = await fetch(`${API}/clientes?cpf=${CPFCliente}`)
        const [infoCliente] = await infoClienteAPI.json()
        if(infoCliente != undefined) {
            info.push(infoCliente.id)
            errorCliente = false
            erroCliente.classList.add('hidden')
        } else {
            erroCliente.classList.remove('hidden')
            errorCliente = true
        }        
    }

    if(pagamento.value == undefined || pagamento.value == null || 
        pagamento.value == 'undefined' || pagamento.value == 'null' || pagamento.value == '') {
        erroPagamento.classList.remove('hidden')
        errorPagamento = true
    } else {
        const [,idPagamento] = pagamento.value.split(' id: ')
        const infoPagamentoAPI = await fetch(`${API}/forma-de-pagamento/${idPagamento}`)
        const [infoPagamento] = await infoPagamentoAPI.json()
        if(infoPagamento != undefined) {
            info.push(idPagamento)
            errorPagamento = false
            erroPagamento.classList.add('hidden')
        } else {
            erroPagamento.classList.remove('hidden')
            errorPagamento = true
        }        
    }

    if(errorCliente == true || errorPagamento == true) {
        return
    }

    const formPedido = document.createElement('form')
    formPedido.setAttribute('hidden', 'true')
    formPedido.action = '/admin/vendas/concluir'
    formPedido.method = 'POST'

    let valorTotal = 0

    listaProdutos.forEach(produto => {
        const produtoId = document.createElement('input')
        produtoId.name = "produto_id[]"
        produtoId.value = produto.id
        produtoId.setAttribute('hidden', 'true')
        const produtoQtd = document.createElement('input')
        produtoQtd.name = "quantidade[]"
        produtoQtd.value = produto.qtd
        produtoQtd.setAttribute('hidden', 'true')

        formPedido.appendChild(produtoId)
        formPedido.appendChild(produtoQtd)

        valorTotal += produto.qtd * produto.valor
    })

    const valor = document.createElement('input')
    valor.name = 'valor'
    valor.value = valorTotal
    valor.pattern = '0.00'
    valor.step = '0.01'
    valor.setAttribute('hidden', 'true')

    cliente.value = info[0]
    pagamento.value = info[1]

    formPedido.appendChild(valor)
    formPedido.appendChild(cliente)
    formPedido.appendChild(pagamento)
    formPedido.appendChild(entrega)
    formPedido.appendChild(observacao)

    document.body.appendChild(formPedido)

    sessionStorage.clear()
    return formPedido.submit()
}
