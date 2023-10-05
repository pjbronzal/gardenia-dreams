(function ($) {
	"use strict";
	/*----------------------------------------
	   Sticky Menu Activation
	---------------------------------*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.header-sticky').addClass('sticky');
		} else {
			$('.header-sticky').removeClass('sticky');
		}
	});
	/*----------------------------------------
		Off Canvas
	-------------------------------------------*/
	$(".off-canvas-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});

	/*----------------------------------------
		Off Canvas Menu
	-------------------------------------------*/
	$(".off-canvas-menu-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-menu-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-menu-wrapper").removeClass('open');
	});
	/*----------------------------------------*/
	/*  Cart Plus Minus Button
	/*----------------------------------------*/
	$('.cart-plus-minus').append(
		'<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
	);
	$('.qtybutton').on('click', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find('input').val(newVal);
	});
	/*----------------------------------------*/
	/* Toggle Function Active
	/*----------------------------------------*/
	// showlogin toggle
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});
	// showlogin toggle
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});
	// showlogin toggle
	$('#cbox').on('click', function () {
		$('#cbox-info').slideToggle(900);
	});

	// Ship box toggle
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});
	/*----------------------------------------
		Responsive Mobile Menu
	------------------------------------------*/
	//Variables
	var $offCanvasNav = $('.mobile-menu'),
	$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
	//Add Toggle Button With Off Canvas Sub Menu
	$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();
	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
	var $this = $(this);
	if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
		e.preventDefault();
		if ($this.siblings('ul:visible').length){
			$this.parent('li').removeClass('active');
			$this.siblings('ul').slideUp();
		} else {
			$this.parent('li').addClass('active');
			$this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
			$this.closest('li').siblings('li').find('ul:visible').slideUp();
			$this.siblings('ul').slideDown();
		}
	}
	});

	/*----------------------------------------
		Swiper Slider Activation Js
	------------------------------------------*/
	// Home 01 Slider
	var intro11Slider = new Swiper('.intro11-slider', {
        loop: true,
        speed: 400,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'fade',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
	});
	// Product Carousel
	var intro11Slider = new Swiper('.product-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2,
			  spaceBetween: 10
			},
			// when window width is >= 767px
			768: {
			  slidesPerView: 3,
			  spaceBetween: 10
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			  },
		  }
	});
	// item Carousel 2
	var intro11Slider = new Swiper('.item-carousel-2', {
		slidesPerView: 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 480px
			480: {
			  slidesPerView: 1,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 2,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 2,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 2,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
			  },
		  }
	});
	// Brand Logo Carousel
	var intro11Slider = new Swiper('.brand-logo-carousel', {
		loop: true,
        speed: 800,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'slide',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		//autoplay: {},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 3,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 4,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 4,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
			  },
		  }
	});
	// Testimonial Carousel
	var intro11Slider = new Swiper('.testimonial-carousel', {
        loop: true,
        speed: 800,
		slidesPerView: 1,
        spaceBetween: 10,
		effect: 'slide',
        navigation: {
            nextEl: '.home1-slider-next',
            prevEl: '.home1-slider-prev',
		},
		//autoplay: {},

	});
	// Latest Post Carousel
	var intro11Slider = new Swiper('.latest-post-carousel', {
        loop: true,
		direction: 'vertical',
		slidesPerView: 3,
		mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		//autoplay: {},
		

	});
	// Single product with Thumbnail
	var galleryThumbs = new Swiper('.single-product-thumb', {
		spaceBetween: 10,
		slidesPerView: 4,
		loop: false,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			},
			// when window width is >= 575px
			575: {
			  slidesPerView: 3,
			},
			// when window width is >= 767px
			767: {
			  slidesPerView: 4,
			},
			// when window width is >= 991px
			991: {
				slidesPerView: 3,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
			},
		  }
	  });
	var galleryTop = new Swiper('.single-product-img', {
	spaceBetween: 10,
	loop: false,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
	});
	/*----------------------------------------*/
	/*  Shop Grid Activation
	/*----------------------------------------*/
	$('.shop_toolbar_btn > button').on('click', function (e) {
	
		e.preventDefault();
		
		$('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');
		
		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');
		
		
		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-6 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
			
		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-6 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}
		
		if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-6 col-sm-6 col-cust-5');
		}
			
	});
	/*--------------------------------
	Price Slider Active
	-------------------------------- */
	$( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
       }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	/*----------------------------------------
		Bootstrap 5 Tooltip
	------------------------------------------*/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/*----------------------------------------*/
	/*  Countdown
	/*----------------------------------------*/
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
		});
	});
	/*----------------------------------------*/
	/*------ Popup Image
	-------------------------------------------------*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
	/*---------------------------------
	/* 	MailChimp
    -----------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
    });
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
	}
	/*--------------------------
	 Ajax Contact Form JS
	---------------------------*/
	const form = $('#contact-form'),
	formMessages = $('.form-message');

	 $(form).submit(function (e) {
		 e.preventDefault();
		 var formData = form.serialize();
		 $.ajax({
			 type: 'POST',
			 url: form.attr('action'),
			 data: formData
		 }).done(function (response) {
			 // Make sure that the formMessages div has the 'success' class.
			 $(formMessages).removeClass('alert alert-danger');
			 $(formMessages).addClass('alert alert-success fade show');

			 // Set the message text.
			 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
			 formMessages.append(response);

			 // Clear the form.
			 $('#contact-form input,#contact-form textarea').val('');
		 }).fail(function (data) {
			 // Make sure that the formMessages div has the 'error' class.
			 $(formMessages).removeClass('alert alert-success');
			 $(formMessages).addClass('alert alert-danger fade show');

			 // Set the message text.
			 if (data.responseText !== '') {
				 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
				 formMessages.append(data.responseText);
			 } else {
				 $(formMessages).text('Oops! An error occurred and your message could not be sent.');
			 }
		 });
	 });
	/*--------------------------------
	/* 	Scroll To Top
	-------------------------------- */
	function scrollToTop() {
		var $scrollUp = $('.scroll-to-top'),
			$lastScrollTop = 0,
			$window = $(window);

		$window.on('scroll', function () {
			var topPos = $(this).scrollTop();
			if (topPos > $lastScrollTop) {
				$scrollUp.removeClass('show');
			} else {
				if ($window.scrollTop() > 200) {
					$scrollUp.addClass('show');
				} else {
					$scrollUp.removeClass('show');
				}
			}
			$lastScrollTop = topPos;
		});

		$scrollUp.on('click', function (evt) {
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			evt.preventDefault();
		});
	}
	scrollToTop();
	/*----------------------------------------*/
	/*  Nice Select
	/*----------------------------------------*/
	$(document).ready(function () {
		$('.nice-select').niceSelect();
	});
	/*----------------------------------------*/
	/*-----  Preloader
	---------------------------------*/
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow')
		$('body').delay(350).css({'overflow':'visible'});
	});
    
})(jQuery);


