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

import './pieCartsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import PieChartItem from '../../../SmallParts/PieChartItem/pieChartItem';
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
 * PieCartsPage component definition and export
 */

export const PieCartsPage = (props) => {

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

        if(props.pieChartsPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPieChartsPageSection1DataSuccess(FakeData.pieChartsPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPieChartsPageSection1Data();
            }
        }

        if(props.pieChartsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPieChartsPageSection2DataSuccess(FakeData.pieChartsPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPieChartsPageSection2Data();
            }
        }

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.pieChartsPage.section2Data.items.length]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("pieChartsPage");
        let pieChartsPageSection2 = document.getElementById("pieChartsPageSection2");

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

        if(props.pieChartsPage.section2Data.items.length !== 0){
            // Render the component only when it appears on the screen
            
            if(scrollHeight >= pieChartsPageSection2.offsetTop - size.height/2 - 400){
                setShowComponentSection2(true);
            }

            // Render the component only when it appears on a vertically oriented screen
            
            if(size.width - size.height < 0){
                if(scrollHeight >= pieChartsPageSection2.offsetTop - size.height/2 - 900){
                    setShowComponentSection2(true);
                }
            }
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
                        page="pieChartsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="pieChartsPage"
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
                        page="pieChartsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="pieChartsPage"
                    />
                </>
            )
        }
    }

    const renderPieChartsPageSection1Data = (arr) => {
        return(
            <div className="pie-charts-page-section1-data-items">{arr.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="pie-charts-page-section1-data-item"
                    >
                        <PieChartItem
                            chartKey={el.key}
                            percent={el.percent}
                            header={el.header}
                            chartColor="black"
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderPieChartsPageSection2Data = (arr) => {
        return(
            <div 
                className="pie-charts-page-section2-data-items"
            >{arr.items.map((el, i) => {
                if(showComponentSection2){
                    return(
                        <div 
                            key={i}
                            className="pie-charts-page-section2-data-item"
                        >
                            <PieChartItem
                                chartKey={el.key}
                                percent={el.percent}
                                header={el.header}
                                chartColor="black"
                            />
                        </div>
                    )
                }
            })}</div>
        )
    }
    
    const renderPieChartsPageDataContent = (section, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="pie-charts-page-loading-error" 
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
            switch(section){
                case 'section1':
                    return(
                        <div 
                            id="pieChartsPageSection1"
                            className="pie-charts-page-section1-data-wrapper"
                        >
                            {renderPieChartsPageSection1Data(arr)}
                        </div>
                    );
                case 'section2':
                    return(
                        <div 
                            id="pieChartsPageSection2"
                            className="pie-charts-page-section2-data-wrapper"
                        >
                            {renderPieChartsPageSection2Data(arr)}
                        </div>
                    );
            }
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="pie-charts-page-loading-error" 
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
        <div className="pie-charts-page" id="pieChartsPage">
            {renderToolbars()}
            <div className="pie-charts-page-wrapper">
                <div className="pie-charts-page-header">
                    <H45 className="h45-nero-lustria">Pie Charts</H45>
                </div>
                <div className="grey-line"/>
                {renderPieChartsPageDataContent("section1", props.pieChartsPage.section1Data)}
                {renderPieChartsPageDataContent("section2", props.pieChartsPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            pieChartsPage: Selectors.getPieChartsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPieChartsPageSection1Data: bindActionCreators(Services.fetchPieChartsPageSection1Data, dispatch),
            fetchPieChartsPageSection1DataSuccess: bindActionCreators(Actions.fetchPieChartsPageSection1DataSuccess, dispatch),
            fetchPieChartsPageSection2Data: bindActionCreators(Services.fetchPieChartsPageSection2Data, dispatch),
            fetchPieChartsPageSection2DataSuccess: bindActionCreators(Actions.fetchPieChartsPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(PieCartsPage);
 