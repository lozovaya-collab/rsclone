/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_signUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/signUp */ "./src/js/signUp.js");
/* harmony import */ var _js_autocomplitAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/autocomplitAPI */ "./src/js/autocomplitAPI.js");
/* harmony import */ var _js_autocomplitAPI__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_autocomplitAPI__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/map */ "./src/js/map.js");
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_apiData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/apiData */ "./src/js/apiData.js");
/* harmony import */ var _js_sortRestaurants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/sortRestaurants */ "./src/js/sortRestaurants.js");
/* harmony import */ var _js_setBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/setBackground */ "./src/js/setBackground.js");
/* harmony import */ var _js_setBackground__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_setBackground__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_addClickHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/addClickHandlers */ "./src/js/addClickHandlers.js");








window.addEventListener('DOMContentLoaded', () => {
  //click sorting 
  (0,_js_addClickHandlers__WEBPACK_IMPORTED_MODULE_7__.addFilterPriceClickHandler)();
  (0,_js_addClickHandlers__WEBPACK_IMPORTED_MODULE_7__.addFilterRestaurantsClickHandler)();
});

/***/ }),

/***/ "./src/js/addClickHandlers.js":
/*!************************************!*\
  !*** ./src/js/addClickHandlers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFilterPriceClickHandler": () => /* binding */ addFilterPriceClickHandler,
/* harmony export */   "addFilterRestaurantsClickHandler": () => /* binding */ addFilterRestaurantsClickHandler
/* harmony export */ });
//filter price
const addFilterPriceClickHandler = () => {
  let filter = document.querySelector('.filter');

  if (filter !== null) {
    filter.addEventListener('click', e => {
      if (e.target.classList.contains('filter_box')) {
        let clickedFilter = e.target;
        removeSelectedFilter();
        selectClickedFilter(clickedFilter);

        if (clickedFilter.innerText === 'All') {
          showAllFilters();
        } else {
          filterBySelectedValue(clickedFilter.innerText);
        }
      }
    });
  }
};

const removeSelectedFilter = () => {
  let filterBox = document.querySelectorAll('.filter_box');
  filterBox.forEach(filter => {
    filter.classList.remove('filter_active');
  });
};

const selectClickedFilter = clickedFilter => {
  clickedFilter.classList.add('filter_active');
};

const showAllFilters = () => {
  let filterValues = document.querySelectorAll('.cards_wrapper > a');
  filterValues.forEach(value => {
    value.classList.remove('hidden');
  });
  removeSelectedFilterRestaurant();
};

const filterBySelectedValue = selectedValue => {
  let filterValues = document.querySelectorAll('.cards_wrapper > a');
  filterValues.forEach(value => {
    value.classList.add('hidden'); //filter price

    value.querySelectorAll('.priceRestaurant').forEach(item => {
      if (item.innerText === selectedValue) {
        value.classList.remove('hidden');
      }
    }); //filter restaurants

    value.querySelectorAll('.service_restaurant > span').forEach(item => {
      if (item.innerText === selectedValue) {
        value.classList.remove('hidden');
      }
    });
  });
}; //filter restaurants


const addFilterRestaurantsClickHandler = () => {
  let typeRestaurant = document.querySelector('.type_restaurant');
  typeRestaurant.addEventListener('click', e => {
    if (e.target.classList.contains('titleRestaurant')) {
      let clickedFilterRestaurants = e.target;
      let choiceRestaurant = clickedFilterRestaurants.innerText.trim();
      removeSelectedFilterRestaurant();
      selectClickedRestaurant(clickedFilterRestaurants);
      filterBySelectedValue(choiceRestaurant);
    }
  });
};

const selectClickedRestaurant = clickedRestaurant => {
  clickedRestaurant.classList.add('titleRestaurant_active');
};

const removeSelectedFilterRestaurant = () => {
  let filterBoxRestaurants = document.querySelectorAll('.titleRestaurant');
  filterBoxRestaurants.forEach(filter => {
    filter.classList.remove('titleRestaurant_active');
  });
};

/***/ }),

/***/ "./src/js/apiData.js":
/*!***************************!*\
  !*** ./src/js/apiData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/response */ "./src/js/data/response.json");

const arrayRestaurants = [];
const restaurantsData = [];

const getListRestaurants = () => {
  for (let s = 0; s < _data_response__WEBPACK_IMPORTED_MODULE_0__.businesses.length; s += 1) {
    arrayRestaurants.push(_data_response__WEBPACK_IMPORTED_MODULE_0__.businesses[s]);
  }

  arrayRestaurants.push(_data_response__WEBPACK_IMPORTED_MODULE_0__.businesses);

  for (let i = 0; i < arrayRestaurants.length; i += 1) {
    restaurantsData.push({
      id: arrayRestaurants[i].id,
      name: arrayRestaurants[i].name,
      categories: arrayRestaurants[i].categories,
      image_url: arrayRestaurants[i].image_url,
      rating: arrayRestaurants[i].rating,
      coordinates: arrayRestaurants[i].coordinates,
      price: arrayRestaurants[i].price,
      display_phone: arrayRestaurants[i].display_phone,
      phone: arrayRestaurants[i].phone,
      location: arrayRestaurants[i].location
    });
  } //  console.log(restaurantsData)

};

getListRestaurants(); //  console.log(arrayRestaurants)
//  const url = './data/response.json'
//  async function fetchRestaurantsData() {
//      const response = await fetch(url)
//      const data = await response.json()
//      console.log('data:', data)
//  }
//  fetchRestaurantsData()

/***/ }),

/***/ "./src/js/autocomplitAPI.js":
/*!**********************************!*\
  !*** ./src/js/autocomplitAPI.js ***!
  \**********************************/
