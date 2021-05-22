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

import './textMarqueePage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
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
    H45
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

import {
    useInterval
} from '../../../../Hooks/useInterval';

/**
 * TextMarqueePage component definition and export
 */

export const TextMarqueePage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [translatedX, setTranslatedX] = useState(300);
    const [fontSize, setFontSize] = useState(25);

    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        // Initialize the font size of the text

        handleResize();

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = (e) => {
        // Initialize the text position

        setTranslatedX(25);

        // Set the font size of the text relative to the window width

        if(size.width > 1120) setFontSize(350);
        if(size.width <= 1120 && size.width > 600) setFontSize(250);
        if(size.width < 600) setFontSize(170);
    }

    useInterval(() => {
        // Update translateX value

        if(size.width > 1120){
            if(translatedX < -2300) setTranslatedX(size.width);
            else setTranslatedX(translatedX - 1);
        }
        if(size.width <= 1120 && size.width > 600){
            if(translatedX < -1650) setTranslatedX(size.width);
            else setTranslatedX(translatedX - 1);
        }
        if(size.width <= 600){
            if(translatedX < -1100) setTranslatedX(size.width);
            else setTranslatedX(translatedX - 1);
        }
       
    }, 10);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("textMarqueePage");

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
                        page="textMarqueePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="textMarqueePage"
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
                        page="textMarqueePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="textMarqueePage"
                    />
                </>
            )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="text-marquee-page" id="textMarqueePage">
            {renderToolbars()}
            <div className="text-marquee-page-wrapper">
                <div className="text-marquee-page-header">
                    <H45 className="h45-nero-lustria">Text Marquee</H45>
                </div>
                <div className="grey-line"/>
                <div className="text-marquee-page-data-wrapper">
                    <div 
                        className="text-marquee-page-text"
                        style={{
                            fontSize: `${fontSize}`,
                            transform: `translateX(${translatedX}px)`
                        }}
                    >
                       Agency. Hello
                    </div>
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
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
        };
    }
)(TextMarqueePage);
 