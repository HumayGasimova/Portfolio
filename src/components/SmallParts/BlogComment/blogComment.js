/**
 * Libraries
 */

import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogComment.scss';

/**
 * Components
 */

import BlogReplyForm from '../../Parts/BlogReplyForm/blogReplyForm';

/**
 * Utility
 */

import {
    H13,
    H15,
    H17,
    EW10,
    EH20,
    EH10,
    EH30,
    EH50
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * BlogComment component definition and export
 */

export const BlogComment = (props) => {


    const [isHoveringReplyButton, setIsHoveringReplyButton] = useState("init");
    const [showReplyForm, setShowReplyForm] = useState(false);
    const previousShowReplyFormVal = useRef(showReplyForm);

    /**
     * Methods
     */

    useEffect(()=>{
        if(previousShowReplyFormVal.current === true){
            setShowReplyForm(true);
            previousShowReplyFormVal.current = false;
        }else{
            setShowReplyForm(false);
        }
    },[props.triggerCommentReplyButtonVal])

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'replyButton':
                setIsHoveringReplyButton("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'replyButton':
                setIsHoveringReplyButton("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "replyButtonLine"){
            switch(isHovering){
                case 'init':
                    return "blog-comment-reply-button-line";
                case 'on':
                    return "blog-comment-reply-button-line-hover-on";
                case 'off':
                    return "blog-comment-reply-button-line-hover-off"
            }
        }
        if(opt === "replyButtonText"){
            switch(isHovering){
                case 'init':
                    return "h13-black-poppins";
                case 'on':
                    return "h13-black-poppins-nobel-hover-on";
                case 'off':
                    return "h13-black-poppins-nobel-hover-off"
            }
        }
    }

    const onReplyButtonClick = (e) => {
        switch(e.button){
            case 0: 
                // Show reply form
                // setShowReplyForm(true);
                props.triggerCommentReplyButton();
                previousShowReplyFormVal.current = true;
                return;
            case 1:
                // Open the current page in a new window on scroll wheel click
                window.open(props.location.pathname, "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'Photo17':
                return Images.PHOTO_17;
            case 'Photo18':
                return Images.PHOTO_18;
            case 'Photo19':
                return Images.PHOTO_19;
            case 'Photo21':
                return Images.PHOTO_21;
            default:
                return "";
        }
    }

    const renderBlogReplyForm = () => {
        let pathOfIdsToComment = [...props.pathOfIdsToComment];
        pathOfIdsToComment.push(props.data.id);
        return(
            <BlogReplyForm
                // inputFieldNameBold
                initInputForm={props.initInputForm}
                inputFormFieldsArray={props.inputFormFieldsArray}
                setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidation}
                replyComment={props.replyComment}
                pathOfIdsToComment={pathOfIdsToComment}
                postReply={props.postReply}
                fakeData={props.fakeData}
                postReplyFakeData={props.postReplyFakeData}
                activateBlogItem={props.activateBlogItem}
                cardIdFromPathname={props.cardIdFromPathname}
            />
        )
    }

    /**
     * Markup
     */

    return(
        <>
            <div className="blog-comment">
                <div className="grey-line-comment"/>
                <EH50/>
                <div className="blog-comment-wrapper">
                    <div className="blog-comment-author-image">
                        <img src={loadImg(props.data.authorImage.key)}/>
                    </div>
                    <div className="blog-comment-info-text-wrapper">
                        <div className="blog-comment-info-wrapper">
                            <div className="blog-comment-info-author-name-and-date-wrapper">
                                <H17 className="h17-black-poppins">{props.data.authorName}</H17>
                                <EW10/>
                                <div className="blog-comment-info-date-wrapper">
                                    <H13 className="h13-nobel-lustria">{props.data.date}</H13>
                                </div>
                            </div>
                            <div 
                                className="blog-comment-reply-button"
                                onMouseEnter={() => handleMouseEnter("replyButton")}
                                onMouseLeave={() => handleMouseLeave("replyButton")}
                                onMouseDown={(e) => onReplyButtonClick(e)}
                            >
                                <div className={renderClassName("replyButtonLine", isHoveringReplyButton)}/>
                                <H13 className={renderClassName("replyButtonText", isHoveringReplyButton)}>reply</H13>
                            </div>
                        </div>
                        <EH20/>
                        <H15 className="h15-black-lustria">{props.data.text}</H15>
                        {showReplyForm ?
                        <>
                            <EH10/>
                            <div 
                                className="blog-comment-cancel-reply-button"
                                onClick={() => setShowReplyForm(false)}
                            >
                                <H13 className="h13-black-poppins">cancel reply</H13>
                            </div>
                            <EH10/>
                            {renderBlogReplyForm()}
                        </> : null}
                    </div>
                </div>
                <EH30/>
            </div>
        </>
    );
}

export default withRouter(BlogComment);
 