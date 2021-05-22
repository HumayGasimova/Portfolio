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

const fetchSlideFromImageLeftPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSlideFromImageLeftPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchSlideFromImageLeftPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const setSlideFromImageLeftPageIsHoveringCategory = (state, action) => {
    let updatedItems = [...state.items];

    let category = {
        ...updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .find(item => item.id === action.pathOfIds[1]), isHover: action.val};

    let categoryIndex = updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .findIndex(item => item.id === action.pathOfIds[1]);
        
        updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .splice(categoryIndex, 1, category);

    return {
        ...state,
        items: updatedItems
    };
}

const slideFromImageLeftPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_BEGIN:
            return fetchSlideFromImageLeftPageBegin (state, action); 
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_SUCCESS:
            return fetchSlideFromImageLeftPageSuccess (state, action);
        case actionTypes.FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_FAILURE:
            return fetchSlideFromImageLeftPageFailur(state, action);
        case actionTypes.SET_SLIDE_FROM_IMAGE_LEFT_PAGE_IS_HOVERING_CATEGORY:
            return setSlideFromImageLeftPageIsHoveringCategory(state, action);
        default: 
            return state;
    }
}

export default slideFromImageLeftPageReducer;
