import * as actionTypes from '../constants/actionTypes';

export function fetchPictureBoardBegin() {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_BEGIN
    };
};

export function fetchPictureBoardSuccess(array) {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_SUCCESS,
        array: array
    };
};

export function fetchPictureBoardFailur(err) {
    return { 
        type: actionTypes.FETCH_PICTURE_BOARD_FAILURE,
        err: err
    };
};

export function fetchOurProcessDataBegin() {
    return { 
        type: actionTypes.FETCH_OUR_PROCESS_DATA_BEGIN
    };
};

export function fetchOurProcessDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_OUR_PROCESS_DATA_SUCCESS,
        array: array
    };
};

export function fetchOurProcessDataFailur(err) {
    return { 
        type: actionTypes.FETCH_OUR_PROCESS_DATA_FAILURE,
        err: err
    };
};

export function rememberCoordinateRangeForPictureBoard(id, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PICTURE_BOARD,
        id: id,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeForPictureBoard(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_FOR_PICTURE_BOARD,
        arr: arr
    };
};
