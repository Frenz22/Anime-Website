var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
  });

  var swiper = new Swiper(".toptrend", {
    slidesPerView: 4,
    spaceBetween: 40,
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
});