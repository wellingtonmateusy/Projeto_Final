$(document).ready(function(){
    var VPinput = $("#VPintup"); //INPUT DA QUANTIDADE DO VENTILADOR PORTÁTIL
    var CHinput = $("#CHinput"); //INPUT DA QUANTIDADE DO CHINELO NUVEM
    var FZinput = $("#FZinput"); //INPUT DA QUANTIDADE DO FONE ZOHAN
    var CPinput = $("#CPinput"); //INPUT DA QUANTIDADE DO CORRETOR POSTURAL

    var precoTotal1 = $("#precoTotal1"); //INPUT DO VALOR TOTAL DESSE PRODUTO VENTILADOR PORTÁTIL
    var precoTotal2 = $("#precoTotal2"); //INPUT DO VALOR TOTAL DESSE PRODUTO CHINELO NUVEM
    var precoTotal3 = $("#precoTotal3"); //INPUT DO VALOR TOTAL DESSE PRODUTO FONE ZOHAN
    var precoTotal4 = $("#precoTotal4"); //INPUT DO VALOR TOTAL DESSE PRODUTO CORRETOR POSTURAL

    //AS VARIÁVEIS FAZEM O CALCULO DA QUANTIDADE x PREÇO DO PRODUTO CORRESPONDENTE E GUARDA O RESULTADO PARA SER EXIBIDO
    //NOS INPUTS precoTotal1, precoTotal2, precoTotal3, precoTotal4
    var preco1 = 0
    var preco2 = 0
    var preco3 = 0
    var preco4 = 0

    var precoFinal = $("#precoFinal"); //SOMA DOS VALORES DE TODOS OS PRODUTOS 

    //BUTTON DE COMPRA DO PRODUTO 1 - 'VENTILADOR PORTÁTIL'
    $('.comprar_agora1').click(function(){
        if(VPinput.val() == 0){
            $('.mensagemQuantidade1').css('display', 'block');
            setTimeout(function () {
                $('#Mquantidade1').hide();
            }, 3000);
            return false;
        }else{
            var val = 130;

            preco1 += VPinput.val() * val
            precoTotal1.val(preco1);
            precoFinal.val(preco1 + preco2 + preco3 + preco4);
            $('.mensagemSuceso1').css('display', 'block');
            setTimeout(function () {
                $('#Msuceso1').hide();
            }, 3000);
        }
    });
    //BUTTON DE REMOVER DO PRODUTO 1 - 'VENTILADOR PORTÁTIL'
    $('.remover1').click(function(){
        if(VPinput.val() == 0){
            $('.mensagemNRemove1').css('display', 'block');
            setTimeout(function () {
                $('#MNremover1').hide();
            }, 3000);
        }else{
            $('.mensagemRemove1').css('display', 'block');
            setTimeout(function () {
                $('#Mremover1').hide();
            }, 3000);
            VPinput.val('0');
            precoTotal1.val('00.00')
            precoFinal.val(precoFinal.val() - preco1)
        }
    });

    //BUTTON DE COMPRA DO PRODUTO 2 - 'CHINELO NUVEM'
    $('.comprar_agora2').click(function(){
        if(CHinput.val() == 0){
            $('.mensagemQuantidade2').css('display', 'block');
            setTimeout(function () {
                $('#Mquantidade2').hide();
            }, 3000);
            return false;
        }else{
            var val = 180;
            
            preco2 += CHinput.val() * val
            precoTotal2.val(preco2);
            precoFinal.val(preco1 + preco2 + preco3 + preco4);
            $('.mensagemSuceso2').css('display', 'block');
            setTimeout(function () {
                $('#Msuceso2').hide();
            }, 3000);
        }
    });
    //BUTTON DE REMOVER DO PRODUTO 2 - 'CHINELO NUVEM'
    $('.remover2').click(function(){
        if(CHinput.val() == 0){
            $('.mensagemNRemove2').css('display', 'block');
            setTimeout(function () {
                $('#MNremover2').hide();
            }, 3000);
        }else{
            $('.mensagemRemove2').css('display', 'block');
            setTimeout(function () {
                $('#Mremover2').hide();
            }, 3000);
            CHinput.val('0');
            precoTotal2.val('00.00')
            precoFinal.val(precoFinal.val() - preco2)
        }
    });

    //BUTTON DE COMPRA DO PRODUTO 3 - 'FONE ZOHAN'
    $('.comprar_agora3').click(function(){
        if(FZinput.val() == 0){
            $('.mensagemQuantidade3').css('display', 'block');
            setTimeout(function () {
                $('#Mquantidade3').hide();
            }, 3000);
            return false;
        }else{
            var val = 330;

            preco3 += FZinput.val() * val
            precoTotal3.val(preco3);
            precoFinal.val(preco1 + preco2 + preco3 + preco4);
            $('.mensagemSuceso3').css('display', 'block');
            setTimeout(function () {
                $('#Msuceso3').hide();
            }, 3000);
        }
    });
    //BUTTON DE REMOVER DO PRODUTO 3 - 'FONE ZOHAN'
    $('.remover3').click(function(){
        if(FZinput.val() == 0){
            $('.mensagemNRemove3').css('display', 'block');
            setTimeout(function () {
                $('#MNremover3').hide();
            }, 3000);
        }else{
            $('.mensagemRemove3').css('display', 'block');
            setTimeout(function () {
                $('#Mremover3').hide();
            }, 3000);
            FZinput.val('0');
            precoTotal3.val('00.00')
            precoFinal.val(precoFinal.val() - preco3)
        }
    });

    //BUTTON DE COMPRA DO PRODUTO 4 - 'CORRETOR POSTURAL'
    $('.comprar_agora4').click(function(){
        if(CPinput.val() == 0){
            $('.mensagemQuantidade4').css('display', 'block');
            setTimeout(function () {
                $('#Mquantidade4').hide();
            }, 3000);
            return false;
        }else{
            var val = 120;

            preco4 += CPinput.val() * val
            precoTotal4.val(preco4);
            precoFinal.val(preco1 + preco2 + preco3 + preco4);
            $('.mensagemSuceso4').css('display', 'block');
            setTimeout(function () {
                $('#Msuceso4').hide();
            }, 3000);
        }
    });
    //BUTTON DE REMOVER DO PRODUTO 4 - 'CORRETOR POSTURAL'
    $('.remover4').click(function(){
        if(CPinput.val() == 0){
            $('.mensagemNRemove4').css('display', 'block');
            setTimeout(function () {
                $('#MNremover4').hide();
            }, 3000);
        }else{
            $('.mensagemRemove4').css('display', 'block');
            setTimeout(function () {
                $('#Mremover4').hide();
            }, 3000);
            CPinput.val('0');
            precoTotal4.val('00.00')
            precoFinal.val(precoFinal.val() - preco4)
        }
    });
})