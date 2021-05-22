import * as actionTypes from '../constants/actionTypes';

export function fetchPricingTablesPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchPricingTablesPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchPricingTablesPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchPricingTablesPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchPricingTablesPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchPricingTablesPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_PRICING_TABLES_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};
