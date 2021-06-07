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

const fetchHeaderImagesBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchHeaderImagesSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array,
    };
}

const fetchHeaderImagesFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}


const headerImagesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_HEADER_IMAGES_BEGIN:
            return fetchHeaderImagesBegin (state, action); 
        case actionTypes.FETCH_HEADER_IMAGES_SUCCESS:
            return fetchHeaderImagesSuccess (state, action);
        case actionTypes.FETCH_HEADER_IMAGES_FAILURE:
            return fetchHeaderImagesFailur(state, action);
        default: 
            return state;
    }
}

export default headerImagesReducer;
