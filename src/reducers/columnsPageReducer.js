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

const fetchColumnsPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchColumnsPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchColumnsPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const columnsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COLUMNS_PAGE_DATA_BEGIN:
            return fetchColumnsPageDataBegin (state, action); 
        case actionTypes.FETCH_COLUMNS_PAGE_DATA_SUCCESS:
            return fetchColumnsPageDataSuccess (state, action);
        case actionTypes.FETCH_COLUMNS_PAGE_DATA_FAILURE:
            return fetchColumnsPageDataFailur(state, action);
        default: 
            return state;
    }
}

export default columnsPageReducer;
