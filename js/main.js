$(function () {
  // --------------FancyBox--------------
  Fancybox.bind("[data-fancybox]", {
    // width: "90%", 
    // maxWidth: 900,
    // height: "70%", 
    // maxHeight: 600
  });

  // -----------------MixItUp---------------
  var mixer = mixitup('.directions__list');

  // --------------------AddPrefixForDirectionsButtons---------------
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  });

  $('.team__slider').slick({
    arrows:false,
    slidesToShow: 4,
    draggable: false,
  })

  $('.team__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows:false,
    slidesToShow: 1,
    draggable: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  })

  $('.testimonials__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })


  $('.cousre__lesson-link').on('click', function (e) {
    e.preventDefault()
    if($('.cousre__lesson-link').hasClass('cousre__lesson-link--active')) {
      $('.cousre__lesson-link').removeClass('cousre__lesson-link--active')
      $(this).children('.cousre__lesson-desc').slideUp()
    }
    else {
      $(this).addClass('cousre__lesson-link--active')
      $(this).children('.cousre__lesson-desc').slideUp()
    }
    // $(this).removeClass('cousre__lesson-link--active')
  })


  


});
