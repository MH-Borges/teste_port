
/*Menu effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = 180;
    if (efeito > posicao){
        $(".head").addClass('actived');
        $(".logo").addClass('actived');
        $(".logo2").addClass('actived');
        $(".BTmenu").addClass('actived');
    }else{
        $(".head").removeClass('actived');
        $(".logo").removeClass('actived');
        $(".logo2").removeClass('actived');
        $(".BTmenu").removeClass('actived');
    }
});
/*Menu effeito*/

/*Menu escondido effeito*/
$(document).ready(function(){
    $('.menuHidden').click(function(){
        $('.nav-menu').toggleClass('act')
        $('.head').toggleClass('act')
    });
});
/*Menu escondido effeito*/

/*botão effeito*/
jQuery(document).ready(function(){

jQuery("#btn_UP").hide();
jQuery('#btn_UP').click(function () {
            jQuery('body,html').animate({
            scrollTop: 0
            }, 800);
        return false;
    });

jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 500) {
            jQuery('#btn_UP').fadeIn();
            } else {
            jQuery('#btn_UP').fadeOut();
            }
        });
});

/*botão effeito*/


/*Botão blog effeito
$(window).scroll(function(event){
    const efeito = window.pageYOffset;
    const posicao = innerHeight*3.6; /* <---multiplicador com 4 se tiver 9 posts 
    if(efeito > posicao){
        $("#Bt_Blog").addClass('activeBG');
    }else{
        $("#Bt_Blog").removeClass('activeBG');
    }
});
/*Botão blog effeito*/

