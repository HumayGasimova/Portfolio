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
    fetchFiveColumnsWidePageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>}
    fetchFourColumnsPage: (step: number, category: string, screenWidth: number, numOfItemsInArray: number, itemsStyleValuesObj: Array<GeneralTypes.ItemsStyleValuesObj>) => void
    fetchFourColumnsPageSuccess: (array: Array<GeneralTypes.ColumnsPageObjItem>) => {array: Array<GeneralTypes.ColumnsPageObjItem>}
    fetchFourColumnsWidePage: () => {}
    fetchFourColumnsWidePageSuccess: () => {}
    fetchGalleryPage: () => {}
    fetchGalleryPageSuccess: () => {}
    fetchGalleryWithSpacePage: () => {}
    fetchGalleryWithSpacePageSuccess: () => {}
    fetchMetroPage: () => {}
    fetchMetroPageSuccess: () => {}
    fetchOverlayPage: () => {}
    fetchOverlayPageSuccess: () => {}
    fetchOverlayWithInfoPage: () => {}
    fetchOverlayWithInfoPageSuccess: () => {}
    fetchPinterest3ColumnsPage: () => {}
    fetchPinterest3ColumnsPageSuccess: () => {}
    fetchPortfolioGalleryPage: () => {}
    fetchPortfolioGalleryPageSuccess: () => {}
    fetchSimpleOverlayPage: () => {}
    fetchSimpleOverlayPageSuccess: () => {}
    fetchSlideFromImageLeftPage: () => {}
    fetchSlideFromImageLeftPageSuccess: () => {}
    fetchStandardPage: () => {}
    fetchStandardPageSuccess: () => {}
    fetchStoneWallPage: () => {}
    fetchStoneWallPageSuccess: () => {}
    fetchStoneWallWidePage: () => {}
    fetchStoneWallWidePageSuccess: () => {}
    fetchSwitchImagePage: () => {}
    fetchSwitchImagePageSuccess: () => {}
    fetchThreeColumnsPage: () => {}
    fetchThreeColumnsPageSuccess: () => {}
    fetchThreeColumnsWidePage: () => {}
    fetchThreeColumnsWidePageSuccess: () => {}
    fetchTwoColumnsPage: () => {}
    fetchTwoColumnsPageSuccess: () => {}
    fetchTwoColumnsWidePage: () => {}
    fetchTwoColumnsWidePageSuccess: () => {}
    initItemsStylesStateForFourColumnsPage: () => {}
    initItemsStylesStateForMetroPage: () => {}
    initItemsStylesStateForPinterest3ColumnsPage: () => {}
    initItemsStylesStateForStoneWallPage: () => {}
    initItemsStylesStateForStoneWallWidePage: () => {}
    initItemsStylesStateForThreeColumnsPage: () => {}
    initItemsStylesStateForTwoColumnsPage: () => {}
    loadMoreDisableButtonStateForArchive: () => {}
    loadMoreDisableButtonStateForFourColumnsPage: () => {}
    loadMoreDisableButtonStateForThreeColumnsPage: () => {}
    loadMoreDisableButtonStateForTwoColumnsPage: () => {}
    loadMoreFourColumnsPageSuccess: () => {}
    loadMoreThreeColumnsPageSuccess: () => {}
    loadMoreTwoColumnsPageSuccess: () => {}
    portfolioNavigationOnClickStart: () => {}
    setArchiveCategory: () => {}
    setCategoriesFourColumnsPage: () => {}
    setCategoriesThreeColumnsPage: () => {}
    setCategoriesTwoColumnsPage: () => {}
    setHistoryPopFromPortfolioItem: () => {}
    setTopPositionOfTheItemForFourColumnsPage: () => {}
    setTopPositionOfTheItemForThreeColumnsPage: () => {}
    setTopPositionOfTheItemForTwoColumnsPage: () => {}
    updateItemsStyleValuesFourColumnsPage: () => {}
    updateItemsStyleValuesThreeColumnsPage: () => {}
    updateItemsStyleValuesTwoColumnsPage: () => {}
}

