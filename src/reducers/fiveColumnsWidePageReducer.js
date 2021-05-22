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

const fetchFiveColumnsWidePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchFiveColumnsWidePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchFiveColumnsWidePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const fiveColumnsWidePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_BEGIN:
            return fetchFiveColumnsWidePageBegin (state, action); 
        case actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_SUCCESS:
            return fetchFiveColumnsWidePageSuccess (state, action);
        case actionTypes.FETCH_FIVE_COLUMNS_WIDE_PAGE_FAILURE:
            return fetchFiveColumnsWidePageFailur(state, action);
        default: 
            return state;
    }
}

export default fiveColumnsWidePageReducer;
