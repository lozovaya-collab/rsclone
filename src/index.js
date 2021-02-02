import './js/dbFirebase'
import './js/checkUser'
import './js/map'
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


console.log(localStorage.getItem('Auth'));
// export let arrayNameRestaurants = []
window.onload = function() {
    getUserData()

    // render Cards of Restaurants
    if (restaurantsData) {
        renderCardsRestaurants()
    }


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

    cancelEventReviewCard()

    //autocomplete   
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
                e.preventDefault()
                e.stopPropagation()

            });
        }
    }

}


const getUserData = () => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let selectionCity = document.querySelector('.searching_city')
    console.log('GGGGGGGGGGGG', userInfo.City)
    if (userInfo && selectionCity) {
        // let selectionCity = document.querySelector('.searching_city')
        for (let i = 0; i < selectionCity.length; i += 1) {
            console.log('>>>>>>>>>>>>>>>', selectionCity[i].text)
            if (selectionCity.options[i].text === userInfo.City) {
                selectionCity.options[i].setAttribute(selected, 'selected');
                // console.log('>>>>>>>>>>>>>>>', selectionCity.children[i])

            } else {
                // selectionCity.options[i].removeAttribute(selected);
            }
            // console.log('>>>>>>>>>>>>>>>', selectionCity.children[i].text)
        }
    }

}