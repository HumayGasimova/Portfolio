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
    sliderContainersCoordinateRange: [
        {
            key: "scrollSliderId1",
            updated: false,
            rendered: false
        }
    ],
    scrollSlidersStyleValues: {
        slider1: {
            translateX: 0,
            transition: 2,
            rendered: true
        }
    },
}

const fetchScrollSliderPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchScrollSliderPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchScrollSliderPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const rememberCoordinateRangeOfScrollSliderForScrollSliderPage = (state, action) => {
    let updatedSliderContainersCoordinateRange = [...state.sliderContainersCoordinateRange];
    
    let objIndex = updatedSliderContainersCoordinateRange.findIndex(item => item.key === action.key);
    updatedSliderContainersCoordinateRange.splice(objIndex, 1, action.coordinateRange);
    
    return {
        ...state,
        sliderContainersCoordinateRange: updatedSliderContainersCoordinateRange
    };
}

const forgetCoordinateRangeOfScrollSliderForScrollSliderPage = (state, action) => {
    return {
        ...state,
        sliderContainersCoordinateRange: action.arr
    };
}

const updateScrollSlidersStyleValuesScrollSliderPage = (state, action) => {
    let updatedScrollSlidersStyleValues = {...state.scrollSlidersStyleValues}
    switch(action.sliderKey) {
        case 'scrollSlider1':
            updatedScrollSlidersStyleValues['slider1'].translateX = action.obj.translateX;
            updatedScrollSlidersStyleValues['slider1'].transition = action.obj.transition;
            updatedScrollSlidersStyleValues['slider1'].rendered = action.obj.rendered;
            break;
    }
    
    return {
        ...state,
        scrollSlidersStyleValues: updatedScrollSlidersStyleValues
    };
}

const scrollSliderPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_BEGIN:
            return fetchScrollSliderPageDataBegin (state, action); 
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_SUCCESS:
            return fetchScrollSliderPageDataSuccess (state, action);
        case actionTypes.FETCH_SCROLL_SLIDER_PAGE_DATA_FAILURE:
            return fetchScrollSliderPageDataFailur(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_OF_SCROLL_SLIDER_FOR_SCROLL_SLIDER_PAGE:
            return rememberCoordinateRangeOfScrollSliderForScrollSliderPage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_OF_SCROLL_SLIDER_FOR_SCROLL_SLIDER_PAGE:
            return forgetCoordinateRangeOfScrollSliderForScrollSliderPage(state, action);
        case actionTypes.UPDATED_SCROLL_SLIDERS_STYLE_VALUES_SCROLL_SLIDER_PAGE:
            return updateScrollSlidersStyleValuesScrollSliderPage(state, action);
        default: 
            return state;
    }
}

export default scrollSliderPageReducer;
