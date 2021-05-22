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

import './stoneWallWidePage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallWideItem from '../../../SmallParts/StoneWallWideItem/stoneWallWideItem';
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
    H22,
    H65,
    EH30
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
 * StoneWallWidePage component definition and export
 */

export const StoneWallWidePage = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const transitionRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

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
        
        // Return to the part of the screen where the link to the selected item is located (items in absolute position)

        let timeout = setTimeout(() => {
            if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemsWrapper = document.getElementById("stoneWallWidePageItems").offsetTop;
                let itemTopPosition = props.stoneWallWidePage.itemsTopPosition.find(item => item.key === props.historyPopFromItem).topPosition;
                window.scrollTo(0, itemTopPosition + itemsWrapper - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Set images width, height, transition and translate coordinates

        setImagesState();

        // Event Listeners

        const smooth = () => {
            transitionRef.current();
        }

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.stoneWallWidePage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0

        if(props.stoneWallWidePage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                ...props.stoneWallWidePage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                ...props.stoneWallWidePage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                ...props.stoneWallWidePage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                ...props.stoneWallWidePage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                ...props.stoneWallWidePage.itemsStyleValues.img5,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img6?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                ...props.stoneWallWidePage.itemsStyleValues.img6,
                transition: 0.45
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img7?.transition === 0){
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                ...props.stoneWallWidePage.itemsStyleValues.img7,
                transition: 0.45
            });
        }
    }, [props.stoneWallWidePage.itemsStyleValues.img1?.transition,props.stoneWallWidePage.itemsStyleValues.img2?.transition,
        props.stoneWallWidePage.itemsStyleValues.img3?.transition,props.stoneWallWidePage.itemsStyleValues.img4?.transition,
        props.stoneWallWidePage.itemsStyleValues.img5?.transition,props.stoneWallWidePage.itemsStyleValues.img6?.transition,
        props.stoneWallWidePage.itemsStyleValues.img7?.transition])

    const smoothTransition = () => {
        if(props.stoneWallWidePage.itemsStyleValues.img1){
            props.updateItemsStyleValuesStoneWallWidePage("img1",{
                ...props.stoneWallWidePage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img2){
            props.updateItemsStyleValuesStoneWallWidePage("img2",{
                ...props.stoneWallWidePage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img3){
            props.updateItemsStyleValuesStoneWallWidePage("img3",{
                ...props.stoneWallWidePage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img4){
            props.updateItemsStyleValuesStoneWallWidePage("img4",{
                ...props.stoneWallWidePage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img5){
            props.updateItemsStyleValuesStoneWallWidePage("img5",{
                ...props.stoneWallWidePage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img6){
            props.updateItemsStyleValuesStoneWallWidePage("img6",{
                ...props.stoneWallWidePage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.stoneWallWidePage.itemsStyleValues.img7){
            props.updateItemsStyleValuesStoneWallWidePage("img7",{
                ...props.stoneWallWidePage.itemsStyleValues.img7,
                transition: 0
            });
        }
    }

    const handleResize = (e) => {
        setImagesState();
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallWidePage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
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

    const setImagesState = () => {
        let stoneWallWideItemsWidth = document.getElementById('stoneWallWidePageItems')?.clientWidth;
     
        // Set images state according to the screen width

        if(size.width > 1020){
            if(props.stoneWallWidePage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img1",{
                    width: (stoneWallWideItemsWidth - 80)/4,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img1", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img2",{
                    width: (stoneWallWideItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 80)/4 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img2", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img3",{
                    width: (stoneWallWideItemsWidth - 80)/4,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 80)/4*3 + 80,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img3", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img4",{
                    width: (stoneWallWideItemsWidth - 80)/4,
                    height: 0,
                    translateX: 0,
                    translateY: (stoneWallWideItemsWidth - 80)/4 + 30,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img4", (stoneWallWideItemsWidth - 80)/4 + 30);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img5",{
                    width: (stoneWallWideItemsWidth - 80)/4,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 80)/4*3 + 80,
                    translateY: (stoneWallWideItemsWidth - 80)/4 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img5", (stoneWallWideItemsWidth - 80)/4 + 40);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img6",{
                    width: (stoneWallWideItemsWidth - 80)/4,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 80)/4 + 40,
                    translateY: (stoneWallWideItemsWidth - 80)/4*2 + 75,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img6", (stoneWallWideItemsWidth - 80)/4*2 + 75);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img7",{
                    width: (stoneWallWideItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 80)/4*2 + 80,
                    translateY: (stoneWallWideItemsWidth - 80)/4*2 + 75,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img7", (stoneWallWideItemsWidth - 80)/4*2 + 75);
            }
        }
        if(size.width <= 1020 && size.width > 700){
            if(props.stoneWallWidePage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img1",{
                    width: (stoneWallWideItemsWidth - 40)/2,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img1", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img2",{
                    width: (stoneWallWideItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (stoneWallWideItemsWidth - 40)/2 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img2", (stoneWallWideItemsWidth - 40)/2 + 40);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img3",{
                    width: (stoneWallWideItemsWidth - 40)/2,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img3", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img4",{
                    width: (stoneWallWideItemsWidth - 40)/2,
                    height: 0,
                    translateX: 0,
                    translateY: (stoneWallWideItemsWidth - 40)/2*3 + 190,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img4", (stoneWallWideItemsWidth - 40)/2*3 + 190);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img5",{
                    width: (stoneWallWideItemsWidth - 40)/2,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                    translateY: (stoneWallWideItemsWidth - 40)/2*3 + 190,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img5", (stoneWallWideItemsWidth - 40)/2*3 + 190);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img6",{
                    width: (stoneWallWideItemsWidth - 40)/2,
                    height: 0,
                    translateX: (stoneWallWideItemsWidth - 40)/2 + 40,
                    translateY: (stoneWallWideItemsWidth - 40)/2*4 + 255,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img6", (stoneWallWideItemsWidth - 40)/2*4 + 255);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img7",{
                    width: (stoneWallWideItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (stoneWallWideItemsWidth - 40)/2*5 + 295,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img7", (stoneWallWideItemsWidth - 40)/2*5 + 295);
            }
        }
        if(size.width <= 700){
            if(props.stoneWallWidePage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img1",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img1", 0);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img2",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img2", stoneWallWideItemsWidth + 40);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img3",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth*2 + 120,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img3", stoneWallWideItemsWidth*2 + 120);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img4",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth*3 + 160,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img4", stoneWallWideItemsWidth*3 + 160);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img5",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth*5 + 280,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img5", stoneWallWideItemsWidth*5 + 280);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img6",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth*6 + 320,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img6", stoneWallWideItemsWidth*6 + 320);
            }
            if(props.stoneWallWidePage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesStoneWallWidePage("img7",{
                    width: stoneWallWideItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: stoneWallWideItemsWidth*7 + 360,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallWidePage("img7", stoneWallWideItemsWidth*7 + 360);
            }
        }
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
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
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="regularScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
                    />
                </>
            )
        }
    }

    const renderStoneWallWidePageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img1?.width}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img2?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img2?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img2?.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img3?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img3?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img3?.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img4?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img4?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img4?.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img5?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img5?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img5?.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img6?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img6?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img6?.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.stoneWallWidePage.itemsStyleValues.img7?.width}`,
                    transform: `translate(${props.stoneWallWidePage.itemsStyleValues.img7?.translateX}px, ${props.stoneWallWidePage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.stoneWallWidePage.itemsStyleValues.img7?.transition}s ease-out`,
                };
        }
    }

    const renderStoneWallWidePageItemsStyleHeight = () => {
        if(size.width > 1020){
            return 3*props.stoneWallWidePage.itemsStyleValues.img1?.width + 2*40 + 15;
        }
        if(size.width <= 1020 && size.width > 700){
            return 6*props.stoneWallWidePage.itemsStyleValues.img1?.width + 8*40 - 5;
        }
        if(size.width <= 700){
            return 7*props.stoneWallWidePage.itemsStyleValues.img1?.width + props.stoneWallWidePage.itemsStyleValues.img1?.width/2 + 9*40;
        }
    }

    const renderStoneWallWidePageData = () => {
        return(
            <div 
                id="stoneWallWidePageItems"
                className="stone-wall-wide-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${renderStoneWallWidePageItemsStyleHeight()}px`
                }}
            >{props.stoneWallWidePage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        style={renderStoneWallWidePageItemStyle(el.id)}
                    >
                        <StoneWallWideItem
                            page="stoneWallWidePage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            setIsHoveringCategory={props.setStoneWallWidePageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallWideContent = () => {
        if(props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div className="stone-wall-wide-page-wrapper">
                    {renderStoneWallWidePageData()}
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallWidePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="stone-wall-wide-page" id="stoneWallWidePage">
            {renderToolbars()}
            <div className="stone-wall-wide-page-header">
                <H65 className="h65-white-poppins-centered">Tiam convallis,</H65>
                <H65 className="h65-white-poppins-centered">Felis quis dapibus libero.</H65>
                <EH30/>
                <H22 className="h22-nobel-lustria-centered">Lorem ipsum dolor sit amet, quot nusquam mei cu diceret .</H22>
            </div> 
            {renderStoneWallWideContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
          
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            fetchStoneWallWidePageSuccess: bindActionCreators(Actions.fetchStoneWallWidePageSuccess, dispatch),
            initItemsStylesStateForStoneWallWidePage: bindActionCreators(Actions.initItemsStylesStateForStoneWallWidePage, dispatch),
            setStoneWallWidePageIsHoveringCategory: bindActionCreators(Actions.setStoneWallWidePageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesStoneWallWidePage: bindActionCreators(Actions.updateItemsStyleValuesStoneWallWidePage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setTopPositionOfTheItemForStoneWallWidePage: bindActionCreators(Actions.setTopPositionOfTheItemForStoneWallWidePage, dispatch)
        };
    }
)(StoneWallWidePage);
 