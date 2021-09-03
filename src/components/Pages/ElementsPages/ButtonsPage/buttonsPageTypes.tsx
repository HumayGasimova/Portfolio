import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type ButtonsPageProps = {
    buttonsPage: GeneralTypes.ButtonsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchButtonsPageSection1Data: () => void,
    fetchButtonsPageSection1DataSuccess: (array: Array<GeneralTypes.ButtonsItemObj>) => {array: Array<GeneralTypes.ButtonsItemObj>},
    fetchButtonsPageSection2Data: () => void,
    fetchButtonsPageSection2DataSuccess: (array: Array<GeneralTypes.ButtonsItemObj>) => {array: Array<GeneralTypes.ButtonsItemObj>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    buttonsPage: GeneralTypes.ButtonsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchButtonsPageSection1Data: () => void,
    fetchButtonsPageSection1DataSuccess: (array: Array<GeneralTypes.ButtonsItemObj>) => {array: Array<GeneralTypes.ButtonsItemObj>},
    fetchButtonsPageSection2Data: () => void,
    fetchButtonsPageSection2DataSuccess: (array: Array<GeneralTypes.ButtonsItemObj>) => {array: Array<GeneralTypes.ButtonsItemObj>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
