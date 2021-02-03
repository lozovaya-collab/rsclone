import { arrayData } from './addClickHandlers'
export let options;
export let map;
if (document.querySelector('#map')) {
    let arrayCoordinateCity = [
        { 'Ottawa': [45.401833, -75.699511] },
        { 'Montreal': [45.498301, -73.568500] },
        { 'Toronto': [43.684345, -79.431292] },
        { 'Calgary': [51.034091, -114.083912] },
        { 'Edmonton': [53.530798, -113.511802] },
        { 'Mississauga': [43.574599, -79.606185] },
        { 'Winnipeg': [49.887898, -97.134185] },
        { 'Vancouver': [49.284600, -123.116885] },
        { 'Quebec City': [46.807096, -71.211788] },
        { 'Brampton': [43.686796, -79.759582] },
        { 'Cities of Canada': [45.401833, -75.699511] }
    ]

    options = {
        center: arrayCoordinateCity[10]['Cities of Canada'],
        zoom: 13
    }
    map = L.map('map', options);

    let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="copyright">Openstreetmap</a>'
    }).addTo(map)

    for (let i = 0; i < arrayData.length; i += 1) {

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
    }
}