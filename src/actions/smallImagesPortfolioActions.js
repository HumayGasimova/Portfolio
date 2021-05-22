import * as actionTypes from '../constants/actionTypes';

export function fetchSmallImagesPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN
    };
};

export function fetchSmallImagesPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchSmallImagesPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setSmallImagesIsHoveringCategory(val, id) {
    return { 
        type: actionTypes.SET_SMALL_IMAGES_IS_HOVERING_CATEGORY,
        val: val,
        id: id
    };
};

export function setSmallImagesIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_SMALL_IMAGES_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};
