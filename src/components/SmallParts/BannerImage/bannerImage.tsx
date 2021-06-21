/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './bannerImage.scss';

/**
 * Utility
 */

import {
    H22,
    H35,
    EH20
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Types
 */

import * as Types from './bannerImageTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * BannerImage component definition and export
 */

export const BannerImage: React.FC<Types.BannerImageProps> = (props) => {

    /**
     * State
     */

    const resizeRef = React.useRef(null);
    const [isHovering, setIsHovering] = React.useState("init");
    const [cardHeight, setCardHeight] = React.useState(0);
 
    /**
     * Methods
     */

    React.useEffect(() => {
        // Event Listeners
        
        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    React.useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        // Set the height of the curtain and padding value on window resize

        let cardHeight = document.getElementById(`${props.obj.coverImage.key}Img`).clientHeight;
        setCardHeight(cardHeight);
    }

    const handleMouseEnter = (opt: string) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
            break;
        }
    }

    const handleMouseLeave = (opt: string) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
        }
    }

    const loadImg = (key: string) => {
        switch(key) {
            case 'bannerPageCover1':
                return Images.BANNER_PAGE_COVER_1;
            case 'bannerPageCover2':
                return Images.BANNER_PAGE_COVER_2;
            case 'bannerPageCover3':
                return Images.BANNER_PAGE_COVER_3;
            case 'bannerPageCover4':
                return Images.BANNER_PAGE_COVER_4;
            case 'bannerPageCover5':
                return Images.BANNER_PAGE_COVER_5;
            default:
                return "";
        }
    }

    const renderClassName = (opt: string, isHovering: string) => {
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "banner-curtain-hover-on";
                case 'off':
                    return "banner-curtain-hover-off"
            }
        }
        if(opt === "bannerImage"){
            switch(isHovering){
                case 'init':
                    return "banner-image";
                case 'on':
                    return "banner-image-hover-on";
                case 'off':
                    return "banner-image-hover-off"
            }
        }
        if(opt === "bannerCoverInfo"){
            switch(isHovering){
                case 'init':
                    return "banner-cover-info";
                case 'on':
                    return "banner-cover-info-hover-on";
                case 'off':
                    return "banner-cover-info-hover-off"
            }
        }
        if(opt === "bannerCoverText"){
            switch(isHovering){
                case 'init':
                    return "banner-cover-text";
                case 'on':
                    return "banner-cover-text-open";
                case 'off':
                    return "banner-cover-text-close"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "banner-image-arrow-wrapper-lengthen";
                case 'off':
                    return "banner-image-arrow-wrapper-shorten"
            }
        }
    }

    const bannerImageOnClick = (e: React.MouseEvent, path: string) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage 

        localStorage.setItem("pageHG", props.page);
        
        if(e.button !== 1){
            if(['bannerPageSection1','bannerPageSection2'].includes(props.page)) {
                // If template page scroll to the top of the page on left mouse click 

                window.scrollTo(0, 0);
            }else{
                /**
                 * Add fading effect on the unmounted component and remember 
                 * information of the unmounted component on left mouse click 
                 */

                props.setUnmountComponentValues(true, path, null);

                // Fire up unmountComponent epic

                props.unmountComponent(null, null,  props.page, e.button);
            }
        }else{
            if(['bannerPageSection1','bannerPageSection2'].includes(props.page)){
                // Open the template page on scroll wheel click 

                props.setUnmountComponentValues(false, props.currentPagePathName, null);
            }else{
                // Remember information of the unmounted component on scroll wheel click 

                props.setUnmountComponentValues(false, path, null);
            }
            // Fire up unmountComponent epic

            props.unmountComponent(null, null,  props.page, e.button);
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="banner-image"
            onMouseEnter={() => handleMouseEnter("curtain")}
            onMouseLeave={() => handleMouseLeave("curtain")}
        >
            <div className={renderClassName("bannerImage", isHovering)}>
                <img 
                    id={`${props.obj.coverImage.key}Img`}
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div
                className={renderClassName("bannerCoverInfo", isHovering)}
                onMouseDown={(e) => bannerImageOnClick(e, props.obj.path)}
            >
                <H35 className={`h35-${props.obj.headerColor}-poppins`}>{props.obj.header}</H35>
                <EH20/>
                {['bannerPageSection2'].includes(props.page) ?
                <div className={renderClassName("bannerCoverText", isHovering)}>
                    <H22 className={`h22-${props.obj.headerColor}-lustria`}>{props.obj.text}</H22> 
                </div>
                : null}
                {isHovering === "on" && !['bannerPageSection2'].includes(props.page) ? 
                <div className="arrow-wrapper">
                    <div className={renderClassName("arrow", isHovering)}>
                        <div className="arrow-horizontal-line"/>
                        <div className="arrow-wrapper2">
                            <div className="arrow-top-line"></div>
                            <div className="arrow-bottom-line"></div>
                        </div>
                    </div> 
                </div>
                : null}
            </div>
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{
                    height: `${cardHeight}px`,
                    background: `${props.obj.curtainBackgroundColor}`
                }}
            >
            </div>
        </div>
    );
}

export default BannerImage;
