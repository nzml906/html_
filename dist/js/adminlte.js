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
    });
  })(jQuery);

}));
//# sourceMappingURL=adminlte.js.map
