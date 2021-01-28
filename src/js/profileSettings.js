import { myUser } from "./logIn"

console.log('My user:', JSON.parse(localStorage.getItem('user')));
let obj = JSON.parse(localStorage.getItem('user'))
const nameUser = document.querySelector('.first_name')
const surnameUser = document.querySelector('.last_name')
const dateUser = document.querySelector('.date')
const usernameUser = document.querySelector('.profile__body_card_of_user__avatar_username')
const avatar = document.querySelector('.avatar')
const locationCanada = document.querySelector('.locationCanada')

if (nameUser !== null) {
    nameUser.innerHTML = obj.Firstname
    surnameUser.innerHTML = obj.LastName
    dateUser.innerHTML = obj.Birthday
    usernameUser.innerHTML = obj.Username
    avatar.src = obj.UrlOfImage
    locationCanada.innerHTML = `${obj.Country}, ${obj.City}`
}

const changeColorOfProfile = document.querySelector('.profile__body_settings__body__change_color')

const changeColor = () => {
    const info = document.querySelector('.profile__body_card_of_user__information_user_prop')
    const optionChageData = document.querySelector('.profile__body_settings__options__change_data')
    const optionStatistics = document.querySelector('.profile__body_settings__options__statistics')
    const optionStatisticsHeadline = document.querySelector('.profile__body_settings__options__statistics_headline')
    info.style.color = "#efca08"
    optionChageData.style.background = "#efca08"
    optionChageData.style.borderColor = "#efca08"
    optionStatistics.style.borderColor = "#efca08"
    optionStatisticsHeadline.style.color = "#efca08"

    let url = obj.UrlOfImage.split('')
    let index = url.indexOf('u') + 4
    if (Number(url[index]) === 1) {
        url[index] = '4'
    }
    if (Number(url[index]) === 4) {
        url[index] = '1'
    }
    if (Number(url[index]) === 2) {
        url[index] = '3'
    }
    if (Number(url[index]) === 3) {
        url[index] = '2'
    }
    console.log(url);
    avatar.src = url.join('')
}

changeColorOfProfile.addEventListener('click', changeColor)