$('.dest_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0'
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