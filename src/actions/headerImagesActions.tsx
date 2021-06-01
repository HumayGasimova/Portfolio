import * as actionTypes from '../constants/actionTypes';

export function fetchHeaderImagesBegin() {
    return { 
        type: actionTypes.FETCH_HEADER_IMAGES_BEGIN
    };
};

export function fetchHeaderImagesSuccess(array) {
    return { 
        type: actionTypes.FETCH_HEADER_IMAGES_SUCCESS,
        array: array
    };
};

export function fetchHeaderImagesFailur(err) {
    return { 
        type: actionTypes.FETCH_HEADER_IMAGES_FAILURE,
        err: err
    };
};
