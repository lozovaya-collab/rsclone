import { arrayNameRestaurants } from './addClickHandlers'


if (document.querySelector('#map')) {
    let map = L.map('map', {}).setView([45.401795, -75.699583], 10);

    let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="copyright">Openstreetmap</a>'
    }).addTo(map)



    // for (let i = 0; i < arrayNameRestaurants.length; i += 1) {
    //     let coordinates = [arrayNameRestaurants[i].coordinatesLatitude, arrayNameRestaurants[i].coordinatesLongitude]
    //     let marker = L.marker(coordinates, {})
    //         .addTo(map)
    //         .bindPopup(`${arrayNameRestaurants[i].name}, ${arrayNameRestaurants[i].locationAddress}`)
    //     console.log('ZZZZZZZZZZZZZZZ', marker)
    // }

}