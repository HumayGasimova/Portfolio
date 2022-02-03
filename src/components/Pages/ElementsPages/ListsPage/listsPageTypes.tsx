import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type ListsPageProps = {
    listsPage: GeneralTypes.ListsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchListsPageSection1Data: () => void,
    fetchListsPageSection1DataSuccess: (array: Array<GeneralTypes.ListsPageSectionItem>) => {array: Array<GeneralTypes.ListsPageSectionItem>},
    fetchListsPageSection2Data: () => void,
    fetchListsPageSection2DataSuccess: (array: Array<GeneralTypes.ListsPageSectionItem>) => {array: Array<GeneralTypes.ListsPageSectionItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    listsPage: GeneralTypes.ListsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchListsPageSection1Data: () => void,
    fetchListsPageSection1DataSuccess: (array: Array<GeneralTypes.ListsPageSectionItem>) => {array: Array<GeneralTypes.ListsPageSectionItem>},
    fetchListsPageSection2Data: () => void,
    fetchListsPageSection2DataSuccess: (array: Array<GeneralTypes.ListsPageSectionItem>) => {array: Array<GeneralTypes.ListsPageSectionItem>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean}
}
