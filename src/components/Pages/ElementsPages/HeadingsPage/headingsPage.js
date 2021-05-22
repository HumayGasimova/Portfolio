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

import './headingsPage.scss';

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
    H15,
    H17,
    H19,
    H22,
    H35,
    H45,
    H70,
    EH20
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
 * HeadingsPage component definition and export
 */

export const HeadingsPage = (props) => {

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

        if(props.headingsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchHeadingsPageDataSuccess(FakeData.headingsPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchHeadingsPageData();
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

    const renderHeadings = (key, heading) => {
        switch(key){
            case 'headingsPageHeading1':
                return <H70 className="h70-black-lustria">{heading}</H70>
            case 'headingsPageHeading2':
                return <H70 className="h70-black-poppins">{heading}</H70>
            case 'headingsPageHeading3':
                return <H45 className="h45-black-lustria">{heading}</H45>
            case 'headingsPageHeading4':
                return <H35 className="h35-black-poppins">{heading}</H35>
            case 'headingsPageHeading5':
                return <H22 className="h22-black-lustria">{heading}</H22>
            case 'headingsPageHeading6':
                return <H19 className="h19-black-poppins">{heading}</H19>
        }
    }

    const renderHeadingsPageDate = (arr) => {
        return(
            <>{arr.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="headings-page-item"
                    >
                        {renderHeadings(el.key, el.header)}
                        <EH20/>
                        <H17 className="h17-nobel-lustria">{el.text}</H17>
                    </div>
                )
            })}</>
        )
    }

    const renderHeadingsPageDataContent = () => {
        if(props.headingsPage.loading && !props.headingsPage.error){
            return(
                <div 
                    className="headings-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.headingsPage.loading && !props.headingsPage.error){
            return(
                <div className="headings-page-items">
                    {renderHeadingsPageDate(props.headingsPage.items)}
                </div>
            )
        }
        if(!props.headingsPage.loading && props.headingsPage.error){
            return(
                <div 
                    className="headings-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.headingsPage.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="headings-page" id="googleMapsPage">
            {renderToolbars()}
            <div className="headings-page-wrapper">
                <div className="headings-page-header">
                    <H45 className="h45-nero-lustria">Headings</H45>
                </div>
                <div className="grey-line"/>
                {renderHeadingsPageDataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            headingsPage: Selectors.getHeadingsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchHeadingsPageData: bindActionCreators(Services.fetchHeadingsPageData, dispatch),
            fetchHeadingsPageDataSuccess: bindActionCreators(Actions.fetchHeadingsPageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
        };
    }
)(HeadingsPage);
 