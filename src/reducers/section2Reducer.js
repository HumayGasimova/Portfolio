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
    pictureBoard: {
        items: [],
        loading: false,
        error: null
    },
    pictureBoardImagesCooradinateRange: [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 4,
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
            id: 13,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        }
    ],
    ourProcess: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchPictureBoardBegin = (state, action) => {
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}

const fetchPictureBoardSuccess = (state, action) => {   
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}

const fetchPictureBoardFailur = (state, action) => {
    let updatedPictureBoard = {
        ...state.pictureBoard, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        pictureBoard: updatedPictureBoard
    };
}

const fetchOurProcessDataBegin = (state, action) => {
    let updatedOurProcess = {
        ...state.pictureBoard, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        ourProcess: updatedOurProcess
    };
}

const fetchOurProcessDataSuccess = (state, action) => {   
    let updatedOurProcess = {
        ...state.pictureBoard, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        ourProcess: updatedOurProcess
    };
}

const fetchOurProcessDataFailur = (state, action) => {
    let updatedOurProcess = {
        ...state.pictureBoard, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        ourProcess: updatedOurProcess
    };
}

const rememberCoordinateRangeForPictureBoard = (state, action) => {
    let updatedPictureBoardImagesCooradinateRange = [...state.pictureBoardImagesCooradinateRange];
    
    let objIndex = updatedPictureBoardImagesCooradinateRange.findIndex(item => item.id === action.id);
    updatedPictureBoardImagesCooradinateRange.splice(objIndex, 1, action.coordinateRange);

    return {
        ...state,
        pictureBoardImagesCooradinateRange: updatedPictureBoardImagesCooradinateRange
    };
}

const forgetCoordinateRangeForPictureBoard = (state, action) => {
    return {
        ...state,
        pictureBoardImagesCooradinateRange: action.arr
    };
}

const section2Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PICTURE_BOARD_BEGIN:
            return fetchPictureBoardBegin (state, action); 
        case actionTypes.FETCH_PICTURE_BOARD_SUCCESS:
            return fetchPictureBoardSuccess (state, action);
        case actionTypes.FETCH_PICTURE_BOARD_FAILURE:
            return fetchPictureBoardFailur(state, action);
        case actionTypes.FETCH_OUR_PROCESS_DATA_BEGIN:
            return fetchOurProcessDataBegin (state, action); 
        case actionTypes.FETCH_OUR_PROCESS_DATA_SUCCESS:
            return fetchOurProcessDataSuccess (state, action);
        case actionTypes.FETCH_OUR_PROCESS_DATA_FAILURE:
            return fetchOurProcessDataFailur(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PICTURE_BOARD:
            return rememberCoordinateRangeForPictureBoard(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_PICTURE_BOARD:
            return forgetCoordinateRangeForPictureBoard(state, action);
        default: 
            return state;
    }
}

export default section2Reducer;
