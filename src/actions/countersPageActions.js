import * as actionTypes from '../constants/actionTypes';

export function fetchCountersPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchCountersPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchCountersPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchCountersPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchCountersPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchCountersPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function fetchCountersPageSection3DataBegin() {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_BEGIN
    };
};

export function fetchCountersPageSection3DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_SUCCESS,
        array: array
    };
};

export function fetchCountersPageSection3DataFailur(err) {
    return { 
        type: actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_FAILURE,
        err: err
    };
};
