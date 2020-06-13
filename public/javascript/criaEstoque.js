const API_BASE = 'http://localhost:3000/api/v0'
const estoqueView = document.getElementById('estoqueView')
const listaTipos = document.getElementById('tipos')
const inputTipos = document.getElementById('inputTipo')
const listaUnidades = document.getElementById('unidades')
const formulario = document.getElementById('Visualizacao')
const vendavel = document.getElementById('vendavel')

window.onload = async function() {
    const tiposAPI = await fetch(`${API_BASE}/tipos`)
    const tipos = await tiposAPI.json()

    console.log(tipos)

    tipos.forEach(tipo => {
        listaTipos.innerHTML += `
            <option value="${tipo.tipo} id: ${tipo.id}">
        `        
    });

    atualizaUnidades()
    return
}

inputTipos.addEventListener('change', async function () {
    const [,novoTipoId] = inputTipos.value.split(' id: ')

    atualizaUnidades(novoTipoId)
    return
})

formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    const dataLists = document.getElementsByClassName('dataListComponent')
    for (i = 0; i < dataLists.length; i++) {
        const [, id] = dataLists[i].value.split(" id: ")
        dataLists[i].value = id
    }

    const inputs = Array.from(formulario.elements)
    inputs.forEach(element => {
        if((element.value == '' || element.value == 'undefined' || element.value == undefined) &&
            element.type != 'submit' && element.type != 'button') {
            element.disabled = true
        }
    })

    return formulario.submit()
}, false)

async function atualizaUnidades(idTipo) {
    const unidadesAPI = await fetch(`${API_BASE}/unidadesportipo?tipo_id=${idTipo}`)
    const unidades = await unidadesAPI.json()
    
    unidades.forEach((unidade, index) => {
        if(index == 0) {
            return listaUnidades.innerHTML = `
                <option value="${unidade.medida.unidade} id: ${unidade.medida.id}">
            `
        } else {
            return listaUnidades.innerHTML += `
                <option value="${unidade.medida.unidade} id: ${unidade.medida.id}">
            `
        }
    })
}

async function excluirItem(id) {
    const locationRef = window.location.href.split('/')

    await fetch(`${API_BASE}/estocaveis/${id}`, {
        method: 'delete'
    })
    
    if(locationRef[locationRef.length-1] != 'estoque') {
        return window.location.replace(document.referrer);
    } else {
        return window.location.reload();
    }
}