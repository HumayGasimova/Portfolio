import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type BlogListPostCardProps = {
    elData: GeneralTypes.BlogListStandardPageItem,
    history: History,
    location: Location,
    match: match,
    page: string,
    pageData: GeneralTypes.BlogListStandardPage,
    staticContext: undefined,
    activateBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    blogListCardCategoryIsHover: (val: string, cardKey: string, categoryKey: string) => {val: string, cardKey: string, categoryKey: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    increaseTheNumberOfLikes: (cardKey: string) => {cardKey: string},
    clearState: () => void,
    decreaseTheNumberOfLikes: (cardKey: string) => {cardKey: string},
    setCommentsButtonClickedState: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
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
