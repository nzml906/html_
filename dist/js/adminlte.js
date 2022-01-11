/*!
 * AdminLTE v3.2.0-rc ()
 * Copyright 2014-2022 Nazmul Ahmed
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  (function ($) {

    new WOW().init(); // Sticky Navbar

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    }); // Skills

    $(".skill").waypoint(function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    }, {
      offset: "80%"
    }); // Facts counter

    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
    });
  })(jQuery);

}));
//# sourceMappingURL=adminlte.js.map
