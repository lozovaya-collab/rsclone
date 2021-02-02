import { getRating } from './starsRating'
import { db } from './dbFirebase'
import { getDataCard } from './getDataCard'

const usernameReview = document.querySelector('.review__restaurant_main__user_username')
const avatarReview = document.querySelector('.review__restaurant_main__user_avatar')
const review = document.querySelector('.review__restaurant_main__text__area')
const sumbitReview = document.querySelector('.review_submit')
const headlineRestaurant = document.querySelector('.review__restaurant_main__text__headline a')
const search = document.querySelector('.cards_wrapper')
const searching = document.querySelector('.review__restaurant_search')



let rating

if (localStorage.getItem('user') !== '' && usernameReview) {
    if (localStorage.getItem('fromPage') !== null && localStorage.getItem('fromPage') !== '') {
        let restPage = JSON.parse(localStorage.getItem('card'))[0]
        headlineRestaurant.innerHTML = restPage.name
        headlineRestaurant.href = ''
        const wrapper = document.querySelector('.wrapper')
        searching.style.visibility = 'hidden'
        setTimeout(() => {
            search.innerHTML = ''
        }, 1000)
    }
    const objUser = JSON.parse(localStorage.getItem('user'))
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



    if (sumbitReview) {
        sumbitReview.addEventListener('click', () => {
            console.log(sumbitReview);
            createReview()
        })
    }
}

function createReview() {
    localStorage.setItem('fromPage', '')
    let currentDate = new Date().toISOString().slice(0, 10)
    if (review.value !== '' && rating !== undefined && headlineRestaurant.innerHTML !== 'Please select a restaurant...') {
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
                getDataCard()
                window.location.href = './pageRestaurant.html'
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    } else {
        if (review.value === '') {
            review.placeholder = 'Please enter your review!'
        }
        if (rating === undefined) {
            const mess = document.querySelector('.message')
            mess.style.visibility = 'visible'
        }
        if (headlineRestaurant.innerHTML === 'Please select a restaurant...') {
            headlineRestaurant.style.color = '#ef7008'
        }
    }

}