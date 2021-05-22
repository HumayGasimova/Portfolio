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

import './accordionsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import AccordionItem from '../../../SmallParts/AccordionItem/accordionItem';
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
    EW70
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
 * AccordionsPage component definition and export
 */

export const AccordionsPage = (props) => {

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

        if(props.accordionsPage.section1Data.itemsLeftColumn.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchAccordionsPageSection1DataSuccess(FakeData.accordionsPageSection1Data);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchAccordionsPageSection1Data();
            }
        }

        if(props.accordionsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchAccordionsPageSection2DataSuccess(FakeData.accordionsPageSection2Data);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchAccordionsPageSection2Data();
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
        let el = document.getElementById("accordionsPage");

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
                        page="accordionsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="accordionsPage"
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
                        page="accordionsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="accordionsPage"
                    />
                </>
            )
        }
    }

    const renderAccordionsPageSection1Data = (arr, opt) => {
        return(
            <div className="accordions-page-section1-items">{arr.map((el, i) => {
                return(
                    <div key={i}>
                        <AccordionItem 
                            style="simple"
                            obj={el}
                            activateAccordionItem={props.setActivitySection1ItemAccordionsPage}
                            iconType="plusIcon"
                            option={opt}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderAccordionsPageSection2Data = () => {
        return(
            <div className="accordions-page-section2-items">{props.accordionsPage.section2Data.items.map((el, i) => {
                return(
                    <div key={i}>
                        <AccordionItem
                            style="hoverBlackAndWhite"
                            hoverEffect
                            obj={el}
                            setIsHoverAccordionItem={props.setIsHoverSection2ItemAccordionsPage}
                            activateAccordionItem={props.setActivitySection2ItemAccordionsPage}
                            iconType="plusIcon"
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderAccordionsPageSection1DataContent = () => {
        if(props.accordionsPage.section1Data.loading && !props.accordionsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.accordionsPage.section1Data.loading && !props.accordionsPage.section1Data.error){
            return(
                <div className="accordions-page-section1-data-wrapper">
                    {renderAccordionsPageSection1Data(props.accordionsPage.section1Data.itemsLeftColumn,"leftColumn")}
                    <EW70/>
                    {renderAccordionsPageSection1Data(props.accordionsPage.section1Data.itemsRightColumn,"rightColumn")}
                </div>
            )
        }
        if(!props.accordionsPage.section1Data.loading && props.accordionsPage.section1Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.accordionsPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderAccordionsPageSection2DataContent = () => {
        if(props.accordionsPage.section2Data.loading && !props.accordionsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.accordionsPage.section2Data.loading && !props.accordionsPage.section2Data.error){
            return(
                <div className="accordions-page-section2-data-wrapper">
                    {renderAccordionsPageSection2Data()}
                </div>
               
            )
        }
        if(!props.accordionsPage.section2Data.loading && props.accordionsPage.section2Data.error){
            return(
                <div 
                    className="accordions-page-loading-error" 
                    style={{height: `${size.heigh/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.accordionsPage.section2Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="accordions-page" id="accordionsPage">
            {renderToolbars()}
            <div className="accordions-page-wrapper">
                <div className="accordions-page-header">
                    <H45 className="h45-nero-lustria">Accordions</H45>
                </div>
                <div className="grey-line"/>
                {renderAccordionsPageSection1DataContent()}
                {renderAccordionsPageSection2DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            accordionsPage: Selectors.getAccordionsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchAccordionsPageSection1Data: bindActionCreators(Services.fetchAccordionsPageSection1Data, dispatch),
            fetchAccordionsPageSection1DataSuccess: bindActionCreators(Actions.fetchAccordionsPageSection1DataSuccess, dispatch),
            fetchAccordionsPageSection2Data: bindActionCreators(Services.fetchAccordionsPageSection2Data, dispatch),
            fetchAccordionsPageSection2DataSuccess: bindActionCreators(Actions.fetchAccordionsPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setIsHoverSection2ItemAccordionsPage: bindActionCreators(Actions.setIsHoverSection2ItemAccordionsPage, dispatch),
            setActivitySection1ItemAccordionsPage: bindActionCreators(Actions.setActivitySection1ItemAccordionsPage, dispatch),
            setActivitySection2ItemAccordionsPage: bindActionCreators(Actions.setActivitySection2ItemAccordionsPage, dispatch),
        };
    }
)(AccordionsPage);
 