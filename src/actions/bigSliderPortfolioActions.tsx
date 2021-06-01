import * as actionTypes from '../constants/actionTypes';

export function fetchBigSliderPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_BEGIN
    };
};

export function fetchBigSliderPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchBigSliderPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setBigSliderIsHoveringCategory(val, id) {
    return { 
        type: actionTypes.SET_BIG_SLIDER_IS_HOVERING_CATEGORY,
        val: val,
        id: id
    };
};
export function setBigSliderIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_BIG_SLIDER_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};

export function setSwiperStateForBigSliderPage(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_BIG_SLIDER_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};
