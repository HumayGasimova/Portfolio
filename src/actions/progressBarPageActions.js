import * as actionTypes from '../constants/actionTypes';

export function fetchProgressBarPageSection1Column1DataBegin() {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_BEGIN
    };
};

export function fetchProgressBarPageSection1Column1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_SUCCESS,
        array: array
    };
};

export function fetchProgressBarPageSection1Column1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_FAILURE,
        err: err
    };
};

export function fetchProgressBarPageSection1Column2DataBegin() {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_BEGIN
    };
};

export function fetchProgressBarPageSection1Column2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_SUCCESS,
        array: array
    };
};

export function fetchProgressBarPageSection1Column2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_FAILURE,
        err: err
    };
};

export function fetchProgressBarPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_BEGIN
    };
};

export function fetchProgressBarPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_SUCCESS,
        array: array
    };
};

export function fetchProgressBarPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_FAILURE,
        err: err
    };
};
