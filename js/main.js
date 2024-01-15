const slidesContainer = document.getElementById("slides");
const thumbContainer = document.getElementById("thumb");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const slidesArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let slideHTML = "";
let thumbHTML = "";
let slideCount = 0;
let thumbIndex = 0;

for (i = 0; i < slidesArray.length; i++) {
  const slideName = slidesArray[i];
  let slideCount = i;
  console.log("ciclo for " + slideCount);

  let activeSlide = slideCount == 0 ? "active" : "";
  let activeThumb = slideCount == 0 ? "thumb-active" : "";

  slideHTML += `<img src="./img/${slideName}" class="slide ${activeSlide}" alt="slide ${
    i + 1
  }" />`;

  //   thumbHTML += `<img src="./img/${slideName}" class="thumb-image ${activeThumb}" alt="thumb ${
  //     i + 1
  //   }" />`;

  let thumbEl = document.createElement("img");
  thumbEl.setAttribute("src", `./img/${slideName}`);
  thumbEl.setAttribute("class", `thumb-image ${activeThumb}`);
  thumbEl.setAttribute("alt", `thumb ${i + 1}`);
  thumbEl.setAttribute("data-thumb-index", i);

  thumbEl.addEventListener("click", function () {
    const allSlides = document.getElementsByClassName("slide");
    const allThumb = document.getElementsByClassName("thumb-image");

    let currentSlide = document.querySelector(".slide.active");
    currentSlide.classList.remove("active");

    let oldThumb = document.querySelector(".thumb-image.thumb-active");
    oldThumb.classList.remove("thumb-active");

    let newThumb = this;
    let newThumbIndex = parseInt(this.getAttribute("data-thumb-index"));
    thumbIndex = newThumbIndex;
    console.log("premuta immagine " + thumbIndex);
    slideCount = thumbIndex;
    console.log(slideCount);
    const newSlide = allSlides[newThumbIndex];
    newSlide.classList.add("active");

    newThumb.classList.add("thumb-active");
  });

  thumbContainer.append(thumbEl);
}

slidesContainer.innerHTML = slideHTML;
// thumbContainer.innerHTML = thumbHTML;

nextButton.addEventListener("click", function () {
  slideCount = thumbIndex;
  console.log("tasto premuto prima di incrementare " + slideCount);
  const allSlides = document.getElementsByClassName("slide");
  const allThumb = document.getElementsByClassName("thumb-image");

  let currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  let currentThumb = document.querySelector(".thumb-image.thumb-active");
  currentThumb.classList.remove("thumb-active");

  if (thumbIndex < slidesArray.length - 1) {
    slideCount++;
    thumbIndex++;
  } else {
    slideCount = 0;
    thumbIndex = 0;
  }
  console.log(slideCount);
  const newSlide = allSlides[slideCount];
  newSlide.classList.add("active");

  const newThumb = allThumb[slideCount];
  newThumb.classList.add("thumb-active");
});

prevButton.addEventListener("click", function () {
  slideCount = thumbIndex;
  const allSlides = document.getElementsByClassName("slide");
  const allThumb = document.getElementsByClassName("thumb-image");

  let currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  let currentThumb = document.querySelector(".thumb-image.thumb-active");
  currentThumb.classList.remove("thumb-active");

  if (thumbIndex > 0) {
    slideCount--;
    thumbIndex--;
  } else {
    slideCount = slidesArray.length - 1;
    thumbIndex = slidesArray.length - 1;
  }

  const newSlide = allSlides[slideCount];
  newSlide.classList.add("active");

  const newThumb = allThumb[slideCount];
  newThumb.classList.add("thumb-active");
});
