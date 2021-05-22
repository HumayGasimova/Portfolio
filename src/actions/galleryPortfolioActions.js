import * as actionTypes from '../constants/actionTypes';

export function fetchGalleryPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_GALLERY_PORTFOLIO_BEGIN
    };
};

export function fetchGalleryPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_GALLERY_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchGalleryPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_GALLERY_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setGalleryIsHoveringCategory(val, id) {
    return { 
        type: actionTypes.SET_GALLERY_IS_HOVERING_CATEGORY,
        val: val,
        id: id
    };
};

export function setGalleryIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_GALLERY_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};

export function setGalleryIsHoveringImage(val, id) {
    return { 
        type: actionTypes.SET_GALLERY_IS_HOVERING_IMAGE,
        val: val,
        id: id
    };
};
