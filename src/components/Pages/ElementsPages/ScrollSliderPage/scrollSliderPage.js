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

import './scrollSliderPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import ScrollSlider from '../../../../library/ScrollSlider/scrollSlider';
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
    H45
} from '../../../UtilityComponents';

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
 * ScrollSliderPage component definition and export
 */

export const ScrollSliderPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [mouseOnSlider, setMouseOnSlider] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        let timeout;

        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.scrollSliderPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchScrollSliderPageDataSuccess(FakeData.scrollSliderPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchScrollSliderPageData();
            }
        }

        // Scroll to the top of the screen

        if(!props.scrollSliderPage.sliderContainersCoordinateRange[0].rendered){
            timeout = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            // Cleaning the unmounted component
            
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('mousemove', handleMouseMove);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.scrollSliderPage.sliderContainersCoordinateRange[0].updated]);

    const handleMouseMove = (e) => {

        /**
         * Check if the mouse inside the scroll slider container
         */

        let pageX = e.pageX;
        let pageY = e.pageY;
        let slider1CoordinateRange = props.scrollSliderPage.sliderContainersCoordinateRange.find(item => item.key === "scrollSliderId1");
      
        if(slider1CoordinateRange.leftCoordinate < pageX && pageX < slider1CoordinateRange.rightCoordinate &&
            slider1CoordinateRange.topCoordinate < pageY && pageY < slider1CoordinateRange.bottomCoordinate
        ){
            setMouseOnSlider(true);
        }else{
            setMouseOnSlider(false);
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("scrollSliderPage");

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

    const renderBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
            default:
                return 'white';
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="scrollSliderPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="scrollSliderPage"
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
                        page="scrollSliderPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="scrollSliderPage"
                    />
                </>
            )
        }
    }
    
    const renderScrollSliderPageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="scroll-slider-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <ScrollSlider
                    page="scrollSliderComponent"
                    sliderKey="scrollSliderId1"
                    sliderContent={arr}
                    sliderContainersCoordinateRange={props.scrollSliderPage.sliderContainersCoordinateRange}
                    orientation="row"
                    rememberCoordinateRange={props.rememberCoordinateRangeOfScrollSliderForScrollSliderPage}
                    mouseOnSlider={mouseOnSlider}
                    updateScrollSlidersStyleValues={props.updateScrollSlidersStyleValuesScrollSliderPage}
                    scrollSlidersStyleValues={props.scrollSliderPage.scrollSlidersStyleValues}
                />
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="scroll-slider-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${arr.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="scroll-slider-page" id="scrollSliderPage">
            {renderToolbars()}
            <div className="scroll-slider-page-wrapper">
                <div className="scroll-slider-page-header">
                    <H45 className="h45-nero-lustria">Scroll Slider</H45>
                </div>
                <div className="grey-line"/>
                {renderScrollSliderPageDataContent(props.scrollSliderPage.items)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            scrollSliderPage: Selectors.getScrollSliderPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchScrollSliderPageData: bindActionCreators(Services.fetchScrollSliderPageData, dispatch),
            fetchScrollSliderPageDataSuccess: bindActionCreators(Actions.fetchScrollSliderPageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            rememberCoordinateRangeOfScrollSliderForScrollSliderPage: bindActionCreators(Actions.rememberCoordinateRangeOfScrollSliderForScrollSliderPage, dispatch),
            forgetCoordinateRangeOfScrollSliderForScrollSliderPage: bindActionCreators(Actions.forgetCoordinateRangeOfScrollSliderForScrollSliderPage, dispatch),
            updateScrollSlidersStyleValuesScrollSliderPage: bindActionCreators(Actions.updateScrollSlidersStyleValuesScrollSliderPage, dispatch),
        };
    }
)(ScrollSliderPage);
 