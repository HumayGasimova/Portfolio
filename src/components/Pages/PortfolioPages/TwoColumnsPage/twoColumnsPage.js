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

import './twoColumnsPage.scss';

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
 * TwoColumnsPage component definition and export
 */

export const TwoColumnsPage = (props) => {

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

        if(props.twoColumnsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                fetchMockData(props.twoColumnsPage.loadMoreStep);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTwoColumnsPage(props.twoColumnsPage.loadMoreStep);
            }
            props.setLoadMoreStepTwoColumnsPage(props.twoColumnsPage.loadMoreStep + 1);
        }
        
        // Return to the part of the screen where the link to the selected item is located (items in absolute position)

        let timeout = setTimeout(() => {
            if(!props.twoColumnsPage.loading && !props.twoColumnsPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemsWrapper = document.getElementById("twoColumnsPageItems").offsetTop;
                let itemTopPosition = props.twoColumnsPage.itemsTopPosition.find(item => item.key === props.historyPopFromItem).topPosition;
                window.scrollTo(0, itemTopPosition + itemsWrapper - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        //Init active category from the header if it exists

        let twoColumnsPageLocalStorage = JSON.parse(localStorage.getItem("twoColumnsPageHG"));

        if(twoColumnsPageLocalStorage !== null){
            /**
             * Set appear and disappear images width, height, transition
             * and translate coordinates according to the category selected 
             * from the header (local storage)
             */

            categoryFromHeaderOnClickHandler(twoColumnsPageLocalStorage.activeCategoryFromHeader);
        }else{
            if(props.twoColumnsPage.categories.length !== 0){
            
                /**
                 * Set appear and disappear images width, height, transition
                 * and translate coordinates according to the category selected from the header
                 */
    
                let categeryKey = props.twoColumnsPage.categories.find(item => item.active === true).key;
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
    }, [props.twoColumnsPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        updateTransitionValue();
    }, [
        props.twoColumnsPage.itemsStyleValues.img1?.transition,props.twoColumnsPage.itemsStyleValues.img2?.transition,
        props.twoColumnsPage.itemsStyleValues.img3?.transition,props.twoColumnsPage.itemsStyleValues.img4?.transition,
        props.twoColumnsPage.itemsStyleValues.img5?.transition,props.twoColumnsPage.itemsStyleValues.img6?.transition,
        props.twoColumnsPage.itemsStyleValues.img7?.transition,props.twoColumnsPage.itemsStyleValues.img8?.transition,
        props.twoColumnsPage.itemsStyleValues.img9?.transition,props.twoColumnsPage.itemsStyleValues.img10?.transition,
        props.twoColumnsPage.itemsStyleValues.img11?.transition,props.twoColumnsPage.itemsStyleValues.img12?.transition,
        props.twoColumnsPage.itemsStyleValues.img13?.transition,props.twoColumnsPage.itemsStyleValues.img14?.transition,
        props.twoColumnsPage.itemsStyleValues.img15?.transition,props.twoColumnsPage.itemsStyleValues.img16?.transition,
        props.twoColumnsPage.itemsStyleValues.img17?.transition,props.twoColumnsPage.itemsStyleValues.img18?.transition
    ]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("twoColumnsPage");

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

        if(props.twoColumnsPage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                ...props.twoColumnsPage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                ...props.twoColumnsPage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                ...props.twoColumnsPage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                ...props.twoColumnsPage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                ...props.twoColumnsPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img6?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                ...props.twoColumnsPage.itemsStyleValues.img6,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img7?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                ...props.twoColumnsPage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img8?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                ...props.twoColumnsPage.itemsStyleValues.img8,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img9?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                ...props.twoColumnsPage.itemsStyleValues.img9,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img10?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                ...props.twoColumnsPage.itemsStyleValues.img10,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img11?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                ...props.twoColumnsPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img12?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                ...props.twoColumnsPage.itemsStyleValues.img12,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img13?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                ...props.twoColumnsPage.itemsStyleValues.img13,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img14?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                ...props.twoColumnsPage.itemsStyleValues.img14,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img15?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                ...props.twoColumnsPage.itemsStyleValues.img15,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img16?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                ...props.twoColumnsPage.itemsStyleValues.img16,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img17?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                ...props.twoColumnsPage.itemsStyleValues.img17,
                transition: 0.45
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img18?.transition === 0){
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                ...props.twoColumnsPage.itemsStyleValues.img18,
                transition: 0.45
            });
        }
    }

    const smoothTransition = () => {
        if(props.twoColumnsPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesTwoColumnsPage("img1",{
                ...props.twoColumnsPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesTwoColumnsPage("img2",{
                ...props.twoColumnsPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesTwoColumnsPage("img3",{
                ...props.twoColumnsPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesTwoColumnsPage("img4",{
                ...props.twoColumnsPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesTwoColumnsPage("img5",{
                ...props.twoColumnsPage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img6){
            props.updateItemsStyleValuesTwoColumnsPage("img6",{
                ...props.twoColumnsPage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img7){
            props.updateItemsStyleValuesTwoColumnsPage("img7",{
                ...props.twoColumnsPage.itemsStyleValues.img7,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img8){
            props.updateItemsStyleValuesTwoColumnsPage("img8",{
                ...props.twoColumnsPage.itemsStyleValues.img8,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img9){
            props.updateItemsStyleValuesTwoColumnsPage("img9",{
                ...props.twoColumnsPage.itemsStyleValues.img9,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img10){
            props.updateItemsStyleValuesTwoColumnsPage("img10",{
                ...props.twoColumnsPage.itemsStyleValues.img10,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img11){
            props.updateItemsStyleValuesTwoColumnsPage("img11",{
                ...props.twoColumnsPage.itemsStyleValues.img11,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img12){
            props.updateItemsStyleValuesTwoColumnsPage("img12",{
                ...props.twoColumnsPage.itemsStyleValues.img12,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img13){
            props.updateItemsStyleValuesTwoColumnsPage("img13",{
                ...props.twoColumnsPage.itemsStyleValues.img13,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img14){
            props.updateItemsStyleValuesTwoColumnsPage("img14",{
                ...props.twoColumnsPage.itemsStyleValues.img14,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img15){
            props.updateItemsStyleValuesTwoColumnsPage("img15",{
                ...props.twoColumnsPage.itemsStyleValues.img15,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img16){
            props.updateItemsStyleValuesTwoColumnsPage("img16",{
                ...props.twoColumnsPage.itemsStyleValues.img16,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img17){
            props.updateItemsStyleValuesTwoColumnsPage("img17",{
                ...props.twoColumnsPage.itemsStyleValues.img17,
                transition: 0
            });
        }
        if(props.twoColumnsPage.itemsStyleValues.img18){
            props.updateItemsStyleValuesTwoColumnsPage("img18",{
                ...props.twoColumnsPage.itemsStyleValues.img18,
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

            let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("twoColumnsPage", arrayOfDisappearAndAppearElements, size.width);
            let translateCoordinatesObj = updatedTranslateCoordinates.find(item => item.id === elementToUpdate);
            let itemsStylesObj = props.twoColumnsPage.itemsStyleValues[`img${elementToUpdate}`];
            switch(elementToUpdate){
                case 1:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img1", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img1",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img1", translateCoordinatesObj.translateY);
                    }
                    return;
                case 2:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img2", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img2",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img2", translateCoordinatesObj.translateY);
                    }
                    return;
                case 3:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img3", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img3",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img3", translateCoordinatesObj.translateY);
                    }
                    return;
                case 4:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img4", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img4",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img4", translateCoordinatesObj.translateY);
                    }
                    return;
                case 5:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img5", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img5",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img5", translateCoordinatesObj.translateY);
                    }
                    return;
                case 6:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img6", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img6",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img6", translateCoordinatesObj.translateY);
                    }
                    return;
                case 7:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img7", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img7",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img7", translateCoordinatesObj.translateY);
                    }
                    return;
                case 8:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img8", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img8",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img8", translateCoordinatesObj.translateY);
                    }
                    return;
                case 9:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img9", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img9",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img9", translateCoordinatesObj.translateY);
                    }
                    return;
                case 10:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img10", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img10",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img10", translateCoordinatesObj.translateY);
                    }
                    return;
                case 11:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img11", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img11",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img11", translateCoordinatesObj.translateY);
                    }
                    return;
                case 12:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img12", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img12",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img12", translateCoordinatesObj.translateY);
                    }
                    return;
                case 13:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img13", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img13",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img13", translateCoordinatesObj.translateY);
                    }
                    return;
                case 14:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img14", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img14",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img14", translateCoordinatesObj.translateY);
                    }
                    return;
                case 15:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img15", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img15",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img15", translateCoordinatesObj.translateY);
                    }
                    return;
                case 16:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img16", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img16",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img16", translateCoordinatesObj.translateY);
                    }
                    return;
                case 17:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img17", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img17",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img17", translateCoordinatesObj.translateY);
                    }
                    return;
                case 18:
                    if(action === "disappear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 0,
                            translateX: itemsStylesObj.translateX,
                            translateY: itemsStylesObj.translateY,
                            transition: 0.45,
                            zIndex: 10,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img18", itemsStylesObj.translateY);
                    }else if(action === "appear"){
                        props.updateItemsStyleValuesTwoColumnsPage("img18",{
                            width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                            scale: 1,
                            translateX: translateCoordinatesObj.translateX,
                            translateY: translateCoordinatesObj.translateY,
                            transition: 0.45,
                            zIndex: 20,
                            rendered: true
                        });
                        props.setTopPositionOfTheItemForTwoColumnsPage("img18", translateCoordinatesObj.translateY);
                    }
                    return;
            }
        }else{
            // Set all images state

            if(props.twoColumnsPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img1",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img1.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 0, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 0, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img1", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 0, "atTheBeginning"));
            }
            if(props.twoColumnsPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img2",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img2.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 1),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 1, "atTheBeginning"),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img2", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 1, "atTheBeginning"));
            }
            if(props.twoColumnsPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img3",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img3.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 2, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 2),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img3", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 2));
            }
            if(props.twoColumnsPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img4",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img4.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 3),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 3),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img4", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 3));
            }
            if(props.twoColumnsPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img5",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img5.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 4, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 4),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img5", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 4));
            }
            if(props.twoColumnsPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img6",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img6.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 5),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 5),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img6", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 5));
            }
            if(props.twoColumnsPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img7",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img7.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 6, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 6),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img7", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 6));
            }
            if(props.twoColumnsPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img8",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img8.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 7),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 7),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img8", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 7));
            }
            if(props.twoColumnsPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img9",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img9.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 8, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 8),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img9", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 8));
            }
            if(props.twoColumnsPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img10",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img10.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 9),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 9),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img10", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 9));
            }
            if(props.twoColumnsPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img11",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img11.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 10, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 10),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img11", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 10));
            }
            if(props.twoColumnsPage.itemsStyleValues.img12?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img12",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img12.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 11),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 11),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img12", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 11));
            }
            if(props.twoColumnsPage.itemsStyleValues.img13?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img13",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img13.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 12, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 12),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img13", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 12));
            }
            if(props.twoColumnsPage.itemsStyleValues.img14?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img14",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img14.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 13),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 13),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img14", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 13));
            }
            if(props.twoColumnsPage.itemsStyleValues.img15?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img15",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img15.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 14, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 14),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img15", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 14));
            }
            if(props.twoColumnsPage.itemsStyleValues.img16?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img16",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img16.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 15),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 15),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img16", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 15));
            }
            if(props.twoColumnsPage.itemsStyleValues.img17?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img17",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img17.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 16, "atTheBeginning"),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 16),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img17", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 16));
            }
            if(props.twoColumnsPage.itemsStyleValues.img18?.rendered){
                props.updateItemsStyleValuesTwoColumnsPage("img18",{
                    width: Utility.setWidthOfImage("twoColumnsPage", size.width),
                    scale: ['onInit', 'showAllCategories'].includes(opt) ? 1 : props.twoColumnsPage.itemsStyleValues.img18.scale,
                    translateX: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "X", 17),
                    translateY: Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 17),
                    transition: ['showAllCategories'].includes(opt) ? 0.45 : 0,
                    zIndex: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForTwoColumnsPage("img18", Utility.calcTranslateCoordinates("twoColumnsPage", size.width, "Y", 17));
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
                        page="twoColumnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="twoColumnsPage"
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
                        page="twoColumnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="twoColumnsPage"
                    />
                </>
            )
        }
    }

    const fetchMockData = (step, category, screenWidth, numOfItemsInArray) => {
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

    const loadMoreOnClick = () => {
        // Fetch more data for the component
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)
            fetchMockData(props.twoColumnsPage.loadMoreStep, 
                categoryFromHeader, 
                size.width, 
                props.twoColumnsPage.items.length, 
                props.twoColumnsPage.itemsStyleValues);
        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchTwoColumnsPage(props.twoColumnsPage.loadMoreStep, 
                categoryFromHeader, 
                size.width, 
                props.twoColumnsPage.items.length, 
                props.twoColumnsPage.itemsStyleValues);         
        }

        props.setLoadMoreStepTwoColumnsPage(props.twoColumnsPage.loadMoreStep + 1);

        // Set height for the twoColumnsPage items div

        renderTwoColumnsPageStyleHeight();
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
                props.setTwoColumnsPageIsHoveringCategoryFromHeader("on", id)
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'categoryFromHeader':
                props.setTwoColumnsPageIsHoveringCategoryFromHeader("off", id)
                break;
        }
    }
    
    const renderTwoCloumnsPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img1?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: "center",
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img1?.scale}) 
                               translate(${props.twoColumnsPage.itemsStyleValues.img1?.translateX}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img1?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img1?.zIndex}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img2?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img2?.translateX + props.twoColumnsPage.itemsStyleValues.img2?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img2?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img2?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img2?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img2?.zIndex}`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img3?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img3?.translateX + props.twoColumnsPage.itemsStyleValues.img3?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img3?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img3?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img3?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img3?.zIndex}`
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img4?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img4?.translateX + props.twoColumnsPage.itemsStyleValues.img4?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img4?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img4?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img4?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img4?.zIndex}`
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img5?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img5?.translateX + props.twoColumnsPage.itemsStyleValues.img5?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img5?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img5?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img5?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img5?.zIndex}`
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img6?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img6?.translateX + props.twoColumnsPage.itemsStyleValues.img6?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img6?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img6?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img6?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img6?.zIndex}`
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img7?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img7?.translateX + props.twoColumnsPage.itemsStyleValues.img7?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img7?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img7?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img7?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img7?.zIndex}`
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img8?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img8?.translateX + props.twoColumnsPage.itemsStyleValues.img8?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img8?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img8?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img8?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img8?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img8?.zIndex}`
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img9?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img9?.translateX + props.twoColumnsPage.itemsStyleValues.img9?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img9?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img9?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img9?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img9?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img9?.zIndex}`
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img10?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img10?.translateX + props.twoColumnsPage.itemsStyleValues.img10?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img10?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img10?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img10?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img10?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img10?.zIndex}`
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img11?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img11?.translateX + props.twoColumnsPage.itemsStyleValues.img11?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img11?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img11?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img11?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img11?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img11?.zIndex}`
                };
            case 12:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img12?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img12?.translateX + props.twoColumnsPage.itemsStyleValues.img12?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img12?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img12?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img12?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img12?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img12?.zIndex}`
                };
            case 13:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img13?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img13?.translateX + props.twoColumnsPage.itemsStyleValues.img13?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img13?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img13?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img13?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img13?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img13?.zIndex}`
                };
            case 14:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img14?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img14?.translateX + props.twoColumnsPage.itemsStyleValues.img14?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img14?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img14?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img14?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img14?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img14?.zIndex}`
                };
            case 15:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img15?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img15?.translateX + props.twoColumnsPage.itemsStyleValues.img15?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img15?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img15?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img15?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img15?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img15?.zIndex}`
                };
            case 16:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img16?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img16?.translateX + props.twoColumnsPage.itemsStyleValues.img16?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img16?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img16?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img16?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img16?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img16?.zIndex}`
                };
            case 17:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img17?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img17?.translateX + props.twoColumnsPage.itemsStyleValues.img17?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img17?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img17?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img17?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img17?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img17?.zIndex}`
                };
            case 18:
                return {
                    position: "absolute",
                    width: `${props.twoColumnsPage.itemsStyleValues.img18?.width}px`,
                    paddingRight: "30px",
                    transformOrigin: `${props.twoColumnsPage.itemsStyleValues.img18?.translateX + props.twoColumnsPage.itemsStyleValues.img18?.width/2}px 50%`,
                    transform: `scale(${props.twoColumnsPage.itemsStyleValues.img18?.scale})
                                translate(${props.twoColumnsPage.itemsStyleValues.img18?.translateX}px, ${props.twoColumnsPage.itemsStyleValues.img18?.translateY}px)`,
                    transition: `transform ${props.twoColumnsPage.itemsStyleValues.img18?.transition}s ease-out`,
                    zIndex: `${props.twoColumnsPage.itemsStyleValues.img18?.zIndex}`
                };
        }
    }

    const categoryFromHeaderOnClickHandler = (key) => {
        // Set selected category from the header

        props.setActivityOfTwoColumnsPageCategoriesFromHeader(key);
        setCategoryFromHeader(key);

        // Set height for the twoColumnsPage items div

        renderTwoColumnsPageStyleHeight();

        // Set images state according to the selected category

        if(key !== "showAll"){
            let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(props.twoColumnsPage.items, key);
            props.disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage(arrayOfAppearAndDisapperElements);

            localStorage.setItem("twoColumnsPageHG", JSON.stringify({activeCategoryFromHeader: key}));

            props.twoColumnsPage.items.map(el => {
                let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === key);
                if(checkIfElementHasSelectedCategory){
                    setImagesState("categoryFromHeaderOnClick", el.id, 'appear', arrayOfAppearAndDisapperElements);
                }else{
                    setImagesState("categoryFromHeaderOnClick", el.id, 'disappear', arrayOfAppearAndDisapperElements);
                }
            })
        }
        else{
            localStorage.setItem("twoColumnsPageHG", JSON.stringify({activeCategoryFromHeader: "showAll"}));
            setImagesState("showAllCategories", -1);
        }
       
    }

    const renderTwoColumnsPageStyleWidth = () => {
        if(size.width > 1200){
            return 1100;
        }
        if(size.width <= 1200 && size.width > 905){
            return 840;
        }
        if(size.width <= 905 && size.width > 710){
            return 630;
        }
        if(size.width <= 710){
            return 430;
        }
    }

    const renderTwoColumnsPageStyleHeight = () => {
        let numOfAppearElements;
        let objToArray = [];
        
        numOfAppearElements = props.twoColumnsPage.itemsStyleValues;
        objToArray = Utility.getArrayOfEmptyVal(Object.keys(props.twoColumnsPage.itemsStyleValues).length);
        objToArray = objToArray.map((el,i) => {
            return {
                imageId: `img${i + 1}`,
                obj: {
                    ...props.twoColumnsPage.itemsStyleValues[`img${i + 1}`]
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
        return (+numOfAppearElements/2).toFixed()* Utility.setWidthOfImage("twoColumnsPage", size.width) + +(numOfAppearElements/2).toFixed() * 30;
    }

    const renderTwoColumnsPageData = () => {
        return(
            <div className="two-columns-page-data-wrapper">
                <div 
                    className="two-columns-page-categories-from-header"
                    style={{
                        width: `${renderTwoColumnsPageStyleWidth()}px`
                    }}
                >{props.twoColumnsPage.categories.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="two-columns-page-category-from-header"
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
                    id="twoColumnsPageItems"
                    style={{
                        position: "relative",
                        width: `${renderTwoColumnsPageStyleWidth()}px`,
                        height: `${renderTwoColumnsPageStyleHeight("onInit")}px`
                    }}
                >{props.twoColumnsPage.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            style={renderTwoCloumnsPageItemStyle(el.id)}
                        >
                            <OverlayImage
                                page="twoColumnsPage"
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
        if(props.twoColumnsPage.loadingMoreData && !props.twoColumnsPage.errorMoreData){
            return(
                <div 
                    className="two-columns-page-button-load-more-loading-error"
                >
                    <LoadingVersion2 
                        color="rgb(37, 37, 37)"
                        width={18}
                        height={18}
                    />
                </div>
            )
        }
        if(!props.twoColumnsPage.loadingMoreData && !props.twoColumnsPage.errorMoreData){
            return(
                <div className="two-columns-page-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={loadMoreOnClick}
                        disabled={props.twoColumnsPage.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.twoColumnsPage.loadingMoreData && props.twoColumnsPage.errorMoreData){
            return(
                <div 
                    className="two-columns-page-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.twoColumnsPage.errorMoreData}`}</H19>
                </div>
            )
        }
    }

    const renderTwoColumnsPageContent = () => {
        if(props.twoColumnsPage.loading && !props.twoColumnsPage.error){
            return(
                <div 
                    className="two-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.twoColumnsPage.loading && !props.twoColumnsPage.error){
            return(
                <div className="two-columns-page-wrapper">
                    <div className="two-columns-page-header">
                        <H45 className="h45-nero-lustria">Two Columns</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderTwoColumnsPageData()}
                    {categoryFromHeader === "showAll" ? renderLoadMoreButton() : null}
                </div>
            )
        }
        if(!props.twoColumnsPage.loading && props.twoColumnsPage.error){
            return(
                <div 
                    className="two-columns-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.twoColumnsPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="two-columns-page" id="twoColumnsPage">
            {renderToolbars()}
            {renderTwoColumnsPageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            twoColumnsPage: Selectors.getTwoColumnsPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTwoColumnsPage: bindActionCreators(Services.fetchTwoColumnsPage, dispatch),
            fetchTwoColumnsPageSuccess: bindActionCreators(Actions.fetchTwoColumnsPageSuccess, dispatch),
            setCategoriesTwoColumnsPage: bindActionCreators(Actions.setCategoriesTwoColumnsPage, dispatch),
            loadMoreTwoColumnsPageSuccess: bindActionCreators(Actions.loadMoreTwoColumnsPageSuccess, dispatch),
            loadMoreDisableButtonStateForTwoColumnsPage: bindActionCreators(Actions.loadMoreDisableButtonStateForTwoColumnsPage, dispatch),
            initItemsStylesStateForTwoColumnsPage: bindActionCreators(Actions.initItemsStylesStateForTwoColumnsPage, dispatch),
            addMoreItemsStylesStateForTwoColumnsPage: bindActionCreators(Actions.addMoreItemsStylesStateForTwoColumnsPage, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
            setTopPositionOfTheItemForTwoColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForTwoColumnsPage, dispatch),
            setTwoColumnsPageIsHoveringCategoryFromHeader: bindActionCreators(Actions.setTwoColumnsPageIsHoveringCategoryFromHeader, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setLoadMoreStepTwoColumnsPage: bindActionCreators(Actions.setLoadMoreStepTwoColumnsPage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            updateItemsStyleValuesTwoColumnsPage: bindActionCreators(Actions.updateItemsStyleValuesTwoColumnsPage, dispatch),
            setActivityOfTwoColumnsPageCategoriesFromHeader: bindActionCreators(Actions.setActivityOfTwoColumnsPageCategoriesFromHeader, dispatch),
            disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage: bindActionCreators(Actions.disappearenceAndAppearanceOfElementsDueToTheCategoryTwoColumnsPage, dispatch),
            setTopPositionOfTheItemForTwoColumnsPage: bindActionCreators(Actions.setTopPositionOfTheItemForTwoColumnsPage, dispatch),
        };
    }
)(TwoColumnsPage);
 