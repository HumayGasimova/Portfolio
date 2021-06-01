import * as actionTypes from '../constants/actionTypes';

export function fetchHeadingsPageDataBegin() {
    return { 
        type: actionTypes.FETCH_HEADINGS_PAGE_DATA_BEGIN
    };
};

export function fetchHeadingsPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_HEADINGS_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchHeadingsPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_HEADINGS_PAGE_DATA_FAILURE,
        err: err
    };
};
