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

const fetchHeadingsPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchHeadingsPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchHeadingsPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const headingsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_HEADINGS_PAGE_DATA_BEGIN:
            return fetchHeadingsPageDataBegin (state, action); 
        case actionTypes.FETCH_HEADINGS_PAGE_DATA_SUCCESS:
            return fetchHeadingsPageDataSuccess (state, action);
        case actionTypes.FETCH_HEADINGS_PAGE_DATA_FAILURE:
            return fetchHeadingsPageDataFailur(state, action);
        default: 
            return state;
    }
}

export default headingsPageReducer;
