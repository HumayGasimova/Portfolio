import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type DropcapsPageProps = {
    dropcapsPage: GeneralTypes.DropcapsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchDropcapsPageData: () => void,
    fetchDropcapsPageDataSuccess: (array: Array<GeneralTypes.DropcapsPageItem>) => {array: Array<GeneralTypes.DropcapsPageItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    dropcapsPage: GeneralTypes.DropcapsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchDropcapsPageData: () => void,
    fetchDropcapsPageDataSuccess: (array: Array<GeneralTypes.DropcapsPageItem>) => {array: Array<GeneralTypes.DropcapsPageItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
