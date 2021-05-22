import * as actionTypes from '../constants/actionTypes';

export function initMenuItems(array) {
    return { 
        type: actionTypes.INIT_MENU_ITEMS,
        array: array
    };
};

export function initMenuFullscreenItems(array) {
    return { 
        type: actionTypes.INIT_MENU_FULLSCREEN_ITEMS,
        array: array
    };
};


export function photoViewerOpen(option, val, array) {
    return { 
        type: actionTypes.PHOTO_VIEWER_OPEN,
        option: option,
        val: val,
        array: array
    };
};

export function prevImage() {
    return { 
        type: actionTypes.PREV_IMAGE
    };
};

export function nextImage() {
    return { 
        type: actionTypes.NEXT_IMAGE
    };
};

export function setIsHoveringMenuItem(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_ITEM,
        val: val,
        id: id
    };
};

export function setIsHoveringToolbarOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_TOOLBAR_OPTION_ITEM,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function setIsHoveringToolbarSubOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM,
        val: val,
        pathOfIds
    };
};

export function setIsHoveringMenuFullscreenItem(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_ITEM,
        val: val,
        id: id
    };
};

export function setIsHoveringMenuFullscreenOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfToolbarOptionItem(pathOfIds) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfToolbarSubOptionItem(pathOfIds) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfMenuFullscreenItem(val, id) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM,
        val: val,
        id: id
    };
};

export function setSidebarState(val) {
    return { 
        type: actionTypes.SET_SIDEBAR_STATE,
        val: val
    };
};

export function activateMenuItem(pathOfIds) {
    return { 
        type: actionTypes.ACTIVATE_MENU_ITEM,
        pathOfIds: pathOfIds
    };
};

export function clearActivityOfMenuItems(prevLocationPathOfIds) {
    return { 
        type: actionTypes.CLEAR_ACTIVITY_OF_MENU_ITEMS,
        prevLocationPathOfIds: prevLocationPathOfIds
    };
};

export function setUnmountComponentValues(val, path, prevPage) {
    return { 
        type: actionTypes.SET_UNMOUNT_COMPONENT_VALUES,
        val: val,
        path: path,
        prevPage: prevPage
    };
};

export function unmountComponent(repeatedKey, repeatedPath, page, button) {
    return { 
        type: actionTypes.UNMOUNT_COMPONENT,
        repeatedKey: repeatedKey,
        repeatedPath: repeatedPath,
        page: page,
        button: button
    };
};

export function gotoNewPage(repeatedKey, repeatedPath, page, button) {
    return { 
        type: actionTypes.GO_TO_NEW_PAGE,
        repeatedKey: repeatedKey,
        repeatedPath: repeatedPath,
        page: page,
        button: button
    };
};

export function setMenuDotsState(val, page) {
    return { 
        type: actionTypes.SET_MENU_DOTS_STATE,
        val: val,
        page: page,
    };
};

export function setShowBackToTopComponent(val) {
    return { 
        type: actionTypes.SET_SHOW_BACK_TO_TOP_COMPONENT,
        val: val
    };
};

export function portfolioNavigationOnClickStart(path, page, category) {
    return { 
        type: actionTypes.PORTFOLIO_NAVIGATION_ON_CLICK_START,
        path: path,
        page: page,
        category: category
    };
};

export function portfolioNavigationOnClick(path, page, category) {
    return { 
        type: actionTypes.PORTFOLIO_NAVIGATION_ON_CLICK,
        path: path,
        page: page,
        category: category
    };
};

export function setFullScreenState(val) {
    return { 
        type: actionTypes.SET_FULLSCREEN_STATE,
        val: val
    };
};
