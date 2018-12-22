$(document).ready(function () {
  $("#close").on("click", function () {
    // close overlay
  });

  $("#about-link").on("click", function () {
    // open overlay
    if ($("#about").hasClass("opened")) {
      $("#about").removeClass("opened");
    } else {
      $("#about").addClass("opened");
    }
  });

  $("#work-link").on("click", function () {
    // open overlay
    if ($("#work").hasClass("opened")) {
      $("#work").removeClass("opened");
    } else {
      $("#work").addClass("opened");
    }
  });

  $("#connect-link").on("click", function () {
    // open overlay
    if ($("#connect").hasClass("opened")) {
      $("#connect").removeClass("opened");
    } else {
      $("#connect").addClass("opened");
    }
  });

  $("#play-link").on("click", function () {
    // open overlay
    if ($("#play").hasClass("opened")) {
      $("#play").removeClass("opened");
    } else {
      $("#play").addClass("opened");
    }
  });

  $(".close").on("click", function () {
    $(".overlay").removeClass("opened");
  });
});
