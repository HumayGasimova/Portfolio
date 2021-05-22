/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
 * Styles
 */

import './swiper.scss';

/**
 * Components
 */

import Loading from '../../components/SmallParts/Loading/loading';
import PhotoViewer from '../../components/Parts/PhotoViewer/photoViewer';
import SVGLogo from '../../components/SmallParts/SVGLodo/svgLogo';

/**
 * Actions
 */

import * as Actions from '../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../reducers/selectors';


/**
 * Utility
 */

import {
    H19,
    H25,
    H45,
    EH25,
} from '../../components/UtilityComponents';

import * as Utility from '../../utility';

/**
 * Hooks
 */

import {
    useInterval
} from '../../Hooks/useInterval';

/**
 * Images
 */

import * as Images from '../../constants/images';

/**
 * Icons
 */

import { 
    faChevronUp,
    faChevronDown
 } from '@fortawesome/free-solid-svg-icons';

/**
 * Swiper component definition and export
 */

export const Swiper = (props) => {

    const testimonialsContent = useRef();
    const bigSliderContent = useRef();
    const smallSliderContent  = useRef();
    const testimonialsPageSection1Content = useRef();
    const testimonialsPageSection2Content = useRef();
    const testimonialsPageSection3Content = useRef();
    const blogListStandardPageCardId2Content = useRef();
    const blogListStandardPageCardId8Content = useRef();
    const blogListStandardPageCardId14Content = useRef();
    // const [currentSwiper, setCurrentSwiper] = useState('');
    // const [relode, setRelode] = useState(false)

    const getHeight = () => window.innerHeight;
    const getWidth = () => window.innerWidth;
    
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");

    // const [mouseDown, setMouseDown] = useState(false)
  
    // const [state, setState] = useState({
    //     activeIndex: 0,
    //     translate: 0,
    //     transition: 0.45,
    //     _slides: []
    // });

    // const {activeIndex, translate, transition, _slides} = state;

    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
     * Methods
     */

    useEffect(() => {
        let slidesArray = [...props.contentArray];
        let _slides;
        // let swiperWrapper;
        let swiperContent;
        let translateVal;
        let _updatedSlides;
        
        if(!props.content.loading && props.showNumbersOfSlides === 1){

            swiperContent = document.getElementById(`swiper-content-${props.component}`);
     
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]];
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })
             
             
            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true, props.pathToFindSwiper);
                // console.log("con1", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = Utility.updateSlidesFullScreen(props.swiperData.slides, props.swiperData.activeIndex, props.swiperData);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false, props.pathToFindSwiper);
                // console.log("con2", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
            }
            slide(swiperContent, translateVal, _updatedSlides);
           
        }

        if(!props.content.loading && props.showNumbersOfSlides === 3){

            swiperContent = document.getElementById(`swiper-content-${props.component}`);
            
            _slides = [
                slidesArray[slidesArray.length - 2], 
                slidesArray[slidesArray.length - 1], 
                slidesArray[0], 
                slidesArray[1], 
                slidesArray[2]
            ];
           
            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true, props.pathToFindSwiper);
                // console.log("con1", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = Utility.updateSlidesFor3SlidesPerSwiper(props.swiperData.slides, props.swiperData.activeIndex);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false, props.pathToFindSwiper);
                // console.log("con2", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
            }
            slide(swiperContent, translateVal, _updatedSlides);
        }
        
        if(!props.content.loading && props.showNumbersOfSlides === 5){
             
            swiperContent = document.getElementById(`swiper-content-${props.component}`);
            
            _slides = [
                slidesArray[slidesArray.length - 3], 
                slidesArray[slidesArray.length - 2], 
                slidesArray[slidesArray.length - 1], 
                slidesArray[0], 
                slidesArray[1], 
                slidesArray[2], 
                slidesArray[3]
            ];
           
            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true, props.pathToFindSwiper);
                // console.log("con1", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                _updatedSlides = Utility.updateSlidesFor5SlidesPerSwiper(props.swiperData.slides, props.swiperData.activeIndex);
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false, props.pathToFindSwiper);
                // console.log("con2", props.component)
                translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
            }
            slide(swiperContent, translateVal, _updatedSlides);
        }

        return () => {
           
            props.setSwiperState([], [], 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false, props.pathToFindSwiper);
            // console.log("con4", props.component)
            if(swiperContent){
                swiperContent.removeEventListener('mousedown', handleMouseDown);
                document.removeEventListener('mouseup', handleMouseUp)
            }
            // setState({
            //     activeIndex: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            //     transition: 0.45,
            //     _slides: []
            // });
            // setSlides([]);
        };
    }, [props.content.loading, 
        props.swiperData.slides.length, 
        props.swiperData.activeIndex
    ]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        if(props.swiperData.transition === 0) {
            // setState({
            //     ...state,
            //     transition: 0.45
            // })
           
            props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, 0.45, props.swiperData.rerender, props.pathToFindSwiper);
            // console.log("con5", props.component)
        }
    }, [props.swiperData.transition])

    useEffect(() => {

        const smooth = e => {
            if(e.target.className.includes(`${props.translateWidth ? "swiper-window-width-content" : "swiper-window-height-content"}`)){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current();
        }

        let interval = null;

        // let swiper = document.getElementById(`${props.component}Swiper`);
        let swiper = document.getElementById(`swiper-content-${props.component}`);
        swiper.addEventListener('transitionend', smooth)
        // window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);
      
        return () => {
            swiper.removeEventListener('transitionend', smooth)
            // window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);
        };
    }, [])

    useInterval(() => {
        nextSlide();
        
    },props.autoPlay ? 7000 : null)

    const slide = (swiperContent, translateVal, _slides) => {
        let posX1 = 0;
        let posX2 = 0;
        let posInitial;
        let posFinal;
        let threshold = 50; //draging delta
        let direction = 0;

        swiperContent.addEventListener('mousedown', (e) => handleMouseDown(e, dragStart, swiperContent));
        document.addEventListener('mouseup', () => handleMouseUp(swiperContent));

        function dragStart (e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = swiperContent.offsetLeft;
            if (e.type == 'touchstart') {
              posX1 = e.touches[0].clientX;
            } else {
              posX1 = e.clientX;
              document.onmouseup = dragEnd;
              document.onmousemove = dragAction;
            }
        }

        function dragAction (e) {
            e = e || window.event;
            if (e.type == 'touchmove') {
              posX2 = posX1 - e.touches[0].clientX;
              posX1 = e.touches[0].clientX;
            } else {
              posX2 = posX1 - e.clientX;
              posX1 = e.clientX;
            }
            direction = e.movementX;
            swiperContent.style.transition = (swiperContent.offsetLeft - posX2) + "px";
            // For sliding visually 
            // console.log(swiperContent.offsetLeft, posX2)
            // swiperContent.style.left =(swiperContent.offsetLeft - posX2) + "px";
        }
        
        function dragEnd (e) {
            // posFinal = swiperContent.offsetLeft;
            if([
                'bigSlider',
                'smallSlider',
                'blogListStandardPageCardId2',
                'blogListStandardPageCardId8',
                'blogListStandardPageCardId14'
            ].includes(props.component) && direction === 0){
                // console.log(props.component)
                openPhotoViewer(props.component, props.swiperData.activeIndex);
            }else if(direction > 0){
                prevSlide(_slides);
            }else if(direction < 0){
                nextSlide(_slides, translateVal);
            }
            // if (posFinal - posInitial < -threshold) {
            //     nextSlide(_slides, translateVal);
            // } else if (posFinal - posInitial > threshold) {
            //     prevSlide(_slides);
            // } 
            // else {
                // swiperContent.style.left = (posInitial) + "px";
            // }
            direction = 0;
            document.onmouseup = null;
            document.onmousemove = null;

            // swiperContent.style.left = "0px";
        }
    }

    const handleMouseDown = (e, dragStart, swiperContent) => {
        dragStart(e);
        swiperContent.classList.add('active');
    }

    const handleMouseUp = (swiperContent) => {
        swiperContent.classList.remove('active');
    }

    const getTranslateValue = (width, height) => {
        if(width){
            if(width === "windowWidth"){
                return getWidth();
            }else{
                return width;
            }
        }
        if(height){
            if(height === "windowHeight"){
                return getHeight();
            }else{
                return height;
            }
        }
    }
    
    const handleResize = () => {
        // setState({
        //     ...state,
        //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
        //     transition: 0
        // })
        props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, true, props.pathToFindSwiper);
        // console.log("con6", props.component)
        // setRelode(!relode)
    }

    const smoothTransition = () => {
        let _slides = [];
        let slides = [...props.swiperData.slides];
        let activeIndex = props.swiperData.activeIndex;
        if(props.showNumbersOfSlides === 1){
            _slides = Utility.updateSlidesFullScreen(slides, activeIndex, props.swiperData);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })

            // if(props.component === currentSwiper){
            //     props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            //     console.log("con7", props.component)
            // }
            // else{
                props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender, props.pathToFindSwiper);
            // }
        }
        if(props.showNumbersOfSlides === 3){
            _slides = Utility.updateSlidesFor3SlidesPerSwiper(slides, activeIndex);
            // console.log("7")
            props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender, props.pathToFindSwiper);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })
        }
        if(props.showNumbersOfSlides === 5){
            _slides = Utility.updateSlidesFor5SlidesPerSwiper(slides, activeIndex);
            
            // console.log("7")
            props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender, props.pathToFindSwiper);
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })
        }
    }

    const prevSlide = (_slides) => {
        // setState({
        //     ...state,
        //     translate: 0,
        //     activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        // })
        let activeIndex = props.swiperData.activeIndex === 0 ? props.swiperData.slides.length - 1 : props.swiperData.activeIndex - 1;
        let translate = 0;
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true, props.pathToFindSwiper);
        // console.log("con8", props.component)
    }

    const nextSlide = (_slides, translateVal) => {
        // setState({
        //     ...state,
        //     translate: translate + getTranslateValue(props.translateWidth, props.translateHeight),
        //     activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        // })
        let activeIndex = props.swiperData.activeIndex === props.swiperData.slides.length - 1 ? 0 : props.swiperData.activeIndex + 1
        let translate = translateVal ? translateVal + getTranslateValue(props.translateWidth, props.translateHeight) : props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
   
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true, props.pathToFindSwiper);   
        // console.log("con9", props.component)
    }

    const openPhotoViewer = (component, activeIndex) => {
        let _component = component
        let slidesForPhotoViewer = [...props.swiperData.slides];
        let removedSlides = [];
        // let currentSlideIndex = slidesForPhotoViewer.findIndex(item => item.id === id);
              
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
        if(['blogListStandardPageCardId2',
            'blogListStandardPageCardId8',
            'blogListStandardPageCardId14'
        ].includes(props.component)){
            _component = "blogListStandardPage";
        }
        props.photoViewerOpen(_component, true, slidesForPhotoViewer);
    }

    const handleMouseEnter = (opt, id, key) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
            case 'swiperDot': 
                props.setIsHoveringSwiperDot('on', id);
                break;
        }
    }

    const handleMouseLeave = (opt, id, key) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
            case 'swiperDot': 
                props.setIsHoveringSwiperDot('off', id);
                break;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(['testimonials','testimonialsPageSection3'].includes(opt)){
            return "swiper-testimonials"
        }
        if(opt === "testimonialsPageSection1"){
            return "swiper-testimonials-page-section-1"
        }
        if(opt === "testimonialsPageSection1SwiperDots"){
            return "swiper-testimonials-page-section-1-swiper-dots"
        }
        if(opt === "testimonialsPageSection2"){
            return "swiper-testimonials-page-section-2"
        }
        if(['bigSlider',
            'blogListStandardPageCardId2',
            'blogListStandardPageCardId8',
            'blogListStandardPageCardId14'
        ].includes(opt)){
            return "swiper-big-slider"
        }
        if(opt === "smallSlider"){
            return "swiper-small-slider"
        }
        if(['clientsPageSection1Swiper1',
            'clientsPageSection1Swiper2',
            'clientsPageSection2Swiper1',
            'clientsPageSection2Swiper2'
        ].includes(opt)){
            return "swiper-clients-page"
        }
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-left-wrapper";
                case 'on':
                    return "swiper-arrow-left-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-left-wrapper-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-right-wrapper";
                case 'on':
                    return "swiper-arrow-right-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-right-wrapper-hover-off"
            }
        }
        if(opt === "swiperDot"){
            let className;
            if(active === "on") return "swiper-dot-hover-on";
        
            switch(isHovering){
                case 'init':
                    className = "swiper-dot";
                    break;
                case 'on':
                    className = "swiper-dot-hover-on";
                    break ;
                case 'off':
                    className = "swiper-dot-hover-off";
                    break;
            }

            if(active === "off") className = "swiper-dot";

            return className;
        }
    }

    const loadImage = (img) => {
        switch(img) {
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
            case 'id1SmallSlider1': 
                return Images.ID_1_SMALL_SLIDER_1;
            case 'id1SmallSlider2': 
                return Images.ID_1_SMALL_SLIDER_2;
            case 'id1SmallSlider3': 
                return Images.ID_1_SMALL_SLIDER_3;
            case 'id1SmallSlider4': 
                return Images.ID_1_SMALL_SLIDER_4;
            case 'id1SmallSlider5': 
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

    const renderSwiper = () => {
        if(props.content.loading && !props.content.error){
            return(
                <div className="content-array-loading-error">
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.content.loading && !props.content.error){
            return(
                <>
                    {swiper()}
                </>
            )
        }
        if(!props.content.loading && props.content.error){
            return(
                <div className="content-array-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.content.error}`}</H19>
                </div>
            )
        }
    } 

    const setRef = (opt) => {
        switch(opt){
            case 'testimonialsContent':
                return testimonialsContent;
            case 'bigSliderContent':
                return bigSliderContent;
            case 'smallSliderContent':
                return smallSliderContent;
            case 'testimonialsPageSection1Content':
                return testimonialsPageSection1Content;
            case 'testimonialsPageSection2Content':
                return testimonialsPageSection2Content;
            case 'testimonialsPageSection3Content':
                return testimonialsPageSection3Content;
            case 'blogListStandardPageCardId2':
                return blogListStandardPageCardId2Content;
            case 'blogListStandardPageCardId8':
                return blogListStandardPageCardId8Content;
            case 'blogListStandardPageCardId14Content':
                return blogListStandardPageCardId14Content;
        }
    }

    const swiper = () => {
        if(!props.content.loading){
            if(props.translateWidth){
                return(
                    <div 
                        className="swiper-window-width-content" 
                        id={`swiper-content-${props.component}`}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `translateX(-${props.swiperData.translate}px)`,
                            transition: `transform ${props.swiperData.transition}s ease-out`,
                            width: `${getTranslateValue(props.translateWidth, props.translateHeight) * (props.showNumbersOfSlides + 2)}px`
                        }}
                    >{props.swiperData._slides.map((el, i) => {
                        if(['testimonialsPageSection1'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <EH25/>
                                    <H25 className="h25-white-lustria">{el.feedback}</H25>
                                    <EH25/>
                                    <div className="author-name-wrapper">
                                        <div className="slide-dash"/>
                                        <H25 className="h25-white-teko">{el.author}</H25>
                                    </div>
                                </div>
                            )
                        }
                        if(['testimonialsPageSection2'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                <H45 className="h45-nero-lustria">{el.header}</H45>
                                <EH25/>
                                <H25 className="h25-nobel-lustria">{el.feedback}</H25>
                                <EH25/>
                                    <div className="author-name-wrapper">
                                        <div className="slide-dash"/>
                                        <H25 className="h25-nero2-teko">{el.author}</H25>
                                    </div>
                                </div>
                            )
                        }
                        if(['testimonials','testimonialsPageSection3'].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                <H25 className="h25-white-lustria">{el.feedback}</H25>
                                <EH25/>
                                    <div className="author-name-wrapper">
                                        <div className="slide-dash"/>
                                        <H25 className="h25-white-teko">{el.author}</H25>
                                    </div>
                                </div>
                            )
                        }
                        if(['bigSlider',
                            'blogListStandardPageCardId2',
                            'blogListStandardPageCardId8',
                            'blogListStandardPageCardId14'
                            ].includes(props.component)){
                                return(
                                    <div 
                                        key={i} 
                                        className="slide"
                                        id="slide"
                                        style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                    >
                                        <div 
                                            className="slide-image"
                                            // style={{height:"auto"}}
                                            // onClick={() => openPhotoViewer(el.id)}
                                        >
                                            <img src={loadImage(el.key)}/>
                                        </div>
                                    </div>
                                )
                        }
                        if(props.component === "smallSlider"){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <div 
                                        className="slide-image"
                                        // onClick={() => openPhotoViewer(el.id)}
                                    >
                                        <img src={loadImage(el.key)}/>
                                    </div>
                                </div>
                            )
                        }
                        if(['clientsPageSection1Swiper1', 
                            'clientsPageSection1Swiper2',
                            'clientsPageSection2Swiper1',
                            'clientsPageSection2Swiper2'
                        ].includes(props.component)){
                            return(
                                <div 
                                    key={i} 
                                    className="slide"
                                    id="slide"
                                    style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                                >
                                    <div 
                                        className="slide-image"
                                        // style={{height:"auto"}}
                                        // onClick={() => openPhotoViewer(el.id)}
                                    >
                                        {/* <img src={loadImage(el.key)}/> */}
                                        <SVGLogo
                                            width={getTranslateValue(props.translateWidth, null)}
                                            svgKey={el.imageName}
                                            component={props.component}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}</div>
                )
            }
            if(props.translateHeight){
                return(
                    <div 
                        className="swiper-window-height-content" 
                        id="swiper-content"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `translateY(-${translate}px)`,
                            transition: `transform ${transition}s ease-out`,
                            height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`
                        }}
                    >{_slides.map((el, i) => {
                        return(
                            <div 
                                key={i} 
                                className="slide"
                                style={{height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                            >
                                <img src={loadImage(el)}/>
                            </div>
                        )
                    })}</div>
                )
            }
        }
    }

    const renderFirstArrow = () => {
        if(props.translateWidth){
            if(props.component === "smallSlider"){
                return(
                    <div className="swiper-arrow-left">
                        <div 
                            // className="swiper-arrow-left-wrapper"
                            className={renderClassName("leftArrow", isHoveringLeftArrow)}
                            onClick={() => prevSlide(null, null)}
                            onMouseEnter={() => handleMouseEnter('leftArrow')} 
                            onMouseLeave={() => handleMouseLeave('leftArrow')}
                            id="prev"
                        >
                            <div className="swiper-arrow-left-line"/>
                        </div>
                    </div>
                )
            }
            if(['testimonials',
                'bigSlider',
                'testimonialsPageSection2',
                'testimonialsPageSection3',
                'blogListStandardPageCardId2',
                'blogListStandardPageCardId8',
                'blogListStandardPageCardId14'
            ].includes(props.component)){
                return(
                    <div className="swiper-arrow-left">
                        <div 
                            // className="swiper-arrow-left-wrapper"
                            className={renderClassName("leftArrow", isHoveringLeftArrow)}
                            onClick={() => prevSlide(null, null)}
                            onMouseEnter={() => handleMouseEnter('leftArrow')} 
                            onMouseLeave={() => handleMouseLeave('leftArrow')}
                            id="prev"
                        >
                            <div className="h17-white-lustria">Previous</div>
                            <div className="swiper-arrow-left-line"/>
                        </div>
                    </div>
                )
            }
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-arrow-up"
                    onClick={() => prevSlide(null, null)}
                    onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronUp} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    />
                </div>
            )
        }
    }

    const renderSecondArrow = () => {
        if(props.translateWidth){
            if(props.component === "smallSlider"){
                return(
                    <div className="swiper-arrow-right">
                        <div 
                            // className="swiper-arrow-right-wrapper"
                            className={renderClassName("rightArrow", isHoveringRightArrow)}
                            onClick={() => nextSlide(null, null)}
                            onMouseEnter={() => handleMouseEnter('rightArrow')} 
                            onMouseLeave={() => handleMouseLeave('rightArrow')}
                            id="next"
                        >
                            <div className="swiper-arrow-right-line"/>
                        </div>
                    </div>
                )
            }
            if(['testimonials',
                'bigSlider',
                'testimonialsPageSection2',
                'testimonialsPageSection3',
                'blogListStandardPageCardId2',
                'blogListStandardPageCardId8',
                'blogListStandardPageCardId14'
            ].includes(props.component)){
                return(
                    <div className="swiper-arrow-right">
                        <div 
                            // className="swiper-arrow-right-wrapper"
                            className={renderClassName("rightArrow", isHoveringRightArrow)}
                            onClick={() => nextSlide(null, null)}
                            onMouseEnter={() => handleMouseEnter('rightArrow')} 
                            onMouseLeave={() => handleMouseLeave('rightArrow')}
                            id="next"
                        >
                            <div className="h17-white-lustria">Next</div>
                            <div className="swiper-arrow-right-line"/>
                        </div>
                    </div>
                )
            }
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-arrow-down"
                    onClick={() => nextSlide(null, null)}
                    onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronDown} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    /> 
                </div>
            )
        }
    }

    const dotOnClickHandler = (id) => {
        let translate = props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
        let prevActiveIndex = props.swiperData.activeIndex;
        let nextActiveIndex = id - 1;
        if(prevActiveIndex === nextActiveIndex) return;

        let _updatedSlides = Utility.updateSlidesFullScreen(props.swiperData.slides, nextActiveIndex, props.swiperData);
        let currentObj = props.swiperData.slides.find(item => item.id === prevActiveIndex + 1);
        let nextObj = props.swiperData.slides.find(item => item.id === id);
        _updatedSlides[1] = currentObj
    
        if(nextActiveIndex - prevActiveIndex > 0){
            _updatedSlides[2] = nextObj
            props.setSwiperState(props.swiperData.slides, _updatedSlides, nextActiveIndex, translate,  props.swiperData.transition, true, props.pathToFindSwiper);
            
        }else{
            _updatedSlides[0] = nextObj
            props.setSwiperState(props.swiperData.slides, _updatedSlides, nextActiveIndex, 0, props.swiperData.transition, true, props.pathToFindSwiper);
        }
    }

    const renderSwiperDots = () => {
        return(
            <div className={renderClassName(`${props.component}SwiperDots`)} >
                {props.swiperData.slides.map((el, i) => {
                    let active = props.swiperData.activeIndex + 1 === el.id ? "on" : "off";
                    // console.log(props.swiperData.activeIndex)
                    return(
                        <div 
                            key={i}
                            className="swiper-dot-wrapper"
                            onMouseEnter={() => handleMouseEnter('swiperDot', el.id)} 
                            onMouseLeave={() => handleMouseLeave('swiperDot', el.id)}
                            onClick={() => dotOnClickHandler(el.id)}
                        >
                            <div className={renderClassName('swiperDot', el.isHover, active)}/>
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            <div 
                className={renderClassName(props.component)} 
                // id={`${props.component}Swiper`}
                ref={setRef(`${props.component}Content`)}
            >
                {renderFirstArrow()}
                <div className="swiper-wrapper" id={`swiper-wrapper-${props.component}`}>
                    {renderSwiper()}
                </div>
                {renderSecondArrow()}
            </div>
            {props.showDots ? renderSwiperDots() : null}
            {props.photoViewerForBigSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="bigSlider"
            /> : null}
            {props.photoViewerForSmallSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallSlider"
            /> : null}
            {props.photoViewerForBlogListStandardPageOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="blogListStandardPage"
            /> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            photoViewerForBigSliderOpen: Selectors.getPhotoViewerForBigSliderOpenState(state),
            photoViewerForSmallSliderOpen: Selectors.getPhotoViewerForSmallSliderOpenState(state),
            photoViewerForBlogListStandardPageOpen: Selectors.getPhotoViewerForBlogListStandardPageOpenState(state),
        };
    },
    (dispatch) => {
        return {
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch)
        };
    }
)(Swiper);
 