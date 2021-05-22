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

import './portfolioProjectShowcase.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import ProjectShowcaseItem from '../../../SmallParts/ProjectShowcaseItem/projectShowcaseItem';
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
 * PortfolioProjectShowcase component definition and export
 */

export const PortfolioProjectShowcase = (props) => {

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

        if(props.portfolioProjectShowcasePage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPortfolioProjectShowcasePageDataSuccess(FakeData.portfolioProjectShowcasePage);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPortfolioProjectShowcasePageData();
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
        let el = document.getElementById("portfolioProjectShowcasePage");

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
                        page="portfolioProjectShowcasePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="portfolioProjectShowcasePage"
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
                        page="portfolioProjectShowcasePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="portfolioProjectShowcasePage"
                    />
                </>
            )
        }
    }

    const renderPortfolioProjectShowcasePageDate = (arr) => {
        return(
            <>{arr.map((el,i) => {
                return(
                    <React.Fragment key={i}>
                        <ProjectShowcaseItem 
                            component="portfolioProjectShowcase"
                            data={el}
                            setProjectShowcaseIsHoveringCategory={props.setPortfolioProjectShowcasePageIsHoveringCategory}
                            setProjectShowcaseIsHoveringTag={props.setPortfolioProjectShowcasePageIsHoveringTag}
                            updateStyleValues={props.updateStyleValuesPortfolioProjectShowcasePage}
                            updateAnimation={props.updateAnimationForPortfolioProjectShowcasePage}
                            items={arr}
                            photoViewerForProjectShowcaseItemOpen={props.photoViewerForPortfolioProjectShowcaseOpen}
                            photoViewerOpen={props.photoViewerOpen}
                        />
                    </React.Fragment >
                )
            })}</>
        )
    }

    const renderPortfolioProjectShowcasePageDataContent = () => {
        if(props.portfolioProjectShowcasePage.loading && !props.portfolioProjectShowcasePage.error){
            return(
                <div 
                    className="portfolio-project-showcase-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.portfolioProjectShowcasePage.loading && !props.portfolioProjectShowcasePage.error){
            return(
                <div className="portfolio-project-showcase-page-items">
                    {renderPortfolioProjectShowcasePageDate(props.portfolioProjectShowcasePage.items)}
                </div>
            )
        }
        if(!props.portfolioProjectShowcasePage.loading && props.portfolioProjectShowcasePage.error){
            return(
                <div 
                    className="portfolio-project-showcase-page-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.portfolioProjectShowcasePage.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="portfolio-project-showcase-page" id="portfolioProjectShowcasePage">
            {renderToolbars()}
            <div className="portfolio-project-showcase-page-wrapper">
                <div className="portfolio-project-showcase-page-header">
                    <H45 className="h45-nero-lustria">Portfolio Project Showcase</H45>
                </div>
                <div className="grey-line"/>
                {renderPortfolioProjectShowcasePageDataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            portfolioProjectShowcasePage: Selectors.getPortfolioProjectShowcasePageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            photoViewerForPortfolioProjectShowcaseOpen: Selectors.getPhotoViewerForPortfolioProjectShowcaseOpenState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioProjectShowcasePageData: bindActionCreators(Services.fetchPortfolioProjectShowcasePageData, dispatch),
            fetchPortfolioProjectShowcasePageDataSuccess: bindActionCreators(Actions.fetchPortfolioProjectShowcasePageDataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setPortfolioProjectShowcasePageIsHoveringCategory: bindActionCreators(Actions.setPortfolioProjectShowcasePageIsHoveringCategory, dispatch),
            setPortfolioProjectShowcasePageIsHoveringTag: bindActionCreators(Actions.setPortfolioProjectShowcasePageIsHoveringTag, dispatch),
            updateStyleValuesPortfolioProjectShowcasePage: bindActionCreators(Actions.updateStyleValuesPortfolioProjectShowcasePage, dispatch),
            updateAnimationForPortfolioProjectShowcasePage: bindActionCreators(Actions.updateAnimationForPortfolioProjectShowcasePage, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(PortfolioProjectShowcase);
 