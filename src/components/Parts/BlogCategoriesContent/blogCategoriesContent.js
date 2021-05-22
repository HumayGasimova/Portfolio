/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './blogCategoriesContent.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import BlogListPostCard from '../../SmallParts/BlogListPostCard/blogListPostCard';
import Pagination from '../../Parts/Pagination/pagination';

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
 * BlogCategoriesContent component definition and export
 */

export const BlogCategoriesContent = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        let categoryName = setPageData(props.page, "categoryName");
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)
            
            fetchFakeData(setPageData(props.page, "fakeData"), setPageData(props.page, "activePageNumber"), props.page, categoryName);
        }else{
            // Fetch data (required to run -> npm run server)

            if(!!categoryName){
                props.fetchBlogCategoriesContentData(setPageData(props.page, "activePageNumber"), props.page, categoryName);
            }
        }

    }, [props.blogListStandardPage.activeCategory.categoryName]);
 
    const fetchFakeData = (fakeData, activePageId, page, categoryName) => {
        let blogListPage = [...fakeData];
        let categoriesArray = [];

        blogListPage.map(el => {
            el.categories.map(el2 => {
                if(el2.key === categoryName){
                    categoriesArray.push(el)
                }
            })
        });

        let firstIndex = activePageId * 6 - 5;
        let lastIndex = activePageId * 6 - 1;
    
        let updatedBlogList = {
            numberOfPages: !Number.isInteger(categoriesArray.length/6) ? Math.floor(categoriesArray.length/6) + 1 : Math.floor(categoriesArray.length/6),
            blogListPage: categoriesArray.slice(firstIndex - 1, lastIndex + 1)
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

    const setPageData = (page, opt) => {
        switch(opt){
            case 'pageData':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage;
                }
            return;
            case 'categoryName':
                switch(page){
                    case 'blogListStandardPage':
                        return props.blogListStandardPage.activeCategory.categoryName;
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

    const renderBlogListStandardPageData = (arr) => {
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
        let data = setPageData(props.page, "pageData");

        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-categories-content-loading-error" 
                    style={{height: `100%`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <div className="blog-categories-content-data-wrapper">
                    {renderBlogListStandardPageData(data.items)}
                    <Pagination
                        page={props.page}
                        activePageNumber={setPageData(props.page, "activePageNumber")}
                        pagesArray={setPageData(props.page, "pagesArray")}
                        fetchPageData={props.fetchBlogCategoriesContentData}
                        fakeData={setPageData(props.page, "fakeData")}
                        fetchFakeData={(fakeData, activePageId, page, categoryName) => fetchFakeData(fakeData, activePageId, page, categoryName)}
                        activatePageNumber={setPageData(props.page, "activatePageNumber")}
                        filterParam={setPageData(props.page, "categoryName")}
                    />
                </div>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-categories-content-loading-error" 
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
        <div className="blog-categories-content">
            {renderBlogListStandardPageDataContent()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBlogCategoriesContentData: bindActionCreators(Services.fetchBlogCategoriesContentData, dispatch),
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
            activatePageNumberForBlogListStandardPage: bindActionCreators(Actions.activatePageNumberForBlogListStandardPage, dispatch)
        };
    }
)(BlogCategoriesContent);
 