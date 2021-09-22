import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type ContactFormPageProps = {
    contactFormPage: GeneralTypes.ContactFormPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchGetDirectionContactFormPage: (info: GeneralTypes.DirectionResponseItemObj) => void,
    fetchGetDirectionContactFormPageSuccess: (obj: GeneralTypes.DirectionResponseItemObj) => {obj: GeneralTypes.DirectionResponseItemObj},
    fetchSubmitContactFormPage: (info: GeneralTypes.SubscribeResponseItemObj) => void,
    fetchSubmitContactFormPageSuccess: (obj: GeneralTypes.SubscribeResponseItemObj) => {obj: GeneralTypes.SubscribeResponseItemObj},
    fetchSubscribeContactFormPage: (info: GeneralTypes.SubmitResponseItemObj, history: History) => void,
    fetchSubscribeContactFormPageSuccess: (obj: GeneralTypes.SubmitResponseItemObj) => {obj: GeneralTypes.SubmitResponseItemObj},
    getDirectionContactFormPage: () => {},
    initInputFormForContactFormPage: (opt: string, obj: GeneralTypes.InputForm) => {opt: string, obj: GeneralTypes.InputForm},
    setInputFiledValueAndCheckValidationForContactFormPage: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => {obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string},
    submitContactFormPage: () => {},
    subscribeContactFormPage: () => {},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    contactFormPage: GeneralTypes.ContactFormPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    initInputFormForContactFormPage: (opt: string, obj: GeneralTypes.InputForm) => {opt: string, obj: GeneralTypes.InputForm},
    setInputFiledValueAndCheckValidationForContactFormPage: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => void,
    getDirectionContactFormPage: () => {},
    subscribeContactFormPage: () => {},
    submitContactFormPage: () => {},
    fetchGetDirectionContactFormPage: (info: GeneralTypes.DirectionResponseItemObj) => void,
    fetchGetDirectionContactFormPageSuccess: (obj: GeneralTypes.DirectionResponseItemObj) => {obj: GeneralTypes.DirectionResponseItemObj},
    fetchSubscribeContactFormPage: (info: GeneralTypes.SubmitResponseItemObj, history: History) => void,
    fetchSubscribeContactFormPageSuccess: (obj: GeneralTypes.SubmitResponseItemObj) => {obj: GeneralTypes.SubmitResponseItemObj},
    fetchSubmitContactFormPage: (info: GeneralTypes.SubscribeResponseItemObj) => void,
    fetchSubmitContactFormPageSuccess: (obj: GeneralTypes.SubscribeResponseItemObj) => {obj: GeneralTypes.SubscribeResponseItemObj},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
