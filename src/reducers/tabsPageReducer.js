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
    section1Column1Data: {
        items: [],
        loading: false,
        error: null
    },
    section1Column2Data: {
        items: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    },
    itemsCooradinatesRanges: [
        {
            tabKey: "section1Column1",
            updated: false,
            tabs: [
                {
                    id: 1,
                    updated: false
                },
                {
                    id: 2,
                    updated: false
                },
                {
                    id: 3,
                    updated: false
                }
            ]
        },
        {
            tabKey: "section1Column2",
            updated: false,
            tabs: [
                {
                    id: 1,
                    updated: false
                },
                {
                    id: 2,
                    updated: false
                },
                {
                    id: 3,
                    updated: false
                }
            ]
        },
        {
            tabKey: "section2",
            updated: false,
            tabs: [
                {
                    id: 1,
                    updated: false
                },
                {
                    id: 2,
                    updated: false
                },
                {
                    id: 3,
                    updated: false
                },
                {
                    id: 4,
                    updated: false
                }
            ]
        },
    ],
    tabsUnderlinesStyleValues: {}
}

const fetchTabsPageSection1Column1DataBegin = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchTabsPageSection1Column1DataSuccess = (state, action) => {
    let updateSection1Column1Data = {
        ...state.section1Column1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column1Data: updateSection1Column1Data
    };
}

const fetchTabsPageSection1Column1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Column1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Column1Data: updateSection1Data
    };
}

const fetchTabsPageSection1Column2DataBegin = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection1Column2DataSuccess = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection1Column2DataFailur = (state, action) => {
    let updateSection1Column2Data = {
        ...state.section1Column2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section1Column2Data: updateSection1Column2Data
    };
}

const fetchTabsPageSection2DataBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: true,
        error: null
    };

    return {
        ...state,
       section2Data: updateSection2Data
    };
}

const fetchTabsPageSection2DataSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchTabsPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: [],
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const setIsHoverTabOfSection1Column1TabsPage = (state, action) => {
    let updatedItems = [...state.section1Column1Data.items];
    let item = {
        ...updatedItems
        .find(item => item.id === action.id), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section1Column1Data: {
            ...state.section1Column1Data,
            items: updatedItems
        }
    };
}

const setIsHoverTabOfSection1Column2TabsPage = (state, action) => {
    let updatedItems = [...state.section1Column2Data.items];
    let item = {
        ...updatedItems
        .find(item => item.id === action.id), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section1Column2Data: {
            ...state.section1Column2Data,
            items: updatedItems
        }
    };
}

const setIsHoverTabOfSection2TabsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];
    let item = {
        ...updatedItems
        .find(item => item.id === action.id), isHover: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const setActiveTabOfSection1Column1TabsPage = (state, action) => {
    let updatedItems = [...state.section1Column1Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: "off"
        }
    })

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section1Column1Data: {
            ...state.section1Column1Data,
            items: updatedItems
        }
    };
}

const setActiveTabOfSection1Column2TabsPage = (state, action) => {
    let updatedItems = [...state.section1Column2Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: "off"
        }
    })

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section1Column2Data: {
            ...state.section1Column2Data,
            items: updatedItems
        }
    };
}

