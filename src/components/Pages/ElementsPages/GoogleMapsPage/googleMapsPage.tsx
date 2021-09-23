/**
 * Libraries
 */

import * as React from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './googleMapsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import GoogleMapContainer from '../../../SmallParts/GoogleMapContainer/googleMapContainer';
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
    EW30,
    EH30
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Types
 */

import * as Types from './googleMapsPageTypes';
import * as GeneralTypes from '../../../../reducers/generalTypes';

/**
 * GoogleMapsPage component definition and export
 */

export const GoogleMapsPage: React.FC<Types.GoogelMapsPageProps> = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = React.useState<boolean>(false);
    
    /**
     * Methods
     */

    React.useEffect(() => {
   
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "", null);

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

    const handleOnWheel = (e: MouseEvent) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("googleMapsPage");

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
                        page="googleMapsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="googleMapsPage"
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
                        page="googleMapsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="googleMapsPage"
                    />
                </>
            )
        }
    }

    const renderGoogleMapsPageSection1Column1DataContent = () => {
        return(
            <div className="google-maps-page-section1-column1-data">
                <GoogleMapContainer/>
            </div>
        )
    } 
    
    const renderGoogleMapsPageSection1Column2DataContent = () => {
        return(
            <div className="google-maps-page-section1-column1-data">
                <GoogleMapContainer/>
            </div>
        )
    }

    const renderGoogleMapsPageSection2DataContent = () => {
        return(
            <div className="google-maps-page-section2-data">
                <GoogleMapContainer/>
            </div>
        )
    } 

    /**
     * Markup
     */

    return(
        <div className="google-maps-page" id="googleMapsPage">
            {renderToolbars()}
            <div className="google-maps-page-wrapper">
                <div className="google-maps-page-header">
                    <H45 className="h45-nero-lustria">Google Maps</H45>
                </div>
                <div className="grey-line"/>
                <div className="google-maps-page-section-1-data-wrapper">
                    {renderGoogleMapsPageSection1Column1DataContent()}
                    <EW30/>
                    <EH30/>
                    {renderGoogleMapsPageSection1Column2DataContent()}
                </div>
                <div className="google-maps-page-section-2-data-wrapper">
                    {renderGoogleMapsPageSection2DataContent()}
                </div>
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect<Types.MapStateToPropsTypes, Types.MapDispatchToPropsTypes>(
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
)(GoogleMapsPage);
 