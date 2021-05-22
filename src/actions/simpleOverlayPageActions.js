import * as actionTypes from '../constants/actionTypes';

export function fetchSimpleOverlayPageBegin() {
    return { 
        type: actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_BEGIN
    };
};

export function fetchSimpleOverlayPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_SUCCESS,
        array: array
    };
};

export function fetchSimpleOverlayPageFailur(err) {
    return { 
        type: actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_FAILURE,
        err: err
    };
};
