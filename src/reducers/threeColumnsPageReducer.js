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

const fetchThreeColumnsPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchThreeColumnsPageSuccess = (state, action) => {
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

const fetchThreeColumnsPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const loadMoreThreeColumnsPageDataBegin = (state, action) => {
    return {
        ...state,
        loadingMoreData: true,
        errorMoreData: null
    };
}

const loadMoreThreeColumnsPageDataSuccess = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        // items: action.array
    };
}

const loadMoreThreeColumnsPageDataFailur = (state, action) => {
    return {
        ...state,
        loadingMoreData: false,
        errorMoreData: action.err,
        items: [...state.items]
    };
}

const loadMoreDisableButtonStateForThreeColumnsPage = (state, action) => {
    return {
        ...state,
        disableLoadMoreButton: action.val
    };
}

const setCategoriesThreeColumnsPage = (state, action) => {
    return {
        ...state,
        categories: action.array
    };
}

const setThreeColumnsPageIsHoveringCategoryFromHeader = (state, action) => {
    let updatedCategories = [...state.categories];
    let categoryObj = {...updatedCategories.find(item => item.id === action.id), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.id === action.id);
    updatedCategories.splice(categoryIndex, 1, categoryObj);
    return {
        ...state,
        categories: updatedCategories
    };
}

const updateItemsStyleValuesThreeColumnsPage = (state, action) => {
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


const setActivityOfThreeColumnsPageCategoriesFromHeader = (state, action) => {
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

const initItemsStylesStateForThreeColumnsPage = (state, action) => {
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

const addMoreItemsStylesStateForThreeColumnsPage = (state, action) => {
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
    });
    
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
 
const disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage = (state, action) => {
    return {
        ...state,
        arrayOfDisappearAndAppearElements: action.arr
    };
}

const setLoadMoreStepThreeColumnsPage = (state, action) => {
    return {
        ...state,
        loadMoreStep: action.step
    };
}

const setTopPositionOfTheItemForThreeColumnsPage = (state, action) => {
    let updatedItemsTopPosition = [...state.itemsTopPosition];

    let obj = {...updatedItemsTopPosition.find(item => item.id === action.id), topPosition: action.val};
    let objIndex = updatedItemsTopPosition.findIndex(item => item.id === action.id);

    updatedItemsTopPosition.splice(objIndex, 1, obj);

    return {
        ...state,
        itemsTopPosition: updatedItemsTopPosition
    };
}

const threeColumnsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_THREE_COLUMNS_PAGE_BEGIN:
            return fetchThreeColumnsPageBegin (state, action); 
        case actionTypes.FETCH_THREE_COLUMNS_PAGE_SUCCESS:
            return fetchThreeColumnsPageSuccess (state, action);
        case actionTypes.FETCH_THREE_COLUMNS_PAGE_FAILURE:
            return fetchThreeColumnsPageFailur(state, action);
        case actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_BEGIN:
            return loadMoreThreeColumnsPageDataBegin (state, action); 
        case actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_SUCCESS:
            return loadMoreThreeColumnsPageDataSuccess (state, action);
        case actionTypes.LOAD_MORE_THREE_COLUMNS_PAGE_FAILURE:
            return loadMoreThreeColumnsPageDataFailur(state, action);
        case actionTypes.LOAD_MORE_DISABLE_BUTTON_STATE_FOR_THREE_COLUMNS_PAGE:
            return loadMoreDisableButtonStateForThreeColumnsPage(state, action);
        case actionTypes.SET_CATEGORIES_THREE_COLUMNS_PAGE:
            return setCategoriesThreeColumnsPage(state, action);
        case actionTypes.SET_THREE_COLUMNS_PAGE_IS_HOVERING_CATEGORY_FROM_HEADER:
            return setThreeColumnsPageIsHoveringCategoryFromHeader(state, action);
        case actionTypes.UPDATED_ITEMS_STYLE_VALUES_THREE_COLUMNS_PAGE:
            return updateItemsStyleValuesThreeColumnsPage(state, action);
        case actionTypes.SET_ACTIVITY_OF_THREE_COLUMNS_PAGE_CATEGORIES_FROM_HEADER:
            return setActivityOfThreeColumnsPageCategoriesFromHeader(state, action);
        case actionTypes.INIT_ITEMS_STYLES_STATE_FOR_THREE_COLUMNS_PAGE:
            return initItemsStylesStateForThreeColumnsPage(state, action);
        case actionTypes.ADD_MORE_ITEMS_STYLES_STATE_FOR_THREE_COLUMNS_PAGE:
            return addMoreItemsStylesStateForThreeColumnsPage(state, action);
        case actionTypes.DISAPPEARANCE_AND_APPEARANCE_OF_ELEMENTS_DUE_TO_THE_CATEGORY_THREE_COLUMNS_PAGE:
            return disappearenceAndAppearanceOfElementsDueToTheCategoryThreeColumnsPage(state, action);
        case actionTypes.SET_LOAD_MORE_STEP_THREE_COLUMNS_PAGE:
            return setLoadMoreStepThreeColumnsPage(state, action);
        case actionTypes.SET_TOP_POSITION_OF_THE_ITEM_FOR_THREE_COLUMNS_PAGE:
            return setTopPositionOfTheItemForThreeColumnsPage(state, action);
        default: 
            return state;
    }
}

export default threeColumnsPageReducer;
