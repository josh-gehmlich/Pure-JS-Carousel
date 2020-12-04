import { Carousel } from './js/components/Carousel';

const carouselData = require('./js/carousel-data');

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(carouselData);
});