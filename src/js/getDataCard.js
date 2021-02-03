import { restaurantsData } from './apiData'
import { RestaurantPage } from './RestaurantPage'
import { db } from './dbFirebase'

let card = [];
export const getDataCard = () => {
        let cards = document.querySelectorAll('.cards_wrapper > [data-id]')
        for (let i = 0; i < cards.length; i += 1) {
            cards[i].addEventListener('click', (e) => {
                card = []
                let dataIdCard = cards[i].getAttribute('data-id')

                if (dataIdCard === restaurantsData[i].id) {
                    db.collection("reviews").where("Restaurant", "==", restaurantsData[i].name)
                        .get()
                        .then(function(querySnapshot) {
                            let arrayReviews = []

                            querySnapshot.forEach(function(doc) {
                                arrayReviews.push(doc.data())
                            });

                            const uniqueArray = (array, prop1, prop2) => {
                                for (let i = 0; i < array.length; i++) {
                                    for (let j = i + 1; j < array.length; j++) {
                                        if (array[i][prop1] === array[j][prop1] && array[i][prop2] === array[j][prop2]) {
                                            array.splice(i, 1)
                                        }
                                    }
                                }
                                return array
                            }
                            uniqueArray(arrayReviews, 'Username', 'Review')
                            console.log(e.target)
                            card.push({
                                id: restaurantsData[i].id,
                                name: restaurantsData[i].name,
                                categories: restaurantsData[i].categories,
                                image_url: restaurantsData[i].image_url,
                                rating: restaurantsData[i].rating,
                                reviews: arrayReviews,
                                review_count: arrayReviews.length,
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
                            localStorage.setItem("card", JSON.stringify(card));
                            console.log('CCCCCCC', card)
                        })

                } else {
                    card = []
                    localStorage.setItem("card", JSON.stringify(card));
                }
            })
        }
    }
    /// render restaurant page
let dataRestaurant = JSON.parse(localStorage.getItem("card"));

export const renderPageRestaurant = () => {
    let pageRestaurant = getWrapperPageRestaurant();
    if (pageRestaurant) {
        generatePage(dataRestaurant).forEach(el => {
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

const generatePage = (dataRestaurant) => {
    let array = []
    dataRestaurant.forEach(element => {
        array.push(new RestaurantPage(element))
    });
    return array
}