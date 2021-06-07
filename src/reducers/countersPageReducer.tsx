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
    },
    section3Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchCountersPageSection1DataBegin = (state, action) => {
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

const fetchCountersPageSection1DataSuccess = (state, action) => {
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

const fetchCountersPageSection1DataFailur = (state, action) => {
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

const fetchCountersPageSection2DataBegin = (state, action) => {
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

const fetchCountersPageSection2DataSuccess = (state, action) => {
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

const fetchCountersPageSection2DataFailur = (state, action) => {
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

const fetchCountersPageSection3DataBegin = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchCountersPageSection3DataSuccess = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchCountersPageSection3DataFailur = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const countersPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchCountersPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchCountersPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchCountersPageSection1DataFailur(state, action);
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchCountersPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchCountersPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchCountersPageSection2DataFailur(state, action);
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_BEGIN:
            return fetchCountersPageSection3DataBegin (state, action); 
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_SUCCESS:
            return fetchCountersPageSection3DataSuccess (state, action);
        case actionTypes.FETCH_COUNTERS_PAGE_SECTION_3_DATA_FAILURE:
            return fetchCountersPageSection3DataFailur(state, action);
        default: 
            return state;
    }
}

export default countersPageReducer;
