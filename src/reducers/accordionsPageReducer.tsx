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
    section1Data: {
        itemsLeftColumn: [],
        itemsRightColumn: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchAccordionsPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
       section1Data: updateSection1Data
    };
}

const fetchAccordionsPageSection1DataSuccess = (state, action) => {
    // Split an array into two arrays to display in two columns

    let array = [...action.array];
    let splitedArray1 = array.slice(0, array.length/2)
    let splitedArray2 = array.slice(array.length/2, array.length);

    let updateSection1Data = {
        ...state.section2Data,
        loading: false,
        itemsLeftColumn: splitedArray1,
        itemsRightColumn: splitedArray2
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchAccordionsPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        error: action.err,
        itemsLeftColumn: [],
        itemsRightColumn: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchAccordionsPageSection2DataBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
       section2Data: updateSection2Data
    };
}

const fetchAccordionsPageSection2DataSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchAccordionsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const setIsHoverSection2ItemAccordionsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const setActivitySection1ItemAccordionsPage = (state, action) => {
    let updatedItems;
    let item;
    let itemIndex;
    switch(action.opt){
        case 'leftColumn':
            updatedItems = [...state.section1Data.itemsLeftColumn];

            updatedItems = updatedItems.map(el => {
                return {
                    ...el,
                    active: "init"
                }
            })
        
            item = {
                ...updatedItems
                .find(item => item.id === action.id), active: action.val};
        
            itemIndex = updatedItems.findIndex(item => item.id === action.id);
                
            updatedItems.splice(itemIndex, 1, item);
        
            return {
                ...state,
                section1Data: {
                    ...state.section1Data,
                    itemsLeftColumn: updatedItems
                }
            };
        case 'rightColumn':
            updatedItems = [...state.section1Data.itemsRightColumn];

            updatedItems = updatedItems.map(el => {
                return {
                    ...el,
                    active: "init"
                }
            })
        
            item = {
                ...updatedItems
                .find(item => item.id === action.id), active: action.val};
        
            itemIndex = updatedItems.findIndex(item => item.id === action.id);
                
            updatedItems.splice(itemIndex, 1, item);
        
            return {
                ...state,
                section1Data: {
                    ...state.section1Data,
                    itemsRightColumn: updatedItems
                }
            };
        default:
            return state;
    }

}

const setActivitySection2ItemAccordionsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: "init"
        }
    })

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const accordionsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_BEGIN:
            return fetchAccordionsPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchAccordionsPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_1_DATA_FAILURE:
            return fetchAccordionsPageSection1DataFailur(state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchAccordionsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchAccordionsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_ACCORDIONS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchAccordionsPageSection2DataFailur(state, action);
        case actionTypes.SET_IS_HOVER_SECTION_2_ITEM_ACCORDIONS_PAGE:
            return setIsHoverSection2ItemAccordionsPage(state, action);
        case actionTypes.SET_ACTIVITY_SECTION_1_ITEM_ACCORDION_PAGE:
            return setActivitySection1ItemAccordionsPage(state, action);
        case actionTypes.SET_ACTIVITY_SECTION_2_ITEM_ACCORDION_PAGE:
            return setActivitySection2ItemAccordionsPage(state, action);
        default: 
            return state;
    }
}

export default accordionsPageReducer;