/***/ (() => {

//  const a = []
//  fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete", {
//          "method": "POST",
//          "headers": {
//              "content-type": "application/x-www-form-urlencoded",
//              "x-rapidapi-key": "0a5e8ea8famsh2a13ee1d64f6f30p11306ajsn125f10dd8276",
//              "x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com"
//          },
//          "body": {
//              "accessToken": "<REQUIRED>",
//              "text": "<REQUIRED>"
//          }
//      })
//      .then(response => {
//          a.push(response)
//          console.log(response);
//      })
//      .catch(err => {
//          console.error(err);
//      });
//  console.log(a)

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
} // if (formLogIn) {
//     document.querySelector('body').style.overflow = 'hidden'
// } else {
//     document.querySelector('body').style.overflow = 'visible'
// }


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

/***/ "./src/js/setBackground.js":
/*!*********************************!*\
  !*** ./src/js/setBackground.js ***!
  \*********************************/
/***/ (() => {

const backgroundHeader = document.querySelector('.main_header');
const baseBackgroundLink = './src/assets/images/';
const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'];
let i = 0;
let index;
let imageSrc;

const viewBackgroundImage = data => {
  if (backgroundHeader != null) {
    let src = data;
    const img = document.createElement('img');
    img.src = src;

    img.onload = () => {
      backgroundHeader.style.backgroundImage = `url(${src})`;
    };
  }
};

const setBackground = async () => {
  index = Math.floor(Math.random() * img.length);
  imageSrc = baseBackgroundLink + img[index];
  viewBackgroundImage(imageSrc);
  i++;
  setTimeout(setBackground, 8000);
};

setBackground();

/***/ }),

/***/ "./src/js/signUp.js":
/*!**************************!*\
  !*** ./src/js/signUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/sortRestaurants.js":
/*!***********************************!*\
  !*** ./src/js/sortRestaurants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTitleRestaurants": () => /* binding */ getTitleRestaurants
/* harmony export */ });
const getTitleRestaurants = () => {
  const linkRestaurants = document.querySelector('.restaurant_view');
  const boxTypeRestaurant = document.querySelector('.box_type_restaurant');

  if (linkRestaurants !== null) {
    linkRestaurants.addEventListener('mouseover', () => {
      boxTypeRestaurant.classList.add('box_type_active');
      boxTypeRestaurant.addEventListener('mouseleave', () => {
        boxTypeRestaurant.classList.remove('box_type_active');
      });
    });
  }
};
getTitleRestaurants();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/data/response.json":
/*!***********************************!*\
  !*** ./src/js/data/response.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"businesses\":[{\"id\":\"du0bCR907qLiB6cGeVFOew\",\"alias\":\"wilf-and-adas-ottawa\",\"name\":\"Wilf & Ada's\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/m8OOg3YpjRWHfX_5Dx_AIg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/wilf-and-adas-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":331,\"categories\":[{\"alias\":\"diners\",\"title\":\"Diners\"},{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.41021,\"longitude\":-75.69287},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"510 Bank Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K2P 1Z4\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"510 Bank Street\",\"Ottawa, ON K2P 1Z4\",\"Canada\"]},\"phone\":\"+16132317959\",\"display_phone\":\"+1 613-231-7959\",\"distance\":1885.196073658545},{\"id\":\"Dx-TzKEpnA0SFpJ8WU1O3g\",\"alias\":\"prohibition-public-house-ottawa\",\"name\":\"Prohibition Public House\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/6pA0kLmKNzLMqmtirFfqtA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/prohibition-public-house-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":54,\"categories\":[{\"alias\":\"gastropubs\",\"title\":\"Gastropubs\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.41599,\"longitude\":-75.69552},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"337 Somerset Street W\",\"address2\":\"\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K2P 0J8\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"337 Somerset Street W\",\"Ottawa, ON K2P 0J8\",\"Canada\"]},\"phone\":\"+16135652704\",\"display_phone\":\"+1 613-565-2704\",\"distance\":2439.1536866144565},{\"id\":\"PCz2kippn2fTs5-pAwEJ_Q\",\"alias\":\"riviera-ottawa\",\"name\":\"Riviera\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/87R0vjDZiadbps8sMfGixg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/riviera-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":87,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.42274,\"longitude\":-75.69598},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"62 Sparks Street\",\"address2\":\"\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K1P 5A5\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"62 Sparks Street\",\"Ottawa, ON K1P 5A5\",\"Canada\"]},\"phone\":\"+16132336262\",\"display_phone\":\"+1 613-233-6262\",\"distance\":3208.803192437088},{\"id\":\"9Qbx-yT724RFmJRhj4jXUw\",\"alias\":\"lift-restaurant-ottawa\",\"name\":\"Lift Restaurant\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/blIJVw4c_LziUDmguDYnaQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/lift-restaurant-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":11,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.4184911,\"longitude\":-75.704231},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"101 Lyon Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1R\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"101 Lyon Street\",\"Ottawa, ON K1R\",\"Canada\"]},\"phone\":\"+16136886802\",\"display_phone\":\"+1 613-688-6802\",\"distance\":2687.7618230525145},{\"id\":\"84y9MEGv4sqbtxgbIbvWAg\",\"alias\":\"bennys-bistro-ottawa\",\"name\":\"Benny's Bistro\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/Ax4mWG14_b_hO8Z4XQXpgw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/bennys-bistro-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":112,\"categories\":[{\"alias\":\"bistros\",\"title\":\"Bistros\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.4301472,\"longitude\":-75.6926331},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"119 Murray St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1N 5M5\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"119 Murray St\",\"Ottawa, ON K1N 5M5\",\"Canada\"]},\"phone\":\"+16137897941\",\"display_phone\":\"+1 613-789-7941\",\"distance\":4031.1558495501067},{\"id\":\"IeQNKf1szPuLtq23u9BXyA\",\"alias\":\"town-ottawa\",\"name\":\"Town\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/g_S1vDFppgKJbtvX-JknIA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/town-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":146,\"categories\":[{\"alias\":\"italian\",\"title\":\"Italian\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.4166878,\"longitude\":-75.6896973},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"296 Elgin Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K2P 1M3\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"296 Elgin Street\",\"Ottawa, ON K2P 1M3\",\"Canada\"]},\"phone\":\"+16136958696\",\"display_phone\":\"+1 613-695-8696\",\"distance\":2637.6807507741314},{\"id\":\"iN8UmCrCKqs64MxVyf2Dqw\",\"alias\":\"pelican-seafood-market-and-grill-ottawa\",\"name\":\"Pelican Seafood Market & Grill\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/Ws6R2e57I9a2zHAaCPBI_Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/pelican-seafood-market-and-grill-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":87,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"},{\"alias\":\"seafoodmarkets\",\"title\":\"Seafood Markets\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.38109810509447,\"longitude\":-75.6704451227539},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"1500 Bank Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1H 7Z2\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"1500 Bank Street\",\"Ottawa, ON K1H 7Z2\",\"Canada\"]},\"phone\":\"+16135265229\",\"display_phone\":\"+1 613-526-5229\",\"distance\":2827.3374367371393},{\"id\":\"TvH2AEOafSPW1HvC3lGBow\",\"alias\":\"art-is-in-bakery-ottawa-2\",\"name\":\"Art Is In Bakery\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/qjLbxH96tw-C0O_fiAD_1Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/art-is-in-bakery-ottawa-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":274,\"categories\":[{\"alias\":\"bakeries\",\"title\":\"Bakeries\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.409177,\"longitude\":-75.71782},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"250 City Centre Avenue\",\"address2\":\"Unit 112\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1R 1C7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"250 City Centre Avenue\",\"Unit 112\",\"Ottawa, ON K1R 1C7\",\"Canada\"]},\"phone\":\"+16136951226\",\"display_phone\":\"+1 613-695-1226\",\"distance\":2088.4986662157885},{\"id\":\"8KCGtxDioiQrl2dygo5emA\",\"alias\":\"mati-ottawa\",\"name\":\"Mati\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/s2Db1nZGgrUNoBqOKfoQ_w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/mati-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":35,\"categories\":[{\"alias\":\"mediterranean\",\"title\":\"Mediterranean\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.4,\"longitude\":-75.70946},\"transactions\":[\"restaurant_reservation\"],\"price\":\"$$$\",\"location\":{\"address1\":\"428 Preston Street\",\"address2\":\"\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K1S 4N2\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"428 Preston Street\",\"Ottawa, ON K1S 4N2\",\"Canada\"]},\"phone\":\"+16136803860\",\"display_phone\":\"+1 613-680-3860\",\"distance\":886.6365229873169},{\"id\":\"wJiE_KLTx6aryIG2lVoy-w\",\"alias\":\"das-lokal-ottawa\",\"name\":\"Das Lokal\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/nRSHyQ7--Nv_HIh9qkOg9w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/das-lokal-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":51,\"categories\":[{\"alias\":\"german\",\"title\":\"German\"},{\"alias\":\"modern_european\",\"title\":\"Modern European\"},{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.4320605429586,\"longitude\":-75.6940825204347},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"190 Dalhousie Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1N 7C7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"190 Dalhousie Street\",\"Ottawa, ON K1N 7C7\",\"Canada\"]},\"phone\":\"+16136951688\",\"display_phone\":\"+1 613-695-1688\",\"distance\":4224.486623190994},{\"id\":\"eSqUM6sFN0AddQpeAaKNtw\",\"alias\":\"umbrella-bar-ottawa\",\"name\":\"Umbrella Bar\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/hZ6N2zYEMiFcTEFIGe1Grw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/umbrella-bar-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":8,\"categories\":[{\"alias\":\"restaurants\",\"title\":\"Restaurants\"}],\"rating\":5,\"coordinates\":{\"latitude\":45.3961974314096,\"longitude\":-75.7056335217538},\"transactions\":[],\"location\":{\"address1\":\"1001 Queen Elizabeth Driveway\",\"address2\":\"2nd floor\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K1S 5K7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"1001 Queen Elizabeth Driveway\",\"2nd floor\",\"Ottawa, ON K1S 5K7\",\"Canada\"]},\"phone\":\"+16132355246\",\"display_phone\":\"+1 613-235-5246\",\"distance\":392.9704037302199},{\"id\":\"dM_TPCH63H4gm37vwfG6Lw\",\"alias\":\"gezellig-ottawa\",\"name\":\"Gezellig\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/UKuK1u7HphYZfDR47yieZw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/gezellig-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":65,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.39229,\"longitude\":-75.75409},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"337 Richmond Road\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K2A 0E7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"337 Richmond Road\",\"Ottawa, ON K2A 0E7\",\"Canada\"]},\"phone\":\"+16136809086\",\"display_phone\":\"+1 613-680-9086\",\"distance\":4130.256988654464},{\"id\":\"VUIPSukOQt6_xhyepV9jGQ\",\"alias\":\"meet-fresh-ottawa\",\"name\":\"Meet Fresh\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/W-9JHeH1JdlKJoe8OPCe1A/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/meet-fresh-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":2,\"categories\":[{\"alias\":\"desserts\",\"title\":\"Desserts\"},{\"alias\":\"bubbletea\",\"title\":\"Bubble Tea\"},{\"alias\":\"waffles\",\"title\":\"Waffles\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.3545246662916,\"longitude\":-75.733593441546},\"transactions\":[],\"location\":{\"address1\":\"1547 Merivale Rd\",\"address2\":\"Unit 9\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K2G 3J4\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"1547 Merivale Rd\",\"Unit 9\",\"Ottawa, ON K2G 3J4\",\"Canada\"]},\"phone\":\"+16134210900\",\"display_phone\":\"+1 613-421-0900\",\"distance\":5102.201148806815},{\"id\":\"kL-hjJMY1RjIhpsVvWGWvg\",\"alias\":\"island-grill-ottawa\",\"name\":\"Island Grill\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/XOQVziuM8QeiqQk_rzj-DA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/island-grill-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":30,\"categories\":[{\"alias\":\"caribbean\",\"title\":\"Caribbean\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.4143450553256,\"longitude\":-75.6956733763218},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"324 Bank Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K2P 1Y1\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"324 Bank Street\",\"Ottawa, ON K2P 1Y1\",\"Canada\"]},\"phone\":\"+16135653030\",\"display_phone\":\"+1 613-565-3030\",\"distance\":2259.9533236195275},{\"id\":\"SPh-dnuO742G8HuMftkI1g\",\"alias\":\"gyubee-japanese-grill-ottawa-ottawa-3\",\"name\":\"Gyubee Japanese Grill - Ottawa\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/jijUfJMVUwwOG4KnqhHUiQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/gyubee-japanese-grill-ottawa-ottawa-3?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":7,\"categories\":[{\"alias\":\"japanese\",\"title\":\"Japanese\"},{\"alias\":\"bbq\",\"title\":\"Barbeque\"},{\"alias\":\"asianfusion\",\"title\":\"Asian Fusion\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.42909,\"longitude\":-75.6916},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"95 York St\",\"address2\":\"\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K1N 7E7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"95 York St\",\"Ottawa, ON K1N 7E7\",\"Canada\"]},\"phone\":\"+16133675065\",\"display_phone\":\"+1 613-367-5065\",\"distance\":3932.940988191609},{\"id\":\"We_-G0rRrUBs5uZUwc_Xzg\",\"alias\":\"supply-and-demand-ottawa\",\"name\":\"Supply and Demand\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/DD5ott-RlLIUckjCCXq6Xg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/supply-and-demand-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":74,\"categories\":[{\"alias\":\"raw_food\",\"title\":\"Live/Raw Food\"},{\"alias\":\"seafood\",\"title\":\"Seafood\"},{\"alias\":\"tapasmallplates\",\"title\":\"Tapas/Small Plates\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.3986933,\"longitude\":-75.7373696},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"1335 Wellington Street W\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1Y 3B6\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"1335 Wellington Street W\",\"Ottawa, ON K1Y 3B6\",\"Canada\"]},\"phone\":\"+16136802949\",\"display_phone\":\"+1 613-680-2949\",\"distance\":2849.250214368233},{\"id\":\"6p9oNZghOqBMbxIQZC2P1Q\",\"alias\":\"gogiya-ottawa\",\"name\":\"Gogiya\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/QL3O6gbPxpu7y66rmVA-Hg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/gogiya-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":9,\"categories\":[{\"alias\":\"korean\",\"title\":\"Korean\"},{\"alias\":\"bbq\",\"title\":\"Barbeque\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.431,\"longitude\":-75.67966},\"transactions\":[],\"location\":{\"address1\":\"470 Rideau Street\",\"address2\":\"\",\"address3\":null,\"city\":\"Ottawa\",\"zip_code\":\"K1N 8C1\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"470 Rideau Street\",\"Ottawa, ON K1N 8C1\",\"Canada\"]},\"phone\":\"+16136805988\",\"display_phone\":\"+1 613-680-5988\",\"distance\":4415.763106327291},{\"id\":\"MjRCSQmT3PjD0GxGYzP_0Q\",\"alias\":\"bobbys-table-ottawa\",\"name\":\"Bobby's Table\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/F9yYaYXgpvqHsnqAXTJWjQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/bobbys-table-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":30,\"categories\":[{\"alias\":\"tradamerican\",\"title\":\"American (Traditional)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":45.43653,\"longitude\":-75.6611},\"transactions\":[],\"price\":\"$\",\"location\":{\"address1\":\"255 Montreal Road\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1L 6C4\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"255 Montreal Road\",\"Ottawa, ON K1L 6C4\",\"Canada\"]},\"phone\":\"+16137409333\",\"display_phone\":\"+1 613-740-9333\",\"distance\":5630.863267114856},{\"id\":\"Ey1azXaPPCdfcHDezNEFkA\",\"alias\":\"fairouz-ottawa\",\"name\":\"Fairouz\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/tujtN1Km1Rc2ji3pECsIjQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/fairouz-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":46,\"categories\":[{\"alias\":\"mideastern\",\"title\":\"Middle Eastern\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.4283732,\"longitude\":-75.695106},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"15 Clarence St.\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K1N 5P4\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"15 Clarence St.\",\"Ottawa, ON K1N 5P4\",\"Canada\"]},\"phone\":\"+16134227700\",\"display_phone\":\"+1 613-422-7700\",\"distance\":3807.5653392222466},{\"id\":\"kp-qGdkUddjzACMnH7V2eQ\",\"alias\":\"baker-street-cafe-ottawa\",\"name\":\"Baker Street Cafe\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/MLAr9vhAHKt0JhZHi2mWoQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/baker-street-cafe-ottawa?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":115,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"}],\"rating\":4,\"coordinates\":{\"latitude\":45.3912126,\"longitude\":-75.7561113},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"385 Richmond Road\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Ottawa\",\"zip_code\":\"K2A 0E7\",\"country\":\"CA\",\"state\":\"ON\",\"display_address\":[\"385 Richmond Road\",\"Ottawa, ON K2A 0E7\",\"Canada\"]},\"phone\":\"+16137617171\",\"display_phone\":\"+1 613-761-7171\",\"distance\":4285.988176797196},{\"id\":\"00uLQHBVirvmfv4pGlIBGA\",\"alias\":\"baobao-edmonton\",\"name\":\"BaoBao\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/L-dciSp3EJmvRDd6HfDD7w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/baobao-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":19,\"categories\":[{\"alias\":\"noodles\",\"title\":\"Noodles\"},{\"alias\":\"dumplings\",\"title\":\"Dumplings\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.54136,\"longitude\":-113.50214},\"transactions\":[],\"location\":{\"address1\":\"10544 Jasper Avenue\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5J 1Z7\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10544 Jasper Avenue\",\"Edmonton, AB T5J 1Z7\",\"Canada\"]},\"phone\":\"+15875235747\",\"display_phone\":\"+1 587-523-5747\",\"distance\":1486.2204868672013},{\"id\":\"qoD6-nDDfEuNPRJipJxpOA\",\"alias\":\"oeb-breakfast-co-kelly-ramsey-edmonton-2\",\"name\":\"OEB Breakfast Co. - Kelly Ramsey\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/OAwa2JhwInGmkEBXRMzUfw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/oeb-breakfast-co-kelly-ramsey-edmonton-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":149,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.54252,\"longitude\":-113.49257},\"transactions\":[\"restaurant_reservation\"],\"price\":\"$$\",\"location\":{\"address1\":\"10174 100A Street\",\"address2\":null,\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5J 0H3\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10174 100A Street\",\"Edmonton, AB T5J 0H3\",\"Canada\"]},\"phone\":\"+15875200936\",\"display_phone\":\"+1 587-520-0936\",\"distance\":1904.128738191037},{\"id\":\"c6_Ph1jS79-QP-bePhANOA\",\"alias\":\"backstairs-burger-edmonton\",\"name\":\"Backstairs Burger\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/t1zV_RIo503V1DUL22_gKQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/backstairs-burger-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":1,\"categories\":[{\"alias\":\"burgers\",\"title\":\"Burgers\"}],\"rating\":5,\"coordinates\":{\"latitude\":53.5187,\"longitude\":-113.4958},\"transactions\":[],\"location\":{\"address1\":\"10315 83 Ave NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T6E 2C6\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10315 83 Ave NW\",\"Edmonton, AB T6E 2C6\",\"Canada\"]},\"phone\":\"+17807604567\",\"display_phone\":\"+1 780-760-4567\",\"distance\":1424.8131886291937},{\"id\":\"gtXAx_G5j6K1TmuJ2v5Rbg\",\"alias\":\"rge-rd-edmonton\",\"name\":\"RGE RD\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/1gQVgA2USBOP3aRwIvbrog/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/rge-rd-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":143,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.5507814,\"longitude\":-113.5338044},\"transactions\":[],\"price\":\"$$$\",\"location\":{\"address1\":\"10643 - 123 Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5M 1Z1\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10643 - 123 Street\",\"Edmonton, AB T5M 1Z1\",\"Canada\"]},\"phone\":\"+17804474577\",\"display_phone\":\"+1 780-447-4577\",\"distance\":2938.3485868445605},{\"id\":\"Hxze1h03tINbqkiE4wQMxg\",\"alias\":\"blowers-and-grafton-edmonton-2\",\"name\":\"Blowers & Grafton\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/jPcnzgi-nVI98a5H5wcz7g/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/blowers-and-grafton-edmonton-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":100,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5184,\"longitude\":-113.50278},\"transactions\":[],\"location\":{\"address1\":\"10550 82 Ave NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T6E 2A4\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10550 82 Ave NW\",\"Edmonton, AB T6E 2A4\",\"Canada\"]},\"phone\":\"+17802503663\",\"display_phone\":\"+1 780-250-3663\",\"distance\":1235.9440999710696},{\"id\":\"pqZYSvF_qrmCjkr6frf4RQ\",\"alias\":\"meat-edmonton\",\"name\":\"Meat\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/kqouQdh2sTyVM0bLJWjyPg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/meat-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":407,\"categories\":[{\"alias\":\"bbq\",\"title\":\"Barbeque\"},{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5186257,\"longitude\":-113.4976661},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"8216 104 Street\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T6E 4E6\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"8216 104 Street\",\"Edmonton, AB T6E 4E6\",\"Canada\"]},\"phone\":\"+15875206338\",\"display_phone\":\"+1 587-520-6338\",\"distance\":1361.702870603826},{\"id\":\"3koeM2Blt-4rEmVIJAZf8Q\",\"alias\":\"woodwork-edmonton\",\"name\":\"Woodwork\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/Sit4BiypQ-1NPhlf32up2Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/woodwork-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":155,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"},{\"alias\":\"cocktailbars\",\"title\":\"Cocktail Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5419431693898,\"longitude\":-113.490731079867},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"10132-100 Street\",\"address2\":null,\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5J 0N8\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10132-100 Street\",\"Edmonton, AB T5J 0N8\",\"Canada\"]},\"phone\":\"+17807574100\",\"display_phone\":\"+1 780-757-4100\",\"distance\":1919.471247157308},{\"id\":\"k9nDoJ0MaMYymI-iceql-A\",\"alias\":\"rockin-robyns-diner-edmonton\",\"name\":\"Rockin' Robyn's Diner\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/mFQNkXYZZmmfa0XzRnHAhA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/rockin-robyns-diner-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":139,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.55643,\"longitude\":-113.60692},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"16604- 109 Avenue\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5P 1C2\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"16604- 109 Avenue\",\"Edmonton, AB T5P 1C2\",\"Canada\"]},\"phone\":\"+17807565656\",\"display_phone\":\"+1 780-756-5656\",\"distance\":7070.573975648704},{\"id\":\"dFTaHC6bn2mdYdGLUkdq1g\",\"alias\":\"the-butternut-tree-edmonton\",\"name\":\"The Butternut Tree\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/h6tqi1Gx8AMmMz90DCRSVA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-butternut-tree-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":33,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.53431,\"longitude\":-113.50977},\"transactions\":[],\"price\":\"$$$$\",\"location\":{\"address1\":\"9707 110 St NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T5K 2L9\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"9707 110 St NW\",\"Edmonton, AB T5K 2L9\",\"Canada\"]},\"phone\":\"+17807602271\",\"display_phone\":\"+1 780-760-2271\",\"distance\":624.6644620093787},{\"id\":\"O6MIsYsonX88nSFi_rkJOw\",\"alias\":\"hathaways-diner-edmonton\",\"name\":\"Hathaway's Diner\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/ZgtQdCXgMJtuYpVMUWrpOg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/hathaways-diner-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":82,\"categories\":[{\"alias\":\"diners\",\"title\":\"Diners\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.59287,\"longitude\":-113.54834},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"13225-132 Street NW\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5L 1R9\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"13225-132 Street NW\",\"Edmonton, AB T5L 1R9\",\"Canada\"]},\"phone\":\"+17804885989\",\"display_phone\":\"+1 780-488-5989\",\"distance\":7584.55513996015},{\"id\":\"l7DhJNwumsbDK9cuusE9sQ\",\"alias\":\"bündok-edmonton-2\",\"name\":\"Bündok\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/s_KjWNGhwF5inkzPmUghNw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/b%C3%BCndok-edmonton-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":41,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.54366,\"longitude\":-113.4994049},\"transactions\":[],\"price\":\"$$$$\",\"location\":{\"address1\":\"10228 104 Street NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T5J 1B8\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10228 104 Street NW\",\"Edmonton, AB T5J 1B8\",\"Canada\"]},\"phone\":\"+17804200192\",\"display_phone\":\"+1 780-420-0192\",\"distance\":1791.4222013307592},{\"id\":\"G-2ftH9puhObkqxy18jMMQ\",\"alias\":\"district-102-edmonton-2\",\"name\":\"District 102\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/53-tj-wNjVHbG93HzWpCkw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/district-102-edmonton-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":7,\"categories\":[{\"alias\":\"newcanadian\",\"title\":\"Canadian (New)\"}],\"rating\":3.5,\"coordinates\":{\"latitude\":53.54359,\"longitude\":-113.49583},\"transactions\":[],\"location\":{\"address1\":\"10222 102 Street NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T5J 4C5\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10222 102 Street NW\",\"Edmonton, AB T5J 4C5\",\"Canada\"]},\"phone\":\"+17804293900\",\"display_phone\":\"+1 780-429-3900\",\"distance\":1912.6839588957162},{\"id\":\"HC_F1uM-1CK2TVfpnU7-TQ\",\"alias\":\"cafe-bicyclette-edmonton\",\"name\":\"Cafe Bicyclette\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/9cyVCGN1hViXVWPTjm9hMg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/cafe-bicyclette-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":76,\"categories\":[{\"alias\":\"french\",\"title\":\"French\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5226377438339,\"longitude\":-113.466963575685},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"8627 91 Street NorthWest\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T6C 3N1\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"8627 91 Street NorthWest\",\"Edmonton, AB T6C 3N1\",\"Canada\"]},\"phone\":\"+15875248090\",\"display_phone\":\"+1 587-524-8090\",\"distance\":2883.049798098492},{\"id\":\"shhLEpL0BGni58akTfaxLw\",\"alias\":\"syphay-restaurant-edmonton-4\",\"name\":\"Syphay Restaurant\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/Klloh6gWnhouc6aUt81xfQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/syphay-restaurant-edmonton-4?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":1,\"categories\":[{\"alias\":\"thai\",\"title\":\"Thai\"}],\"rating\":5,\"coordinates\":{\"latitude\":53.482643,\"longitude\":-113.495749},\"transactions\":[],\"location\":{\"address1\":\"4428 Calgary Trail NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T6H 5W6\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"4428 Calgary Trail NW\",\"Edmonton, AB T6H 5W6\",\"Canada\"]},\"phone\":\"+17804388338\",\"display_phone\":\"+1 780-438-8338\",\"distance\":5200.298764979118},{\"id\":\"8w-ysXqwRgQIJoqJpvxp2A\",\"alias\":\"machef-edmonton\",\"name\":\"Machef\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/9zLavkX6kbKLHeYszcV1Ug/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/machef-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":7,\"categories\":[{\"alias\":\"korean\",\"title\":\"Korean\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.495311,\"longitude\":-113.517876},\"transactions\":[],\"location\":{\"address1\":\"5818 111 Street NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T6H 3G1\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"5818 111 Street NW\",\"Edmonton, AB T6H 3G1\",\"Canada\"]},\"phone\":\"+17807578889\",\"display_phone\":\"+1 780-757-8889\",\"distance\":3755.4518133079646},{\"id\":\"n4z30-wLC1WYW6SDSDAdRA\",\"alias\":\"bianco-edmonton\",\"name\":\"Bianco\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/B_fY7VrB7Wi7Pwt0VD-rJg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/bianco-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":23,\"categories\":[{\"alias\":\"italian\",\"title\":\"Italian\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5424557443708,\"longitude\":-113.49200528115},\"transactions\":[],\"location\":{\"address1\":\"120-10020 101 A Avenue\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T5J 3G2\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"120-10020 101 A Avenue\",\"Edmonton, AB T5J 3G2\",\"Canada\"]},\"phone\":\"+17807618838\",\"display_phone\":\"+1 780-761-8838\",\"distance\":1911.824359218108},{\"id\":\"Uc1_v_Z9aWMA4w_u4SoRXA\",\"alias\":\"refinery-grill-edmonton\",\"name\":\"Refinery Grill\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/0GBXcvlMQgNb3P1LvFL1dg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/refinery-grill-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":43,\"categories\":[{\"alias\":\"delis\",\"title\":\"Delis\"},{\"alias\":\"greek\",\"title\":\"Greek\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.546627,\"longitude\":-113.613707},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"10406 Mayfield Road\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T5P 4P4\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10406 Mayfield Road\",\"Edmonton, AB T5P 4P4\",\"Canada\"]},\"phone\":\"+17803414904\",\"display_phone\":\"+1 780-341-4904\",\"distance\":7177.175264707474},{\"id\":\"LLIO3KSa7sPfGKg6dRBTIw\",\"alias\":\"wing-snob-edmonton\",\"name\":\"Wing Snob\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/Qq3c8YAzqAf1tURbsOmlYw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/wing-snob-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":12,\"categories\":[{\"alias\":\"chicken_wings\",\"title\":\"Chicken Wings\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":53.5463049,\"longitude\":-113.5283666},\"transactions\":[],\"location\":{\"address1\":\"11988 104 Avenue\",\"address2\":\"Building 4\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T5K 2G2\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"11988 104 Avenue\",\"Building 4\",\"Edmonton, AB T5K 2G2\",\"Canada\"]},\"phone\":\"+17807609464\",\"display_phone\":\"+1 780-760-9464\",\"distance\":2430.6615050721975},{\"id\":\"VXVxoFYJcWKr6Q3xspyHKQ\",\"alias\":\"taste-of-lebanon-edmonton\",\"name\":\"Taste of Lebanon\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/qMyGSggepUHplsu9mO3iOA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/taste-of-lebanon-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":3,\"categories\":[{\"alias\":\"lebanese\",\"title\":\"Lebanese\"}],\"rating\":5,\"coordinates\":{\"latitude\":53.5179044738809,\"longitude\":-113.491599261761},\"transactions\":[],\"location\":{\"address1\":\"10105 82 Ave NW\",\"address2\":\"\",\"address3\":null,\"city\":\"Edmonton\",\"zip_code\":\"T6E 1Z5\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10105 82 Ave NW\",\"Edmonton, AB T6E 1Z5\",\"Canada\"]},\"phone\":\"\",\"display_phone\":\"\",\"distance\":1679.8105748746655},{\"id\":\"fM6XQeGW70a4EFbjqAAy3Q\",\"alias\":\"sugarbowl-edmonton\",\"name\":\"SugarBowl\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/uF1WkicYLYSIfGJdMgiC6g/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/sugarbowl-edmonton?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":419,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"},{\"alias\":\"comfortfood\",\"title\":\"Comfort Food\"},{\"alias\":\"cafes\",\"title\":\"Cafes\"}],\"rating\":4,\"coordinates\":{\"latitude\":53.5239312527495,\"longitude\":-113.513113},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"10922 88 Avenue NW\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Edmonton\",\"zip_code\":\"T6G 0Z1\",\"country\":\"CA\",\"state\":\"AB\",\"display_address\":[\"10922 88 Avenue NW\",\"Edmonton, AB T6G 0Z1\",\"Canada\"]},\"phone\":\"+17804338369\",\"display_phone\":\"+1 780-433-8369\",\"distance\":585.5347524392889},{\"id\":\"XXvrTy3m-yrm1uQ61p6C_g\",\"alias\":\"the-pumphouse-riverside-restaurant-and-bar-victoria\",\"name\":\"The Pumphouse Riverside Restaurant and Bar\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/j5ucZahKaBC5Q-uIRTaf0g/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-pumphouse-riverside-restaurant-and-bar-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":292,\"categories\":[{\"alias\":\"bars\",\"title\":\"Bars\"},{\"alias\":\"newamerican\",\"title\":\"American (New)\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.80641,\"longitude\":-97.01647},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"1201 W Stayton Ave\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"1201 W Stayton Ave\",\"Victoria, TX 77901\"]},\"phone\":\"+13615729800\",\"display_phone\":\"(361) 572-9800\",\"distance\":3787.9812755014354},{\"id\":\"qKodoejgkNZUIzb8VRKcAg\",\"alias\":\"huvars-artisan-market-victoria\",\"name\":\"Huvar's Artisan Market\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/iSxWwTIWKVOtJgfbGBQSGA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/huvars-artisan-market-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":81,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"},{\"alias\":\"tradamerican\",\"title\":\"American (Traditional)\"},{\"alias\":\"delis\",\"title\":\"Delis\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":28.79772,\"longitude\":-97.0072382},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"110 W Juan Linn St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"110 W Juan Linn St\",\"Victoria, TX 77901\"]},\"phone\":\"+13615769171\",\"display_phone\":\"(361) 576-9171\",\"distance\":4189.1958774405975},{\"id\":\"zY_sgj5V2MYSN285iBrEvA\",\"alias\":\"grumpys-meatzzeria-victoria\",\"name\":\"Grumpy's Meatzzeria\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/rFqsHmcLlft2YVlVVLoqCA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/grumpys-meatzzeria-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":2,\"categories\":[{\"alias\":\"desserts\",\"title\":\"Desserts\"},{\"alias\":\"cheesesteaks\",\"title\":\"Cheesesteaks\"},{\"alias\":\"burgers\",\"title\":\"Burgers\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":28.82673,\"longitude\":-96.979545},\"transactions\":[],\"location\":{\"address1\":\"1319 Sam Houston Dr\",\"address2\":null,\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"1319 Sam Houston Dr\",\"Victoria, TX 77901\"]},\"phone\":\"+13619354110\",\"display_phone\":\"(361) 935-4110\",\"distance\":1471.296772328265},{\"id\":\"2Y2siASiDtcyoTA5SrZL9A\",\"alias\":\"thai-orchid-victoria\",\"name\":\"Thai Orchid\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/EUTwpwFCblmeS_imLgRiBQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/thai-orchid-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":26,\"categories\":[{\"alias\":\"thai\",\"title\":\"Thai\"},{\"alias\":\"asianfusion\",\"title\":\"Asian Fusion\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":28.7991714861873,\"longitude\":-97.000805584065},\"transactions\":[\"delivery\"],\"location\":{\"address1\":\"207 N Navarro St\",\"address2\":\"\",\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"207 N Navarro St\",\"Victoria, TX 77901\"]},\"phone\":\"+13617035177\",\"display_phone\":\"(361) 703-5177\",\"distance\":3864.0729418531123},{\"id\":\"fOK4TCctbKa4K2CY5zXXXA\",\"alias\":\"sky-restaurant-victoria-2\",\"name\":\"Sky Restaurant\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/OJrM2kzEofcb6pEPnheUMg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/sky-restaurant-victoria-2?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":22,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"seafood\",\"title\":\"Seafood\"},{\"alias\":\"steak\",\"title\":\"Steakhouses\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.8372073,\"longitude\":-96.9200898},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"236 Foster Field Dr\",\"address2\":null,\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"236 Foster Field Dr\",\"Victoria, TX 77904\"]},\"phone\":\"+13615765335\",\"display_phone\":\"(361) 576-5335\",\"distance\":7096.29169893925},{\"id\":\"0NzfmwsVWdnJtbxCEc62gA\",\"alias\":\"mumphords-place-bbq-victoria\",\"name\":\"Mumphord's Place BBQ\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/YQPCyZYDjg0ssgwjS2N4zg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/mumphords-place-bbq-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":135,\"categories\":[{\"alias\":\"bbq\",\"title\":\"Barbeque\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":28.79419,\"longitude\":-96.9963},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"1202 E Juan Linn St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"1202 E Juan Linn St\",\"Victoria, TX 77901\"]},\"phone\":\"+13614851112\",\"display_phone\":\"(361) 485-1112\",\"distance\":4351.6904901094},{\"id\":\"T1ECVGXE_vwCoCOY5s4esg\",\"alias\":\"las-palmas-mexican-bar-and-grill-victoria\",\"name\":\"Las Palmas Mexican Bar & Grill\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/pFYF6Q3uBnV6C09cZcfYVg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/las-palmas-mexican-bar-and-grill-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":63,\"categories\":[{\"alias\":\"mexican\",\"title\":\"Mexican\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.84936,\"longitude\":-97.0183799},\"transactions\":[\"delivery\",\"pickup\"],\"price\":\"$$\",\"location\":{\"address1\":\"6007 N Main\",\"address2\":null,\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"6007 N Main\",\"Victoria, TX 77904\"]},\"phone\":\"+13615731717\",\"display_phone\":\"(361) 573-1717\",\"distance\":3072.0618821932653},{\"id\":\"inywC4qSqrqxbSYuboxGWA\",\"alias\":\"noots-thai-kitchen-victoria\",\"name\":\"Noot's Thai Kitchen\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/GrIrvaOSnn4M750Dz6VwLQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/noots-thai-kitchen-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":164,\"categories\":[{\"alias\":\"thai\",\"title\":\"Thai\"},{\"alias\":\"bubbletea\",\"title\":\"Bubble Tea\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.8538444717801,\"longitude\":-96.9956351615688},\"transactions\":[\"delivery\",\"pickup\"],\"price\":\"$$\",\"location\":{\"address1\":\"6360 N Navarro St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"6360 N Navarro St\",\"Victoria, TX 77904\"]},\"phone\":\"+13615788424\",\"display_phone\":\"(361) 578-8424\",\"distance\":2311.4353359617844},{\"id\":\"SNZMGkX3T7JXMP72xe32vw\",\"alias\":\"the-family-table-victoria\",\"name\":\"The Family Table\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/IgYVBJ3nRNmdoA8H6e8YuA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-family-table-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":12,\"categories\":[{\"alias\":\"buffets\",\"title\":\"Buffets\"},{\"alias\":\"soulfood\",\"title\":\"Soul Food\"}],\"rating\":5,\"coordinates\":{\"latitude\":28.7917979749031,\"longitude\":-97.0155163571141},\"transactions\":[],\"location\":{\"address1\":\"1102 SW Moody St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"1102 SW Moody St\",\"Victoria, TX 77901\"]},\"phone\":\"+13615803602\",\"display_phone\":\"(361) 580-3602\",\"distance\":5108.792242316545},{\"id\":\"rr-9Gnl1DtoVuKlFDZM0Mw\",\"alias\":\"rosebud-records-grill-and-theater-victoria\",\"name\":\"Rosebud Records, Grill & Theater\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/oNQRAX5nVlYt_7bnMIDS_w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/rosebud-records-grill-and-theater-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":20,\"categories\":[{\"alias\":\"tradamerican\",\"title\":\"American (Traditional)\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.799022,\"longitude\":-97.006027},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"102 S Main St\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"102 S Main St\",\"Victoria, TX 77901\"]},\"phone\":\"+13617035243\",\"display_phone\":\"(361) 703-5243\",\"distance\":4013.6839036678534},{\"id\":\"M1TyeJs99oHmxlGOdi3jKg\",\"alias\":\"paints-underground-pizza-victoria\",\"name\":\"Paint's Underground Pizza\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/qu8h-2EcNxcepI8Q2zMV8g/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/paints-underground-pizza-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":4,\"categories\":[{\"alias\":\"pizza\",\"title\":\"Pizza\"},{\"alias\":\"salad\",\"title\":\"Salad\"},{\"alias\":\"italian\",\"title\":\"Italian\"}],\"rating\":5,\"coordinates\":{\"latitude\":28.85699,\"longitude\":-96.98727},\"transactions\":[],\"location\":{\"address1\":\"5001B John Stockbauer Dr\",\"address2\":null,\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"5001B John Stockbauer Dr\",\"Victoria, TX 77904\"]},\"phone\":\"+13612207455\",\"display_phone\":\"(361) 220-7455\",\"distance\":2689.5303466209},{\"id\":\"ylRQFYfKD2ngNfCJgP6XMQ\",\"alias\":\"don-jose-mexican-restaurant-victoria\",\"name\":\"Don Jose Mexican Restaurant\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/cwCsswDAgy-AcZSuLeroBQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/don-jose-mexican-restaurant-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":28,\"categories\":[{\"alias\":\"mexican\",\"title\":\"Mexican\"},{\"alias\":\"tex-mex\",\"title\":\"Tex-Mex\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":28.82242,\"longitude\":-96.97506},\"transactions\":[\"delivery\"],\"price\":\"$\",\"location\":{\"address1\":\"2902 E Airline Rd\",\"address2\":null,\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"2902 E Airline Rd\",\"Victoria, TX 77901\"]},\"phone\":\"+13615755673\",\"display_phone\":\"(361) 575-5673\",\"distance\":2096.368065781171},{\"id\":\"dQYas5F9Am7uQMXElgt4vg\",\"alias\":\"frances-maries-restaurant-and-cantina-victoria\",\"name\":\"Frances Marie's Restaurant & Cantina\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/ZaAa9SBKJRX_QMv3nkvpvg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/frances-maries-restaurant-and-cantina-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":68,\"categories\":[{\"alias\":\"mexican\",\"title\":\"Mexican\"},{\"alias\":\"bars\",\"title\":\"Bars\"}],\"rating\":3.5,\"coordinates\":{\"latitude\":28.8099568523158,\"longitude\":-96.9782153877282},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"2505 Houston Hwy\",\"address2\":\"\",\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"2505 Houston Hwy\",\"Victoria, TX 77901\"]},\"phone\":\"+13615790764\",\"display_phone\":\"(361) 579-0764\",\"distance\":2949.8399646399516},{\"id\":\"o55w0-fXUvK8bvx8u5zsaw\",\"alias\":\"hawaiian-poke-ramen-victoria\",\"name\":\"Hawaiian Poke Ramen\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/ubelUt_Oo0sN9eXHk3qalQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/hawaiian-poke-ramen-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":17,\"categories\":[{\"alias\":\"ramen\",\"title\":\"Ramen\"},{\"alias\":\"poke\",\"title\":\"Poke\"},{\"alias\":\"icecream\",\"title\":\"Ice Cream & Frozen Yogurt\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.843911,\"longitude\":-96.99807},\"transactions\":[\"delivery\"],\"location\":{\"address1\":\"5206 N Navarro St\",\"address2\":\"ste 300\",\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"5206 N Navarro St\",\"ste 300\",\"Victoria, TX 77904\"]},\"phone\":\"+13617035092\",\"display_phone\":\"(361) 703-5092\",\"distance\":1280.350152737673},{\"id\":\"chkWenhc_5H_8xqx4MwDbA\",\"alias\":\"victorias-cafe-victoria\",\"name\":\"Victoria's Cafe\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/phTA3z2mLqtoao5hvemboA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/victorias-cafe-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":8,\"categories\":[{\"alias\":\"cafes\",\"title\":\"Cafes\"},{\"alias\":\"mexican\",\"title\":\"Mexican\"},{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.778002,\"longitude\":-96.966788},\"transactions\":[\"delivery\"],\"location\":{\"address1\":\"3405 US Hwy 59 N\",\"address2\":null,\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77905\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"3405 US Hwy 59 N\",\"Victoria, TX 77905\"]},\"phone\":\"+13615790724\",\"display_phone\":\"(361) 579-0724\",\"distance\":6641.005390145019},{\"id\":\"JTq3tAtzJyBHXIfub3dIzw\",\"alias\":\"dockside-boiling-pot-victoria\",\"name\":\"Dockside Boiling Pot\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/vBXahiGYjfYPtde_qBkCYQ/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/dockside-boiling-pot-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":21,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4,\"coordinates\":{\"latitude\":28.8432537,\"longitude\":-97.0004944},\"transactions\":[\"delivery\"],\"location\":{\"address1\":\"5209 N Navarro St\",\"address2\":null,\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"5209 N Navarro St\",\"Victoria, TX 77904\"]},\"phone\":\"+13618947838\",\"display_phone\":\"(361) 894-7838\",\"distance\":1503.3503266618638},{\"id\":\"0dhFwlZF1kcT2VoQiStqIw\",\"alias\":\"texas-seafood-victoria\",\"name\":\"Texas Seafood\",\"image_url\":\"https://s3-media3.fl.yelpcdn.com/bphoto/ZXMsk1VH5enxGiLWpxuPXw/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/texas-seafood-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":48,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"},{\"alias\":\"vietnamese\",\"title\":\"Vietnamese\"}],\"rating\":3.5,\"coordinates\":{\"latitude\":28.805922,\"longitude\":-97.00182},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"304 E Rio Grand\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"304 E Rio Grand\",\"Victoria, TX 77901\"]},\"phone\":\"+13615728538\",\"display_phone\":\"(361) 572-8538\",\"distance\":3158.6332148843335},{\"id\":\"56KrwO1MtDjf596xV0iU3Q\",\"alias\":\"napoleons-restaurant-victoria\",\"name\":\"Napoleon's Restaurant\",\"image_url\":\"https://s3-media4.fl.yelpcdn.com/bphoto/ArdXaKYUt6OYz-__FpP5OA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/napoleons-restaurant-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":7,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"}],\"rating\":5,\"coordinates\":{\"latitude\":28.821,\"longitude\":-97},\"transactions\":[],\"price\":\"$\",\"location\":{\"address1\":\"2806 N Navarro St\",\"address2\":\"Ste A\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77901\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"2806 N Navarro St\",\"Ste A\",\"Victoria, TX 77901\"]},\"phone\":\"\",\"display_phone\":\"\",\"distance\":1519.4623173475952},{\"id\":\"OwEAvC7D8envtmnTF8z2cA\",\"alias\":\"yamato-hibachi-and-sushi-victoria\",\"name\":\"Yamato Hibachi and Sushi\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/tdK0tQzOXz__zEm-2b67jg/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/yamato-hibachi-and-sushi-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":59,\"categories\":[{\"alias\":\"japanese\",\"title\":\"Japanese\"},{\"alias\":\"sushi\",\"title\":\"Sushi Bars\"}],\"rating\":3.5,\"coordinates\":{\"latitude\":28.87955,\"longitude\":-96.9960399},\"transactions\":[\"delivery\"],\"price\":\"$$\",\"location\":{\"address1\":\"9104 N Navarro\",\"address2\":\"Ste 400\",\"address3\":\"\",\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"9104 N Navarro\",\"Ste 400\",\"Victoria, TX 77904\"]},\"phone\":\"+13617035185\",\"display_phone\":\"(361) 703-5185\",\"distance\":5157.801673893868},{\"id\":\"0MsfVGYLq2ujjulHAXaCsw\",\"alias\":\"5d-steakhouse-victoria\",\"name\":\"5D Steakhouse\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/4dslA_wtMfDB86vhSf4x8w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/5d-steakhouse-victoria?adjust_creative=aSGJyHPcjku0vxu6Fj9QLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aSGJyHPcjku0vxu6Fj9QLg\",\"review_count\":27,\"categories\":[{\"alias\":\"steak\",\"title\":\"Steakhouses\"},{\"alias\":\"seafood\",\"title\":\"Seafood\"},{\"alias\":\"tradamerican\",\"title\":\"American (Traditional)\"}],\"rating\":2.5,\"coordinates\":{\"latitude\":28.84007683,\"longitude\":-97.00091417},\"transactions\":[\"delivery\"],\"location\":{\"address1\":\"4904 N Navarro St\",\"address2\":null,\"address3\":null,\"city\":\"Victoria\",\"zip_code\":\"77904\",\"country\":\"US\",\"state\":\"TX\",\"display_address\":[\"4904 N Navarro St\",\"Victoria, TX 77904\"]},\"phone\":\"\",\"display_phone\":\"\",\"distance\":1096.8679717433226}],\"total\":1800,\"region\":{\"center\":{\"longitude\":-75.7012939453125,\"latitude\":45.3944075643109}}}");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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