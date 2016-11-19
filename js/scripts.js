$(document).ready(function() {

  $("ul li:nth-child(3)").on('click', function() {

    $("#content").not("#content #contact").hide();
    $("#contact").show();
  });

  $("ul li:nth-child(2)").on('click', function() {
    $("#about").toggle();
  });

  $("ul li:nth-child(1)").on('click', function() {
    $("#pricing").toggle();
  });

  $('#gallery img').click(function(){
    $("#driving").attr('src',$(this).attr('src').replace('thumb','large'));
  });

});
