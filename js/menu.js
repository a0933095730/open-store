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

