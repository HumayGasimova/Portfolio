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
    loadingMoreData: false,
    errorMoreData: null,
    disableLoadMoreButton: false,
    categories: [],
    itemsStyleValues: {},
    arrayOfDisappearAndAppearElements: [],
    loadMoreStep: 1,
    itemsTopPosition: []
}

const fetchTwoColumnsPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchTwoColumnsPageSuccess = (state, action) => {
    // let updatedItemsStyleValues = Utility.getArrayOfEmptyVal(action.array.length);
    // updatedItemsStyleValues.map(el => {

    // })
    // console.log(updatedItemsStyleValues)
    return {
        ...state,
        loading: false,
        items: action.array,
        // itemsStyleValues: updatedItemsStyleValues
    };
}

const fetchTwoColumnsPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const loadMoreTwoColumnsPageDataBegin = (state, action) => {
    return {
        ...state,
        loadingMoreData: true,
        errorMoreData: null
    };
}

const loadMoreTwoColumnsPageDataSuccess = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        // items: action.array
    };
}

const loadMoreTwoColumnsPageDataFailur = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        errorMoreData: action.err,
        items: [...state.items]
    };
}

const loadMoreDisableButtonStateForTwoColumnsPage = (state, action) => {
    return {
        ...state,
        disableLoadMoreButton: action.val
    };
}

const setCategoriesTwoColumnsPage = (state, action) => {
    return {
        ...state,
        categories: action.array
    };
}

const setTwoColumnsPageIsHoveringCategoryFromHeader = (state, action) => {
    let updatedCategories = [...state.categories];
    let categoryObj = {...updatedCategories.find(item => item.id === action.id), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.id === action.id);
    updatedCategories.splice(categoryIndex, 1, categoryObj);
    return {
        ...state,
        categories: updatedCategories
    };
}

const updateItemsStyleValuesTwoColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {...state.itemsStyleValues}
    switch(action.image) {
        case 'img1':
            if(state.itemsStyleValues['img1']){
                updatedItemsStyleValues['img1'].width = action.obj.width;
                updatedItemsStyleValues['img1'].scale = action.obj.scale;
                updatedItemsStyleValues['img1'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img1'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img1'].transition = action.obj.transition;
                updatedItemsStyleValues['img1'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img1'].rendered = action.obj.rendered;
            }
            break;
        case 'img2':
            if(state.itemsStyleValues['img2']){
                updatedItemsStyleValues['img2'].width = action.obj.width;
                updatedItemsStyleValues['img2'].scale = action.obj.scale;
                updatedItemsStyleValues['img2'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img2'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img2'].transition = action.obj.transition;
                updatedItemsStyleValues['img2'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img2'].rendered = action.obj.rendered;
            }
            break;
        case 'img3':
            if(state.itemsStyleValues['img3']){
                updatedItemsStyleValues['img3'].width = action.obj.width;
                updatedItemsStyleValues['img3'].scale = action.obj.scale;
                updatedItemsStyleValues['img3'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img3'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img3'].transition = action.obj.transition;
                updatedItemsStyleValues['img3'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img3'].rendered = action.obj.rendered;
            }
            break;
        case 'img4':
            if(state.itemsStyleValues['img4']){
                updatedItemsStyleValues['img4'].width = action.obj.width;
                updatedItemsStyleValues['img4'].scale = action.obj.scale;
                updatedItemsStyleValues['img4'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img4'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img4'].transition = action.obj.transition;
                updatedItemsStyleValues['img4'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img4'].rendered = action.obj.rendered;
            }
            break;
        case 'img5':
            if(state.itemsStyleValues['img5']){
                updatedItemsStyleValues['img5'].width = action.obj.width;
                updatedItemsStyleValues['img5'].scale = action.obj.scale;
                updatedItemsStyleValues['img5'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img5'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img5'].transition = action.obj.transition;
                updatedItemsStyleValues['img5'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img5'].rendered = action.obj.rendered;
            }
            break;
        case 'img6':
            if(state.itemsStyleValues['img6']){
                updatedItemsStyleValues['img6'].width = action.obj.width;
                updatedItemsStyleValues['img6'].scale = action.obj.scale;
                updatedItemsStyleValues['img6'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img6'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img6'].transition = action.obj.transition;
                updatedItemsStyleValues['img6'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img6'].rendered = action.obj.rendered;
            }
            break;
        case 'img7':
            if(state.itemsStyleValues['img7']){
                updatedItemsStyleValues['img7'].width = action.obj.width;
                updatedItemsStyleValues['img7'].scale = action.obj.scale;
                updatedItemsStyleValues['img7'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img7'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img7'].transition = action.obj.transition;
                updatedItemsStyleValues['img7'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img7'].rendered = action.obj.rendered;
            }
            break;
        case 'img8':
            if(state.itemsStyleValues['img8']){
                updatedItemsStyleValues['img8'].width = action.obj.width;
                updatedItemsStyleValues['img8'].scale = action.obj.scale;
                updatedItemsStyleValues['img8'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img8'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img8'].transition = action.obj.transition;
                updatedItemsStyleValues['img8'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img8'].rendered = action.obj.rendered;
            }
            break;
        case 'img9':
            if(state.itemsStyleValues['img9']){
                updatedItemsStyleValues['img9'].width = action.obj.width;
                updatedItemsStyleValues['img9'].scale = action.obj.scale;
                updatedItemsStyleValues['img9'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img9'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img9'].transition = action.obj.transition;
                updatedItemsStyleValues['img9'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img9'].rendered = action.obj.rendered;
            }
            break;
        case 'img10':
            if(state.itemsStyleValues['img10']){
                updatedItemsStyleValues['img10'].width = action.obj.width;
                updatedItemsStyleValues['img10'].scale = action.obj.scale;
                updatedItemsStyleValues['img10'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img10'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img10'].transition = action.obj.transition;
                updatedItemsStyleValues['img10'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img10'].rendered = action.obj.rendered;
            }
            break;
        case 'img11':
            if(state.itemsStyleValues['img11']){
                updatedItemsStyleValues['img11'].width = action.obj.width;
                updatedItemsStyleValues['img11'].scale = action.obj.scale;
                updatedItemsStyleValues['img11'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img11'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img11'].transition = action.obj.transition;
                updatedItemsStyleValues['img11'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img11'].rendered = action.obj.rendered;
            }
            break;
        case 'img12':
            if(state.itemsStyleValues['img12']){
                updatedItemsStyleValues['img12'].width = action.obj.width;
                updatedItemsStyleValues['img12'].scale = action.obj.scale;
                updatedItemsStyleValues['img12'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img12'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img12'].transition = action.obj.transition;
                updatedItemsStyleValues['img12'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img12'].rendered = action.obj.rendered;
            }
            break;
        case 'img13':
            if(state.itemsStyleValues['img13']){
                updatedItemsStyleValues['img13'].width = action.obj.width;
                updatedItemsStyleValues['img13'].scale = action.obj.scale;
                updatedItemsStyleValues['img13'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img13'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img13'].transition = action.obj.transition;
                updatedItemsStyleValues['img13'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img13'].rendered = action.obj.rendered;
            }
            break;
        case 'img14':
            if(state.itemsStyleValues['img14']){
                updatedItemsStyleValues['img14'].width = action.obj.width;
                updatedItemsStyleValues['img14'].scale = action.obj.scale;
                updatedItemsStyleValues['img14'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img14'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img14'].transition = action.obj.transition;
                updatedItemsStyleValues['img14'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img14'].rendered = action.obj.rendered;
            }
            break;
        case 'img15':
            if(state.itemsStyleValues['img15']){
                updatedItemsStyleValues['img15'].width = action.obj.width;
                updatedItemsStyleValues['img15'].scale = action.obj.scale;
                updatedItemsStyleValues['img15'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img15'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img15'].transition = action.obj.transition;
                updatedItemsStyleValues['img15'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img15'].rendered = action.obj.rendered;
            }
            break;
        case 'img16':
            if(state.itemsStyleValues['img16']){
                updatedItemsStyleValues['img16'].width = action.obj.width;
                updatedItemsStyleValues['img16'].scale = action.obj.scale;
                updatedItemsStyleValues['img16'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img16'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img16'].transition = action.obj.transition;
                updatedItemsStyleValues['img16'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img16'].rendered = action.obj.rendered;
            }
            break;
        case 'img17':
            if(state.itemsStyleValues['img17']){
                updatedItemsStyleValues['img17'].width = action.obj.width;
                updatedItemsStyleValues['img17'].scale = action.obj.scale;
                updatedItemsStyleValues['img17'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img17'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img17'].transition = action.obj.transition;
                updatedItemsStyleValues['img17'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img17'].rendered = action.obj.rendered;
            }
            break;
        case 'img18':
            if(state.itemsStyleValues['img18']){
                updatedItemsStyleValues['img18'].width = action.obj.width;
                updatedItemsStyleValues['img18'].scale = action.obj.scale;
                updatedItemsStyleValues['img18'].translateX = action.obj.translateX;
                updatedItemsStyleValues['img18'].translateY = action.obj.translateY;
                updatedItemsStyleValues['img18'].transition = action.obj.transition;
                updatedItemsStyleValues['img18'].zIndex = action.obj.zIndex;
                updatedItemsStyleValues['img18'].rendered = action.obj.rendered;
            }
            break;
    }
    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues
    };
}


const setActivityOfTwoColumnsPageCategoriesFromHeader = (state, action) => {
    let updatedCategories = [...state.categories];
    updatedCategories = updatedCategories.map(el => {
        return {
            ...el,
            active: false
        }
    })
    let categoryObj = {...updatedCategories.find(item => item.key === action.key), active: true};
    let categoryIndex = updatedCategories.findIndex(item => item.key === action.key);
    updatedCategories.splice(categoryIndex, 1, categoryObj);
    return {
        ...state,
        categories: updatedCategories
    };
}

const initItemsStylesStateForTwoColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {};
        action.arr.map((el, i) => {
        let setObj = {
            width: 0,
            scale: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45,
            zIndex: 0,
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

const addMoreItemsStylesStateForTwoColumnsPage = (state, action) => {
    let updatedItemsStyleValues = {};
    let moreItemsStyleValues = {};
    action.arr.map((el, i) => {
        let setObj = {
            width: 0,
            scale: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45,
            zIndex: 0,
            rendered: true
        }
        Object.assign(moreItemsStyleValues, {[`img${Object.keys(state.itemsStyleValues).length + i + 1}`]: setObj});
    })
    
    updatedItemsStyleValues = {...state.itemsStyleValues, ...moreItemsStyleValues}
 
    let updatedItemsTopPosition = [...state.itemsTopPosition];
    action.arr.map((el, i) => {
        updatedItemsTopPosition.push({
            id: `img${state.itemsTopPosition.length + i + 1}`,
            key: state.items[state.itemsTopPosition.length + i].key,
            topPosition: 0
        })
    });

    return {
        ...state,
        itemsStyleValues: updatedItemsStyleValues,
        itemsTopPosition: updatedItemsTopPosition
    };
}
 
const disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage = (state, action) => {
    return {
        ...state,
        arrayOfDisappearAndAppearElements: action.arr
    };
}
const setLoadMoreStepTwoColumnsPage = (state, action) => {
    return {
        ...state,
        loadMoreStep: action.step
    };
}

const setTopPositionOfTheItemForTwoColumnsPage = (state, action) => {
    let updatedItemsTopPosition = [...state.itemsTopPosition];

    let obj = {...updatedItemsTopPosition.find(item => item.id === action.id), topPosition: action.val};
    let objIndex = updatedItemsTopPosition.findIndex(item => item.id === action.id);

    updatedItemsTopPosition.splice(objIndex, 1, obj);

    return {
        ...state,
        itemsTopPosition: updatedItemsTopPosition
    };
}

const twoColumnsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_BEGIN:
            return fetchTwoColumnsPageBegin (state, action); 
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_SUCCESS:
            return fetchTwoColumnsPageSuccess (state, action);
        case actionTypes.FETCH_TWO_COLUMNS_PAGE_FAILURE:
            return fetchTwoColumnsPageFailur(state, action);
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_BEGIN:
            return loadMoreTwoColumnsPageDataBegin (state, action); 
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_SUCCESS:
            return loadMoreTwoColumnsPageDataSuccess (state, action);
        case actionTypes.LOAD_MORE_TWO_COLUMNS_PAGE_FAILURE:
            return loadMoreTwoColumnsPageDataFailur(state, action);
        case actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_TWO_COLUMNS_PAGE:
            return loadMoreDisableButtonStateForTwoColumnsPage(state, action);
        case actionTypes.SET_CATEGORIES_TWO_COLUMNS_PAGE:
            return setCategoriesTwoColumnsPage(state, action);
        case actionTypes.SET_TWO_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER:
            return setTwoColumnsPageIsHoveringCategoryFromHeader(state, action);
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_TWO_COLUMNS_PAGE:
            return updateItemsStyleValuesTwoColumnsPage(state, action);
        case actionTypes.SET_ACTIVITY_OF_TWO_COLUMNS_PAGE_CATEGORIES_FROM_HEADER:
            return setActivityOfTwoColumnsPageCategoriesFromHeader(state, action);
        case actionTypes.INIT_ITEMS_STYLES_STATE_FOR_TWO_COLUMNS_PAGE:
            return initItemsStylesStateForTwoColumnsPage(state, action);
        case actionTypes.ADD_MORE_ITEMS_STYLES_STATE_FOR_TWO_COLUMNS_PAGE:
            return addMoreItemsStylesStateForTwoColumnsPage(state, action);
        case actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY_TWO_COLUMNS_PAGE:
            return disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage(state, action);
        case actionTypes.SET_LOAD_MORE_STEP_TWO_COLUMNS_PAGE:
            return setLoadMoreStepTwoColumnsPage(state, action);
        case actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_TWO_COLUMNS_PAGE:
            return setTopPositionOfTheItemForTwoColumnsPage(state, action);
        default: 
            return state;
    }
}

export default twoColumnsPageReducer;
