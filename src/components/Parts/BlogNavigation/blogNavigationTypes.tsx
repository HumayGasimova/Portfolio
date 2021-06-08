
import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogNavigationProps = {
    itemKey: string,
    history: History,
    location: Location,
    match: match,
    page: string,
    data: DataObj,
    fakeData: Array<GeneralTypes.BlogListStandardPageItem>,
    staticContext: undefined,
    activateBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    clearState: () => void,
    fetchBlogNavigationForBlogListStandardPageDataSuccess: (array: Array<GeneralTypes.BlogListStandardPageItem>) => {array: Array<GeneralTypes.BlogListStandardPageItem>},
    fetchPrevAndNextPostForBlogListItem: (page: string, currentPostKey: string) => void,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
}

type DataObj = {
    items: Array<GeneralTypes.BlogListStandardPageItem>, 
    loading: boolean, 
    error: any
}

// export interface match<P> {
//     params: P;
//     isExact: boolean;
//     path: string;
//     url: string;
//   }