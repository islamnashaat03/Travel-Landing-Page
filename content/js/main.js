window.onload = function () {
  // START SCROLL TO TOP BUTTON
    let span = document.querySelector(".up");
    window.onscroll = () => {
      if (scrollY >= 800) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    };
    span.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  
  // END SCROLL TO TOP BUTTON


  // START SWIPER 

  // var swiper = new Swiper(".mySwiper", {
  //   direction: "vertical",
  //   slidesPerView: 2,
  //   loop:true,
  //   spaceBetween: 30,
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //       breakpoints: {
  //         // when window width is >= 320px
  //         320: {
  //           slidesPerView: 1,
  //           spaceBetween: 20
  //         },
  //         // when window width is >= 480px
  //         480: {
  //           slidesPerView: 2,
  //           spaceBetween: 30
  //         },
  //         // when window width is >= 640px
  //         640: {
  //           slidesPerView: 3,
  //           spaceBetween: 40
  //         }
  //       },
  // });

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect : 'slide',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}