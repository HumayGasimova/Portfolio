/**
 * Constants
 */

import * as actionTypes from "../constants/actionTypes";

/**
 * Utility
 */

import * as Utility from "../utility";
import uuid from "uuid";

/**
 * Initial State
 */

export const initialState = {
    section1Data: {
        items: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchButtonsPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchButtonsPageSection1DataSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchButtonsPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchButtonsPageSection2DataBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchButtonsPageSection2DataSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchButtonsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const buttonsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchButtonsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchButtonsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchButtonsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchButtonsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchButtonsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_BUTTONS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchButtonsPageSection2DataFailur(state, action);
        default: 
            return state;
    }
}

export default buttonsPageReducer;
