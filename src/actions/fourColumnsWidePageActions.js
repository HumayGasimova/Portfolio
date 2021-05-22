import * as actionTypes from '../constants/actionTypes';

export function fetchFourColumnsWidePageBegin() {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_BEGIN
    };
};

export function fetchFourColumnsWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchFourColumnsWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_FAILURE,
        err: err
    };
};
