const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
}

//Show Success Outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  console.log("Show success");
}

//Check if email is valid
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//check required fields

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() == "") {
      showError(input, `${getFieldName(input)} is required `);
    } else {
      showSuccess(input);
    }
  });
}
//Get field name

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  checkRequired([username, email, password, password2]);
});
