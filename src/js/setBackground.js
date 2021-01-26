const backgroundHeader = document.querySelector('.main_header');
const baseBackgroundLink = './src/assets/images/';

const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg']
let i = 0;
let index;
let imageSrc;

const viewBackgroundImage = (data) => {
    if (backgroundHeader != null) {
        let src = data;
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
            backgroundHeader.style.backgroundImage = `url(${src})`
        }
    }
}

const setBackground = async() => {

    index = Math.floor(Math.random() * img.length);
    imageSrc = baseBackgroundLink + img[index];
    viewBackgroundImage(imageSrc);
    i++;
    setTimeout(setBackground, 8000)
}

setBackground()