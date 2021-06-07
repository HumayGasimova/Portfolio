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
    item: {},
    loading: false,
    error: null
}

const fetchSmallImagesPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSmallImagesPortfolioSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchSmallImagesPortfolioFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}

const setSmallImagesIsHoveringCategory = (state, action) => {
    let updatedCategories = [...state.item.categories];

    let category = {...updatedCategories.find(item => item.id === action.id), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.id === action.id);
    updatedCategories.splice(categoryIndex, 1, category);

    return {
        ...state,
        item: {
            ...state.item,
            categories: updatedCategories
        }
    };
}

const setSmallImagesIsHoveringTag = (state, action) => {
    let updatedTags = [...state.item.tags];

    let tag = {...updatedTags.find(item => item.id === action.id), isHover: action.val};
    let tagIndex = updatedTags.findIndex(item => item.id === action.id);
    updatedTags.splice(tagIndex, 1, tag);

    return {
        ...state,
        item: {
            ...state.item,
            tags: updatedTags
        }
    };
}

const smallImagesPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN:
            return fetchSmallImagesPortfolioBegin (state, action); 
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS:
            return fetchSmallImagesPortfolioSuccess (state, action);
        case actionTypes.FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE:
            return fetchSmallImagesPortfolioFailur(state, action);
        case actionTypes.SET_SMALL_IMAGES_IS_HOVERING_CATEGORY:
            return setSmallImagesIsHoveringCategory(state, action);
        case actionTypes.SET_SMALL_IMAGES_IS_HOVERING_TAG:
            return setSmallImagesIsHoveringTag(state, action);
        default: 
            return state;
    }
}

export default smallImagesPortfolioReducer;
