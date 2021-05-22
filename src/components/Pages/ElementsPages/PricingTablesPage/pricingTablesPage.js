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

import './pricingTablesPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import PricingTablesCardItem from '../../../SmallParts/PricingTablesCardItem/pricingTablesCardItem';
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
 * PricingTablesPage component definition and export
 */

export const PricingTablesPage = (props) => {

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

        if(props.pricingTablesPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPricingTablesPageSection1DataSuccess(FakeData.pricingTablesPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPricingTablesPageSection1Data();
            }
        }

        if(props.pricingTablesPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPricingTablesPageSection2DataSuccess(FakeData.pricingTablesPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPricingTablesPageSection2Data();
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
        let el = document.getElementById("pricingTablesPage");

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
                        page="pricingTablesPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="pricingTablesPage"
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
                        page="pricingTablesPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="pricingTablesPage"
                    />
                </>
            )
        }
    }
    
    const renderBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
                return 'black';
            default:
                return 'white';
        }
    }
    
    const renderLoadingBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'black';
            case 'section2':
            default:
                return 'white';
        }
    }

    const renderPricingTablePageSection1Data = (arr) => {
        return(
            <div className="pricing-tables-page-section1-data-items">{arr.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="pricing-tables-page-section1-data-item"
                    >
                        <PricingTablesCardItem
                            page="pricingTablesPageSection1"
                            data={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            currentPagePathName="pricing-tables"
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderPricingTablePageSection2Data = (arr) => {
        return(
            <div className="pricing-tables-page-section2-data-items">{arr.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="pricing-tables-page-section2-data-item"
                    >
                        <PricingTablesCardItem
                            page="pricingTablesPageSection2"
                            data={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            currentPagePathName="pricing-tables"
                        />
                    </div>
                )
            })}</div>
        )
    }
    
    const renderPricingTablePageDataContent = (section, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="pricing-tables-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color={renderLoadingBackgroundColor(section)}/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            switch(section){
                case 'section1':
                    return(
                        <div className="pricing-tables-page-section1-data-wrapper">
                            {renderPricingTablePageSection1Data(arr)}
                        </div>
                    );
                case 'section2':
                    return(
                        <div className="pricing-tables-page-section2-data-wrapper">
                            {renderPricingTablePageSection2Data(arr)}
                        </div>
                    );
            }
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="pricing-tables-page-loading-error" 
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
        <div className="pricing-tables-page" id="pricingTablesPage">
            {renderToolbars()}
            <div className="pricing-tables-page-wrapper">
                <div className="pricing-tables-page-header">
                    <H45 className="h45-nero-lustria">Pricing Tables</H45>
                </div>
                <div className="grey-line"/>
                {renderPricingTablePageDataContent("section1", props.pricingTablesPage.section1Data)}
                {renderPricingTablePageDataContent("section2", props.pricingTablesPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            pricingTablesPage: Selectors.getPricingTablesPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPricingTablesPageSection1Data: bindActionCreators(Services.fetchPricingTablesPageSection1Data, dispatch),
            fetchPricingTablesPageSection1DataSuccess: bindActionCreators(Actions.fetchPricingTablesPageSection1DataSuccess, dispatch),
            fetchPricingTablesPageSection2Data: bindActionCreators(Services.fetchPricingTablesPageSection2Data, dispatch),
            fetchPricingTablesPageSection2DataSuccess: bindActionCreators(Actions.fetchPricingTablesPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(PricingTablesPage);
 