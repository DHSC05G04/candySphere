const API_BASE = 'http://localhost:3000/api/v0'
const receitaView = document.getElementById('receitaView')

function editarReceitas() {
    console.log(receitaView)
    receitaView.innerHTML = `
        <form action="/admin/receitas/${dadosReceita.id}?_method=put" id="Receita" method="POST" enctype="multipart/form-data">
            <section class="itemViewHeader">
                <span class="material-icons">menu_book</span><span>Receita</span>                
            </section>
            <section class="itemViewBody">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}  style="width:120px">
                    <input type="file" name="foto">
                    <h3><label>Nome: </label><input type="text" maxlimit="3000" name="nome" value=${dadosReceita.fabricado.nome}></h3>
                </div>
                <div class="itemViewBody">
                    <div class="receitaInfo">
                        <h4 class="sectionDivider">Informações</h4>
                        <p><label>Descrição: </label><input type="text" maxlimit="3000" name="descricao" value=${dadosReceita.descricao}></p>
                        <p><b>Tempo de preparo: </b><input type="number" name="tempo_preparo" value=${dadosReceita.tempo_preparo}></p>
                        <p><b>Rendimento: </b><input type="number" name="rendimento" value=${dadosReceita.rendimento}></p>
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
    /*

    // const ingredientes = document.getElementById('infoIngredientes')
    // const instrucoes = document.getElementById('infoInstrucoes')

    // dadosReceita.ingredientes.forEach(ingrediente => {
    //     ingredientes.innerHTML += `
    //         <p>${ingrediente.quantidade} ${ingrediente.unidade.unidade} ${ingrediente.componente.nome}</p>
    //     `        
    })

    dadosReceita.instrucoes.forEach((instrucao, index) => {
        instrucoes.innerHTML += `
            <p>${index+1}. ${instrucao.instrucao}</p>
        `
    }) */
}

function retornarReceitas() {
    receitaView.innerHTML = `
        <article id="Receita">
            <section class="itemViewHeader">
                <span class="material-icons">menu_book</span><span>Receita</span>                
            </section>
            <section class="itemViewBody">
                <div class="itemViewDesc">
                    <img src=${dadosReceita.foto}  style="width:120px">
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