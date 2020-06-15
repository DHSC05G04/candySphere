const API_BASE = API
let listaIng = []
const formulario = document.getElementById('Visualizacao')

window.addEventListener('load', async function() {
    const listaIngredientes = document.getElementById('ing-0')
    const ingDataList = document.getElementById('ingredientes-0')
    const ingRemButton = document.getElementById('remIng-0')
    const ingAddButton = document.getElementById('addIng')
    const instRemButton = document.getElementById('remInst-0')
    const instAddButton = document.getElementById('addInst')
    const listaIngAPI = await fetch(`${API_BASE}/estocaveis`)
    listaIng = await listaIngAPI.json()

    listaIng.forEach((ing, index) => {
        if(index == 0) {
            ingDataList.innerHTML = `
                <option value="${ing.nome} id: ${ing.id}">
            `
        } else {
            ingDataList.innerHTML += `
                <option value="${ing.nome} id: ${ing.id}">
            `
        }
    })

    listaIngredientes.addEventListener('change', async function(event) {
        const [,itemId] = event.target.id.split('-')
        const unidadeId = document.getElementById(`unIng-${itemId}`)
        const unDataList = document.getElementById(`unidades-${itemId}`)
        const [,ingId] = event.target.value.split(' id: ')
        const Ingrediente = listaIng.find(ing => ing.id == ingId)

        unidadeId.value = ''
        const listaUnidadesAPI = await fetch(`${API_BASE}/unidadesportipo?tipo_id=${Ingrediente.tipo_id}`)
        const listaUnidades = await listaUnidadesAPI.json()

        listaUnidades.forEach((un, index) => {
            if(index == 0) {
                unDataList.innerHTML = `
                    <option value="${un.medida.unidade} id: ${un.medida.id}">
                `
            } else {
                unDataList.innerHTML += `
                    <option value="${un.medida.unidade} id: ${un.medida.id}">
                `
            }
        })
    })

    ingRemButton.addEventListener('click', function(event){removeItem(event)})
    ingAddButton.addEventListener('click', function(event){addIngItem(event)})
    instRemButton.addEventListener('click', function(event){removeItem(event)})
    instAddButton.addEventListener('click', function(event){addInstItem(event)})
})

function removeItem(event, element="") {
    let button
    if(element == "") {
        button = event.target
    } else {
        button = element
    }
    const eleToRemove = button.parentNode
    eleToRemove.parentNode.removeChild(eleToRemove)
}

function addIngItem(event) {
    const button = event.target
    const buttonParent = button.parentNode

    let siblingsCounter = 0
    for(i = 1 ; i < buttonParent.childNodes.length; i++) {
        if(buttonParent.childNodes[buttonParent.childNodes.length - i].tagName == "P") {
            siblingsCounter = buttonParent.childNodes.length - i;
            break
        }
    }

    const [,prevSiblingId] = buttonParent.childNodes[siblingsCounter].id.split('-')
    const newId = Number(prevSiblingId) + 1

    const newElement = document.createElement('p')
    newElement.id = `ingCont-${newId}`
    newElement.innerHTML = `
        <button id="remIng-${newId}" type="button" class="material-icons addRemItem remIng-${newId}">remove</button>
        Quantidade: <input class="dataInput" type="number" placeholder="0" name="quantidade[]" required> 
        Unidade: <input id="unIng-${newId}" class="dataInput number" list="unidades-${newId}" placeholder="Unidade" name="unidade[]" required><datalist id="unidades-${newId}"></datalist>
        Ingrediente: <input id="ing-${newId}" list="ingredientes-${newId}" class="dataListComponent dataInput" placeholder="Ingrediente" name="ingrediente[]" required><datalist id="ingredientes-${newId}"></datalist>
    `

    buttonParent.insertBefore(newElement, button)

    const listaIngredientes = document.getElementById(`ing-${newId}`)
    const ingDataList = document.getElementById(`ingredientes-${newId}`)
    const ingRemButton = document.getElementById(`remIng-${newId}`)

    listaIng.forEach((ing, index) => {
        if(index == 0) {
            ingDataList.innerHTML = `
                <option value="${ing.nome} id: ${ing.id}">
            `
        } else {
            ingDataList.innerHTML += `
                <option value="${ing.nome} id: ${ing.id}">
            `
        }
    })

    listaIngredientes.addEventListener('change', async function(event) {
        const [,itemId] = event.target.id.split('-')
        const unidadeId = document.getElementById(`unIng-${itemId}`)
        const unDataList = document.getElementById(`unidades-${itemId}`)
        const [,ingId] = event.target.value.split(' id: ')
        const Ingrediente = listaIng.find(ing => ing.id == ingId)

        unidadeId.value = ''
        const listaUnidadesAPI = await fetch(`${API_BASE}/unidadesportipo?tipo_id=${Ingrediente.tipo_id}`)
        const listaUnidades = await listaUnidadesAPI.json()

        listaUnidades.forEach((un, index) => {
            if(index == 0) {
                unDataList.innerHTML = `
                    <option value="${un.medida.unidade} id: ${un.medida.id}">
                `
            } else {
                unDataList.innerHTML += `
                    <option value="${un.medida.unidade} id: ${un.medida.id}">
                `
            }
        })
    })

    ingRemButton.addEventListener('click', function(event){removeItem(event)})
}

