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

import { RouteComponentProps } from 'react-router-dom';

type ActivateBlogCategory = {
    type: string,
    categoryIsActive: string, 
    categoryName: string
}

type ActivateBlogItem = {
    type: string,
    itemIsActive: string,
    itemKey: string,
    cardType: string,
}

type ActivateBlogTag = {
    type: string,
    tagIsActive: string, 
    tagName: string
}

type ActivateRecentPost = {
    type: string,
    postKey: string,
    postPath: string,
    val: boolean
}

type ClearActivityOfMenuItems = {
    
}
type BlogRecentPostItemProps = {
    activateBlogCategory: (categoryIsActive: string, categoryName: string) => ActivateBlogCategory,
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => ActivateBlogItem,
    activateBlogTag: (tagIsActive: string, tagName: string) => ActivateBlogTag,
    activateRecentPost: (postKey: string, postPath: string, val: boolean) => ActivateRecentPost,
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => ClearActivityOfMenuItems,
    clearState: () => void,
    elData: RecentPostObj,
    history: any,
    location: any,
    match: any
}

type RecentPostObj = {
    active: boolean,
    cardType: string,
    categories: Array<CategoriesObj>,
    comments: Array<CommentsObj>,
    coverImage: Array<CoverImageObj>,
    date: string,
    header: string,
    id: number,
    key: string,
    linkText: string,
    numberOfComments: number,
    numberOfLikes: number,
    path: string,
    text: string,
    userLikedThePost: boolean
}

type CategoriesObj = {
    id: number,
    isHover: string,
    key: string,
    label: string,
    path: string,
}

type CommentsObj = {
    authorImage: Array<AuthorImage>,
    authorName: string,
    date: string,
    id: number
}

type AuthorImage = {
    alt: string,
    id: string,
    imageName: string,
    isHover: string,
    key: string,
}

type CoverImageObj = {
    alt: string,
    folderName:  string,
    id: number,
    imageName: string,
    isHover: string,
    key: string,
}

/**
 * BlogRecentPostItem component definition and export
 */

export const BlogRecentPostItem = (props: BlogRecentPostItemProps) => {

    /**
     * State
     */

    const [recentPostDateIsHover, setRecentPostDateIsHover] = React.useState("init");
    
    /**
     * Methods
     */
   
    React.useEffect(() => {
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
 