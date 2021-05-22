/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './photoViewer.scss';

/**
 * Components
 */

import Backdrop from '../../../library/Backdrop/backdrop';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
   H19,
   EW30
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Icons
 */

import {
    faExpand,
    faCompress
} from '@fortawesome/free-solid-svg-icons';

/**
 * PhotoViewer component definition and export
 */

export const PhotoViewer = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [isHoveringExpand, setIsHoveringExpand] = useState(false);
    const [isHoveringShrink, setIsHoveringShrink] = useState(false);
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringCloseButton, setIsHoveringCloseButton] = useState("init");
    const [photoViewerWindowSize, setPhotoViewerWindowSize] = useState({
        width: 0,
        height: 0
    })
    const [photoViewerFullscreenWindowSize, setPhotoViewerFullscreenWindowSize] = useState({
        width: 0,
        height: 0
    })

    /**
     * Methods
     */

    useEffect(() => {
        // Set windth and height of photoViwer and fullScreen photoViwer for different pages

        renderStyle(size.width, props.width, props.height);
        
        // Event Listeners

        document.addEventListener('fullscreenchange', fullScreenOnChange);

        // Cleaning the unmounted component
        return () => document.removeEventListener('fullscreenchange', fullScreenOnChange);
    }, [size.width]);

    const fullScreenOnChange = () => {
        // Show photo viewer when exiting fullscreen mode

        if(!document.webkitIsFullScreen){
            props.setFullScreenState(false);
        }
    }

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(true);
                break;
            case 'shrink': 
                setIsHoveringShrink(true);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
            case 'closeButton': 
                setIsHoveringCloseButton('on');
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'expand': 
                setIsHoveringExpand(false);
                break;
            case 'shrink': 
                setIsHoveringShrink(false);
                break;
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
            case 'closeButton': 
                setIsHoveringCloseButton('off');
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-navigation-left-arrow";
                case 'on':
                    return "photo-viewer-navigation-left-arrow-hover-on";
                case 'off':
                    return "photo-viewer-navigation-left-arrow-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-navigation-right-arrow";
                case 'on':
                    return "photo-viewer-navigation-right-arrow-hover-on";
                case 'off':
                    return "photo-viewer-navigation-right-arrow-hover-off"
            }
        }
        if(opt === "closeButtonText"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lora";
                case 'on':
                    return "h19-nobel-lora-nero-hover-on";
                case 'off':
                    return "h19-nobel-lora-nero-hover-off"
            }
        }

        if(opt === "closeButton"){
            switch(isHovering){
                case 'init':
                    return "photo-viewer-close-wrapper";
                case 'on':
                    return "photo-viewer-close-wrapper-hover-on";
                case 'off':
                    return "photo-viewer-close-wrapper-hover-off"
            }
        }        
    }

    const loadImg = (key) => {
        switch(key) {
            case 'text1':
                return Images.TEXT_1;
            case 'text2':
                return Images.TEXT_2;
            case 'text3':
                return Images.TEXT_3;
            case 'text4':
                return Images.TEXT_4;
            case 'text5':
                return Images.TEXT_5;
            case 'text6':
                return Images.TEXT_6;
            case 'text7':
                return Images.TEXT_7;
            case 'text8':
                return Images.TEXT_8;
            case 'text9':
                return Images.TEXT_9;
            case 'text10':
                return Images.TEXT_10;
            case 'text11':
                return Images.TEXT_11;
            case 'text12':
                return Images.TEXT_12;
            case 'text13':
                return Images.TEXT_13;
            case 'text14':
                return Images.TEXT_14;
            case 'text15':
                return Images.TEXT_15;
            case 'text16':
                return Images.TEXT_16;
            case 'text17':
                return Images.TEXT_17;
            case 'text18':
                return Images.TEXT_18;
            case 'text19':
                return Images.TEXT_19;
            case 'text20':
                return Images.TEXT_20;
            case 'text21':
                return Images.TEXT_21;
            case 'text22':
                return Images.TEXT_22;
            case 'text23':
                return Images.TEXT_23;
            case 'text24':
                return Images.TEXT_24;
            case 'text25':
                return Images.TEXT_25;
            case 'text26':
                return Images.TEXT_26;
            case 'text27':
                return Images.TEXT_27;
            case 'id1BigSlider1': 
                return Images.ID_1_BIG_SLIDER_1;
            case 'id1BigSlider2': 
                return Images.ID_1_BIG_SLIDER_2;
            case 'id1BigSlider3': 
                return Images.ID_1_BIG_SLIDER_3;
            case 'id1BigSlider4': 
                return Images.ID_1_BIG_SLIDER_4;
            case 'id1BigSlider5': 
                return Images.ID_1_BIG_SLIDER_5;
            case 'id2BigSlider1': 
                return Images.ID_2_BIG_SLIDER_1;
            case 'id2BigSlider2': 
                return Images.ID_2_BIG_SLIDER_2;
            case 'id2BigSlider3': 
                return Images.ID_2_BIG_SLIDER_3;
            case 'id2BigSlider4': 
                return Images.ID_2_BIG_SLIDER_4;
            case 'id2BigSlider5': 
                return Images.ID_2_BIG_SLIDER_5;
            case 'id2BigSlider6': 
                return Images.ID_2_BIG_SLIDER_6;
            case 'id3BigSlider1': 
                return Images.ID_3_BIG_SLIDER_1;
            case 'id3BigSlider2': 
                return Images.ID_3_BIG_SLIDER_2;
            case 'id3BigSlider3': 
                return Images.ID_3_BIG_SLIDER_3;
            case 'id3BigSlider4': 
                return Images.ID_3_BIG_SLIDER_4;
            case 'id3BigSlider5': 
                return Images.ID_3_BIG_SLIDER_5;
            case 'id3BigSlider6': 
                return Images.ID_3_BIG_SLIDER_6;
            case 'id3BigSlider7': 
                return Images.ID_3_BIG_SLIDER_7;
            case 'id1SmallImages1':
                return Images.ID_1_SMALL_IMAGES_1;
            case 'id1SmallImages2':
                return Images.ID_1_SMALL_IMAGES_2;
            case 'id1SmallImages3':
                return Images.ID_1_SMALL_IMAGES_3;
            case 'id1SmallImages4':
                return Images.ID_1_SMALL_IMAGES_4;
            case 'id1SmallImages5':
                return Images.ID_1_SMALL_IMAGES_5;
            case 'id2SmallImages1':
                return Images.ID_2_SMALL_IMAGES_1;
            case 'id2SmallImages2':
                return Images.ID_2_SMALL_IMAGES_2;
            case 'id3SmallImages1':
                return Images.ID_3_SMALL_IMAGES_1;
            case 'id3SmallImages2':
                return Images.ID_3_SMALL_IMAGES_2;
            case 'id3SmallImages3':
                return Images.ID_3_SMALL_IMAGES_3;
            case 'id4SmallImages1':
                return Images.ID_4_SMALL_IMAGES_1;
            case 'id4SmallImages2':
                return Images.ID_4_SMALL_IMAGES_2;
            case 'id4SmallImages3':
                return Images.ID_4_SMALL_IMAGES_3;
            case 'id1BigImages1':
                return Images.ID_1_BIG_IMAGES_1;
            case 'id1BigImages2':
                return Images.ID_1_BIG_IMAGES_2;
            case 'id1BigImages3':
                return Images.ID_1_BIG_IMAGES_3;
            case 'id1BigImages4':
                return Images.ID_1_BIG_IMAGES_4;
            case 'id1BigImages5':
                return Images.ID_1_BIG_IMAGES_5;
            case 'id2BigImages1':
                return Images.ID_2_BIG_IMAGES_1;
            case 'id2BigImages2':
                return Images.ID_2_BIG_IMAGES_2;
            case 'id2BigImages3':
            case 'portfolioProjectShowcasePageId1Img3':
                return Images.ID_2_BIG_IMAGES_3;
            case 'id2BigImages4':
            case 'portfolioProjectShowcasePageId1Img2':
                return Images.ID_2_BIG_IMAGES_4;
            case 'id2BigImages5':
            case 'portfolioProjectShowcasePageId1Img1':
                return Images.ID_2_BIG_IMAGES_5;
            case 'id2BigImages6':
                return Images.ID_2_BIG_IMAGES_6;
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
            case 'portfolioProjectShowcasePageId2Img1':
                return Images.ID_3_GALLERY_1;
            case 'id3Gallery2':
                return Images.ID_3_GALLERY_2;
            case 'id3Gallery3':
            case 'portfolioProjectShowcasePageId2Img2':
                return Images.ID_3_GALLERY_3;
            case 'id3Gallery4':
            case 'portfolioProjectShowcasePageId2Img3':
                return Images.ID_3_GALLERY_4;
            case 'id3Gallery5':
                return Images.ID_3_GALLERY_5;
            case 'id3Gallery6':
                return Images.ID_3_GALLERY_6;
            case 'id1SmallSlider1':
            case 'portfolioProjectShowcasePageId3Img3':
                return Images.ID_1_SMALL_SLIDER_1;
            case 'id1SmallSlider2':
            case 'portfolioProjectShowcasePageId3Img1':
                return Images.ID_1_SMALL_SLIDER_2;
            case 'id1SmallSlider3': 
                return Images.ID_1_SMALL_SLIDER_3;
            case 'id1SmallSlider4': 
                return Images.ID_1_SMALL_SLIDER_4;
            case 'id1SmallSlider5':
            case 'portfolioProjectShowcasePageId3Img2':
                return Images.ID_1_SMALL_SLIDER_5;
            case 'id1SmallSlider6': 
                return Images.ID_1_SMALL_SLIDER_6;
            case 'id2SmallSlider1': 
                return Images.ID_2_SMALL_SLIDER_1;
            case 'id2SmallSlider2': 
                return Images.ID_2_SMALL_SLIDER_2;
            case 'id2SmallSlider3': 
                return Images.ID_2_SMALL_SLIDER_3;
            case 'id2SmallSlider4': 
                return Images.ID_2_SMALL_SLIDER_4;
            case 'id2SmallSlider5': 
                return Images.ID_2_SMALL_SLIDER_5;
            case 'id3SmallSlider1': 
                return Images.ID_3_SMALL_SLIDER_1;
            case 'id3SmallSlider2': 
                return Images.ID_3_SMALL_SLIDER_2;
            case 'id3SmallSlider3': 
                return Images.ID_3_SMALL_SLIDER_3;
            case 'id3SmallSlider4': 
                return Images.ID_3_SMALL_SLIDER_4;
            case 'blogCardGalleryPostCoverImg1':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_1;
            case 'blogCardGalleryPostCoverImg2':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_2;
            case 'blogCardGalleryPostCoverImg3':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_3;
            case 'blogCardGalleryPostCoverImg4':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_4;
            case 'blogCardGalleryPostCoverImg5':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_5;
            case 'blogCardGalleryPostCoverImg6': 
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_6;
            case 'blogCardGalleryPostCoverImg7': 
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_7;
            case 'blogCardGalleryPostCoverImg8':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_8;
            case 'blogCardGalleryPostCoverImg9':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_9;
            case 'blogCardGalleryPostCoverImg10':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_10;
            case 'blogCardGalleryPostCoverImg11':
                return Images.BLOG_CARD_GALLERY_POST_COVER_IMG_11;
            default:
                return "";
        }
    }

    const renderStyle = (screenWidth, width, height) => {
        // Set windth and height of photoViwer and fullScreen photoViwer
        
        let updatedPhotoViewerWindowSize = {};
        let updatedPhotoViewerFullscreenWindowSize = {};
        if(screenWidth > 1100){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 80
            }
        }else if(screenWidth < 1100 && screenWidth > 900){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 65
            }
        }else if(screenWidth < 900 && screenWidth > 800){
            updatedPhotoViewerWindowSize = {
                width: width,
                height: height
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: 0,
                height: 55
            }
        }else if(screenWidth < 800 && screenWidth > 700){
                updatedPhotoViewerWindowSize = {
                    width: width - 200,
                    height: height - 100
                }
                updatedPhotoViewerFullscreenWindowSize = {
                    width: width,
                    height: 50
                }
        }else if(screenWidth < 700 && screenWidth > 600){
            updatedPhotoViewerWindowSize = {
                width: width - 200,
                height: height - 100
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 40
            }
        }else if(screenWidth < 600 && screenWidth > 480){
            updatedPhotoViewerWindowSize = {
                width: width - 300,
                height: height - 200
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 35
            }
        }else if(screenWidth < 480){
            updatedPhotoViewerWindowSize = {
                width: width - 400,
                height: height - 270
            }
            updatedPhotoViewerFullscreenWindowSize = {
                width: width,
                height: 30
            }
        }
        setPhotoViewerWindowSize(updatedPhotoViewerWindowSize);
        setPhotoViewerFullscreenWindowSize(updatedPhotoViewerFullscreenWindowSize)
    }

    const openFullScreen = () => {
        let elem = document.getElementById("photoViewer");

        if(elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        props.setFullScreenState(true);
    }

    const closeFullscreen = () => {
        props.setFullScreenState(false);

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
    }

    /**
     * Markup
     */

    return(
        <>
        {!props.fullScreenState ? 
            <div className="photo-viewer" id="photoViewer">
                <div 
                    className="photo-viewer-wrapper"
                    style={{width: `${photoViewerWindowSize.width}`}}
                >
                    <div className="photo-viewer-full-screen-button">
                        <FontAwesomeIcon 
                            icon={faExpand} 
                            size="lg" 
                            color={isHoveringExpand ? "white" : "rgb(155, 155, 155)"}
                            onClick={() => setFullScreen(true)}
                            onClick={openFullScreen}
                            onMouseEnter={() => handleMouseEnter('expand')} 
                            onMouseLeave={() => handleMouseLeave('expand')}
                        />
                    </div>
                    <div 
                        className="photo-viewer-image-item"
                        style={{width: `${photoViewerWindowSize.width}`, height: `${photoViewerWindowSize.height}`}}
                    >
                        <img src={loadImg(props.photoViewerImagesArray[0].key)}/>
                    </div>
                    <div className="photo-viewer-toolbar">
                        <div className="photo-viewer-navigation">
                            <div 
                                className={renderClassName("leftArrow", isHoveringLeftArrow)}
                                onClick={props.prevImage}
                                onMouseEnter={() => handleMouseEnter('leftArrow')} 
                                onMouseLeave={() => handleMouseLeave('leftArrow')}
                            >
                                <div className="arrow-top-line"/>
                                <div className="arrow-bottom-line"/>
                            </div>
                            <div 
                                className={renderClassName("rightArrow", isHoveringRightArrow)}
                                onClick={props.nextImage}
                                onMouseEnter={() => handleMouseEnter('rightArrow')} 
                                onMouseLeave={() => handleMouseLeave('rightArrow')}
                            >
                                <div className="arrow-top-line"/>
                                <div className="arrow-bottom-line"/>
                            </div>
                        </div>
                        <H19 className="h19-nobel">{`${props.photoViewerImagesArray[0].id} / ${props.photoViewerImagesArray.length}`}</H19>
                        <div 
                            className={renderClassName("closeButton", isHoveringCloseButton)}
                            onClick={() => props.photoViewerOpen(props.component, false, [])}
                            onMouseEnter={() => handleMouseEnter('closeButton')} 
                            onMouseLeave={() => handleMouseLeave('closeButton')}
                        >
                            <H19 className={renderClassName("closeButtonText", isHoveringCloseButton)}>Close</H19>
                            <div className="photo-viewer-close">
                                <div className="close-first-line"/>
                                <div className="close-second-line"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Backdrop
                   show
                   onClick={() => props.photoViewerOpen(props.component, false, [])}
                   className="backdrop-photo-viewer"
                />
            </div> :
            <div className="fullscreen-outer-wrapper">
                <div className="fullscreen-close-button">
                    <div className="small-screen">
                    <FontAwesomeIcon 
                        icon={faCompress} 
                        size="lg" 
                        color={isHoveringShrink ? "white" : "rgb(155, 155, 155)"}
                        onClick={closeFullscreen}
                        onMouseEnter={() => handleMouseEnter('shrink')} 
                        onMouseLeave={() => handleMouseLeave('shrink')}
                    />
                    </div>
                </div>
                <div className="fullscreen-wrapper">
                    <div 
                        className={renderClassName("leftArrow", isHoveringLeftArrow)}
                        onClick={props.prevImage}
                        onMouseEnter={() => handleMouseEnter('leftArrow')} 
                        onMouseLeave={() => handleMouseLeave('leftArrow')}
                    >
                        <div className="arrow-top-line"/>
                        <div className="arrow-bottom-line"/>
                    </div>
                    <EW30/>
                    <div 
                        className="fullscreen-photo-viewer-image-item"
                        style={{height: `${photoViewerFullscreenWindowSize.height}vh`}}
                    >
                        <img src={loadImg(props.photoViewerImagesArray[0].key)}/>
                    </div>
                    <EW30/>
                    <div 
                        className={renderClassName("rightArrow", isHoveringRightArrow)}
                        onClick={props.nextImage}
                        onMouseEnter={() => handleMouseEnter('rightArrow')} 
                        onMouseLeave={() => handleMouseLeave('rightArrow')}
                    >
                        <div className="arrow-top-line"/>
                        <div className="arrow-bottom-line"/>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerImagesArray: Selectors.getPhotoViewerImagesArrayState(state),
            fullScreenState: Selectors.getFullScreenStateState(state)
        };
    },
    (dispatch) => {
        return {
            prevImage: bindActionCreators(Actions.prevImage, dispatch),
            nextImage: bindActionCreators(Actions.nextImage, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setFullScreenState: bindActionCreators(Actions.setFullScreenState, dispatch),
        };
    }
)(PhotoViewer);
 