if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready();
}

function ready(){
    const remove = document.getElementsByClassName("remover")
    for(var i = 0; i < remove.length; i++){
        remove[i].addEventListener("click", removeProduto)
    }

    const quantidadeInputs = document.getElementsByClassName("input_quantidade")
    for (var i = 0; i < quantidadeInputs.length; i++){
        quantidadeInputs[i].addEventListener("change", updateTotal)
    }

    const adicionarButtons = document.getElementsByClassName("comprar_agora")
    for (var i = 0; i < adicionarButtons.length; i++){
        adicionarButtons[i].addEventListener("click", adicionarProduto)
    }
}

function adicionarProduto(event){
    const button = event.target
    const produtosInfos = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    const produtoImagem = produtosInfos.getElementsByClassName("imagemProduto")[0].src
    const produtoTitle = produtosInfos.getElementsByClassName("nome_produto")[0].innerText
    const produtopreco = produtosInfos.getElementsByClassName("precoTotal")[0].innerText
    const descontopreco = produtosInfos.getElementsByClassName("precoProduto")[0].innerText

    const produtosCardnome = document.getElementsByClassName("nome_produto")
    for (var i = 0; i < produtosCardnome.length; i++){
        if (produtosCardnome[i].innerText === produtoTitle){
            produtosCardnome[i].parentElement.parentElement.parentElement.getElementsByClassName("input_quantidade")[0].value++
            return
        }
    }

    let novoCard = document.createElement("article")
    novoCard.classList.add('carrinho')

    novoCard.innerHTML = 
    `
        <div class="card-body">
            <div class="row h-25 carrinho" id="card-carrinho">
                <div class="col-1">
                    <img class="h-25" src="${produtoImagem}" alt="${produtoTitle}">
                </div>
                <div class="col-md-5 h-25">
                    <div class="row">
                        <a href="./categorias/casa e cozinha/ventiladorPortatil.html" id="nomeProduto">
                            <label>${produtoTitle}</label>
                        </a>
                    </div>
                    <div class="row">
                        <span><del></del>${produtopreco}</span>
                        <span><strong class="verde">${descontopreco}</strong></span>
                    </div>
                </div>
                <div class="col-md-3 h-25" id="quantidade">
                    <div class="row">
                            <button type="button" class="btn bi-dash menos" id="menos"></button>
                            <input  id="result_quantidade" class="input_quantidade" value="1" min="1" readonly>
                            <button type="button" class="btn bi-plus mais" id="mais"></button>
                    </div>
                    <div class="row" id="remover">
                        <button type="reset" class="btn btn-danger remover">Remover</button>
                    </div>
                </div>
                <div class="col-md-3 text-end h-25">
                    <label id="preco">${produtopreco}</label>
                </div>
            </div>
        </div>
    `

    const cardBody = document.querySelector(".card-body div")
    cardBody.append(novoCard)

    updateTotal()
    console.log(novoCard)
}

function removeProduto(event){
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

function updateTotal(){
    let precoTotal = 0

    const produto = document.getElementsByClassName("carrinho")
    for (var i = 0; i < produto.length; i++){
        const preco = produto[i].getElementsByClassName("preco")[0].innerText.replace("R$","").replace(",", ".")
        const quantidade = produto[i].getElementsByClassName("input_quantidade")[0].value

        precoTotal += preco * quantidade
    }
    precoTotal = precoTotal.toFixed(2)
    precoTotal = precoTotal.replace(".", ",")
    document.querySelector("#card-total label").innerText = "R$" + precoTotal
}
