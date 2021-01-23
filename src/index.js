import './js/modal'
import './js/signUp'
import './js/autocomplitAPI'
import './js/map'
import './js/apiData'
import './js/sortRestaurants'
import './js/setBackground'
import { addFilterPriceClickHandler, addFilterRestaurantsClickHandler } from './js/addClickHandlers'


window.addEventListener('DOMContentLoaded', () => {

    //click sorting 
    addFilterPriceClickHandler();
    addFilterRestaurantsClickHandler();
});