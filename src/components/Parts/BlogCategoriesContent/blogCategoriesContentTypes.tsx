import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogCategoriesContentProps = {
    page: string,
    blogListStandardPage: GeneralTypes.BlogListStandardPage,
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    activatePageNumberForBlogListStandardPage: (activePageId: number) => {activePageId: number},
    blogListCardCategoryIsHoverForBlogListStandardPage: (val: string, cardKey: string, categoryKey: string) => {val: string, cardKey: string, categoryKey: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    fetchBlogCategoriesContentData: (activePageId: number, page: string, category: string) => void,
    fetchBlogListStandardPageDataSuccess: (array: Array<GeneralTypes.BlogListStandardPageItem>) => {array: Array<GeneralTypes.BlogListStandardPageItem>},
    increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: number) => {cardKey: number},
    initBlogPagination: (numOfPages: number) => {numOfPages: number},
    setCommentsButtonClickedStateForBlogListStandardPage: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setSwiperStateForBlogListStandardPage: (
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
    },
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
    fetchBlogCategoriesContentData: (activePageId: number, page: string, category: string) => void,
    fetchBlogListStandardPageDataSuccess: (array: Array<GeneralTypes.BlogListStandardPageItem>) => {array: Array<GeneralTypes.BlogListStandardPageItem>},
    initBlogPagination: (numOfPages: number) => {numOfPages: number},
    blogListCardCategoryIsHoverForBlogListStandardPage: (val: string, cardKey: string, categoryKey: string) => {val: string, cardKey: string, categoryKey: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    activateListStandardBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateListStandardBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    clearBlogListSingleItemStateForBlogListStandardPage: () => void,
    increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: number) => {cardKey: number},
    decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: (cardKey: string) => {cardKey: string},
    setCommentsButtonClickedStateForBlogListStandardPage: (val: boolean) => {val: boolean},
    activatePageNumberForBlogListStandardPage: (activePageId: number) => {activePageId: number},
    activateListStandardBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    setSwiperStateForBlogListStandardPage: (
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
    },
}
