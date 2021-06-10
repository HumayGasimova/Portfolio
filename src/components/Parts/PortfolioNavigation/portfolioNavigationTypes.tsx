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

    addMoreItemsStylesStateForFourColumnsPage: ƒ ()
    addMoreItemsStylesStateForThreeColumnsPage: ƒ ()
    addMoreItemsStylesStateForTwoColumnsPage: ƒ ()
    fetchArchive: ƒ ()
    fetchArchiveSuccess: ƒ ()
    fetchFiveColumnsWidePage: ƒ ()
    fetchFiveColumnsWidePageSuccess: ƒ ()
    fetchFourColumnsPage: ƒ ()
    fetchFourColumnsPageSuccess: ƒ ()
    fetchFourColumnsWidePage: ƒ ()
    fetchFourColumnsWidePageSuccess: ƒ ()
    fetchGalleryPage: ƒ ()
    fetchGalleryPageSuccess: ƒ ()
    fetchGalleryWithSpacePage: ƒ ()
    fetchGalleryWithSpacePageSuccess: ƒ ()
    fetchMetroPage: ƒ ()
    fetchMetroPageSuccess: ƒ ()
    fetchOverlayPage: ƒ ()
    fetchOverlayPageSuccess: ƒ ()
    fetchOverlayWithInfoPage: ƒ ()
    fetchOverlayWithInfoPageSuccess: ƒ ()
    fetchPinterest3ColumnsPage: ƒ ()
    fetchPinterest3ColumnsPageSuccess: ƒ ()
    fetchPortfolioGalleryPage: ƒ ()
    fetchPortfolioGalleryPageSuccess: ƒ ()
    fetchSimpleOverlayPage: ƒ ()
    fetchSimpleOverlayPageSuccess: ƒ ()
    fetchSlideFromImageLeftPage: ƒ ()
    fetchSlideFromImageLeftPageSuccess: ƒ ()
    fetchStandardPage: ƒ ()
    fetchStandardPageSuccess: ƒ ()
    fetchStoneWallPage: ƒ ()
    fetchStoneWallPageSuccess: ƒ ()
    fetchStoneWallWidePage: ƒ ()
    fetchStoneWallWidePageSuccess: ƒ ()
    fetchSwitchImagePage: ƒ ()
    fetchSwitchImagePageSuccess: ƒ ()
    fetchThreeColumnsPage: ƒ ()
    fetchThreeColumnsPageSuccess: ƒ ()
    fetchThreeColumnsWidePage: ƒ ()
    fetchThreeColumnsWidePageSuccess: ƒ ()
    fetchTwoColumnsPage: ƒ ()
    fetchTwoColumnsPageSuccess: ƒ ()
    fetchTwoColumnsWidePage: ƒ ()
    fetchTwoColumnsWidePageSuccess: ƒ ()
    initItemsStylesStateForFourColumnsPage: ƒ ()
    initItemsStylesStateForMetroPage: ƒ ()
    initItemsStylesStateForPinterest3ColumnsPage: ƒ ()
    initItemsStylesStateForStoneWallPage: ƒ ()
    initItemsStylesStateForStoneWallWidePage: ƒ ()
    initItemsStylesStateForThreeColumnsPage: ƒ ()
    initItemsStylesStateForTwoColumnsPage: ƒ ()
    loadMoreDisableButtonStateForArchive: ƒ ()
    loadMoreDisableButtonStateForFourColumnsPage: ƒ ()
    loadMoreDisableButtonStateForThreeColumnsPage: ƒ ()
    loadMoreDisableButtonStateForTwoColumnsPage: ƒ ()
    loadMoreFourColumnsPageSuccess: ƒ ()
    loadMoreThreeColumnsPageSuccess: ƒ ()
    loadMoreTwoColumnsPageSuccess: ƒ ()
    portfolioNavigationOnClickStart: ƒ ()
    setArchiveCategory: ƒ ()
    setCategoriesFourColumnsPage: ƒ ()
    setCategoriesThreeColumnsPage: ƒ ()
    setCategoriesTwoColumnsPage: ƒ ()
    setHistoryPopFromPortfolioItem: ƒ ()
    setTopPositionOfTheItemForFourColumnsPage: ƒ ()
    setTopPositionOfTheItemForThreeColumnsPage: ƒ ()
    setTopPositionOfTheItemForTwoColumnsPage: ƒ ()
    updateItemsStyleValuesFourColumnsPage: ƒ ()
    updateItemsStyleValuesThreeColumnsPage: ƒ ()
    updateItemsStyleValuesTwoColumnsPage: ƒ ()
}

