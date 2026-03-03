const popupCard = document.getElementById("pop-up-card");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("popped");
    } else {
      entry.target.classList.remove("popped");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
if (popupCard) {
  observer.observe(popupCard);
}
