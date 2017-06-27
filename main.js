$(document).ready(function() {

    $('.category').bind('click', function() {
        $('.is-showing').removeClass('is-showing');
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-showing');
        $(this).find('h2').addClass('is-active');

    });
});