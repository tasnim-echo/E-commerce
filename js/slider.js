const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slider-item");
const leftArrows = document.querySelectorAll(".left-arrow");
const rightArrows = document.querySelectorAll(".right-arrow");

let slideIndex = 0;
let intervalId = null;

rightArrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    clearInterval(intervalId);
    nextSlide();
    intervalId = setInterval(nextSlide, 5000);
  });
});

leftArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    clearInterval(intervalId);
    prevSlide();
    intervalId = setInterval(nextSlide, 5000);
  });
});

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    console.log(intervalId);
  }
}
initializeSlider();

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
