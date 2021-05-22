import * as actionTypes from '../constants/actionTypes';

export function fetchStoneWallPageBegin() {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_BEGIN
    };
};

export function fetchStoneWallPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_SUCCESS,
        array: array
    };
};

export function fetchStoneWallPageFailur(err) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_PAGE_FAILURE,
        err: err
    };
};

export function initItemsStylesStateForStoneWallPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_STONE_WALL_PAGE,
        arr: arr
    };
};

export function updateItemsStyleValuesStoneWallPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_STONE_WALL_PAGE,
        image: image,
        obj: obj
    };
};

export function setTopPositionOfTheItemForStoneWallPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_STONE_WALL_PAGE,
        id: id,
        val: val
    };
};
