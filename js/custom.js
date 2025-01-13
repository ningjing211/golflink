(function ($) {
  'use strict';

  /*======== 0 PRELOADER ========*/
  $(window).on('load', function () {
    // $('#preloader').fadeOut(500);
    $('#js-loader').fadeOut(500);
  });

  /*======== 2. NAVBAR ========*/

  $(window).on('load', function () {

    var header_area = $('.header');
    var main_area = header_area.find('.navbar');
    var zero = 0;
    var navbarSticky = $('.navbar-sticky');

    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > zero) {
        navbarSticky.addClass('navbar-scrollUp');
      } else {
        navbarSticky.removeClass('navbar-scrollUp');
      }
      zero = st;

      if (main_area.hasClass('navbar-sticky') && ($(this).scrollTop() <= 200 || $(this).width() <= 100)) {
        main_area.removeClass('navbar-scrollUp');
        main_area.removeClass('navbar-sticky').appendTo(header_area);
        header_area.css('height', 'auto');
      } else if (!main_area.hasClass('navbar-sticky') && $(this).width() > 100 && $(this).scrollTop() > 200) {
        header_area.css('height', header_area.height());
        main_area.addClass('navbar-scrollUp');
        main_area.css({ 'opacity': '0' }).addClass('navbar-sticky');
        main_area.appendTo($('body')).animate({ 'opacity': 1 });
      }
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

  /*======== Navbar Hover Open ========*/

  if ($(window).width() > 991) {
    $('.navbar-expand-md .navbar-nav .dropdown').hover(function () {
      $(this).addClass('').find('.dropdown-menu').addClass('show');
    }, function () {
      $(this).find('.dropdown-menu').removeClass('show');
    });
  }

  if ($(window).width() > 767) {
    $('.navbar-expand-md .navbar-nav .dropdown').hover(function () {
      $(this).addClass('').find('.dropdown-menu').addClass('show');
    }, function () {
      $(this).find('.dropdown-menu').removeClass('show');
    });
  }

  /*======== Scrollup ========*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });

  /*======== Element-Right-Sidebar ========*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.element-right-sidebar').addClass('sidebar-fixed');
    } else {
      $('.element-right-sidebar').removeClass('sidebar-fixed');
    }

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 590) {
      $('.element-right-sidebar').addClass('right-sidebar-absolute').removeClass('sidebar-fixed');
    } else {
      $('.element-right-sidebar').removeClass('right-sidebar-absolute')
    }
  });

  /*======== Selectric ========*/
  var select_option = $("select");
  if (select_option.length !== 0) {
    select_option.selectric();
  }

  /*======== Video ========*/
  var videoBox = $('.video-box img');
  videoBox.on('click', function () {
    var video = '<iframe width="500" height="321" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

  var successVideo = $('.success_video img');
  successVideo.on('click', function () {
    var video = '<iframe width="555" height="314" allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
  });

  var successVideo = $('.admission_video img');
  successVideo.on('click', function () {
    var video = '<iframe width="769" height="454" allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
  });

  /*======== Tooltip ========*/

  // $('[data-toggle="tooltip"]').tooltip()

  /*======== Banner Slider ========*/
  var bannerSlider = $('.banner-slider');
  if (bannerSlider.length !== 0) {
    bannerSlider.owlCarousel({
      items: 4,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        768: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    })
  }

  /*======== Brand Slider ========*/
  var brandSlider = $('.brand-slider');
  if (brandSlider.length !== 0) {
    brandSlider.owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 4000,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: true
        },
        1000: {
          items: 5,
          nav: true
        }
      }
    })
  }

  /*======== Testimonial Slider ========*/
  var successInner = $('.owl-carousel.success-inner');
  if (successInner.length !== 0) {
    successInner.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: false,
      moveSlides: 1,
      dots: true,
      smartSpeed: 1000,
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    })
  }

  /*======== Revolution Slider ========*/
  var bannerV2 = $('.bannerV2 .fullscreenbanner');
  if (bannerV2.length !== 0) {
    bannerV2.revolution({
      delay: 5000,
      startwidth: 1170,
      startheight: 650,
      fullWidth: 'on',
      fullScreen: 'on',
      hideCaptionAtLimit: '',
      dottedOverlay: 'none',
      navigationStyle: 'preview4',
      fullScreenOffsetContainer: '',
      hideTimerBar: 'on'
    })
  }

  /*======== Banner Bottom Slider ========*/
  var bannerBottomSlider = $('.bannerBottom-slider');
  if (bannerBottomSlider.length !== 0) {
    bannerBottomSlider.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      moveSlides: 1,
      dots: false,
      smartSpeed: 1000,
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    })
  }

  /*======== single Banner Slider ========*/
  var singleBanner = $('.single-banner');
  if (singleBanner.length !== 0) {
    singleBanner.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayHoverPause: true,
      nav: false,
      moveSlides: 1,
      dots: true,
      smartSpeed: 1000,
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    })
  }

  /*======== About Slider ========*/
  var aboutSlider = $('.about-slider');
  if (aboutSlider.length !== 0) {
    aboutSlider.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayHoverPause: true,
      nav: false,
      moveSlides: 1,
      dots: true,
      smartSpeed: 1000,
      navText: ['', ''],
      responsive: {
        320: {
          items: 1,
          nav: true,
          dots: false
        },
        768: {
          items: 1,
          nav: true,
          dots: false
        },
        992: {
          items: 1,
          nav: false,
          dots: true
        }
      }
    })
  }

  /*======== Campus Slider ========*/
  var campusSlider = $('.campus-slider');
  if (campusSlider.length !== 0) {
    campusSlider.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      moveSlides: 1,
      dots: true,
      smartSpeed: 1000,
      navText: ['', ''],
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    })
  }

  /*======== Testimonial Slider ========*/
  var testimonialSlider = $('.testimonial-slider');
  if (testimonialSlider.length !== 0) {
    testimonialSlider.owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayHoverPause: true,
      nav: false,
      moveSlides: 1,
      dots: true,
      smartSpeed: 1000,
      navText: ['', ''],
      responsive: {
        320: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 2
        }
      }
    })
  }

  /*======== Get Full Year ========*/
  var d = new Date();
  var year = d.getFullYear();
  var copyYear = $('#copy-year');

  if (copyYear.length !== 0) {
    document.getElementById('copy-year').innerHTML = year;
  }

  /*======== 18. COUNTER-UP ========*/
  var counter = $('#counter');
  if (counter.length) {
    var a = 0;
    $(window).scroll(function () {
      var oTop = counter.offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },
            {
              duration: 5000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }

    });
  }


})(jQuery);
