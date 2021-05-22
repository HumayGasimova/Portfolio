import * as actionTypes from '../constants/actionTypes';

export function fetchTabsPageSection1Column1DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_BEGIN
    };
};

export function fetchTabsPageSection1Column1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection1Column1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_FAILURE,
        err: err
    };
};

export function fetchTabsPageSection1Column2DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_BEGIN
    };
};

export function fetchTabsPageSection1Column2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection1Column2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_FAILURE,
        err: err
    };
};

export function fetchTabsPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchTabsPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTabsPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function setIsHoverTabOfSection1Column1TabsPage(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVER_TAB_OF_SECTION_1_COLUMN_1_TABS_PAGE,
        val: val,
        id: id
    };
};

export function setIsHoverTabOfSection1Column2TabsPage(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVER_TAB_OF_SECTION_1_COLUMN_2_TABS_PAGE,
        val: val,
        id: id
    };
};

export function setIsHoverTabOfSection2TabsPage(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVER_TAB_OF_SECTION_2_TABS_PAGE,
        val: val,
        id: id
    };
};

export function setActiveTabOfSection1Column1TabsPage(val, id) {
    return { 
        type: actionTypes.SET_ACTIVE_TAB_OF_SECTION_1_COLUMN_1_TABS_PAGE,
        val: val,
        id: id
    };
};

export function setActiveTabOfSection1Column2TabsPage(val, id) {
    return { 
        type: actionTypes.SET_ACTIVE_TAB_OF_SECTION_1_COLUMN_2_TABS_PAGE,
        val: val,
        id: id
    };
};

export function setActiveTabOfSection2TabsPage(val, id) {
    return { 
        type: actionTypes.SET_ACTIVE_TAB_OF_SECTION_2_TABS_PAGE,
        val: val,
        id: id
    };
};

export function rememberCoordinateRangeForTabsPage(key, coordinatesRanges) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_FOR_TABS_PAGE,
        key: key,
        coordinatesRanges: coordinatesRanges
    };
};

export function forgetCoordinateRangeForTabsPage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_FOR_TABS_PAGE,
        arr: arr
    };
};

export function initUnderlinesStyleStateForTabsPage(arr) {
    return { 
        type: actionTypes.INIT_UNDERLINES_STYLE_STATE_FOR_TABS_PAGE,
        arr: arr
    };
};

export function updateTabsUnderlinesStyleValuesForTabsPage(tabsKey, obj) {
    return { 
        type: actionTypes.UPDATED_TABS_UNDERLINES_STYLE_VALUES_TABS_PAGE,
        tabsKey: tabsKey,
        obj: obj
    };
};
