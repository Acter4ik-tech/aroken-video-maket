$(function () {
  // ================================= FANCYBOX =================================
  // ================================= FANCYBOX =================================
  Fancybox.bind("[data-fancybox]", {
    // width: "90%", 
    // maxWidth: 900,
    // height: "70%", 
    // maxHeight: 600
  });

  // ================================= MixItUp =================================
  // ================================= MixItUp =================================

  var mixer = mixitup('.directions__list');

  // ================================= AddPrefixForDirectionsButtons =================================
  // ================================= AddPrefixForDirectionsButtons =================================

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  });

  // ================================= TEAM SLIDER =================================
  // ================================= TEAM SLIDER =================================

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

  // ================================= TESTIMONIALS SLIDER =================================
  // ================================= TESTIMONIALS SLIDER =================================



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

  // ================================= COURSE CLICK FOR LINK =================================
  // ================================= COURSE CLICK FOR LINK =================================



  $('.cousre__lesson-link').on('click', function (e) {
    e.preventDefault()
    if($(this).hasClass('cousre__lesson-link--active')) {
      $(this).children('.cousre__lesson-desc').slideUp()
      $('.cousre__lesson-link').removeClass('cousre__lesson-link--active')
    }
    else {
      $('.cousre__lesson-link').removeClass('cousre__lesson-link--active')
      $('.cousre__lesson-desc').slideUp()
      $(this).children('.cousre__lesson-desc').slideDown()
      $(this).addClass('cousre__lesson-link--active')
    }
  })


  


});
