const burgerMenu = document.querySelector(".burger__menu");
const navLinks = document.querySelector(".nav-links");
const burgerLine1 = document.querySelector(".line1");
const burgerLine2 = document.querySelector(".line2");
const burgerLine3 = document.querySelector(".line3");
const subMenuContainer = document.querySelector(".sub-menu-container");
const subMenu = document.querySelector(".sub-menu");

// Burger MENU
burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  burgerLine1.classList.toggle("line1-open");
  burgerLine2.classList.toggle("line2-open");
  burgerLine3.classList.toggle("line3-open");
});

// Sub MENU in burger Menu
subMenuContainer.addEventListener("click", () => {
  subMenu.classList.toggle("open-sub-menu");
});
