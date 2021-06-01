import * as actionTypes from '../constants/actionTypes';

export function fetchScrollSliderPageDataBegin() {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_BEGIN
    };
};

export function fetchScrollSliderPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchScrollSliderPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_FAILURE,
        err: err
    };
};

export function rememberCoordinateRangeOfScrollSliderForScrollSliderPage(key, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_OF_SCROLL_SLIDER_FOR_SCROLL_SLIDER_PAGE,
        key: key,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeOfScrollSliderForScrollSliderPage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_OF_SCROLL_SLIDER_FOR_SCROLL_SLIDER_PAGE,
        arr: arr
    };
};

export function updateScrollSlidersStyleValuesScrollSliderPage(sliderKey, obj) {
    return { 
        type: actionTypes.UPDATED_SCROLL_SLIDERS_STYLE_VALUES_SCROLL_SLIDER_PAGE,
        sliderKey: sliderKey,
        obj: obj
    };
};
