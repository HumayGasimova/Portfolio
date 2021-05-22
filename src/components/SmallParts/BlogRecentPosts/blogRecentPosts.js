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

import './blogRecentPosts.scss';

/**
 * Components
 */

import BlogRecentPostItem from '../../SmallParts/BlogRecentPostItem/blogRecentPostItem';

/**
 * Utility
 */

import {
    EH10
} from '../../UtilityComponents';

/**
 * BlogRecentPosts component definition and export
 */

export const BlogRecentPosts = (props) => {
    
    /**
     * Methods
     */
   
    useEffect(() => {
        // Activate the recent post on browser refresh
        
        let activePostPath = props.location.pathname.slice(18);
        
        if(props.recentPostsArray.length !== 0){
            props.activateRecentPost(null, activePostPath, true);
        }
     
    }, [props.recentPostsArray.length]);


    const renderRecentPosts = (arr) => {
        return(
            <>
                {arr.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <BlogRecentPostItem
                                elData={el}
                                clearState={props.clearState}
                                clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                activateBlogItem={props.activateBlogItem}
                                activateBlogCategory={props.activateBlogCategory}
                                activateBlogTag={props.activateBlogTag}
                                activateRecentPost={props.activateRecentPost}
                            />
                            {i !== arr.length - 1 ? <EH10/> : null}
                        </React.Fragment>
                    )
                })}
            </>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            {renderRecentPosts(props.recentPostsArray)}
        </>
    );
}

export default withRouter(BlogRecentPosts);
 