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

const fetchDropcapsPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchDropcapsPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchDropcapsPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const dropcapsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_DROPCAPS_PAGE_DATA_BEGIN:
            return fetchDropcapsPageDataBegin (state, action); 
        case actionTypes.FETCH_DROPCAPS_PAGE_DATA_SUCCESS:
            return fetchDropcapsPageDataSuccess (state, action);
        case actionTypes.FETCH_DROPCAPS_PAGE_DATA_FAILURE:
            return fetchDropcapsPageDataFailur(state, action);
        default: 
            return state;
    }
}

export default dropcapsPageReducer;
