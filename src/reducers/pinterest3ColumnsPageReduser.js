/**
 * Constants
 */

import * as actionTypes from "../constants/actionTypes";

/**
 * Utility
 */

import * as Utility from "../utility";
import uuid from "uuid";

/**
 * Initial State
 */

export const initialState = {
    items: [],
    loading: false,
    error: null,
    itemsStyleValues: {},
    itemsTopPosition: []
}

const fetchPinterest3ColumnsPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPinterest3ColumnsPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchPinterest3ColumnsPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const setPinterest3ColumnsPageIsHoveringCategory = (state, action) => {
    let updatedItems = [...state.items];

    let category = {
        ...updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .find(item => item.id === action.pathOfIds[1]), isHover: action.val};

    let categoryIndex = updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .findIndex(item => item.id === action.pathOfIds[1]);
        
        updatedItems
        .find(item => item.id === action.pathOfIds[0]).categories
        .splice(categoryIndex, 1, category);

    return {
        ...state,
        items: updatedItems
    };
}

const initItemsStylesStateForPinterest3ColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {};
        action.arr.map((el, i) => {
        let setObj = {
            width: 0,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45,
            rendered: true
        }
        Object.assign(updatedItemsStyleValues, {[`img${i + 1}`]: setObj});
    })

    let updatedItemsTopPosition = [];
    updatedItemsTopPosition = action.arr.map((el, i) => {
        return {
            id: `img${i + 1}`,
            key: state.items[i].key,
            topPosition: 0
        }
    })

    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues,
        itemsTopPosition: updatedItemsTopPosition
    };
}

const updateItemsStyleValuesPinterest3ColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {...state.itemsStyleValues}
    switch(action.image) {
        case 'img1':
            updatedItemsStyleValues['img1'].width = action.obj.width;
            updatedItemsStyleValues['img1'].height = action.obj.height;
            updatedItemsStyleValues['img1'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img1'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img1'].transition = action.obj.transition;
            break;
        case 'img2':
            updatedItemsStyleValues['img2'].width = action.obj.width;
            updatedItemsStyleValues['img2'].height = action.obj.height;
            updatedItemsStyleValues['img2'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img2'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img2'].transition = action.obj.transition;
            break;
        case 'img3':
            updatedItemsStyleValues['img3'].width = action.obj.width;
            updatedItemsStyleValues['img3'].height = action.obj.height;
            updatedItemsStyleValues['img3'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img3'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img3'].transition = action.obj.transition;
            break;
        case 'img4':
            updatedItemsStyleValues['img4'].width = action.obj.width;
            updatedItemsStyleValues['img4'].height = action.obj.height;
            updatedItemsStyleValues['img4'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img4'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img4'].transition = action.obj.transition;
            break;
        case 'img5':
            updatedItemsStyleValues['img5'].width = action.obj.width;
            updatedItemsStyleValues['img5'].height = action.obj.height;
            updatedItemsStyleValues['img5'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img5'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img5'].transition = action.obj.transition;
            break;
        case 'img6':
            updatedItemsStyleValues['img6'].width = action.obj.width;
            updatedItemsStyleValues['img6'].height = action.obj.height;
            updatedItemsStyleValues['img6'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img6'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img6'].transition = action.obj.transition;
            break;
        case 'img7':
            updatedItemsStyleValues['img7'].width = action.obj.width;
            updatedItemsStyleValues['img7'].height = action.obj.height;
            updatedItemsStyleValues['img7'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img7'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img7'].transition = action.obj.transition;
            break;
        case 'img8':
            updatedItemsStyleValues['img8'].width = action.obj.width;
            updatedItemsStyleValues['img8'].height = action.obj.height;
            updatedItemsStyleValues['img8'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img8'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img8'].transition = action.obj.transition;
            break;
        case 'img9':
            updatedItemsStyleValues['img9'].width = action.obj.width;
            updatedItemsStyleValues['img9'].height = action.obj.height;
            updatedItemsStyleValues['img9'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img9'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img9'].transition = action.obj.transition;
            break;
        case 'img10':
            updatedItemsStyleValues['img10'].width = action.obj.width;
            updatedItemsStyleValues['img10'].height = action.obj.height;
            updatedItemsStyleValues['img10'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img10'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img10'].transition = action.obj.transition;
            break;
        case 'img11':
            updatedItemsStyleValues['img11'].width = action.obj.width;
            updatedItemsStyleValues['img11'].height = action.obj.height;
            updatedItemsStyleValues['img11'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img11'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img11'].transition = action.obj.transition;
            break;
        case 'img12':
            updatedItemsStyleValues['img12'].width = action.obj.width;
            updatedItemsStyleValues['img12'].height = action.obj.height;
            updatedItemsStyleValues['img12'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img12'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img12'].transition = action.obj.transition;
            break;
        case 'img13':
            updatedItemsStyleValues['img13'].width = action.obj.width;
            updatedItemsStyleValues['img13'].height = action.obj.height;
            updatedItemsStyleValues['img13'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img13'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img13'].transition = action.obj.transition;
            break;
        case 'img14':
            updatedItemsStyleValues['img14'].width = action.obj.width;
            updatedItemsStyleValues['img14'].height = action.obj.height;
            updatedItemsStyleValues['img14'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img14'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img14'].transition = action.obj.transition;
            break;
        case 'img15':
            updatedItemsStyleValues['img15'].width = action.obj.width;
            updatedItemsStyleValues['img15'].height = action.obj.height;
            updatedItemsStyleValues['img15'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img15'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img15'].transition = action.obj.transition;
            break;
    }
    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues
    };
}

const setTopPositionOfTheItemForPinterest3ColumnsPage = (state, action) => {
    let updatedItemsTopPosition = [...state.itemsTopPosition];

    let obj = {...updatedItemsTopPosition.find(item => item.id === action.id), topPosition: action.val};
    let objIndex = updatedItemsTopPosition.findIndex(item => item.id === action.id);

    updatedItemsTopPosition.splice(objIndex, 1, obj);

    return {
        ...state,
        itemsTopPosition: updatedItemsTopPosition
    };
}

const pinterest3ColumnsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_BEGIN:
            return fetchPinterest3ColumnsPageBegin (state, action); 
        case actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_SUCCESS:
            return fetchPinterest3ColumnsPageSuccess (state, action);
        case actionTypes.FETCH_PINTEREST_3_COLUMNS_PAGE_FAILURE:
            return fetchPinterest3ColumnsPageFailur(state, action);
        case actionTypes.SET_PINTEREST_3_COLUMNS_PAGE_IS_HOVERING_CATEGORY:
            return setPinterest3ColumnsPageIsHoveringCategory(state, action);
        case actionTypes.INIT_ITEMS_STYLES_STATE_FOR_PINTEREST_3_COLUMNS_PAGE:
            return initItemsStylesStateForPinterest3ColumnsPage(state, action);
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_PINTEREST_3_COLUMNS_PAGE:
            return updateItemsStyleValuesPinterest3ColumnsPage(state, action);
        case actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_PINTEREST_3_COLUMNS_PAGE:
            return setTopPositionOfTheItemForPinterest3ColumnsPage(state, action);
        default: 
            return state;
    }
}

export default pinterest3ColumnsPageReducer;
