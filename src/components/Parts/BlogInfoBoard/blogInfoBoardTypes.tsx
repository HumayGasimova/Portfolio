import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogInfoBoardProps = {
    categoryList: Array<GeneralTypes.CategoriesListItem>,
    history: History,
    location: Location,
    match: match, //match<P>
    page: string,
    recentPostsList: RecentPostsListObj,
    tagsList: Array<GeneralTypes.TagsItem>,
    searchResultPagePaginationActivePageId: number,
    searchInputForm: GeneralTypes.InputForm,
    staticContext: undefined,
    activateRecentPost: (postKey: string, postPath: string, val: boolean) => {postKey: string, postPath: string, val: boolean},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearState: () => void,
    fetchBlogRecentPostsData: (page: string) => void,
    fetchFakeData: (array: Array<GeneralTypes.BlogListStandardPageItem & Active>) => {array: Array<GeneralTypes.BlogListStandardPageItem & Active>},
    fetchSearchThroughWebsiteResutData: (info: GeneralTypes.SearchInfoObj, activePageId: number) => {info: GeneralTypes.SearchInfoObj, activePageId: number},
    search: () => void,
    activateBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    initSearchResultPagePagination: (numOfPages: number) => {numOfPages: number},
    fetchSearchThroughWebsiteResutDataSuccess: (obj: GeneralTypes.SearchThroughWebsiteObj) => {obj: GeneralTypes.SearchThroughWebsiteObj},
    activateBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    setInputFiledValueAndCheckValidation: (obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string) => {obj: GeneralTypes.InputForm, e: React.MouseEvent, id: number, formName?: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
}

type RecentPostsListObj = {
    items: Array<GeneralTypes.BlogListStandardPageItem & Active>, 
    loading: boolean, 
    error: any
}

type Active = {
    active: boolean
}

// export interface match<P> {
//     params: P;
//     isExact: boolean;
//     path: string;
//     url: string;
//   }