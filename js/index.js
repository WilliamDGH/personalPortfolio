$(document).ready(function () {
  $("#close").on("click", function () {
    // close overlay
  });

  $("#about-link").on("click", function () {
    // open overlay
    if ($("#about").hasClass("opened")) {
      $(".opened").removeClass("opened");
    } else {
      $(".opened").removeClass("opened");
      $("#about").addClass("opened");
    }
  });

  $("#work-link").on("click", function () {
    // open overlay
    if ($("#work").hasClass("opened")) {
      $(".opened").removeClass("opened");
    } else {
      $(".opened").removeClass("opened");
      $("#work").addClass("opened");
    }
  });

  $("#connect-link").on("click", function () {
    // open overlay
    if ($("#connect").hasClass("opened")) {
      $(".opened").removeClass("opened");
    } else {
      $(".opened").removeClass("opened");
      $("#connect").addClass("opened");
    }
  });

  $("#play-link").on("click", function () {
    // open overlay
    if ($("#play").hasClass("opened")) {
      $(".opened").removeClass("opened");
    } else {
      $(".opened").removeClass("opened");
      $("#play").addClass("opened");
    }
  });

  $(".close").on("click", function () {
    $(".overlay").removeClass("opened");
  });
});
