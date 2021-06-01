import * as actionTypes from '../constants/actionTypes';

export function fetchHighlightsPageDataBegin() {
    return { 
        type: actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_BEGIN
    };
};

export function fetchHighlightsPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchHighlightsPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_FAILURE,
        err: err
    };
};
