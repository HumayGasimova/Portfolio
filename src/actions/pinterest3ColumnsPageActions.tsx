import * as actionTypes from '../constants/actionTypes';

export function fetchPinterest3ColumnsPageBegin() {
    return { 
        type: actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_BEGIN
    };
};

export function fetchPinterest3ColumnsPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function fetchPinterest3ColumnsPageFailur(err) {
    return { 
        type: actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function setPinterest3ColumnsPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_PINTEREST_3_COLUMNS_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function initItemsStylesStateForPinterest3ColumnsPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_PINTEREST_3_COLUMNS_PAGE,
        arr: arr
    };
};

export function updateItemsStyleValuesPinterest3ColumnsPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_PINTEREST_3_COLUMNS_PAGE,
        image: image,
        obj: obj
    };
};

export function setTopPositionOfTheItemForPinterest3ColumnsPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_PINTEREST_3_COLUMNS_PAGE,
        id: id,
        val: val
    };
};
