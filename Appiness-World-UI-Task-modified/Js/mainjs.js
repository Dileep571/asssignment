function copyDiv() {
    var firstDivContent = document.getElementById('inner-doctor1');
    var secondDivContent = document.getElementById('inner-doctor-m');
    secondDivContent.innerHTML = firstDivContent.innerHTML;
}

 function copyDiv1() {
    var firstDivContent = document.getElementById('inner-doctor2');
    var secondDivContent = document.getElementById('inner-doctor-c');
    secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Call copyDiv on body="onload"
copyDiv();
copyDiv1();


(function () {
  "use strict";
  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();