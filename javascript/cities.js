document.addEventListener("DOMContentLoaded", () => {
  // burger menu
  const toggleButton = document.querySelector("#navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector("#navbar .mobile-nav-links");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
  // nav bar border on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // pop up effect when scrolled to
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
  // footer date
  const date = (document.getElementById("date").innerHTML =
    new Date().getFullYear());
});
// lightbox
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function showSlide(n) {
  let slides = document.getElementsByClassName("slides");
  let slidesCaption = document.querySelectorAll(".slides .slides-image");
  let caption = document.getElementById("caption");
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[n - 1].style.display = "block";
  caption.innerText = slidesCaption[n - 1].alt;
}
