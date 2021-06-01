import * as actionTypes from '../constants/actionTypes';

export function fetchStoneWallWidePageBegin() {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_BEGIN
    };
};

export function fetchStoneWallWidePageSuccess(array) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_SUCCESS,
        array: array
    };
};

export function fetchStoneWallWidePageFailur(err) {
    return { 
        type: actionTypes.FETCH_STONE_WALL_WIDE_PAGE_FAILURE,
        err: err
    };
};

export function setStoneWallWidePageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_STONE_WALL_WIDE_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function initItemsStylesStateForStoneWallWidePage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_STONE_WALL_WIDE_PAGE,
        arr: arr
    };
};

export function updateItemsStyleValuesStoneWallWidePage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_STONE_WALL_WIDE_PAGE,
        image: image,
        obj: obj
    };
};

export function setTopPositionOfTheItemForStoneWallWidePage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_STONE_WALL_WIDE_PAGE,
        id: id,
        val: val
    };
};
