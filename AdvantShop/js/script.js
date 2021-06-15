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

// scroll main baner
$('.autoplay').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
    // infinite: true, 
    // autoplay: true,
    // autoplaySpeed: 2000,
});
