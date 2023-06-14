$(document).ready(function(){
    var result = $('#result_quantidade');
    var mais = $('#mais');


    $('.comprar_agora').click(function(e){
        e.preventDefault();
        const nomeProduto = $('#nome_produto').val();
        const imagemProduto = $('#imagemProduto').val();
        const linkProduto = $('#linkProduto').val();
        const precoProduto = $('#precoProduto').val();
        const precoTotal = $('#precoTotal').val();
        const novoItem = $(`<div class="card-body">
                                <div class="row carrinho" id="card-carrinho">
                                    <div class="col-1">
                                        <img class="h-25" src="${imagemProduto}" alt="">
                                    </div>
                                    <div class="col-md-5 h-25">
                                        <div class="row">
                                            <a href="${linkProduto}" id="nomeProduto">
                                                <label>${nomeProduto}</label>
                                            </a>
                                        </div>
                                        <div class="row">
                                            <span><del>${precoProduto}</del></span>
                                            <span><strong class="verde">${precoTotal}</strong></span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 h-25" id="quantidade">
                                        <div class="row">
                                                <button type="button" class="btn bi-dash menos" id="menos"></button>
                                                <input id="result_quantidade" name="input_quantidade" value="1" min="1" max="99" step="1" size="7" readonly>
                                                <button type="button" class="btn bi-plus mais" id="mais"></button>
                                        </div>
                                        <div class="row" id="remover">
                                            <button type="reset" class="btn btn-danger remover">Remover</button>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-end h-25">
                                        <label id="preco">${precoTotal}</label>
                                    </div>
                                </div>
                            </div>`);
        $(novoItem).appendTo('article');
        $(novoItem).fadeIn(1000);
    })

    $('.mais').click(function(){
        result.val(result.val() + mais.val())
        console.log(result.val)
    });

    $('.menos').click(function (){
        if (parseInt(result.val()) > 1){
            result.val(result.val()-1);
        }else{
            alert('Quantidade não pode ser menor que um!');
        }
    });

    $('.remover').click(function(){
        $('.carrinho').click(function(){
            $(this).parent().remove();
        });
    })
});