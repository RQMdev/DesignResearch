$(document).ready(function(){

    $('.category').bind('click', function(){
        $('.is-showing').removeClass('is-showing');
        $(this).addClass('is-showing');

    });
});