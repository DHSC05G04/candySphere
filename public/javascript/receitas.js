const API_BASE = 'http://localhost:3000/api/v0'
const receitaView = document.getElementById('receitaView')

function editarReceitas() {
    receitaView.innerHTML = `
        <form action="/admin/receitas/${dadosReceita.id}?_method=put" id="Receita" method="POST" enctype="multipart/form-data">
            <section class="itemViewHeader">
                <span class="material-icons">menu_book</span><h2>Receita<h2>                
            </section>
            <section class="itemViewMain">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}>
                    <input class="dataInput" type="file" name="foto">
                    <h3><label>Nome: </label><input class="dataInput" type="text" maxlimit="3000" name="nome" placeholder=${dadosReceita.fabricado.nome}></h3>
                </div>
                <div class="itemViewBody">
                    <div class="receitaInfo">
                        <h4 class="sectionDivider">Informações</h4>
                        <p><b>Descrição: </b><input class="dataInput" type="text" maxlimit="3000" name="descricao" placeholder=${dadosReceita.descricao}></p>
                        <p><b>Tempo de preparo: </b><input class="dataInput" type="number" name="tempo_preparo" placeholder=${dadosReceita.tempo_preparo}></p>
                        <p><b>Rendimento: </b><input class="dataInput" type="number" name="rendimento" placeholder=${dadosReceita.rendimento}></p>
                    </div>
                    <div id="infoIngredientes" class="receitaInfo">
                        <h4 class="sectionDivider">Ingredientes</h4>
                    </div>
                    <div id="infoInstrucoes" class="receitaInfo">
                        <h4 class="sectionDivider">Instruções de preparo</h4>
                    </div>
                </div>
            </section>
            <section class="itemViewFooter">
                <button type="submit" class="material-icons">save</button><button class="material-icons" onclick="retornarReceitas()">clear</button>
            </section>
        </form>
    `
    

    const ingredientes = document.getElementById('infoIngredientes')
    const instrucoes = document.getElementById('infoInstrucoes')

    dadosReceita.ingredientes.forEach(async (ingrediente, index) => {
        ingredientes.innerHTML += `
            <input class="dataInput" type="number" name="ingredientes[${index}][id]" value="${ingrediente.id}" hidden>
            <p>Quantidade: <input class="dataInput" type="number" name="ingredientes[${index}][quantidade]"> 
            Unidade: <input class="dataInput number" list="unidades${index}" name="ingredientes[${index}][unidade][unidade]"><datalist id="unidades${index}"></datalist>
            Ingrediente: <input list="ingredientes${index}" class="dataListComponent dataInput" name="ingredientes[${index}][componente][nome]"><datalist id="ingredientes${index}"></datalist></p>
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
            <p><b>Instrução ${index+1}: </b><input class="dataInput" type="text" maxlimit="3000" name="instrucoes[${index}][instrucao]">
            <input class="dataInput" type="text" maxlimit="3000" name="instrucoes[${index}][id]" value=${instrucao.id} hidden>
            </p>
        `
    })

    const formulario = document.getElementById('Receita')
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

            formulario.appendChild(ingredienteId)
        }

        const inputs = Array.from(formulario.elements)
        inputs.forEach(element => {
        if((element.value == '' || element.value == undefined) && element.type != 'submit') {
            element.disabled = true
        }
    })

    formulario.submit()
    }, false)
}

function retornarReceitas() {
    receitaView.innerHTML = `
        <article id="Receita">
            <section class="itemViewHeader">
                <span class="material-icons">menu_book</span><h2>Receita<h2>                
            </section>
            <section class="itemViewMain">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}>
                    <h3>${dadosReceita.fabricado.nome}</h3>
                </div>
                <div class="itemViewBody">
                    <div class="receitaInfo">
                        <h4 class="sectionDivider">Informações</h4>
                        <p>${dadosReceita.descricao}</p>
                        <p><b>Tempo de preparo: </b>${dadosReceita.tempo_preparo}</p>
                        <p><b>Rendimento: </b>${dadosReceita.rendimento}</p>
                    </div>
                    <div id="infoIngredientes" class="receitaInfo">
                        <h4 class="sectionDivider">Ingredientes</h4>
                    </div>
                    <div id="infoInstrucoes" class="receitaInfo">
                        <h4 class="sectionDivider">Instruções de preparo</h4>
                    </div>
                </div>
            </section>
            <section class="itemViewFooter">
                <button class="material-icons" onclick="editarReceitas()">create</button><button class="material-icons">delete</button>
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