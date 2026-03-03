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
