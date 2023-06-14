$(document).ready(function(){
    var result = $('#result_quantidade');

    $('.mais').click(function() {
        

        console.log(result.val());
    });

    $('.menos').click(function () {
        if (parseInt(result.val()) > 1){
            result.val(result.val()-1);
        }else{
            alert('Quantidade não pode ser menor que um!');
        }
    });
})