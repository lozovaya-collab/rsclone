import { arrayNameRestaurantsCity } from './apiData'
import { Autocomplete } from './Autocomplete'
import { options, map } from './map'

//filter price
let input = document.querySelector('#input-select')
export const addFilterPriceClickHandler = () => {
    let filter = document.querySelector('.filter');
    if (filter !== null) {
        filter.addEventListener('click', (e) => {
            document.querySelectorAll('.cards_wrapper_restaurants > a').forEach(value => {
                value.classList.remove('hidden');
            })
            document.querySelectorAll('.titleRestaurant').forEach(value => {
                value.classList.remove('titleRestaurant_active')
            })
            if (e.target.classList.contains('filter_box')) {

                document.querySelectorAll('.cards_wrapper_restaurants > a').forEach(value => {
                    value.classList.remove('hidden');
                })

                input.value = '';
                let clickedFilter = e.target;
                removeSelectedFilter();
                selectClickedFilter(clickedFilter);
                if (clickedFilter.innerText === 'Reset all filters') {
                    location.reload()
                    input.value = '';
                    showAllFilters()
                } else {
                    filterBySelectedValue(clickedFilter.innerText)

                }
            }
        })
    }
}

export const removeSelectedFilter = () => {
    let filterBox = document.querySelectorAll('.filter_box');
    filterBox.forEach(filter => {
        filter.classList.remove('filter_active')
    })
};

const selectClickedFilter = (clickedFilter) => {
    clickedFilter.classList.add('filter_active')
}

const showAllFilters = () => {
    let filterValues = document.querySelectorAll('.cards_wrapper_restaurants > a');
    filterValues.forEach(value => {
        value.classList.remove('hidden');
    })
    removeSelectedFilterRestaurant()
}
const filterBySelectedValue = (selectedValue) => {
    let filterValues = document.querySelectorAll('.cards_wrapper_restaurants > a')

    filterValues.forEach(value => {
        value.classList.add('hidden');
        // filter price
        value.querySelectorAll('.priceRestaurant').forEach(item => {
                if (item.innerText === selectedValue) {
                    value.classList.remove('hidden');
                }
            })
            // filter type restaurants
        value.querySelectorAll('.service_restaurant > span').forEach(item => {
            if (item.innerText === selectedValue) {
                value.classList.remove('hidden');
            }
        })
    })
}

//filter type restaurants
export const addFilterRestaurantsClickHandler = () => {
    let typeRestaurant = document.querySelector('.type_restaurant');
    if (typeRestaurant !== null) {
        typeRestaurant.addEventListener('click', (e) => {
            removeSelectedFilter();
            input.value = '';
            if (e.target.classList.contains('titleRestaurant')) {
                let clickedFilterRestaurants = e.target;
                let choiceRestaurant = clickedFilterRestaurants.innerText.trim()

                removeSelectedFilterRestaurant();
                selectClickedRestaurant(clickedFilterRestaurants);
                filterBySelectedValue(choiceRestaurant);
            }
        })
    }
}
const selectClickedRestaurant = (clickedRestaurant) => {
    clickedRestaurant.classList.add('titleRestaurant_active')
}
export const removeSelectedFilterRestaurant = () => {
    let filterBoxRestaurants = document.querySelectorAll('.titleRestaurant');

    filterBoxRestaurants.forEach(filter => {
        filter.classList.remove('titleRestaurant_active')
    })
};

//filter 3 best restaurants 
export function getBestRestaurants() {
    let cardsRestaurants = document.querySelectorAll('.cards_wrapper_main>a')
    cardsRestaurants.forEach(value => {
        value.classList.add('hidden');
    })
    let count = 1
    for (let i = 0; i < cardsRestaurants.length; i += 1) {
        let rating = cardsRestaurants[i].children[0].children[1].children[1].children[0].children[1].innerText
        if (rating === '5' && count !== 4) {
            cardsRestaurants[i].classList.remove('hidden');
            count++
        }
    }
}
// show type restaurants
export const showTypeRestaurants = () => {
    const linkRestaurants = document.querySelector('.restaurant_view');
    const boxTypeRestaurant = document.querySelector('.box_type_restaurant');
    if (linkRestaurants !== null) {
        linkRestaurants.addEventListener('mouseover', () => {
            if (boxTypeRestaurant) {
                boxTypeRestaurant.classList.add('box_type_active');
                boxTypeRestaurant.addEventListener('mouseout', (e) => {
                    e.stopPropagation()
                    boxTypeRestaurant.classList.remove('box_type_active');
                })
            }
        })
    }
}

