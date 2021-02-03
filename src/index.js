import './js/dbFirebase'
import { checkUserIsAuth } from './js/checkUser'
import './js/map'
import './js/modal'
import './js/signUp'
import './js/logIn'
import './js/writeReview'
import { writeReviewToRestaurant } from './js/writeReview'
import './js/logOut'
import { Autocomplete } from './js/Autocomplete'
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
    arrayNameRestaurants,

} from './js/addClickHandlers'
import { CardsRestaurants } from './js/CardsRestaurants'
import { restaurantsData } from './js/apiData'
import { getRating } from './js/starsRating'

window.onload = function() {
    checkUserIsAuth()

    if (restaurantsData) {
        renderCardsRestaurants()
    }
    addFilterPriceClickHandler()
    addFilterRestaurantsClickHandler()
    sortRestaurantsByCities()
    showTypeRestaurants()
    getBestRestaurants()
    Autocomplete('#input-select', arrayNameRestaurants);

    getDataCard()
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
                document.querySelector('.cards_wrapper').innerHTML = ''
                document.querySelector('.cards_wrapper').appendChild(currentRestaurant)
                const headlineRestaurant = document.querySelector('.review__restaurant_main__text__headline a')
                const nameOfRestaurant = currentRestaurant.children[0].children[1].children[0].innerHTML
                headlineRestaurant.innerHTML = nameOfRestaurant
            })
        }
    }
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
                e.preventDefault()
            });
        }
    }

}