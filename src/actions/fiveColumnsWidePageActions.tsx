import * as actionTypes from '../constants/actionTypes';

export function fetchFiveColumnsWidePageBegin() {
    return { 
        type: actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_BEGIN
    };
};

export function fetchFiveColumnsWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchFiveColumnsWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_FAILURE,
        err: err
    };
};
