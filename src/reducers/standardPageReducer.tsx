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

const fetchStandardPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStandardPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStandardPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const setStandardPageIsHoveringCategory = (state, action) => {
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

const standardPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STANDARD_PAGE_BEGIN:
            return fetchStandardPageBegin (state, action); 
        case actionTypes.FETCH_STANDARD_PAGE_SUCCESS:
            return fetchStandardPageSuccess (state, action);
        case actionTypes.FETCH_STANDARD_PAGE_FAILURE:
            return fetchStandardPageFailur(state, action);
        case actionTypes.SET_STANDARD_PAGE_IS_HOVERING_CATEGORY:
            return setStandardPageIsHoveringCategory(state, action);
        default: 
            return state;
    }
}

export default standardPageReducer;
