import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type PortfolioProjectShowcasePageProps = {
    portfolioProjectShowcasePage: GeneralTypes.PortfolioProjectShowcasePageState,
    photoViewerForPortfolioProjectShowcaseOpen: boolean,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchPortfolioProjectShowcasePageData: () => void,
    fetchPortfolioProjectShowcasePageDataSuccess: (array: Array<GeneralTypes.PortfolioProjectShowcaseItem>) => {array: Array<GeneralTypes.PortfolioProjectShowcaseItem>},
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setPortfolioProjectShowcasePageIsHoveringCategory: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    setPortfolioProjectShowcasePageIsHoveringTag: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    updateAnimationForPortfolioProjectShowcasePage: (key: string, val: boolean) => {key: string, val: boolean},
    updateStyleValuesPortfolioProjectShowcasePage: (key: string, obj: GeneralTypes.PortfolioProjectShowcaseItemBgImageStyleObj) => {key: string, obj: GeneralTypes.PortfolioProjectShowcaseItemBgImageStyleObj},
    fetchPieChartsPageSection1Data: () => void,
    fetchPieChartsPageSection1DataSuccess: (array: Array<GeneralTypes.PieChartsPageSectionItem>) => {array: Array<GeneralTypes.PieChartsPageSectionItem>},
    fetchPieChartsPageSection2Data:() => void,
    fetchPieChartsPageSection2DataSuccess: (array: Array<GeneralTypes.PieChartsPageSectionItem>) => {array: Array<GeneralTypes.PieChartsPageSectionItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    portfolioProjectShowcasePage: GeneralTypes.PortfolioProjectShowcasePageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    photoViewerForPortfolioProjectShowcaseOpen: boolean,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchPortfolioProjectShowcasePageData: () => void,
    fetchPortfolioProjectShowcasePageDataSuccess: (array: Array<GeneralTypes.PortfolioProjectShowcaseItem>) => {array: Array<GeneralTypes.PortfolioProjectShowcaseItem>},    
    setPortfolioProjectShowcasePageIsHoveringCategory: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    setPortfolioProjectShowcasePageIsHoveringTag: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    updateStyleValuesPortfolioProjectShowcasePage: (key: string, obj: GeneralTypes.PortfolioProjectShowcaseItemBgImageStyleObj) => {key: string, obj: GeneralTypes.PortfolioProjectShowcaseItemBgImageStyleObj},
    updateAnimationForPortfolioProjectShowcasePage: (key: string, val: boolean) => {key: string, val: boolean},
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
