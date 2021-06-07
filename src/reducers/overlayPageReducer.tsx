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

const fetchOverlayPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchOverlayPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchOverlayPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const overlayPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_OVERLAY_PAGE_BEGIN:
            return fetchOverlayPageBegin (state, action); 
        case actionTypes.FETCH_OVERLAY_PAGE_SUCCESS:
            return fetchOverlayPageSuccess (state, action);
        case actionTypes.FETCH_OVERLAY_PAGE_FAILURE:
            return fetchOverlayPageFailur(state, action);
        default: 
            return state;
    }
}

export default overlayPageReducer;
