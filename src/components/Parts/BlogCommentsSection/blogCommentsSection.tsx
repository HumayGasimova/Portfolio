/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './blogCommentsSection.scss';

/**
 * Components
 */

import BlogComment from '../../SmallParts/BlogComment/blogComment';

/**
 * Utility
 */

import {
    H22
} from '../../UtilityComponents';

/**
 * Types
 */

import * as Types from './blogCommentsSectionTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * BlogCommentsSection component definition and export
 */

export const BlogCommentsSection: React.FC<Types.BlogCommentsSectionProps> = (props) => {

    /**
     * State
     */

    const [pathOfIdsToComment, setPathOfIdsToComment] = React.useState<Array<number | string>>([])
    
    /**
     * Methods
     */

    React.useEffect(() => {
        let commentsSection = document.getElementById(`${props.page}CommentsSection`);
        let timeout;
        
        if(props.commentsIconClicked){
            // Component rendered on left mouse click

            window.scroll(0, commentsSection.offsetTop);
            props.setCommentsButtonClickedState(false);
        }
        else if(JSON.parse(localStorage.getItem("commentsIconCickedHG"))){
            // Component rendered on scroll wheel click
            
            timeout = setTimeout(() => {
                window.scroll(0, commentsSection.offsetTop);
            }, 500);
            
            localStorage.setItem("commentsIconCickedHG","false");
        }
        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
        }
    }, []);

    const renderComments = (arr: Array<GeneralTypes.CommentsItem>, id: number | string, _pathOfIds: Array<number | string> = []) => {
        let iteration = 0;
        let pathOfIds = [...pathOfIdsToComment];
       
        if(id && _pathOfIds.length === 0){
            pathOfIds.push(id)
        }else if(id && _pathOfIds.length !== 0){
            pathOfIds=[..._pathOfIds];
            pathOfIds.push(id)
        }

        return(
            <>
                {arr.map((el, i) => {
                    iteration ++;
                    return(
                        <React.Fragment key={el.id}>
                            <BlogComment
                                data={el}
                                triggerCommentReplyButtonVal={props.triggerCommentReplyButtonVal}
                                triggerCommentReplyButton={props.triggerCommentReplyButton}
                                initInputForm={props.initInputForm}
                                inputFormFieldsArray={props.inputFormFieldsArray}
                                setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidation}
                                replyComment={props.replyComment}
                                pathOfIdsToComment={pathOfIds}
                                postReply={props.postReply}
                                fakeData={props.fakeData}
                                postReplyFakeData={props.postReplyFakeData}
                                activateBlogItem={props.activateBlogItem}
                                cardIdFromPathname={props.cardIdFromPathname}
                            />
                            {el.repliesArray.length !== 0 ? 
                            <div className="blog-comments-section-reply" style={{paddingLeft: `${iteration * 75}px`}}>
                                {renderComments(el.repliesArray, el.id, pathOfIds)}
                            </div> : null}
                        </React.Fragment>
                    )
                })}
            </>
        )
    }

    const renderBlogPostSingleItemComments = (data: Types.Data) => {
        return(
            <div className="blog-comments-section-wrapper">
                <H22 className="h22-black-lustria">Comments</H22>
                {renderComments(data.item.comments, null, null)}
            </div>
        )
    } 
    
    /**
     * Markup
     */

    return(
        <div 
            className="blog-comments-section" 
            id={`${props.page}CommentsSection`}
        >
            {renderBlogPostSingleItemComments(props.data)}
        </div>
    );
}

export default BlogCommentsSection;
 