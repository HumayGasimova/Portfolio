import * as actionTypes from '../constants/actionTypes';

export function fetchColumnsPageDataBegin() {
    return { 
        type: actionTypes.FETCH_COLUMNS_PAGE_DATA_BEGIN
    };
};

export function fetchColumnsPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COLUMNS_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchColumnsPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_COLUMNS_PAGE_DATA_FAILURE,
        err: err
    };
};
