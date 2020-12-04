const carouselData = require('../carousel-data');

export class Carousel {
    constructor(slideData) {
        this.initialiseCarousel(slideData);
    }

    initialiseCarousel(slideData) {
        document.getElementById('carousel-root').innerHTML = `
            <div id="wrapper">
                ${this.initialiseHeader()}
                <section id="carousel-section">
                    <h2 id="page-title">${carouselData.titles.pageTitle}</h2>
                    <div id="carousel">
                        <div id="carousel-header">
                            <h3 id="carousel-title">${carouselData.titles.carouselTitle}</h3>
                        </div>
                        ${this.initialiseDots(slideData)}
                        ${this.initialiseSlides(slideData)}
                    </div>
                </section>
            </div>
        `;
    }

    initialiseHeader() {
        return `
            <header id="header">
                <img id="header-logo" src="src/res/logo.png"/>
                <h1 id="header-title">${carouselData.titles.courseTitle}</h1>
                <div id="header-nav">
                    <button class="fa fa-angle-left"></button>
                    <button class="fa fa-bars"></button>
                    <button class="fa fa-angle-right"></button>
                </div>
            </header>
        `;
    }

    initialiseDots(slideData) {
        let dots = '';

        for(let i = 0; i < slideData.slides.length; i++) {
            // Check the first radio button created.
            let isChecked = i === 0 ? 'checked' : 'unchecked';

            // Build a new dot per slide record in the JSON data.
            dots += `<input type="radio" class="carousel-nav-dot" name="nav-slider" title="nav-slider" id="nav-slide-1" onclick=navigateSlider(0) ${isChecked}/>`;
        }

        // Return a navigation panel containing a number of dots equating the number of slides.
        return `
            <div id="carousel-nav">
                <span id="navigatePrev" class="fa fa-angle-left carousel-left" onclick=navigateSlider(-1)></span>
                    ${dots}
                <span id="navigateNext" class="fa fa-angle-right carousel-right" onclick=navigateSlider(1)></span>
            </div>
        `;
    }

    initialiseSlides(slideData) {
        let slides = '';

        // Build a new slide per slide record in the JSON data.
        for(let slide of slideData.slides) {
            slides +=
                `<div class="carousel-slide">
                    <span class="carousel-slide-img fa ${slide.icon} fa-fw"></span>
                    <hr class="vhr" width="1" size="210">
                    <div class="carousel-slide-text">
                        <h2 class="carousel-slide-title">${slide.title}</h2>
                        <p class="carousel-slide-desc">${slide.description}</p>
                    </div>
                </div>
            `;
        }

        // Return a slide set containing the required number of slides.
        return `
            <div id="carousel-slides">
                ${slides}
            </div>
        `;
    }
}