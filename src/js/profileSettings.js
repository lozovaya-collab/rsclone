import { myUser, myUserId } from "./logIn"
import { db } from './dbFirebase'
import { setErrorFor, setSuccessFor } from "./signUp"
let objLocal = JSON.parse(localStorage.getItem('user'))
let userInfo = {}
const nameUser = document.querySelector('.first_name')
const surnameUser = document.querySelector('.last_name')
const dateUser = document.querySelector('.date')
const usernameUser = document.querySelector('.profile__body_card_of_user__avatar_username')
const avatar = document.querySelector('.avatar')
const locationCanada = document.querySelector('.locationCanada')
const settings = document.querySelector('.profile__body_settings__body')
const changeColorOfProfile = document.querySelector('.profile__body_settings__body__change_color')
const changePassword = document.querySelector('.profile__body_settings__body__change_password')
let colorOfProfile

const setYellowMood = () => {

    if (colorOfProfile === 'yellow') {
        const profile_change_data = document.querySelector('.profile__body_settings__options__change_data')
        const profile_statistics = document.querySelector('.profile__body_settings__options__statistics')
        const profile_prop = document.querySelector('.profile__body_card_of_user__information_user_prop')
        console.log(profile_change_data);

        profile_change_data.classList.remove('blue_mood')
        profile_statistics.classList.remove('blue_mood_disabled')
        profile_prop.classList.remove('blue_mood_prop')

        profile_change_data.className += ' yellow__mood'
        profile_statistics.className += ' yellow__mood_disabled'
        profile_prop.className += ' yellow__mood_prop'
    }
}
const changeColor = () => {

    if (colorOfProfile === 'blue') {
        //setYellowMood()
        let url = userInfo.UrlOfImage.split('')
        let index = url.indexOf('u') + 4
        if (Number(url[index]) === 1) {
            url[index] = '4'
        }
        if (Number(url[index]) === 4) {
            url[index] = '1'
        }
        /*if (Number(url[index]) === 2) {
            url[index] = '3'
        }
        if (Number(url[index]) === 3) {
            url[index] = '2'
        }
        console.log(url);*/
        avatar.src = url.join('')
        let userNewColor = db.collection("users").doc(objLocal.ID)
        return userNewColor.update({
                ColorOfProfile: 'yellow',
                UrlOfImage: avatar.src
            })
            .then(function() {
                location.reload()
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
    }
}
const changePasswordUser = () => {
    const oldPassword = document.getElementById('passwordOld')
    const newPassword = document.getElementById('passwordNew')
    const newPasswordRepeat = document.getElementById('passwordNew2')


    if (userInfo.Password === oldPassword.value) {
        setSuccessFor(oldPassword)
    } else if (oldPassword.value !== '') {
        setErrorFor(oldPassword, 'Password cannot be blank')
    } else if (userInfo.Password !== oldPassword.value && oldPassword.value !== '') {
        setErrorFor(oldPassword, 'Wrong password')
    }

    if (newPassword.value === '') {
        setErrorFor(newPassword, 'Password cannot be blank')
    } else if (newPassword.value.length < 6) {
        setErrorFor(newPassword, 'Password is too short!')
    } else {
        setSuccessFor(newPassword)
    }

    if (newPasswordRepeat.value === '') {
        setErrorFor(newPasswordRepeat, 'Password cannot be blank')
    } else if (newPassword.value !== newPasswordRepeat.value) {
        setErrorFor(newPasswordRepeat, 'Passwords don\'t match')
    } else {
        setSuccessFor(newPasswordRepeat)
        console.log(oldPassword.value);
        if (userInfo.Password === oldPassword.value) {
            let userNewPassword = db.collection("users").doc(objLocal.ID);
            userInfo.Password = newPasswordRepeat.value
            return userNewPassword.update({
                    Password: newPasswordRepeat.value
                })
                .then(function() {
                    location.reload()
                })
                .catch(function(error) {
                    console.error("Error updating document: ", error);
                });
        }
    }
}

const changePasswordLayouts = () => {
    settings.innerHTML = `
<div class="container__form_control">
    <label class="password__change">Old password</label>
    <input type="password" placeholder="old password" id="passwordOld" value=""></input>
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>Error message</small>
</div>
<div class="container__form_control">
    <label class="password__change">New password</label>
    <input type="password" placeholder="password" id="passwordNew" value=""></input>
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>Error message</small>
</div>
<div class="container__form_control">
    <label class="password__change">New password check</label>
    <input type="password" placeholder="password repeat" id="passwordNew2" value=""></input>
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>Error message</small>
</div>
<button type="submit" class="profile__body_settings__body__change_password_button">Submit</button>`

    settings.style.alignItems = 'center'
    settings.style.marginTop = '0px'
    document.querySelectorAll('.container__form_control')[0].style.marginBottom = '-15px'
    document.querySelectorAll('.container__form_control')[1].style.marginBottom = '-15px'
    document.querySelectorAll('.container__form_control')[2].style.marginBottom = '-15px'
    document.querySelectorAll('.container__form_control label')[0].style.marginBottom = '0px'
    document.querySelectorAll('.container__form_control label')[1].style.marginBottom = '0px'
    document.querySelectorAll('.container__form_control label')[2].style.marginBottom = '0px'
    document.querySelectorAll('.container__form_control small')[0].style.fontSize = '15px'
    document.querySelectorAll('.container__form_control small')[1].style.fontSize = '15px'
    document.querySelectorAll('.container__form_control small')[2].style.fontSize = '15px'
    document.querySelectorAll('.container__form_control small')[0].style.marginTop = '-15px'
    document.querySelectorAll('.container__form_control small')[1].style.marginTop = '-15px'
    document.querySelectorAll('.container__form_control small')[2].style.marginTop = '-15px'
    document.querySelectorAll('.fa-exclamation-circle')[0].style.top = '63px'
    document.querySelectorAll('.fa-exclamation-circle')[1].style.top = '63px'
    document.querySelectorAll('.fa-exclamation-circle')[2].style.top = '63px'
    document.querySelectorAll('.fa-exclamation-circle')[0].style.fontSize = '23px'
    document.querySelectorAll('.fa-exclamation-circle')[1].style.fontSize = '23px'
    document.querySelectorAll('.fa-exclamation-circle')[2].style.fontSize = '23px'
    document.querySelectorAll('.fa-check-circle')[0].style.top = '63px'
    document.querySelectorAll('.fa-check-circle')[1].style.top = '63px'
    document.querySelectorAll('.fa-check-circle')[2].style.top = '63px'
    document.querySelectorAll('.fa-check-circle')[0].style.fontSize = '23px'
    document.querySelectorAll('.fa-check-circle')[1].style.fontSize = '23px'
    document.querySelectorAll('.fa-check-circle')[2].style.fontSize = '23px'


    const changePasswordButton = document.querySelector('.profile__body_settings__body__change_password_button')
    changePasswordButton.addEventListener('click', changePasswordUser)
}

db.collection("users").where("Username", "==", objLocal.Username)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            userInfo = doc.data()
            nameUser.innerHTML = userInfo.Firstname
            surnameUser.innerHTML = userInfo.LastName
            dateUser.innerHTML = userInfo.Birthday
            usernameUser.innerHTML = userInfo.Username
            avatar.src = userInfo.UrlOfImage
            locationCanada.innerHTML = `${userInfo.Country}, ${userInfo.City}`
            colorOfProfile = userInfo.ColorOfProfile
            changeColorOfProfile.addEventListener('click', changeColor)
            changePassword.addEventListener('click', changePasswordLayouts)

            setYellowMood()
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });