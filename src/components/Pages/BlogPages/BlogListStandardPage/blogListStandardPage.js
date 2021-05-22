/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './blogListStandardPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import BlogInfoBoard from '../../../Parts/BlogInfoBoard/blogInfoBoard';
import BlogListPostCard from '../../../SmallParts/BlogListPostCard/blogListPostCard';
import BlogPostSingleItem from '../../../SmallParts/BlogPostSingleItem/blogPostSingleItem';
import BlogCategoriesContent from '../../../Parts/BlogCategoriesContent/blogCategoriesContent';
import BlogTagsContent from '../../../Parts/BlogTagsContent/blogTagsContent';
import Pagination from '../../../Parts/Pagination/pagination';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';
import BlogCommentsSection from '../../../Parts/BlogCommentsSection/blogCommentsSection';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H45
} from '../../../UtilityComponents';

import * as Utility from '../../../../utility';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';

import {
    categoriesListForBlog
} from '../../../../constants/categoriesListForBlog';

import {
    tagsListForBlog
} from '../../../../constants/tagsListForBlog';

import {
    blogListStandardSearchInputForm
} from '../../../../constants/inputForm';

/**
 * BlogListStandardPage component definition and export
 */

export const BlogListStandardPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {

        // Init state for fading effect when component will unmount
        
        props.setUnmountComponentValues(false, "");

        // Init imput forms

        props.initSearchInputFormThroughWebsite(blogListStandardSearchInputForm);

        // Init blog categories and tags lists

        props.initCategoriesForBlogListStandardPage(categoriesListForBlog);
        props.initTagsForBlogListStandardPage(tagsListForBlog);

        // Fetch data for the component

        if(props.blogListStandardPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                fetchFakeData(FakeData.blogListStandardPage, props.blogListStandardPage.activePageId);
               
            }else{
                // Fetch data (required to run -> npm run server)
                
                props.fetchBlogListStandardPageData(props.blogListStandardPage.activePageId);

                // Set activity of initial category and item

                // props.activateListStandardBlogCategory("deactive", "");
                // props.activateListStandardBlogItem("deactive", "", "");
            }
        }

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);
        
        return () => {
            // Cleaning the unmounted component
            
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);


    const fetchFakeData = (fakeData, activePageId) => {
        let blogListStandardPage = [...fakeData];

        let firstIndex = activePageId * 6 - 5;
        let lastIndex = activePageId * 6 - 1;
    
        let updatedBlogListStandard = {
            numberOfPages: !Number.isInteger(blogListStandardPage.length/6) ? Math.floor(blogListStandardPage.length/6) + 1 : Math.floor(blogListStandardPage.length/6),
            blogListStandardPage: blogListStandardPage.slice(firstIndex - 1, lastIndex + 1)
        };

        let updatedJson = [...updatedBlogListStandard.blogListStandardPage];
        let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
        userPostsLikedArray.map((el, i) => {
            let item = updatedJson.filter(item => item.key === el);
            if(item.length !== 0){
                let itemIndex = updatedJson.findIndex(item => item.key === el);
                let obj = {
                    ...item[0],
                    numberOfLikes: item[0].numberOfLikes + 1,
                    userLikedThePost: true
                }
                updatedJson.splice(itemIndex, 1, obj);
            }
        });

        props.fetchBlogListStandardPageDataSuccess(updatedJson);
        props.initBlogPagination(updatedBlogListStandard.numberOfPages);
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("blogListStandardPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="blogListStandardPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="blogListStandardPage"
                    />
                </>
            )
        }
    }
    
    const renderBlogListStandardPageData = (arr) => {
        return(
            <div>
                {arr.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <BlogListPostCard 
                                page="blogListStandardPage"
                                elData={el}
                                blogListCardCategoryIsHover={props.blogListCardCategoryIsHoverForBlogListStandardPage}
                                setSwiperStateForBlogListStandardPage={props.setSwiperStateForBlogListStandardPage}
                                pageData={props.blogListStandardPage}
                                clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                activateBlogItem={props.activateListStandardBlogItem}
                                activateBlogCategory={props.activateListStandardBlogCategory}
                                activateBlogTag={props.activateListStandardBlogTag}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                clearState={props.clearBlogListSingleItemStateForBlogListStandardPage}
                                increaseTheNumberOfLikes={props.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage}
                                decreaseTheNumberOfLikes={props.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage}
                                setCommentsButtonClickedState={props.setCommentsButtonClickedStateForBlogListStandardPage}
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
    
    const renderBlogCommentsSection = () => {

        let pathNameArray = props.blogListStandardPage.postBlogContent.item.path.split("/");
        let cardType = Utility.categoryPathToKey(pathNameArray[pathNameArray.length-2]);
        let cardIdFromPathname = +pathNameArray[pathNameArray.length-1];
        let postReply;
        let fakeData = [];

        switch(cardType){
            case 'standardPost':
                postReply = props.fetchStandardPostBlogData;
                fakeData = FakeData.standardPost;
                break;
            case 'galleryPost':
                postReply = props.fetchGalleryPostBlogData;
                fakeData = FakeData.galleryPost;
                break;
            case 'linkPost':
                postReply = props.fetchLinkPostBlogData;
                fakeData = FakeData.linkPost;
                break;
            case 'quotePost':
                postReply = props.fetchQuotePostBlogData;
                fakeData = FakeData.quotePost;
                break;
            case 'audioPost':
                postReply = props.fetchAudioPostBlogData;
                fakeData = FakeData.audioPost;
                break;
            case 'videoPost':
                postReply = props.fetchVideoPostBlogData;
                fakeData = FakeData.videoPost;
                break;
            default:
                // props.fetchStandardPostBlogData(cardIdFromPathname);
                break;
        }
        return(
            <BlogCommentsSection
                page="blogListStandardPage"
                data={props.blogListStandardPage.postBlogContent}
                triggerCommentReplyButtonVal={props.blogListStandardPage.triggerCommentReplyButtonVal}
                triggerCommentReplyButton={props.triggerCommentReplyButtonForBlogListStandardPage}
                initInputForm={props.initInputFormOfBlogCommentReplyForBlogListStandardPage}
                inputFormFieldsArray={props.blogListStandardPage.commentReplyInputForm}
                setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidationForBlogListStandardPage}
                replyComment={props.replyCommentBlogListStandardPage}
                postReply={postReply}
                fakeData={fakeData}
                postReplyFakeData={props.fetchPostBlogDataSuccess}
                activateBlogItem={props.activateListStandardBlogItem}
                cardIdFromPathname={cardIdFromPathname}
                commentsIconClicked={props.blogListStandardPage.commentsIconCicked}
                setCommentsButtonClickedState={props.setCommentsButtonClickedStateForBlogListStandardPage}
            />
        )
    }

    const renderBlogListStandardPageDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-list-standard-page-data-wrapper">
                    {renderBlogListStandardPageData(data.items)}
                    <Pagination
                        page="blogListStandardPage"
                        activePageNumber={props.blogListStandardPage.activePageId}
                        pagesArray={props.blogListStandardPage.pagesArray}
                        fetchPageData={props.fetchBlogListStandardPageData}
                        fakeData={FakeData.blogListStandardPage}
                        fetchFakeData={(fakeData, activePageId) => fetchFakeData(fakeData, activePageId)}
                        activatePageNumber={props.activatePageNumberForBlogListStandardPage}
                    />
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-list-standard-page-loading-error" 
                    style={{height: `100%`}}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="blog-list-standard-page" id="blogListStandardPage">
            {renderToolbars()}
            <Router>
                <div className="blog-list-standard-page-wrapper">
                    <div className="blog-list-standard-page-header">
                        <H45 className="h45-nero-lustria">Blog List Standard</H45>
                    </div>
                    <div className="grey-line"/>
                    <div className="blog-list-standard-page-content-info-wrapper">
                        <div className="blog-list-standard-page-content">
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard"
                            >
                                {renderBlogListStandardPageDataContent(props.blogListStandardPage)} 
                            </Route>
                            <Route 
                                exact 
                                path="/crypto-portfolio/list-standard-blog-tag/:tag"
                                render={(props) => (
                                    <BlogTagsContent page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/list-standard-blog-category/:category"
                                render={(props) => (
                                    <BlogCategoriesContent page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/standard-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/gallery-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/link-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/quote-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/audio-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                            <Route 
                                exact 
                                path="/crypto-portfolio/blog-list-standard-item/video-post/:id"
                                render={(props) => (
                                    <BlogPostSingleItem key={props.match.params.id} page='blogListStandardPage'/>
                                )}
                            />
                        </div>
                        <BlogInfoBoard
                            page="blogListStandardPage"
                            searchFormInputsArray={props.searchResultPage.searchInputForm.inputsArray}
                            searchInputForm={props.searchResultPage.searchInputForm}
                            searchResultPagePaginationActivePageId={props.searchResultPage.activePageId}
                            categoryList={props.blogListStandardPage.categoriesList}
                            tagsList={props.blogListStandardPage.tagsList}
                            recentPostsList={props.blogListStandardPage.recentPosts}
                            clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                            activateBlogItem={props.activateListStandardBlogItem}
                            activateBlogCategory={props.activateListStandardBlogCategory}
                            activateBlogTag={props.activateListStandardBlogTag}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            fetchBlogRecentPostsData={props.fetchBlogRecentPostsData}
                            fetchFakeData={props.fetchBlogRecentPostsForBlogListStandardPageDataSuccess}
                            clearState={props.clearBlogListSingleItemStateForBlogListStandardPage}
                            activateRecentPost={props.activateRecentPostForBlogListStandardPage}
                            setInputFiledValueAndCheckValidation={props.setInputFiledValueAndCheckValidationThroughWebsite}
                            search={props.searchThroughWebsite}
                            fetchSearchThroughWebsiteResutData={props.fetchSearchThroughWebsiteResutData}
                        />
                    </div>
                    {props.blogListStandardPage.activeItem.activated === "active" && !Utility.isObjEmpty(props.blogListStandardPage.postBlogContent.item) ?
                    <> 
                        {renderBlogCommentsSection()}
                    </>: null} 
                </div>
            </Router>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
            searchResultPage: Selectors.getSearchResultPageState(state),
            unmountComp: Selectors.getUnmountComponentState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBlogListStandardPageData: bindActionCreators(Services.fetchBlogListStandardPageData, dispatch),
            fetchBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogListStandardPageDataSuccess, dispatch),
            initBlogPagination: bindActionCreators(Actions.initBlogPagination, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            initSearchInputFormThroughWebsite: bindActionCreators(Actions.initSearchInputFormThroughWebsite, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
            initCategoriesForBlogListStandardPage: bindActionCreators(Actions.initCategoriesForBlogListStandardPage, dispatch),
            initTagsForBlogListStandardPage: bindActionCreators(Actions.initTagsForBlogListStandardPage, dispatch),
            blogListCardCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogListCardCategoryIsHoverForBlogListStandardPage, dispatch),
            setSwiperStateForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateForBlogListStandardPage, dispatch),
            activatePageNumberForBlogListStandardPage: bindActionCreators(Actions.activatePageNumberForBlogListStandardPage, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            triggerCommentReplyButtonForBlogListStandardPage: bindActionCreators(Actions.triggerCommentReplyButtonForBlogListStandardPage, dispatch),
            initInputFormOfBlogCommentReplyForBlogListStandardPage: bindActionCreators(Actions.initInputFormOfBlogCommentReplyForBlogListStandardPage, dispatch),
            setInputFiledValueAndCheckValidationForBlogListStandardPage: bindActionCreators(Actions.setInputFiledValueAndCheckValidationForBlogListStandardPage, dispatch),
            setInputFiledValueAndCheckValidationThroughWebsite: bindActionCreators(Actions.setInputFiledValueAndCheckValidationThroughWebsite, dispatch),
            replyCommentBlogListStandardPage: bindActionCreators(Actions.replyCommentBlogListStandardPage, dispatch),
            searchThroughWebsite: bindActionCreators(Actions.searchThroughWebsite, dispatch),
            fetchStandardPostBlogData: bindActionCreators(Services.fetchStandardPostBlogData, dispatch),
            fetchGalleryPostBlogData: bindActionCreators(Services.fetchGalleryPostBlogData, dispatch),
            fetchLinkPostBlogData: bindActionCreators(Services.fetchLinkPostBlogData, dispatch),
            fetchQuotePostBlogData: bindActionCreators(Services.fetchQuotePostBlogData, dispatch),
            fetchAudioPostBlogData: bindActionCreators(Services.fetchAudioPostBlogData, dispatch),
            fetchVideoPostBlogData: bindActionCreators(Services.fetchVideoPostBlogData, dispatch),
            fetchPostBlogDataSuccess: bindActionCreators(Actions.fetchPostBlogDataSuccess, dispatch),
            increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            setCommentsButtonClickedStateForBlogListStandardPage: bindActionCreators(Actions.setCommentsButtonClickedStateForBlogListStandardPage, dispatch),
            fetchBlogRecentPostsData: bindActionCreators(Services.fetchBlogRecentPostsData, dispatch),
            fetchBlogRecentPostsForBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogRecentPostsForBlogListStandardPageDataSuccess, dispatch),
            activateRecentPostForBlogListStandardPage: bindActionCreators(Actions.activateRecentPostForBlogListStandardPage, dispatch),
            fetchSearchThroughWebsiteResutData: bindActionCreators(Services.fetchSearchThroughWebsiteResutData, dispatch),
        };
    }
)(withRouter(BlogListStandardPage));
 