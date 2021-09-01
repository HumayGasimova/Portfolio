import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../reducers/generalTypes';

export type MainProps = {
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    unmountComp: GeneralTypes.UnmountComponent,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activateMenuItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setArchiveCategory: (category: string) => {category: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string}
}

export type MapStateToPropsTypes = {
    unmountComp: GeneralTypes.UnmountComponent,
    blogListStandardPage: GeneralTypes.BlogListStandardPage
}

export type MapDispatchToPropsTypes = {
    activateMenuItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setArchiveCategory: (category: string) => {category: string},
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string}
}
