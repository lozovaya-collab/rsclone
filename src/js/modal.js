import { setErrorFor, setSuccessFor, isEmail } from "./signUp";
const formLogIn = document.getElementById('popup')
if (formLogIn !== null) {
    formLogIn.innerHTML = `<div class="popup__body">
<div class="popup__content">
    <a href="" class="popup__close"></a>
    <div class="popup__title container_header">
        <h2 class="container_header_headline">Log In</h2>
        <i class="far fa-times-circle btnClose"></i>
    </div>
    <div class="popup__form">
        <div class="container__form_control">
            <label>Email</label>
            <input type="email" placeholder="test@test.com" id="emailLogIn"></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <div class="container__form_control">
            <label>Password</label>
            <input type="password" placeholder="password" id="passwordLogIn"></input>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <button class="container__form_button logIn">Log in</button>
    </div>

</div>
</div>`
}
const emailLogIn = document.getElementById('emailLogIn')
const passwordLogIn = document.getElementById('passwordLogIn')



const btn = document.querySelector('.btnRest')
const btnMain = document.querySelector('.mainBtn')
const btnLogIn = document.querySelector('.logIn')
const btnClose = document.querySelector('.btnClose')

if (btnLogIn !== null) {
    btnLogIn.addEventListener('click', (e) => {
        console.log('log in');
        e.preventDefault()
        checkData()
    })
}

if (btnClose !== null) {
    btnClose.addEventListener('click', (e) => {
        formLogIn.style.display = 'none'
    })
}

if (btnMain !== null) {
    btnMain.addEventListener('click', (e) => {
        formLogIn.style.display = 'flex'
        formLogIn.style.top = '0'
    })
}
if (btn !== null) {
    btn.addEventListener('click', (e) => {
        formLogIn.style.display = 'flex'
    })
}

export function checkData() {
    console.log(emailLogIn.value)
    const emailValue1 = emailLogIn.value
    const passwordValue1 = passwordLogIn.value
    let isCorrect = true

    if (emailValue1 === '') {
        setErrorFor(emailLogIn, 'Email cannot be blank')
        isCorrect = false
    } else if (!isEmail(emailValue1)) {
        setErrorFor(emailLogIn, 'Email is not valid')
        isCorrect = false
    } else {
        setSuccessFor(emailLogIn)

    }

    if (passwordValue1 === '') {
        setErrorFor(passwordLogIn, 'Password cannot be blank')
        isCorrect = false
    } else if (passwordValue1.length < 6) {
        setErrorFor(passwordLogIn, 'Password is too short! Minimum - 6 characters')
        isCorrect = false
    } else {
        setSuccessFor(passwordLogIn)
    }


    return isCorrect
}