/*
   Author: Return
   Version: 1.0.0
   Created: Dec 2021
   File Description: Main js file
*/

(function ($) {
  "use strict";

  //Loader
  $(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });

    setTimeout(function () {
      $(window).scrollTop(0);
      $.scrollify.update();
    });
  });

  // STICKY
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $(".navbar").toggleClass("nav-sticky", scroll > 50);
  });

  //OwlCarousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    navigation: true,
    autoHeight: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".nft-carousel")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("first")
        .eq(event.item.index + 1)
        .addClass("first");
    })
    .owlCarousel({
      loop: true,
      margin: 20,
      padding: 20,
      dots: false,
      navigation: true,
      autoHeight: false,
      nav: true,
      navText: [
        "<div class='nav-btn prev-slide'></div>",
        "<div class='nav-btn next-slide'></div>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

  // even click item
  let listItems = $(".nft-carousel").find(".owl-item");
  $(".nft-carousel .owl-item.first").addClass("item-active");
  listItems.each(function (item) {
    $(this).click(function () {
      $(".nft-carousel .owl-item").removeClass("item-active");
      $(this).addClass("item-active");
    });
  });

  // check height background and item
  let heightBg = $(".carousel-wrap-nft").height();
  let heightItem = $(".nft-carousel .owl-item").height();
  let checkHeight = heightBg - heightItem;
  if (checkHeight <= 15) {
    $(".nft-carousel .owl-item .item").css({
      width: "75%",
      margin: "auto",
    });
    $(".nft-list").css({
      "margin-top": "auto",
    });
  }

  //Scroll
  $.scrollify({
    section: ".section",
    scrollbars: false,
    interstitialSection: ".header,.footer",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset: 0,
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll: true,
    before: function (i, panels) {
      let ref = panels[i].attr("data-section-name");

      $(".navbar .navbar-nav .nav-item.active").removeClass("active");
      $(".navbar-nav .nav-item")
        .find('a[href="#' + ref + '"]')
        .closest(".nav-item")
        .addClass("active");

      const social = $(".social-btn-group");
      if (ref != null || ref != void 0) {
        social.show();
      } else {
        social.hide();
      }
    },
    afterRender: function () {
      $(".nav-item a").on("click", function (e) {
        e.preventDefault();
        $.scrollify.move($(this).attr("href"));

        // Toggle mobile menu
        if ($(".navbar-collapse").hasClass("show")) {
          const menuToggle = document.getElementById("navbarCollapse");
          const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false,
          });
          bsCollapse.toggle();
        }
      });

      $(".navbar .navbar-brand").on("click", function (e) {
        e.preventDefault();
        $.scrollify.move($(this).attr("href"));
      });
    },
  });
})(jQuery);
