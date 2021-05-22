import * as actionTypes from '../constants/actionTypes';

export function fetchPieChartsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchPieChartsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchPieChartsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchPieChartsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchPieChartsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchPieChartsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};
