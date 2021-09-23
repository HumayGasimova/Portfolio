import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type HightlightsPageProps = {
    highlightsPage: GeneralTypes.HighlightsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchHighlightsPageData: () => void,
    fetchHighlightsPageDataSuccess: (array: Array<GeneralTypes.HighlightsPageItem>) => {array: Array<GeneralTypes.HighlightsPageItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    highlightsPage: GeneralTypes.HighlightsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchHighlightsPageData: () => void,
    fetchHighlightsPageDataSuccess: (array: Array<GeneralTypes.HighlightsPageItem>) => {array: Array<GeneralTypes.HighlightsPageItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
