import * as actionTypes from '../constants/actionTypes';

export function fetchSmallGalleryPortfolioBegin() {
    return { 
        type: actionTypes.FETCH_SMALL_GALLERY_PORTFOLIO_BEGIN
    };
};

export function fetchSmallGalleryPortfolioSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SMALL_GALLERY_PORTFOLIO_SUCCESS,
        obj: obj
    };
};

export function fetchSmallGalleryPortfolioFailur(err) {
    return { 
        type: actionTypes.FETCH_SMALL_GALLERY_PORTFOLIO_FAILURE,
        err: err
    };
};

export function setSmallGalleryIsHoveringCategory(val, id) {
    return { 
        type: actionTypes.SET_SMALL_GALLERY_IS_HOVERING_CATEGORY,
        val: val,
        id: id
    };
};

export function setSmallGalleryIsHoveringTag(val, id) {
    return { 
        type: actionTypes.SET_SMALL_GALLERY_IS_HOVERING_TAG,
        val: val,
        id: id
    };
};

export function setSmallGalleryIsHoveringImage(val, id) {
    return { 
        type: actionTypes.SET_SMALL_GALLERY_IS_HOVERING_IMAGE,
        val: val,
        id: id
    };
};
