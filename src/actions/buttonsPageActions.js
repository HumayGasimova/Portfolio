import * as actionTypes from '../constants/actionTypes';

export function fetchButtonsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchButtonsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchButtonsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchButtonsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchButtonsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchButtonsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};
