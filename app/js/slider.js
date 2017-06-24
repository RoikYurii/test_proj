$(document).ready(function(){

  var w = $('#slider_container').width();
  $('.slides > li').width(w);
  $('.slides').width( w * ('.slides > li').length);
  $('.slides').css('left', -w);

  function next(){
    $('.slides').animate({
      'margin-left' : -w
    }, 500, function(){
      $('.slides').css('margin-left', 0);
      $('.slides > li:first-child').appendTo('.slides');
    })
  }

  function prev(){
    $('.slides').animate({
      'margin-left' : w
    }, 500, function(){
      $('.slides').css('margin-left', 0);
      $('.slides > li:last-child').prependTo('.slides');
    })
  }

  $('#prevSlide').click(prev);
  $('#nextSlide').click(next);

})
