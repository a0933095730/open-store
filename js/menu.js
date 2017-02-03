$('.toggle-menu').on('click',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('#menu').fadeOut();
    }
    else{
        $(this).addClass('active');
        $('#menu').fadeIn();
    }
});

$('.toggle-lightbox').on('click','.open',function(){
    $('.es-lightbox').fadeIn('fast');
    $('body').addClass('modal-open')
});
$('.close-btn').on('click',function(){
    $('.es-lightbox').fadeOut('fast');
    $('body').removeClass('modal-open')
});

$('#goTop').on('click',function(){
    $('html,body').animate({scrollTop: 0}, 500);
});