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

import './stoneWallWideItem.scss';

/**
 * Utility
 */

import * as Utility from '../../../utility';

import { 
    H17,
    H35,
    H45,
    H70,
    EH10,
    EH20,
    EH40,
    EH70,
    EH110
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * StoneWallWideItem component definition and export
 */

export const StoneWallWideItem = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [paddingTopBottom, setPaddingTopBottom] = useState(0);
    const [upload, setUpload] = useState(false);
    const [cardHeight, setCardHeight] = useState({});
 
    /**
     * Methods
     */

    useEffect(() => {   
        const resize = () => {
            resizeRef.current();
        } 
        // setUpload(true);
        // if(upload){
        //     props.getImagesWidthAndHeight({
        //         img1: {
        //             // width: document.getElementById("stoneWallWideItemId1").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId1").clientHeight,
        //         }, 
        //         img2: {
        //             // width: document.getElementById("stoneWallWideItemId2").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId2").clientHeight,
        //         }, 
        //         img3: {
        //             // width: document.getElementById("stoneWallWideItemId3").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId3").clientHeight,
        //         },
        //         img4: {
        //             // width: document.getElementById("stoneWallWideItemId4").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId4").clientHeight,
        //         },
        //         img5: {
        //             // width: document.getElementById("stoneWallWideItemId5").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId5").clientHeight,
        //         },
        //         img6: {
        //             // width: document.getElementById("stoneWallWideItemId6").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId6").clientHeight,
        //         },
        //         img7: {
        //             // width: document.getElementById("stoneWallWideItemId7").clientWidth,
        //             height: document.getElementById("stoneWallWideItemId7").clientHeight,
        //         }
        //     })
        // }       
        window.addEventListener('resize', resize);
        return () =>  window.removeEventListener('resize', resize);
    }, [upload]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        let paddingTopBottomVal = setPadding(props.page);

        let obj = {
            img1: {
                // width: document.getElementById("stoneWallWideItemId1").clientWidth,
                height: document.getElementById("stoneWallWideItemId1").clientHeight,
            }, 
            img2: {
                // width: document.getElementById("stoneWallWideItemId2").clientWidth,
                height: document.getElementById("stoneWallWideItemId2").clientHeight,
            }, 
            img3: {
                // width: document.getElementById("stoneWallWideItemId3").clientWidth,
                height: document.getElementById("stoneWallWideItemId3").clientHeight,
            },
            img4: {
                // width: document.getElementById("stoneWallWideItemId4").clientWidth,
                height: document.getElementById("stoneWallWideItemId4").clientHeight,
            },
            img5: {
                // width: document.getElementById("stoneWallWideItemId5").clientWidth,
                height: document.getElementById("stoneWallWideItemId5").clientHeight,
            },
            img6: {
                // width: document.getElementById("stoneWallWideItemId6").clientWidth,
                height: document.getElementById("stoneWallWideItemId6").clientHeight,
            },
            img7: {
                // width: document.getElementById("stoneWallWideItemId7").clientWidth,
                height: document.getElementById("stoneWallWideItemId7").clientHeight,
            }
        }
        setPaddingTopBottom(paddingTopBottomVal);
        // props.getImagesWidthAndHeight(obj)

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
        }
    }

    const setPadding = (page) => {
        switch(page){
            case 'stoneWallWidePage':
                return 40;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
                break;
            case 'stoneWallWideItemCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
            case 'stoneWallWideItemCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'stoneWallWideCover1':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_1;
            case 'stoneWallWideCover2':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_2;
            case 'stoneWallWideCover3':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_3;
            case 'stoneWallWideCover4':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_4;
            case 'stoneWallWideCover5':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_5;
            case 'stoneWallWideCover6':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_6;
            case 'stoneWallWideCover7':
                return Images.STONE_WALL_WIDE_PAGE_COVER_PIC_7;
            default:
                return "";
        }
    }

    const stoneWallWideItemOnClick = (e, path) => {
        if(e.button === 2) return;
        localStorage.setItem("pageHG", props.page);
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const onClickHandler = (e, path, key) => {
        if(e.button === 2) return;
        e.stopPropagation();       
        localStorage.setItem("archiveCategoryHG", key);
        localStorage.setItem("pageHG", props.page);
        props.clearArchiveData();
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null,  props.page, e.button);
    }


    const renderClassName = (opt, isHovering) => {
        if(opt === "stoneWallWideItemImage"){
            switch(isHovering){
                case 'init':
                    return "stone-wall-wide-item-image-wrapper";
                case 'on':
                    return "stone-wall-wide-item-image-wrapper-hover-on";
                case 'off':
                    return "stone-wall-wide-item-image-wrapper-hover-off"
            }
        }
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "stone-wall-wide-item-curtain-hover-on";
                case 'off':
                    return "stone-wall-wide-item-curtain-hover-off"
            }
        }
        if(opt === "stoneWallWideItemCategory"){
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
            <div className="stone-wall-wide-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="stone-wall-wide-item-category"
                        onMouseDown={(e) => onClickHandler(e, el.path, el.key)}
                        onMouseEnter={() => handleMouseEnter(`stoneWallWideItemCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`stoneWallWideItemCategory`, null, pathOfIds)} 
                    >
                        <H17 className={renderClassName("stoneWallWideItemCategory", el.isHover)}>{el.label}</H17>
                        {i !== obj.categories.length-1 ? <div className="stone-wall-wide-item-category-slash">/</div> : null}
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
            className="stone-wall-wide-item"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
            id={`stoneWallWideItemId${props.obj.id}`}
        >
            <div className={renderClassName("stoneWallWideItemImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                // className="slide-from-image-left-curtain-hover-on"
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`}}
                onMouseDown={(e) => stoneWallWideItemOnClick(e, props.obj.path)}
            >
                {renderCategories(props.obj)}
                <div className="stone-wall-wide-item-header-wrapper">
                    <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                    <div className="stone-wall-wide-item-line"/>
                </div>
            </div>
        </div>
    );
}

export default StoneWallWideItem;
