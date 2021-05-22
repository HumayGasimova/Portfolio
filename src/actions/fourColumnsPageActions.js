import * as actionTypes from '../constants/actionTypes';

export function fetchFourColumnsPageBegin() {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_PAGE_BEGIN
    };
};

export function fetchFourColumnsPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function fetchFourColumnsPageFailur(err) {
    return { 
        type: actionTypes.FETCH_FOUR_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreFourColumnsPageBegin() {
    return { 
        type: actionTypes.LOAD_MORE_FOUR_COLUMNS_PAGE_BEGIN
    };
};

export function loadMoreFourColumnsPageSuccess() {
    return { 
        type: actionTypes.LOAD_MORE_FOUR_COLUMNS_PAGE_SUCCESS
    };
};

export function loadMoreFourColumnsPageFailur(err) {
    return { 
        type: actionTypes.LOAD_MORE_FOUR_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreDisableButtonStateForFourColumnsPage(val) {
    return { 
        type: actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_FOUR_COLUMNS_PAGE,
        val: val
    };
};

export function setCategoriesFourColumnsPage(array) {
    return { 
        type: actionTypes.SET_CATEGORIES_FOUR_COLUMNS_PAGE,
        array: array
    };
};

export function setFourColumnsPageIsHoveringCategoryFromHeader(val, id) {
    return { 
        type: actionTypes.SET_FOUR_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER,
        val: val,
        id: id
    };
};

export function updateItemsStyleValuesFourColumnsPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_FOUR_COLUMNS_PAGE,
        image: image,
        obj: obj
    };
};

export function setActivityOfFourColumnsPageCategoriesFromHeader(key) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_FOUR_COLUMNS_PAGE_CATEGORIES_FROM_HEADER,
        key: key
    };
};

export function initItemsStylesStateForFourColumnsPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_FOUR_COLUMNS_PAGE,
        arr: arr
    };
};

export function addMoreItemsStylesStateForFourColumnsPage(arr) {
    return { 
        type: actionTypes.ADD_MORE_ITEMS_STYLES_STATE_FOR_FOUR_COLUMNS_PAGE,
        arr: arr
    };
};

export function disappearenceAndAppearanceOfElementsDueToTheCategoryFourColumnsPage(arr) {
    return { 
        type: actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY_FOUR_COLUMNS_PAGE,
        arr: arr
    };
};

export function setLoadMoreStepFourColumnsPage(step) {
    return { 
        type: actionTypes.SET_LOAD_MORE_STEP_FOUR_COLUMNS_PAGE,
        step: step
    };
};

export function setTopPositionOfTheItemForFourColumnsPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_FOUR_COLUMNS_PAGE,
        id: id,
        val: val
    };
};
