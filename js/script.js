const burgerMenu = document.querySelector(".burger__menu");

const ticketHeader = document.querySelector(".ticket__header h3");
const ticketForm = document.querySelector(".ticket form");
const ticketName = document.querySelector(".ticket__body-name input");
const ticketEmail = document.querySelector(".ticket__body-email input");
const ticketMessage = document.querySelector(".ticket__footer > #message");

const subscribeHeader = document.querySelector(".subscribe__info h4");
const subscribeForm = document.querySelector(".subscribe form");
const subscribeInputs = document.querySelectorAll(
  ".subscribe__input .input-field"
);

const navLinks = document.querySelector(".nav-links");
const burgerLine1 = document.querySelector(".line1");
const burgerLine2 = document.querySelector(".line2");
const burgerLine3 = document.querySelector(".line3");
const subMenuContainer = document.querySelector(".sub-menu-container");
const subMenu = document.querySelector(".sub-menu");

const scrollAniElements = document.querySelectorAll(".scroll-animate");

function disableInput(input) {
  input.setAttribute("disabled", "");
}

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
// ticket submit
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ticketHeader.innerText = "Thanks for submitting!";
  disableInput(ticketName);
  disableInput(ticketEmail);
  disableInput(ticketMessage);
});
// subscribe submit
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  subscribeHeader.innerText = "Thanks for subscribing!";
  subscribeInputs.forEach((input) => {
    disableInput(input);
  });
});

// appear on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-show");
    }
    //  else {
    //   entry.target.classList.remove("scroll-show");
    // }
  });
});
scrollAniElements.forEach((el) => observer.observe(el));
