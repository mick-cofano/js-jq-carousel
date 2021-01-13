
$(document).ready(function() {

  $('.next').click(function() {
    $('img.active').removeClass('active').next().addClass('active');
  })

  $('.prev').click(function() {
    $('img.active').removeClass('active').prev().addClass('active');
  })

})
