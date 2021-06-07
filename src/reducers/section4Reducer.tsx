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
    statisticsData: {
        items: [],
        loading: false,
        error: null
    },
    achievementsData: {
        items: [],
        loading: false,
        error: null
    }
}

const fetchStatisticsDataBegin = (state, action) => {
    let updatedStatisticsData = {
        ...state.statisticsData, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

const fetchStatisticsDataSuccess = (state, action) => {   
    let updatedStatisticsData = {
        ...state.statisticsData, 
        items: action.array,
        loading: false,
    } 
    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

const fetchStatisticsDataFailur = (state, action) => {
    let updatedStatisticsData = {
        ...state.statisticsData, 
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        statisticsData: updatedStatisticsData
    };
}

const fetchAchievementsDataBegin = (state, action) => {
    let updateAchievementsData = {
        ...state.teamInformation, 
        loading: true, 
        error: null
    }

    return {
        ...state,
        achievementsData: updateAchievementsData
    };
}

const fetchAchievementsDataSuccess = (state, action) => {   
    let updateAchievementsData = {
        ...state.teamInformation, 
        items: action.array,
        loading: false
    } 
    return {
        ...state,
        achievementsData: updateAchievementsData
    };
}

const fetchAchievementsDataFailur = (state, action) => {
    let updateAchievementsData = {
        items: [],
        loading: false, 
        error: action.err
    }
    return {
        ...state,
        achievementsData: updateAchievementsData
    };
}

const section4Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_STATISTICS_DATA_BEGIN:
            return fetchStatisticsDataBegin (state, action); 
        case actionTypes.FETCH_STATISTICS_DATA_SUCCESS:
            return fetchStatisticsDataSuccess (state, action);
        case actionTypes.FETCH_STATISTICS_DATA_FAILURE:
            return fetchStatisticsDataFailur(state, action);
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_BEGIN:
            return fetchAchievementsDataBegin (state, action); 
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_SUCCESS:
            return fetchAchievementsDataSuccess (state, action);
        case actionTypes.FETCH_ACHIEVEMENTS_DATA_FAILURE:
            return fetchAchievementsDataFailur(state, action);
        default: 
            return state;
    }
}

export default section4Reducer;
