const accordionItems = document.querySelectorAll(".accordion-content");

accordionItems.forEach((item) => {
  const question = item.querySelector(".question");

  question.addEventListener("click", function () {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});
