import * as actionTypes from '../constants/actionTypes';

export function fetchDropcapsPageDataBegin() {
    return { 
        type: actionTypes.FETCH_DROPCAPS_PAGE_DATA_BEGIN
    };
};

export function fetchDropcapsPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_DROPCAPS_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchDropcapsPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_DROPCAPS_PAGE_DATA_FAILURE,
        err: err
    };
};
