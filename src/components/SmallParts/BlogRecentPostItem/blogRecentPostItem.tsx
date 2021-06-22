/**
 * Libraries
 */

import * as React from 'react';

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
 * Types
 */

import * as Types from './blogRecentPostItemTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';
 
/**
 * BlogRecentPostItem component definition and export
 */

export const BlogRecentPostItem: React.FC<Types.BlogRecentPostItemProps> = (props) => {

    /**
     * State
     */

    const [recentPostDateIsHover, setRecentPostDateIsHover] = React.useState<string>("init");
    
    /**
     * Methods
     */
   
    React.useEffect(() => {
        console.log("props", props)
    }, []);

    const handleMouseEnter = (opt: string) => {
        switch(opt){
            case 'blogRecentPostDate': 
                setRecentPostDateIsHover("on");
                break;
        }
    }

    const handleMouseLeave = (opt: string) => {
        switch(opt){
            case 'blogRecentPostDate': 
                setRecentPostDateIsHover("off");
                break;
        }
    }

    const renderClassName = (opt: string, isHovering: string, active: boolean) => {
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

    const onCardClickHandler = (e: React.MouseEvent, path: string, key: string) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             *  Clear unnecessary information of the unmounted component, 
             *  and render the data of the selected blog item on left mouse click 
             */ 

            props.clearState();
            props.clearActivityOfMenuItems(null);
            props.activateBlogItem("active", key, null);
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
                <H15 className={renderClassName("blogRecentPostDate", recentPostDateIsHover, null)}>{props.elData.date}</H15>
            </div>
        </div>
    );
}

export default withRouter(BlogRecentPostItem);
 