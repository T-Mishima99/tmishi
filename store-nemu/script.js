$(function(){
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
  });

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $('.header').hover(
    function() {
      $('.header').children('h1').fadeIn();
    },
    function() {
      $('.header').children('h1').fadeOut();
     
    }
  );
});