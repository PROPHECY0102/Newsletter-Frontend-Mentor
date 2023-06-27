const submitBtn = document.querySelector(".email-submit");
const newsletter = document.querySelector(".newsletter");
const success = document.querySelector(".success");
const container = document.querySelector(".container");
const emailInput = document.querySelector(".email-input");
const errortext = document.querySelector(".email-error");

submitBtn.addEventListener("click", (e) => {
  ValidateEmail(emailInput.value);
});

emailInput.addEventListener("click", (e) => {
  emailInput.removeAttribute("data-error");
  errortext.removeAttribute("data-error");
});

const dismiss = document.querySelector(".dismiss");
const emailTemplate = document.querySelector(".email-address");

dismiss.addEventListener("click", (e) => {
  newsletter.setAttribute("data-visible", true);
  success.setAttribute("data-visible", false);
  container.setAttribute("data-content", "newsletter");
});

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    newsletter.setAttribute("data-visible", false);
    success.setAttribute("data-visible", true);
    container.setAttribute("data-content", "success");
    updateEmail(email);
  } else {
    emailInput.setAttribute("data-error", true);
    errortext.setAttribute("data-error", true);
  }
}

function updateEmail(email) {
  emailTemplate.innerText = email;
}
