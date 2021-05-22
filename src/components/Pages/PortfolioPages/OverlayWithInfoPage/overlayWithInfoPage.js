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

import './overlayWithInfoPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
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
 * OverlayWithInfoPage component definition and export
 */

export const OverlayWithInfoPage = (props) => {

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

        if(props.overlayWithInfoPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchOverlayWithInfoPageSuccess(FakeData.overlayWithInfoPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchOverlayWithInfoPage();
            }
        }

        // Return to the part of the screen where the link to the selected item is located

        let timeout = setTimeout(() => {
            if(!props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("overlayWithInfoPage");

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
                        page="overlayWithInfoPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="overlayWithInfoPage"
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
                        page="overlayWithInfoPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="overlayWithInfoPage"
                    />
                </>
            )
        }
    }
    
    const renderOverlayWithInfoPageData = () => {
        return(
            <div className="overlay-with-info-page-items">{props.overlayWithInfoPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        className="overlay-with-info-page-item"
                    >
                        <OverlayImage
                            page="overlayWithInfoPage"
                            obj={el}
                            setIsHoveringCategory={props.setOverlayWithInfoPageIsHoveringCategory}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderOverlayWithInfoPageContent = () => {
        if(props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error){
            return(
                <div 
                    className="overlay-with-info-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.overlayWithInfoPage.loading && !props.overlayWithInfoPage.error){
            return(
                <div className="overlay-with-info-page-wrapper">
                    <div className="overlay-with-info-page-header">
                        <H45 className="h45-nero-lustria">Overlay With Info</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderOverlayWithInfoPageData()}
                </div>
            )
        }
        if(!props.overlayWithInfoPage.loading && props.overlayWithInfoPage.error){
            return(
                <div 
                    className="overlay-with-info-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.overlayWithInfoPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="overlay-with-info-page" id="overlayWithInfoPage">
            {renderToolbars()}
            {renderOverlayWithInfoPageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            overlayWithInfoPage: Selectors.getOverlayWithInfoPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchOverlayWithInfoPage: bindActionCreators(Services.fetchOverlayWithInfoPage, dispatch),
            fetchOverlayWithInfoPageSuccess: bindActionCreators(Actions.fetchOverlayWithInfoPageSuccess, dispatch),
            setOverlayWithInfoPageIsHoveringCategory: bindActionCreators(Actions.setOverlayWithInfoPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(OverlayWithInfoPage);
 