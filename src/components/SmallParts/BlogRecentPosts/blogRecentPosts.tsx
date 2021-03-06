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

import './blogRecentPosts.scss';

/**
 * Components
 */

import BlogRecentPostItem from '../BlogRecentPostItem/blogRecentPostItem';

/**
 * Utility
 */

import {
    EH10
} from '../../UtilityComponents';

/**
 * Types
 */

import * as Types from './blogRecentPostsTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * BlogRecentPosts component definition and export
 */

export const BlogRecentPosts: React.FC<Types.BlogRecentPostsProps> = (props) => {
    
    /**
     * Methods
     */
   
    React.useEffect(() => {
        // Activate the recent post on browser refresh
        
        let activePostPath = props.location.pathname.slice(18);
        
        if(props.recentPostsArray.length !== 0){
            props.activateRecentPost(null, activePostPath, true);
        }
     
    }, [props.recentPostsArray.length]);


    const renderRecentPosts = (arr: Array<GeneralTypes.BlogListStandardPageItem>) => {
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
 