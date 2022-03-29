import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type ProgressBarPageProps = {
    progressBarPage: GeneralTypes.ProgressBarPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchProgressBarPageSection1Column1Data: () => void,
    fetchProgressBarPageSection1Column1DataSuccess:(array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    fetchProgressBarPageSection1Column2Data: () => void,
    fetchProgressBarPageSection1Column2DataSuccess: (array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    fetchProgressBarPageSection2Data: () => void,
    fetchProgressBarPageSection2DataSuccess: (array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    progressBarPage: GeneralTypes.ProgressBarPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchProgressBarPageSection1Column1Data: () => void,
    fetchProgressBarPageSection1Column1DataSuccess:(array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    fetchProgressBarPageSection1Column2Data: () => void,
    fetchProgressBarPageSection1Column2DataSuccess: (array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    fetchProgressBarPageSection2Data: () => void,
    fetchProgressBarPageSection2DataSuccess: (array: Array<GeneralTypes.ProgressBarItem>) => {array: Array<GeneralTypes.ProgressBarItem>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean}
}
