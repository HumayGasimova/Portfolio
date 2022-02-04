import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type PieChartsPageProps = {
    pieChartsPage: GeneralTypes.PieChartsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
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
    pieChartsPage: GeneralTypes.PieChartsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchPieChartsPageSection1Data: () => void,
    fetchPieChartsPageSection1DataSuccess: (array: Array<GeneralTypes.PieChartsPageSectionItem>) => {array: Array<GeneralTypes.PieChartsPageSectionItem>},
    fetchPieChartsPageSection2Data:() => void,
    fetchPieChartsPageSection2DataSuccess: (array: Array<GeneralTypes.PieChartsPageSectionItem>) => {array: Array<GeneralTypes.PieChartsPageSectionItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
