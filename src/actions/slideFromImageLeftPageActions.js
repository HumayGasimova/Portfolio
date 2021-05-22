import * as actionTypes from '../constants/actionTypes';

export function fetchSlideFromImageLeftPageBegin() {
    return { 
        type: actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_BEGIN
    };
};

export function fetchSlideFromImageLeftPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_SUCCESS,
        array: array
    };
};

export function fetchSlideFromImageLeftPageFailur(err) {
    return { 
        type: actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_FAILURE,
        err: err
    };
};

export function setSlideFromImageLeftPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_SLIDE_FROM_IMAGE_LEFT_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};
