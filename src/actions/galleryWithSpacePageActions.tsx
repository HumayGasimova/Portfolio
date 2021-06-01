import * as actionTypes from '../constants/actionTypes';

export function fetchGalleryWithSpacePageBegin() {
    return { 
        type: actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_BEGIN
    };
};

export function fetchGalleryWithSpacePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchGalleryWithSpacePageFailur(err) {
    return { 
        type: actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_FAILURE,
        err: err
    };
};
