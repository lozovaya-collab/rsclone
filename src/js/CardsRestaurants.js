export class CardsRestaurants {
    constructor({ id, name, image_url, review_count, rating, categories, price, display_phone, city, locationAddress, coordinatesLatitude, coordinatesLongitude, ...rest }) {
            this.id = id;
            this.name = name;
            this.image_url = image_url;
            this.review_count = review_count;
            this.rating = rating;
            this.categories = categories;
            this.price = price;
            this.display_phone = display_phone;
            this.city = city;
            this.locationAddress = locationAddress;
            this.coordinatesLatitude = coordinatesLatitude;
            this.coordinatesLongitude = coordinatesLongitude
        }
        //cards generator
    generateCardsRestaurants() {
        let template = '';
        let card = document.createElement('a')
        card.href = './pageRestaurant.html' && './../../dist/pages/pageRestaurant.html';
        card.setAttribute('data-id', this.id);

        template += `<div class="card card_restaurant">`
        template += '<div class="food">'
        if (this.image_url) {
            template += `<img class="image_food" src=${this.image_url} alt="restaurant image">`
        } else {
            template += `<img class="image_food" src="https://s3-media0.fl.yelpcdn.com/bphoto/irrNLMy3PD030uNSNv-vzQ/300s.jpg" alt="restaurant image">`
        }
        template += `</div>`

        template += '<div class="about_restaurant">'
        if (this.name) {
            template += `<h2 class="title_card">${this.name}</h2>`

        }
        if (this.rating || this.review_count) {
            template += `<div class="rating_restaurant">
<div class="rating">
    <div class="rating__body">
        <div class="rating__active"></div>
        <div class="rating__items">
            <input type="radio" class="rating__item" value="1" name="rating">
            <input type="radio" class="rating__item" value="2" name="rating">
            <input type="radio" class="rating__item" value="3" name="rating">
            <input type="radio" class="rating__item" value="4" name="rating">
            <input type="radio" class="rating__item" value="5" name="rating">
        </div>
    </div>
    <div class="rating__value">${this.rating}</div>
</div>
<span class="reviewsRestaurants">${this.review_count} Reviews</span>
</div>`
        }
        if (this.price) {
            template += `<span class="priceRestaurant">${this.price}</span>`
        } else if (this.price === undefined) {
            template += `<span class="priceRestaurant"></span>`
        }
        if (this.categories || this.display_phone) {
            template += ' <div class="service_restaurant">'
            this.categories.map(category => {
                template += `<span>${category.title}</span>`
            })
            template += '</div>'
            template += `<div class="phon_restaurant">${this.display_phone}</div>`

        }
        if (this.locationAddress) {
            template += `<div class="address_restaurant">${this.locationAddress}</div>`
        }
        template += '</div>'
        template += `</div>`

        card.innerHTML = template
        return card
    }

}