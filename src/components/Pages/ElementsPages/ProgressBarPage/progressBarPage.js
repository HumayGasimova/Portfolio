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

import './progressBarPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import ProgressBarItem from '../../../SmallParts/ProgressBarItem/progressBarItem';
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
    H45,
    EW70,
    EH70
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
 * ProgressBarPage component definition and export
 */

export const ProgressBarPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showComponentSection2, setShowComponentSection2] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.progressBarPage.section1Column1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchProgressBarPageSection1Column1DataSuccess(FakeData.statisticsData);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchProgressBarPageSection1Column1Data();
            }
        }

        if(props.progressBarPage.section1Column2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchProgressBarPageSection1Column2DataSuccess(FakeData.statisticsData);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchProgressBarPageSection1Column2Data();
            }
        }

        if(props.progressBarPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchProgressBarPageSection2DataSuccess(FakeData.statisticsData);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchProgressBarPageSection2Data();
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
    }, [props.progressBarPage.section2Data.items.length]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("progressBarPage");
        let progressBarPageSection2 = document.getElementById("progressBarPageSection2");

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
        
        if(props.progressBarPage.section2Data.items.length !== 0){
            // Render the component only when it appears on the screen
            
            if(scrollHeight >= progressBarPageSection2.offsetTop - size.height/2 - 400){
                setShowComponentSection2(true);
            }

            // Render the component only when it appears on a vertically oriented screen
            
            if(size.width - size.height < 0){
                if(scrollHeight >= progressBarPageSection2.offsetTop - size.height/2 - 900){
                    setShowComponentSection2(true);
                }
            }
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
                        page="progressBarPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="progressBarPage"
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
                        page="progressBarPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="progressBarPage"
                    />
                </>
            )
        }
    }

    const renderProgressBarPageDate = (arr, component) => {
        return(
            <>{arr.map((el,i) => {
                return(
                    <ProgressBarItem 
                        key={i}
                        label={el.label}
                        percent={el.percent}
                        component={component}
                    />
                )
            })}</>
        )
    }

    const renderProgressBarPageSection1Column1DataContent = () => {
        if(props.progressBarPage.section1Column1Data.loading && !props.progressBarPage.section1Column1Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section1Column1Data.loading && !props.progressBarPage.section1Column1Data.error){
            return(
                <div className="progress-bar-page-section1-column1-items">
                    {renderProgressBarPageDate(props.progressBarPage.section1Column1Data.items, "progressBarPageSection1Column1")}
                </div>
            )
        }
        if(!props.progressBarPage.section1Column1Data.loading && props.progressBarPage.section1Column1Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.progressBarPage.section1Column1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderProgressBarPageSection1Column2DataContent = () => {
        if(props.progressBarPage.section1Column2Data.loading && !props.progressBarPage.section1Column2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section1Column2Data.loading && !props.progressBarPage.section1Column2Data.error){
            return(
                <div className="progress-bar-page-section1-column2-items">
                    {renderProgressBarPageDate(props.progressBarPage.section1Column2Data.items, "progressBarPageSection1Column2")}
                </div>
            )
        }
        if(!props.progressBarPage.section1Column2Data.loading && props.progressBarPage.section1Column2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.progressBarPage.section1Column2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderProgressBarPageSection2DataContent = () => {
        if(props.progressBarPage.section2Data.loading && !props.progressBarPage.section2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.progressBarPage.section2Data.loading && !props.progressBarPage.section2Data.error){
            return(
                <>
                    {showComponentSection2 ? 
                    <div className="progress-bar-page-section2-items">
                        {renderProgressBarPageDate(props.progressBarPage.section2Data.items, "progressBarPageSection2")}
                    </div> : null}
                </>
            )
        }
        if(!props.progressBarPage.section2Data.loading && props.progressBarPage.section2Data.error){
            return(
                <div 
                    className="progress-bar-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.progressBarPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="progress-bar-page" id="progressBarPage">
            {renderToolbars()}
            <div className="progress-bar-page-wrapper">
                <div className="progress-bar-page-header">
                    <H45 className="h45-nero-lustria">Progress Bar</H45>
                </div>
                <div className="grey-line"/>
                <div className="progress-bar-page-section-1-data-wrapper">
                    {renderProgressBarPageSection1Column1DataContent()}
                    {/* <EW70/>
                    <EH70/> */}
                    {renderProgressBarPageSection1Column2DataContent()}
                </div>
                <div 
                    id="progressBarPageSection2"
                    className="progress-bar-page-section-2-data-wrapper"
                >
                    {renderProgressBarPageSection2DataContent()}
                </div>
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            progressBarPage: Selectors.getProgressBarPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchProgressBarPageSection1Column1Data: bindActionCreators(Services.fetchProgressBarPageSection1Column1Data, dispatch),
            fetchProgressBarPageSection1Column1DataSuccess: bindActionCreators(Actions.fetchProgressBarPageSection1Column1DataSuccess, dispatch),
            fetchProgressBarPageSection1Column2Data: bindActionCreators(Services.fetchProgressBarPageSection1Column2Data, dispatch),
            fetchProgressBarPageSection1Column2DataSuccess: bindActionCreators(Actions.fetchProgressBarPageSection1Column2DataSuccess, dispatch),
            fetchProgressBarPageSection2Data: bindActionCreators(Services.fetchProgressBarPageSection2Data, dispatch),
            fetchProgressBarPageSection2DataSuccess: bindActionCreators(Actions.fetchProgressBarPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
        };
    }
)(ProgressBarPage);
 