import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type AboutUsPageProps = {
    archive: GeneralTypes.ArchiveObj,
    historyPopFromItem: string,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    loadMoreArchiveDataSuccess: (array: Array<GeneralTypes.ArchiveItem>) => {array: Array<GeneralTypes.ArchiveItem>},
    loadMoreDisableButtonStateForArchive: (val: boolean) => {val: boolean},
    clearArchiveData: () => void,
    fetchArchive: (category: string, step: number) => void,
    fetchArchiveSuccess: (array: Array<GeneralTypes.ArchiveItem>) => {array: Array<GeneralTypes.ArchiveItem>},
    setArchiveCategory: (category: string) => {category: string},
    setArchiveIsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setArchiveIsHoveringImage: (val: string, id: number) => {val: string, id: number},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    archive: GeneralTypes.ArchiveObj,
    historyPopFromItem: string,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchArchive: (category: string, step: number) => void,
    fetchArchiveSuccess: (array: Array<GeneralTypes.ArchiveItem>) => {array: Array<GeneralTypes.ArchiveItem>},
    loadMoreDisableButtonStateForArchive: (val: boolean) => {val: boolean},
    loadMoreArchiveDataSuccess: (array: Array<GeneralTypes.ArchiveItem>) => {array: Array<GeneralTypes.ArchiveItem>},
    setArchiveCategory: (category: string) => {category: string},
    setArchiveIsHoveringImage: (val: string, id: number) => {val: string, id: number},
    setArchiveIsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    clearArchiveData: () => void,
    setShowBackToTopComponent: (val: boolean) => {val: boolean}
}
