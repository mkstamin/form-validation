const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error Message
function errorMessage(input, message) {
  const inputElement = input.parentElement;
  inputElement.className = 'form-control error';
  const small = inputElement.querySelector('small');
  small.innerText = message;
}

//Success message
function successMessage(input) {
  const inputElement = input.parentElement;
  inputElement.className = 'form-control success';
}

//Check Input Elements
function checkInputElement(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == '') {
      errorMessage(input, `${inputFieldName(input)} is requerd`);
    } else {
      successMessage(input);
    }
  });
}

//Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be al least ${min} characters`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} characters`
    );
  } else {
    successMessage(input);
  }
}

//Check email
function checkEmail(email) {
  const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regx.test(email.value.trim())) {
    successMessage(email);
  } else {
    errorMessage(email, 'Email is not valid');
  }
}

//Match passwords
function matchPassword(password, password2) {
  if (password.value !== password2.value) {
    errorMessage(password2, 'Password does not match');
  }
}

//Input fields name
function inputFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//add event listener
form.addEventListener('click', function (e) {
  e.preventDefault();

  checkInputElement([username, email, password, password2]);
  checkLength(username, 3, 25);
  checkLength(password, 6, 35);
  checkEmail(email);
  matchPassword(password, password2);
});
