let checkAuth = localStorage.getItem('Auth')

export const checkUserIsAuth = (isAuth) => {

    if (isAuth === 'true') {
        console.log('what');
        const butSignUp = document.querySelector('.sign-up')
        butSignUp.innerHTML = 'Profile'
        const hrefBtn = document.querySelector('.sign-up-href')
        if (hrefBtn !== null) {
            console.log('sssssssssssssssssssssssssssssss');
            hrefBtn.href = "/dist/pages/profile.html"
        }

        const butLogIn = document.querySelector('.log-in')
        butLogIn.innerHTML = 'Log Out'
        butLogIn.classList.remove('mainBtn')
        butLogIn.className += ' log-out'

    }
}
console.log(checkAuth);
checkUserIsAuth(checkAuth)