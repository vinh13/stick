/*
   Author: Cyforce
   Version: 1.0.0
   Created: Dec 2021
   File Description: Main js file
*/

(function ($) {

    'use strict';
	// STICKY
	$(window).scroll(function() {
		onScrollHandle();
	});

	// SmoothLink
	$('.nav-item a, .mouse-down a').on('click', function(event) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});

	// scrollspy
	$(".navbar-nav").scrollspy({
		offset: 70
	});


	//owlCarousel
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

	// Loader
	$(window).on('load', function() {
	    $('#status').fadeOut();
	    $('#preloader').delay(350).fadeOut('slow');
	    $('body').delay(350).css({
	        'overflow': 'visible'
	    });
	});

	// Scroll one page
	$.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection:".header,.footer",
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		offset : 0,
		scrollbars: false,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		updateHash: false,
		touchScroll:true
	});

	function onScrollHandle() {
		var scroll = $(window).scrollTop();
		$(".navbar").toggleClass("nav-sticky", scroll > 50);

		$('#navbarCollapse > ul > li > a').each(function () {
			var curLink = $(this);
			var refElem = $(curLink.attr('href'));
			if (refElem.position().top <= scroll && refElem.position().top + refElem.height() > scroll) {
				$('#navbarCollapse > ul > li').removeClass("active");
				curLink.parent().addClass("active");
			} else {
				curLink.parent().removeClass("active");
			}
		});
	}
})(jQuery)