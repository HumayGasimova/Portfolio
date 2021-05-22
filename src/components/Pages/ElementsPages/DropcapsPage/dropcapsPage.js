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

import './dropcapsPage.scss';

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
    H45,
    EH30,
    EH80
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
 * DropcapsPage component definition and export
 */

export const DropcapsPage = (props) => {

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

        if(props.dropcapsPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchDropcapsPageDataSuccess(FakeData.dropcapsPage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchDropcapsPageData();
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
        let el = document.getElementById("dropcapsPage");

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
                        page="dropcapsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="dropcapsPage"
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
                        page="dropcapsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="dropcapsPage"
                    />
                </>
            )
        }
    }

    const renderParagraph = (obj) => {
        let firstLetter = obj.text[0];
        let remainingText = obj.text.substring(1);
        
        return(
            <>
                <span 
                    className={`dropcaps-style-${obj.dropcapsStyle}`}
                    style={{
                        background: `${obj.dropcapsBackground}`,
                        color: `${obj.dropcapsColor}`,
                        fontSize: `${obj.dropcapsFontSize}`,
                    }}
                >
                    {firstLetter}
                </span>
               {remainingText}
            </>
        )
    }
    
    const renderDropcapsPageStyleSection = (arr) => {
        return(
            <>
                {arr.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="dropcaps-page-style"
                        >
                            {renderParagraph(el)}
                            {i !== arr.length - 1 ? 
                            <EH30/> 
                            : null}
                        </div>
                    )
                })}
            </>
        )
    }

    const renderDropcapsPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            {renderDropcapsPageStyleSection(el.text)}
                            {i !== arr.length - 1 ? 
                            <EH80/> 
                            : null}
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderDropcapsPageDataContent = (arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="dropcaps-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <div className="dropcaps-page-data-wrapper">
                    {renderDropcapsPageData(arr.items)}
                </div>
            )
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="dropcaps-page-loading-error" 
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
        <div className="dropcaps-page" id="dropcapsPage">
            {renderToolbars()}
            <div className="dropcaps-page-wrapper">
                <div className="dropcaps-page-header">
                    <H45 className="h45-nero-lustria">Dropcaps</H45>
                </div>
                <div className="grey-line"/>
                {renderDropcapsPageDataContent(props.dropcapsPage)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            dropcapsPage: Selectors.getDropcapsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchDropcapsPageData: bindActionCreators(Services.fetchDropcapsPageData, dispatch),
            fetchDropcapsPageDataSuccess: bindActionCreators(Actions.fetchDropcapsPageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(DropcapsPage);
 