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
    itemsCoordinateRange: [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ],
}

const fetchSwitchImagePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchSwitchImagePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchSwitchImagePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const rememberCoordinateRangeForSwitchImagePage = (state, action) => {
    let updatedItemsCoordinateRange = [...state.itemsCoordinateRange];
    
    let objIndex = updatedItemsCoordinateRange.findIndex(item => item.id === action.id);
    updatedItemsCoordinateRange.splice(objIndex, 1, action.coordinateRange);

    return {
        ...state,
        itemsCoordinateRange: updatedItemsCoordinateRange
    };
}

const forgetCoordinateRangeForSwitchImagePage = (state, action) => {
    return {
        ...state,
        itemsCoordinateRange: action.arr
    };
}

const setSwitchImagePageIsHoveringCategory = (state, action) => {
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

// const setSwitchImagePageIsHoveringArrow = (state, action) => {
//     let updatedItems = [...state.items];

//     let item = {...updatedItems.find(item => item.id === action.id), arrowIsHovering: action.val};
//     let itemIndex = updatedItems.findIndex(item => item.id === action.id);
//     updatedItems.splice(itemIndex, 1, item);

//     return {
//         ...state,
//         items: updatedItems
//     };
// }

const switchImagePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SWITCH_IMAGE_PAGE_BEGIN:
            return fetchSwitchImagePageBegin (state, action); 
        case actionTypes.FETCH_SWITCH_IMAGE_PAGE_SUCCESS:
            return fetchSwitchImagePageSuccess (state, action);
        case actionTypes.FETCH_SWITCH_IMAGE_PAGE_FAILURE:
            return fetchSwitchImagePageFailur(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE:
            return rememberCoordinateRangeForSwitchImagePage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE:
            return forgetCoordinateRangeForSwitchImagePage(state, action);
        case actionTypes.SET_SWITCH_IMAGE_PAGE_IS_HOVERING_CATEGORY:
            return setSwitchImagePageIsHoveringCategory(state, action);
        // case actionTypes.SET_SWITCH_IMAGE_PAGE_IS_HOVERING_ARROW:
        //     return setSwitchImagePageIsHoveringArrow(state, action);
        default: 
            return state;
    }
}

export default switchImagePageReducer;
