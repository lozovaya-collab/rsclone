let checkAuth = localStorage.getItem(('Auth'))
const buttonLogOut = document.querySelector('.log-out')
const popLogIn = document.getElementById('popup')

export const logOutUser = (value) => {
    if (value === 'true') {
        value = false
        localStorage.setItem('Auth', value)
        localStorage.setItem('user', '')

        const butSignUp = document.querySelector('.sign-up')
        butSignUp.innerHTML = 'Sign Up'
        const hrefBtn = document.querySelector('.sign-up-href')
        if (hrefBtn !== null) {
            hrefBtn.href = "/pages/signUp.html"
        }

        const butLogIn = document.querySelector('.log-in')
        butLogIn.innerHTML = 'Log In'
        butLogIn.classList.remove('log-out')
        butLogIn.className += ' mainBtn'
    }
}
if (buttonLogOut !== null) {
    buttonLogOut.addEventListener('click', () => {
        if (buttonLogOut.innerHTML === 'Log Out') {
            logOutUser(checkAuth)
            window.location.href = './../../index.html'
        } else {
            popLogIn.innerHTML = `<div class="popup__body">
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
    })
}