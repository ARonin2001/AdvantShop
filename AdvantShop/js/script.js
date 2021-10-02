'use strict'

let catalogBurger = document.querySelector('.aside__catalog-btn'),
    catalogNav = document.querySelector('.aside__catalog-nav');

catalogBurger.addEventListener('click', function() {
    // if(catalogNav.style.height === "100%") {
    //     for (let i = 100; i != -1; i--) {
    //         catalogNav.style.height = i + "%";
    //     }
    //     catalogNav.style.border = "none";
    //     return;
    // }

    // catalogNav.style.border = "1px solid #efeff4;";
    // for (let i = 1; i <= 100; i++) {
    //     catalogNav.style.height = i + "%";
    // }

    if(catalogNav.style.display === "none") {
        catalogNav.style.display = "block";
        return;
    }

    catalogNav.style.display = "none";
});

// Slick
// scroll main baner
$('.autoplay').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true, 
    autoplay: true,
    autoplaySpeed: 5000
});

// tovars slick slider
$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// images slider tovars
(function ($) {
    $.fn.HvrSlider = function () {
      return this.each(function () {
        var el = $(this);
        if (el.find('img').length > 1) {
          var hvr = $('<div>', {
            class: 'hvr',
            append: [
              $('<div>', {
                class: 'hvr__images',
                append: $('<div>', {
                  class: 'hvr__sectors',
                }),
              }),
              $('<div>', {
                class: 'hvr__dots',
              }),
            ],
            insertAfter: el,
            prepend: el,
          });
          var hvrImages = $('.hvr__images', hvr);
          var hvrImage = $('img', hvr);
          var hvrSectors = $('.hvr__sectors', hvr);
          var hvrDots = $('.hvr__dots', hvr);
          el.prependTo(hvrImages);
          hvrImage.each(function () {
            hvrSectors.prepend('<div class="hvr__sector"></div>');
            hvrDots.append('<div class="hvr__dot"></div>');
          });
          $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
          var setActiveEl = function (el) {
            hvrImage.hide().eq(el.index()).show();
            $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
          };
          $('.hvr__sector', hvrSectors).hover(function () {
            setActiveEl($(this));
          });
          hvrSectors.on('touchmove', function (e) {
            e.preventDefault();
            var position = e.originalEvent.changedTouches[0];
            var target = document.elementFromPoint(position.clientX, position.clientY);
            if ($(target).is('.hvr__sector')) {
              setActiveEl($(target));
            }
          });
        }
      });
    };
})(jQuery);

$('.images').HvrSlider();
