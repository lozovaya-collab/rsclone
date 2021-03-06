import { db, isAuth } from './dbFirebase'
import { setErrorFor } from "./signUp"
import { checkData } from "./modal"
import { checkUserIsAuth } from "./checkUser"
let isUser = false
export let myUser = {}
export let myUserId = ''
const logInButton = document.querySelector('.logIn')
if (logInButton) {
    logInButton.addEventListener('click', (e) => {
        e.preventDefault()
        let isOkay = checkData()
        if (isOkay) {
            const emailLogIn = document.getElementById('emailLogIn').value
            const passwordLogIn = String(document.getElementById('passwordLogIn').value)
            db.collection("users").where("E-mail", "==", emailLogIn).where("Password", "==", passwordLogIn)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        myUser = {
                            ID: doc.id,
                            Username: doc.data().Username,
                            City: doc.data().City,
                            Avatar: doc.data().UrlOfImage
                        }
                        localStorage.setItem('user', JSON.stringify(myUser));

                        isUser = true
                        localStorage.setItem('Auth', true);
                        checkUserIsAuth(localStorage.getItem('Auth'))
                    });
                    if (!isUser) {
                        setErrorFor(document.getElementById('emailLogIn'), 'This user does not exist')
                        setErrorFor(document.getElementById('passwordLogIn'), 'Check data')
                        return isUser
                    }
                    document.getElementById('popup').style.display = 'none'
                })
        }
    })
}