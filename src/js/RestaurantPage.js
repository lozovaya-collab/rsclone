export class RestaurantPage {
    constructor({ id, name, image_url, review_count, rating, categories, price, display_phone, phone, city, locationAddress, coordinatesLatitude, coordinatesLongitude, url, ...rest }) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.review_count = review_count;
        this.rating = rating;
        this.categories = categories;
        this.price = price;
        this.display_phone = display_phone;
        this.phone = phone;
        this.city = city;
        this.locationAddress = locationAddress;
        this.coordinatesLatitude = coordinatesLatitude;
        this.coordinatesLongitude = coordinatesLongitude;
        this.url = url;
    }
    generateRestaurantsPage() {
        let template = '';
        let article = document.createElement('article');
        article.classList = 'wrapper__data__restaurant'
            // first section
        if (this.image_url) {
            template += `<section style="background-image: url(${this.image_url}); background-size: cover;
            background-repeat: no-repeat;
            height: 60vh;" class="restaurant_page">`

        }
        template += '<div class="wrapper">'
        if (this.name) {
            template += `<h1>${this.name} Restaurant</h1>`
        }
        template += '<div class="about__restaurant">'
        template += '<div class="about_container">'
        template += '<div class="rating">'
        template += '<div class="rating__body">'
        template += '<div class="rating__active"></div>'
        template += ' <div class="rating__items">'
        template += '<input type="radio" class="rating__item" value="1" name="rating"><input type="radio" class="rating__item" value="2" name="rating"><input type="radio" class="rating__item" value="3" name="rating"><input type="radio" class="rating__item" value="4" name="rating"><input type="radio" class="rating__item" value="5" name="rating">'
        template += '</div>'
        template += '</div>'
        if (this.rating) {
            template += `<div class="rating__value">${this.rating}</div>`
        }
        template += '</div>'
        if (this.review_count) {
            template += `<span class="reviewsRestaurants">${this.review_count} Reviews</span>`
        }
        template += '</div>'
        template += '</div>'
        template += '</div>'
        template += '</section>'
            // second section
        template += '<section class="content__restaurant">'
        template += '<div class="wrapper">'
        template += '<div class="content_container">'
        template += '<div class="content_container__title">'
        if (this.name) {
            template += `<h2 class="title_card">${this.name}</h2>`
        }
        if (this.price) {
            template += `<span class="priceRestaurant">${this.price}</span>`
        }
        template += '</div>'
        template += '<div class="service_restaurant">'
        if (this.categories) {
            this.categories.map(category => {
                template += `<span><i class="fas fa-check"></i> ${category.title}</span>`
            })
        }
        template += '</div>'
        if (this.phone && this.display_phone) {
            template += `<div class="phon_restaurant"><span><a href="tel:${this.phone}">${this.display_phone}</a> </span>
            <a href="tel:${this.phone}"><i class="fas fa-phone-square-alt"></i></a></div>`
        }
        if (this.locationAddress) {
            template += `<div class="address_restaurant"><span>${this.locationAddress}</span> <i class="fas fa-map-marker-alt"></i></div>`
        }
        template += '<div class="yelp__link">'
        if (this.url) {
            template += ` <a href="${this.url}"> Learn more about this restaurant</a>
    <a href="${this.url}"><i class="fas fa-external-link-alt"></i></a>`
        }

        template += '</div>'
        template += '</div>'
        template += '<button class="button__review"><i class="far fa-star"></i> Write a Review</button>'
        template += '</div>'
        template += '</section>'

        article.innerHTML = template
        return article
    }

}