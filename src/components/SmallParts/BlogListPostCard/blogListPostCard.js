/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogListPostCard.scss';

/**
 * Components
 */

import Icon from '../Icon/icon';
import Audio from '../../Parts/Audio/audio';
import Video from '../../Parts/Video/video'
import Swiper from '../../../library/Swiper/swiper';

/**
 * Utility
 */

import {
    H15,
    H17,
    H22,
    H35,
    EW10,
    EH20,
    EH60,
    EH70
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as Images from '../../../constants/images';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
 * BlogListPostCard component definition and export
 */

export const BlogListPostCard = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [isHoveringBlogCardDate, setIsHoveringBlogCardDate] = useState("init");
    const [isHoveringBlogCardHeader, setIsHoveringBlogCardHeader] = useState("init");
    const [isHoveringBlogCardLikes, setIsHoveringBlogCardLikes] = useState("init");
    const [isHoveringBlogCardComments, setIsHoveringBlogCardComments] = useState("init");
    const [isHoveringBlogCardShare, setIsHoveringBlogCardShare] = useState("init");
    const [isHoveringBlogCardLink, setIsHoveringBlogCardLink] = useState("init");
    const [isHoveringBlogCardQuote, setIsHoveringBlogCardQuote] = useState("init");
    const [cardWidth, setCardWidth] = useState(0);
    
    /**
     * Methods
     */
   
    useEffect(() => {

        //Set width of swiper

        let blogListPostCard = document.getElementById("blogListPostCard");
        setCardWidth(blogListPostCard.offsetWidth);

    }, []);

    const handleMouseEnter = (opt, key) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("on");
                break;
            case 'blogCardHeader': 
                setIsHoveringBlogCardHeader("on");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("on");
                break;
            case 'blogCardComments': 
                setIsHoveringBlogCardComments("on");
                break;
            case 'blogCardShare': 
                setIsHoveringBlogCardShare("on");
                break;
            case 'blogCardCategories': 
                props.blogListCardCategoryIsHover("on", props.elData.key, key);
                break;
            case 'blogCardLink': 
                setIsHoveringBlogCardLink("on");
                break;
            case 'blogCardQuote': 
                setIsHoveringBlogCardQuote("on");
                break;
        }
    }

    const handleMouseLeave = (opt, key) => {
        switch(opt){
            case 'blogCardDate': 
                setIsHoveringBlogCardDate("off");
                break;
            case 'blogCardHeader': 
                setIsHoveringBlogCardHeader("off");
                break;
            case 'blogCardLikes': 
                setIsHoveringBlogCardLikes("off");
                break;
            case 'blogCardComments': 
                setIsHoveringBlogCardComments("off");
                break;
            case 'blogCardShare': 
                setIsHoveringBlogCardShare("off");
                break;
            case 'blogCardCategories': 
                props.blogListCardCategoryIsHover("off", props.elData.key, key);
                break;
            case 'blogCardLink': 
                setIsHoveringBlogCardLink("off");
                break;
            case 'blogCardQuote': 
                setIsHoveringBlogCardQuote("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if([
            'blogCardDate',
            'blogCardLikes',
            'blogCardComments',
            'blogCardCategories'
        ].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h15-nobel-lustria-nero-hover-off"
            }
        }
        if(['blogCardLink'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h22-white-smoke-2-lustria-cursor";
                case 'on':
                    return "h22-white-smoke-2-lustoria-nobel-hover-on";
                case 'off':
                    return "h22-white-smoke-2-lustoria-nobel-hover-off"
            }
        }
        if(['blogCardQuote'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h22-nero-lustria-cursor";
                case 'on':
                    return "h22-nero-lustria-nobel-hover-on";
                case 'off':
                    return "h22-nero-lustria-nobel-hover-off"
            }
        }
        if(['blogCardHeader'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "h35-black-poppins-cursor";
                case 'on':
                    return "h35-black-poppins-nobel-cursor-hover-on";
                case 'off':
                    return "h35-black-poppins-nobel-cursor-hover-off"
            }
        }
        if(['blogCardSocMedInstagram'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-list-post-card-info-soc-med-Instagram";
                case 'on':
                    return "blog-list-post-card-info-soc-med-Instagram-hover-on";
                case 'off':
                    return "blog-list-post-card-info-soc-med-Instagram-hover-off"
            }
        }
        if(['blogCardSocMedTwitter'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-list-post-card-info-soc-med-Twitter";
                case 'on':
                    return "blog-list-post-card-info-soc-med-Twitter-hover-on";
                case 'off':
                    return "blog-list-post-card-info-soc-med-Twitter-hover-off"
            }
        }
        if(['blogCardSocMedFacebook'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-list-post-card-info-soc-med-Facebook";
                case 'on':
                    return "blog-list-post-card-info-soc-med-Facebook-hover-on";
                case 'off':
                    return "blog-list-post-card-info-soc-med-Facebook-hover-off"
            }
        }
        if(['blogCardSocMedTumblr'].includes(opt)){
            switch(isHovering){
                case 'init':
                    return "blog-list-post-card-info-soc-med-Tumblr";
                case 'on':
                    return "blog-list-post-card-info-soc-med-Tumblr-hover-on";
                case 'off':
                    return "blog-list-post-card-info-soc-med-Tumblr-hover-off"
            }
        }
    }

    const loadImg = (imgKey) => {
        switch(imgKey){
            case 'blogCardStandardPostCoverImg1':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_1;
            case 'blogCardStandardPostCoverImg2':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_2;
            case 'blogCardStandardPostCoverImg3':
                return Images.BLOG_CARD_STANDARD_POST_COVER_IMG_3;
            case 'blogCardLinkPostCoverImg1':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_1;
            case 'blogCardLinkPostCoverImg2':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_2;
            case 'blogCardLinkPostCoverImg3':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_3;
            case 'blogCardLinkPostCoverImg4':
                return Images.BLOG_CARD_LINK_POST_COVER_IMG_4;
            case 'blogCardQuotePostCoverImg1':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_1;
            case 'blogCardQuotePostCoverImg2':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_2;
            case 'blogCardQuotePostCoverImg3':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_3;
            case 'blogCardQuotePostCoverImg4':
                return Images.BLOG_CARD_QUOTE_POST_COVER_IMG_4;
            case 'blogCardAudioPostCoverImg1':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_1;
            case 'blogCardAudioPostCoverImg2':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_2;
            case 'blogCardAudioPostCoverImg3':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_3;
            case 'blogCardAudioPostCoverImg4':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_4;
            case 'blogCardAudioPostCoverImg5':
                return Images.BLOG_CARD_AUDIO_POST_COVER_IMG_5;
            default:
                return "";
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

        }else{
            // Open selected blog item in a new window on scroll wheel click

            window.open(`/crypto-portfolio/${path}` , "_blank");
        }
    }

    const onLikesClickHandler = () => {
        // Remember posts that user liked

        if(!props.elData.userLikedThePost){
            // Icrease the number of likes

            props.increaseTheNumberOfLikes(props.elData.key);

            let userLikedPosts = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            if(!userLikedPosts.includes(props.elData.key)){
                userLikedPosts.push(props.elData.key);
            }
            localStorage.setItem("userLikedPostsHG", JSON.stringify(userLikedPosts));
        }else{
            // Decrease the number of likes

            props.decreaseTheNumberOfLikes(props.elData.key);

            let userLikedPosts = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userLikedPosts = userLikedPosts.filter(item => item !== props.elData.key);
            localStorage.setItem("userLikedPostsHG", JSON.stringify(userLikedPosts))
        }
    }
    
    const onCommentsClickHandler = (e) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             *  Render the data of the selected blog item and scroll
             *  to the comments section on left mouse click 
             */

            props.setCommentsButtonClickedState(true);
            onCardClickHandler(e, props.elData.path, props.elData.key);

        }else{
            // Open selected blog item in a new window on scroll wheel click

            localStorage.setItem("commentsIconCickedHG",true);
            window.open(`/crypto-portfolio/${props.elData.path}` , "_blank");
        }
    }

    const renderCardCover = (type) => {
        switch(type){
            case 'audioPost':
                return(
                    <div className="blog-list-post-card-audio-wrapper">
                        <img 
                            src={loadImg(props.elData.coverImage.key)}
                            // onMouseDown={(e) => onCardClickHandler(e)}
                        />
                        <Audio
                            audioKey={props.elData.audioKey}
                        />
                    </div>
                );
            case 'videoPost':
                return(
                    <div className="blog-list-post-card-video-wrapper">
                        <Video videoKey={props.elData.videoKey}/>
                    </div>
                );
            case 'galleryPost':
                let translatedValue;

                // Calculate translatedWidth property for different screen widths

                if(size.width > 830){
                    translatedValue = cardWidth;
                }else{
                    translatedValue = size.width;
                }

                return(
                    <div className="blog-list-post-card-gallery-wrapper">
                        {cardWidth !== 0 ?
                        <Swiper
                            component={props.elData.key}
                            contentArray={props.elData.imagesArray}
                            content={props.pageData}
                            translateWidth={translatedValue}
                            showNumbersOfSlides={1}
                            setSwiperState={props.setSwiperStateForBlogListStandardPage}
                            swiperData={props.elData.swiper}
                            onlyImages
                            pathToFindSwiper={props.elData.key}
                            // autoPlay
                        /> : null}
                    </div>
                );
            default: 
                return(
                    <img 
                        src={loadImg(props.elData.coverImage.key)}
                        onMouseDown={(e) => onCardClickHandler(e, props.elData.path, props.elData.key)}
                    />              
                );
        }
    }

    const renderBlogCardMainBody = (type) => {
        return(
            <>
                {renderCardCover(type)}
                <EH60/>
                <div className="blog-list-post-card-date-and-header-wrapper">
                    <div
                        onMouseEnter={() => handleMouseEnter(`blogCardDate`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardDate`)} 
                    >
                        <H15 className={renderClassName("blogCardDate", isHoveringBlogCardDate)}>{props.elData.date}</H15>
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter(`blogCardHeader`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardHeader`)}
                        onMouseDown={(e) => onCardClickHandler(e, props.elData.path, props.elData.key)}
                    >
                        <H35 className={renderClassName("blogCardHeader", isHoveringBlogCardHeader)}>{props.elData.header}</H35>
                    </div>
                </div>
                <EH20/>
                <div className="blog-list-post-card-text">
                    <H17 className="h17-black-lustria">{props.elData.text + " ..."}</H17>
                </div>
                <EH20/>
                {renderBlogCardInfo()}
                <EH70/>
            </>
        )
    }

    const onClickCategory = (key, path, e) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             * Show filtered items on left mouse click 
             */

            props.clearActivityOfMenuItems();
            props.activateBlogCategory("active", key);
            props.activateBlogTag("deactive", "");
            props.activateBlogItem("deactive", "");
            props.history.push(`/crypto-portfolio/list-standard-blog-category/${key}`);
        }else{
            // Show filtered items on scroll wheel click

            props.activateBlogCategory("active", key);
            window.open(`/crypto-portfolio/list-standard-blog-category/${key}`, "_blank");
        }
    }

    const renderCategories = (arr) => {
        return(
            <>{arr.map((el, i) => {
                return(
                    <div
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`blogCardCategories`, el.key)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardCategories`, el.key)}
                        onMouseDown={(e) => onClickCategory(el.key, null, e)}
                    >
                        <H15 className={renderClassName("blogCardCategories", el.isHover)}>{el.label + `${i !== arr.length - 1 ? "," : ""}`}&nbsp;</H15>
                    </div>
                )
            })}</>
        )
    }

    const renderSocialMediaIcons = () => {
        return(
            <div className="blog-list-post-card-info-soc-med-icons">{socialMediaIcons.map((el, i) => {
               return(
                    <div 
                        key={i}
                        className={renderClassName(`blogCardSocMed${el.name}`, isHoveringBlogCardShare)}
                    >
                        <Icon 
                            key={i}
                            iconType="fontAwesome"
                            iconName={el.name} 
                            icon={el.iconKey} 
                            iconSize="1x"
                            onMouseEnter
                            onMouseLeave
                            onMouseDown
                            classNameOpt={`blogCardSocMed${el.name}`}
                        />
                        <EW10/>
                    </div>
               ) 
            })}
            </div>
        )
    }

    const renderBlogCardInfo = () => {
        return(
            <div className="blog-list-post-card-info-wrapper">
                <div className="blog-list-post-card-info-left-part-wrapper">
                    <div 
                        className="blog-list-post-card-info-likes"
                        onMouseEnter={() => handleMouseEnter(`blogCardLikes`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardLikes`)}
                        onClick={onLikesClickHandler}
                    >
                        <Icon 
                            iconType="fontAwesome"
                            icon={props.elData.userLikedThePost ? "faHeartSolid" : "faHeart"}
                            iconSize="1x"
                            isHover={isHoveringBlogCardLikes}
                            classNameOpt="blogCardLike"
                        />
                        &nbsp;
                        <H15 className={renderClassName("blogCardLikes", isHoveringBlogCardLikes)}>{props.elData.numberOfLikes}</H15>
                    </div>
                    <EW10/>
                    <div 
                        className="blog-list-post-card-info-comments"
                        onMouseEnter={() => handleMouseEnter(`blogCardComments`)} 
                        onMouseLeave={() => handleMouseLeave(`blogCardComments`)}
                        onMouseDown={(e) => onCommentsClickHandler(e)}
                    >
                        <Icon 
                            iconType="fontAwesome"
                            icon="faComment"
                            iconSize="1x"
                            isHover={isHoveringBlogCardComments}
                            classNameOpt="blogCardComment"
                        />
                        &nbsp;
                        <H15 className={renderClassName("blogCardComments", isHoveringBlogCardComments)}>{props.elData.numberOfComments}</H15>
                    </div>
                    <EW10/>
                    <div className="blog-list-post-card-info-categories">
                        <Icon
                            iconType="fontAwesome"
                            icon="faBookmark"
                            iconSize="1x"
                            classNameOpt="blogCardCategory"
                        />
                        &nbsp;
                        {renderCategories(props.elData.categories)}
                    </div>
                </div>              
                <div 
                    className="blog-list-post-card-info-soc-med-wrapper"
                    onMouseEnter={() => handleMouseEnter(`blogCardShare`)} 
                    onMouseLeave={() => handleMouseLeave(`blogCardShare`)} 
                >
                    {renderSocialMediaIcons()}
                    <Icon
                        iconType="fontAwesome"
                        icon="faShareAlt"
                        iconSize="1x"
                        isHover={isHoveringBlogCardShare}
                        classNameOpt="blogCardShare"
                    />
                </div>
            </div>
        )
    }

    const renderBlogCard = (type) => {
        switch(type){
            case 'standardPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'galleryPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'linkPost':
                return (
                    <>
                        <div className="blog-list-post-card-link">
                            <div
                                className="blog-list-post-card-link-text-wrapper"
                                onMouseEnter={() => handleMouseEnter(`blogCardLink`)} 
                                onMouseLeave={() => handleMouseLeave(`blogCardLink`)} 
                            >
                                <H22 className={renderClassName("blogCardLink", isHoveringBlogCardLink)}>{props.elData.linkText}</H22>
                            </div>
                            <div className="blog-list-post-card-link-icon-wrapper">
                                <Icon
                                    iconType="fontAwesome"
                                    icon="faLink"
                                    iconSize="2x"
                                    classNameOpt="blogCardLink"
                                />
                            </div>
                        </div>
                        <EH60/>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'quotePost':
                return (
                    <>
                        <div className="blog-list-post-card-quote">
                            <div>
                                <div
                                    className="blog-list-post-card-quote-text-wrapper"
                                    onMouseEnter={() => handleMouseEnter(`blogCardQuote`)} 
                                    onMouseLeave={() => handleMouseLeave(`blogCardQuote`)} 
                                >
                                    <H22 className={renderClassName("blogCardQuote", isHoveringBlogCardQuote)}>{props.elData.quoteText}</H22>
                                </div>
                                <EH20/>
                                <div className="blog-list-post-card-quote-author-name-wrapper">
                                    <div className="slide-dash"/>
                                    <H17 className="h17-nero-poppins">{props.elData.quoteAuthor}</H17>
                                </div>
                            </div>
                            <div className="blog-list-post-card-quote-icon-wrapper">
                                <Icon
                                    iconType="fontAwesome"
                                    icon="faQuoteLeft"
                                    iconSize="2x"
                                    classNameOpt="blogCardQuote"
                                />
                            </div>
                        </div>
                        <EH60/>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'audioPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
            case 'videoPost':
                return (
                    <>
                        {renderBlogCardMainBody(type)}
                    </>
                )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="blog-list-post-card" id="blogListPostCard">
            {renderBlogCard(props.elData.cardType)}
        </div>
    );
}

export default withRouter(BlogListPostCard);
 