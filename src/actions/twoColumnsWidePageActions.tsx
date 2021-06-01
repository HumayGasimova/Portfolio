import * as actionTypes from '../constants/actionTypes';

export function fetchTwoColumnsWidePageBegin() {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_BEGIN
    };
};

export function fetchTwoColumnsWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchTwoColumnsWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_FAILURE,
        err: err
    };
};
