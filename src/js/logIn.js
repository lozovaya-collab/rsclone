import { db } from './dbFirebase'
import { setErrorFor } from "./signUp"
import { checkData } from "./modal";
console.log('aaa');
let isUser = false

const logInButton = document.querySelector('.logIn')
if (logInButton) {
    logInButton.addEventListener('click', () => {

        let isOkay = checkData()
        if (isOkay) {
            const emailLogIn = document.getElementById('emailLogIn').value
            const passwordLogIn = String(document.getElementById('passwordLogIn').value)
            db.collection("users").where("E-mail", "==", emailLogIn).where("Password", "==", passwordLogIn)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        isUser = true

                        console.log('user is exist');
                    });
                    if (!isUser) {
                        setErrorFor(document.getElementById('emailLogIn'), 'This user does not exist')
                        setErrorFor(document.getElementById('passwordLogIn'), 'Check data')
                        return isUser
                    }
                    document.getElementById('popup').style.display = 'none'
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
        }


    })
}