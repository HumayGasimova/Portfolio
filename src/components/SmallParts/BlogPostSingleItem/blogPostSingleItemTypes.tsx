import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogPostSingleItem = {
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    history: History,
    location: Location,
    match: match,
    page: string,
    staticContext: undefined,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activateRecentPostForBlogListStandardPage: (postKey: string, postPath: string, val: boolean) => {postKey: string, postPath: string, val: boolean},
    blogPostSingleItemCategoryIsHoverForBlogListStandardPage: (val: string, categoryKey: string) => {val: string, categoryKey: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    fetchAudioPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchGalleryPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchLinkPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchQuotePostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchStandardPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchVideoPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchPostBlogDataSuccess: (obj: GeneralTypes.BlogListStandardPageItem) => {obj: GeneralTypes.BlogListStandardPageItem},
    fetchPrevAndNextPostForBlogListItem: (page: string, currentPostKey: string) => void,
    fetchBlogNavigationForBlogListStandardPageDataSuccess: (array: Array<GeneralTypes.BlogListStandardPageItem>) => {array: Array<GeneralTypes.BlogListStandardPageItem>},
    increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setSwiperStateOfBlogPostSingleItemForBlogListStandardPage: (
        slides: Array<SlidesItem>, 
        _slides: Array<SlidesItem>, 
        activeIndex: number, 
        translate: number, 
        transition: number, 
        rerender: boolean, 
        cardKey?: string
    ) => {
        slides: Array<SlidesItem>, 
        _slides: Array<SlidesItem>, 
        activeIndex: number, 
        translate: number, 
        transition: number, 
        rerender: boolean, 
        cardKey?: string
    }
}

type SlidesItem = {
    alt: string,
    folderName: string,
    id: number,
    imageName: string,
    isHover: string,
    key: string
}

export type MapStateToPropsTypes = {
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
}

export type MapDispatchToPropsTypes = {
    fetchStandardPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchGalleryPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchLinkPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchQuotePostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchAudioPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchVideoPostBlogData: (id: number, info: GeneralTypes.PostBlogData) => void,
    fetchPostBlogDataSuccess: (obj: GeneralTypes.BlogListStandardPageItem) => {obj: GeneralTypes.BlogListStandardPageItem},
    fetchPrevAndNextPostForBlogListItem: (page: string, currentPostKey: string) => void,
    fetchBlogNavigationForBlogListStandardPageDataSuccess: (array: Array<GeneralTypes.BlogListStandardPageItem>) => {array: Array<GeneralTypes.BlogListStandardPageItem>},
    blogPostSingleItemCategoryIsHoverForBlogListStandardPage: (val: string, categoryKey: string) => {val: string, categoryKey: string},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    activateRecentPostForBlogListStandardPage: (postKey: string, postPath: string, val: boolean) => {postKey: string, postPath: string, val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setSwiperStateOfBlogPostSingleItemForBlogListStandardPage: (
        slides: Array<SlidesItem>, 
        _slides: Array<SlidesItem>, 
        activeIndex: number, 
        translate: number, 
        transition: number, 
        rerender: boolean, 
        cardKey?: string
    ) => {
        slides: Array<SlidesItem>, 
        _slides: Array<SlidesItem>, 
        activeIndex: number, 
        translate: number, 
        transition: number, 
        rerender: boolean, 
        cardKey?: string
    }
}
