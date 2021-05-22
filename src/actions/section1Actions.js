import * as actionTypes from '../constants/actionTypes';

export function fetchSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_SECTION_1_BEGIN
    };
};

export function fetchSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_SECTION_1_SUCCESS,
        array: array
    };
};

export function fetchSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_SECTION_1_FAILURE,
        err: err
    };
};
