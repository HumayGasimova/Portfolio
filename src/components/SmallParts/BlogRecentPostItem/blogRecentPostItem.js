/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogRecentPostItem.scss';

/**
 * Utility
 */

import {
    H15,
    H17
} from '../../UtilityComponents';

/**
 * BlogRecentPostItem component definition and export
 */

export const BlogRecentPostItem = (props) => {

    /**
     * State
     */

    const [recentPostDateIsHover, setRecentPostDateIsHover] = useState("init");
    
    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'blogRecentPostDate': 
                setRecentPostDateIsHover("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'blogRecentPostDate': 
                setRecentPostDateIsHover("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "blogRecentPostHeader"){
            if(active){
                return "blog-recent-post-header-active";
            }else{
                return "h17-black-lustria-cursor-animation";
            }
        }
        
        if(['blogRecentPostDate'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h13-nobel-lustria-animated";
                case 'on':
                    return "h13-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h13-nobel-lustria-nero-hover-off"
            }
        }
    }

    const onCardClickHandler = (e, path, key) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             *  Clear unnecessary information of the unmounted component, 
             *  and render the data of the selected blog item on left mouse click 
             */ 

            props.clearState();
            props.clearActivityOfMenuItems();
            props.activateBlogItem("active", key);
            props.activateBlogCategory("deactive", "");
            props.activateBlogTag("deactive", "");
            props.history.push(`/crypto-portfolio/${path}`);
            props.activateRecentPost(key, null, true);

        }else{
            // Open selected blog item in a new window on scroll wheel click

            window.open(`/crypto-portfolio/${path}` , "_blank");
        }
    }

    /**
     * Markup
     */

    return(
        <div className="blog-recent-post-item">
            <div 
                className="blog-recent-post-header"
                onMouseDown={props.elData.active ? null : (e) => onCardClickHandler(e, props.elData.path, props.elData.key)}
            >
                <H17 className={renderClassName("blogRecentPostHeader", null, props.elData.active)}>{props.elData.header}</H17>
            </div>
            <div 
                className="blog-recent-post-date"
                onMouseEnter={() => handleMouseEnter(`blogRecentPostDate`)} 
                onMouseLeave={() => handleMouseLeave(`blogRecentPostDate`)}
            >
                <H15 className={renderClassName("blogRecentPostDate", recentPostDateIsHover)}>{props.elData.date}</H15>
            </div>
        </div>
    );
}

export default withRouter(BlogRecentPostItem);
 