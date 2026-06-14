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
  })


});
