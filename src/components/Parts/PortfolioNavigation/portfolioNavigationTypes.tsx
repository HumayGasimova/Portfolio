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
    
    galleryPage: {items: Array(0), loading: false, error: null}
    galleryWithSpacePage: {items: Array(0), loading: false, error: null}
   
    metroPage: {items: Array(0), loading: false, error: null, itemsStyleValues: {…}, itemsTopPosition: Array(0)}
    overlayPage: {items: Array(0), loading: false, error: null}
    overlayWithInfoPage: {items: Array(0), loading: false, error: null}
    pinterest3ColumnsPage: {items: Array(0), loading: false, error: null, itemsStyleValues: {…}, itemsTopPosition: Array(0)}
    portfolioGalleryPage: {items: Array(18), loading: false, error: null, itemsCoordinateRange: Array(18)}
    simpleOverlayPage: {items: Array(0), loading: false, error: null}
    slideFromImageLeftPage: {items: Array(0), loading: false, error: null}
   
    standardPage: {items: Array(0), loading: false, error: null}
    stoneWallPage: {items: Array(0), loading: false, error: null, itemsStyleValues: {…}, itemsTopPosition: Array(0)}
    stoneWallWidePage: {items: Array(0), loading: false, error: null, itemsStyleValues: {…}, itemsTopPosition: Array(0)}
    switchImagePage: {items: Array(0), loading: false, error: null, itemsCoordinateRange: Array(18)}
    
    
    unmountComp: {state: false, gotoPage: "", prevPage: undefined}

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
