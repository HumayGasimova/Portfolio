import * as actionTypes from '../constants/actionTypes';

export function fetchTestimonialsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchTestimonialsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function fetchTestimonialsPageSection3DataBegin() {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_BEGIN
    };
};

export function fetchTestimonialsPageSection3DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_SUCCESS,
        array: array
    };
};

export function fetchTestimonialsPageSection3DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TESTIMONIALS_PAGE_SECTION_3_DATA_FAILURE,
        err: err
    };
};

export function setSwiperStateForTestimonialsPageSection1(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_1,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForTestimonialsPageSection2(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_2,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForTestimonialsPageSection3(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_TESTIMONIALS_PAGE_SECTION_3,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setTestimonialsPageSection1IsHoveringSwiperDot(val, id) {
    return { 
        type: actionTypes.SET_TESTIMONIALS_PAGE_SECTION_1_IS_HOVERING_SWIPER_DOT,
        val: val,
        id: id
    };
};
