import * as actionTypes from '../constants/actionTypes';

export function fetchListsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchListsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchListsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchListsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchListsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchListsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_LISTS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};
