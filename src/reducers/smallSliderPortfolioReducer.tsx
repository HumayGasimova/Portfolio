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

const fetchSmallSliderPortfolioBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSmallSliderPortfolioSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        item: action.obj
    };
}

const fetchSmallSliderPortfolioFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        item: {}
    };
}

const setSmallSliderIsHoveringCategory = (state, action) => {
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

const setSmallSliderIsHoveringTag = (state, action) => {
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

const setSwiperStateForSmallSliderPage = (state, action) => {
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

const smallSliderPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_BEGIN:
            return fetchSmallSliderPortfolioBegin (state, action); 
        case actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_SUCCESS:
            return fetchSmallSliderPortfolioSuccess (state, action);
        case actionTypes.FETCH_SMALL_SLIDER_PORTFOLIO_FAILURE:
            return fetchSmallSliderPortfolioFailur(state, action);
        case actionTypes.SET_SMALL_SLIDER_IS_HOVERING_CATEGORY:
            return setSmallSliderIsHoveringCategory(state, action);
        case actionTypes.SET_SMALL_SLIDER_IS_HOVERING_TAG:
            return setSmallSliderIsHoveringTag(state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_SMALL_SLIDER_PAGE:
            return setSwiperStateForSmallSliderPage(state, action);
        default: 
            return state;
    }
}

export default smallSliderPortfolioReducer;
