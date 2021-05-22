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

import './metroItem.scss';

/**
 * Utility
 */

import { 
    H17,
    H35
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * MetroItem component definition and export
 */

export const MetroItem = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState({});
 
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
                // width: document.getElementById("metroItemId1").clientWidth,
                height: document.getElementById("metroItemId1").clientHeight,
            }, 
            img2: {
                // width: document.getElementById("metroItemId2").clientWidth,
                height: document.getElementById("metroItemId2").clientHeight,
            }, 
            img3: {
                // width: document.getElementById("metroItemId3").clientWidth,
                height: document.getElementById("metroItemId3").clientHeight,
            },
            img4: {
                // width: document.getElementById("metroItemId4").clientWidth,
                height: document.getElementById("metroItemId4").clientHeight,
            },
            img5: {
                // width: document.getElementById("metroItemId5").clientWidth,
                height: document.getElementById("metroItemId5").clientHeight,
            },
            img6: {
                // width: document.getElementById("metroItemId6").clientWidth,
                height: document.getElementById("metroItemId6").clientHeight,
            },
            img7: {
                // width: document.getElementById("metroItemId7").clientWidth,
                height: document.getElementById("metroItemId7").clientHeight,
            },
            img8: {
                // width: document.getElementById("metroItemId8").clientWidth,
                height: document.getElementById("metroItemId8").clientHeight,
            },
            img9: {
                // width: document.getElementById("metroItemId9").clientWidth,
                height: document.getElementById("metroItemId9").clientHeight,
            },
            img10: {
                // width: document.getElementById("metroItemId10").clientWidth,
                height: document.getElementById("metroItemId10").clientHeight,
            },
            img11: {
                // width: document.getElementById("metroItemId11").clientWidth,
                height: document.getElementById("metroItemId11").clientHeight,
            }
        }

        switch(props.obj.id){
            case 1:
                setCardHeight(obj.img1.height - 80);
                break;
            case 2:
                setCardHeight(obj.img2.height - 80);
                break;
            case 3:
                setCardHeight(obj.img3.height - 80);
                break;
            case 4:
                setCardHeight(obj.img4.height - 80);
                break;
            case 5:
                setCardHeight(obj.img5.height - 80);
                break;
            case 6:
                setCardHeight(obj.img6.height - 80);
                break;
            case 7:
                setCardHeight(obj.img7.height - 80);
                break;
            case 8:
                setCardHeight(obj.img8.height - 80);
                break;
            case 9:
                setCardHeight(obj.img9.height - 80);
                break;
            case 10:
                setCardHeight(obj.img10.height - 80);
                break;
            case 11:
                setCardHeight(obj.img11.height - 80);
                break;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
                break;
            case 'metroItemCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
            case 'metroItemCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'metroCover1':
                return Images.METRO_PAGE_COVER_PIC_1;
            case 'metroCover2':
                return Images.METRO_PAGE_COVER_PIC_2;
            case 'metroCover3':
                return Images.METRO_PAGE_COVER_PIC_3;
            case 'metroCover4':
                return Images.METRO_PAGE_COVER_PIC_4;
            case 'metroCover5':
                return Images.METRO_PAGE_COVER_PIC_5;
            case 'metroCover6':
                return Images.METRO_PAGE_COVER_PIC_6;
            case 'metroCover7':
                return Images.METRO_PAGE_COVER_PIC_7;
            case 'metroCover8':
                return Images.METRO_PAGE_COVER_PIC_8;
            case 'metroCover9':
                return Images.METRO_PAGE_COVER_PIC_9;
            case 'metroCover10':
                return Images.METRO_PAGE_COVER_PIC_10;
            case 'metroCover11':
                return Images.METRO_PAGE_COVER_PIC_11;
            default:
                return "";
        }
    }

    const stoneWallWideItemOnClick = (e, path) => {
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

    const onClickHandler = (e, path, key) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Prevent function stoneWallWideItemOnClick from running
        
        e.stopPropagation();
        
        // Storing data in local storage 

        localStorage.setItem("archiveCategoryHG", key);
        localStorage.setItem("pageHG", props.page);

        // Clear archive data

        props.clearArchiveData();

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
        if(opt === "metroItemImage"){
            switch(isHovering){
                case 'init':
                    return "metro-item-image-wrapper";
                case 'on':
                    return "metro-item-image-wrapper-hover-on";
                case 'off':
                    return "metro-item-image-wrapper-hover-off"
            }
        }
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "metro-item-curtain-hover-on";
                case 'off':
                    return "metro-item-curtain-hover-off"
            }
        }
        if(opt === "metroItemCategory"){
            switch(isHovering){
                case 'init':
                    return "h17-white-lustria-animated";
                case 'on':
                    return "h17-white-lustria-nobel-hover-on";
                case 'off':
                    return "h17-nobel-lustria-nobel-hover-off"
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
    }

    const renderCategories = (obj) => {
        return(
            <div className="metro-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="metro-item-category"
                        onMouseDown={(e) => onClickHandler(e, el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`metroItemCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`metroItemCategory`, null, pathOfIds)} 
                    >
                        <H17 className={renderClassName("metroItemCategory", el.isHover)}>{el.label}</H17>
                        {i !== obj.categories.length-1 ? <div className="metro-item-category-slash">/</div> : null}
                    </div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div 
            className="metro-item"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
            id={`metroItemId${props.obj.id}`}
        >
            <div className={renderClassName("metroItemImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => stoneWallWideItemOnClick(e, props.obj.path)}
            >
                {renderCategories(props.obj)}
                <div className="metro-item-header-wrapper">
                    <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                    <div className="metro-item-line"/>
                </div>
            </div>
        </div>
    );
}

export default MetroItem;
