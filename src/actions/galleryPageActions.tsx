import * as actionTypes from '../constants/actionTypes';

export function fetchGalleryPageBegin() {
    return { 
        type: actionTypes.FETCH_GALLERY_PAGE_BEGIN
    };
};

export function fetchGalleryPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_GALLERY_PAGE_SUCCESS,
        array: array
    };
};

export function fetchGalleryPageFailur(err) {
    return { 
        type: actionTypes.FETCH_GALLERY_PAGE_FAILURE,
        err: err
    };
};
