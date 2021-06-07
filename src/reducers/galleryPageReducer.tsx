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

const fetchGalleryPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchGalleryPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchGalleryPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}


const galleryPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_GALLERY_PAGE_BEGIN:
            return fetchGalleryPageBegin (state, action); 
        case actionTypes.FETCH_GALLERY_PAGE_SUCCESS:
            return fetchGalleryPageSuccess (state, action);
        case actionTypes.FETCH_GALLERY_PAGE_FAILURE:
            return fetchGalleryPageFailur(state, action);
        default: 
            return state;
    }
}

export default galleryPageReducer;
