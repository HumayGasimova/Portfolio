import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type SearchResultPageProps = {
    searchResultPage: GeneralTypes.SearchResultPageState,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined
    searchThroughWebsite: () => void,
    setInputFiledValueAndCheckValidationThroughWebsite: (obj: GeneralTypes.InputForm, _event: React.MouseEvent, inputFieldId: number, formName?: string) => {obj: GeneralTypes.InputForm, _event: React.MouseEvent, inputFieldId: number, formName?: string},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activatePageNumberForSearchResultPage: (activePageId: number) => {activePageId: number},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    fetchSearchThroughWebsiteResutData: (info: GeneralTypes.SearchInfoObj, activePageId: number) => void,
    fetchSearchThroughWebsiteResutDataSuccess: (obj: GeneralTypes.SearchThroughWebsiteObj) => {obj: GeneralTypes.SearchThroughWebsiteObj},
    initSearchInputFormThroughWebsite: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    initSearchResultPagePagination: (numOfPages: number) => {numOfPages: number}
}

export type MapStateToPropsTypes = {
    searchResultPage: GeneralTypes.SearchResultPageState,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    initSearchInputFormThroughWebsite: (obj: GeneralTypes.InputForm) => {obj: GeneralTypes.InputForm},
    fetchSearchThroughWebsiteResutData: (info: GeneralTypes.SearchInfoObj, activePageId: number) => void,
    setInputFiledValueAndCheckValidationThroughWebsite: (obj: GeneralTypes.InputForm, _event: React.MouseEvent, inputFieldId: number, formName?: string) => {obj: GeneralTypes.InputForm, _event: React.MouseEvent, inputFieldId: number, formName?: string},
    searchThroughWebsite: () => void,
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => void,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activatePageNumberForSearchResultPage: (activePageId: number) => {activePageId: number},
    fetchSearchThroughWebsiteResutDataSuccess: (obj: GeneralTypes.SearchThroughWebsiteObj) => {obj: GeneralTypes.SearchThroughWebsiteObj},
    initSearchResultPagePagination: (numOfPages: number) => {numOfPages: number},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
}
