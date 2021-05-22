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
    error: null,
    swiper: {
        slides: [],
        _slides: [],
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        rerender: false
    }
}

const fetchBigSliderPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchBigSliderPortfolioSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchBigSliderPortfolioFailur = (state, action) => {
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

const setBigSliderIsHoveringTag = (state, action) => {
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

const setSwiperStateForBigSliderPage = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        swiper: updatedSwiper,
    };
}

const bigSliderPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_BEGIN:
            return fetchBigSliderPortfolioBegin (state, action); 
        case actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_SUCCESS:
            return fetchBigSliderPortfolioSuccess (state, action);
        case actionTypes.FETCH_BIG_SLIDER_PORTFOLIO_FAILURE:
            return fetchBigSliderPortfolioFailur(state, action);
        case actionTypes.SET_BIG_SLIDER_IS_HOVERING_CATEGORY:
            return setBigImagesIsHoveringCategory(state, action);
        case actionTypes.SET_BIG_SLIDER_IS_HOVERING_TAG:
            return setBigSliderIsHoveringTag(state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_BIG_SLIDER_PAGE:
            return setSwiperStateForBigSliderPage(state, action);
        default: 
            return state;
    }
}

export default bigSliderPortfolioReducer;
