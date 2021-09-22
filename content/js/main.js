window.onload = function () {
  // START SCROLL TO TOP BUTTON
  if (window.matchMedia('(min-width:992px)').matches) {
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
  }
  // END SCROLL TO TOP BUTTON
}