function addInstItem(event) {
    const button = event.target
    const buttonParent = button.parentNode

    let siblingsCounter = 0
    for(i = 1 ; i < buttonParent.childNodes.length; i++) {
        if(buttonParent.childNodes[buttonParent.childNodes.length - i].tagName == "P") {
            siblingsCounter = buttonParent.childNodes.length - i;
            break
        }
    }

    const [,prevSiblingId] = buttonParent.childNodes[siblingsCounter].id.split('-')
    const newId = Number(prevSiblingId) + 1

    const newElement = document.createElement('p')
    newElement.id = `instCont-${newId}`
    newElement.innerHTML = `
        <p id="instCont-${newId}"><button id="remInst-${newId}" type="button" class="material-icons addRemItem">remove</button><b>Instrução:</b>
        <textarea class="dataInput" placeholder="Instrução" name="instrucao[]" required></textarea></p>
    `

    buttonParent.insertBefore(newElement, button)

    const instRemButton = document.getElementById(`remInst-${newId}`)

    instRemButton.addEventListener('click', function(event){removeItem(event)})
}

async function submitValidation() {
    // Elimina instruções vazias
    const instrucoes = document.getElementsByTagName('textarea')
    for(i = 0; i < instrucoes.length; i++) {
        if(instrucoes.value == '' && instrucoes.value == undefined && instrucoes.value == null &&
        instrucoes.value == 'undefined' && instrucoes.value == 'null') {
            removeItem(0, instrucoes[i])
        }
    }

    // Elimina ingredientes vazios
    const ingredientes = document.getElementsByClassName('Ing')
    for(i = 0; i < ingredientes.length; i++){
        const ingFilhos = ingredientes[i].children
        for(j = 0; j < ingFilhos.length; j++){
            if(ingFilhos[j].tagName == 'INPUT' &&
            (ingFilhos[j].value != '' && ingFilhos[j].value != undefined && ingFilhos[j].value != 'undefined'
            && ingFilhos[j].value != null && ingFilhos[j].value != 'null')) {
                break
            } else if(j == (ingFilhos.length-1)) {
                removeItem(0, ingFilhos[0])
            }
        }
    }

    let errors = {}

    // Valida se tipos e unidades batem
    const unxtipoAPI = await fetch(`${API_BASE}/unidadesportipo`)
    const unxtipo = await unxtipoAPI.json()

    const listaIngre = document.getElementsByClassName('dataListComponent')
    for(i = 0; i < listaIngre.length; i++) {
        const [,elementId] = listaIngre[i].id.split('-')
        const [,ingId] = listaIngre[i].value.split(' id: ')
        const eqUn = document.getElementById(`unIng-${elementId}`)
        const [,unId] = eqUn.value.split(' id: ')
        const ingredienteVer = listaIng.find(item => item.id == ingId)
        const tipoValidacao = ingredienteVer.tipo_id

        const valido = unxtipo.find(item => item.tipo_id == tipoValidacao && item.unidade_id == unId)
        if(valido == undefined) {
            errors.tipouni = true
        } else {
            errors.tipouni = false
        }
    }

    if(errors.tipouni == true) {
        const error = document.getElementById('tipoUnError')
        error.classList.remove('hidden')
        return
    } else {
        const error = document.getElementById('tipoUnError')
        error.classList.add('hidden')        
    }

    for(i = 0; i < listaIngre.length; i++) {
        const [,ingId] = listaIngre[i].value.split(' id: ')
        listaIngre[i].value = ingId
    }

    const listaUn = document.querySelectorAll('.dataInput.number')
    for(i = 0; i < listaUn.length; i++){
        const [,unId] = listaUn[i].value.split(' id: ')
        listaUn[i].value = unId
    }

    return formulario.submit();
}
