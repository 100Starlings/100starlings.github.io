/* header scroll */

$(document).scroll(function(){
     $('.header').toggleClass('header-scroll', $(this).scrollTop() > 25);
     $('.welcome-icon').toggleClass('hide', $(this).scrollTop() > 50);
});


/* scroll */

$(document).ready(function(){
  $(".scrolllink").click(function(e){
    e.preventDefault();
 
    var id     = $(this).attr("href");
    var offset = $(id).offset();
 
    $("html, body").animate({
      scrollTop: offset.top - 100
    }, 1000);
  });
});


/* menu */

$('.btn-menu').click(function() {
    $(this).toggleClass('open');
    $('.phone-menu').fadeToggle('slow');
    $('.phone-menu-item').each(function(i) {$(this).delay((i++) * 100).fadeToggle()});
});

$('.phone-menu .menu .scrolllink').click(function() {
    $('.btn-menu').toggleClass('open');
    $('.phone-menu').fadeToggle('slow');
    $('.phone-menu-item').each(function(i) {$(this).delay((i++) * 100).fadeToggle()});    
});


/* tabs */

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});


