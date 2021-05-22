import * as actionTypes from '../constants/actionTypes';

export function fetchThreeColumnsWidePageBegin() {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_BEGIN
    };
};

export function fetchThreeColumnsWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchThreeColumnsWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_FAILURE,
        err: err
    };
};
