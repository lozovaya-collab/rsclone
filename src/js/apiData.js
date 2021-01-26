 import restaurants from "./data/response"

 //  const arrayRestaurants = [];
 export const restaurantsData = [];
 export const arrayNameRestaurants = [];
 let arrayRestaurants = [];

 //  fetch('./../../dist/data/response.json').then(data => {
 //      data.json().then(json => {
 //          arrayRestaurants.push(json.businesses)
 //      })
 //  })

 //  console.log('data', arrayRestaurants)

 const getListRestaurants = () => {

     for (let s = 0; s < restaurants.businesses.length; s += 1) {
         arrayRestaurants.push(restaurants.businesses[s])
     }

     arrayRestaurants.push(restaurants.businesses)

     for (let i = 0; i < arrayRestaurants.length - 1; i += 1) {
         restaurantsData.push({
             id: arrayRestaurants[i].id,
             name: arrayRestaurants[i].name,
             categories: arrayRestaurants[i].categories,
             image_url: arrayRestaurants[i].image_url,
             rating: arrayRestaurants[i].rating,
             review_count: arrayRestaurants[i].review_count,
             coordinatesLatitude: arrayRestaurants[i].coordinates.latitude,
             coordinatesLongitude: arrayRestaurants[i].coordinates.longitude,
             price: arrayRestaurants[i].price,
             display_phone: arrayRestaurants[i].display_phone,
             phone: arrayRestaurants[i].phone,
             locationAddress: (arrayRestaurants[i].location.display_address).join(', '),
             city: arrayRestaurants[i].location.city,
             address1: arrayRestaurants[i].location.address1,


         })

         //  console.log(arrayRestaurants[i].location.display_address)
         //  console.log(restaurantsData[i].locationAddress)
     }
     restaurantsData.sort(() => Math.random() - 0.5);


     for (let j = 0; j < restaurantsData.length; j += 1) {
         arrayNameRestaurants.push(
             restaurantsData[j].name,
         )
     }
     //  console.log(arrayNameRestaurants)


 }

 getListRestaurants()


 //  console.log(arrayRestaurants)

 //  const url = './data/response.json'
 //  async function fetchRestaurantsData() {
 //      const response = await fetch(url)
 //      const data = await response.json()
 //      console.log('data:', data)
 //  }
 //  fetchRestaurantsData()
 //  fetchRestaurantsData()