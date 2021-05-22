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

const fetchGalleryPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchGalleryPortfolioSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchGalleryPortfolioFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}

const setGalleryIsHoveringCategory = (state, action) => {
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

const setGalleryIsHoveringTag = (state, action) => {
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

const setGalleryIsHoveringImage = (state, action) => {
    let updatedImagesArray = [...state.item.imagesArray];

    let image = {...updatedImagesArray.find(item => item.id === action.id), isHover: action.val};
    let imageIndex = updatedImagesArray.findIndex(item => item.id === action.id);
    updatedImagesArray.splice(imageIndex, 1, image);

    return {
        ...state,
        item: {
            ...state.item,
            imagesArray: updatedImagesArray
        }
    };
}

const galleryPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_GALLERY_PORTFOLIO_BEGIN:
            return fetchGalleryPortfolioBegin (state, action); 
        case actionTypes.FETCH_GALLERY_PORTFOLIO_SUCCESS:
            return fetchGalleryPortfolioSuccess (state, action);
        case actionTypes.FETCH_GALLERY_PORTFOLIO_FAILURE:
            return fetchGalleryPortfolioFailur(state, action);
        case actionTypes.SET_GALLERY_IS_HOVERING_CATEGORY:
            return setGalleryIsHoveringCategory(state, action);
        case actionTypes.SET_GALLERY_IS_HOVERING_TAG:
            return setGalleryIsHoveringTag(state, action);
        case actionTypes.SET_GALLERY_IS_HOVERING_IMAGE:
            return setGalleryIsHoveringImage(state, action);
        default: 
            return state;
    }
}

export default galleryPortfolioReducer;
