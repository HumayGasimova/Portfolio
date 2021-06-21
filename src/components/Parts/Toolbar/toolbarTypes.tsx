import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type ToolbarProps = {
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    menuItems: Array<GeneralTypes.MenuItemsItem>,
    page: string,
    sidebarState: string,
    style: string,
    toolbarMainColor: string,
    scrollingUp: boolean | null,
    unmountComp: GeneralTypes.UnmountComponent,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    initMenuItems: (array: Array<GeneralTypes.MenuItemsItem>) => {array: Array<GeneralTypes.MenuItemsItem>},
    setActivityOfToolbarOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setActivityOfToolbarSubOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setHistoryPopFromPortfolioItem: (val: string) => {val: string},
    setIsHoveringMenuItem: (val: string, id: number) => {val: string, id: number},
    setIsHoveringToolbarOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setIsHoveringToolbarSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setSidebarState: (val: string) => {val: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    menuItems: Array<GeneralTypes.MenuItemsItem>,
    sidebarState: string,
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    unmountComp: GeneralTypes.UnmountComponent,
}

export type MapDispatchToPropsTypes = {
    initMenuItems: (array: Array<GeneralTypes.MenuItemsItem>) => {array: Array<GeneralTypes.MenuItemsItem>},
    setIsHoveringMenuItem: (val: string, id: number) => {val: string, id: number},
    setIsHoveringToolbarOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setIsHoveringToolbarSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setActivityOfToolbarOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setActivityOfToolbarSubOptionItem: (pathOfIds: Array<number>) => {pathOfIds: Array<number>},
    setSidebarState: (val: string) => {val: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setHistoryPopFromPortfolioItem: (val: string) => {val: string},
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
}
