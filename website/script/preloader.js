var zeit = (Math.floor((Math.random() * 30) + 15))*1000;
$(document).ready(function() {
  $('#dots').delay(900).fadeOut(300, function() {
    $("#modal-name").hide();
    console.log(zeit);
    $("#modal-name").delay(zeit).fadeIn(100);
    $('#bg_left').animate({left: '-50%'}, 300);
    $('#bg_right').animate({right: '-50%'}, 300, function() {
      $('#preloader').parent().css('z-index' , -10010);
      $('#dots').parent().css('z-index' , -10010);
    });
  });
});
$(".close-modal, .modal-sandbox, #no").click(function(){
  $(".modal").css({"display":"none"});
});
