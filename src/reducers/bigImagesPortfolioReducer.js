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

const fetchBigImagesPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchBigImagesPortfolioSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchBigImagesPortfolioFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}

const setBigImagesIsHoveringCategory = (state, action) => {
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

const setBigImagesIsHoveringTag = (state, action) => {
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

const bigImagesPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_BEGIN:
            return fetchBigImagesPortfolioBegin (state, action); 
        case actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_SUCCESS:
            return fetchBigImagesPortfolioSuccess (state, action);
        case actionTypes.FETCH_BIG_IMAGES_PORTFOLIO_FAILURE:
            return fetchBigImagesPortfolioFailur(state, action);
        case actionTypes.SET_BIG_IMAGES_IS_HOVERING_CATEGORY:
            return setBigImagesIsHoveringCategory(state, action);
        case actionTypes.SET_BIG_IMAGES_IS_HOVERING_TAG:
            return setBigImagesIsHoveringTag(state, action);
        default: 
            return state;
    }
}

export default bigImagesPortfolioReducer;
