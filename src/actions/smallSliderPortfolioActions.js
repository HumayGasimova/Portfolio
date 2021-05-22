import * as actionTypes from '../constants/actionTypes';

export function fetchSmallSliderPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_BEGIN
    };
};

export function fetchSmallSliderPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchSmallSliderPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setSmallSliderIsHoveringCategory(val, id) {
    return { 
        type: actionTypes.SET_SMALL_SLIDER_IS_HOVERING_CATEGORY,
        val: val,
        id: id
    };
};

export function setSmallSliderIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_SMALL_SLIDER_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};

export function setSwiperStateForSmallSliderPage(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_SMALL_SLIDER_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};