//*Precious tulong!!!//
function getProductSlider() {
    const products = [
        {
            title: "Autumn Sunshine Bouquet"
			image1: "/images/flowers_1/Alluring Elegance Bouquet_1.jpg",
            image2: "/images/flowers_1/Alluring Elegance Bouquet_2.jpg",
            image3: "/images/flowers//Autumn Sunshine Bouquet_2.jpg.",
            price: 599,
            oldPrice: 499,
        },
        {
            title: "Belle of the Ball Bouquet",
            image1: "/images/flowers//Belle of the Ball Bouquet.jpg",
            image2: "/images/flowers//Belle of the Ball Bouquet_1.jpg",
            price: 499,
            oldPrice: 399,
        },
    ];

    // Generate HTML for each product
    const productHTML = products
        .map((product) => {
            const { title, image1, image2, image3, price, oldPrice } = product;
            return `
                <div class="single-item swiper-slide">
                    <div class="single-product position-relative mb-30">
                        <div class="product-image">
                            <a class="d-block" href="product-details.html">
                                <img src="${image1}" alt="" class="product-image-1 w-100">
                                <img src="${image2}" alt="" class="product-image-2 position-absolute w-100">
                                <img src="${image3}" alt="" class="product-image-3 position-absolute w-100">
                            </a>
                            <span class="onsale">Sale!</span>
                            <div class="add-action d-flex flex-column position-absolute">
                                <a href="compare.html" title="Compare">
                                    <i class="lnr lnr-sync" data-toggle="tooltip" data-placement="left" title="Compare"></i>
                                </a>
                                <a href="wishlist.html" title="Add To Wishlist">
                                    <i class="lnr lnr-heart" data-toggle="tooltip" data-placement="left" title="Wishlist"></i>
                                </a>
                                <a href="#exampleModalCenter" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <i class="lnr lnr-eye" data-toggle="tooltip" data-placement="left" title="Quick View"></i>
                                </a>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-title">
                                <h4 class="title-2"><a href="product-details.html">${title}</a></h4>
                            </div>
                            <div class="price-box">
                                <span class="regular-price">₱${price}</span>
                                <span class="old-price"><del>₱${oldPrice}</del></span>
                            </div>
                            <a href="cart.html" class="btn product-cart">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

    // Return the generated HTML
    return productHTML;
}

// Function to generate the product slider
function generateProductSlider() {
    // Get the product HTML generated by getProductSlider function
    const productHTML = getProductSlider();

    // Select the product card container by its ID
    const productCardContainer = document.querySelector("#product-card-container");

    // Append the product HTML to the container
    productCardContainer.innerHTML = productHTML;

    // Initialize your product slider (if needed)
    new Swiper(".product-slider", {
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

// Call the function to generate and display the product slider
generateProductSlider();