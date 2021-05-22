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

import './stoneWallPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallItem from '../../../SmallParts/StoneWallItem/stoneWallItem';
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
    H65,
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
 * StoneWallPage component definition and export
 */

export const StoneWallPage = (props) => {

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

        // Return to the part of the screen where the link to the selected item is located (items in absolute position)

        let timeout = setTimeout(() => {
            if(!props.stoneWallPage.loading && !props.stoneWallPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemsWrapper = document.getElementById("stoneWallPageItems").offsetTop;
                let itemTopPosition = props.stoneWallPage.itemsTopPosition.find(item => item.key === props.historyPopFromItem).topPosition;
                window.scrollTo(0, itemTopPosition + itemsWrapper - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Set images width, height, transition and translate coordinates

        setImagesState();

        // Event Listeners
        
        const resize = () => {
            resizeRef.current();
        }
 
        const smooth = () => {
            transitionRef.current();
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
    }, [props.stoneWallPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0

        if(props.stoneWallPage.itemsStyleValues.img1?.transition === 0){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                ...props.stoneWallPage.itemsStyleValues.img1,
                transition: 0.45
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img2?.transition === 0){
            props.updateItemsStyleValuesStoneWallPage("img2",{
                ...props.stoneWallPage.itemsStyleValues.img2,
                transition: 0.45
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img3?.transition === 0){
            props.updateItemsStyleValuesStoneWallPage("img3",{
                ...props.stoneWallPage.itemsStyleValues.img3,
                transition: 0.45
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img4?.transition === 0){
            props.updateItemsStyleValuesStoneWallPage("img4",{
                ...props.stoneWallPage.itemsStyleValues.img4,
                transition: 0.45
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img5?.transition === 0){
            props.updateItemsStyleValuesStoneWallPage("img5",{
                ...props.stoneWallPage.itemsStyleValues.img5,
                transition: 0.45
            });
        }

    }, [props.stoneWallPage.itemsStyleValues.img1?.transition,props.stoneWallPage.itemsStyleValues.img2?.transition,
        props.stoneWallPage.itemsStyleValues.img3?.transition,props.stoneWallPage.itemsStyleValues.img4?.transition,
        props.stoneWallPage.itemsStyleValues.img5?.transition]);

    const smoothTransition = () => {
        if(props.stoneWallPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesStoneWallPage("img1",{
                ...props.stoneWallPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesStoneWallPage("img2",{
                ...props.stoneWallPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesStoneWallPage("img3",{
                ...props.stoneWallPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesStoneWallPage("img4",{
                ...props.stoneWallPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.stoneWallPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesStoneWallPage("img5",{
                ...props.stoneWallPage.itemsStyleValues.img5,
                transition: 0
            });
        }
    }
    
    const handleResize = (e) => {
        setImagesState();
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallPage");

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
        // Set images state according to the screen width

        if(size.width > 1200){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 346.66,
                    height: 346.66,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 346.66,
                    height: 723.33,
                    translateX: 0,
                    translateY: 376.66,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 376.66);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 723.33,
                    height: 723.33,
                    translateX: 376.66,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 346.663,
                    height: 346.66,
                    translateX: 376.66,
                    translateY: 753.32,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 753.32);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 346.66,
                    height: 346.66,
                    translateX: 752.66,
                    translateY: 753.32,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 753.32);
            }
        }
        if(size.width <= 1200 && size.width > 1040){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 296.66,
                    height: 296.66,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 296.66,
                    height: 623.33,
                    translateX: 0,
                    translateY: 326.66,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 326.66);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 623.33,
                    height: 623.33,
                    translateX: 326.66,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 296.66,
                    height: 296.66,
                    translateX: 326.66,
                    translateY: 653.32,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 653.32);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 296.66,
                    height: 296.66,
                    translateX: 653.32,
                    translateY: 653.32,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 653.32);
            }
        }
        if(size.width <= 1040 && size.width > 840){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 368,
                    height: 368,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 368,
                    height: 768,
                    translateX: 0,
                    translateY: 1196,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 1196);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 768,
                    height: 768,
                    translateX: 0,
                    translateY: 398,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 398);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 368,
                    height: 368,
                    translateX: 398,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 368,
                    height: 368,
                    translateX: 398,
                    translateY: 1196,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 1196);
            }
        } 
        if(size.width <= 840 && size.width > 680){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 285,
                    height: 285,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 285,
                    height: 600,
                    translateX: 0,
                    translateY: 945,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 945);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 600,
                    height: 600,
                    translateX: 0,
                    translateY: 315,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 315);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 285,
                    height: 285,
                    translateX: 315,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 285,
                    height: 285,
                    translateX: 315,
                    translateY: 945,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 945);
            }
        }
        if(size.width <= 680 && size.width > 500){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 420,
                    height: 420,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 420,
                    height: 868.55,
                    translateX: 0,
                    translateY: 900,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 900);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 420,
                    height: 420,
                    translateX: 0,
                    translateY: 450,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 450);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 420,
                    height: 420,
                    translateX: 0,
                    translateY: 1798.55,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 1798.55);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 420,
                    height: 420,
                    translateX: 0,
                    translateY: 2248.55,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 2248.55);
            } 
        }
        if(size.width <= 500){
            if(props.stoneWallPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img1",{
                    width: 300,
                    height: 300,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img1", 0);
            }
            if(props.stoneWallPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img2",{
                    width: 300,
                    height: 620.39,
                    translateX: 0,
                    translateY: 660,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img2", 660);
            }
            if(props.stoneWallPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img3",{
                    width: 300,
                    height: 300,
                    translateX: 0,
                    translateY: 330,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img3", 330);
            }
            if(props.stoneWallPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img4",{
                    width: 300,
                    height: 300,
                    translateX: 0,
                    translateY: 1310.39,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img4", 1310.39);
            }
            if(props.stoneWallPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesStoneWallPage("img5",{
                    width: 300,
                    height: 300,
                    translateX: 0,
                    translateY: 1640.39,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForStoneWallPage("img5", 1640.39);
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallPage"
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="stoneWallPage"
                    />
                </>
            )
        }
    }

    const renderStoneWallPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img1?.width}px`,
                    height: `${props.stoneWallPage.itemsStyleValues.img1?.height}px`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img2?.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img2?.height}px`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img2?.translateX}px, ${props.stoneWallPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img2?.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img3?.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img3?.height}px`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img3?.translateX}px, ${props.stoneWallPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img3?.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img4?.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img4?.height}px`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img4?.translateX}px, ${props.stoneWallPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img4?.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.stoneWallPage.itemsStyleValues.img5?.width}`,
                    height: `${props.stoneWallPage.itemsStyleValues.img5?.height}px`,
                    transform: `translate(${props.stoneWallPage.itemsStyleValues.img5?.translateX}px, ${props.stoneWallPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.stoneWallPage.itemsStyleValues.img5?.transition}s ease-out`,
                };
        }
    }

    const renderStoneWallItemsStyleWidth = () => {
        if(size.width > 1200){
            return 1099.99;
        }
        if(size.width <= 1200 && size.width > 1040){
            return 949.99;
        }
        if(size.width <= 1040 && size.width > 840){
            return 766;
        }
        if(size.width <= 840 && size.width > 680){
            return 600;
        }
        if(size.width <= 680 && size.width > 500){
            return 420;
        }
        if(size.width <= 500){
            return 300;
        }
    }

    const renderStoneWallItemsStyleHeight = () => {
        if(size.width > 1200){
            return 1169.99;
        }
        if(size.width <= 1200 && size.width > 1040){
            return 1019.99;
        }
        if(size.width <= 1040 && size.width > 840){
            return 2034;
        }
        if(size.width <= 840 && size.width > 680){
            return 1615;
        }
        if(size.width <= 680 && size.width > 500){
            return 2738.55;
        }
        if(size.width <= 500){
            return 2010.39;
        }
    }

    const renderStoneWallPageData = () => {
        return(
            <div 
                id="stoneWallPageItems"
                style={{
                    position: "relative",
                    width: `${renderStoneWallItemsStyleWidth()}px`,
                    height: `${renderStoneWallItemsStyleHeight()}px`
                }}
            >{props.stoneWallPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        style={renderStoneWallPageItemStyle(el.id)}
                    >
                        <StoneWallItem
                            page="stoneWallPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallContent = () => {
        if(props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div className="stone-wall-page-wrapper">
                    <div className="stone-wall-page-header">
                        <H65 className="h65-nero-poppins">Stone Wall</H65>
                    </div> 
                    {renderStoneWallPageData()}
                </div>
            )
        }
        if(!props.stoneWallPage.loading && props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="stone-wall-page" id="stoneWallPage">
            {renderToolbars()}
            {renderStoneWallContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallPage: Selectors.getStoneWallPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            showBackToTop: Selectors.getShowBackToTopState(state)
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            fetchStoneWallPageSuccess: bindActionCreators(Actions.fetchStoneWallPageSuccess, dispatch),
            initItemsStylesStateForStoneWallPage: bindActionCreators(Actions.initItemsStylesStateForStoneWallPage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            updateItemsStyleValuesStoneWallPage: bindActionCreators(Actions.updateItemsStyleValuesStoneWallPage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setTopPositionOfTheItemForStoneWallPage: bindActionCreators(Actions.setTopPositionOfTheItemForStoneWallPage, dispatch)
        };
    }
)(StoneWallPage);
 