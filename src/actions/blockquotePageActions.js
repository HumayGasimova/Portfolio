import * as actionTypes from '../constants/actionTypes';

export function fetchBlockquotePageDataBegin() {
    return { 
        type: actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_BEGIN
    };
};

export function fetchBlockquotePageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchBlockquotePageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_FAILURE,
        err: err
    };
};
