/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/signUp */ "./src/js/signUp.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");



/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signUp */ "./src/js/signUp.js");

const formLogIn = document.getElementById('popup');
const emailLogIn = document.getElementById('emailLogIn');
const passwordLogIn = document.getElementById('passwordLogIn');
popup.innerHTML = `<div class="popup__body">
<div class="popup__content">
    <a href="" class="popup__close"></a>
    <div class="popup__title container_header">
        <h2 class="container_header_headline">Log In</h2>
        <i class="far fa-times-circle btnClose"></i>
    </div>
    <div class="popup__form">
        <div class="container__form_control">
            <label>Email</label>
            <input type="email" placeholder="test@test.com" id="emailLogIn"></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <div class="container__form_control">
            <label>Password</label>
            <input type="password" placeholder="password" id="passwordLogIn"></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <button class="container__form_button logIn">Log in</button>
    </div>

</div>
</div>`;
const btn = document.querySelector('.btnRest');
const btnMain = document.querySelector('.mainBtn');
const btnLogIn = document.querySelector('.logIn');
const btnClose = document.querySelector('.btnClose');

if (btnLogIn !== null) {
  btnLogIn.addEventListener('click', e => {
    console.log('log in');
    e.preventDefault();
    checkData();
  });
}

if (btnClose !== null) {
  btnClose.addEventListener('click', e => {
    formLogIn.style.display = 'none';
  });
}

if (btnMain !== null) {
  btnMain.addEventListener('click', e => {
    formLogIn.style.display = 'flex';
    formLogIn.style.top = '0';
  });
}

if (btn !== null) {
  btn.addEventListener('click', e => {
    formLogIn.style.display = 'flex';
  });
}

function checkData() {
  const emailValue = emailLogIn.value;
  const passwordValue = passwordLogIn.value;

  if (emailValue === '') {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setErrorFor(emailLogIn, 'Email cannot be blank');
  } else if (!_signUp__WEBPACK_IMPORTED_MODULE_0__.isEmail(emailValue)) {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setErrorFor(emailLogIn, 'Email is not valid');
  } else {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setSuccessFor(emailLogIn);
  }

  if (passwordValue === '') {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setErrorFor(passwordLogIn, 'Password cannot be blank');
  } else if (passwordValue.length < 6) {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setErrorFor(passwordLogIn, 'Password is too short! Minimum - 6 characters');
  } else {
    _signUp__WEBPACK_IMPORTED_MODULE_0__.setSuccessFor(passwordLogIn);
  }
}

/***/ }),

/***/ "./src/js/signUp.js":
/*!**************************!*\
  !*** ./src/js/signUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setErrorFor": () => /* binding */ setErrorFor,
/* harmony export */   "setSuccessFor": () => /* binding */ setSuccessFor,
/* harmony export */   "isEmail": () => /* binding */ isEmail
/* harmony export */ });
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const birthday = document.getElementById('birthday');
const country = document.querySelector('.country');
const city = document.querySelector('.city');
const locationButton = document.querySelector('.locationButton');

if (form !== null) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });
}

if (locationButton !== null) {
  locationButton.addEventListener('click', yourLocation);
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const birthdayValue = birthday.value;
  const countryValue = country.innerHTML;
  const cityValue = city.innerHTML;

  if (firstNameValue === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (birthdayValue === '') {
    setErrorFor(birthday, 'Birthday cannot be blank');
  } else if (Number(birthdayValue.substr(0, 4)) > 2007) {
    setErrorFor(birthday, 'You are very young!');
  } else {
    setSuccessFor(birthday);
  }

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (countryValue === 'Country' && cityValue === 'City') {
    const small = document.getElementById('location_error');
    const inputLoc = document.querySelectorAll('.location');
    inputLoc[0].style.border = '2px solid #ef7008';
    inputLoc[1].style.border = '2px solid #ef7008';
    small.style.visibility = 'visible';
    small.style.color = '#ef7008';
    small.innerText = 'Please, share your location';
  } else {
    const small = document.getElementById('location_error');
    const inputLoc = document.querySelectorAll('.location');
    inputLoc[0].style.border = '2px solid #00a6a6';
    inputLoc[1].style.border = '2px solid #00a6a6';
    small.style.visibility = 'hidden';
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 6) {
    setErrorFor(password, 'Password is too short! Minimum - 6 characters');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords don\'t match');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'container__form_control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'container__form_control success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

async function yourLocation() {
  const resu = await fetch(`http://ip-api.com/json`);
  const data = await resu.json();
  alert('We are checking your location');
  const location = document.querySelectorAll('.location');
  location[0].innerHTML = data.country;
  location[1].innerHTML = data.city;
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/sass/style.scss");
/******/ })()
;
//# sourceMappingURL=script.js.map