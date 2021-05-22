/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './porfolioNavigation.scss';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import * as Utility from '../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * PorfolioNavigation component definition and export
 */

export const PorfolioNavigation = (props) => {

    /**
     * State
     */
   
    const size = useWindowSize();
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringMenuButton, setIsHoveringMenuButton] = useState("init");
    const [key, setKey] = useState("");
    const [page, setPage] = useState("");
    const [category, setCategory] = useState("");

    /**
     * Methods
     */

    useEffect(() => {
        /**
         * Fetch data in accordance with the page and category (if the page
         * was archive) that were previously rendered in the location history
         */ 

        let page = props.location.state ? props.location.state.page : props.unmountComp.prevPage;
        let category = props.location.state ? props.location.state.category : Utility.categoryKeyToPath(props.archive.category);

        setPage(page);
        setCategory(category);
        fetchContentItems(page, category);
      
        /**
         * Remember the fetched data key to return (history action pop) to the part
         * of the screen where the link to the selected item is located
         */ 

        let key;
     
        switch(props.component){
            case 'bigImages':
                key = props.bigImagesPortfolio.item.key
                break; 
            case 'bigSlider':
                key = props.bigSliderPortfolio.item.key
                break; 
            case 'gallery':
                key = props.galleryPortfolio.item.key
                break; 
            case 'smallGallery':
                key = props.smallGalleryPortfolio.item.key
                break; 
            case 'smallImages':
                key = props.smallImagesPortfolio.item.key
                break; 
            case 'smallSlider':
                key = props.smallSliderPortfolio.item.key
                break; 
        }
        props.setHistoryPopFromPortfolioItem(key);
        setKey(key);
    }, []);

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("on");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("on");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("off");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("off");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("off");
                break;
        }
    }
    
    const fetchContentItems = (page, category) => {
        // Fetch data according to the page we came from

        let itemsFromLocalStorage;

        switch(page){
            case 'portfolioGallery':
                if(props.portfolioGalleryPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)

                        props.fetchPortfolioGalleryPageSuccess(FakeData.portfolioGallery);
                    }else{
                        // Fetch data (required to run -> npm run server)

                        props.fetchPortfolioGalleryPage();
                    }
                }
                break;
            case 'archive':
                if(props.archive.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        let updatedCategory = category;
                        let categoryToArray = updatedCategory.split("");
                        let indexOfSlash = categoryToArray.findIndex(item => item === "-");
                        if(indexOfSlash !== -1){
                            categoryToArray.splice(indexOfSlash, 1)
                            let lowerToUpperCase = categoryToArray[indexOfSlash].toUpperCase();
                            categoryToArray.splice(indexOfSlash, 1, lowerToUpperCase);
                            updatedCategory = categoryToArray.join("");
                        }
                      
                        let archiveObj = {...FakeData.archive.find(item => item.category === updatedCategory)};
                        let takeItems = 1 * 4;
                        
                        if(takeItems > archiveObj.archiveData.length){
                            archiveObj.disableLoadMoreButton = true;
                        }else{
                            archiveObj.archiveData = archiveObj.archiveData.slice(0, takeItems)
                        }
                        
                        props.fetchArchiveSuccess(archiveObj.archiveData);
                        props.setArchiveCategory(archiveObj.category);
                        props.loadMoreDisableButtonStateForArchive(archiveObj.disableLoadMoreButton);
        
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchArchive(category, 1);
                    }
                }
                break;
            case 'switchImagePage':
                if(props.switchImagePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchSwitchImagePageSuccess(FakeData.switchImagePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchSwitchImagePage();
                    }
                }
                break;
            case 'simpleOverlayPage':
                if(props.simpleOverlayPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchSimpleOverlayPageSuccess(FakeData.simpleOverlayPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchSimpleOverlayPage();
                    }
                }
                break;
            case 'slideFromImageLeftPage':
                if(props.slideFromImageLeftPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchSlideFromImageLeftPageSuccess(FakeData.slideFromImageLeftPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchSlideFromImageLeftPage();
                    }
                }
                break;
            case 'overlayPage':
                if(props.overlayPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchOverlayPageSuccess(FakeData.overlayPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchOverlayPage();
                    }
                }
                break;
            case 'overlayWithInfoPage':
                if(props.overlayWithInfoPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchOverlayWithInfoPageSuccess(FakeData.overlayWithInfoPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchOverlayWithInfoPage();
                    }
                }
                break;
            case 'standardPage':
                if(props.standardPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchStandardPageSuccess(FakeData.standardPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchStandardPage();
                    }
                }
                break;
            case 'galleryPage':
                if(props.galleryPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchGalleryPageSuccess(FakeData.galleryPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchGalleryPage();
                    }
                }
                break;
            case 'galleryWithSpacePage':
                if(props.galleryWithSpacePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchGalleryWithSpacePageSuccess(FakeData.galleryWithSpacePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchGalleryWithSpacePage();
                    }
                }
                break;
            case 'stoneWallPage':
                if(props.stoneWallPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchStoneWallPageSuccess(FakeData.stoneWallPage);
                        let itemsState = Utility.getArrayOfEmptyVal(FakeData.stoneWallPage.length);
                        props.initItemsStylesStateForStoneWallPage(itemsState);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchStoneWallPage();
                    }
                }
                break;
            case 'stoneWallWidePage':
                if(props.stoneWallWidePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchStoneWallWidePageSuccess(FakeData.stoneWallWidePage);
                        let itemsState = Utility.getArrayOfEmptyVal(FakeData.stoneWallWidePage.length);
                        props.initItemsStylesStateForStoneWallWidePage(itemsState);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchStoneWallWidePage();
                    }
                }
                break;
            case 'metroPage':
                if(props.metroPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchMetroPageSuccess(FakeData.metroPage);
                        let itemsState = Utility.getArrayOfEmptyVal(FakeData.metroPage.length);
                        props.initItemsStylesStateForMetroPage(itemsState);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchMetroPage();
                    }
                }
                break;
            case 'pinterest3ColumnsPage':
                if(props.pinterest3ColumnsPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchPinterest3ColumnsPageSuccess(FakeData.pinterest3ColumnsPage);
                        let itemsState = Utility.getArrayOfEmptyVal(FakeData.pinterest3ColumnsPage.length);
                        props.initItemsStylesStateForPinterest3ColumnsPage(itemsState);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchPinterest3ColumnsPage();
                    }
                }
                break;
            case 'twoColumnsWidePage':
                if(props.twoColumnsWidePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchTwoColumnsWidePageSuccess(FakeData.twoColumnsWidePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchTwoColumnsWidePage();
                    }
                }
                break;
            case 'threeColumnsWidePage':
                if(props.threeColumnsWidePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchThreeColumnsWidePageSuccess(FakeData.threeColumnsWidePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchThreeColumnsWidePage();
                    }
                }
                break;
            case 'fourColumnsWidePage':
                if(props.fourColumnsWidePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchFourColumnsWidePageSuccess(FakeData.fourColumnsWidePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchFourColumnsWidePage();
                    }
                }
                break;
            case 'fiveColumnsWidePage':
                if(props.fiveColumnsWidePage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        props.fetchFiveColumnsWidePageSuccess(FakeData.fiveColumnsWidePage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchFiveColumnsWidePage();
                    }
                }
                break;
            case 'twoColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("twoColumnsPageHG"));

                if(props.twoColumnsPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        fetchTwoColumnsPageMockData(
                            props.twoColumnsPage.loadMoreStep - 1, 
                            itemsFromLocalStorage !== null ? itemsFromLocalStorage.activeCategoryFromHeader : "showAll", 
                            size.width, 
                            props.twoColumnsPage.items.length, 
                            props.twoColumnsPage.itemsStyleValues
                        );
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchTwoColumnsPage(props.twoColumnsPage.loadMoreStep);
                    }
                }
                break;
            case 'threeColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("threeColumnsPageHG"));

                if(props.threeColumnsPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        fetchThreeColumnsPageMockData(
                            props.threeColumnsPage.loadMoreStep - 1, 
                            itemsFromLocalStorage !== null ? itemsFromLocalStorage.activeCategoryFromHeader : "showAll", 
                            size.width, 
                            props.threeColumnsPage.items.length, 
                            props.threeColumnsPage.itemsStyleValues
                        );

                        // props.fetchThreeColumnsPageSuccess(FakeData.threeColumnsPage);
                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchThreeColumnsPage(props.threeColumnsPage.loadMoreStep);
                    }
                }
                break;
            case 'fourColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("fourColumnsPageHG"));

                if(props.fourColumnsPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)
        
                        fetchFourColumnsPageMockData(
                            props.fourColumnsPage.loadMoreStep - 1, 
                            itemsFromLocalStorage !== null ? itemsFromLocalStorage.activeCategoryFromHeader : "showAll", 
                            size.width, 
                            props.fourColumnsPage.items.length, 
                            props.fourColumnsPage.itemsStyleValues
                        );

                    }else{
                        // Fetch data (required to run -> npm run server)
        
                        props.fetchThreeColumnsPage(props.threeColumnsPage.loadMoreStep);
                    }
                }
                break;
            default:
                if(props.portfolioGalleryPage.items.length === 0){
                    if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                        // Fetch mock data (not required to run -> npm run server)

                        props.fetchPortfolioGalleryPageSuccess(FakeData.portfolioGallery);
                    }else{
                        // Fetch data (required to run -> npm run server)

                        props.fetchPortfolioGalleryPage();
                    }
                }
                break;
        }
    }

    const fetchTwoColumnsPageMockData = (step, category, screenWidth, numOfItemsInArray) => {
        let twoColumnsPageData = [...FakeData.twoColumnsPage];
        let updatedTwoColumnsObj = {
            disableLoadMoreButton: false,
            twoColumnsData: []
        };
        let takeItems = step * 4;

        if(takeItems >= twoColumnsPageData.length){
            updatedTwoColumnsObj.disableLoadMoreButton = true;
            updatedTwoColumnsObj.twoColumnsData = twoColumnsPageData;
        }else{
            updatedTwoColumnsObj.twoColumnsData = twoColumnsPageData.slice(0, takeItems);
        }

        let categories = [];

        categories = updatedTwoColumnsObj.twoColumnsData
            .map(el => {
                return el.categories
            })
            .flat()
            .map((el, i) => {
                return el.key
            });
        categories = Utility.removeDublicatesFromArray(categories);
        categories = categories.map((el, i) => {
            return {
                id: i + 2,
                key: el,
                label: `${Utility.changeKeyToLabel(el)}.`,
                isHover: "init",
                active: false
            }
        });
        categories.unshift({
            id: 1,
            key: "showAll",
            label: "Show all.",
            isHover: "init",
            active: true
        });

        if(category){
            categories = categories.map(el => {
                if(el.key === category){
                    return {
                        ...el,
                        active: true
                    }
                }else{
                    return {
                        ...el,
                        active: false
                    }
                }
            })
        }

        let itemsState;

        props.fetchTwoColumnsPageSuccess(updatedTwoColumnsObj.twoColumnsData);

        if(step === 1){
            itemsState = Utility.getArrayOfEmptyVal(updatedTwoColumnsObj.twoColumnsData.length);
            props.initItemsStylesStateForTwoColumnsPage(itemsState);
        }else{
            itemsState = Utility.getArrayOfEmptyVal(updatedTwoColumnsObj.twoColumnsData.length - numOfItemsInArray);
            props.addMoreItemsStylesStateForTwoColumnsPage(itemsState);
        }

        props.setCategoriesTwoColumnsPage(categories);
        props.loadMoreTwoColumnsPageSuccess();
        props.loadMoreDisableButtonStateForTwoColumnsPage(updatedTwoColumnsObj.disableLoadMoreButton);

        if(step > 1 && category !== "showAll"){
            let addedElemntsArray = updatedTwoColumnsObj.twoColumnsData.slice(updatedTwoColumnsObj.twoColumnsData.length-4, updatedTwoColumnsObj.twoColumnsData.length);
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(updatedTwoColumnsObj.twoColumnsData, category);
            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("twoColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
            
            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-3}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateY);

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-2}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateY);

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-1}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateY);

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateY);

        }else if(step > 1 && category === "showAll"){
            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-3}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: 1,
                translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-4, "atTheBeginning"),
                translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-4),
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-3}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-4));

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-2}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: 1,
                translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-3),
                translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-3),
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-2}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-3));

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4-1}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: 1,
                translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-2, "atTheBeginning"),
                translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-2),
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-1}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-2));

            props.updateItemsStyleValuesTwoColumnsPage(`img${step*4}`,{
                width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                scale: 1,
                translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-1),
                translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-1),
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-1));
        }
    }

    const fetchThreeColumnsPageMockData = (step, category, screenWidth, numOfItemsInArray) => {
        let threeColumnsPageData = [...FakeData.threeColumnsPage];
        let updatedThreeColumnsObj = {
            disableLoadMoreButton: false,
            threeColumnsData: []
        };
        let takeItems = step * 6;

        if(takeItems >= threeColumnsPageData.length){
            updatedThreeColumnsObj.disableLoadMoreButton = true;
            updatedThreeColumnsObj.threeColumnsData = threeColumnsPageData;
        }else{
            updatedThreeColumnsObj.threeColumnsData = threeColumnsPageData.slice(0, takeItems)
        }

        let categories = [];

        categories = updatedThreeColumnsObj.threeColumnsData
            .map(el => {
                return el.categories
            })
            .flat()
            .map((el, i) => {
                return el.key
            });
        categories = Utility.removeDublicatesFromArray(categories);
        categories = categories.map((el, i) => {
            return {
                id: i + 2,
                key: el,
                label: `${Utility.changeKeyToLabel(el)}.`,
                isHover: "init",
                active: false
            }
        });
        categories.unshift({
            id: 1,
            key: "showAll",
            label: "Show all.",
            isHover: "init",
            active: true
        });

        if(category){
            categories = categories.map(el => {
                if(el.key === category){
                    return {
                        ...el,
                        active: true
                    }
                }else{
                    return {
                        ...el,
                        active: false
                    }
                }
            })
        }

        let itemsState;

        props.fetchThreeColumnsPageSuccess(updatedThreeColumnsObj.threeColumnsData);

        if(step === 1){
            itemsState = Utility.getArrayOfEmptyVal(updatedThreeColumnsObj.threeColumnsData.length);
            props.initItemsStylesStateForThreeColumnsPage(itemsState);
        }else{
            itemsState = Utility.getArrayOfEmptyVal(updatedThreeColumnsObj.threeColumnsData.length - numOfItemsInArray);
            props.addMoreItemsStylesStateForThreeColumnsPage(itemsState);
        }

        props.setCategoriesThreeColumnsPage(categories);
        props.loadMoreThreeColumnsPageSuccess();
        props.loadMoreDisableButtonStateForThreeColumnsPage(updatedThreeColumnsObj.disableLoadMoreButton);

        if(step > 1 && category !== "showAll"){
            let addedElemntsArray = updatedThreeColumnsObj.threeColumnsData.slice(updatedThreeColumnsObj.threeColumnsData.length-6, updatedThreeColumnsObj.threeColumnsData.length);
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(updatedThreeColumnsObj.threeColumnsData, category);
            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("threeColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
            
            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateY);

            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateY);

            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateY);

            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateY);

            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY);

            props.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY);

        }else if(step > 1 && category === "showAll"){
            if(screenWidth > 734){
                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-6, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-6),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-6));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-5, "secondColumn"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-5),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-5));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-4, "thirdColumn"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-4),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-4));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-3, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-3),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-3));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-2, "secondColumn"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-2),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-2));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-1, "thirdColumn"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-1),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-1));
            }else if(screenWidth <= 734){
                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-6, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-6),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-6));
                
                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-5),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-5),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-5));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-4, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-4),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-4));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-3),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-3),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-3));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-2, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-2),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-2));

                props.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                    width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-1),
                    translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-1),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-1));
            }
        }
    }

    const fetchFourColumnsPageMockData = (step, category, screenWidth, numOfItemsInArray) => {
        let fourColumnsPageData = [...FakeData.fourColumnsPage];
        let updatedFourColumnsObj = {
            disableLoadMoreButton: false,
            fourColumnsData: []
        };
        let takeItems = step * 8;

        if(takeItems >= fourColumnsPageData.length){
            updatedFourColumnsObj.disableLoadMoreButton = true;
            updatedFourColumnsObj.fourColumnsData = fourColumnsPageData;
        }else{
            updatedFourColumnsObj.fourColumnsData = fourColumnsPageData.slice(0, takeItems)
        }

        let categories = [];

        categories = updatedFourColumnsObj.fourColumnsData
            .map(el => {
                return el.categories
            })
            .flat()
            .map((el, i) => {
                return el.key
            });
        categories = Utility.removeDublicatesFromArray(categories);
        categories = categories.map((el, i) => {
            return {
                id: i + 2,
                key: el,
                label: `${Utility.changeKeyToLabel(el)}.`,
                isHover: "init",
                active: false
            }
        });
        categories.unshift({
            id: 1,
            key: "showAll",
            label: "Show all.",
            isHover: "init",
            active: true
        });

        if(category){
            categories = categories.map(el => {
                if(el.key === category){
                    return {
                        ...el,
                        active: true
                    }
                }else{
                    return {
                        ...el,
                        active: false
                    }
                }
            })
        }

        let itemsState;

        props.fetchFourColumnsPageSuccess(updatedFourColumnsObj.fourColumnsData);

        if(step === 1){
            itemsState = Utility.getArrayOfEmptyVal(updatedFourColumnsObj.fourColumnsData.length);
            props.initItemsStylesStateForFourColumnsPage(itemsState);
        }else{
            itemsState = Utility.getArrayOfEmptyVal(updatedFourColumnsObj.fourColumnsData.length - numOfItemsInArray);
            props.addMoreItemsStylesStateForFourColumnsPage(itemsState);
        }

        props.setCategoriesFourColumnsPage(categories);
        props.loadMoreFourColumnsPageSuccess();
        props.loadMoreDisableButtonStateForFourColumnsPage(updatedFourColumnsObj.disableLoadMoreButton);

        if(step > 1 && category !== "showAll"){
            let addedElemntsArray = updatedFourColumnsObj.fourColumnsData.slice(updatedFourColumnsObj.fourColumnsData.length-8, updatedFourColumnsObj.fourColumnsData.length);
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(updatedFourColumnsObj.fourColumnsData, category);
            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("fourColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
            
            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*6-1}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*6-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY);

            props.updateItemsStyleValuesFourColumnsPage(`img${step*6}`,{
                width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateX,
                translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY,
                transition: 0.45,
                zIndex: 0,
                rendered: true
            });
            props.setTopPositionOfTheItemForFourColumnsPage(`img${step*6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY);

        }else if(step > 1 && category === "showAll"){
            if(screenWidth > 960){
                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-8, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-8),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-8));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-7, "secondColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-7),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-7));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-6, "thirdColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-6),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-6));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-5, "fourthColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-5),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-5));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-4, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-4),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-4));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-3, "secondColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-3),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-3));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-1}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-2, "thirdColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-2),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-1}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-2));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-1, "fourthColumn"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-1),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-1));
            }else if(screenWidth <= 960){
                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-8, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-8),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-8));
                
                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-7),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-7),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-7));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-6, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-6),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-6));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-5),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-5),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-5));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-4, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-4),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-4));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-3),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-3),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-3));
            
                props.updateItemsStyleValuesFourColumnsPage(`img${step*8-1}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-2, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-2),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-1}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-2));

                props.updateItemsStyleValuesFourColumnsPage(`img${step*8}`,{
                    width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                    scale: 1,
                    translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-1),
                    translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-1),
                    transition: 0.45,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForFourColumnsPage(`img${step*8}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-1));
            }
        }  
    }

    const setContentItems = () => {
        // Set data according to the page we came from

        let itemsFromLocalStorage;
        let updatedItems;

        switch(page){
            case 'portfolioGallery':
                return [...props.portfolioGalleryPage.items];
            case 'archive':
                return [...props.archive.items];
            case 'switchImagePage':
                return [...props.switchImagePage.items];
            case 'simpleOverlayPage':
                return [...props.simpleOverlayPage.items];
            case 'slideFromImageLeftPage':
                return [...props.slideFromImageLeftPage.items];
            case 'overlayPage':
                return [...props.overlayPage.items];
            case 'overlayWithInfoPage':
                return [...props.overlayWithInfoPage.items];
            case 'standardPage':
                return [...props.standardPage.items];
            case 'galleryPage':
                return [...props.galleryPage.items];
            case 'galleryWithSpacePage':
                return [...props.galleryWithSpacePage.items];
            case 'stoneWallPage':
                return [...props.stoneWallPage.items];
            case 'stoneWallWidePage':
                return [...props.stoneWallWidePage.items];
            case 'metroPage':
                return [...props.metroPage.items];
            case 'pinterest3ColumnsPage':
                return [...props.pinterest3ColumnsPage.items];
            case 'twoColumnsWidePage':
                return [...props.twoColumnsWidePage.items];
            case 'threeColumnsWidePage':
                return [...props.threeColumnsWidePage.items];
            case 'fourColumnsWidePage':
                return [...props.fourColumnsWidePage.items];
            case 'fiveColumnsWidePage':
                return [...props.fiveColumnsWidePage.items];
            case 'twoColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("twoColumnsPageHG"));
                
                if(itemsFromLocalStorage !== null){
                    updatedItems = Utility.updateArrayOfTwoColumnsData(props.twoColumnsPage.items, itemsFromLocalStorage.activeCategoryFromHeader)
                }else{
                    updatedItems = [...props.twoColumnsPage.items];
                }
                return updatedItems;
            case 'threeColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("threeColumnsPageHG"));
                
                if(itemsFromLocalStorage !== null){
                    updatedItems = Utility.updateArrayOfTwoColumnsData(props.threeColumnsPage.items, itemsFromLocalStorage.activeCategoryFromHeader)
                }else{
                    updatedItems = [...props.threeColumnsPage.items];
                }
                return updatedItems;
            case 'fourColumnsPage':
                itemsFromLocalStorage = JSON.parse(localStorage.getItem("fourColumnsPageHG"));
                
                if(itemsFromLocalStorage !== null){
                    updatedItems = Utility.updateArrayOfTwoColumnsData(props.fourColumnsPage.items, itemsFromLocalStorage.activeCategoryFromHeader)
                }else{
                    updatedItems = [...props.fourColumnsPage.items];
                }
                return updatedItems;
            default:
                return [...props.portfolioGalleryPage.items];
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-left";
                case 'on':
                    return "arrow-wrapper-left-lengthen";
                case 'off':
                    return "arrow-wrapper-left-shorten"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-right";
                case 'on':
                    return "arrow-wrapper-right-lengthen";
                case 'off':
                    return "arrow-wrapper-right-shorten"
            }
        }
        if(opt === "menuButton"){
            switch(isHovering){
                case 'init':
                    return "navigation-menu-dot";
                case 'on':
                    return "navigation-menu-dot-hover-on";
                case 'off':
                    return "navigation-menu-dot-hover-off"
            }
        }
    }

    const handleMenuOnClick = (e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("pageHG", page);

        // Return to the page we came from

        switch(page){
            case 'portfolioGallery':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                break;
            case 'archive':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-category/${category}`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-category/${category}`, "_blank");
                }
                break;
            case 'switchImagePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/switch-image`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/switch-image`, "_blank");
                }
                break;
            case 'simpleOverlayPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/simple-overlay`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/simple-overlay`, "_blank");
                }
                break;
            case 'slideFromImageLeftPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/slide-from-image-left`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/slide-from-image-left`, "_blank");
                }
                break;
            case 'overlayPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/overlay`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/overlay`, "_blank");
                }
                break;
            case 'overlayWithInfoPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/overlay-with-info`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/overlay-with-info`, "_blank");
                }
                break;
            case 'standardPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-standard`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-standard`, "_blank");
                }
                break;
            case 'galleryPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/gallery`, "_blank");
                }
                break;
            case 'galleryWithSpacePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/gallery-with-space`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/gallery-with-space`, "_blank");
                }
                break;
            case 'stoneWallPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/stone-wall`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/stone-wall`, "_blank");
                }
                break;
            case 'stoneWallWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/stone-wall-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/stone-wall-wide`, "_blank");
                }
                break;
            case 'metroPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/metro`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/metro`, "_blank");
                }
                break;
            case 'pinterest3ColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/pinterest-3-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/pinterest-3-columns`, "_blank");
                }
                break;
            case 'twoColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/two-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/two-columns-wide`, "_blank");
                }
                break;
            case 'threeColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/three-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/three-columns-wide`, "_blank");
                }
                break;
            case 'fourColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/four-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/four-columns-wide`, "_blank");
                }
                break;
            case 'fiveColumnsWidePage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/five-columns-wide`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/five-columns-wide`, "_blank");
                }
                break;
            case 'twoColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/two-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/two-columns`, "_blank");
                }
                break;
            case 'threeColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/three-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/three-columns`, "_blank");
                }
                break;
            case 'fourColumnsPage':
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/four-columns`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/four-columns`, "_blank");
                }
                break;
            default:
                if(e.button !== 1){
                    // Follow the link to the next page on left mouse click
                    props.history.push(`/crypto-portfolio/portfolio-gallery`);
                }else{
                    // Open the link in a new window on scroll wheel click
                    window.open(`/crypto-portfolio/portfolio-gallery`, "_blank");
                }
                return;
        }

        // Init the fetched data key

        props.setHistoryPopFromPortfolioItem("scrollToTop");
    }

    const arrowOnClick = (opt, key, e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;
       
        // Storing data in local storage

        localStorage.setItem("pageHG", page);

        /**
         * Navigate to the prev or next element in
         * fetched data array for the corresponding page
         */

        let updatedItems = setContentItems();
        let updatedItemIndex = updatedItems.findIndex(item => item.key === key);

        if(e.button !== 1){
            // Clear smooth scrollbar behavior

            document.getElementById("html").style.scrollBehavior = null;

            // Follow the link to the next page on left mouse click

            switch(opt) {
                case 'prev':
                    if(updatedItemIndex === 0){
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItems.length - 1].path, page, category);
                    }else{
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItemIndex - 1].path, page, category);
                    }
                    return;
                case 'next':
                    if(updatedItemIndex === updatedItems.length - 1){
                        props.portfolioNavigationOnClickStart(updatedItems[0].path, page, category);
                    }else{
                        props.portfolioNavigationOnClickStart(updatedItems[updatedItemIndex + 1].path, page, category);
                    }
                    return;
            }
        }else{
            // Open the link in a new window on scroll wheel click
            switch(opt) {
                case 'prev':
                    if(updatedItemIndex === 0){
                        window.open(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`,"_blank");
                    }else{
                        window.open(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`,"_blank");
                    }
                    return;
                case 'next':
                    if(updatedItemIndex === updatedItems.length - 1){
                        window.open(`/crypto-portfolio/${updatedItems[0].path}`,"_blank");
                    }else{
                        window.open(`/crypto-portfolio/${updatedItems[updatedItemIndex + 1].path}`,"_blank");
                    }
                    return;
            }
        }
    }

    /**
     * Markup
     */

    return(
        <div className="porfolio-navigation">
            <div 
                className={renderClassName("leftArrow", isHoveringLeftArrow)}
                onMouseEnter={() => handleMouseEnter("leftArrow")} 
                onMouseLeave={() => handleMouseLeave("leftArrow")} 
                onMouseDown={(e) => arrowOnClick('prev', key, e)}
            >
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
                <div className="arrow-horizontal-line"/>
            </div>

            <div 
                className="navigation-menu"
                onMouseDown={(e) => handleMenuOnClick(e)}
                onMouseEnter={() => handleMouseEnter("menuButton")} 
                onMouseLeave={() => handleMouseLeave("menuButton")} 
            >
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
            </div>
            <div 
                className={renderClassName("rightArrow", isHoveringRightArrow)}
                onMouseEnter={() => handleMouseEnter("rightArrow")} 
                onMouseLeave={() => handleMouseLeave("rightArrow")} 
                onMouseDown={(e) => arrowOnClick('next', key, e)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            archive: Selectors.getArchiveState(state),
            switchImagePage: Selectors.getSwitchImagePageState(state),
            simpleOverlayPage: Selectors.getSimpleOverlayPageState(state),
            slideFromImageLeftPage: Selectors.getSlideFromImageLeftPageState(state),
            overlayPage: Selectors.getOverlayPageState(state),
            overlayWithInfoPage: Selectors.getOverlayWithInfoPageState(state),
            standardPage: Selectors.getStandardPageState(state),
            galleryPage: Selectors.getGalleryPageState(state),
            galleryWithSpacePage: Selectors.getGalleryWithSpacePageState(state),
            stoneWallPage: Selectors.getStoneWallPageState(state),
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            metroPage: Selectors.getMetroPageState(state),
            pinterest3ColumnsPage: Selectors.getPinterest3ColumnsPageState(state),
            twoColumnsWidePage: Selectors.getTwoColumnsWidePageState(state),
            threeColumnsWidePage: Selectors.getThreeColumnsWidePageState(state),
            fourColumnsWidePage: Selectors.getFourColumnsWidePageState(state),
            fiveColumnsWidePage: Selectors.getFiveColumnsWidePageState(state),
            twoColumnsPage: Selectors.getTwoColumnsPageState(state),
            threeColumnsPage: Selectors.getThreeColumnsPageState(state),
            fourColumnsPage: Selectors.getFourColumnsPageState(state),
            bigImagesPortfolio: Selectors.getBigImagesPortfolioState(state),
            bigSliderPortfolio: Selectors.getBigSliderPortfolioState(state),
            galleryPortfolio: Selectors.getGalleryPortfolioState(state),
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
            smallSliderPortfolio: Selectors.getSmallSliderPortfolioState(state),
            unmountComp: Selectors.getUnmountComponentState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            fetchPortfolioGalleryPageSuccess: bindActionCreators(Actions.fetchPortfolioGalleryPageSuccess, dispatch),
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            fetchArchiveSuccess: bindActionCreators(Actions.fetchArchiveSuccess, dispatch),
            setArchiveCategory: bindActionCreators(Actions.setArchiveCategory, dispatch),
            loadMoreDisableButtonStateForArchive: bindActionCreators(Actions.loadMoreDisableButtonStateForArchive, dispatch),
            fetchSwitchImagePage: bindActionCreators(Services.fetchSwitchImagePage, dispatch),
            fetchSwitchImagePageSuccess: bindActionCreators(Actions.fetchSwitchImagePageSuccess, dispatch),
            fetchSimpleOverlayPage: bindActionCreators(Services.fetchSimpleOverlayPage, dispatch),
            fetchSimpleOverlayPageSuccess: bindActionCreators(Actions.fetchSimpleOverlayPageSuccess, dispatch),
            fetchSlideFromImageLeftPage: bindActionCreators(Services.fetchSlideFromImageLeftPage, dispatch),
            fetchSlideFromImageLeftPageSuccess: bindActionCreators(Actions.fetchSlideFromImageLeftPageSuccess, dispatch),
            fetchOverlayPage: bindActionCreators(Services.fetchOverlayPage, dispatch),
            fetchOverlayPageSuccess: bindActionCreators(Actions.fetchOverlayPageSuccess, dispatch),
            fetchOverlayWithInfoPage: bindActionCreators(Services.fetchOverlayWithInfoPage, dispatch),
            fetchOverlayWithInfoPageSuccess: bindActionCreators(Actions.fetchOverlayWithInfoPageSuccess, dispatch),
            fetchStandardPage: bindActionCreators(Services.fetchStandardPage, dispatch),
            fetchStandardPageSuccess: bindActionCreators(Actions.fetchStandardPageSuccess, dispatch),
            fetchGalleryPage: bindActionCreators(Services.fetchGalleryPage, dispatch),
            fetchGalleryPageSuccess: bindActionCreators(Actions.fetchGalleryPageSuccess, dispatch),
            fetchGalleryWithSpacePage: bindActionCreators(Services.fetchGalleryWithSpacePage, dispatch),
            fetchGalleryWithSpacePageSuccess: bindActionCreators(Actions.fetchGalleryWithSpacePageSuccess, dispatch),
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            fetchStoneWallPageSuccess: bindActionCreators(Actions.fetchStoneWallPageSuccess, dispatch),
            initItemsStylesStateForStoneWallPage: bindActionCreators(Actions.initItemsStylesStateForStoneWallPage, dispatch),
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            fetchStoneWallWidePageSuccess: bindActionCreators(Actions.fetchStoneWallWidePageSuccess, dispatch),
            initItemsStylesStateForStoneWallWidePage: bindActionCreators(Actions.initItemsStylesStateForStoneWallWidePage, dispatch),
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            fetchMetroPageSuccess: bindActionCreators(Actions.fetchMetroPageSuccess, dispatch),
            initItemsStylesStateForMetroPage: bindActionCreators(Actions.initItemsStylesStateForMetroPage, dispatch),
            fetchPinterest3ColumnsPage: bindActionCreators(Services.fetchPinterest3ColumnsPage, dispatch),
            fetchPinterest3ColumnsPageSuccess: bindActionCreators(Actions.fetchPinterest3ColumnsPageSuccess, dispatch),
            initItemsStylesStateForPinterest3ColumnsPage: bindActionCreators(Actions.initItemsStylesStateForPinterest3ColumnsPage, dispatch),
            fetchTwoColumnsWidePage: bindActionCreators(Services.fetchTwoColumnsWidePage, dispatch),
            fetchTwoColumnsWidePageSuccess: bindActionCreators(Actions.fetchTwoColumnsWidePageSuccess, dispatch),
            fetchThreeColumnsWidePage: bindActionCreators(Services.fetchThreeColumnsWidePage, dispatch),
            fetchThreeColumnsWidePageSuccess: bindActionCreators(Actions.fetchThreeColumnsWidePageSuccess, dispatch),
            fetchFourColumnsWidePage: bindActionCreators(Services.fetchFourColumnsWidePage, dispatch),
            fetchFourColumnsWidePageSuccess: bindActionCreators(Actions.fetchFourColumnsWidePageSuccess, dispatch),
            fetchFiveColumnsWidePage: bindActionCreators(Services.fetchFiveColumnsWidePage, dispatch),
            fetchFiveColumnsWidePageSuccess: bindActionCreators(Actions.fetchFiveColumnsWidePageSuccess, dispatch),
            fetchTwoColumnsPage: bindActionCreators(Services.fetchTwoColumnsPage, dispatch),
            fetchTwoColumnsPageSuccess: bindActionCreators(Actions.fetchTwoColumnsPageSuccess, dispatch),
            initItemsStylesStateForTwoColumnsPage: bindActionCreators(Actions.initItemsStylesStateForTwoColumnsPage, dispatch),
            addMoreItemsStylesStateForTwoColumnsPage: bindActionCreators(Actions.addMoreItemsStylesStateForTwoColumnsPage, dispatch),
            setCategoriesTwoColumnsPage: bindActionCreators(Actions.setCategoriesTwoColumnsPage, dispatch),
            loadMoreTwoColumnsPageSuccess: bindActionCreators(Actions.loadMoreTwoColumnsPageSuccess, dispatch),
            loadMoreDisableButtonStateForTwoColumnsPage: bindActionCreators(Actions.loadMoreDisableButtonStateForTwoColumnsPage, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
            setTopPositionOfTheItemForTwoColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForTwoColumnsPage, dispatch),
            fetchThreeColumnsPage: bindActionCreators(Services.fetchThreeColumnsPage, dispatch),
            fetchThreeColumnsPageSuccess: bindActionCreators(Actions.fetchThreeColumnsPageSuccess, dispatch),
            initItemsStylesStateForThreeColumnsPage: bindActionCreators(Actions.initItemsStylesStateForThreeColumnsPage, dispatch),
            addMoreItemsStylesStateForThreeColumnsPage: bindActionCreators(Actions.addMoreItemsStylesStateForThreeColumnsPage, dispatch),
            setCategoriesThreeColumnsPage: bindActionCreators(Actions.setCategoriesThreeColumnsPage, dispatch),
            loadMoreThreeColumnsPageSuccess: bindActionCreators(Actions.loadMoreThreeColumnsPageSuccess, dispatch),
            loadMoreDisableButtonStateForThreeColumnsPage: bindActionCreators(Actions.loadMoreDisableButtonStateForThreeColumnsPage, dispatch),
            updateItemsStyleValuesThreeColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesThreeColumnsPage, dispatch),
            setTopPositionOfTheItemForThreeColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForThreeColumnsPage, dispatch),
            fetchFourColumnsPage: bindActionCreators(Services.fetchFourColumnsPage, dispatch),
            fetchFourColumnsPageSuccess: bindActionCreators(Actions.fetchFourColumnsPageSuccess, dispatch),
            initItemsStylesStateForFourColumnsPage: bindActionCreators(Actions.initItemsStylesStateForFourColumnsPage, dispatch),
            addMoreItemsStylesStateForFourColumnsPage: bindActionCreators(Actions.addMoreItemsStylesStateForFourColumnsPage, dispatch),
            setCategoriesFourColumnsPage: bindActionCreators(Actions.setCategoriesFourColumnsPage, dispatch),
            loadMoreFourColumnsPageSuccess: bindActionCreators(Actions.loadMoreFourColumnsPageSuccess, dispatch),
            loadMoreDisableButtonStateForFourColumnsPage: bindActionCreators(Actions.loadMoreDisableButtonStateForFourColumnsPage, dispatch),
            updateItemsStyleValuesFourColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesFourColumnsPage, dispatch),
            setTopPositionOfTheItemForFourColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForFourColumnsPage, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch),
            portfolioNavigationOnClickStart: bindActionCreators(Actions.portfolioNavigationOnClickStart, dispatch),
        };
    }
)(withRouter(PorfolioNavigation));
