/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
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

import './smallSlider.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
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
    H19,
    H22,
    H70,
    EH40,
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
 * SmallSlider component definition and export
 */

export const SmallSlider = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [onePercentToPx, setOnePercentToPx] = useState(0);

    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Fetch data for the component
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)

            let data = FakeData.smallSlider.find(item => item.id === +props.match.params.id)
            props.fetchSmallSliderPortfolioSuccess(data);

        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchSmallSliderPortfolio(props.match.params.id);
        }

        // Auxiliary property for swiper to calculate translatedWidth

        calculateOnePercentToPx(size.width);

        // Show content after successful data fetch
      
        setShowContent(true);

        // Event Listeners
        
        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);
        
        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
            props.setShowBackToTopComponent(false);
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        calculateOnePercentToPx(size.width);
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallSlider");

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
    
    const calculateOnePercentToPx = (scrWidth) => {
        //Calculate one percent of screen width

        let screenWidth = scrWidth / 100;
        setOnePercentToPx(screenWidth);
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallSliderCategory': 
                props.setSmallSliderIsHoveringCategory("on", id);
                break;
            case 'smallSliderTag': 
                props.setSmallSliderIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallSliderCategory': 
                props.setSmallSliderIsHoveringCategory("off", id);
                break;
            case 'smallSliderTag': 
                props.setSmallSliderIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallSliderCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallSliderTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
    }

    const onClickHandler = (path, key, e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage 

        localStorage.setItem("archiveCategoryHG", key);
        localStorage.setItem("pageHG", localStorage.getItem("pageHG"));

        // Clear archive data 

        if(props.archive.category !== key && e.button !== 1){
            props.clearArchiveData();
        }
        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */ 

            props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click 

            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        props.unmountComponent(key, path, "smallSlider", e.button);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallSlider"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="smallSlider"
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
                        page="smallSlider"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="smallSlider"
                    />
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <div className="small-slider-categories">{props.smallSliderPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-slider-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`smallSliderCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallSliderCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallSliderCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-slider-tags">{props.smallSliderPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-tag"
                        onMouseEnter={() => handleMouseEnter(`smallSliderTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallSliderTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallSliderTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallSliderContent = () => {
        if(props.smallSliderPortfolio.loading && !props.smallSliderPortfolio.error){
            return(
                <div 
                    className="small-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallSliderPortfolio.loading && !props.smallSliderPortfolio.error){
            let translatedValue;
            let paddingOneSide;
            
            // Calculate translatedWidth property for different screen widths

            if(size.width > 1110){
                translatedValue = onePercentToPx * 69;
                paddingOneSide = 240;
            }else if(size.width < 1100 && size.width > 900){
                translatedValue = size.width;
                paddingOneSide = 240;
            }else if(size.width < 900 && size.width > 680){
                translatedValue = size.width;
                paddingOneSide = 150;
            }else if(size.width < 680){
                translatedValue = size.width;
                paddingOneSide = 70;
            }

            return(
                <div className="small-slider-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallSliderPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallSliderContent"
                        className="small-slider-content"
                    >
                        <div className="small-slider-portfolio-swiper">
                            <Swiper
                                component="smallSlider"
                                contentArray={props.smallSliderPortfolio.item.imagesArray}
                                content={props.smallSliderPortfolio}
                                translateWidth={translatedValue - paddingOneSide}
                                showNumbersOfSlides={1}
                                setSwiperState={props.setSwiperStateForSmallSliderPage}
                                swiperData={props.smallSliderPortfolio.swiper}
                                onlyImages
                                autoPlay
                            />
                        </div>
                       
                        <div className="small-slider-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallSliderPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            {renderCategories()}
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallSliderPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                    <PortfolioNavigation component="smallSlider"/>
                </div>
            )
        }
        if(!props.smallSliderPortfolio.loading && props.smallSliderPortfolio.error){
            return(
                <div 
                    className="small-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.smallSliderPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="small-slider" id="smallSlider">
            {renderToolbars()}
            {showContent ? renderSmallSliderContent() : null}
            <Footer/>
            {props.photoViewerForSmallSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallSlider"
            /> : null}
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallSliderPortfolio: Selectors.getSmallSliderPortfolioState(state),
            photoViewerForSmallSliderOpen: Selectors.getPhotoViewerForSmallSliderOpenState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallSliderPortfolio: bindActionCreators(Services.fetchSmallSliderPortfolio, dispatch),
            fetchSmallSliderPortfolioSuccess: bindActionCreators(Actions.fetchSmallSliderPortfolioSuccess, dispatch),
            setSmallSliderIsHoveringCategory: bindActionCreators(Actions.setSmallSliderIsHoveringCategory, dispatch),
            setSmallSliderIsHoveringTag: bindActionCreators(Actions.setSmallSliderIsHoveringTag, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setSwiperStateForSmallSliderPage: bindActionCreators(Actions.setSwiperStateForSmallSliderPage, dispatch)
        };
    }
)(SmallSlider);
 