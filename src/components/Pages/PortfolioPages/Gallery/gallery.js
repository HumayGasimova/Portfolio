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

import './gallery.scss';

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
 * Gallery component definition and export
 */

export const Gallery = (props) => {

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

            let data = FakeData.gallery.find(item => item.id === +props.match.params.id)
            props.fetchGalleryPortfolioSuccess(data);

        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchGalleryPortfolio(props.match.params.id);
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

    const loadImg = (key) => {
        switch(key) {
            case 'id1Gallery1':
                return Images.ID_1_GALLERY_1;
            case 'id1Gallery2':
                return Images.ID_1_GALLERY_2;
            case 'id1Gallery3':
                return Images.ID_1_GALLERY_3;
            case 'id1Gallery4':
                return Images.ID_1_GALLERY_4;
            case 'id1Gallery5':
                return Images.ID_1_GALLERY_5;
            case 'id1Gallery6':
                return Images.ID_1_GALLERY_6;
            case 'id2Gallery1':
                return Images.ID_2_GALLERY_1;
            case 'id2Gallery2':
                return Images.ID_2_GALLERY_2;
            case 'id2Gallery3':
                return Images.ID_2_GALLERY_3;
            case 'id2Gallery4':
                return Images.ID_2_GALLERY_4;
            case 'id2Gallery5':
                return Images.ID_2_GALLERY_5;
            case 'id3Gallery1':
                return Images.ID_3_GALLERY_1;
            case 'id3Gallery2':
                return Images.ID_3_GALLERY_2;
            case 'id3Gallery3':
                return Images.ID_3_GALLERY_3;
            case 'id3Gallery4':
                return Images.ID_3_GALLERY_4;
            case 'id3Gallery5':
                return Images.ID_3_GALLERY_5;
            case 'id3Gallery6':
                return Images.ID_3_GALLERY_6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'galleryCategory': 
                props.setGalleryIsHoveringCategory("on", id);
                break;
            case 'galleryTag': 
                props.setGalleryIsHoveringTag("on", id);
                break;
            case 'image': 
                props.setGalleryIsHoveringImage("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'galleryCategory': 
                props.setGalleryIsHoveringCategory("off", id);
                break;
            case 'galleryTag': 
                props.setGalleryIsHoveringTag("off", id);
                break;
            case 'image': 
                props.setGalleryIsHoveringImage("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "galleryCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "galleryTag"){
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
                    return "gallery-portfolio-image-curtain";
                case 'on':
                    return "gallery-portfolio-image-curtain-hover-on";
                case 'off':
                    return "gallery-portfolio-image-curtain-hover-off"
            }
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("gallery");
    
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

        props.unmountComponent(key, path, "gallery", e.button);
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
        
        props.photoViewerOpen('gallery', true, slidesForPhotoViewer);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="gallery"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="gallery"
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
                        page="gallery"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="gallery"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div 
                id="galleryPortfolioImages"
                className="gallery-portfolio-images"
            >{props.galleryPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="gallery-portfolio-image-wrapper"
                    >
                        <div 
                            className="gallery-portfolio-image"
                            onClick={() => openPhotoViewer(props.galleryPortfolio.item.imagesArray, i)}
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
            <div className="gallery-categories">{props.galleryPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="gallery-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key,e)}
                        onMouseEnter={() => handleMouseEnter(`galleryCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`galleryCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`galleryCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="gallery-tags">{props.galleryPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="gallery-tag"
                        onMouseEnter={() => handleMouseEnter(`galleryTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`galleryTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`galleryTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderGalleryContent = () => {
        if(props.galleryPortfolio.loading && !props.galleryPortfolio.error){
            return(
                <div 
                    className="gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.galleryPortfolio.loading && !props.galleryPortfolio.error){
            return(
                <div className="gallery-wrapper">
                    <H70 className="h70-nero-poppins">{props.galleryPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="galleryContent"
                        className="gallery-content"
                    >
                        {renderPortfolioImages()}
                        <div className="gallery-content-info">
                            <div className="gallery-text-wrapper">
                                <H19 className="h19-nobel-lustria">{props.galleryPortfolio.item.text}</H19>
                            </div>
                            <div className="gallery-category-date-tags-wrapper">
                                <H22 className="h22-nero-poppins">Category:</H22>
                                {renderCategories()}
                                <EH40/>
                                <H22 className="h22-nero-poppins">Date:</H22>
                                <H19 className="h19-nobel-lustria">{props.galleryPortfolio.item.date}</H19>
                                <EH40/>
                                <H22 className="h22-nero-poppins">Tags:</H22>
                                {renderTags()}
                            </div>
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation component="gallery"/>
                </div>
            )
        }
        if(!props.galleryPortfolio.loading && props.galleryPortfolio.error){
            return(
                <div 
                    className="gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.galleryPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="gallery" id="gallery">
            {renderToolbars()}
            {showContent ? renderGalleryContent() : null}
            <Footer/>
            {props.photoViewerForGalleryOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="gallery"
            /> : null}
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            galleryPortfolio: Selectors.getGalleryPortfolioState(state),
            photoViewerForGalleryOpen: Selectors.getPhotoViewerForGalleryOpenState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchGalleryPortfolio: bindActionCreators(Services.fetchGalleryPortfolio, dispatch),
            fetchGalleryPortfolioSuccess: bindActionCreators(Actions.fetchGalleryPortfolioSuccess, dispatch),
            setGalleryIsHoveringCategory: bindActionCreators(Actions.setGalleryIsHoveringCategory, dispatch),
            setGalleryIsHoveringTag: bindActionCreators(Actions.setGalleryIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setGalleryIsHoveringImage: bindActionCreators(Actions.setGalleryIsHoveringImage, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(Gallery);
 