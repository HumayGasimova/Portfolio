import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type PorfolioNavigationProps = {
    archive: GeneralTypes.ArchiveObj,
    bigImagesPortfolio: GeneralTypes.PortfoliObj,
    bigSliderPortfolio: GeneralTypes.PortfoliObj,
    galleryPortfolio: GeneralTypes.PortfoliObj,
    smallGalleryPortfolio: GeneralTypes.PortfoliObj,
    smallImagesPortfolio: GeneralTypes.PortfoliObj,
    smallSliderPortfolio: GeneralTypes.PortfoliObj,
    component: string,
    twoColumnsPage: GeneralTypes.ColumnsPageObj,
    threeColumnsPage: GeneralTypes.ColumnsPageObj,
    fourColumnsPage: GeneralTypes.ColumnsPageObj,
    twoColumnsWidePage: GeneralTypes.ColumnsWidePageObj,
    threeColumnsWidePage: GeneralTypes.ColumnsWidePageObj,
    fourColumnsWidePage: GeneralTypes.ColumnsWidePageObj,
    fiveColumnsWidePage: GeneralTypes.ColumnsWidePageObj,
    overlayPage: GeneralTypes.ColumnsWidePageObj,
    overlayWithInfoPage: GeneralTypes.ColumnsWidePageObj,
    simpleOverlayPage: GeneralTypes.ColumnsWidePageObj,
    slideFromImageLeftPage: GeneralTypes.ColumnsWidePageObj,
    switchImagePage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsCoordinateRange>,
    standardPage: GeneralTypes.ColumnsWidePageObj,
    galleryPage: GeneralTypes.ColumnsWidePageObj,
    galleryWithSpacePage: GeneralTypes.ColumnsWidePageObj,
    stoneWallPage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsStyleValuesObj> & Array<GeneralTypes.ItemsTopPositionItem>,
    stoneWallWidePage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsStyleValuesObj> & Array<GeneralTypes.ItemsTopPositionItem>,
    metroPage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsStyleValuesObj> & Array<GeneralTypes.ItemsTopPositionItem>,
    pinterest3ColumnsPage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsStyleValuesObj> & Array<GeneralTypes.ItemsTopPositionItem>,
    portfolioGalleryPage: GeneralTypes.ColumnsWidePageObj & Array<GeneralTypes.ItemsCoordinateRange>,
    unmountComp: GeneralTypes.UnmountComponent,
    staticContext: undefined
    history: History,
    location: Location,
    match: match,
    addMoreItemsStylesStateForFourColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    addMoreItemsStylesStateForThreeColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    addMoreItemsStylesStateForTwoColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    fetchArchive: (category: string, step: number) => void,
    fetchArchiveSuccess: (array: Array<GeneralTypes.ArchiveItem>) => {array: Array<GeneralTypes.ArchiveItem>},
    fetchFiveColumnsWidePage: () => void,
    fetchFiveColumnsWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchFourColumnsPage: (step: number, category: string, screenWidth: number, numOfItemsInArray: number, itemsStyleValuesObj: Array<GeneralTypes.ItemsStyleValuesObj>) => void,
    fetchFourColumnsPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchFourColumnsWidePage: () => void,
    fetchFourColumnsWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchGalleryPage: () => void,
    fetchGalleryPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchGalleryWithSpacePage: () => void,
    fetchGalleryWithSpacePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchMetroPage: () => void,
    fetchMetroPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchOverlayPage: () => void,
    fetchOverlayPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchOverlayWithInfoPage: () => void,
    fetchOverlayWithInfoPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchPinterest3ColumnsPage: () => void,
    fetchPinterest3ColumnsPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchPortfolioGalleryPage: () => void,
    fetchPortfolioGalleryPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchSimpleOverlayPage: () => void,
    fetchSimpleOverlayPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchSlideFromImageLeftPage: () => void,
    fetchSlideFromImageLeftPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchStandardPage: () => void,
    fetchStandardPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchStoneWallPage: () => void,
    fetchStoneWallPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchStoneWallWidePage: () => void,
    fetchStoneWallWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchSwitchImagePage: () => void,
    fetchSwitchImagePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchThreeColumnsPage: (step: number, category: string, screenWidth: number, numOfItemsInArray: number, itemsStyleValuesObj: Array<GeneralTypes.ItemsStyleValuesObj>) => void,
    fetchThreeColumnsPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchThreeColumnsWidePage: () => void,
    fetchThreeColumnsWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchTwoColumnsPage: (step: number, category: string, screenWidth: number, numOfItemsInArray: number, itemsStyleValuesObj: Array<GeneralTypes.ItemsStyleValuesObj>) => void,
    fetchTwoColumnsPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    fetchTwoColumnsWidePage: () => void,
    fetchTwoColumnsWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>},
    initItemsStylesStateForFourColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForMetroPage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForPinterest3ColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForStoneWallPage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForStoneWallWidePage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForThreeColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    initItemsStylesStateForTwoColumnsPage: (arr: Array<number>) => {arr: Array<number>},
    loadMoreDisableButtonStateForArchive: (val: boolean) => {val: boolean},
    loadMoreDisableButtonStateForFourColumnsPage: (val: boolean) => {val: boolean},
    loadMoreDisableButtonStateForThreeColumnsPage: (val: boolean) => {val: boolean},
    loadMoreDisableButtonStateForTwoColumnsPage: (val: boolean) => {val: boolean},
    loadMoreFourColumnsPageSuccess: () => {},
    loadMoreThreeColumnsPageSuccess: () => {},
    loadMoreTwoColumnsPageSuccess: () => {},
    portfolioNavigationOnClickStart: () => {},
    setArchiveCategory: (category: string) => {category: string},
    setCategoriesFourColumnsPage: (array: Array<GeneralTypes.CategoriesItem>) => {array: Array<GeneralTypes.CategoriesItem>},
    setCategoriesThreeColumnsPage: (array: Array<GeneralTypes.CategoriesItem>) => {array: Array<GeneralTypes.CategoriesItem>},
    setCategoriesTwoColumnsPage: (array: Array<GeneralTypes.CategoriesItem>) => {array: Array<GeneralTypes.CategoriesItem>},
    setHistoryPopFromPortfolioItem: (val: string) => {val: string},
    setTopPositionOfTheItemForFourColumnsPage: (id: string, val: number) => {id: string, val: number},
    setTopPositionOfTheItemForThreeColumnsPage: (id: string, val: number) => {id: string, val: number},
    setTopPositionOfTheItemForTwoColumnsPage: (id: string, val: number) => {id: string, val: number},
    updateItemsStyleValuesFourColumnsPage: (image: string, obj: GeneralTypes.ItemsStyleValuesObj) => {image: string, obj: GeneralTypes.ItemsStyleValuesObj},
    updateItemsStyleValuesThreeColumnsPage: (image: string, obj: GeneralTypes.ItemsStyleValuesObj) => {image: string, obj: GeneralTypes.ItemsStyleValuesObj},
    updateItemsStyleValuesTwoColumnsPage: (image: string, obj: GeneralTypes.ItemsStyleValuesObj) => {image: string, obj: GeneralTypes.ItemsStyleValuesObj}
}
