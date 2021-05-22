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
    }
}

const fetchCountdownPageSection1DataBegin = (state, action) => {
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

const fetchCountdownPageSection1DataSuccess = (state, action) => {
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

const fetchCountdownPageSection1DataFailur = (state, action) => {
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

const fetchCountdownPageSection2DataBegin = (state, action) => {
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

const fetchCountdownPageSection2DataSuccess = (state, action) => {
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

const fetchCountdownPageSection2DataFailur = (state, action) => {
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

const countdownValueForCountdownPageSection1 = (state, action) => {
    let updatedItems = [...state.section1Data.items];
    let countdownObj = updatedItems.find(item => item.key === action.countdownKey);
    let countdownIndex = updatedItems.find(item => item.key === action.countdownKey);
    let countdownOptionObj = countdownObj.countdownValue.find(item => item.key === action.opt);
    let countdownOptionIndex = countdownObj.countdownValue.findIndex(item => item.key === action.opt);
    
    let obj = {
        ...countdownOptionObj,
        val: Utility.setCountdownTimeVal(action.opt, action.val, countdownObj.nextMonth.month, countdownObj.nextMonth.leapYear)
    }
    if(action.opt === "days" && action.val === 0){
        countdownObj = {
            ...countdownObj, 
            nextMonth: {
                month: Utility.getNextMonth(countdownObj.nextMonth.month),
                leapYear: Utility.isLeapYear(Utility.getDateAndTime("year"))
            }
        }
    }
    countdownObj.countdownValue.splice(countdownOptionIndex, 1, obj);
    updatedItems.splice(countdownIndex, 1, countdownObj);
    
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            items: updatedItems
        }
    };
}

const countdownValueForCountdownPageSection2 = (state, action) => {
    let updatedItems = [...state.section2Data.items];
    let countdownObj = updatedItems.find(item => item.key === action.countdownKey);
    let countdownIndex = updatedItems.find(item => item.key === action.countdownKey);
    let countdownOptionObj = countdownObj.countdownValue.find(item => item.key === action.opt);
    let countdownOptionIndex = countdownObj.countdownValue.findIndex(item => item.key === action.opt);

    let obj = {
        ...countdownOptionObj,
        val: Utility.setCountdownTimeVal(action.opt, action.val, countdownObj.nextMonth.month, countdownObj.nextMonth.leapYear)
    }
    
    if(action.opt === "days" && action.val === 0){
        countdownObj = {
            ...countdownObj, 
            nextMonth: {
                month: Utility.getNextMonth(countdownObj.nextMonth.month),
                leapYear: Utility.isLeapYear(Utility.getDateAndTime("year"))
            }
        }
    }
    
    countdownObj.countdownValue.splice(countdownOptionIndex, 1, obj);
    updatedItems.splice(countdownIndex, 1, countdownObj);
    
    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}

const setCurrentDateAndNextMonthForCountdownPageSection1 = (state, action) => {
    let updatedItems = [...state.section1Data.items];
    let countdownObj = {
        ...updatedItems.find(item => item.key === action.countdownKey),
        startDate: {...action.currentDate},
        nextMonth: {...action.nextMonth}
    }
    let countdownIndex = updatedItems.find(item => item.key === action.countdownKey);

    updatedItems.splice(countdownIndex, 1, countdownObj);
    return {
        ...state,
        section1Data: {
            ...state.section1Data,
            items: updatedItems
        }
    };
}

const setCurrentDateAndNextMonthForCountdownPageSection2 = (state, action) => {
    let updatedItems = [...state.section2Data.items];
    let countdownObj = {
        ...updatedItems.find(item => item.key === action.countdownKey),
        startDate: action.currentDate,
        nextMonth: action.nextMonth
    }
    let countdownIndex = updatedItems.find(item => item.key === action.countdownKey);
    
    updatedItems.splice(countdownIndex, 1, countdownObj);

    return {
        ...state,
        section2Data: {
            ...state.section2Data,
            items: updatedItems
        }
    };
}


const countdownPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_BEGIN:
            return fetchCountdownPageSection1DataBegin (state, action); 
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_SUCCESS:
            return fetchCountdownPageSection1DataSuccess (state, action);
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_FAILURE:
            return fetchCountdownPageSection1DataFailur(state, action);
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_BEGIN:
            return fetchCountdownPageSection2DataBegin (state, action); 
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_SUCCESS:
            return fetchCountdownPageSection2DataSuccess (state, action);
        case actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_FAILURE:
            return fetchCountdownPageSection2DataFailur(state, action);
        case actionTypes.COUNTDOWN_VALUE_FOR_COUNTDOWN_PAGE_SECTION_1:
            return countdownValueForCountdownPageSection1(state, action);
        case actionTypes.COUNTDOWN_VALUE_FOR_COUNTDOWN_PAGE_SECTION_2:
            return countdownValueForCountdownPageSection2(state, action);
        case actionTypes.SET_CURRENT_DATE_AND_NEXT_MONTH_FOR_COUNTDOWN_PAGE_SECTION_1:
            return setCurrentDateAndNextMonthForCountdownPageSection1(state, action);
        case actionTypes.SET_CURRENT_DATE_AND_NEXT_MONTH_FOR_COUNTDOWN_PAGE_SECTION_2:
            return setCurrentDateAndNextMonthForCountdownPageSection2(state, action);
        default: 
            return state;
    }
}

export default countdownPageReducer;
