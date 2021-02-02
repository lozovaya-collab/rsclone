import { db } from './dbFirebase'
import { setErrorFor, setSuccessFor } from "./signUp"
if (localStorage.getItem('user') !== '') {
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
    const changeInformation = document.querySelector('.profile__body_settings__body__change_information')
    const profile_change_data = document.querySelector('.profile__body_settings__options__change_data')
    const profile_statistics = document.querySelector('.profile__body_settings__options__statistics')

    let colorOfProfile

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

    const setColorMood = (color) => {
        const profile_change_data = document.querySelector('.profile__body_settings__options__change_data')
        const profile_statistics = document.querySelector('.profile__body_settings__options__statistics')
        const profile_prop = document.querySelector('.profile__body_card_of_user__information_user_prop')
        if (color === 'yellow') {
            profile_change_data.className = 'profile__body_settings__options__change_data yellow__mood'
            profile_statistics.className = 'profile__body_settings__options__statistics yellow__mood_disabled'
            profile_prop.className = 'profile__body_card_of_user__information_user_prop yellow__mood_prop'
        } else if (color === 'blue') {
            profile_change_data.className = 'profile__body_settings__options__change_data blue__mood'
            profile_statistics.className = 'profile__body_settings__options__statistics blue__mood_disabled'
            profile_prop.className = 'profile__body_card_of_user__information_user_prop blue__mood_prop'
        }
    }
    const changeColor = () => {
        let url = userInfo.UrlOfImage.split('')
        let index = url.indexOf('u') + 4
        let rand
        if (colorOfProfile === 'blue') {

            if (url[index] == 3) {
                rand = '2'
            }
            if (url[index] == 4) {
                rand = '1'
            }
            colorOfProfile = 'yellow'
        } else if (colorOfProfile === 'yellow') {
            if (url[index] == 1) {
                rand = '4'
            }
            if (url[index] == 2) {
                rand = '3'
            }
            colorOfProfile = 'blue'
        }
        avatar.src = `../../dist/src/assets/images/user${rand}.png`
        setColorMood()
        let userNewColor = db.collection("users").doc(objLocal.ID)
        return userNewColor.update({
                ColorOfProfile: colorOfProfile,
                UrlOfImage: avatar.src
            })
            .then(function() {

                location.reload()
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
    }

    const changeStatistics = (color) => {
        if (color === 'yellow') {
            profile_change_data.className = 'profile__body_settings__options__change_data yellow__mood_disabled'
            profile_statistics.className = 'profile__body_settings__options__statistics yellow__mood'

        } else if (color === 'blue') {
            profile_change_data.className = 'profile__body_settings__options__change_data blue__mood_disabled'
            profile_statistics.className = 'profile__body_settings__options__statistics blue__mood'
        }

        let arr = JSON.parse(localStorage.getItem('reviews'))
        arr = uniqueArray(arr, 'Restaurant', 'Review')
        localStorage.setItem('reviews', JSON.stringify(arr))
        settings.innerHTML = `
                    <div class="profile__body_settings__body_count">
                        <span>My reviews</span><span>${arr.length}</span>
                    </div>`


    }

    const changeData = (color) => {
        if (color === 'yellow') {
            profile_change_data.className = 'profile__body_settings__options__change_data yellow__mood'
            profile_statistics.className = 'profile__body_settings__options__statistics yellow__mood_disabled'

        } else if (color === 'blue') {
            profile_change_data.className = 'profile__body_settings__options__change_data blue__mood'
            profile_statistics.className = 'profile__body_settings__options__statistics blue__mood_disabled'
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
        settings.innerHTML = ` <
            div class = "container__form_control" >
            <
            label class = "password__change" > Old password < /label> <
            input type = "password"
        placeholder = "old password"
        id = "passwordOld"
        value = "" > < /input> <
            i class = "fas fa-check-circle" > < /i> <
            i class = "fas fa-exclamation-circle" > < /i> <
            small > Error message < /small> <
            /div> <
            div class = "container__form_control" >
            <
            label class = "password__change" > New password < /label> <
            input type = "password"
        placeholder = "password"
        id = "passwordNew"
        value = "" > < /input> <
            i class = "fas fa-check-circle" > < /i> <
            i class = "fas fa-exclamation-circle" > < /i> <
            small > Error message < /small> <
            /div> <
            div class = "container__form_control" >
            <
            label class = "password__change" > New password check < /label> <
            input type = "password"
        placeholder = "password repeat"
        id = "passwordNew2"
        value = "" > < /input> <
            i class = "fas fa-check-circle" > < /i> <
            i class = "fas fa-exclamation-circle" > < /i> <
            small > Error message < /small> <
            /div> <
            button type = "submit"
        class = "profile__body_settings__body__change_password_button" > Submit < /button>`

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

    const changeInfoUser = () => {
        settings.innerHTML = `<div>
        <div class="container__form_control">
            <label for="name">First Name</label>
            <input type="text" placeholder="First name" id="name" value=""></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <div class="container__form_control">
            <label for="surname">Last Name</label>
            <input type="text" placeholder="Last Name" id="surname" value=""></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
    </div>
    <div>
        <div class="container__form_control">
            <label for="birthday">Birthday</label>
            <input type="date" id="birthday"></input>
            <small>Error message</small>
        </div>
        <div class="container__form_control">
            <label>Your location</label>
            <br>
            <div class="adress">
                <div class="location country">Canada</div>
                <select  name="city" id="" class="input_searching searching_city profile_city">                            
                    <option selected value="Cities of Canada"  class="selection-allCities" >Cities of Canada</option>
                    <option value="Ottawa">Ottawa</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Edmonton">Edmonton</option>
                    <option value="Mississauga">Mississauga</option>
                    <option value="Winnipeg">Winnipeg</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Hamilton">Brampton</option>                            
                </select>
            </div>
            <small id='location_error'>Error message</small>
        </div>
        <button type="submit" class="profile__body_settings__body__change_password_button">Submit</button> </div>`
        const selectCity = document.querySelector('select')

        settings.style.flexDirection = 'row'
        document.getElementById('name').value = userInfo.Firstname
        document.getElementById('surname').value = userInfo.LastName
        document.getElementById('birthday').value = userInfo.Birthday

        for (let i = 1; i < selectCity.children.length; i++) {
            if (selectCity.options[i].value == userInfo.City) {
                selectCity.options[i].selected = i
            }
        }
        selectCity.addEventListener('change', function(e) {
            newCityUser = e.target.value
        })
        const changeInformationButton = document.querySelector('.profile__body_settings__body__change_password_button')
        changeInformationButton.addEventListener('click', () => {
            let index = selectCity.options.selectedIndex
            let userNewInfo = db.collection("users").doc(objLocal.ID);
            return userNewInfo.update({
                    Firstname: document.getElementById('name').value,
                    LastName: document.getElementById('surname').value,
                    Birthday: document.getElementById('birthday').value,
                    City: selectCity.options[index].value
                })
                .then(function() {
                    location.reload()
                })
                .catch(function(error) {
                    console.error("Error updating document: ", error);
                });
        })


    }

    if (nameUser) {
        db.collection("users").where("Username", "==", objLocal.Username)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    db.collection("reviews").where("Username", "==", objLocal.Username)
                        .get()
                        .then(function(querySnapshot) {
                            let arrayReviews = []
                            querySnapshot.forEach(function(doc) {
                                arrayReviews.push(doc.data())
                            });
                            arrayReviews = uniqueArray(arrayReviews, 'Restaurant', 'Review')
                            localStorage.setItem('reviews', JSON.stringify(arrayReviews))
                        })
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
                    changeInformation.addEventListener('click', changeInfoUser)
                    console.log(colorOfProfile);
                    setColorMood(colorOfProfile)
                    profile_statistics.addEventListener('click', () => {
                        changeStatistics(colorOfProfile)
                    })
                    profile_change_data.addEventListener('click', () => {
                        changeData(colorOfProfile)
                        settings.innerHTML = `
                    <div class="profile__body_settings__body__change_password">Cange password</div>
                    <div class="profile__body_settings__body__change_information">Cange information about me</div>
                    <div class="profile__body_settings__body__change_color">Cange color of my profile</div>
                    `
                        const changeColorOfProfile = document.querySelector('.profile__body_settings__body__change_color')
                        const changePassword = document.querySelector('.profile__body_settings__body__change_password')
                        const changeInformation = document.querySelector('.profile__body_settings__body__change_information')

                        changeColorOfProfile.addEventListener('click', changeColor)
                        changePassword.addEventListener('click', changePasswordLayouts)
                        changeInformation.addEventListener('click', changeInfoUser)
                    })


                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
}