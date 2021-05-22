import * as actionTypes from '../constants/actionTypes';

export function fetchTwoColumnsPageBegin() {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_BEGIN
    };
};

export function fetchTwoColumnsPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_SUCCESS,
        array: array
    };
};

export function fetchTwoColumnsPageFailur(err) {
    return { 
        type: actionTypes.FETCH_TWO_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreTwoColumnsPageBegin() {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_BEGIN
    };
};

export function loadMoreTwoColumnsPageSuccess() {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_SUCCESS
    };
};

export function loadMoreTwoColumnsPageFailur(err) {
    return { 
        type: actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_FAILURE,
        err: err
    };
};

export function loadMoreDisableButtonStateForTwoColumnsPage(val) {
    return { 
        type: actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_TWO_COLUMNS_PAGE,
        val: val
    };
};

export function setCategoriesTwoColumnsPage(array) {
    return { 
        type: actionTypes.SET_CATEGORIES_TWO_COLUMNS_PAGE,
        array: array
    };
};

export function setTwoColumnsPageIsHoveringCategoryFromHeader(val, id) {
    return { 
        type: actionTypes.SET_TWO_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER,
        val: val,
        id: id
    };
};

export function updateItemsStyleValuesTwoColumnsPage(image, obj) {
    return { 
        type: actionTypes.UPDATED_ITEMS_STYLE_VALUES_TWO_COLUMNS_PAGE,
        image: image,
        obj: obj
    };
};

export function setActivityOfTwoColumnsPageCategoriesFromHeader(key) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_TWO_COLUMNS_PAGE_CATEGORIES_FROM_HEADER,
        key: key
    };
};

export function initItemsStylesStateForTwoColumnsPage(arr) {
    return { 
        type: actionTypes.INIT_ITEMS_STYLES_STATE_FOR_TWO_COLUMNS_PAGE,
        arr: arr
    };
};

export function addMoreItemsStylesStateForTwoColumnsPage(arr) {
    return { 
        type: actionTypes.ADD_MORE_ITEMS_STYLES_STATE_FOR_TWO_COLUMNS_PAGE,
        arr: arr
    };
};

export function disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage(arr) {
    return { 
        type: actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY_TWO_COLUMNS_PAGE,
        arr: arr
    };
};

export function setLoadMoreStepTwoColumnsPage(step) {
    return { 
        type: actionTypes.SET_LOAD_MORE_STEP_TWO_COLUMNS_PAGE,
        step: step
    };
};

export function setTopPositionOfTheItemForTwoColumnsPage(id, val) {
    return { 
        type: actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_TWO_COLUMNS_PAGE,
        id: id,
        val: val
    };
};
