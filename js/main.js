$(function () {
  // ================================= FANCYBOX =================================
  // ================================= FANCYBOX =================================
  Fancybox.bind("[data-fancybox]", {
    
  });

  // ================================= MixItUp =================================
  // ================================= MixItUp =================================

  var mixer = mixitup('.directions__list', {
    callbacks: {
        onMixStart: function() {
            // Отключаем переходы на время анимации
            document.querySelectorAll('.directions__list-item').forEach(el => {
                el.classList.remove('directions__list-item--animation')
                el.style.pointerEvents = 'none'
            });
        },
        onMixEnd: function() {
            setTimeout(() => {
              document.querySelectorAll('.directions__list-item').forEach(el => {
                  el.classList.add('directions__list-item--animation')
                  el.style.pointerEvents = 'auto';
              });
            }, 50); // 50ms задержки
        }
    }
  });

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

  // ================================= SCROLE ANIMATIOM FOR LINK =================================
  // ================================= SCROLE ANIMATIOM FOR LINK =================================

  $(".header__nav-list a, .header__top-btn, .header__content-btn, .header__content-btn").on('click', function (e) {
    e.preventDefault() // отменяем стандартное действие перехода по ссылке
      
    var elementClick = $(this).attr("href") // получаем значение атрибута href
    var top = $(elementClick).offset().top // определяем координаты элемента
    
    $('body,html').animate({ scrollTop: top }, 800) // 800 — время прокрутки в мс
  });

  $(".footer__top-inner .footer__column:not(:nth-child(4)) a, .footer__go-top").on('click', function (e) {
    
    e.preventDefault() // отменяем стандартное действие перехода по ссылке
      
    var elementClick = $(this).attr("href") // получаем значение атрибута href
    var top = $(elementClick).offset().top // определяем координаты элемента
    
    $('body,html').animate({ scrollTop: top }, 800) // 800 — время прокрутки в мс
  });


  // ================================= SCROLE AND CHOISE COURSE IN FOOTER =================================
  // ================================= SCROLE AND CHOISE COURSE IN FOOTER =================================

  
  const footerLinks = document.querySelectorAll('.footer__column-list [data-filter]');
  const filterButtons = document.querySelectorAll('.directions__filter-box button');
  
  footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отключаем стандартный переход
            
            const filter = this.dataset.filter; // Получаем фильтр
            
            // Активируем соответствующий фильтр
            filterButtons.forEach(btn => {
                btn.classList.remove('directions__filter-btn--active');
                if (btn.dataset.filter === filter) {
                    btn.classList.add('directions__filter-btn--active');
                }
            });
            
            // Применяем фильтр через MixItUp
            mixer.filter(filter);
        });
    });

});
