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

    fetchAudioPostBlogData: ()=>{},
    fetchBlogNavigationForBlogListStandardPageDataSuccess: ()=>{},
    fetchGalleryPostBlogData: ()=>{},
    fetchLinkPostBlogData: ()=>{},
    fetchPostBlogDataSuccess: ()=>{},
    fetchPrevAndNextPostForBlogListItem: ()=>{},
    fetchQuotePostBlogData: ()=>{},
    fetchStandardPostBlogData: ()=>{},
    fetchVideoPostBlogData: ()=>{},

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
    // blogListStandardPage: Selectors.getBlogListStandardPageState(state),
}

export type MapDispatchToPropsTypes = {
    // fetchStandardPostBlogData: bindActionCreators(Services.fetchStandardPostBlogData, dispatch),
    // fetchGalleryPostBlogData: bindActionCreators(Services.fetchGalleryPostBlogData, dispatch),
    // fetchLinkPostBlogData: bindActionCreators(Services.fetchLinkPostBlogData, dispatch),
    // fetchQuotePostBlogData: bindActionCreators(Services.fetchQuotePostBlogData, dispatch),
    // fetchAudioPostBlogData: bindActionCreators(Services.fetchAudioPostBlogData, dispatch),
    // fetchVideoPostBlogData: bindActionCreators(Services.fetchVideoPostBlogData, dispatch),
    // fetchPostBlogDataSuccess: bindActionCreators(Actions.fetchPostBlogDataSuccess, dispatch),
    // fetchPrevAndNextPostForBlogListItem: bindActionCreators(Services.fetchPrevAndNextPostForBlogListItem, dispatch),
    // fetchBlogNavigationForBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogNavigationForBlogListStandardPageDataSuccess, dispatch),
    // blogPostSingleItemCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogPostSingleItemCategoryIsHoverForBlogListStandardPage, dispatch),
    // setSwiperStateOfBlogPostSingleItemForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateOfBlogPostSingleItemForBlogListStandardPage, dispatch),
    // setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
    // unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
    // clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
    // activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
    // activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
    // activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
    // increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage, dispatch),
    // decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage, dispatch),
    // increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
    // decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
    // clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
    // activateRecentPostForBlogListStandardPage: bindActionCreators(Actions.activateRecentPostForBlogListStandardPage, dispatch),
}