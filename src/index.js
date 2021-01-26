import './js/modal'
import './js/signUp'
import { Autocomplete } from './js/Autocomplete'
import './js/map'
import './js/apiData'
import './js/sortRestaurants'
import './js/setBackground'
import { addFilterPriceClickHandler, addFilterRestaurantsClickHandler, getBestRestaurants } from './js/addClickHandlers'
import { CardsRestaurants } from './js/CardsRestaurants'
import { arrayNameRestaurants, restaurantsData } from './js/apiData'
import { getRating } from './js/starsRating'



window.addEventListener('DOMContentLoaded', () => {

    // render Cards of Restaurants
    if (restaurantsData) {
        renderCardsRestaurants()
    }

    //click sorting 
    addFilterPriceClickHandler();
    addFilterRestaurantsClickHandler();

    getRating();
    getBestRestaurants()

    //autocomplete
    Autocomplete('#input-select', arrayNameRestaurants);

});

const renderCardsRestaurants = () => {
    let cardsWrapperRestaurants = getCardsWrapperRestaurant()
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
    // console.log(cardsRestaurants)

    return cardsRestaurants;
}