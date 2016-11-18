$(document).ready(function() {

  $("ul li:nth-child(3)").on('click', function() {
    $("#product-image").fadeOut();
    $("#contact").fadeIn();
    });

  $("ul li:nth-child(2)").on('click', function() {
    $("#product-image").fadeOut();
    $("#about").fadeIn();
    });

  $("ul li:nth-child(1)").on('click', function() {
    $("#product-image").fadeOut();
    $("#pricing").fadeIn();
    });

});
