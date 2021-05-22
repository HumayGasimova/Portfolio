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

import './blockquotePage.scss';

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
 * BlockquotePage component definition and export
 */

export const BlockquotePage = (props) => {

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

        if(props.blockquotePage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBlockquotePageDataSuccess(FakeData.blockquotePage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBlockquotePageData();
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
        let el = document.getElementById("blockquotePage");

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
                        page="blockquotePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="blockquotePage"
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
                        page="blockquotePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="blockquotePage"
                    />
                </>
            )
        }
    }
    
    const renderBlockquotePageData = (arr) => {
        return(
            <div className="blockquote-page-data-items">
                {arr.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <H17 className="h17-nobel-lustria">{el.text}</H17>
                            {el.blockquote !== null ? 
                            <div className="blockquote-page-blockquote-wrapper">
                                <blockquote className="blockquote-page-blockquote">
                                    <H19 className="h19-black-poppins"> {el.blockquote}</H19>
                                </blockquote>
                            </div>: null}
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderBlockquotePageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="blockquote-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <div className="blockquote-page-data-wrapper">
                    {renderBlockquotePageData(arr.items)}
                </div>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="blockquote-page-loading-error" 
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
        <div className="blockquote-page" id="blockquotePage">
            {renderToolbars()}
            <div className="blockquote-page-wrapper">
                <div className="blockquote-page-header">
                    <H45 className="h45-nero-lustria">Blockquote</H45>
                </div>
                <div className="grey-line"/>
                {renderBlockquotePageDataContent(props.blockquotePage)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            blockquotePage: Selectors.getBlockquotePageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBlockquotePageData: bindActionCreators(Services.fetchBlockquotePageData, dispatch),
            fetchBlockquotePageDataSuccess: bindActionCreators(Actions.fetchBlockquotePageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(BlockquotePage);
 