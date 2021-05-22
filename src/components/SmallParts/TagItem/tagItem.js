/**
 * Libraries
 */

import React, {
    useEffect,
    useState
} from 'react';

/**
 * Styles
 */

import './tagItem.scss';

/**
 * Utility
 */

import {
    H15
} from '../../UtilityComponents';

/**
 * TagItem component definition and export
 */

export const TagItem = (props) => {

    /**
     * State
     */
 
    const [tagIsHover, setTagIsHover] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
    }, []);
    
    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'tagItem':
                setTagIsHover("on")
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'tagItem':
                setTagIsHover("off")
                break;
    
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "tagItem"){
            if(active === "on") return "tag-item-active";
            switch(isHovering){
                case 'init':
                    return "tag-item";
                case 'on':
                    return "tag-item-hover-on";
                case 'off':
                    return "tag-item-hover-off"
            }
        }
        if(opt === "tagName"){
            if(active === "on") return "h15-white-smoke-2-lustria";
            switch(isHovering){
                case 'init':
                    return "h15-black-lustria";
                case 'on':
                    return "h15-black-lustria-white-smoke-2-hover-on";
                case 'off':
                    return "h15-black-lustria-white-smoke-2-hover-off"
            }
        }
    }

    // const iconOnClick = (e, iconName, instaName) => {
    //     switch(e.button){
    //         case 0:
    //             // Open social media on left mouse click
    //         case 1:
    //             // Open social media in a new window on scroll wheel click

    //             if(iconName === "Instagram"){
    //                 return window.open(`https://www.instagram.com/${instaName}`);
    //             }
    //             if(iconName === "Twitter"){
    //                 return window.open(`https://www.twitter.com`);
    //             }
    //             if(iconName === "Facebook"){
    //                 return window.open(`https://www.facebook.com`);
    //             }
    //             if(iconName === "Tumblr"){
    //                 return window.open(`https://www.tumblr.com`);
    //             }
    //         case 2:
    //             // Do nothing on right mouse click
    //             return;
    //     }
    // }

    /**
     * Markup
     */

    return(
        <div 
            className={renderClassName("tagItem", tagIsHover, props.active)}
            onMouseEnter={() => handleMouseEnter("tagItem")} 
            onMouseLeave={() => handleMouseLeave("tagItem")}
            // onMouseDown={(e) => iconOnClick(e, props.iconName, props.instaName)}
        >
            <H15 className={renderClassName("tagName", tagIsHover, props.active)}>{props.tagName}</H15>
        </div>
    );
}

export default TagItem;