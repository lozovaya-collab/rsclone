import { getRating } from './starsRating'
import { db } from './dbFirebase'


const usernameReview = document.querySelector('.review__restaurant_main__user_username')
const avatarReview = document.querySelector('.review__restaurant_main__user_avatar')
const review = document.querySelector('.review__restaurant_main__text__area')
const sumbitReview = document.querySelector('.review_submit')
const headlineRestaurant = document.querySelector('.review__restaurant_main__text__headline a')
const search = document.querySelector('.review__restaurant_search')
let rating

if (localStorage.getItem('user') !== '' && usernameReview) {
    if (localStorage.getItem('fromPage') !== null && localStorage.getItem('fromPage') !== '') {
        let restPage = JSON.parse(localStorage.getItem('card'))[0]
        headlineRestaurant.innerHTML = restPage.name
        headlineRestaurant.href = ''

        search.style.visibility = 'hidden'
    }
    const objUser = JSON.parse(localStorage.getItem('user'))
    console.log(objUser);
    usernameReview.innerHTML = objUser.Username
    avatarReview.src = objUser.Avatar

    const stars_rating = document.querySelectorAll('.review__restaurant__rating_submit_item')
    for (let i = 0; i < stars_rating.length; i++) {
        stars_rating[i].addEventListener('click', (e) => {
            rating = e.target.value
            document.querySelector('.rating__value').innerHTML = rating
            getRating()
        })
    }

    sumbitReview.addEventListener('click', createReview)


}




function createReview() {
    console.log('submit');
    localStorage.setItem('fromPage', '')
    let currentDate = new Date().toISOString().slice(0, 10)
    db.collection("reviews").add({
            Avatar: avatarReview.src,
            Username: usernameReview.innerHTML,
            Restaurant: headlineRestaurant.innerHTML,
            Review: review.value,
            Rating: rating,
            Date: currentDate
        })
        .then(function(doc) {
            console.log(doc.id);
            window.location.href = '../../dist/pages/restaurants.html'
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}