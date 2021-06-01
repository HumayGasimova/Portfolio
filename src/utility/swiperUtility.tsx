export const updateSlidesFullScreen = (slides, activeIndex, swiperData) => {
    let _slides = [];
    //We're at the last slides
    if(activeIndex === slides.length - 1)
    _slides = [swiperData.slides[slides.length - 2], slides[slides.length - 1], slides[0]];
    //We're back at the first slide. Just reset to how it was on initial render.
    else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    return _slides;
}

export const updateSlidesFor3SlidesPerSwiper = (slides, activeIndex) => {
    let _slides = [];
    
    if(activeIndex === slides.length - 2){
        let first = slides[slides.length - 4] === undefined ? slides[slides.length - 1] : slides[slides.length - 4];
        _slides = [first, slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0]];
    }else if(activeIndex === slides.length - 1){
        _slides = [slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1]];
    }else if(activeIndex === 0){
        _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2]];
    }else if(activeIndex === 1){
        let last = slides[3] === undefined ? slides[slides.length - 1] : slides[3];
        _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[1], slides[2], last];
    }
    else _slides = slides.slice(activeIndex - 2, activeIndex + 2);

    return _slides;
}

export const updateSlidesFor5SlidesPerSwiper = (slides, activeIndex) => {
    let _slides = [];
    if(activeIndex === slides.length - 3){
        let first = slides[slides.length - 6] === undefined ? slides[slides.length - 1] : slides[slides.length - 6];
        _slides = [first, slides[slides.length - 5], slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0]];
    }else if(activeIndex === slides.length - 2){
        _slides = [slides[slides.length - 5],slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1]];
    }else if(activeIndex === slides.length - 1){
        _slides = [slides[slides.length - 4], slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2]];
    }else if(activeIndex === 0){
        _slides = [slides[slides.length - 3], slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3]];
    }else if(activeIndex === 1){
        _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3], slides[4]];
    }else if(activeIndex === 2){
        let last = slides[5] === undefined ? slides[slides.length - 1] : slides[5];
        _slides = [slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3], slides[4], last];
    }
    else _slides = slides.slice(activeIndex - 3, activeIndex + 3);
    // console.log("_slides",_slides)
    return _slides;
}
