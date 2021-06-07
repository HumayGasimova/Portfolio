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
    loadingMoreData: false,
    errorMoreData: null,
    disableLoadMoreButton: false,
    category: ""
}

const fetchArchiveBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchArchiveSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchArchiveFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const loadMoreArchiveDataBegin = (state, action) => {
    return {
        ...state,
        loadingMoreData: true,
        errorMoreData: null
    };
}

const loadMoreArchiveDataSuccess = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        items: action.array
    };
}

const loadMoreArchiveDataFailur = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        errorMoreData: action.err,
        items: [...state.items]
    };
}

const loadMoreDisableButtonStateForArchive = (state, action) => {
    return {
        ...state,
        disableLoadMoreButton: action.val
    };
}

const setArchiveIsHoveringImage = (state, action) => {
    let updatedItems = [...state.items];
    let image = {...updatedItems.find(item => item.id === action.id).coverImage, isHover: action.val};
    let imageIndex = updatedItems.findIndex(item => item.id === action.id);
    updatedItems[imageIndex].coverImage = image;

    return {
        ...state,
        items: updatedItems
    };
}

const setArchiveIsHoveringCategory = (state, action) => {
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

const setArchiveCategory = (state, action) => {
    return {
        ...state,
        category: action.category
    }
}

const clearArchiveData = (state, action) => {
    return {
        ...state,
        items: [],
        loading: false,
        error: null,
        loadingMoreData: false,
        errorMoreData: null,
        disableLoadMoreButton: false,
        category: ""
    }
}

const archiveReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARCHIVE_BEGIN:
            return fetchArchiveBegin (state, action); 
        case actionTypes.FETCH_ARCHIVE_SUCCESS:
            return fetchArchiveSuccess (state, action);
        case actionTypes.FETCH_ARCHIVE_FAILURE:
            return fetchArchiveFailur(state, action);
        case actionTypes.LOAD_MORE_ARCHIVE_DATA_BEGIN:
            return loadMoreArchiveDataBegin (state, action); 
        case actionTypes.LOAD_MORE_ARCHIVE_DATA_SUCCESS:
            return loadMoreArchiveDataSuccess (state, action);
        case actionTypes.LOAD_MORE_ARCHIVE_DATA_FAILURE:
            return loadMoreArchiveDataFailur(state, action);
        case actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_ARCHIVE:
            return loadMoreDisableButtonStateForArchive(state, action);
        case actionTypes.SET_ARCHIVE_CATEGORY:
            return setArchiveCategory(state, action);
        case actionTypes.SET_ARCHIVE_IS_HOVERING_IMAGE:
            return setArchiveIsHoveringImage(state, action);
        case actionTypes.SET_ARCHIVE_IS_HOVERING_CATEGORY:
            return setArchiveIsHoveringCategory(state, action);
        case actionTypes.CLEAR_ARCHIVE_DATA:
            return clearArchiveData(state, action);
        default: 
            return state;
    }
}

export default archiveReducer;
