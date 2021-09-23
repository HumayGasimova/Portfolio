import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type IconWithTextPageProps = {
    iconWithTextPage: GeneralTypes.IconWithPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchIconWithTextPageSection1Data: () => void,
    fetchIconWithTextPageSection1DataSuccess: (array: Array<GeneralTypes.IconWithPageSectionitem>) => {array: Array<GeneralTypes.IconWithPageSectionitem>},
    fetchIconWithTextPageSection2Data: () => void,
    fetchIconWithTextPageSection2DataSuccess: (array: Array<GeneralTypes.IconWithPageSectionitem>) => {array: Array<GeneralTypes.IconWithPageSectionitem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    iconWithTextPage: GeneralTypes.IconWithPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchIconWithTextPageSection1Data: () => void,
    fetchIconWithTextPageSection1DataSuccess: (array: Array<GeneralTypes.IconWithPageSectionitem>) => {array: Array<GeneralTypes.IconWithPageSectionitem>},
    fetchIconWithTextPageSection2Data: () => void,
    fetchIconWithTextPageSection2DataSuccess: (array: Array<GeneralTypes.IconWithPageSectionitem>) => {array: Array<GeneralTypes.IconWithPageSectionitem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
