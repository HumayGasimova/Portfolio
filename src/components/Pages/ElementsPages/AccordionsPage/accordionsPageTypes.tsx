import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type AccordionsPageProps = {
    accordionsPage: GeneralTypes.AccordionsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchAccordionsPageSection1Data: () => void,
    fetchAccordionsPageSection1DataSuccess: (array: Array<GeneralTypes.AccordionItemObj>) => {array: Array<GeneralTypes.AccordionItemObj>},
    fetchAccordionsPageSection2Data: () => void,
    fetchAccordionsPageSection2DataSuccess: (array: Array<GeneralTypes.AccordionItemObj>) => {array: Array<GeneralTypes.AccordionItemObj>},
    setActivitySection1ItemAccordionsPage: (val: string, id: number, opt: string) => {val: string, id: number, opt: string},
    setActivitySection2ItemAccordionsPage: (val: string, id: number) => {val: string, id: number},
    setIsHoverSection2ItemAccordionsPage: (val, id) => {val, id},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    accordionsPage: GeneralTypes.AccordionsPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    fetchAccordionsPageSection1Data: () => void,
    fetchAccordionsPageSection1DataSuccess: (array: Array<GeneralTypes.AccordionItemObj>) => {array: Array<GeneralTypes.AccordionItemObj>},
    fetchAccordionsPageSection2Data: () => void,
    fetchAccordionsPageSection2DataSuccess: (array: Array<GeneralTypes.AccordionItemObj>) => {array: Array<GeneralTypes.AccordionItemObj>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setIsHoverSection2ItemAccordionsPage: (val, id) => {val, id},
    setActivitySection1ItemAccordionsPage: (val: string, id: number, opt: string) => {val: string, id: number, opt: string},
    setActivitySection2ItemAccordionsPage: (val: string, id: number) => {val: string, id: number},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