const setActiveTabOfSection2TabsPage = (state, action) => {
    let updatedItems = [...state.section2Data.items];

    updatedItems = updatedItems.map(el => {
        return {
            ...el,
            active: "off"
        }
    })

    let item = {
        ...updatedItems
        .find(item => item.id === action.id), active: action.val};

    let itemIndex = updatedItems.findIndex(item => item.id === action.id);
        
    updatedItems.splice(itemIndex, 1, item);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const rememberCoordinateRangeForTabsPage = (state, action) => {
    if(action.coordinatesRanges.length === 0) return state;
    let updatedItemsCooradinatesRanges = [...state.itemsCooradinatesRanges];
    updatedItemsCooradinatesRanges = updatedItemsCooradinatesRanges.map((el, i) => {
        return {
            ...el,
            updated: true
        }
    })
  
    let obj = {...updatedItemsCooradinatesRanges.find(item => item.tabKey === action.key), tabs: action.coordinatesRanges};
    let objIndex = updatedItemsCooradinatesRanges.findIndex(item => item.tabKey === action.key);

    updatedItemsCooradinatesRanges.splice(objIndex, 1, obj);

    return {
        ...state,
        itemsCooradinatesRanges: updatedItemsCooradinatesRanges
    };
}

const initUnderlinesStyleStateForTabsPage = (state, action) => {
    let updatedTabsUnderlinesStyleValues = {};
        action.arr.map((el, i) => {
        let setObj = {
            width: 0,
            translateX: 0,
            transition: 0.45,
            rendered: true
        }
        Object.assign(updatedTabsUnderlinesStyleValues, {[`${el}`]: setObj});
    })
    
    return {
        ...state,
        tabsUnderlinesStyleValues: updatedTabsUnderlinesStyleValues
    };
}

const updateTabsUnderlinesStyleValuesForTabsPage = (state, action) => {
    let updatedTabsUnderlinesStyleValues = {...state.tabsUnderlinesStyleValues}

    switch(action.tabsKey) {
        case 'section1Column1':
            updatedTabsUnderlinesStyleValues['section1Column1'].width = action.obj.width;
            updatedTabsUnderlinesStyleValues['section1Column1'].translateX = action.obj.translateX;
            updatedTabsUnderlinesStyleValues['section1Column1'].transition = action.obj.transition;
            updatedTabsUnderlinesStyleValues['section1Column1'].rendered = action.obj.rendered;
            break;
        case 'section1Column2':
            updatedTabsUnderlinesStyleValues['section1Column2'].width = action.obj.width;
            updatedTabsUnderlinesStyleValues['section1Column2'].translateX = action.obj.translateX;
            updatedTabsUnderlinesStyleValues['section1Column2'].transition = action.obj.transition;
            updatedTabsUnderlinesStyleValues['section1Column2'].rendered = action.obj.rendered;
            break;
        case 'section2':
            updatedTabsUnderlinesStyleValues['section2'].width = action.obj.width;
            updatedTabsUnderlinesStyleValues['section2'].translateX = action.obj.translateX;
            updatedTabsUnderlinesStyleValues['section2'].transition = action.obj.transition;
            updatedTabsUnderlinesStyleValues['section2'].rendered = action.obj.rendered;
            break;
    }
    return {
        ...state,
        tabsUnderlinesStyleValues: updatedTabsUnderlinesStyleValues
    };
}

const tabsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_BEGIN:
            return fetchTabsPageSection1Column1DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_SUCCESS:
            return fetchTabsPageSection1Column1DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_1_DATA_FAILURE:
            return fetchTabsPageSection1Column1DataFailur(state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_BEGIN:
            return fetchTabsPageSection1Column2DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_SUCCESS:
            return fetchTabsPageSection1Column2DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_1_COLUMN_2_DATA_FAILURE:
            return fetchTabsPageSection1Column2DataFailur(state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_BEGIN:
            return fetchTabsPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchTabsPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_TABS_PAGE_SECTION_2_DATA_FAILURE:
            return fetchTabsPageSection2DataFailur(state, action);
        case actionTypes.SET_IS_HOVER_TAB_OF_SECTION_1_COLUMN_1_TABS_PAGE:
            return setIsHoverTabOfSection1Column1TabsPage(state, action);
        case actionTypes.SET_IS_HOVER_TAB_OF_SECTION_1_COLUMN_2_TABS_PAGE:
            return setIsHoverTabOfSection1Column2TabsPage(state, action);
        case actionTypes.SET_IS_HOVER_TAB_OF_SECTION_2_TABS_PAGE:
            return setIsHoverTabOfSection2TabsPage(state, action);
        case actionTypes.SET_ACTIVE_TAB_OF_SECTION_1_COLUMN_1_TABS_PAGE:
            return setActiveTabOfSection1Column1TabsPage(state, action);
        case actionTypes.SET_ACTIVE_TAB_OF_SECTION_1_COLUMN_2_TABS_PAGE:
            return setActiveTabOfSection1Column2TabsPage(state, action);
        case actionTypes.SET_ACTIVE_TAB_OF_SECTION_2_TABS_PAGE:
            return setActiveTabOfSection2TabsPage(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_TABS_PAGE:
            return rememberCoordinateRangeForTabsPage(state, action);
        case actionTypes.INIT_UNDERLINES_STYLE_STATE_FOR_TABS_PAGE:
            return initUnderlinesStyleStateForTabsPage(state, action);
        case actionTypes.UPDATED_TABS_UNDERLINES_STYLE_VALUES_TABS_PAGE:
            return updateTabsUnderlinesStyleValuesForTabsPage(state, action);
        default: 
            return state;
    }
}

export default tabsPageReducer;
