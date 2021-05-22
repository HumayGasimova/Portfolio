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

const fetchGalleryWithSpacePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchGalleryWithSpacePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchGalleryWithSpacePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}


const galleryWithSpacePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_BEGIN:
            return fetchGalleryWithSpacePageBegin (state, action); 
        case actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_SUCCESS:
            return fetchGalleryWithSpacePageSuccess (state, action);
        case actionTypes.FETCH_GALLERY_WITH_SPACE_PAGE_FAILURE:
            return fetchGalleryWithSpacePageFailur(state, action);
        default: 
            return state;
    }
}

export default galleryWithSpacePageReducer;
