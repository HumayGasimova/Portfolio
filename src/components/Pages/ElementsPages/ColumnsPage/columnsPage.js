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

import './columnsPage.scss';

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
    H25,
    H45,
    EH30,
    EH60
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
 * ColumnsPage component definition and export
 */

export const ColumnsPage = (props) => {

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

        if(props.columnsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchColumnsPageDataSuccess(FakeData.columnsPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchColumnsPageData();
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
        let el = document.getElementById("columnsPage");

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
                        page="columnsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="columnsPage"
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
                        page="columnsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="columnsPage"
                    />
                </>
            )
        }
    }

    const renderColumns = (arr, key) => {
        return(
            <div className="columns-page-columns-wrapper">
                {arr.map((el, i) => {
                    let width;
                    let showEH30;
                    if(size.width > 1120){
                        width = el.columnWidth;
                        showEH30 = false;
                    }
                    if(size.width <= 1120 && size.width > 900){
                        if(key === "columnsPage4ColumnsNormal"){
                            width = 50;
                            showEH30 = (i !== arr.length - 1) && (i !== arr.length - 2) ? true : false;
                        }else{
                            width = 100;
                            showEH30 = (i !== arr.length - 1) ? true : false;
                        }
                    }
                    if(size.width <= 900){
                        showEH30 = (i !== arr.length - 1) ? true : false;
                        width = 100;
                    }
                    return(
                        <div
                            key={i}
                            className="columns-page-column"
                            style={{
                                width: `calc(${width}% - 30px)`
                            }}
                        >
                            <H17 className="h17-nobel-lustria">{el.text}</H17>
                            {showEH30 ? 
                            <EH30/> 
                            : null}
                        </div>
                    )
                })}
            </div>
        )
    }
    
    const renderColumnsPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {
                    return(
                        <React.Fragment
                            key={i}
                        >
                            <H25 className="h25-black-lustria">{el.header}</H25>
                            <EH30/>
                            {renderColumns(el.data, el.key)}
                            {i !== arr.length - 1 ?
                            <EH60/>
                            : null}
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderColumnsPageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="columns-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <div className="columns-page-data-wrapper">
                    {renderColumnsPageData(arr.items)}
                </div>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="columns-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
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
        <div className="columns-page" id="columnsPage">
            {renderToolbars()}
            <div className="columns-page-wrapper">
                <div className="columns-page-header">
                    <H45 className="h45-nero-lustria">Columns</H45>
                </div>
                <div className="grey-line"/>
                {renderColumnsPageDataContent(props.columnsPage)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            columnsPage: Selectors.getColumnsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchColumnsPageData: bindActionCreators(Services.fetchColumnsPageData, dispatch),
            fetchColumnsPageDataSuccess: bindActionCreators(Actions.fetchColumnsPageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(ColumnsPage);
 