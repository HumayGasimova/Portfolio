import * as actionTypes from '../constants/actionTypes';

export function fetchThreeColumnsPageBegin() {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_PAGE_BEGIN
    };
};

export function fetchThreeColumnsPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function fetchThreeColumnsPageFailur(err) {
    return { 
        type: actionTypes.FETCH_THREE_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreThreeColumnsPageBegin() {
    return { 
        type: actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_BEGIN
    };
};

export function loadMoreThreeColumnsPageSuccess() {
    return { 
        type: actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_SUCCESS
    };
};

export function loadMoreThreeColumnsPageFailur(err) {
    return { 
        type: actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreDisableButtonStateForThreeColumnsPage(val) {
    return { 
        type: actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_THREE_COLUMNS_PAGE,
        val: val
    };
};

export function setCategoriesThreeColumnsPage(array) {
    return { 
        type: actionTypes.SET_CATEGORIES_THREE_COLUMNS_PAGE,
        array: array
    };
};

export function setThreeColumnsPageIsHoveringCategoryFromHeader(val, id) {
    return { 
        type: actionTypes.SET_THREE_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER,
        val: val,
        id: id
    };
};

export function updateItemsStyleValuesThreeColumnsPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_THREE_COLUMNS_PAGE,
        image: image,
        obj: obj
    };
};

export function setActivityOfThreeColumnsPageCategoriesFromHeader(key) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_THREE_COLUMNS_PAGE_CATEGORIES_FROM_HEADER,
        key: key
    };
};

export function initItemsStylesStateForThreeColumnsPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_THREE_COLUMNS_PAGE,
        arr: arr
    };
};

export function addMoreItemsStylesStateForThreeColumnsPage(arr) {
    return { 
        type: actionTypes.ADD_MORE_ITEMS_STYLES_STATE_FOR_THREE_COLUMNS_PAGE,
        arr: arr
    };
};

export function disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage(arr) {
    return { 
        type: actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY_THREE_COLUMNS_PAGE,
        arr: arr
    };
};

export function setLoadMoreStepThreeColumnsPage(step) {
    return { 
        type: actionTypes.SET_LOAD_MORE_STEP_THREE_COLUMNS_PAGE,
        step: step
    };
};

export function setTopPositionOfTheItemForThreeColumnsPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_THREE_COLUMNS_PAGE,
        id: id,
        val: val
    };
};
