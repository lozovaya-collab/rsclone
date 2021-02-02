import { restaurantsData } from './apiData'
import { RestaurantPage } from './RestaurantPage'

let card = [];
export const getDataCard = () => {
    let cards = document.querySelectorAll('.cards_wrapper > [data-id]')

    for (let i = 0; i < cards.length; i += 1) {

        cards[i].addEventListener('click', () => {
            card = []
            let dataIdCard = cards[i].getAttribute('data-id')

            if (dataIdCard === restaurantsData[i].id) {

                card.push({
                    id: restaurantsData[i].id,
                    name: restaurantsData[i].name,
                    categories: restaurantsData[i].categories,
                    image_url: restaurantsData[i].image_url,
                    rating: restaurantsData[i].rating,
                    review_count: restaurantsData[i].review_count,
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

            } else {
                card = []
            }
            localStorage.setItem("card", JSON.stringify(card));
        })
    }
}

let data = JSON.parse(localStorage.getItem("card"));

export const renderPageRestaurant = () => {
    let pageRestaurant = getWrapperPageRestaurant();
    if (pageRestaurant) {
        generatePage(data).forEach(el => {
            pageRestaurant.append(el.generateRestaurantsPage())
        })
    }
}

const getWrapperPageRestaurant = () => {
    const restaurantContainer = document.querySelector('.main__restaurant_page')
    if (restaurantContainer) {
        restaurantContainer.innerHTML = ''
        return restaurantContainer
    }
}

const generatePage = (data) => {
    let array = []
    data.forEach(element => {
        array.push(new RestaurantPage(element))
    });
    return array
}