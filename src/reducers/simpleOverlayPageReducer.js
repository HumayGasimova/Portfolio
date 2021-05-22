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

const fetchSimpleOverlayPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSimpleOverlayPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchSimpleOverlayPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const simpleOverlayPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_BEGIN:
            return fetchSimpleOverlayPageBegin (state, action); 
        case actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_SUCCESS:
            return fetchSimpleOverlayPageSuccess (state, action);
        case actionTypes.FETCH_SIMPLE_OVERLAY_PAGE_FAILURE:
            return fetchSimpleOverlayPageFailur(state, action);
        default: 
            return state;
    }
}

export default simpleOverlayPageReducer;
