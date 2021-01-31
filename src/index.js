import './js/checkUser'
import './js/modal'
import './js/signUp'
import './js/dbFirebase'
import './js/logIn'
import './js/logOut'
import { Autocomplete } from './js/Autocomplete'
import './js/map'
import './js/apiData'
import './js/scrollUp'
import './js/setBackground'
import './js/profileSettings'
import { getDataCard, renderPageRestaurant } from './js/getDataCard'
import './js/getDataCard'
import {
    addFilterPriceClickHandler,
    addFilterRestaurantsClickHandler,
    getBestRestaurants,
    showTypeRestaurants,
    sortRestaurantsByCities,
    arrayNameRestaurants
} from './js/addClickHandlers'
import { CardsRestaurants } from './js/CardsRestaurants'
import { restaurantsData } from './js/apiData'
import { getRating } from './js/starsRating'


console.log(localStorage.getItem('Auth'));
// export let arrayNameRestaurants = []
window.onload = function() {
    // render Cards of Restaurants
    if (restaurantsData) {
        renderCardsRestaurants()
    }
    //autocomplete
    Autocomplete('#input-select', arrayNameRestaurants);

    //click sorting 
    addFilterPriceClickHandler();
    addFilterRestaurantsClickHandler();
    sortRestaurantsByCities()
    showTypeRestaurants();

    getBestRestaurants()

    getDataCard()
    if (document.querySelector('.main__restaurant_page')) {
        renderPageRestaurant()
    }

    getRating();
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
const getCardsWrapperMain = () => {
    const cardsContainer = document.querySelector('.cards_wrapper_main');
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