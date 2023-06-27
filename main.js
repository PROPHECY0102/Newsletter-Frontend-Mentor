const submitBtn = document.querySelector(".email-submit");
const newsletter = document.querySelector(".newsletter");
const success = document.querySelector(".success");
const container = document.querySelector(".container");
const emailInput = document.querySelector(".email-input");
const errortext = document.querySelector(".email-error");

submitBtn.addEventListener("click", (e) => {
  ValidateEmail(emailInput.value);
});

document.addEventListener("keydown", enterSubmit);

emailInput.addEventListener("click", (e) => {
  emailInput.removeAttribute("data-error");
  errortext.removeAttribute("data-error");
});

const dismiss = document.querySelector(".dismiss");
const emailTemplate = document.querySelector(".email-address");

dismiss.addEventListener("click", (e) => {
  handleDismiss();
});

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    handleSuccess(email);
    document.removeEventListener("keydown", enterSubmit);
  } else {
    handleError();
  }
}

function handleSuccess(email) {
  newsletter.setAttribute("data-visible", false);
  success.setAttribute("data-visible", true);
  container.setAttribute("data-content", "success");
  emailTemplate.innerText = email;
  escapeDismiss();
}

function handleError() {
  emailInput.setAttribute("data-error", true);
  errortext.setAttribute("data-error", true);
}

function handleDismiss() {
  newsletter.setAttribute("data-visible", true);
  success.setAttribute("data-visible", false);
  container.setAttribute("data-content", "newsletter");
  document.addEventListener("keydown", enterSubmit);
}

function enterSubmit(e) {
  if (e.key === "Enter") {
    ValidateEmail(emailInput.value);
  }
}

function escapeDismiss() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleDismiss();
    }
  });
}
