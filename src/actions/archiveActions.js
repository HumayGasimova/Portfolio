import * as actionTypes from '../constants/actionTypes';

export function fetchArchiveBegin() {
    return { 
        type: actionTypes.FETCH_ARCHIVE_BEGIN
    };
};

export function fetchArchiveSuccess(array) {
    return { 
        type: actionTypes.FETCH_ARCHIVE_SUCCESS,
        array: array
    };
};

export function fetchArchiveFailur(err) {
    return { 
        type: actionTypes.FETCH_ARCHIVE_FAILURE,
        err: err
    };
};

export function loadMoreArchiveDataBegin() {
    return { 
        type: actionTypes.LOAD_MORE_ARCHIVE_DATA_BEGIN
    };
};

export function loadMoreArchiveDataSuccess(array) {
    return { 
        type: actionTypes.LOAD_MORE_ARCHIVE_DATA_SUCCESS,
        array: array
    };
};

export function loadMoreArchiveDataFailur(err) {
    return { 
        type: actionTypes.LOAD_MORE_ARCHIVE_DATA_FAILURE,
        err: err
    };
};

export function loadMoreDisableButtonStateForArchive(val) {
    return { 
        type: actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_ARCHIVE,
        val: val
    };
};

export function setArchiveCategory(category) {
    return { 
        type: actionTypes.SET_ARCHIVE_CATEGORY,
        category: category
    };
};

export function setArchiveIsHoveringImage(val, id) {
    return { 
        type: actionTypes.SET_ARCHIVE_IS_HOVERING_IMAGE,
        val: val,
        id: id
    };
};

export function setArchiveIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_ARCHIVE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function clearArchiveData() {
    return { 
        type: actionTypes.CLEAR_ARCHIVE_DATA,
    };
};


