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
                if (clickedFilter.innerText === 'All') {
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
            //filter restaurants
        value.querySelectorAll('.service_restaurant > span').forEach(item => {

            if (item.innerText === selectedValue) {
                value.classList.remove('hidden');
            }
        })

    })

}

//filter restaurants
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
            console.log(rating)
            count++

        }
    }
}