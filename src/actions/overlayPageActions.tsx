import * as actionTypes from '../constants/actionTypes';

export function fetchOverlayPageBegin() {
    return { 
        type: actionTypes.FETCH_OVERLAY_PAGE_BEGIN
    };
};

export function fetchOverlayPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_OVERLAY_PAGE_SUCCESS,
        array: array
    };
};

export function fetchOverlayPageFailur(err) {
    return { 
        type: actionTypes.FETCH_OVERLAY_PAGE_FAILURE,
        err: err
    };
};
