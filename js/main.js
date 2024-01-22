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
  let slideCounts = i;

  let activeSlide = slideCounts == 0 ? "active" : "";
  let activeThumb = slideCounts == 0 ? "thumb-active" : "";

  slideHTML += `<img src="./img/${slideName}" class="slide ${activeSlide}" alt="slide ${
    i + 1
  }" />`;

  let thumbEl = document.createElement("img");
  thumbEl.setAttribute("src", `./img/${slideName}`);
  thumbEl.setAttribute("class", `thumb-image ${activeThumb}`);
  thumbEl.setAttribute("alt", `thumb ${i + 1}`);
  thumbEl.setAttribute("data-thumb-index", i);

  thumbEl.addEventListener("click", function () {
    getCurrents();

    let newThumbIndex = parseInt(this.getAttribute("data-thumb-index"));
    slideCount = newThumbIndex;

    setNews(newThumbIndex);
  });

  thumbContainer.append(thumbEl);
}

slidesContainer.innerHTML = slideHTML;

nextButton.addEventListener("click", function () {
  slideCount = goToNextSlide(slidesArray, slideCount);
});

prevButton.addEventListener("click", function () {
  getCurrents();

  if (slideCount > 0) {
    slideCount--;
  } else {
    slideCount = slidesArray.length - 1;
  }

  setNews(slideCount);
});

setInterval(function () {
  slideCount = goToNextSlide(slidesArray, slideCount);
}, 3000);
