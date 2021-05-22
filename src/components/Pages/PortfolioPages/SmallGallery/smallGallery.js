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

import './smallGallery.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
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
    EH30,
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
 * Images
 */

import * as Images from '../../../../constants/images';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';

/**
 * SmallGallery component definition and export
 */

export const SmallGallery = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);

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

            let data = FakeData.smallGallery.find(item => item.id === +props.match.params.id)
            props.fetchSmallGalleryPortfolioSuccess(data);

        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchSmallGalleryPortfolio(props.match.params.id);
        }

        // Show content after successful data fetch

        setShowContent(true);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallGallery");

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

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallGallery1':
                return Images.ID_1_SMALL_GALLERY_1;
            case 'id1SmallGallery2':
                return Images.ID_1_SMALL_GALLERY_2;
            case 'id1SmallGallery3':
                return Images.ID_1_SMALL_GALLERY_3;
            case 'id1SmallGallery4':
                return Images.ID_1_SMALL_GALLERY_4;
            case 'id1SmallGallery5':
                return Images.ID_1_SMALL_GALLERY_5;
            case 'id1SmallGallery6':
                return Images.ID_1_SMALL_GALLERY_6;
            case 'id2SmallGallery1':
                return Images.ID_2_SMALL_GALLERY_1;
            case 'id2SmallGallery2':
                return Images.ID_2_SMALL_GALLERY_2;
            case 'id2SmallGallery3':
                return Images.ID_2_SMALL_GALLERY_3;
            case 'id2SmallGallery4':
                return Images.ID_2_SMALL_GALLERY_4;
            case 'id3SmallGallery1':
                return Images.ID_3_SMALL_GALLERY_1;
            case 'id3SmallGallery2':
                return Images.ID_3_SMALL_GALLERY_2;
            case 'id3SmallGallery3':
                return Images.ID_3_SMALL_GALLERY_3;
            case 'id3SmallGallery4':
                return Images.ID_3_SMALL_GALLERY_4;
            case 'id3SmallGallery5':
                return Images.ID_3_SMALL_GALLERY_5;
            case 'id3SmallGallery6':
                return Images.ID_3_SMALL_GALLERY_6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                props.setSmallGalleryIsHoveringCategory("on", id);
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("on", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                props.setSmallGalleryIsHoveringCategory("off", id);
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("off", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallGalleryCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallGalleryTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "small-gallery-portfolio-image-curtain";
                case 'on':
                    return "small-gallery-portfolio-image-curtain-hover-on";
                case 'off':
                    return "small-gallery-portfolio-image-curtain-hover-off"
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

        props.unmountComponent(key, path, "smallGallery", e.button);
    }

    const openPhotoViewer = (array, activeIndex) => {
        let slidesForPhotoViewer = [...array];
        let removedSlides = [];
        
        /**
         * Rearrange the elements in array so that the element
         * with active index becomes first and the rest are
         * lined up in the correct order
         */
              
        slidesForPhotoViewer.map((el, i) => {
            if(i < activeIndex){
                removedSlides.push(el);
            }
        })
        slidesForPhotoViewer.splice(0, activeIndex)
      
        if(removedSlides.length !== 0){
            slidesForPhotoViewer.push(removedSlides);
        }

        slidesForPhotoViewer = slidesForPhotoViewer.flat();
        
        // Open photo viewer for the component
        
        props.photoViewerOpen('smallGallery', true, slidesForPhotoViewer);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallGallery"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="smallGallery"
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
                        page="smallGallery"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="smallGallery"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div 
                id="smallGalleryPortfolioImages"
                className="small-gallery-portfolio-images"
            >{props.smallGalleryPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-portfolio-image-wrapper"
                    >
                        <div 
                            className="small-gallery-portfolio-image"
                            onClick={() => openPhotoViewer(props.smallGalleryPortfolio.item.imagesArray, i)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.key)}/>
                            <div className={renderClassName(`image`, el.isHover)}/>
                        </div>
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderCategories = () => {
        return(
            <div className="small-gallery-categories">{props.smallGalleryPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`smallGalleryCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-gallery-tags">{props.smallGalleryPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-tag"
                        onMouseEnter={() => handleMouseEnter(`smallGalleryTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallGalleryContent = () => {
        if(props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div className="small-gallery-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallGalleryPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallGalleryContent"
                        className="small-gallery-content"
                    >
                        {renderPortfolioImages()}
                        <div className="small-gallery-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            {renderCategories()}
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation component="smallGallery"/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.smallGalleryPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="small-gallery" id="smallGallery">
            {renderToolbars()}
            {showContent ? renderSmallGalleryContent() : null}
            <Footer/>
            {props.photoViewerForSmallGalleryOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallGallery"
            /> : null}
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            photoViewerForSmallGalleryOpen: Selectors.getPhotoViewerForSmallGalleryOpenState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallGalleryPortfolio: bindActionCreators(Services.fetchSmallGalleryPortfolio, dispatch),
            fetchSmallGalleryPortfolioSuccess: bindActionCreators(Actions.fetchSmallGalleryPortfolioSuccess, dispatch),
            setSmallGalleryIsHoveringCategory: bindActionCreators(Actions.setSmallGalleryIsHoveringCategory, dispatch),
            setSmallGalleryIsHoveringTag: bindActionCreators(Actions.setSmallGalleryIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setSmallGalleryIsHoveringImage: bindActionCreators(Actions.setSmallGalleryIsHoveringImage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(SmallGallery);
 