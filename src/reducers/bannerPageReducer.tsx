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
    section1Data: {
        items: [],
        loading: false,
        error: null
    },
    section2Data: {
        items: [],
        loading: false,
        error: null
    },
    section3Data: {
        items: [],
        loading: false,
        error: null
    },
    section4Data: {
        items: [],
        loading: false,
        error: null
    },
    section5Data: {
        items: [],
        loading: false,
        error: null
    },
    section6Data: {
        items: [],
        loading: false,
        error: null
    },
    section7Data: {
        items: [],
        loading: false,
        error: null
    },
    section8Data: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchBannerPageSection1DataBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchBannerPageSection1DataSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchBannerPageSection1DataFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section1Data: updateSection1Data
    };
}

const fetchBannerPageSection2DataBegin = (state, action) => {
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

const fetchBannerPageSection2DataSuccess = (state, action) => {
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

const fetchBannerPageSection2DataFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section2Data: updateSection2Data
    };
}

const fetchBannerPageSection3DataBegin = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchBannerPageSection3DataSuccess = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchBannerPageSection3DataFailur = (state, action) => {
    let updateSection3Data = {
        ...state.section3Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section3Data: updateSection3Data
    };
}

const fetchBannerPageSection4DataBegin = (state, action) => {
    let updateSection4Data = {
        ...state.section4Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section4Data: updateSection4Data
    };
}

const fetchBannerPageSection4DataSuccess = (state, action) => {
    let updateSection4Data = {
        ...state.section4Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section4Data: updateSection4Data
    };
}

const fetchBannerPageSection4DataFailur = (state, action) => {
    let updateSection4Data = {
        ...state.section4Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section4Data: updateSection4Data
    };
}

const fetchBannerPageSection5DataBegin = (state, action) => {
    let updateSection5Data = {
        ...state.section5Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section5Data: updateSection5Data
    };
}

const fetchBannerPageSection5DataSuccess = (state, action) => {
    let updateSection5Data = {
        ...state.section5Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section5Data: updateSection5Data
    };
}

const fetchBannerPageSection5DataFailur = (state, action) => {
    let updateSection5Data = {
        ...state.section5Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section5Data: updateSection5Data
    };
}

const fetchBannerPageSection6DataBegin = (state, action) => {
    let updateSection6Data = {
        ...state.section6Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section6Data: updateSection6Data
    };
}

const fetchBannerPageSection6DataSuccess = (state, action) => {
    let updateSection6Data = {
        ...state.section6Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section6Data: updateSection6Data
    };
}

const fetchBannerPageSection6DataFailur = (state, action) => {
    let updateSection6Data = {
        ...state.section6Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section6Data: updateSection6Data
    };
}

const fetchBannerPageSection7DataBegin = (state, action) => {
    let updateSection7Data = {
        ...state.section7Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section7Data: updateSection7Data
    };
}

const fetchBannerPageSection7DataSuccess = (state, action) => {
    let updateSection7Data = {
        ...state.section7Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section7Data: updateSection7Data
    };
}

const fetchBannerPageSection7DataFailur = (state, action) => {
    let updateSection7Data = {
        ...state.section7Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section7Data: updateSection7Data
    };
}

const fetchBannerPageSection8DataBegin = (state, action) => {
    let updateSection8Data = {
        ...state.section8Data,
        loading: true,
        error: null
    };

    return {
        ...state,
        section8Data: updateSection8Data
    };
}

const fetchBannerPageSection8DataSuccess = (state, action) => {
    let updateSection8Data = {
        ...state.section8Data,
        loading: false,
        items: action.array
    };
    
    return {
        ...state,
        section8Data: updateSection8Data
    };
}

const fetchBannerPageSection8DataFailur = (state, action) => {
    let updateSection8Data = {
        ...state.section8Data,
        loading: false,
        error: action.err,
        items: []
    };
    return {
        ...state,
        section8Data: updateSection8Data
    };
}

const setBannerPageSection4IsHoveringCategory = (state, action) => {
    let updatedItems = [...state.section4Data.items];

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
        section4Data: {
            ...state.section4Data,
            items: updatedItems
        }
    };
}

const setBannerPageSection6IsHoveringCategory = (state, action) => {
    let updatedItems = [...state.section6Data.items];

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
            section6Data: {
                ...state.section6Data,
                items: updatedItems
            }
        };
}

const setBannerPageSection7IsHoveringCategory = (state, action) => {
    let updatedItems = [...state.section7Data.items];

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
        section7Data: {
            ...state.section6Data,
            items: updatedItems
        }
    };
}

const bannerPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_BANNER_PAGE_SECTION_1_DATA_BEGIN:
            return fetchBannerPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchBannerPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_1_DATA_FAILURE:
            return fetchBannerPageSection1DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_2_DATA_BEGIN:
            return fetchBannerPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchBannerPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_2_DATA_FAILURE:
            return fetchBannerPageSection2DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_3_DATA_BEGIN:
            return fetchBannerPageSection3DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_3_DATA_SUCCESS:
            return fetchBannerPageSection3DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_3_DATA_FAILURE:
            return fetchBannerPageSection3DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_4_DATA_BEGIN:
            return fetchBannerPageSection4DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_4_DATA_SUCCESS:
            return fetchBannerPageSection4DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_4_DATA_FAILURE:
            return fetchBannerPageSection4DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_5_DATA_BEGIN:
            return fetchBannerPageSection5DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_5_DATA_SUCCESS:
            return fetchBannerPageSection5DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_5_DATA_FAILURE:
            return fetchBannerPageSection5DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_6_DATA_BEGIN:
            return fetchBannerPageSection6DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_6_DATA_SUCCESS:
            return fetchBannerPageSection6DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_6_DATA_FAILURE:
            return fetchBannerPageSection6DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_7_DATA_BEGIN:
            return fetchBannerPageSection7DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_7_DATA_SUCCESS:
            return fetchBannerPageSection7DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_7_DATA_FAILURE:
            return fetchBannerPageSection7DataFailur(state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_8_DATA_BEGIN:
            return fetchBannerPageSection8DataBegin (state, action); 
        case actionTypes.FETCH_BANNER_PAGE_SECTION_8_DATA_SUCCESS:
            return fetchBannerPageSection8DataSuccess (state, action);
        case actionTypes.FETCH_BANNER_PAGE_SECTION_8_DATA_FAILURE:
            return fetchBannerPageSection8DataFailur(state, action);
        case actionTypes.SET_BANNER_PAGE_SECTION_4_IS_HOVERING_CATEGORY:
            return setBannerPageSection4IsHoveringCategory(state, action);
        case actionTypes.SET_BANNER_PAGE_SECTION_6_IS_HOVERING_CATEGORY:
            return setBannerPageSection6IsHoveringCategory(state, action);
        case actionTypes.SET_BANNER_PAGE_SECTION_7_IS_HOVERING_CATEGORY:
            return setBannerPageSection7IsHoveringCategory(state, action);
        default: 
            return state;
    }
}

export default bannerPageReducer;
