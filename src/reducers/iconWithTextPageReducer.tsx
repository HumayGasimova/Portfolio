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

const fetchIconWithTextPageSection1DataBegin = (state, action) => {
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

const fetchIconWithTextPageSection1DataSuccess = (state, action) => {
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

const fetchIconWithTextPageSection1DataFailur = (state, action) => {
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

const fetchIconWithTextPageSection2DataBegin = (state, action) => {
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

const fetchIconWithTextPageSection2DataSuccess = (state, action) => {
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

const fetchIconWithTextPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const iconWithTextPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_BEGIN:
            return fetchIconWithTextPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchIconWithTextPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_1_DATA_FAILURE:
            return fetchIconWithTextPageSection1DataFailur(state, action);
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_BEGIN:
            return fetchIconWithTextPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchIconWithTextPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_ICON_WITH_TEXT_PAGE_SECTION_2_DATA_FAILURE:
            return fetchIconWithTextPageSection2DataFailur(state, action);
        default: 
            return state;
    }
}

export default iconWithTextPageReducer;
