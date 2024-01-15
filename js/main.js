const slidesContainer = document.getElementById("slides");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const slidesArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let slideHTML = "";
let slideCount = 0;

for (i = 0; i < slidesArray.length; i++) {
  const slideName = slidesArray[i];
  let slideCount = i;

  let activeSlide = slideCount == 0 ? "active" : "";

  slideHTML += `<img src="./img/${slideName}" class="slide ${activeSlide}" alt="slide ${
    i + 1
  }" />`;
}

slidesContainer.innerHTML = slideHTML;

nextButton.addEventListener("click", function () {
  const allSlides = document.getElementsByClassName("slide");

  let currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideCount < slidesArray.length - 1) {
    slideCount++;
  } else {
    slideCount = 0;
  }

  const newSlide = allSlides[slideCount];
  newSlide.classList.add("active");
});

prevButton.addEventListener("click", function () {
  const allSlides = document.getElementsByClassName("slide");

  let currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideCount > 0) {
    slideCount--;
  } else {
    slideCount = slidesArray.length - 1;
  }

  const newSlide = allSlides[slideCount];
  newSlide.classList.add("active");
});
