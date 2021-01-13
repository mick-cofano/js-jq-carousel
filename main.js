// // Prima versione, ok ma non riesco ad eseguire un loop
// $(document).ready(function() {
//
//   $('.next').click(function() {
//     $('img.active').removeClass('active').next().addClass('active');
//   })
//
//   $('.prev').click(function() {
//     $('img.active').removeClass('active').prev().addClass('active');
//   })
//
// })

$(document).ready(function() {

  $('.next').click(function() {
    $('img.active').removeClass('active').next().addClass('active');
    $('img:last-of-type').addClass('active');
  })

  $('.prev').click(function() {
    $('img.active').removeClass('active').prev().addClass('active');
    $('img:first-child').addClass('active');
  })

})
