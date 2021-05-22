import * as actionTypes from '../constants/actionTypes';

export function fetchPortfolioGalleryPageBegin() {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN
    };
};

export function fetchPortfolioGalleryPageSuccess(array) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS,
        array: array
    };
};

export function fetchPortfolioGalleryPageFailur(err) {
    return { 
        type: actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE,
        err: err
    };
};

export function rememberCoordinateRangeForPortfolioGalleryPage(id, coordinateRange) {
    return { 
        type: actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE,
        id: id,
        coordinateRange: coordinateRange
    };
};

export function forgetCoordinateRangeForPortfolioGalleryPage(arr) {
    return { 
        type: actionTypes.FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE,
        arr: arr
    };
};

export function setPortfolioGalleryPageIsHoveringCategory(val, pathOfIds) {
    return { 
        type: actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_CATEGORY,
        val: val,
        pathOfIds: pathOfIds
    };
};

// export function setPortfolioGalleryPageIsHoveringArrow(val, id) {
//     return { 
//         type: actionTypes.SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_ARROW,
//         val: val,
//         id: id
//     };
// };

export function setHistoryPopFromPortfolioItem(val) {
    return { 
        type: actionTypes.SET_HISTORY_POP_FROM_PORTFOLIO_ITEM,
        val: val
    };
};
