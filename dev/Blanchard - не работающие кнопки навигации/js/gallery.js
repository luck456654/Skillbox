let gallerySlider = new Swiper(".gallery__right--content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  
  pagination: {
    el: ".gallery-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-btn--next",
    prevEl: ".gallery-btn--prev"
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn:1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      slidesPerColumn:2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView:2,
      slidesPerColumn:2,
      spaceBetween: 50
    },
    10000: {
      slidesPerView:3,
      slidesPerColumn:2,
      spaceBetween: 50
    }
  },
  
  spaceBetween: 30,
  pagination: {
    el: ".gallery__pagination--right",
    type: "fraction"
  },
 

  

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});







