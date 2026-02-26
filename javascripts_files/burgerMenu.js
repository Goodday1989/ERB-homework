document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("#navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector("#navbar .mobile-nav-links");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
