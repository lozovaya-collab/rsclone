import './js/getDataCard'
import { db } from './js/dbFirebase'
import { checkUserIsAuth } from './js/checkUser'
import './js/map'
import { map } from './js/map'
import './js/modal'
import './js/signUp'
import './js/logIn'
import './js/writeReview'
import './js/logOut'
import { Autocomplete } from './js/Autocomplete'
import './js/apiData'
import './js/scrollUp'
import './js/setBackground'
import './js/profileSettings'
import { getDataCard, renderPageRestaurant } from './js/getDataCard'

import {
    addFilterPriceClickHandler,
    addFilterRestaurantsClickHandler,
    getBestRestaurants,
    showTypeRestaurants,
    sortRestaurantsByCities,
    arrayNameRestaurants,
} from './js/addClickHandlers'
import { CardsRestaurants } from './js/CardsRestaurants'
import { restaurantsData } from './js/apiData'
import { getRating } from './js/starsRating'

window.onload = function() {

    let objLocal = JSON.parse(localStorage.getItem('card'))
    for (let i = 0; i < restaurantsData.length; i += 1) {
        let card = []

        if (objLocal[0].name === restaurantsData[i].name) {
            db.collection("reviews").where("Restaurant", "==", restaurantsData[i].name)
                .get()
                .then(function(querySnapshot) {
                    let arrayReviews = []

                    querySnapshot.forEach(function(doc) {
                        arrayReviews.push(doc.data())
                    });


                    const uniqueArray = (array, prop1, prop2) => {
                        for (let i = 0; i < array.length; i++) {
                            for (let j = i + 1; j < array.length; j++) {
                                if (array[i][prop1] === array[j][prop1] && array[i][prop2] === array[j][prop2]) {
                                    array.splice(i, 1)
                                }
                            }
                        }
                        return array
                    }
                    uniqueArray(arrayReviews, 'Username', 'Review')
                    if (card.length === 0) {
                        card.push({
                            id: restaurantsData[i].id,
                            name: restaurantsData[i].name,
                            categories: restaurantsData[i].categories,
                            image_url: restaurantsData[i].image_url,
                            rating: restaurantsData[i].rating,
                            reviews: arrayReviews,
                            review_count: arrayReviews.length,
                            price: restaurantsData[i].price,
                            display_phone: restaurantsData[i].display_phone,
                            phone: restaurantsData[i].phone,
                            locationAddress: restaurantsData[i].locationAddress,
                            city: restaurantsData[i].city,
                            url: restaurantsData[i].url,
                            categories: restaurantsData[i].categories,
                            coordinatesLatitude: restaurantsData[i].coordinatesLatitude,
                            coordinatesLongitude: restaurantsData[i].coordinatesLongitude
                        })
                        localStorage.setItem("card", JSON.stringify(card));
                    }
                })
        }
    }
    checkUserIsAuth()
    if (restaurantsData) {
        renderCardsRestaurants()
    }
    getDataCard()
    getUserData()
    addFilterPriceClickHandler();
    addFilterRestaurantsClickHandler();

    sortRestaurantsByCities()
    showTypeRestaurants()
    getBestRestaurants()

    if (document.querySelector('.main__restaurant_page')) {
        renderPageRestaurant()
    }

    getRating()

    const pageReview = document.querySelector('.button__review')
    if (pageReview) {
        pageReview.addEventListener('click', () => {
            window.location.href = '../../dist/pages/review.html'
            localStorage.setItem('fromPage', 'true')
        })
    }
    cancelEventReviewCard()

    const restaurants = document.querySelector('.restaurants_wrapper_review')

    if (restaurants) {
        for (let i = 0; i < restaurants.children.length; i++) {
            restaurants.children[i].addEventListener('click', () => {
                const currentRestaurant = restaurants.children[i]
                const headlineRestaurant = document.querySelector('.review__restaurant_main__text__headline a')
                let nameOfRestaurant = currentRestaurant.children[0].children[1].children[0].innerHTML
                document.querySelector('.cards_wrapper').innerHTML = ''
                document.querySelector('.cards_wrapper').appendChild(currentRestaurant)
                headlineRestaurant.innerHTML = nameOfRestaurant
            })
        }
    }
    Autocomplete('#input-select', arrayNameRestaurants);

};

