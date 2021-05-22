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

import './stoneWallItem.scss';

/**
 * Utility
 */

import {
    H35,
    EH20
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * StoneWallItem component definition and export
 */

export const StoneWallItem = (props) => {

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
    });

    const handleResize = () => {
        // Set the height of the curtain on window resize

        let obj = {
            img1: {
                // width: document.getElementById("stoneWallItemId1").clientWidth,
                height: document.getElementById("stoneWallItemId1").clientHeight,
            }, 
            img2: {
                // width: document.getElementById("stoneWallItemId2").clientWidth,
                height: document.getElementById("stoneWallItemId2").clientHeight,
            }, 
            img3: {
                // width: document.getElementById("stoneWallItemId3").clientWidth,
                height: document.getElementById("stoneWallItemId3").clientHeight,
            },
            img4: {
                // width: document.getElementById("stoneWallItemId4").clientWidth,
                height: document.getElementById("stoneWallItemId4").clientHeight,
            },
            img5: {
                // width: document.getElementById("stoneWallItemId5").clientWidth,
                height: document.getElementById("stoneWallItemId5").clientHeight,
            }
        }
        
        switch(props.obj.id){
            case 1:
                setCardHeight(obj.img1.height - 40);
                break;
            case 2:
                setCardHeight(obj.img2.height - 40);
                break;
            case 3:
                setCardHeight(obj.img3.height - 40);
                break;
            case 4:
                setCardHeight(obj.img4.height - 40);
                break;
            case 5:
                setCardHeight(obj.img5.height - 40);
                break;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
            break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'stoneWallCover1':
                return Images.STONE_WALL_PAGE_COVER_PIC_1;
            case 'stoneWallCover2':
                return Images.STONE_WALL_PAGE_COVER_PIC_2;
            case 'stoneWallCover3':
                return Images.STONE_WALL_PAGE_COVER_PIC_3;
            case 'stoneWallCover4':
                return Images.STONE_WALL_PAGE_COVER_PIC_4;
            case 'stoneWallCover5':
                return Images.STONE_WALL_PAGE_COVER_PIC_5;
            default:
                return "";
        }
    }

    const stoneWallOnClick = (e, path) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("pageHG", props.page);

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
        
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "stone-wall-item-curtain-hover-on";
                case 'off':
                    return "stone-wall-item-curtain-hover-off"
            }
        }
        if(opt === "stoneWallItemImage"){
            switch(isHovering){
                case 'init':
                    return "stone-wall-item-image";
                case 'on':
                    return "stone-wall-item-image-hover-on";
                case 'off':
                    return "stone-wall-item-image-hover-off"
            }
        }
        if(opt === "header"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "h35-white-poppins-animated-opacity-hover-on";
                case 'off':
                    return "h35-white-poppins-animated-opacity-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "stone-wall-item-image-arrow-wrapper-lengthen";
                case 'off':
                    return "stone-wall-item-image-arrow-wrapper-shorten"
            }
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="stone-wall-item"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
            id={`stoneWallItemId${props.obj.id}`}
        >
            <div className={renderClassName("stoneWallItemImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => stoneWallOnClick(e, props.obj.path)}
            >
                <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                <EH20/>
               <div className={renderClassName("arrow", isHovering)}>
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoneWallItem;
