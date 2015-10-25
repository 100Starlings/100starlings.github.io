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


/* form validation */

$("#form-contact").on("submit", function(e) {
  var contactRequestsRef = new Firebase("https://100s-website.firebaseio.com/contact-requests"),
      $form = $(this),
      data = {},
      dataArray = $form.serializeArray(),
      formMessage = $form.find('.form-message').empty().removeClass('error').removeClass('success');

  dataArray.forEach(function(kv) {
    data[kv.name] = kv.value;
  });

  contactRequestsRef.push(data, function(err) {
    if (err) {
      formMessage.addClass('error').text("Error when submitting message: " + err.message);
    } else {
      formMessage.addClass('success').text("We have received your message and will get back to you soon.");
    }
  });

  e.preventDefault();
}).validate();
