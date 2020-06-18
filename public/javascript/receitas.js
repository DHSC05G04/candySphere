const API_BASE = `${API}`
const receitaView = document.getElementById('receitaView')

function editarReceitas() {
    receitaView.innerHTML = `
        <form action="/admin/receitas/${dadosReceita.id}?_method=put" id="Visualizacao" method="POST" enctype="multipart/form-data">
            <section class="itemViewHeader">
                <span class="material-icons">menu_book</span><h2>Operação / Receita<h2>
            </section>
            <section class="itemViewMain">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}>
                    <input class="dataInput" type="file" name="foto">
                    <h3><label>Nome: </label><input class="dataInput" type="text" maxlimit="3000" name="nome" placeholder="${dadosReceita.fabricado.nome}"></h3>
                </div>
                <div class="itemViewBody">
                    <div class="itemInfo">
                        <h4 class="sectionDivider">Informações</h4>
                        <p><b>Descrição: </b><input class="dataInput" type="text" maxlimit="3000" name="descricao" placeholder="${dadosReceita.descricao}"></p>
                        <p><b>Tempo de preparo: </b><input class="dataInput" type="number" name="tempo_preparo" placeholder="${dadosReceita.tempo_preparo}"></p>
                        <p><b>Rendimento: </b><input class="dataInput" type="number" name="rendimento" placeholder="${dadosReceita.rendimento}"></p>
                    </div>
                    <div id="infoIngredientes" class="itemInfo">
                        <h4 class="sectionDivider">Ingredientes</h4>
                    </div>
                    <div id="infoInstrucoes" class="itemInfo">
                        <h4 class="sectionDivider">Instruções de preparo</h4>
                    </div>
                </div>
            </section>
            <section class="itemViewFooter">
                <button type="submit" class="material-icons">save</button>
                <button type="button" class="material-icons" onclick="retornar()">clear</button>
            </section>
        </form>
    `
    

    const ingredientes = document.getElementById('infoIngredientes')
    const instrucoes = document.getElementById('infoInstrucoes')

    dadosReceita.ingredientes.forEach(async (ingrediente, index) => {
        ingredientes.innerHTML += `
            <input class="dataInput" type="number" name="ingredientes[${index}][id]" value="${ingrediente.id}" hidden>
            <p>Quantidade: <input class="dataInput" type="number" placeholder="${ingrediente.quantidade}" name="ingredientes[${index}][quantidade]"> 
            Unidade: <input class="dataInput number" list="unidades${index}" placeholder="${ingrediente.unidade.unidade}" name="ingredientes[${index}][unidade][unidade]"><datalist id="unidades${index}"></datalist>
            Ingrediente: <input list="ingredientes${index}" class="dataListComponent dataInput" placeholder="${ingrediente.componente.nome}" name="ingredientes[${index}][componente][nome]" disabled><datalist id="ingredientes${index}"></datalist></p>
        `
    
        const listaUnidadesAPI = await fetch(`${API_BASE}/unidadesportipo?tipo_id=${ingrediente.componente.tipo_id}`)
        const listaUnidades = await listaUnidadesAPI.json()
        const unList = document.getElementById("unidades" + index)
        listaUnidades.forEach(un => {
            unList.innerHTML += `
                <option value="${un.medida.unidade}">
            `
        })

        const listaIngredientesAPI = await fetch(`${API_BASE}/estocaveis`)
        const listaIngredientes = await listaIngredientesAPI.json()
        const ingList = document.getElementById("ingredientes" + index)
        listaIngredientes.forEach(ing => {
            ingList.innerHTML += `
                <option value="${ing.nome} id: ${ing.id}">
            `
        })
    })

    dadosReceita.instrucoes.forEach((instrucao, index) => {
        instrucoes.innerHTML += `
            <p><b>Instrução ${index+1}: </b><textarea class="dataInput" placeholder="${instrucao.instrucao}" name="instrucoes[${index}][instrucao]"></textarea>
            <input class="dataInput" type="text" maxlimit="3000" name="instrucoes[${index}][id]" value=${instrucao.id} hidden>
            </p>
        `
    })

    const formulario = document.getElementById('Visualizacao')
    formulario.addEventListener('submit', (form) => {
        form.preventDefault()
        const ingredientesLists = document.getElementsByClassName('dataListComponent')
        for (i = 0; i < ingredientesLists.length; i++) {
            const [,itemIndex] = ingredientesLists[i].getAttribute('list').split('ingredientes')
            const [nome, id] = ingredientesLists[i].value.split(" id: ")
            ingredientesLists[i].value = nome

            const ingredienteId = document.createElement('input')
            ingredienteId.type = 'text'
            ingredienteId.name = `ingredientes[${itemIndex}][componente][id]`
            ingredienteId.value = id
            ingredienteId.setAttribute('hidden', 'true')

            formulario.appendChild(ingredienteId)
        }

        const inputs = Array.from(formulario.elements)
        inputs.forEach(element => {
        if((element.value == '' || element.value == undefined || element.value == 'undefined') && element.type != 'submit') {
            element.disabled = true
        }
    })

    formulario.submit()
    }, false)
}

function retornarReceitas() {
    receitaView.innerHTML = `
        <article id="Visualizacao">
            <section class="itemViewHeader">
                    <span class="material-icons">menu_book</span><h2>Operação / Receita<h2>
            </section>
            <section class="itemViewMain">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}>
                    <h3>${dadosReceita.fabricado.nome}</h3>
                </div>
                <div class="itemViewBody">
                    <div class="itemInfo">
                        <h4 class="sectionDivider">Informações</h4>
                        <p>${dadosReceita.descricao}</p>
                        <p><b>Tempo de preparo: </b>${dadosReceita.tempo_preparo}</p>
                        <p><b>Rendimento: </b>${dadosReceita.rendimento}</p>
                    </div>
                    <div id="infoIngredientes" class="itemInfo">
                        <h4 class="sectionDivider">Ingredientes</h4>
                    </div>
                    <div id="infoInstrucoes" class="itemInfo">
                        <h4 class="sectionDivider">Instruções de preparo</h4>
                    </div>
                </div>
            </section>
            <section class="itemViewFooter">
                <button class="material-icons" onclick="retornar()">arrow_back</button>
                <button class="material-icons" onclick="editarReceitas()">create</button>
                <button class="material-icons" onclick="excluirReceita(${dadosReceita.id})">delete</button>
            </section>
        </article>
    `

    const ingredientes = document.getElementById('infoIngredientes')
    const instrucoes = document.getElementById('infoInstrucoes')

    dadosReceita.ingredientes.forEach(ingrediente => {
        ingredientes.innerHTML += `
            <p>${ingrediente.quantidade} ${ingrediente.unidade.unidade} ${ingrediente.componente.nome}</p>
        `        
    })

    dadosReceita.instrucoes.forEach((instrucao, index) => {
        instrucoes.innerHTML += `
            <p>${index+1}. ${instrucao.instrucao}</p>
        `
    })
}

async function excluirReceita(id) {
    const locationRef = window.location.href.split('/')

    await fetch(`${API_BASE}/receitas/${id}`, {
        method: 'delete'
    })
    
    if(locationRef[locationRef.length-1] != 'receitas') {
        return window.location.replace(document.referrer);
    } else {
        return window.location.reload();
    }   
}