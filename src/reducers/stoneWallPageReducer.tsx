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

const fetchStoneWallPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchStoneWallPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchStoneWallPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const initItemsStylesStateForStoneWallPage = (state, action) => {
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

const updateItemsStyleValuesStoneWallPage = (state, action) => {
    let updatedItemsStyleValues = {...state.itemsStyleValues}
    switch(action.image) {
        case 'img1':
            updatedItemsStyleValues['img1'].width = action.obj.width;
            updatedItemsStyleValues['img1'].height = action.obj.height;
            updatedItemsStyleValues['img1'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img1'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img1'].transition = action.obj.transition;
            updatedItemsStyleValues['img1'].rendered = action.obj.rendered;
            break;
        case 'img2':
            updatedItemsStyleValues['img2'].width = action.obj.width;
            updatedItemsStyleValues['img2'].height = action.obj.height;
            updatedItemsStyleValues['img2'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img2'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img2'].transition = action.obj.transition;
            updatedItemsStyleValues['img2'].rendered = action.obj.rendered;
            break;
        case 'img3':
            updatedItemsStyleValues['img3'].width = action.obj.width;
            updatedItemsStyleValues['img3'].height = action.obj.height;
            updatedItemsStyleValues['img3'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img3'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img3'].transition = action.obj.transition;
            updatedItemsStyleValues['img3'].rendered = action.obj.rendered;
            break;
        case 'img4':
            updatedItemsStyleValues['img4'].width = action.obj.width;
            updatedItemsStyleValues['img4'].height = action.obj.height;
            updatedItemsStyleValues['img4'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img4'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img4'].transition = action.obj.transition;
            updatedItemsStyleValues['img4'].rendered = action.obj.rendered;
            break;
        case 'img5':
            updatedItemsStyleValues['img5'].width = action.obj.width;
            updatedItemsStyleValues['img5'].height = action.obj.height;
            updatedItemsStyleValues['img5'].translateX = action.obj.translateX;
            updatedItemsStyleValues['img5'].translateY = action.obj.translateY;
            updatedItemsStyleValues['img5'].transition = action.obj.transition;
            updatedItemsStyleValues['img5'].rendered = action.obj.rendered;
            break;
    }
    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues
    };
}

const setTopPositionOfTheItemForStoneWallPage = (state, action) => {
    let updatedItemsTopPosition = [...state.itemsTopPosition];

    let obj = {...updatedItemsTopPosition.find(item => item.id === action.id), topPosition: action.val};
    let objIndex = updatedItemsTopPosition.findIndex(item => item.id === action.id);

    updatedItemsTopPosition.splice(objIndex, 1, obj);

    return {
        ...state,
        itemsTopPosition: updatedItemsTopPosition
    };
}

const stoneWallPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STONE_WALL_PAGE_BEGIN:
            return fetchStoneWallPageBegin (state, action); 
        case actionTypes.FETCH_STONE_WALL_PAGE_SUCCESS:
            return fetchStoneWallPageSuccess (state, action);
        case actionTypes.FETCH_STONE_WALL_PAGE_FAILURE:
            return fetchStoneWallPageFailur(state, action);
        case actionTypes.INIT_ITEMS_STYLES_STATE_FOR_STONE_WALL_PAGE:
            return initItemsStylesStateForStoneWallPage(state, action);
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_STONE_WALL_PAGE:
            return updateItemsStyleValuesStoneWallPage(state, action);
        case actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_STONE_WALL_PAGE:
            return setTopPositionOfTheItemForStoneWallPage(state, action);
        default: 
            return state;
    }
}

export default stoneWallPageReducer;
