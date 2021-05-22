import * as actionTypes from '../constants/actionTypes';

export function fetchTeamPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchTeamPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchTeamPageSection1DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchTeamPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchTeamPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchTeamPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function fetchTeamPageSection3DataBegin() {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_3_DATA_BEGIN
    };
};

export function fetchTeamPageSection3DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_3_DATA_SUCCESS,
        array: array
    };
};

export function fetchTeamPageSection3DataFailur(err) {
    return { 
        type: actionTypes.FETCH_TEAM_PAGE_SECTION_3_DATA_FAILURE,
        err: err
    };
};