const renderCardsRestaurants = () => {
    let cardsWrapperRestaurants = getCardsWrapperRestaurant();
    if (cardsWrapperRestaurants) {
        generateCards(restaurantsData).forEach(card => {
            cardsWrapperRestaurants.append(card.generateCardsRestaurants())
        })
    }

    let cardsWrapperMainCity = getCardsWrapperMainCity()
    if (cardsWrapperMainCity) {
        generateCards(restaurantsData).forEach(card => {
            cardsWrapperMainCity.append(card.generateCardsRestaurants())
        })
    }
    let cardsWrapperMain = getCardsWrapperMain()
    if (cardsWrapperMain) {
        generateCards(restaurantsData).forEach(card => {
            cardsWrapperMain.append(card.generateCardsRestaurants())
        })
    }
    let cardsWrapperReview = getCardsWrapperReview()
    if (cardsWrapperReview) {
        generateCards(restaurantsData).forEach(card => {
            cardsWrapperReview.append(card.generateCardsRestaurants())
        })
    }
}
const getCardsWrapperRestaurant = () => {
    const cardsContainer = document.querySelector('.cards_wrapper_restaurants');
    if (cardsContainer !== null) {
        cardsContainer.innerHTML = '';
        return cardsContainer;
    }
}
const getCardsWrapperMainCity = () => {
    const cardsContainer = document.querySelector('.cards_wrapper_city');
    if (cardsContainer !== null) {
        cardsContainer.innerHTML = '';
        return cardsContainer;
    }
}
const getCardsWrapperReview = () => {
    const cardsContainer = document.querySelector('.cards_wrapper_main');
    if (cardsContainer) {
        cardsContainer.innerHTML = '';
        return cardsContainer;
    }
}
const getCardsWrapperMain = () => {
    const cardsContainer = document.querySelector('.restaurants_wrapper_review');
    if (cardsContainer) {
        cardsContainer.innerHTML = '';
        return cardsContainer;
    }
}

const generateCards = (restaurantsData) => {
    let cardsRestaurants = [];
    restaurantsData.forEach(card => {
        cardsRestaurants.push(new CardsRestaurants(card))
    });
    return cardsRestaurants;
}

const cancelEventReviewCard = () => {
    const cardsContainer = document.querySelectorAll('.restaurants_wrapper_review>a');
    if (cardsContainer) {
        for (let i = 0; i < cardsContainer.length; i += 1) {
            cardsContainer[i].addEventListener('click', (e) => {
                console.log(e.target)
                e.preventDefault()
            });
        }
    }
}

const getUserData = () => {
    let userInfo
    if (localStorage.getItem('user') !== '') {
        userInfo = JSON.parse(localStorage.getItem("user"));
    }
    let selectionCity = document.querySelector('select')
    let cardsRestaurantsMain = document.querySelectorAll('.cards_wrapper_city>a')
    let cardsRestaurantsPage = document.querySelectorAll('.cards_wrapper_restaurants>a>div')
    let citiesCards = document.querySelectorAll('.address_restaurant')
    let arrayCoordinateCity = [
        { 'Ottawa': [45.401833, -75.699511] },
        { 'Montreal': [45.498301, -73.568500] },
        { 'Toronto': [43.684345, -79.431292] },
        { 'Calgary': [51.034091, -114.083912] },
        { 'Edmonton': [53.530798, -113.511802] },
        { 'Mississauga': [43.574599, -79.606185] },
        { 'Winnipeg': [49.887898, -97.134185] },
        { 'Vancouver': [49.284600, -123.116885] },
        { 'Quebec City': [46.807096, -71.211788] },
        { 'Brampton': [43.686796, -79.759582] },
        { 'Cities of Canada': [45.401833, -75.699511] }
    ]
    if (selectionCity) {
        if (userInfo) {
            for (let i = 0; i < selectionCity.children.length; i += 1) {
                if (selectionCity.options[i].value == userInfo.City) {
                    selectionCity.options[i].selected = true;
                }
            }

            for (let j = 0; j < cardsRestaurantsMain.length; j += 1) {
                if (citiesCards[j].innerText.includes(userInfo.City)) {
                    cardsRestaurantsMain[j].classList.remove('hidden');
                } else {
                    cardsRestaurantsMain[j].classList.add('hidden');
                }
            }
            for (let i = 0; i < cardsRestaurantsPage.length; i += 1) {
                if (citiesCards[i].innerText.includes(userInfo.City)) {
                    cardsRestaurantsPage[i].classList.remove('hidden_card');
                } else {
                    cardsRestaurantsPage[i].classList.add('hidden_card');
                }
            }
            let city = document.querySelector('.restaurant_inCity')
            if (city) {
                if (userInfo.City) {
                    city.innerHTML = userInfo.City;
                }
            }

            if (document.querySelector('#map')) {
                for (let i = 0; i < arrayCoordinateCity.length; i += 1) {
                    if (userInfo.City) {
                        if (arrayCoordinateCity[i][userInfo.City]) {
                            map.panTo(new L.LatLng(arrayCoordinateCity[i][userInfo.City][0], arrayCoordinateCity[i][userInfo.City][1]))
                        }
                    }
                }
            }
        }
    }
}