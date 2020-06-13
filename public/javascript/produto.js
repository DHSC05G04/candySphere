const API_BASE = 'http://localhost:3000/api/v0'

function editarValor(id) {
    const produto = document.getElementById(`valorProduto-${id}`)
    const botoes = document.getElementById(`prodBtn-${id}`)
    const selecao = dadosProdutos.find(item => item.id == id)

    produto.innerHTML = `
        R$ <input class="dataInput" type="number" placeholder="${selecao.valor}" pattern="^\d+(?:\.\d{1,2})?$" step="0.01" name="valor">
    `

    botoes.innerHTML = `
        <button type="button" class="material-icons" onClick="salvaValor(${id})">save</button>
        <button type="button" class="material-icons" onClick="cancelaEdicao(${id})">clear</button>
    `
}

function cancelaEdicao(id) {
    const produto = document.getElementById(`valorProduto-${id}`)
    const botoes = document.getElementById(`prodBtn-${id}`)
    const selecao = dadosProdutos.find(item => item.id == id)

    produto.innerHTML = `
    R$ ${selecao.valor}
    `

    botoes.innerHTML = `
        <button type="button" class="material-icons" onClick="editarValor(${id})">create</button>
    `
}

async function salvaValor(id) {
    const inputParent = document.getElementById(`valorProduto-${id}`)
    const valor = inputParent.firstChild.nextSibling.value
    await fetch(`${API_BASE}/produtos/${id}?valor=${valor}`, {
        method: 'put'
    })
    return window.location.reload()
}