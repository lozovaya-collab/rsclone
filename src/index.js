import './js/modal'
import './js/signUp'
import './js/autocomplitAPI'

window.addEventListener('DOMContentLoaded', () => {
    const a = []
    fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/searchEvent", {
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "x-rapidapi-key": "0a5e8ea8famsh2a13ee1d64f6f30p11306ajsn125f10dd8276",
                "x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com"
            },
            "body": {
                "accessToken": "<REQUIRED>",
                "location": "San Francisco"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    console.log(a)

})