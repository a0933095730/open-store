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


$(function(){
    window.setTimeout(function(){
        $(window).on('resize',function(){
            var itemTopHeight = $('.item-top').height() + 2;
            var itemHeight = $('.item-top').height() + 84 ;
            $('.apps .item-card').css('height',itemHeight);
            $('.apps a').on('mouseenter','.item',function(){
                $(this).css('top', -itemTopHeight);
            });
            $('.apps a').on('mouseleave','.item',function(){
                $(this).css('top', '');
            });
        }).trigger('resize');
    }, 1000);
});


// $(window).on('resize',function(){
//     var itemTopHeight = $('.item-top').height() + 2;
//     var itemHeight = $('.item-top').height() + 84 ;
//     $('.apps .item-card').css('height',itemHeight);
//     $('.apps a').on('mouseenter','.item',function(){
//         $(this).css('top', -itemTopHeight);
//     });
//     $('.apps a').on('mouseleave','.item',function(){
//         $(this).css('top', '');
//     });
// }).trigger('resize');

    