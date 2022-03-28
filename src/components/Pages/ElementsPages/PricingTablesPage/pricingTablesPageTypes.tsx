import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type PricingTablesPageProps = {
    pricingTablesPage: GeneralTypes.PricingTablesPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchPricingTablesPageSection1Data: () => void,
    fetchPricingTablesPageSection1DataSuccess: (array: Array<GeneralTypes.PricingTablesItem>) => {array: Array<GeneralTypes.PricingTablesItem>},
    fetchPricingTablesPageSection2Data: () => void,
    fetchPricingTablesPageSection2DataSuccess: (array: Array<GeneralTypes.PricingTablesItem>) => {array: Array<GeneralTypes.PricingTablesItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    pricingTablesPage: GeneralTypes.PricingTablesPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchPricingTablesPageSection1Data: () => void,
    fetchPricingTablesPageSection1DataSuccess: (array: Array<GeneralTypes.PricingTablesItem>) => {array: Array<GeneralTypes.PricingTablesItem>},
    fetchPricingTablesPageSection2Data:() => void,
    fetchPricingTablesPageSection2DataSuccess: (array: Array<GeneralTypes.PricingTablesItem>) => {array: Array<GeneralTypes.PricingTablesItem>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean}
}
