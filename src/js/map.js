import { arrayData } from './addClickHandlers'


if (document.querySelector('#map')) {
    let map = L.map('map', {}).setView([45.401795, -75.699583], 12);

    let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="copyright">Openstreetmap</a>'
    }).addTo(map)


    console.log(arrayData);
    for (let i = 0; i < arrayData.length; i += 1) {
        console.log('dddd');
        //let coordinates = [arrayNameRestaurants[i].coordinatesLatitude, arrayNameRestaurants[i].coordinatesLongitude]


        let iconOptions = {
            iconUrl: '../../dist/src/assets/icon/canada.png',
            iconSize: [50, 50]
        }
        let customIcon = L.icon(iconOptions);
        let markerOptions = {
            icon: customIcon
        }
        let marker = L.marker([arrayData[i].coordinatesLatitude, arrayData[i].coordinatesLongitude], markerOptions);

        // Adding marker to the map
        marker.bindPopup(`${arrayData[i].name}, ${arrayData[i].city}`)
        marker.addTo(map);


        /*let marker = L.marker(coordinates, {})
            .addTo(map)
            .bindPopup(`${arrayNameRestaurants[i].name}, ${arrayNameRestaurants[i].locationAddress}`)
        console.log('ZZZZZZZZZZZZZZZ', marker)*/
    }


}