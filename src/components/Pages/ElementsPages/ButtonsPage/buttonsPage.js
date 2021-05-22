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

import './buttonsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import ButtonsPageCardItem from '../../../SmallParts/ButtonsPageCardItem/buttonsPageCardItem';
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
 * ButtonsPage component definition and export
 */

export const ButtonsPage = (props) => {

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

        if(props.buttonsPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchButtonsPageSection1DataSuccess(FakeData.buttonsPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchButtonsPageSection1Data();
            }
        }

        if(props.buttonsPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchButtonsPageSection2DataSuccess(FakeData.buttonsPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchButtonsPageSection2Data();
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
        let el = document.getElementById("buttonsPage");

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
                        page="buttonsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="buttonsPage"
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
                        page="buttonsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="buttonsPage"
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
            default:
                return 'white';
        }
    }
    
    const renderButtonsPageSection1Data = (arr) => {
        return(
            <div className="buttons-page-section1-data-items">{arr.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="buttons-page-section1-data-item"
                    >
                        <ButtonsPageCardItem
                            page="buttonsPageSection1"
                            data={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            currentPagePathName="buttons"
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderButtonsPageSection2Data = (arr) => {
        return(
            <div className="buttons-page-section2-data-items">{arr.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="buttons-page-section2-data-item"
                    >
                        <ButtonsPageCardItem
                            page="buttonsPageSection2"
                            data={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            currentPagePathName="buttons"
                        />
                    </div>
                )
            })}</div>
        )
    }
    
    const renderButtonsPageDataContent = (section, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="buttons-page-loading-error" 
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
            switch(section){
                case 'section1':
                    return(
                        <div className="buttons-page-section1-data-wrapper">
                            {renderButtonsPageSection1Data(arr)}
                        </div>
                    );
                case 'section2':
                    return(
                        <div className="buttons-page-section2-data-wrapper">
                            {renderButtonsPageSection2Data(arr)}
                        </div>
                    );
            }
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="buttons-page-loading-error" 
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
        <div className="buttons-page" id="buttonsPage">
            {renderToolbars()}
            <div className="buttons-page-wrapper">
                <div className="buttons-page-header">
                    <H45 className="h45-nero-lustria">Buttons</H45>
                </div>
                <div className="grey-line"/>
                {renderButtonsPageDataContent("section1", props.buttonsPage.section1Data)}
                {renderButtonsPageDataContent("section2", props.buttonsPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            buttonsPage: Selectors.getButtonsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchButtonsPageSection1Data: bindActionCreators(Services.fetchButtonsPageSection1Data, dispatch),
            fetchButtonsPageSection1DataSuccess: bindActionCreators(Actions.fetchButtonsPageSection1DataSuccess, dispatch),
            fetchButtonsPageSection2Data: bindActionCreators(Services.fetchButtonsPageSection2Data, dispatch),
            fetchButtonsPageSection2DataSuccess: bindActionCreators(Actions.fetchButtonsPageSection2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(ButtonsPage);
 