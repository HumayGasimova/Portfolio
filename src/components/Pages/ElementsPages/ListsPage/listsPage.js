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

import './listsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Icon from '../../../SmallParts/Icon/icon';
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
    H45,
    EW10
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
 * ListsPage component definition and export
 */

export const ListsPage = (props) => {

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

        if(props.listsPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchListsPageSection1DataSuccess(FakeData.listsPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchListsPageSection1Data();
            }
        }

        if(props.listsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchListsPageSection2DataSuccess(FakeData.listsPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchListsPageSection2Data();
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
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("listsPage");

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
                        page="listsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="listsPage"
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
                        page="listsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="listsPage"
                    />
                </>
            )
        }
    }

    const renderListsPageDataLists = (section, arr) => {
        return(
            <>{arr.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="lists-page-data-item"
                    >
                        <Icon 
                            key={i}
                            iconType="fontAwesome"
                            icon={el.iconType}
                            iconSize="1x"
                            classNameOpt={`${section}ListsPage`}
                        />
                        <EW10/>
                        <H17 className="h17-nobel-lustria">{el.text}</H17>
                    </div>
                )
            })}</>
        )
    }

    const renderListsPageData = (section, arr) => {
        return(
            <div className={`lists-page-${section}-data-items`}>
                {arr.items.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="lists-page-data-items"
                        >
                            {renderListsPageDataLists(section, el.listsArr)}
                        </div>
                    )
                })}
            </div>
        )
    }
    
    const renderListsPageDataContent = (section, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="lists-page-loading-error" 
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
            return(
                <div className="lists-page-section2-data-wrapper">
                    {renderListsPageData(section, arr)}
                </div>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="lists-page-loading-error" 
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
        <div className="lists-page" id="listsPage">
            {renderToolbars()}
            <div className="lists-page-wrapper">
                <div className="lists-page-header">
                    <H45 className="h45-nero-lustria">Lists</H45>
                </div>
                <div className="grey-line"/>
                {renderListsPageDataContent("section1", props.listsPage.section1Data)}
                {renderListsPageDataContent("section2", props.listsPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            listsPage: Selectors.getListsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchListsPageSection1Data: bindActionCreators(Services.fetchListsPageSection1Data, dispatch),
            fetchListsPageSection1DataSuccess: bindActionCreators(Actions.fetchListsPageSection1DataSuccess, dispatch),
            fetchListsPageSection2Data: bindActionCreators(Services.fetchListsPageSection2Data, dispatch),
            fetchListsPageSection2DataSuccess: bindActionCreators(Actions.fetchListsPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(ListsPage);
 