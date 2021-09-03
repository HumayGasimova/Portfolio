import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type PortfolioGalleryProps = {
    archive: GeneralTypes.ArchiveObj,
    historyPopFromItem: string,
    showBackToTop: boolean,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    portfolioGalleryPage: GeneralTypes.PortfolioGalleryPageState,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    clearArchiveData: () => void,
    fetchPortfolioGalleryPage: () => void,
    fetchPortfolioGalleryPageSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    forgetCoordinateRangeForPortfolioGalleryPage: (arr: Array<GeneralTypes.ItemsCoordinateRange>) => {arr: Array<GeneralTypes.ItemsCoordinateRange>},
    rememberCoordinateRangeForPortfolioGalleryPage: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setPortfolioGalleryPageIsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    portfolioGalleryPage: GeneralTypes.PortfolioGalleryPageState,
    historyPopFromItem: string,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    archive: GeneralTypes.ArchiveObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchPortfolioGalleryPage: () => void,
    fetchPortfolioGalleryPageSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    rememberCoordinateRangeForPortfolioGalleryPage: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    forgetCoordinateRangeForPortfolioGalleryPage: (arr: Array<GeneralTypes.ItemsCoordinateRange>) => {arr: Array<GeneralTypes.ItemsCoordinateRange>},
    setPortfolioGalleryPageIsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    clearArchiveData: () => void,
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
