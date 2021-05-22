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

const fetchThreeColumnsWidePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchThreeColumnsWidePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchThreeColumnsWidePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const threeColumnsWidePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_BEGIN:
            return fetchThreeColumnsWidePageBegin (state, action); 
        case actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_SUCCESS:
            return fetchThreeColumnsWidePageSuccess (state, action);
        case actionTypes.FETCH_THREE_COLUMNS_WIDE_PAGE_FAILURE:
            return fetchThreeColumnsWidePageFailur(state, action);
        default: 
            return state;
    }
}

export default threeColumnsWidePageReducer;
