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

const fetchOverlayWithInfoPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchOverlayWithInfoPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchOverlayWithInfoPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const setOverlayWithInfoPageIsHoveringCategory = (state, action) => {
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

const overlayWithInfoPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_BEGIN:
            return fetchOverlayWithInfoPageBegin (state, action); 
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_SUCCESS:
            return fetchOverlayWithInfoPageSuccess (state, action);
        case actionTypes.FETCH_OVERLAY_WITH_INFO_PAGE_FAILURE:
            return fetchOverlayWithInfoPageFailur(state, action);
        case actionTypes.SET_OVERLAY_WITH_INFO_PAGE_IS_HOVERING_CATEGORY:
            return setOverlayWithInfoPageIsHoveringCategory(state, action);
        default: 
            return state;
    }
}

export default overlayWithInfoPageReducer;
