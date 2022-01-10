/*
   Author: Return
   Version: 1.0.0
   Created: Dec 2021
   File Description: Main js file
*/

(function ($) {
	'use strict';

	//Loader
	$(window).on('load', function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});

		setTimeout(function() {
			$(window).scrollTop(0);
			$.scrollify.update();
		});
	});


	// STICKY
	$(window).scroll(function() {
		let scroll = $(window).scrollTop();
		$(".navbar").toggleClass("nav-sticky", scroll > 50);
	});

	//OwlCarousel
	$('.owl-carousel').owlCarousel({
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	//Scroll
	$.scrollify({
		section:".section",
		scrollbars:false,
		interstitialSection: ".header,.footer",
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		offset: 0,
		setHeights: true,
		overflowScroll: true,
		updateHash: false,
		touchScroll: true,
		before:function(i,panels) {
			let ref = panels[i].attr("data-section-name");

			$(".navbar .navbar-nav .nav-item.active").removeClass("active");
			$(".navbar-nav .nav-item").find("a[href=\"#" + ref + "\"]").closest(".nav-item").addClass("active");

			const social = $(".social-btn-group");
			if(ref != null || ref != void(0)) {
				social.show();
			} else {
				social.hide();
			}
		},
		afterRender:function() {
			$(".nav-item a").on("click",function(e) {
				e.preventDefault();
				$.scrollify.move($(this).attr("href"));

				//Toggle mobile menu
				const menuToggle = document.getElementById('navbarCollapse');
				const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
				bsCollapse.toggle();
			});

			$(".navbar .navbar-brand").on("click",function(e) {
				e.preventDefault();
				$.scrollify.move($(this).attr("href"));
			});
		}
	});
})(jQuery);