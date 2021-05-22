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

import uuid from "uuid";

/**
 * Styles
 */

import './iconWithTextPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import OurProcess from '../../../Parts/OurProcess/ourProcess';
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
    EW20,
    EH20,
    EH110,
    EH135
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
 * IconWithTextPage component definition and export
 */

export const IconWithTextPage = (props) => {

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

        if(props.iconWithTextPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchIconWithTextPageSection1DataSuccess(FakeData.iconWithTextPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchIconWithTextPageSection1Data();
            }
        }

        if(props.iconWithTextPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchIconWithTextPageSection2DataSuccess(FakeData.iconWithTextPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchIconWithTextPageSection2Data();
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
        let el = document.getElementById("iconWithTextPage");

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
                        page="iconWithTextPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="iconWithTextPage"
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
                        page="iconWithTextPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="iconWithTextPage"
                    />
                </>
            )
        }
    }

    const renderIconWithTextPageSection1DataContent = () => {
        return(
            <div className="icon-with-text-page-section-1-data">
                <OurProcess
                    component="iconWithTextPageSection1"
                    data={props.iconWithTextPage.section1Data}
                />
            </div>
        )
    } 
    
    const renderIconWithTextPageSection2DataContent = () => {
        return(
            <div className="icon-with-text-page-section-2-data">
                <OurProcess
                    component="iconWithTextPageSection2"
                    data={props.iconWithTextPage.section2Data}
                />
            </div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="icon-with-text-page" id="iconWithTextPage">
            {renderToolbars()}
            <div className="icon-with-text-page-wrapper">
                <div className="icon-with-text-page-header">
                    <H45 className="h45-nero-lustria">Icon With Text</H45>
                </div>
                <div className="grey-line"/>
                {renderIconWithTextPageSection1DataContent()}
                {renderIconWithTextPageSection2DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            iconWithTextPage: Selectors.getIconWithTextPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchIconWithTextPageSection1Data: bindActionCreators(Services.fetchIconWithTextPageSection1Data, dispatch),
            fetchIconWithTextPageSection1DataSuccess: bindActionCreators(Actions.fetchIconWithTextPageSection1DataSuccess, dispatch),
            fetchIconWithTextPageSection2Data: bindActionCreators(Services.fetchIconWithTextPageSection2Data, dispatch),
            fetchIconWithTextPageSection2DataSuccess: bindActionCreators(Actions.fetchIconWithTextPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(IconWithTextPage);
 