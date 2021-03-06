/**
 * Libraries
 */

import * as React from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './blogTagsContent.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import BlogListPostCard from '../../SmallParts/BlogListPostCard/blogListPostCard';
import Pagination from '../Pagination/pagination';

/**
 * Services
 */

import * as Actions from "../../../actions";

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15
} from '../../UtilityComponents';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Types
 */

import * as Types from './blogTagsContentTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * BlogTagsContent component definition and export
 */

export const BlogTagsContent: React.FC<Types.BlogTagsContentProps> = (props) => {

    /**
     * Methods
     */

    React.useEffect(() => {
        // Fetch data for the component

        let tagName = setPageData(props.page, "tagName");
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)
            
            fetchFakeData(setPageData(props.page, "fakeData") as Array<GeneralTypes.BlogListStandardPageItem>, setPageData(props.page, "activePageNumber") as number, props.page, tagName as string);
        }else{
            // Fetch data (required to run -> npm run server)

            if(!!tagName){
                props.fetchBlogTagsContentData(setPageData(props.page, "activePageNumber") as number, props.page, tagName as string);
            }
        }
       
    }, [props.blogListStandardPage.activeTag.tagName]);
 
    const fetchFakeData = (fakeData: Array<GeneralTypes.BlogListStandardPageItem>, activePageId: number, page: string, tagName: string) => {
        let blogListPage = [...fakeData];
        let tagsArray = [];

        blogListPage.map(el => {
            el.tags.map(el2 => {
                if(el2.key === tagName){
                    tagsArray.push(el);
                }
            })
        });

        let firstIndex = activePageId * 6 - 5;
        let lastIndex = activePageId * 6 - 1;
    
        let updatedBlogList = {
            numberOfPages: !Number.isInteger(tagsArray.length/6) ? Math.floor(tagsArray.length/6) + 1 : Math.floor(tagsArray.length/6),
            blogListPage: tagsArray.slice(firstIndex - 1, lastIndex + 1)
        };

        let updatedJson = [...updatedBlogList.blogListPage];
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
        if(page === 'blogListStandardPage'){
            props.fetchBlogListStandardPageDataSuccess(updatedJson);
        }
        props.initBlogPagination(updatedBlogList.numberOfPages);
    }

    const setPageData = (page: string, opt: string) => {
        switch(opt){
            case 'pageData':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage;
                }
            return;
            case 'tagName':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage.activeTag.tagName;
                }
            return;
            case 'blogListCardCategoryIsHover':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListCardCategoryIsHoverForBlogListStandardPage;
                }
            return;
            case 'setSwiperStateForBlogListStandardPage':
                switch(page){
                    case 'blogListStandardPage':
                        return props.setSwiperStateForBlogListStandardPage;
                }
            return;
            case 'activateBlogItem':
                switch(page){
                    case 'blogListStandardPage':
                        return props.activateListStandardBlogItem;
                }
            return;
            case 'activateBlogCategory':
                switch(page){
                    case 'blogListStandardPage':
                        return props.activateListStandardBlogCategory;
                }
            return;
            case 'activateBlogTag':
                switch(page){
                    case 'blogListStandardPage':
                        return props.activateListStandardBlogTag;
                }
            return;
            case 'clearState':
                switch(page){
                    case 'blogListStandardPage':
                        return props.clearBlogListSingleItemStateForBlogListStandardPage;
                }
            return;
            case 'increaseTheNumberOfLikes':
                switch(page){
                    case 'blogListStandardPage':
                        return props.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage;
                }
            return;
            case 'decreaseTheNumberOfLikes':
                switch(page){
                    case 'blogListStandardPage':
                        return props.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage;
                }
            return;
            case 'setCommentsButtonClickedState':
                switch(page){
                    case 'blogListStandardPage':
                        return props.setCommentsButtonClickedStateForBlogListStandardPage;
                }
            return;
            case 'activePageNumber':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage.activePageId;
                }
            return;
            case 'activatePageNumber':
                switch(page){
                    case 'blogListStandardPage':
                        return props.activatePageNumberForBlogListStandardPage;
                }
            return;
            case 'pagesArray':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage.pagesArray;
                }
            return;
            case 'fakeData':
                switch(page){
                    case 'blogListStandardPage':
                        return FakeData.blogListStandardPage;
                }
            return;
        }
    }

    const renderBlogListStandardPageData = (arr: Array<GeneralTypes.BlogListStandardPageItem>) => {
        return(
            <div>
                {arr.map((el, i) => {                     
                    return(
                        <React.Fragment key={i}>
                            <BlogListPostCard 
                                page={props.page}
                                elData={el}
                                blogListCardCategoryIsHover={setPageData(props.page, "blogListCardCategoryIsHover")}
                                setSwiperStateForBlogListStandardPage={setPageData(props.page, "setSwiperStateForBlogListStandardPage")}
                                pageData={setPageData(props.page, "pageData")}
                                clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                                activateBlogItem={setPageData(props.page, "activateBlogItem")}
                                activateBlogCategory={setPageData(props.page, "activateBlogCategory")}
                                activateBlogTag={setPageData(props.page, "activateBlogTag")}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                clearState={setPageData(props.page, "clearState")}
                                increaseTheNumberOfLikes={setPageData(props.page, "increaseTheNumberOfLikes")}
                                decreaseTheNumberOfLikes={setPageData(props.page, "decreaseTheNumberOfLikes")}
                                setCommentsButtonClickedState={setPageData(props.page, "setCommentsButtonClickedState")}
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }

    const renderBlogListStandardPageDataContent = () => {
        let data = setPageData(props.page, "pageData") as GeneralTypes.BlogListStandardPage;

        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-tags-content-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-tags-content-data-wrapper">
                    {renderBlogListStandardPageData(data.items)}
                    <Pagination
                        page={props.page}
                        activePageNumber={setPageData(props.page, "activePageNumber") as number}
                        pagesArray={setPageData(props.page, "pagesArray") as Array<GeneralTypes.PagesArrayItem>}
                        fetchPageData={props.fetchBlogTagsContentData}
                        fakeData={setPageData(props.page, "fakeData") as Array<GeneralTypes.BlogListStandardPageItem>}
                        fetchFakeData={(fakeData, activePageId, page, categoryName) => fetchFakeData(fakeData, activePageId, page as string, categoryName)}
                        activatePageNumber={setPageData(props.page, "activatePageNumber") as (activePageId: number) => {activePageId: number}}
                        filterParam={setPageData(props.page, "tagName") as string}
                    />
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-tags-content-loading-error" 
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
        <div className="blog-tags-content">
            {renderBlogListStandardPageDataContent()}
        </div>
    );
}

export default connect<Types.MapStateToPropsTypes, Types.MapDispatchToPropsTypes>(
    (state) => {
        return {
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBlogTagsContentData: bindActionCreators(Services.fetchBlogTagsContentData, dispatch),
            fetchBlogListStandardPageDataSuccess: bindActionCreators(Actions.fetchBlogListStandardPageDataSuccess, dispatch),
            initBlogPagination: bindActionCreators(Actions.initBlogPagination, dispatch),
            blogListCardCategoryIsHoverForBlogListStandardPage: bindActionCreators(Actions.blogListCardCategoryIsHoverForBlogListStandardPage, dispatch),
            setSwiperStateForBlogListStandardPage: bindActionCreators(Actions.setSwiperStateForBlogListStandardPage, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage: bindActionCreators(Actions.decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage, dispatch),
            setCommentsButtonClickedStateForBlogListStandardPage: bindActionCreators(Actions.setCommentsButtonClickedStateForBlogListStandardPage, dispatch),
            activatePageNumberForBlogListStandardPage: bindActionCreators(Actions.activatePageNumberForBlogListStandardPage, dispatch),
        };
    }
)(BlogTagsContent);
 