// sort restaurants by cities
export let arrayData = []
export let arrayNameRestaurants = []
arrayNameRestaurantsCity.forEach(element => {
    arrayData.push(element)
})
arrayData.forEach(nameRestaurant => {
    arrayNameRestaurants.push(nameRestaurant.name)
})
export const sortRestaurantsByCities = () => {
    let selectionCity = document.querySelector('.searching_city')
    let cardsRestaurantsMain = document.querySelectorAll('.cards_wrapper_city>a')
    let cardsRestaurantsPage = document.querySelectorAll('.cards_wrapper_restaurants>a>div')
    let cardsRestaurantsReviews = document.querySelectorAll('.restaurants_wrapper_review>a')
    let citiesCards = document.querySelectorAll('.address_restaurant')

    if (selectionCity) {
        selectionCity.addEventListener('change', changeValueSelect)
    }

    function changeValueSelect() {
        removeSelectedFilterRestaurant()
        showAllFilters()
        let selectionCity = this.options[this.selectedIndex].text
        arrayData = []
        arrayNameRestaurants = []

        let count = 1;
        for (let i = 0; i < cardsRestaurantsMain.length; i += 1) {

            if (selectionCity === 'Cities of Canada' && count !== 9) {
                cardsRestaurantsMain[i].classList.remove('hidden');

                count++;
            } else if (citiesCards[i].innerText.includes(selectionCity)) {
                cardsRestaurantsMain[i].classList.remove('hidden');
                selectionCity;

            } else {
                cardsRestaurantsMain[i].classList.add('hidden');
            }
        }

        let city = document.querySelector('.restaurant_inCity')
        if (city) {
            if (selectionCity === 'Cities of Canada') {
                city.innerHTML = ''
            } else if (selectionCity) {
                city.innerHTML = selectionCity;
            }
        }

        for (let i = 0; i < cardsRestaurantsPage.length; i += 1) {
            if (selectionCity === 'Cities of Canada') {
                cardsRestaurantsPage[i].classList.remove('hidden_card');
                if (!cardsRestaurantsReviews) {
                    document.querySelector('.all_position').classList.add('filter_active')
                }

            } else if (citiesCards[i].innerText.includes(selectionCity)) {
                removeSelectedFilter();
                removeSelectedFilterRestaurant();
                cardsRestaurantsPage[i].classList.remove('hidden_card');

            } else {
                removeSelectedFilter();
                removeSelectedFilterRestaurant();
                cardsRestaurantsPage[i].classList.add('hidden_card');
            }
        }

        //array of name restaurants
        for (let j = 0; j < arrayNameRestaurantsCity.length; j += 1) {

            if (selectionCity === 'Cities of Canada') {
                arrayData.push(arrayNameRestaurantsCity[j])

            } else if (selectionCity === arrayNameRestaurantsCity[j].city) {
                arrayData.push(arrayNameRestaurantsCity[j])
            }
        }
        arrayData.forEach(nameRestaurant => {
            arrayNameRestaurants.push(nameRestaurant.name)
        })

        Autocomplete('#input-select', arrayNameRestaurants);

        // map
        if (document.querySelector('#map')) {
            let arrayCoordinateCity = [
                { 'Ottawa': [45.401795, -75.699583] },
                { 'Montreal': [45.498301, -73.568500] },
                { 'Toronto': [43.684345, -79.431292] },
                { 'Calgary': [51.034091, -114.083912] },
                { 'Edmonton': [53.530798, -113.511802] },
                { 'Mississauga': [43.574599, -79.606185] },
                { 'Winnipeg': [49.887898, -97.134185] },
                { 'Vancouver': [49.284600, -123.116885] },
                { 'Quebec City': [46.807096, -71.211788] },
                { 'Brampton': [43.686796, -79.759582] }, { 'Cities of Canada': [45.401795, -75.699583] }
            ]
            options.center = []
            for (let i = 0; i < arrayCoordinateCity.length; i += 1) {
                if (arrayCoordinateCity[i][selectionCity]) {

                    map.panTo(new L.LatLng(arrayCoordinateCity[i][selectionCity][0], arrayCoordinateCity[i][selectionCity][1]))
                }
            }
        }
    }
}