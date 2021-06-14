import * as React from 'react'
import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type SidebarProps = {
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    history: History,
    location: Location,
    match: match,
    menuItems: Array<GeneralTypes.MenuItemsItem>,
    sidebarState: string,
    staticContext: undefined,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    logoOnClick: (e: React.MouseEvent) => {e: React.MouseEvent},
    setActivityOfToolbarOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setActivityOfToolbarSubOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setHistoryPopFromPortfolioItem: (val: string) => {val: string},
    setIsHoveringMenuItem: (val: string, id: number) => {val: string, id: number},
    setIsHoveringToolbarOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setIsHoveringToolbarSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setSidebarState: (val: string) => {val: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    menuItems: Array<GeneralTypes.MenuItemsItem>,
    blogListStandardPage: GeneralTypes.BlogListStandardPage
}

export type MapDispatchToPropsTypes = {
    setIsHoveringMenuItem: (val: string, id: number) => {val: string, id: number},
    setIsHoveringToolbarOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setIsHoveringToolbarSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setActivityOfToolbarOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setActivityOfToolbarSubOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    setSidebarState: (val: string) => {val: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setHistoryPopFromPortfolioItem: (val: string) => {val: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
}
