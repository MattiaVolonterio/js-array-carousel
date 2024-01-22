function getCurrents() {
  let currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  let currentThumb = document.querySelector(".thumb-image.thumb-active");
  currentThumb.classList.remove("thumb-active");
}

function setNews(index) {
  const allSlides = document.getElementsByClassName("slide");
  const allThumb = document.getElementsByClassName("thumb-image");
  const newSlide = allSlides[index];
  newSlide.classList.add("active");

  const newThumb = allThumb[index];
  newThumb.classList.add("thumb-active");
}
