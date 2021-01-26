const form = document.getElementById('form')
export const username = document.getElementById('username')
export const email = document.getElementById('email')
export const password = document.getElementById('password')
export const password2 = document.getElementById('password2')
export const firstName = document.getElementById('name')
export const lastName = document.getElementById('surname')
export const birthday = document.getElementById('birthday')
export const country = document.querySelector('.country')
export const city = document.querySelector('.city')


const locationButton = document.querySelector('.locationButton')


if (form !== null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        checkInputs()
    })
}

if (locationButton !== null) {
    locationButton.addEventListener('click', yourLocation)
}

export function checkInputs() {
    if (username !== null) {
        const usernameValue = username.value.trim()
        const emailValue = email.value.trim()
        const passwordValue = password.value.trim()
        const password2Value = password2.value.trim()
        const firstNameValue = firstName.value.trim()
        const lastNameValue = lastName.value.trim()
        const birthdayValue = birthday.value
        const countryValue = country.innerHTML
        const cityValue = city.innerHTML
        let isOk = true
        if (firstNameValue === '') {
            setErrorFor(firstName, 'First name cannot be blank')
            isOk = false
        } else {
            setSuccessFor(firstName)
        }

        if (lastNameValue === '') {
            setErrorFor(lastName, 'Last name cannot be blank')
            isOk = false
        } else {
            setSuccessFor(lastName)
        }

        if (birthdayValue === '') {
            setErrorFor(birthday, 'Birthday cannot be blank')
            isOk = false
        } else if (Number(birthdayValue.substr(0, 4)) > 2007) {
            setErrorFor(birthday, 'You are very young!')
            isOk = false
        } else {
            setSuccessFor(birthday)
        }

        if (usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank')
            isOk = false
        } else {
            setSuccessFor(username)
        }

        if (countryValue === 'Country' && cityValue === 'City') {
            const small = document.getElementById('location_error')
            const inputLoc = document.querySelectorAll('.location')
            inputLoc[0].style.border = '2px solid #ef7008'
            inputLoc[1].style.border = '2px solid #ef7008'
            small.style.visibility = 'visible'
            small.style.color = '#ef7008'
            small.innerText = 'Please, share your location'
            isOk = false
        } else {
            const small = document.getElementById('location_error')
            const inputLoc = document.querySelectorAll('.location')
            inputLoc[0].style.border = '2px solid #00a6a6'
            inputLoc[1].style.border = '2px solid #00a6a6'
            small.style.visibility = 'hidden'
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank')
            isOk = false
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid')
            isOk = false
        } else {
            setSuccessFor(email)
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank')
            isOk = false
        } else if (passwordValue.length < 6) {
            setErrorFor(password, 'Password is too short! Minimum - 6 characters')
            isOk = false
        } else {
            setSuccessFor(password)
        }

        if (password2Value === '') {
            setErrorFor(password2, 'Password cannot be blank')
            isOk = false
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords don\'t match')
            isOk = false
        } else {
            setSuccessFor(password2)
        }
        return isOk
    }
}

export function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'container__form_control error'
}

export function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'container__form_control success'
}



export function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

async function yourLocation() {
    const resu = await fetch(`http://ip-api.com/json`);
    const data = await resu.json();
    alert('We are checking your location')
    const location = document.querySelectorAll('.location')
    location[0].innerHTML = data.country
    location[1].innerHTML = data.city
}