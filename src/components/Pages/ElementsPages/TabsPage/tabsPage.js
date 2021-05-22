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

import './tabsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Tabs from '../../../SmallParts/Tabs/tabs';
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
    EW70,
    EH70
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
 * TabsPage component definition and export
 */

export const TabsPage = (props) => {

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

        if(props.tabsPage.section1Column1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTabsPageSection1Column1DataSuccess(FakeData.tabsPageSection1Column1Data);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTabsPageSection1Column1Data();
            }
        }

        if(props.tabsPage.section1Column2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTabsPageSection1Column2DataSuccess(FakeData.tabsPageSection1Column2Data);
            }else{
                // Fetch data (required to run -> npm run server)
             
                props.fetchTabsPageSection1Column2Data();
            }
        }

        if(props.tabsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchTabsPageSection2DataSuccess(FakeData.tabsPageSection2Data);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTabsPageSection2Data();
            }
        }
        
        // Initialize the lines style for 3 containers with tabs

        let tabsArray = ['section1Column1', 'section1Column2', 'section2']
        props.initUnderlinesStyleStateForTabsPage(tabsArray);

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
        let el = document.getElementById("tabsPage");

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
                        page="tabsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="tabsPage"
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
                        page="tabsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="tabsPage"
                    />
                </>
            )
        }
    }

    const renderTabsPageSection1Column1DataContent = () => {
        if(props.tabsPage.section1Column1Data.loading && !props.tabsPage.section1Column1Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section1Column1Data.loading && !props.tabsPage.section1Column1Data.error){
            let tabsCoordinateRange = props.tabsPage.itemsCooradinatesRanges.find(item => item.tabKey === "section1Column1");
            return(
                <>
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.tabsPage.section1Column1Data.items.length !== 0 ? 
                    <Tabs
                        array={props.tabsPage.section1Column1Data.items}
                        page="tabsPage"
                        tabsKey="section1Column1"
                        setActiveTab={props.setActiveTabOfSection1Column1TabsPage}
                        setIsHoverTab={props.setIsHoverTabOfSection1Column1TabsPage}
                        rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
                        tabsCoordinateRange={tabsCoordinateRange}
                        tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section1Column1}
                        updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
                    /> : null}
                </>
            )
        }
        if(!props.tabsPage.section1Column1Data.loading && props.tabsPage.section1Column1Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section1Column1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderTabsPageSection1Column2DataContent = () => {
        if(props.tabsPage.section1Column2Data.loading && !props.tabsPage.section1Column2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section1Column2Data.loading && !props.tabsPage.section1Column2Data.error){
            let tabsCoordinateRange = props.tabsPage.itemsCooradinatesRanges.find(item => item.tabKey === "section1Column2");
            return(
                <>
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.tabsPage.section1Column2Data.items.length !== 0 ? 
                    <Tabs
                        array={props.tabsPage.section1Column2Data.items}
                        page="tabsPage"
                        tabsKey="section1Column2"
                        setActiveTab={props.setActiveTabOfSection1Column2TabsPage}
                        setIsHoverTab={props.setIsHoverTabOfSection1Column2TabsPage}
                        rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
                        tabsCoordinateRange={tabsCoordinateRange}
                        tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section1Column2}
                        updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
                    /> : null}
                </>
            )
        }
        if(!props.tabsPage.section1Column2Data.loading && props.tabsPage.section1Column2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section1Column2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderTabsPageSection2DataContent = () => {
        if(props.tabsPage.section2Data.loading && !props.tabsPage.section2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.tabsPage.section2Data.loading && !props.tabsPage.section2Data.error){
            let tabsCoordinateRange = props.tabsPage.itemsCooradinatesRanges.find(item => item.tabKey === "section2");
            return(
                <>
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.tabsPage.section2Data.items.length !== 0 ? 
                    <Tabs
                        array={props.tabsPage.section2Data.items}
                        page="tabsPage"
                        tabsKey="section2"
                        setActiveTab={props.setActiveTabOfSection2TabsPage}
                        setIsHoverTab={props.setIsHoverTabOfSection2TabsPage}
                        rememberCoordinateRange={props.rememberCoordinateRangeForTabsPage}
                        tabsCoordinateRange={tabsCoordinateRange}
                        tabsUnderlineStyleValues={props.tabsPage.tabsUnderlinesStyleValues.section2}
                        updateTabsUnderlinesStyleValues={props.updateTabsUnderlinesStyleValuesForTabsPage}
                    /> : null}
                </>
            )
        }
        if(!props.tabsPage.section2Data.loading && props.tabsPage.section2Data.error){
            return(
                <div 
                    className="tabs-page-loading-error" 
                    // style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.tabsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="tabs-page" id="tabsPage">
            {renderToolbars()}
            <div className="tabs-page-wrapper">
                <div className="tabs-page-header">
                    <H45 className="h45-nero-lustria">Tabs</H45>
                </div>
                <div className="grey-line"/>
                <div className="tabs-page-section-1-data-wrapper">
                    {renderTabsPageSection1Column1DataContent()}
                    <EW70/>
                    <EH70/>
                    {renderTabsPageSection1Column2DataContent()}
                </div>
                <div className="tabs-page-section-2-data-wrapper">
                    {renderTabsPageSection2DataContent()}
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
            tabsPage: Selectors.getTabsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTabsPageSection1Column1Data: bindActionCreators(Services.fetchTabsPageSection1Column1Data, dispatch),
            fetchTabsPageSection1Column1DataSuccess: bindActionCreators(Actions.fetchTabsPageSection1Column1DataSuccess, dispatch),
            fetchTabsPageSection1Column2Data: bindActionCreators(Services.fetchTabsPageSection1Column2Data, dispatch),
            fetchTabsPageSection1Column2DataSuccess: bindActionCreators(Actions.fetchTabsPageSection1Column2DataSuccess, dispatch),
            fetchTabsPageSection2Data: bindActionCreators(Services.fetchTabsPageSection2Data, dispatch),
            fetchTabsPageSection2DataSuccess: bindActionCreators(Actions.fetchTabsPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverTabOfSection1Column1TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection1Column1TabsPage, dispatch),
            setIsHoverTabOfSection1Column2TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection1Column2TabsPage, dispatch),
            setIsHoverTabOfSection2TabsPage: bindActionCreators(Actions.setIsHoverTabOfSection2TabsPage, dispatch),
            setActiveTabOfSection1Column1TabsPage: bindActionCreators(Actions.setActiveTabOfSection1Column1TabsPage, dispatch),
            setActiveTabOfSection1Column2TabsPage: bindActionCreators(Actions.setActiveTabOfSection1Column2TabsPage, dispatch),
            setActiveTabOfSection2TabsPage: bindActionCreators(Actions.setActiveTabOfSection2TabsPage, dispatch),
            rememberCoordinateRangeForTabsPage: bindActionCreators(Actions.rememberCoordinateRangeForTabsPage, dispatch),
            initUnderlinesStyleStateForTabsPage: bindActionCreators(Actions.initUnderlinesStyleStateForTabsPage, dispatch),
            updateTabsUnderlinesStyleValuesForTabsPage: bindActionCreators(Actions.updateTabsUnderlinesStyleValuesForTabsPage, dispatch),
        };
    }
)(TabsPage);
 