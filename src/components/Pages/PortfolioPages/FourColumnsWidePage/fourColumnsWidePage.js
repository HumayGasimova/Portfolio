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

import './fourColumnsWidePage.scss';

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
 * FourColumnsWidePage component definition and export
 */

export const FourColumnsWidePage = (props) => {

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

        if(props.fourColumnsWidePage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchFourColumnsWidePageSuccess(FakeData.fourColumnsWidePage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchFourColumnsWidePage();
            }
        }

        // Return to the part of the screen where the link to the selected item is located

        let timeout = setTimeout(() => {
            if(!props.fourColumnsWidePage.loading && !props.fourColumnsWidePage.error && props.historyPopFromItem !== "scrollToTop"){
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
        let el = document.getElementById("fourColumnsWidePage");

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
                        page="fourColumnsWidePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="fourColumnsWidePage"
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
                        page="fourColumnsWidePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="fourColumnsWidePage"
                    />
                </>
            )
        }
    }

    const renderFourColumnsWidePageData = () => {
        return(
            <div className="four-columns-wide-page-items">{props.fourColumnsWidePage.items.map((el, i) => {
                
                return(
                    <div
                        key={i}
                        className="four-columns-wide-page-item"
                        id={el.key}
                    >
                        <OverlayImage
                            page="fourColumnsWidePage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderFourColumnsWidePageContent = () => {
        if(props.fourColumnsWidePage.loading && !props.fourColumnsWidePage.error){
            return(
                <div 
                    className="four-columns-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.fourColumnsWidePage.loading && !props.fourColumnsWidePage.error){
            return(
                <div className="four-columns-wide-page-wrapper">
                    <div className="four-columns-wide-page-header">
                        <H45 className="h45-nero-lustria">4 Columns Wide</H45>
                    </div>
                    {renderFourColumnsWidePageData()}
                </div>
            )
        }
        if(!props.fourColumnsWidePage.loading && props.fourColumnsWidePage.error){
            return(
                <div 
                    className="four-columns-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.fourColumnsWidePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="four-columns-wide-page" id="fourColumnsWidePage">
            {renderToolbars()}
            {renderFourColumnsWidePageContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            fourColumnsWidePage: Selectors.getFourColumnsWidePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchFourColumnsWidePage: bindActionCreators(Services.fetchFourColumnsWidePage, dispatch),
            fetchFourColumnsWidePageSuccess: bindActionCreators(Actions.fetchFourColumnsWidePageSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(FourColumnsWidePage);
 