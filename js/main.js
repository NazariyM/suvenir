$(function () {

  (function () {
    var $nav = $('.js-nav');
    var $navBtn = $('.js-nav-toggle');
    var BODY = $('body');
    var WINDOW = $(window);

    $navBtn.on('click', function (e) {
      var $this = $(this);
      $this.toggleClass('is-active');
      BODY.toggleClass('is-locked');
      $nav.fadeToggle(100).css('display', 'flex');
    });

    WINDOW.on('resize', function () {
      $navBtn.removeClass('is-active');
      BODY.removeClass('is-locked');
      $nav.removeAttr('style');
    });
  })();

  (function () {
    var $hoverItem = $('.product-found__items').find('.item');

    $hoverItem.on('mouseover', function () {
      $(this).siblings('.item').css('z-index', '-2');
    });
    $hoverItem.on('mouseleave', function () {
      $(this).siblings('.item').removeAttr('style');
    });
  })();

  var $customSelect = $('.js-select');
  $customSelect.selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

//popup
  (function () {
    var popupOpen = $('.js-mockup-popup-open'),
      popupBlock = $('.js-mockup-popup'),
      popupIn = popupBlock.find('.mockup-popup__in'),
      body = $('body');

    popupBlock.click(function (event) {
      if ($(event.target).children(popupIn).length) {
        if (popupBlock.is(":visible")) {
          popupBlock.fadeOut();
          body.removeClass('is-locked');
        }
      }
    });
    popupOpen.on('click', function (e) {
      e.preventDefault();
      $(this).next(popupBlock).fadeIn();
      body.addClass('is-locked');
    });
    popupIn.on('click', function (ev) {
      ev.stopPropagation();
    });

  })();

  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
  });

  $('input,textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });

  jQuery(function ($) {
    $(".tel-mask").mask("+7 ( 999 ) 99 - 99 - 999");
  });

  $('header .mob-nav').click(function () {
    $(this).toggleClass('active');
    $('header nav').stop().fadeToggle();
  });

  $('.slider-main').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true
  });

  (function ($) {
    $(function () {

      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
  })(jQuery);

  $('.slider-useful-info').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });


  $('.slider-certificates').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 424,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.category-filter-list .item .tit').click(function (event) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().children('.item-content').slideUp();
    } else {
      $(this).addClass('active');
      $(this).parent().children('.item-content').slideDown();
    }

    event.preventDefault();
  });

  $('.slider-gallery-for').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-gallery-nav'
  });
  $('.slider-gallery-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.slider-gallery-product-for-1').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-1'
  });
  $('.slider-gallery-product-nav-1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-1',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-2').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-2'
  });
  $('.slider-gallery-product-nav-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-2',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-3').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-3'
  });
  $('.slider-gallery-product-nav-3').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-3',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-4').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-4'
  });
  $('.slider-gallery-product-nav-4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-4',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-5').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-5'
  });
  $('.slider-gallery-product-nav-5').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-5',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-6').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-6'
  });
  $('.slider-gallery-product-nav-6').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-6',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-7').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-7'
  });
  $('.slider-gallery-product-nav-7').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-7',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-8').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-8'
  });
  $('.slider-gallery-product-nav-8').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-8',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-9').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-9'
  });
  $('.slider-gallery-product-nav-9').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-9',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-10').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-10'
  });
  $('.slider-gallery-product-nav-10').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-10',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-11').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-11'
  });
  $('.slider-gallery-product-nav-11').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-11',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.slider-gallery-product-for-12').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    asNavFor: '.slider-gallery-product-nav-12'
  });
  $('.slider-gallery-product-nav-12').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery-product-for-12',
    dots: false,
    vertical: true,
    infinite: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.slider-set').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  $(document).ready(function () {

    $(".group1").colorbox({rel: 'group1'});
    $(".group2").colorbox({rel: 'group2', transition: "fade"});
    $(".group3").colorbox({rel: 'group3', transition: "none", width: "75%", height: "75%"});
    $(".group4").colorbox({rel: 'group4', slideshow: true});
    $(".ajax").colorbox();
    $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    $(".vimeo").colorbox({iframe: true, innerWidth: 500, innerHeight: 409});
    $(".iframe").colorbox({iframe: true, width: "80%", height: "80%"});
    $(".inline").colorbox({inline: true, width: "50%"});
    $(".callbacks").colorbox({
      onOpen: function () {
        alert('onOpen: colorbox is about to open');
      },
      onLoad: function () {
        alert('onLoad: colorbox has started to load the targeted content');
      },
      onComplete: function () {
        alert('onComplete: colorbox has displayed the loaded content');
      },
      onCleanup: function () {
        alert('onCleanup: colorbox has begun the close process');
      },
      onClosed: function () {
        alert('onClosed: colorbox has completely closed');
      }
    });

    $('.non-retina').colorbox({rel: 'group5', transition: 'none'});
    $('.retina').colorbox({rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true});

    $("#click").click(function () {
      $('#click').css({
        "background-color": "#f00",
        "color": "#fff",
        "cursor": "inherit"
      }).text("Open this window again and this message will still be here.");
      return false;
    });
  });
});

