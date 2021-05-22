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

const fetchPortfolioGalleryPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPortfolioGalleryPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchPortfolioGalleryPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const rememberCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    let updatedItemsCoordinateRange = [...state.itemsCoordinateRange];
    
    let objIndex = updatedItemsCoordinateRange.findIndex(item => item.id === action.id);
    updatedItemsCoordinateRange.splice(objIndex, 1, action.coordinateRange);

    return {
        ...state,
        itemsCoordinateRange: updatedItemsCoordinateRange
    };
}

const forgetCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    return {
        ...state,
        itemsCoordinateRange: action.arr
    };
}

const setPortfolioGalleryPageIsHoveringCategory = (state, action) => {
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

// const setPortfolioGalleryPageIsHoveringArrow = (state, action) => {
//     let updatedItems = [...state.items];

//     let item = {...updatedItems.find(item => item.id === action.id), arrowIsHovering: action.val};
//     let itemIndex = updatedItems.findIndex(item => item.id === action.id);
//     updatedItems.splice(itemIndex, 1, item);

//     return {
//         ...state,
//         items: updatedItems
//     };
// }

const portfolioGalleryPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN:
            return fetchPortfolioGalleryPageBegin (state, action); 
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS:
            return fetchPortfolioGalleryPageSuccess (state, action);
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE:
            return fetchPortfolioGalleryPageFailur(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return rememberCoordinateRangeForPortfolioGalleryPage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return forgetCoordinateRangeForPortfolioGalleryPage(state, action);
        case actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_CATEGORY:
            return setPortfolioGalleryPageIsHoveringCategory(state, action);
        // case actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_ARROW:
        //     return setPortfolioGalleryPageIsHoveringArrow(state, action);
        default: 
            return state;
    }
}

export default portfolioGalleryPageReducer;
