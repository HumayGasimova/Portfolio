import * as actionTypes from '../constants/actionTypes';

export function fetchAccordionsPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchAccordionsPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchAccordionsPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchAccordionsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchAccordionsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchAccordionsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function setIsHoverSection2ItemAccordionsPage(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVER_SECTION_2_ITEM_ACCORDIONS_PAGE,
        val: val,
        id: id
    };
};

export function setActivitySection1ItemAccordionsPage(val, id, opt) {
    return { 
        type: actionTypes.SET_ACTIVITY_SECTION_1_ITEM_ACCORDION_PAGE,
        val: val,
        id: id,
        opt: opt
    };
};

export function setActivitySection2ItemAccordionsPage(val, id) {
    return { 
        type: actionTypes.SET_ACTIVITY_SECTION_2_ITEM_ACCORDION_PAGE,
        val: val,
        id: id
    };
};
