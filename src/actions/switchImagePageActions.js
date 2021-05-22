import * as actionTypes from '../constants/actionTypes';

export function fetchSwitchImagePageBegin() {
    return { 
        type: actionTypes.FETCH_SWITCH_IMAGE_PAGE_BEGIN
    };
};

export function fetchSwitchImagePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_SWITCH_IMAGE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchSwitchImagePageFailur(err) {
    return { 
        type: actionTypes.FETCH_SWITCH_IMAGE_PAGE_FAILURE,
        err: err
    };
};

export function rememberCoordinateRangeForSwitchImagePage(id, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE,
        id: id,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeForSwitchImagePage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE,
        arr: arr
    };
};

export function setSwitchImagePageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_SWITCH_IMAGE_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

// export function setSwitchImagePageIsHoveringArrow(val, id) {
//     return { 
//         type: actionTypes.SET_SWITCH_IMAGE_PAGE_IS_HOVERING_ARROW,
//         val: val,
//         id: id
//     };
// };

// export function setHistoryPopFromPortfolioItem(val) {
//     return { 
//         type: actionTypes.SET_HISTORY_POP_FROM_PORTFOLIO_ITEM,
//         val: val
//     };
// };
