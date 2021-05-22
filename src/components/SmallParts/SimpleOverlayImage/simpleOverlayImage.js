/**
 * Libraries
 */

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

/**
 * Styles
 */

import './simpleOverlayImage.scss';

/**
 * Utility
 */

import { 
    H35,
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * SimpleOverlayImage component definition and export
 */

export const SimpleOverlayImage = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);
 
    /**
     * Methods
     */

    useEffect(() => {
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        // Set the height of the curtain on window resize

        let cardHeight = document.getElementById(`${props.imageKey}Img`).clientHeight;
        setCardHeight(cardHeight);
    }

    const handleMouseEnter = () => {
        setIsHovering("on");
        handleResize();
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_1;
            case 'id1BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_2;
            case 'id1Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_3;
            case 'id1SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_4;
            case 'id1BigImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_5;
            case 'id1SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_6;
            case 'id2SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_7;
            case 'id2Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_8;
            case 'id2SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_9;
            case 'id2SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_10;
            case 'id2BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_11;
            case 'id2BigImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_12;
            case 'id3Gallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_13;
            case 'id3SmallSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_14;
            case 'id3SmallGallery1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_15;
            case 'id3SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_16;
            case 'id3BigSlider1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_17;
            case 'id4SmallImages1':
                return Images.SIMPLE_OVERLAY_COVER_PIC_18;
            default:
                return "";
        }
    }

    const simpleOverlayImageOnClick = (path, e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("pageHG", props.page);

        if(e.button !== 1){
            if(['bannerPageSection5'].includes(props.page)){
                // If template page scroll to the top of the page on left mouse click 

                window.scrollTo(0, 0);
            }else{
                /**
                 * Add fading effect on the unmounted component and remember 
                 * information of the unmounted component on left mouse click 
                 */

                props.setUnmountComponentValues(true, path);

                // Fire up unmountComponent epic

                props.unmountComponent(null, null,  props.page, e.button);
            }

           
        }else{
            if(['bannerPageSection5'].includes(props.page)){
                // Open the template page on scroll wheel click 
                
                props.setUnmountComponentValues(false, props.currentPagePathName);
            }else{
                // Remember information of the unmounted component on scroll wheel click
            
                props.setUnmountComponentValues(false, path);
            }
            // Fire up unmountComponent epic

            props.unmountComponent(null, null,  props.page, e.button);
        }
 
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "simple-overlay-curtain-hover-on";
                case 'off':
                    return "simple-overlay-curtain-hover-off"
            }
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="simple-overlay-image"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{marginBottom: `${['bannerPageSection5'].includes(props.page) ? 0 : 30}px`}}
        >
            <img 
                id={`${props.imageKey}Img`}
                src={loadImg(props.imageKey)} 
                alt={props.alt}
            />
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => simpleOverlayImageOnClick(props.path, e)}
            >
                <H35 className="h35-nero-poppins">{props.header}</H35>
            </div>
        </div>
    );
}

export default SimpleOverlayImage;
