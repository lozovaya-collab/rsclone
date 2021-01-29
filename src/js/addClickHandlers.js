import { arrayNameRestaurantsCity } from './apiData'
// import { arrayNameRestaurants } from './../index'

//filter price
let input = document.querySelector('#input-select')

export const addFilterPriceClickHandler = () => {
    let filter = document.querySelector('.filter');

    if (filter !== null) {
        filter.addEventListener('click', (e) => {

            if (e.target.classList.contains('filter_box')) {

                input.value = '';
                let clickedFilter = e.target;
                removeSelectedFilter();
                selectClickedFilter(clickedFilter);
                if (clickedFilter.innerText === 'Reset all filters') {
                    // let selectionCity = this.options[this.selectedIndex];
                    // selectionCity = 0
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
    let filterValues = document.querySelectorAll('.cards_wrapper > a');
    filterValues.forEach(value => {
        value.classList.remove('hidden');
    })
    removeSelectedFilterRestaurant()
}
const filterBySelectedValue = (selectedValue) => {

    let filterValues = document.querySelectorAll('.cards_wrapper > a')
    filterValues.forEach(value => {
        value.classList.add('hidden');
        //filter price
        value.querySelectorAll('.priceRestaurant').forEach(item => {
                if (item.innerText === selectedValue) {
                    value.classList.remove('hidden');
                }
            })
            //filter type restaurants
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
    // arrayNameRestaurantsCity.forEach(element => {
    //     arrayData.push(element)
    // })
    // arrayData.forEach(nameRestaurant => {
    //     arrayNameRestaurants.push(nameRestaurant.name)
    // })
export const sortRestaurantsByCities = () => {
    let selectionCity = document.querySelector('.searching_city ')
    let cardsRestaurantsMain = document.querySelectorAll('.cards_wrapper_city>a')
    let cardsRestaurantsPage = document.querySelectorAll('.cards_wrapper_restaurants>a')
    let citiesCards = document.querySelectorAll('.address_restaurant')

    // console.log('kkkkkkkkkkkkkkkkkkkkk', arrayNameRestaurants)
    arrayData = []
    arrayNameRestaurants = []
    arrayNameRestaurantsCity.forEach(element => {
            arrayData.push(element)
        })
        // console.log('ooooooooooooooo', arrayData)
    arrayData.forEach(nameRestaurant => {
            arrayNameRestaurants.push(nameRestaurant.name)
        })
        // console.log('ooooooooooooooo', arrayNameRestaurants)

    if (selectionCity) {
        selectionCity.addEventListener('change', changeValueSelect)
    }



    function changeValueSelect() {
        arrayData = []
        arrayNameRestaurants = []

        let selectionCity = this.options[this.selectedIndex].text
            // console.log(selectionCity)
            // console.log('xxxxxxxxxxxxxxx', arrayNameRestaurants)

        let count = 1;
        for (let i = 0; i < cardsRestaurantsMain.length; i += 1) {
            if (selectionCity === 'Cities of Canada' && count !== 9) {
                cardsRestaurantsMain[i].classList.remove('hidden');

                count++;
            } else if (citiesCards[i].innerText.includes(selectionCity) && count !== 9) {
                cardsRestaurantsMain[i].classList.remove('hidden');
                selectionCity;
                count++
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

            if (selectionCity === 'Cities of Canada' && count !== 16) {
                document.querySelector('.all_position').classList.add('filter_active')
                cardsRestaurantsPage[i].classList.remove('hidden');
                count++
            } else if (citiesCards[i].innerText.includes(selectionCity)) {
                removeSelectedFilter();
                removeSelectedFilterRestaurant();
                cardsRestaurantsPage[i].classList.remove('hidden');
                count++
            } else {
                removeSelectedFilter();
                removeSelectedFilterRestaurant();
                cardsRestaurantsPage[i].classList.add('hidden');
            }
        }

        for (let j = 0; j < arrayNameRestaurantsCity.length; j += 1) {

            if (arrayNameRestaurantsCity[j].city === 'Cities of Canada' || document.querySelector('#input-select').value === '') {
                arrayData.push(arrayNameRestaurantsCity[j])

            } else if (selectionCity === arrayNameRestaurantsCity[j].city) {
                arrayData.push(arrayNameRestaurantsCity[j])

            }

        }

        arrayData.forEach(nameRestaurant => {
            arrayNameRestaurants.push(nameRestaurant.name)
        })

        // console.log(arrayData)
        // console.log(arrayNameRestaurants)
    }

    // console.log(arrayData)
    // console.log(arrayNameRestaurants)
}