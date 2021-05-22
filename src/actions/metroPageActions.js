import * as actionTypes from '../constants/actionTypes';

export function fetchMetroPageBegin() {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_BEGIN
    };
};

export function fetchMetroPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_SUCCESS,
        array: array
    };
};

export function fetchMetroPageFailur(err) {
    return { 
        type: actionTypes.FETCH_METRO_PAGE_FAILURE,
        err: err
    };
};

export function setMetroPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_METRO_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function initItemsStylesStateForMetroPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_METRO_PAGE,
        arr: arr
    };
};

export function updateItemsStyleValuesMetroPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_METRO_PAGE,
        image: image,
        obj: obj
    };
};

export function setTopPositionOfTheItemForMetroPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_METRO_PAGE,
        id: id,
        val: val
    };
};
