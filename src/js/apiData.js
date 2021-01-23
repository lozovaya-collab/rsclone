 import restaurants from "./data/response"

 const arrayRestaurants = [];
 const restaurantsData = [];


 const getListRestaurants = () => {
     for (let s = 0; s < restaurants.businesses.length; s += 1) {
         arrayRestaurants.push(restaurants.businesses[s])
     }
     arrayRestaurants.push(restaurants.businesses)
     for (let i = 0; i < arrayRestaurants.length; i += 1) {

         restaurantsData.push({
             id: arrayRestaurants[i].id,
             name: arrayRestaurants[i].name,
             categories: arrayRestaurants[i].categories,
             image_url: arrayRestaurants[i].image_url,
             rating: arrayRestaurants[i].rating,
             coordinates: arrayRestaurants[i].coordinates,
             price: arrayRestaurants[i].price,
             display_phone: arrayRestaurants[i].display_phone,
             phone: arrayRestaurants[i].phone,
             location: arrayRestaurants[i].location,

         })
     }
     //  console.log(restaurantsData)
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