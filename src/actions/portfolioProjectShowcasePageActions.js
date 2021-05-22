import * as actionTypes from '../constants/actionTypes';

export function fetchPortfolioProjectShowcasePageDataBegin() {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_BEGIN
    };
};

export function fetchPortfolioProjectShowcasePageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchPortfolioProjectShowcasePageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_PROJECT_SHOWCASE_PAGE_DATA_FAILURE,
        err: err
    };
};

export function setPortfolioProjectShowcasePageIsHoveringCategory(val, key, id) {
    return { 
        type: actionTypes.SET_PORTFOLIO_PROJECT_SHOWCASE_PAGE_IS_HOVERING_CATEGORY,
        key: key,
        val: val,
        id: id
    };
};

export function setPortfolioProjectShowcasePageIsHoveringTag(val, key, id) {
    return { 
        type: actionTypes.SET_PORTFOLIO_PROJECT_SHOWCASE_PAGE_IS_HOVERING_TAG,
        key: key,
        val: val,
        id: id
    };
};

export function updateStyleValuesPortfolioProjectShowcasePage(key, obj) {
    return { 
        type: actionTypes.UPDATED_STYLE_VALUES_PORTFOLIO_PROJECT_SHOWCASE_PAGE,
        key: key,
        obj: obj
    };
};

export function updateAnimationForPortfolioProjectShowcasePage(key, val) {
    return { 
        type: actionTypes.UPDATE_ANIMATION_FOR_PORTFOLIO_PROJECT_SHOWCASE_PAGE,
        key: key,
        val: val
    };
};
