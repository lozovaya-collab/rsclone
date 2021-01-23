//filter price
export const addFilterPriceClickHandler = () => {
    let filter = document.querySelector('.filter');
    if (filter !== null) {
        filter.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter_box')) {
                let clickedFilter = e.target;
                removeSelectedFilter();
                selectClickedFilter(clickedFilter);
                if (clickedFilter.innerText === 'All') {
                    showAllFilters()
                } else {
                    filterBySelectedValue(clickedFilter.innerText)
                }
            }
        })
    }
}

const removeSelectedFilter = () => {
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
    typeRestaurant.addEventListener('click', (e) => {
        if (e.target.classList.contains('titleRestaurant')) {
            let clickedFilterRestaurants = e.target;
            let choiceRestaurant = clickedFilterRestaurants.innerText.trim()

            removeSelectedFilterRestaurant();
            selectClickedRestaurant(clickedFilterRestaurants);
            filterBySelectedValue(choiceRestaurant);

        }
    })
}

const selectClickedRestaurant = (clickedRestaurant) => {
    clickedRestaurant.classList.add('titleRestaurant_active')
}

const removeSelectedFilterRestaurant = () => {
    let filterBoxRestaurants = document.querySelectorAll('.titleRestaurant');

    filterBoxRestaurants.forEach(filter => {
        filter.classList.remove('titleRestaurant_active')
    })
};