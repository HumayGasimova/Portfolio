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

const fetchPieChartsPageSection1DataBegin = (state, action) => {
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

const fetchPieChartsPageSection1DataSuccess = (state, action) => {
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

const fetchPieChartsPageSection1DataFailur = (state, action) => {
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

const fetchPieChartsPageSection2DataBegin = (state, action) => {
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

const fetchPieChartsPageSection2DataSuccess = (state, action) => {
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

const fetchPieChartsPageSection2DataFailur = (state, action) => {
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

const pieChartsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchPieChartsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchPieChartsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchPieChartsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchPieChartsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchPieChartsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_PIE_CHARTS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchPieChartsPageSection2DataFailur(state, action);
        default: 
            return state;
    }
}

export default pieChartsPageReducer;
