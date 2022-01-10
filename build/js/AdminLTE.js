(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });
})(jQuery);
