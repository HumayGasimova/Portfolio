import * as actionTypes from '../constants/actionTypes';

type AchievementsData = {
    id: number,
    achievement: string,
    number: number
}

export function fetchStatisticsDataBegin() {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_BEGIN
    };
};

export function fetchStatisticsDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_SUCCESS,
        array: array
    };
};

export function fetchStatisticsDataFailur(err) {
    return { 
        type: actionTypes.FETCH_STATISTICS_DATA_FAILURE,
        err: err
    };
};

export function fetchAchievementsDataBegin() {
    return { 
        type: actionTypes.FETCH_ACHIEVEMENTS_DATA_BEGIN
    };
};

export function fetchAchievementsDataSuccess(array: Array<AchievementsData>) {
    return { 
        type: actionTypes.FETCH_ACHIEVEMENTS_DATA_SUCCESS,
        array: array
    };
};

export function fetchAchievementsDataFailur(err) {
    return { 
        type: actionTypes.FETCH_ACHIEVEMENTS_DATA_FAILURE,
        err: err
    };
};
