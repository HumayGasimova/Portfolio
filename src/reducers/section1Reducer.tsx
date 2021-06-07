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
    items: [],
    loading: false,
    error: null
}

const fetchSection1DataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSection1DataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchSection1DataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}


const section1Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SECTION_1_BEGIN:
            return fetchSection1DataBegin (state, action); 
        case actionTypes.FETCH_SECTION_1_SUCCESS:
            return fetchSection1DataSuccess (state, action);
        case actionTypes.FETCH_SECTION_1_FAILURE:
            return fetchSection1DataFailur(state, action);
        default: 
            return state;
    }
}

export default section1Reducer;
