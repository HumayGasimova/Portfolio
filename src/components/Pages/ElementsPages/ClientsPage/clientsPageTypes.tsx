import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type CallToActionPageProps = { 
    clientsPage: GeneralTypes.ClientsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchClientsPageSection1Swiper1Data: () => void,
    fetchClientsPageSection1Swiper1DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection1Swiper2Data: () => void,
    fetchClientsPageSection1Swiper2DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection2Swiper1Data: () => void,
    fetchClientsPageSection2Swiper1DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection2Swiper2Data: () => void,
    fetchClientsPageSection2Swiper2DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    setSwiperStateForClientsPageSection1Swiper1: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection1Swiper2: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection2Swiper1: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection2Swiper2: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    clientsPage: GeneralTypes.ClientsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchClientsPageSection1Swiper1Data: () => void,
    fetchClientsPageSection1Swiper1DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection1Swiper2Data: () => void,
    fetchClientsPageSection1Swiper2DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection2Swiper1Data: () => void,
    fetchClientsPageSection2Swiper1DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},
    fetchClientsPageSection2Swiper2Data: () => void,
    fetchClientsPageSection2Swiper2DataSuccess: (array: Array<GeneralTypes.ClientsSectionSwiperItem>) => {array: Array<GeneralTypes.ClientsSectionSwiperItem>},   
    setSwiperStateForClientsPageSection1Swiper1: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection1Swiper2: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection2Swiper1: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setSwiperStateForClientsPageSection2Swiper2: (slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean) => {slides: Array<any>, _slides: Array<any>, activeIndex: number, translate: number, transition: number, rerender: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
