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

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './callToActionPage.scss';

/**
 * Components
 */

import Toolbar from '../../../Parts/Toolbar/toolbar';
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
    H22,
    H45,
    EH20
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * CallToActionPage component definition and export
 */

export const CallToActionPage = (props) => {

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
        let el = document.getElementById("callToActionPage");

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
                        page="callToActionPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="callToActionPage"
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
                        page="callToActionPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="callToActionPage"
                    />
                </>
            )
        }
    }

    const onMouseDownHandler = (e, path) => {
        switch(e.button){
            case 0:
                // Scroll to the top of the page on left mouse click
                window.scrollTo(0, 0);
                return;
            case 1:
                // Open current page in a new window on scroll wheel click
                window.open(path , "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    /**
     * Markup
     */

    return(
        <div className="call-to-action-page" id="callToActionPage">
            {renderToolbars()}
            <div className="call-to-action-page-wrapper">
                <div className="call-to-action-page-header">
                    <H45 className="h45-nero-lustria">Call To Action</H45>
                </div>
                <div className="grey-line"/>
                <div className="call-to-action-page-first-line">
                    <H22 className="h22-black-lustria">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.</H22>
                    <EH20/>
                    <Button
                        className="call-to-action-get-direction-black"
                        text="get direction."
                        onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                    />
                </div>
                <div className="call-to-action-page-second-line">
                    <H22 className="h22-white-lustria">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.</H22>
                    <EH20/>
                    <Button
                        className="call-to-action-get-direction-clear"
                        text="get direction."
                        onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                    />
                </div>
                <div className="call-to-action-page-third-line">
                    <H22 className="h22-black-lustria">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.</H22>
                    <EH20/>
                    <Button
                        className="call-to-action-get-direction-black"
                        text="get direction."
                        onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                    />
                </div>
                <div className="call-to-action-page-fourth-line">
                    <H22 className="h22-black-lustria">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.</H22>
                    <EH20/>
                    <Button
                        className="call-to-action-get-direction-black"
                        text="get direction."
                        onMouseDown={(e) => onMouseDownHandler(e, props.location.pathname)}
                    />
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
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(withRouter(CallToActionPage));
 