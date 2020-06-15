const API_BASE = API
let listaIng = []

window.addEventListener('load', async function() {
    const listaIngredientes = document.getElementById('ing-0')
    const ingDataList = document.getElementById('ingredientes-0')
    const ingRemButton = document.getElementById('remIng-0')
    const ingAddButton = document.getElementById('addIng')
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
})

function removeItem(event) {
    const button = event.target
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
        Quantidade: <input class="dataInput" type="number" placeholder="0" name="quantidade[]"> 
        Unidade: <input id="unIng-${newId}" class="dataInput number" list="unidades-${newId}" placeholder="Unidade" name="unidade[]"><datalist id="unidades-${newId}"></datalist>
        Ingrediente: <input id="ing-${newId}" list="ingredientes-${newId}" class="dataListComponent dataInput" placeholder="Ingrediente" name="ingrediente[]"><datalist id="ingredientes-${newId}"></datalist>
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
