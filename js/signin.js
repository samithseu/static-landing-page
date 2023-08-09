const signinSection = document.querySelector(".sign-form-container");
const signinForm = document.querySelector(".signin-form-container form");
const signinHeader = document.querySelector(".form-header h1");
const signinInputs = document.querySelectorAll(".input-row input");
const signinBtn = document.querySelector(".btn-signin");
console.log(signinInputs);

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signinHeader.innerText = "Thanks for signing in!";
  signinInputs.forEach((input) => {
    input.setAttribute("disabled", "");
  });
});
