import * as actionTypes from '../constants/actionTypes';

export function fetchOverlayWithInfoPageBegin() {
    return { 
        type: actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_BEGIN
    };
};

export function fetchOverlayWithInfoPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_SUCCESS,
        array: array
    };
};

export function fetchOverlayWithInfoPageFailur(err) {
    return { 
        type: actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_FAILURE,
        err: err
    };
};

export function setOverlayWithInfoPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_OVERLAY_WITH_INFO_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};
