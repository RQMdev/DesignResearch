$(document).ready(function() {

    var $holder = $('section:first');
    console.log($holder);
    
    /* $('section:first').removeClass('category-is-hidden');
    $('section:first').addClass('category-is-showing');
    $('section:first').find('nav').addClass('nav-is-active');
    $('section:first').find('ul').addClass('is-showing');
    $('section:first').find('.wraper').addClass('is-showing'); */
    setTimeout(function(){
        $('.category-is-showing').find('ul').addClass('fade-in');
        $('.category-is-showing').find('.wraper').addClass('fade-in');
    }, 1000);

    $('.category-is-hidden').bind('click', function(){
        var $this = $(this);
        
        $('.category-is-showing').addClass('category-is-hidden');
        $('.category-is-showing').removeClass('category-is-showing');
        $('.nav-is-active').removeClass('nav-is-active');
        $('ul.is-showing').removeClass('is-showing fade-in');
        $('.wraper.is-showing').removeClass('is-showing fade-in');
        $(this).removeClass('category-is-hidden');
        $(this).addClass('category-is-showing');
        $(this).find('nav').addClass('nav-is-active');
        $(this).find('ul').addClass('is-showing');
        $(this).find('.wraper').addClass('is-showing');
        setTimeout(function(){ 
            $this.find('ul').addClass('fade-in');
            $this.find('.wraper').addClass('fade-in');
        }, 1000);

        
    });
});