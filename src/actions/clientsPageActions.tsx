import * as actionTypes from '../constants/actionTypes';

export function fetchClientsPageSection1Swiper1DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_BEGIN
    };
};

export function fetchClientsPageSection1Swiper1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection1Swiper1DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_1_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection1Swiper2DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_BEGIN
    };
};

export function fetchClientsPageSection1Swiper2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection1Swiper2DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_1_SWIPER_2_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection2Swiper1DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_BEGIN
    };
};

export function fetchClientsPageSection2Swiper1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection2Swiper1DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_1_DATA_FAILURE,
        err: err
    };
};

export function fetchClientsPageSection2Swiper2DataBegin() {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_BEGIN
    };
};

export function fetchClientsPageSection2Swiper2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchClientsPageSection2Swiper2DataFailur(err) {
    return {
        type: actionTypes.FETCH_CLIENTS_PAGE_SECTION_2_SWIPER_2_DATA_FAILURE,
        err: err
    };
};

export function setSwiperStateForClientsPageSection1Swiper1(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_1,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForClientsPageSection1Swiper2(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_1_SWIPER_2,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForClientsPageSection2Swiper1(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_1,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function setSwiperStateForClientsPageSection2Swiper2(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_CLIENTS_PAGE_SECTION_2_SWIPER_2,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};
