/**
 * Libraries
 */

import React, {
    useState,
    useEffect
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

import './testimonialsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
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
 * TestimonialsPage component definition and export
 */

export const TestimonialsPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.testimonialsPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTestimonialsPageSection1DataSuccess(FakeData.testimonialsPageSection1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTestimonialsPageSection1Data();
            }
        }

        if(props.testimonialsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTestimonialsPageSection2DataSuccess(FakeData.testimonialsPageSection2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTestimonialsPageSection2Data();
            }
        }

        if(props.testimonialsPage.section3Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTestimonialsPageSection3DataSuccess(FakeData.testimonialsPageSection3);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTestimonialsPageSection3Data();
            }
        }

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("testimonialsPage");

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

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="testimonialsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="testimonialsPage"
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
                        page="testimonialsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="testimonialsPage"
                    />
                </>
            )
        }
    }

    const renderTestimonialsPageSection1DataContent = () => {
        if(props.testimonialsPage.section1Data.loading && !props.testimonialsPage.section1Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'black'
                    }}
                >
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section1Data.loading && !props.testimonialsPage.section1Data.error){
            return(
                <div className="testimonials-page-section-1-data">
                    <H45 className="h45-white-lustria">Testimonials</H45>
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.testimonialsPage.section1Data.items.length !== 0 ? 
                    <Swiper
                        component="testimonialsPageSection1"
                        contentArray={props.testimonialsPage.section1Data.items}
                        content={props.testimonialsPage.section1Data}
                        translateWidth={size.width - 130}
                        showNumbersOfSlides={1}
                        setSwiperState={props.setSwiperStateForTestimonialsPageSection1}
                        swiperData={props.testimonialsPage.section1Data.swiper}
                        setIsHoveringSwiperDot={props.setTestimonialsPageSection1IsHoveringSwiperDot}
                        autoPlay
                        showDots
                    /> : null}
                </div>
            )
        }
        if(!props.testimonialsPage.section1Data.loading && props.testimonialsPage.section1Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'black'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderTestimonialsPageSection2DataContent = () => {
        if(props.testimonialsPage.section2Data.loading && !props.testimonialsPage.section2Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section2Data.loading && !props.testimonialsPage.section2Data.error){
            return(
                <div className="testimonials-page-section-2-data">
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.testimonialsPage.section2Data.items.length !== 0 ? 
                    <Swiper 
                        component="testimonialsPageSection2"
                        contentArray={props.testimonialsPage.section2Data.items}
                        content={props.testimonialsPage.section2Data}
                        translateWidth={size.width - 130}
                        showNumbersOfSlides={1}
                        setSwiperState={props.setSwiperStateForTestimonialsPageSection2}
                        swiperData={props.testimonialsPage.section2Data.swiper}
                        autoPlay
                    /> : null}
                </div>
            )
        }
        if(!props.testimonialsPage.section2Data.loading && props.testimonialsPage.section2Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderTestimonialsPageSection3DataContent = () => {
        if(props.testimonialsPage.section3Data.loading && !props.testimonialsPage.section3Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'black'
                    }}
                >
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.testimonialsPage.section3Data.loading && !props.testimonialsPage.section3Data.error){
            return(
                <div className="testimonials-page-section-3-data">
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.testimonialsPage.section2Data.items.length !== 0 ? 
                    <Swiper 
                        component="testimonialsPageSection3"
                        contentArray={props.testimonialsPage.section3Data.items}
                        content={props.testimonialsPage.section3Data}
                        translateWidth={size.width - 130}
                        showNumbersOfSlides={1}
                        setSwiperState={props.setSwiperStateForTestimonialsPageSection3}
                        swiperData={props.testimonialsPage.section3Data.swiper}
                        autoPlay
                    /> : null}
                </div>
            )
        }
        if(!props.testimonialsPage.section3Data.loading && props.testimonialsPage.section3Data.error){
            return(
                <div 
                    className="testimonials-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'black'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonialsPage.section3Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="testimonials-page" id="testimonialsPage">
            {renderToolbars()}
            <div className="testimonials-page-wrapper">
                <div className="testimonials-page-header">
                    <H45 className="h45-nero-lustria">Testimonials</H45>
                </div>
                <div className="grey-line"/>
                {renderTestimonialsPageSection1DataContent()}
                {renderTestimonialsPageSection2DataContent()} 
                {renderTestimonialsPageSection3DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            testimonialsPage: Selectors.getTestimonialsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTestimonialsPageSection1Data: bindActionCreators(Services.fetchTestimonialsPageSection1Data, dispatch),
            fetchTestimonialsPageSection1DataSuccess: bindActionCreators(Actions.fetchTestimonialsPageSection1DataSuccess, dispatch),
            fetchTestimonialsPageSection2Data: bindActionCreators(Services.fetchTestimonialsPageSection2Data, dispatch),
            fetchTestimonialsPageSection2DataSuccess: bindActionCreators(Actions.fetchTestimonialsPageSection2DataSuccess, dispatch),
            fetchTestimonialsPageSection3Data: bindActionCreators(Services.fetchTestimonialsPageSection3Data, dispatch),
            fetchTestimonialsPageSection3DataSuccess: bindActionCreators(Actions.fetchTestimonialsPageSection3DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setSwiperStateForTestimonialsPageSection1: bindActionCreators(Actions.setSwiperStateForTestimonialsPageSection1, dispatch),
            setSwiperStateForTestimonialsPageSection2: bindActionCreators(Actions.setSwiperStateForTestimonialsPageSection2, dispatch),
            setSwiperStateForTestimonialsPageSection3: bindActionCreators(Actions.setSwiperStateForTestimonialsPageSection3, dispatch),
            setSwiperStateForTestimonialsPageSection2: bindActionCreators(Actions.setSwiperStateForTestimonialsPageSection2, dispatch),
            setSwiperStateForTestimonialsPageSection3: bindActionCreators(Actions.setSwiperStateForTestimonialsPageSection3, dispatch),
            setTestimonialsPageSection1IsHoveringSwiperDot: bindActionCreators(Actions.setTestimonialsPageSection1IsHoveringSwiperDot, dispatch)
        };
    }
)(TestimonialsPage);
 