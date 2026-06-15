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




  


});
