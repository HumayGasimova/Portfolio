import * as actionTypes from '../constants/actionTypes';

export function fetchIconWithTextPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchIconWithTextPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchIconWithTextPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchIconWithTextPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchIconWithTextPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchIconWithTextPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};
