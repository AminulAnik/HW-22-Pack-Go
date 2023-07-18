$('.dest_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0',
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
      breakpoint: 475.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]

});


$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$('.testimonial_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});


//  ================

let main_menu = document.querySelector('.main_menu')
console.log(main_menu);

window.addEventListener('scroll', () => {
  let scrollig = window.scrollY

  if (scrollig > 300) {

    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})


// =====================



let back_tp = document.querySelector('.back_tp')
console.log(back_tp);

window.addEventListener('scroll', () => {

  let scrooling = window.scrollY

  if (scrooling > 500) {

    back_tp.classList.add('back_tp_fixed')
  } else {
    back_tp.classList.remove('back_tp_fixed')
  }

  back_tp.addEventListener('click', ()=>{
    
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  })

})


// ========================Swiper responsive==================
const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
       576: {
          slidesPerView: 1  ,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();