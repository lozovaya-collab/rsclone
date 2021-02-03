export function getRating() {
    const ratingAll = document.querySelectorAll('.rating')

    function initRatings() {
        let ratingActive;
        let ratingValue;

        for (let i = 0; i < ratingAll.length; i += 1) {
            const rating = ratingAll[i];
            initRatings(rating);
        }

        function initRatings(rating) {
            initRatingVars(rating);
            setRatingActiveWidth();
        }

        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value')
        }

        function setRatingActiveWidth(i = ratingValue.innerHTML) {
            const ratingActiveWidth = i / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`
        }
    }

    if (ratingAll.length > 0) {
        initRatings()
    }
}