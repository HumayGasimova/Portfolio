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

const fetchBlockquotePageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchBlockquotePageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchBlockquotePageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const blockquotePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_BEGIN:
            return fetchBlockquotePageDataBegin (state, action); 
        case actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_SUCCESS:
            return fetchBlockquotePageDataSuccess (state, action);
        case actionTypes.FETCH_BLOCKQUOTE_PAGE_DATA_FAILURE:
            return fetchBlockquotePageDataFailur(state, action);
        default: 
            return state;
    }
}

export default blockquotePageReducer;
