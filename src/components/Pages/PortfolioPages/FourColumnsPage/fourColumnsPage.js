/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './fourColumnsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import LoadingVersion2 from '../../../SmallParts/LoadingVersion2/loadingVersion2';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
import Button from '../../../../library/Button/button';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import { 
    H15,
    H19,
    H45
} from '../../../UtilityComponents';

import * as Utility from '../../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';

/**
 * FourColumnsPage component definition and export
 */

export const FourColumnsPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [categoryFromHeader, setCategoryFromHeader] = useState("showAll");
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.fourColumnsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                fetchMockData(props.fourColumnsPage.loadMoreStep);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchFourColumnsPage(props.fourColumnsPage.loadMoreStep);
            }
            props.setLoadMoreStepFourColumnsPage(props.fourColumnsPage.loadMoreStep + 1);
        }

        // Return to the part of the screen where the link to the selected item is located (items in absolute position)
        
        let timeout = setTimeout(() => {
            if(!props.fourColumnsPage.loading && !props.fourColumnsPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemsWrapper = document.getElementById("fourColumnsPageItems").offsetTop;
                let itemTopPosition = props.fourColumnsPage.itemsTopPosition.find(item => item.key === props.historyPopFromItem).topPosition;
                window.scrollTo(0, itemTopPosition + itemsWrapper - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);


        //Init active category from the header if it exists

        let fourColumnsPageLocalStorage = JSON.parse(localStorage.getItem("fourColumnsPageHG"));

        if(fourColumnsPageLocalStorage !== null){
            /**
             * Set appear and disappear images width, height, transition
             * and translate coordinates according to the category selected 
             * from the header (local storage)
             */

            categoryFromHeaderOnClickHandler(fourColumnsPageLocalStorage.activeCategoryFromHeader);
        }else{
            if(props.fourColumnsPage.categories.length !== 0){
            
                /**
                 * Set appear and disappear images width, height, transition
                 * and translate coordinates according to the category selected from the header
                 */
    
                let categeryKey = props.fourColumnsPage.categories.find(item => item.active === true).key;
                categoryFromHeaderOnClickHandler(categeryKey);
            }else{
                // Set all images width, height, transition and translate coordinates 
    
                setImagesState("onInit");
            }
        }

       

        // Event Listeners

        const smooth = e => {
            transitionRef.current()
        }

        const resize = () => {
            resizeRef.current();
        }  

        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.fourColumnsPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        updateTransitionValue();
    }, [props.fourColumnsPage.itemsStyleValues.img1?.transition,props.fourColumnsPage.itemsStyleValues.img2?.transition,
        props.fourColumnsPage.itemsStyleValues.img3?.transition,props.fourColumnsPage.itemsStyleValues.img4?.transition,
        props.fourColumnsPage.itemsStyleValues.img5?.transition,props.fourColumnsPage.itemsStyleValues.img6?.transition,
        props.fourColumnsPage.itemsStyleValues.img7?.transition,props.fourColumnsPage.itemsStyleValues.img8?.transition,
        props.fourColumnsPage.itemsStyleValues.img9?.transition,props.fourColumnsPage.itemsStyleValues.img10?.transition,
        props.fourColumnsPage.itemsStyleValues.img11?.transition,props.fourColumnsPage.itemsStyleValues.img12?.transition,
        props.fourColumnsPage.itemsStyleValues.img13?.transition,props.fourColumnsPage.itemsStyleValues.img14?.transition,
        props.fourColumnsPage.itemsStyleValues.img15?.transition,props.fourColumnsPage.itemsStyleValues.img16?.transition,
        props.fourColumnsPage.itemsStyleValues.img17?.transition,props.fourColumnsPage.itemsStyleValues.img18?.transition
    ]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("fourColumnsPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 50){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const updateTransitionValue = () => {
        // Set the transition property to the initial value if its value is 0

        if(props.fourColumnsPage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img1",{
                ...props.fourColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img2",{
                ...props.fourColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img3",{
                ...props.fourColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img4",{
                ...props.fourColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img5",{
                ...props.fourColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img6?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img6",{
                ...props.fourColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img7?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img7",{
                ...props.fourColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img8?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img8",{
                ...props.fourColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img9?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img9",{
                ...props.fourColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img10?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img10",{
                ...props.fourColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img11?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img11",{
                ...props.fourColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img12?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img12",{
                ...props.fourColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img13?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img13",{
                ...props.fourColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img14?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img14",{
                ...props.fourColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img15?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img15",{
                ...props.fourColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img16?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img16",{
                ...props.fourColumnsPage.itemsStyleValues.img16,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img17?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img17",{
                ...props.fourColumnsPage.itemsStyleValues.img17,
                transition: 0.45
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img18?.transition === 0){
            props.updateItemsStyleValuesFourColumnsPage("img18",{
                ...props.fourColumnsPage.itemsStyleValues.img18,
                transition: 0.45
            });
        }
    }

    const smoothTransition = () => {
        if(props.fourColumnsPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesFourColumnsPage("img1",{
                ...props.fourColumnsPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesFourColumnsPage("img2",{
                ...props.fourColumnsPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesFourColumnsPage("img3",{
                ...props.fourColumnsPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesFourColumnsPage("img4",{
                ...props.fourColumnsPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesFourColumnsPage("img5",{
                ...props.fourColumnsPage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img6){
            props.updateItemsStyleValuesFourColumnsPage("img6",{
                ...props.fourColumnsPage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img7){
            props.updateItemsStyleValuesFourColumnsPage("img7",{
                ...props.fourColumnsPage.itemsStyleValues.img7,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img8){
            props.updateItemsStyleValuesFourColumnsPage("img8",{
                ...props.fourColumnsPage.itemsStyleValues.img8,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img9){
            props.updateItemsStyleValuesFourColumnsPage("img9",{
                ...props.fourColumnsPage.itemsStyleValues.img9,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img10){
            props.updateItemsStyleValuesFourColumnsPage("img10",{
                ...props.fourColumnsPage.itemsStyleValues.img10,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img11){
            props.updateItemsStyleValuesFourColumnsPage("img11",{
                ...props.fourColumnsPage.itemsStyleValues.img11,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img12){
            props.updateItemsStyleValuesFourColumnsPage("img12",{
                ...props.fourColumnsPage.itemsStyleValues.img12,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img13){
            props.updateItemsStyleValuesFourColumnsPage("img13",{
                ...props.fourColumnsPage.itemsStyleValues.img13,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img14){
            props.updateItemsStyleValuesFourColumnsPage("img14",{
                ...props.fourColumnsPage.itemsStyleValues.img14,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img15){
            props.updateItemsStyleValuesFourColumnsPage("img15",{
                ...props.fourColumnsPage.itemsStyleValues.img15,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img16){
            props.updateItemsStyleValuesFourColumnsPage("img16",{
                ...props.fourColumnsPage.itemsStyleValues.img16,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img17){
            props.updateItemsStyleValuesFourColumnsPage("img17",{
                ...props.fourColumnsPage.itemsStyleValues.img17,
                transition: 0
            });
        }
        if(props.fourColumnsPage.itemsStyleValues.img18){
            props.updateItemsStyleValuesFourColumnsPage("img18",{
                ...props.fourColumnsPage.itemsStyleValues.img18,
                transition: 0
            });
        }
    }

    const handleResize = (e) => {
        categoryFromHeaderOnClickHandler(categoryFromHeader);
    }

    const setImagesState = (opt, elementToUpdate, action, arrayOfDisappearAndAppearElements) => {
        if(opt === "categoryFromHeaderOnClick"){
            // Set images state according to the selected category

            let page = size.width > 960 ? "fourColumnsPage" : "fourColumnsPageSmallScreen";
            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements(page, arrayOfDisappearAndAppearElements, size.width);
            let translateCoordinatesObj = updatedTranslateCoordinates.find(item => item.id === elementToUpdate);
            let itemsStylesObj = props.fourColumnsPage.itemsStyleValues[`img${elementToUpdate}`];
            switch(elementToUpdate){
                case 1:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img1",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img1", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img1",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img1", translateCoordinatesObj.translateY);
                    }
                    return;
                case 2:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img2",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img2", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img2",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img2", translateCoordinatesObj.translateY);
                    }
                    return;
                case 3:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img3",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img3", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img3",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img3", translateCoordinatesObj.translateY);
                    }
                    return;
                case 4:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img4",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img4", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img4",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img4", translateCoordinatesObj.translateY);
                    }
                    return;
                case 5:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img5",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img5", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img5",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img5", translateCoordinatesObj.translateY);
                    }
                    return;
                case 6:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img6",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img6", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img6",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img6", translateCoordinatesObj.translateY);
                    }
                    return;
                case 7:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img7",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img7", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img7",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img7", translateCoordinatesObj.translateY);
                    }
                    return;
                case 8:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img8",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img8", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img8",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img8", translateCoordinatesObj.translateY);
                    }
                    return;
                case 9:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img9",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img9", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img9",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img9", translateCoordinatesObj.translateY);
                    }
                    return;
                case 10:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img10",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img10", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img10",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img10", translateCoordinatesObj.translateY);
                    }
                    return;
                case 11:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img11",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img11", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img11",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img11", translateCoordinatesObj.translateY);
                    }
                    return;
                case 12:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img12",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img12", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img12",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img12", translateCoordinatesObj.translateY);
                    }
                    return;
                case 13:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img13",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img13", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img13",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img13", translateCoordinatesObj.translateY);
                    }
                    return;
                case 14:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img14",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img14", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img14",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img14", translateCoordinatesObj.translateY);
                    }
                    return;
                case 15:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img15",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img15", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img15",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img15", translateCoordinatesObj.translateY);
                    }
                    return;
                case 16:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img16",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img16", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img16",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img16", translateCoordinatesObj.translateY);
                    }
                    return;
                case 17:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img17",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img17", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img17",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        // console.log(translateCoordinatesObj)
                        props.setTopPositionOfTheItemForFourColumnsPage("img17", translateCoordinatesObj.translateY);
                    }
                    return;
                case 18:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesFourColumnsPage("img18",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img18", -1);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesFourColumnsPage("img18",{
                            width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForFourColumnsPage("img18", translateCoordinatesObj.translateY);
                    }
                    return;
            }
        }else{
            // Set all images state

            if(size.width > 960){
                if(props.fourColumnsPage.itemsStyleValues.img1?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img1",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img1.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 0, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 0, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img1", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 0, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img2?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img2",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img2.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 1, "secondColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 1, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img2", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 1, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img3?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img3",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img3.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 2, "thirdColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 2, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img3", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 2, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img4?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img4",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img4.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 3, "fourthColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 3, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img4", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 3, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img5?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img5",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img5.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 4, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 4),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img5", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 4));
                }
                if(props.fourColumnsPage.itemsStyleValues.img6?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img6",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img6.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 5, "secondColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 5),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img6", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 5));
                }
                if(props.fourColumnsPage.itemsStyleValues.img7?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img7",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img7.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 6, "thirdColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 6),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img7", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 6));
                }
                if(props.fourColumnsPage.itemsStyleValues.img8?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img8",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img8.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 7, "fourthColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 7),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img8", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 7));
                }
                if(props.fourColumnsPage.itemsStyleValues.img9?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img9",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img9.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 8, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 8),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img9", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 8));
                }
                if(props.fourColumnsPage.itemsStyleValues.img10?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img10",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img10.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 9, "secondColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 9),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img10", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 9));
                }
                if(props.fourColumnsPage.itemsStyleValues.img11?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img11",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img11.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 10, "thirdColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 10),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img11", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 10));
                }
                if(props.fourColumnsPage.itemsStyleValues.img12?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img12",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img12.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 11, "fourthColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 11),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img12", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 11));
                }
                if(props.fourColumnsPage.itemsStyleValues.img13?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img13",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img13.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 12, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 12),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img13", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 12));
                }
                if(props.fourColumnsPage.itemsStyleValues.img14?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img14",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img14.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 13, "secondColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 13),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img14", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 13));
                }
                if(props.fourColumnsPage.itemsStyleValues.img15?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img15",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img15.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 14, "thirdColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 14),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img15", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 14));
                }
                if(props.fourColumnsPage.itemsStyleValues.img16?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img16",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img16.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 15, "fourthColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 15),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img16", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 15));
                }
                if(props.fourColumnsPage.itemsStyleValues.img17?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img17",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img17.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 16, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 16),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img17", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 16));
                }
                if(props.fourColumnsPage.itemsStyleValues.img18?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img18",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img18.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "X", 17, "secondColumn"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 17),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img18", Utility.calcTranslateCoordinates("fourColumnsPage", size.width, "Y", 17));
                }
            }else if(size.width <= 960){
                if(props.fourColumnsPage.itemsStyleValues.img1?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img1",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img1.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 0, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 0, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img1", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 0, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img2?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img2",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img2.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 1),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 1, "atTheBeginning"),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img2", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 1, "atTheBeginning"));
                }
                if(props.fourColumnsPage.itemsStyleValues.img3?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img3",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img3.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 2, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 2),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img3", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 2));
                }
                if(props.fourColumnsPage.itemsStyleValues.img4?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img4",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img4.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 3),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 3),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img4", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 3));
                }
                if(props.fourColumnsPage.itemsStyleValues.img5?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img5",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img5.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 4, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 4),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img5", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 4));
                }
                if(props.fourColumnsPage.itemsStyleValues.img6?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img6",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img6.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 5),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 5),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img6", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 5));
                }
                if(props.fourColumnsPage.itemsStyleValues.img7?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img7",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img7.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 6, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 6),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img7", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 6));
                }
                if(props.fourColumnsPage.itemsStyleValues.img8?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img8",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img8.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 7),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 7),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img8", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 7));
                }
                if(props.fourColumnsPage.itemsStyleValues.img9?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img9",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img9.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 8, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 8),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img9", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 8));
                }
                if(props.fourColumnsPage.itemsStyleValues.img10?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img10",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img10.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 9),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 9),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img10", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 9));
                }
                if(props.fourColumnsPage.itemsStyleValues.img11?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img11",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img11.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 10, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 10),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img11", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 10));
                }
                if(props.fourColumnsPage.itemsStyleValues.img12?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img12",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img12.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 11),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 11),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img12", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 11));
                }
                if(props.fourColumnsPage.itemsStyleValues.img13?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img13",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img13.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 12, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 12),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img13", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 12));
                }
                if(props.fourColumnsPage.itemsStyleValues.img14?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img14",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img14.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 13),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 13),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img14", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 13));
                }
                if(props.fourColumnsPage.itemsStyleValues.img15?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img15",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img15.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 14, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 14),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img15", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 14));
                }
                if(props.fourColumnsPage.itemsStyleValues.img16?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img16",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img16.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 15),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 15),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img16", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 15));
                }
                if(props.fourColumnsPage.itemsStyleValues.img17?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img17",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img17.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 16, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 16),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img17", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 16));
                }
                if(props.fourColumnsPage.itemsStyleValues.img18?.rendered){
                    props.updateItemsStyleValuesFourColumnsPage("img18",{
                        width: Utility.setWidthOfImage("fourColumnsPage", size.width),
                        scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.fourColumnsPage.itemsStyleValues.img18.scale,
                        translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "X", 17),
                        translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 17),
                        transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                        zIndex: 0,
                        rendered: true
                    });
                    props.setTopPositionOfTheItemForFourColumnsPage("img18", Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", size.width, "Y", 17));
                }
            }
            
        }
    }

    const renderToolbars = () => {
        if(size.width < 1200){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="fourColumnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="fourColumnsPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="fourColumnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="fourColumnsPage"
                    />
                </>
            )
        }
    }

    const fetchMockData = (step, category, screenWidth, numOfItemsInArray) => {
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
            })
        categories = Utility.removeDublicatesFromArray(categories);
        categories = categories.map((el, i) => {
            return {
                id: i + 2,
                key: el,
                label: `${Utility.changeKeyToLabel(el)}.`,
                isHover: "init",
                active: false
            }
        })
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

    const loadMoreOnClick = () => {
        // Fetch more data for the component

        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)
            fetchMockData(props.fourColumnsPage.loadMoreStep, 
                categoryFromHeader, 
                size.width, 
                props.fourColumnsPage.items.length, 
                props.fourColumnsPage.itemsStyleValues);
        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchFourColumnsPage(props.fourColumnsPage.loadMoreStep, 
                categoryFromHeader, 
                size.width, 
                props.fourColumnsPage.items.length, 
                props.fourColumnsPage.itemsStyleValues);
        }

        props.setLoadMoreStepFourColumnsPage(props.fourColumnsPage.loadMoreStep + 1);

        // Set height for the fourColumnsPage items div

        renderFourColumnsPageStyleHeight();
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "categoryFromHeader"){
            if(active) return "h15-nobel-poppins";
            switch(isHovering){
                case 'init':
                    return "h15-black-poppins-animated";
                case 'on':
                    return "h15-black-poppins-nobel-hover-on";
                case 'off':
                    return "h15-black-poppins-nobel-hover-off"
            }
        }
    }
    
    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setFourColumnsPageIsHoveringCategoryFromHeader("on", id)
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setFourColumnsPageIsHoveringCategoryFromHeader("off", id)
                break;
        }
    }
    
    const renderFourColumnsPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img1?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img1?.scale}) 
                               translate(${props.fourColumnsPage.itemsStyleValues.img1?.translateX}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img1?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img1?.zIndex}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img2?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img2?.translateX + props.fourColumnsPage.itemsStyleValues.img2?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img2?.translateY + props.fourColumnsPage.itemsStyleValues.img2?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img2?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img2?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img2?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img2?.zIndex}`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img3?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img3?.translateX + props.fourColumnsPage.itemsStyleValues.img3?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img3?.translateY + props.fourColumnsPage.itemsStyleValues.img3?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img3?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img3?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img3?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img3?.zIndex}`
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img4?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img4?.translateX + props.fourColumnsPage.itemsStyleValues.img4?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img4?.translateY + props.fourColumnsPage.itemsStyleValues.img4?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img4?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img4?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img4?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img4?.zIndex}`
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img5?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img5?.translateX + props.fourColumnsPage.itemsStyleValues.img5?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img5?.translateY + props.fourColumnsPage.itemsStyleValues.img5?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img5?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img5?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img5?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img5?.zIndex}`
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img6?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img6?.translateX + props.fourColumnsPage.itemsStyleValues.img6?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img6?.translateY + props.fourColumnsPage.itemsStyleValues.img6?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img6?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img6?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img6?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img6?.zIndex}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img7?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img7?.translateX + props.fourColumnsPage.itemsStyleValues.img7?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img7?.translateY + props.fourColumnsPage.itemsStyleValues.img7?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img7?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img7?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img7?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img7?.zIndex}`
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img8?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img8?.translateX + props.fourColumnsPage.itemsStyleValues.img8?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img8?.translateY + props.fourColumnsPage.itemsStyleValues.img8?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img8?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img8?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img8?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img8?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img8?.zIndex}`
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img9?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img9?.translateX + props.fourColumnsPage.itemsStyleValues.img9?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img9?.translateY + props.fourColumnsPage.itemsStyleValues.img9?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img9?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img9?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img9?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img9?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img9?.zIndex}`
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img10?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img10?.translateX + props.fourColumnsPage.itemsStyleValues.img10?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img10?.translateY + props.fourColumnsPage.itemsStyleValues.img10?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img10?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img10?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img10?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img10?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img10?.zIndex}`
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img11?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img11?.translateX + props.fourColumnsPage.itemsStyleValues.img11?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img11?.translateY + props.fourColumnsPage.itemsStyleValues.img11?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img11?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img11?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img11?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img11?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img11?.zIndex}`
                };
            case 12:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img12?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img12?.translateX + props.fourColumnsPage.itemsStyleValues.img12?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img12?.translateY + props.fourColumnsPage.itemsStyleValues.img12?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img12?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img12?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img12?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img12?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img12?.zIndex}`
                };
            case 13:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img13?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img13?.translateX + props.fourColumnsPage.itemsStyleValues.img13?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img13?.translateY + props.fourColumnsPage.itemsStyleValues.img13?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img13?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img13?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img13?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img13?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img13?.zIndex}`
                };
            case 14:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img14?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img14?.translateX + props.fourColumnsPage.itemsStyleValues.img14?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img14?.translateY + props.fourColumnsPage.itemsStyleValues.img14?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img14?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img14?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img14?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img14?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img14?.zIndex}`
                };
            case 15:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img15?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img15?.translateX + props.fourColumnsPage.itemsStyleValues.img15?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img15?.translateY + props.fourColumnsPage.itemsStyleValues.img15?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img15?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img15?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img15?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img15?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img15?.zIndex}`
                };
            case 16:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img16?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img16?.translateX + props.fourColumnsPage.itemsStyleValues.img16?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img16?.translateY + props.fourColumnsPage.itemsStyleValues.img16?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img16?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img16?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img16?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img16?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img16?.zIndex}`
                };
            case 17:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img17?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img17?.translateX + props.fourColumnsPage.itemsStyleValues.img17?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img17?.translateY + props.fourColumnsPage.itemsStyleValues.img17?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img17?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img17?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img17?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img17?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img17?.zIndex}`
                };
            case 18:
                return {
                    position: "absolute",
                    width: `${props.fourColumnsPage.itemsStyleValues.img18?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.fourColumnsPage.itemsStyleValues.img18?.translateX + props.fourColumnsPage.itemsStyleValues.img18?.width/2}px ${props.fourColumnsPage.itemsStyleValues.img18?.translateY + props.fourColumnsPage.itemsStyleValues.img18?.width/2}px`,
                    transform: `scale(${props.fourColumnsPage.itemsStyleValues.img18?.scale})
                                translate(${props.fourColumnsPage.itemsStyleValues.img18?.translateX}px, ${props.fourColumnsPage.itemsStyleValues.img18?.translateY}px)`,
                    transition: `transform ${props.fourColumnsPage.itemsStyleValues.img18?.transition}s ease-out`,
                    zIndex: `${props.fourColumnsPage.itemsStyleValues.img18?.zIndex}`
                };
        }
    }

    const categoryFromHeaderOnClickHandler = (key) => {
        // Set selected category from the header

        props.setActivityOfFourColumnsPageCategoriesFromHeader(key);
        setCategoryFromHeader(key);

        // Set height for the fourColumnsPage items div

        renderFourColumnsPageStyleHeight();

        // Set images state according to the selected category

        if(key !== "showAll"){
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(props.fourColumnsPage.items, key);
            props.disappearenceAndAppearanceOfElementsDueToTheCategoryFourColumnsPage(arrayOfAppearAndDisapperElements);

            localStorage.setItem("fourColumnsPageHG", JSON.stringify({activeCategoryFromHeader: key}));

            props.fourColumnsPage.items.map(el => {
                let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === key);
                if(checkIfElementHasSelectedCategory){
                    setImagesState("categoryFromHeaderOnClick", el.id, 'appear', arrayOfAppearAndDisapperElements);
                }else{
                    setImagesState("categoryFromHeaderOnClick", el.id, 'disappear', arrayOfAppearAndDisapperElements);
                }
            })
        }
        else{
            localStorage.setItem("fourColumnsPageHG", JSON.stringify({activeCategoryFromHeader: "showAll"}));
            setImagesState("showAllCategories", -1);
        }
       
    }

    const renderFourColumnsPageStyleWidth = () => {
        if(size.width > 1250){
            return 1170;
        }
        if(size.width <= 1250 && size.width > 1165){
            return 1090;
        }
        if(size.width <= 1165 && size.width > 960){
            return 890;
        }
        if(size.width <= 960 && size.width > 734){
            return 630;
        }
        if(size.width <= 734 && size.width > 600){
            return 530;
        }
        if(size.width <= 600){
            return 430;
        }
    }

    const renderFourColumnsPageStyleHeight = () => {
        let numOfAppearElements;
        let objToArray = [];
        
        numOfAppearElements = props.fourColumnsPage.itemsStyleValues;
        objToArray = Utility.getArrayOfEmptyVal(Object.keys(props.fourColumnsPage.itemsStyleValues).length);
        objToArray = objToArray.map((el,i) => {
            return {
                imageId: `img${i + 1}`,
                obj: {
                    ...props.fourColumnsPage.itemsStyleValues[`img${i + 1}`]
                }
            }
        })
        objToArray = objToArray.map(el => {
            if(el.obj.scale === 1){
                return true;
            }else{
                return false;
            }
        })
        numOfAppearElements = objToArray.filter(item => item === true).length;
        
        let elementInTheRow = size.width <= 960 ? 2 : 4;
        if(Number.isInteger(numOfAppearElements/elementInTheRow)){
            numOfAppearElements = numOfAppearElements/elementInTheRow;
        }else{
            numOfAppearElements = Math.floor(numOfAppearElements/elementInTheRow) + 1;
        }
        return numOfAppearElements* Utility.setWidthOfImage("fourColumnsPage", size.width) + numOfAppearElements * 30;
    }

    const renderFourColumnsPageData = () => {
        return(
            <div className="four-columns-page-data-wrapper">
                <div 
                    className="four-columns-page-categories-from-header"
                    style={{
                        width: `${renderFourColumnsPageStyleWidth()}px`
                    }}
                >{props.fourColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="four-columns-page-category-from-header"
                            onMouseEnter={() => handleMouseEnter("categoryFromHeader", el.id)} 
                            onMouseLeave={() => handleMouseLeave("categoryFromHeader", el.id)}
                            onClick={() => categoryFromHeaderOnClickHandler(el.key)}
                        >
                            <H15 className={renderClassName("categoryFromHeader", el.isHover, el.active)}>{el.label}</H15>
                        </div>
                    )
                })}
                </div>
                <div  
                    id="fourColumnsPageItems"
                    style={{
                        position: "relative",
                        width: `${renderFourColumnsPageStyleWidth()}px`,
                        height: `${renderFourColumnsPageStyleHeight("onInit")}px`
                    }}
                >{props.fourColumnsPage.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            style={renderFourColumnsPageItemStyle(el.id)}
                        >
                            <OverlayImage
                                page="fourColumnsPage"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                            />
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

    const renderLoadMoreButton = () => {
        if(props.fourColumnsPage.loadingMoreData && !props.fourColumnsPage.errorMoreData){
            return(
                <div 
                    className="four-columns-page-button-load-more-loading-error"
                >
                    <LoadingVersion2 
                        color="rgb(37, 37, 37)"
                        width={18}
                        height={18}
                    />
                </div>
            )
        }
        if(!props.fourColumnsPage.loadingMoreData && !props.fourColumnsPage.errorMoreData){
            return(
                <div className="four-columns-page-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={loadMoreOnClick}
                        disabled={props.fourColumnsPage.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.fourColumnsPage.loadingMoreData && props.fourColumnsPage.errorMoreData){
            return(
                <div 
                    className="four-columns-page-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.fourColumnsPage.errorMoreData}`}</H19>
                </div>
            )
        }
    }

    const renderFourColumnsPageContent = () => {
        if(props.fourColumnsPage.loading && !props.fourColumnsPage.error){
            return(
                <div 
                    className="four-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.fourColumnsPage.loading && !props.fourColumnsPage.error){
            return(
                <div className="four-columns-page-wrapper">
                    <div className="four-columns-page-header">
                        <H45 className="h45-nero-lustria">Four Columns</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderFourColumnsPageData()}
                    {categoryFromHeader === "showAll" ? renderLoadMoreButton() : null}
                </div>
            )
        }
        if(!props.fourColumnsPage.loading && props.fourColumnsPage.error){
            return(
                <div 
                    className="four-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.fourColumnsPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="four-columns-page" id="fourColumnsPage">
            {renderToolbars()}
            {renderFourColumnsPageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            fourColumnsPage: Selectors.getFourColumnsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state)
        };
    },
    (dispatch) => {
        return {
            fetchFourColumnsPage: bindActionCreators(Services.fetchFourColumnsPage, dispatch),
            setFourColumnsPageIsHoveringCategoryFromHeader: bindActionCreators(Actions.setFourColumnsPageIsHoveringCategoryFromHeader, dispatch),
            fetchFourColumnsPageSuccess: bindActionCreators(Actions.fetchFourColumnsPageSuccess, dispatch),
            initItemsStylesStateForFourColumnsPage: bindActionCreators(Actions.initItemsStylesStateForFourColumnsPage, dispatch),
            addMoreItemsStylesStateForFourColumnsPage: bindActionCreators(Actions.addMoreItemsStylesStateForFourColumnsPage, dispatch),
            setCategoriesFourColumnsPage: bindActionCreators(Actions.setCategoriesFourColumnsPage, dispatch),
            loadMoreFourColumnsPageSuccess: bindActionCreators(Actions.loadMoreFourColumnsPageSuccess, dispatch),
            loadMoreDisableButtonStateForFourColumnsPage: bindActionCreators(Actions.loadMoreDisableButtonStateForFourColumnsPage, dispatch),
            updateItemsStyleValuesFourColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesFourColumnsPage, dispatch),
            setTopPositionOfTheItemForFourColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForFourColumnsPage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setLoadMoreStepFourColumnsPage: bindActionCreators(Actions.setLoadMoreStepFourColumnsPage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesFourColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesFourColumnsPage, dispatch),
            setActivityOfFourColumnsPageCategoriesFromHeader: bindActionCreators(Actions.setActivityOfFourColumnsPageCategoriesFromHeader, dispatch),
            disappearenceAndAppearanceOfElementsDueToTheCategoryFourColumnsPage: bindActionCreators(Actions.disappearenceAndAppearanceOfElementsDueToTheCategoryFourColumnsPage, dispatch),
            setTopPositionOfTheItemForFourColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForFourColumnsPage, dispatch),
        };
    }
)(FourColumnsPage);
 