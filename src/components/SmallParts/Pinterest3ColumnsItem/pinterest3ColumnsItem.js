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

import './pinterest3ColumnsItem.scss';

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
 * Pinterest3ColumnsItem component definition and export
 */

export const Pinterest3ColumnsItem = (props) => {

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
                // width: document.getElementByIdpinterest3ColumnsItemId1").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId1").clientHeight,
            }, 
            img2: {
                // width: document.getElementByIdpinterest3ColumnsItemId2").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId2").clientHeight,
            }, 
            img3: {
                // width: document.getElementByIdpinterest3ColumnsItemId3").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId3").clientHeight,
            },
            img4: {
                // width: document.getElementByIdpinterest3ColumnsItemId4").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId4").clientHeight,
            },
            img5: {
                // width: document.getElementByIdpinterest3ColumnsItemId5").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId5").clientHeight,
            },
            img6: {
                // width: document.getElementByIdpinterest3ColumnsItemId6").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId6").clientHeight,
            },
            img7: {
                // width: document.getElementByIdpinterest3ColumnsItemId7").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId7").clientHeight,
            },
            img8: {
                // width: document.getElementByIdpinterest3ColumnsItemId8").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId8").clientHeight,
            },
            img9: {
                // width: document.getElementByIdpinterest3ColumnsItemId9").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId9").clientHeight,
            },
            img10: {
                // width: document.getElementByIdpinterest3ColumnsItemId10").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId10").clientHeight,
            },
            img11: {
                // width: document.getElementByIdpinterest3ColumnsItemId11").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId11").clientHeight,
            },
            img12: {
                // width: document.getElementByIdpinterest3ColumnsItemId12").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId12").clientHeight,
            },
            img13: {
                // width: document.getElementByIdpinterest3ColumnsItemId13").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId13").clientHeight,
            },
            img14: {
                // width: document.getElementByIdpinterest3ColumnsItemId14").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId14").clientHeight,
            },
            img15: {
                // width: document.getElementByIdpinterest3ColumnsItemId15").clientWidth,
                height: document.getElementById("pinterest3ColumnsItemId15").clientHeight,
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
            case 12:
                setCardHeight(obj.img12.height - 80);
                break;
            case 13:
                setCardHeight(obj.img10.height - 80);
                break;
            case 14:
                setCardHeight(obj.img11.height - 80);
                break;
            case 15:
                setCardHeight(obj.img12.height - 80);
                break;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
                break;
            case 'pinterest3ColumnsItemCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
            case 'pinterest3ColumnsItemCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'pinterest3ColumnsCover1':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_1;
            case 'pinterest3ColumnsCover2':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_2;
            case 'pinterest3ColumnsCover3':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_3;
            case 'pinterest3ColumnsCover4':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_4;
            case 'pinterest3ColumnsCover5':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_5;
            case 'pinterest3ColumnsCover6':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_6;
            case 'pinterest3ColumnsCover7':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_7;
            case 'pinterest3ColumnsCover8':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_8;
            case 'pinterest3ColumnsCover9':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_9;
            case 'pinterest3ColumnsCover10':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_10;
            case 'pinterest3ColumnsCover11':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_11;
            case 'pinterest3ColumnsCover12':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_12;
            case 'pinterest3ColumnsCover13':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_13;
            case 'pinterest3ColumnsCover14':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_14;
            case 'pinterest3ColumnsCover15':
                return Images.PINTEREST_3_COLUMNS_PAGE_COVER_PIC_15;
            default:
                return "";
        }
    }

    const pinterest3ColumnsItemOnClick = (e, path) => {
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

        // Prevent function pinterest3ColumnsItem from running

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
        if(opt === "pinterest3ColumnsItemImage"){
            switch(isHovering){
                case 'init':
                    return "pinterest-3-columns-item-image-wrapper";
                case 'on':
                    return "pinterest-3-columns-item-image-wrapper-hover-on";
                case 'off':
                    return "pinterest-3-columns-item-image-wrapper-hover-off"
            }
        }
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "pinterest-3-columns-item-curtain-hover-on";
                case 'off':
                    return "pinterest-3-columns-item-curtain-hover-off"
            }
        }
        if(opt === "pinterest3ColumnsItemCategory"){
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
            <div className="pinterest-3-columns-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="pinterest-3-columns-item-category"
                        onMouseDown={(e) => onClickHandler(e, el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`pinterest3ColumnsItemCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`pinterest3ColumnsItemCategory`, null, pathOfIds)} 
                    >
                        <H17 className={renderClassName("pinterest3ColumnsItemCategory", el.isHover)}>{el.label}</H17>
                        {i !== obj.categories.length-1 ? <div className="pinterest-3-columns-item-category-slash">/</div> : null}
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
            className="pinterest-3-columns-item"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
            id={`pinterest3ColumnsItemId${props.obj.id}`}
        >
            <div className={renderClassName("pinterest3ColumnsItemImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => pinterest3ColumnsItemOnClick(e, props.obj.path)}
            >
                {renderCategories(props.obj)}
                <div className="pinterest-3-columns-item-header-wrapper">
                    <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                    <div className="pinterest-3-columns-item-line"/>
                </div>
            </div>
        </div>
    );
}

export default Pinterest3ColumnsItem;
