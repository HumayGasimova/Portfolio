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
    error: null,
}

const fetchHighlightsPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchHighlightsPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchHighlightsPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const highlightsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_BEGIN:
            return fetchHighlightsPageDataBegin (state, action); 
        case actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_SUCCESS:
            return fetchHighlightsPageDataSuccess (state, action);
        case actionTypes.FETCH_HIGHLIGHTS_PAGE_DATA_FAILURE:
            return fetchHighlightsPageDataFailur(state, action);
        default: 
            return state;
    }
}

export default highlightsPageReducer;
