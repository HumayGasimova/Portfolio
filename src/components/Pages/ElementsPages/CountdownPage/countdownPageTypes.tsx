import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type CountdownPageProps = {
    countdownPage: GeneralTypes.CountdownPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    countdownValueForCountdownPageSection1: (countdownKey: string, opt: string, val: number) => {countdownKey: string, opt: string, val: number},
    countdownValueForCountdownPageSection2: (countdownKey: string, opt: string, val: number) => {countdownKey: string, opt: string, val: number},
    fetchCountdownPageSection1Data: () => void,
    fetchCountdownPageSection1DataSuccess: (array: Array<GeneralTypes.CountdownPageSectionItem>) => {array: Array<GeneralTypes.CountdownPageSectionItem>},
    fetchCountdownPageSection2Data: () => void,
    fetchCountdownPageSection2DataSuccess: (array: Array<GeneralTypes.CountdownPageSectionItem>) => {array: Array<GeneralTypes.CountdownPageSectionItem>},
    setCurrentDateAndNextMonthForCountdownPageSection1: (countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj) => {countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj},
    setCurrentDateAndNextMonthForCountdownPageSection2: (countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj) => {countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    countdownPage: GeneralTypes.CountdownPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchCountdownPageSection1Data: () => void,
    fetchCountdownPageSection1DataSuccess: (array: Array<GeneralTypes.CountdownPageSectionItem>) => {array: Array<GeneralTypes.CountdownPageSectionItem>},
    fetchCountdownPageSection2Data: () => void,
    fetchCountdownPageSection2DataSuccess: (array: Array<GeneralTypes.CountdownPageSectionItem>) => {array: Array<GeneralTypes.CountdownPageSectionItem>},
    countdownValueForCountdownPageSection1: (countdownKey: string, opt: string, val: number) => {countdownKey: string, opt: string, val: number},
    countdownValueForCountdownPageSection2: (countdownKey: string, opt: string, val: number) => {countdownKey: string, opt: string, val: number},
    setCurrentDateAndNextMonthForCountdownPageSection1: (countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj) => {countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj},
    setCurrentDateAndNextMonthForCountdownPageSection2: (countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj) => {countdownKey: string, currentDate: GeneralTypes.CountdownPageDateObj, nextMonth: GeneralTypes.CountdownPageNextMonthObj},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
