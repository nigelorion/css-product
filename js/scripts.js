$(document).ready(function() {

  $("ul li:nth-child(3)").on('click', function() {
    $("#product-image").fadeOut();
    $("#contact").delay(700).fadeIn();
    });

  $("ul li:nth-child(2)").on('click', function() {
    $("#product-image").fadeOut();
    $("#about").delay(700).fadeIn();
    });

  $("ul li:nth-child(1)").on('click', function() {
    $("#product-image").fadeOut();
    $("#pricing").delay(700).fadeIn();
    });

});
