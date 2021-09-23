import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type CountersPageProps = {
    countersPage: GeneralTypes.CountersPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchCountersPageSection1Data: () => void,
    fetchCountersPageSection1DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    fetchCountersPageSection2Data: () => void,
    fetchCountersPageSection2DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    fetchCountersPageSection3Data: () => void,
    fetchCountersPageSection3DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    countersPage: GeneralTypes.CountersPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchCountersPageSection1Data: () => void,
    fetchCountersPageSection1DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    fetchCountersPageSection2Data: () => void,
    fetchCountersPageSection2DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    fetchCountersPageSection3Data: () => void,
    fetchCountersPageSection3DataSuccess: (array: Array<GeneralTypes.CountersPageSectionItem>) => {array: Array<GeneralTypes.CountersPageSectionItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
