function navigateSlider(direction) {
    const navDots = document.getElementsByName("nav-slider");
    const navSlides = document.getElementsByClassName("carousel-slide");
    let navDotPos;

    for(let i = 0; i < navDots.length; i++) {

        if(navDots[i].checked === true) {
            navDots[i].checked = false;

            // Go backwards to previous slide if it is not slide one.
            if((i > 0) && (i < navDots.length) && (i + direction < navDots.length)) {

                navDots[i + direction].checked = true;
                navDotPos = i + direction;
            }

            else if((i === 0) && (direction === 1)) {
                navDots[direction].checked = true;
                navDotPos = direction;
            }

            // Go backwards to last slide from first slide.
            else if((i === 0) && (direction === -1)) {
                navDots[navDots.length - 1].checked = true;
                navDotPos = navDots.length - 1;
            }

            // Go forwards to first slide from last slide.
            else if(i + direction === navDots.length || direction === 0) {
                navDots[0].checked = true;
                navDotPos = 0;
            }


            animateSlide(navDots, navSlides, navDotPos, direction);

            break;
        }
    }
}

function animateSlide(navDots, navSlides, navDotPos, direction) {

    for(let slide of navSlides) {
        if(direction === 1 || direction === 0) {
            TweenMax.fromTo([slide, slide], 1, {x: 0}, {x: 2000}).totalDuration(0.25);
            TweenMax.fromTo([slide, slide], 1, {x: -2000}, {x: 0}).totalDuration(0.5).delay(0.5);
        } else {
            TweenMax.fromTo([slide, slide], 1, {x: 0}, {x: -2000}).totalDuration(0.25);
            TweenMax.fromTo([slide, slide], 1, {x: 2000}, {x: 0}).totalDuration(0.5).delay(0.5);
        }
        toggleActiveSlide(navDots, navSlides, navDotPos, direction);
    }
}

function toggleActiveSlide(navDots, navSlides, navDotPos, direction) {
    for(let slide of navSlides) {
        // Identify the slide with the index value equal to the index of the currently active nav dot.
        if(Array.from(navSlides).indexOf(slide) === navDotPos) {
            // Show the active slide only.
            slide.style.display = 'block';
        } else {
            // Hide all other slides.
            slide.style.display = 'none';
        }
    }
}
