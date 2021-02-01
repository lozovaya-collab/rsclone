import { checkInputs } from "./signUp";
import firebase from "firebase";
export var firebaseConfig = {
    apiKey: "AIzaSyAo51d1XNRjHE23g9lO84qCIa_HPGyTmzc",
    authDomain: "yelpclone-38db1.firebaseapp.com",
    projectId: "yelpclone-38db1",
    storageBucket: "yelpclone-38db1.appspot.com",
    messagingSenderId: "59314028578",
    appId: "1:59314028578:web:3d47d4a44d783727444a7b",
    measurementId: "G-YK6VGZSB8J"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export var db = firebaseApp.firestore();
export let isAuth

if (localStorage.getItem('Auth') === null) {
    isAuth = false
    localStorage.setItem('Auth', isAuth);
} else {
    isAuth = localStorage.getItem('Auth')
}

const makeid = () => {
    let min = 1
    let max = 4
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const submit = document.querySelector('.container__form_button')
let userID
const createUser = () => {
    let isOk = checkInputs()
    if (isOk) {
        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const firstName = document.getElementById('name').value
        const lastName = document.getElementById('surname').value
        const birthday = document.getElementById('birthday').value
        const country = 'Canada'
        const city = document.querySelector('select')
        let rand = makeid()
        let color = 'blue'
        const url = `../../dist/src/assets/images/user${rand}.png`
        userID = makeid()
        if (rand < '3') {
            color = 'yellow'
        }
        userID = userID + username
        db.collection("users").add({
                UrlOfImage: url,
                Firstname: firstName,
                LastName: lastName,
                Birthday: birthday,
                Username: username,
                "E-mail": email,
                Password: password,
                Country: country,
                City: city.options[city.options.selectedIndex].value,
                ColorOfProfile: color
            })
            .then(function(docRef) {
                const newUser = {
                    City: city.options[city.options.selectedIndex].value,
                    ID: docRef.id,
                    Username: username
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                window.location.href = '../../dist/index.html'
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        isAuth = true
        localStorage.setItem('Auth', isAuth);

    }


}

if (submit) {
    submit.addEventListener('click', createUser)
}