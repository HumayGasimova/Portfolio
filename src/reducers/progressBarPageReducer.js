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
    section1Column1Data: {
        items: [],
        loading: false,
        error: null
    },
    section1Column2Data: {
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

const fetchProgressBarPageSection1Column1DataBegin = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchProgressBarPageSection1Column1DataSuccess = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchProgressBarPageSection1Column1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Column1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Column1Data: updateSection1Data
    };
}

const fetchProgressBarPageSection2Column2DataBegin = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchProgressBarPageSection2Column2DataSuccess = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchProgressBarPageSection2Column2DataFailur = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchProgressBarPageSection2DataBegin = (state, action) => {
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

const fetchProgressBarPageSection2DataSuccess = (state, action) => {
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

const fetchProgressBarPageSection2DataFailur = (state, action) => {
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

const progressBarPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_BEGIN:
            return fetchProgressBarPageSection1Column1DataBegin (state, action); 
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_SUCCESS:
            return fetchProgressBarPageSection1Column1DataSuccess (state, action);
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_1_FAILURE:
            return fetchProgressBarPageSection1Column1DataFailur(state, action);
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_BEGIN:
            return fetchProgressBarPageSection2Column2DataBegin (state, action); 
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_SUCCESS:
            return fetchProgressBarPageSection2Column2DataSuccess (state, action);
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_1_COLUMN_2_FAILURE:
            return fetchProgressBarPageSection2Column2DataFailur(state, action);
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_BEGIN:
            return fetchProgressBarPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_SUCCESS:
            return fetchProgressBarPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_PROGRESS_BAR_PAGE_SECTION_2_FAILURE:
            return fetchProgressBarPageSection2DataFailur(state, action);
        default: 
            return state;
    }
}

export default progressBarPageReducer;
