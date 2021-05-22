/**
 * Libraries
 */

import React, {
    useEffect, useState
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

import './home.scss';

/**
 * Components
 */

import Toolbar from '../../../Parts/Toolbar/toolbar';
import HeaderImages from '../../../SmallParts/HeaderImages/headerImages';
import Section1 from '../../../Parts/Section1/section1';
import Section2 from '../../../Parts/Section2/section2';
import Section3 from '../../../Parts/Section3/section3';
import Section4 from '../../../Parts/Section4/section4';
import Section5 from '../../../Parts/Section5/section5';
import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Home component definition and export
 */

export const Home = (props) => {

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
        
        window.onload = () => {
            window.addEventListener('wheel', checkScrollDirection);
        }
        
        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', checkScrollDirection);
            props.setShowBackToTopComponent(false);
        }
    }, []);



    const checkScrollDirection = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("home");

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
                        page="home"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="home"
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
                        page="home"
                    />
                    <Toolbar 
                        style="regularScreen"
                        toolbarMainColor="regular"
                        page="home"
                    />
                </>
            )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="home" id="home">
            <div className="home-main-background">
                <div className="home-curtain"/>
                {renderToolbars()}
                <HeaderImages/>
            </div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            {props.photoViewerForPictureBoardTextItemOpen ? 
            <PhotoViewer
                width={625}
                height={457}
                component="pictureBoardForTextItem"
            /> : null}
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerForPictureBoardTextItemOpen: Selectors.getPhotoViewerForPictureBoardTextItemOpenState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(Home);
 