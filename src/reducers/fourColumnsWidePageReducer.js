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

const fetchFourColumnsWidePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchFourColumnsWidePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchFourColumnsWidePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const fourColumnsWidePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_BEGIN:
            return fetchFourColumnsWidePageBegin (state, action); 
        case actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_SUCCESS:
            return fetchFourColumnsWidePageSuccess (state, action);
        case actionTypes.FETCH_FOUR_COLUMNS_WIDE_PAGE_FAILURE:
            return fetchFourColumnsWidePageFailur(state, action);
        default: 
            return state;
    }
}

export default fourColumnsWidePageReducer;
