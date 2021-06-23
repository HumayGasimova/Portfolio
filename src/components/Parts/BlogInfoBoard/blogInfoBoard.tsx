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

import './blogInfoBoard.scss';

/**
 * Components
 */

import LoadingVersion2 from '../../SmallParts/LoadingVersion2/loadingVersion2';
import Input from '../../../library/Input/input';
import TagItem from '../../SmallParts/TagItem/tagItem';
import Icon from '../../SmallParts/Icon/icon';
import BlogRecentPosts from '../../SmallParts/BlogRecentPosts/blogRecentPosts';

/**
 * Utility
 */

import {
    H13,
    H15,
    H17,
    H22,
    EH10,
    EH20,
    EH40
} from '../../UtilityComponents';

import * as uuid from "uuid";

import * as Utility from "../../../utility";

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

import {
    categoriesListForBlog
} from '../../../constants/categoriesListForBlog';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
 * Types
 */

import * as Types from './blogInfoBoardTypes';

/**
 * BlogInfoBoard component definition and export
 */

export const BlogInfoBoard: React.FC<Types.BlogInfoBoardProps> = (props) => {

    /**
     * State
     */

    const [searchIsHover, setSearchIsHover] = React.useState<string>("init");
    
    /**
     * Methods
     */

    React.useEffect(() => {
        // Fetch data for the component
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)

            props.fetchFakeData(FakeData.blogRecentPosts);
            
        }else{
            // Fetch data (required to run -> npm run server)
            
            props.fetchBlogRecentPostsData(props.page);
        }
    }, []);

    const handleMouseEnter = (opt: string) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("on")
                break;
        }
    }

    const handleMouseLeave = (opt: string) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("off")
                break;
        }
    }

    const onClickCategory = (key: string, e: React.MouseEvent) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             * Show filtered items on left mouse click 
             */

            props.clearActivityOfMenuItems(null);
            props.activateBlogCategory("active", key);
            props.activateBlogTag("deactive", "");
            props.activateBlogItem("deactive", "", null);
            props.history.push(`/crypto-portfolio/list-standard-blog-category/${key}`);
        }else{
            // Show filtered items on scroll wheel click

            props.activateBlogCategory("active", key);
            window.open(`/crypto-portfolio/list-standard-blog-category/${key}`, "_blank");
        }
    }

    const onClickTag = (key: string, path: string | null, e: React.MouseEvent) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             * Show filtered items on left mouse click 
             */

            props.clearActivityOfMenuItems(null);
            props.activateBlogTag("active", key);
            props.activateBlogItem("deactive", "", null);
            props.history.push(`/crypto-portfolio/list-standard-blog-tag/${key}`);
        }else{
            // Show filtered items on scroll wheel click

            props.activateBlogTag("active", key);
            window.open(`/crypto-portfolio/list-standard-blog-tag/${key}`, "_blank");
        }
    }

    const onSearchClick = (e: React.MouseEvent) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        if(e.button !== 1){

            searchHandler();

            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */

            props.setUnmountComponentValues(true, "search-result", null);

            // Fire up unmountComponent epic
        
            props.unmountComponent(null, null,  props.page, e.button);
        }
    }

    const searchHandler = () => {
        
        let info;

        /**
         * Check if the input form is valid, if it is valid 
         * then initialize input fields (state), if it is not valid
         * then show needed error messages
         */
    
        props.search();

        // Collect all the information you neet to post

        info = {
            id: uuid(),
            searchValue: `${props.searchInputForm.inputsArray.find(x => x.controlName === "search").value}`,
            page: props.page
        }

        console.log("Form", info)
        // Search the information
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
        // Fetch mock data (not required to run -> npm run server)

            fetchFakeData(FakeData.searchResultPage, info, props.searchResultPagePaginationActivePageId);
        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchSearchThroughWebsiteResutData(info, props.searchResultPagePaginationActivePageId);
        }
        
        // Clear input fields (visually) if the form is valid

        if(props.searchInputForm.formIsValid){
            clearInputValue("blogListStandardInputFormSearch");
        }

        // Clear input field (visually) if the entered value does not match to the rules of that field

        props.searchInputForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        });
    }

    const fetchFakeData = (fakeData, infoFromSearch, activePageId) => {
        let info = infoFromSearch;

        let searchResultPage = [...fakeData];

        let firstIndex = activePageId * 6 - 5;
        let lastIndex = activePageId * 6 - 1;
    
        let updatedSearchResult = {
            numberOfPages: !Number.isInteger(searchResultPage.length/6) ? Math.floor(searchResultPage.length/6) + 1 : Math.floor(searchResultPage.length/6),
            searchResultData: searchResultPage.slice(firstIndex - 1, lastIndex + 1)
        };

        let updatedJson = {
            searchInfo: info,
            searchResult: updatedSearchResult
        }      
        
        props.fetchSearchThroughWebsiteResutDataSuccess(updatedJson);
        props.initSearchResultPagePagination(updatedJson.searchResult.numberOfPages);
        console.log("initSearchResultPagePagination",updatedJson)
    }
    
    const inputChangeHandler = (e: React.MouseEvent, inputFieldId: number, inputForm: string) => {
        // Set input value and check validation

        props.setInputFiledValueAndCheckValidation(props.searchInputForm, e, inputFieldId, `${inputForm}`);
    }

    const clearInputValue = (fieldId: string) => {
        // Clear input value

        (document.getElementById(fieldId) as HTMLInputElement).value = '';
    }

    const renderSearchForm = () => {
        if(!Utility.isObjEmpty(props.searchInputForm)){
            return(
                <>{props.searchInputForm.inputsArray.map((el, i)=>{
                    return(
                        <div 
                            key={i} 
                            className="blog-info-board-search-wrapper"
                        >
                            <Input
                                className="blog-list-standard-search-input"
                                onChange={(event) => inputChangeHandler(event, el.id, 'searchInputForm')}
                                elementType={el.elementType}
                                rows={el.elementConfig.rows}
                                validField={el.validField}
                                touched={el.touched}
                                erroeMessages={el.errorMessage}
                                inputID={el.inputID}
                                placeholder={el.elementConfig.placeholder}
                                options={el.elementConfig.options}
                            />
                            <div
                                className="blog-info-board-search-button"
                                onMouseEnter={() => handleMouseEnter("searchIcon")}
                                onMouseLeave={() => handleMouseLeave("searchIcon")}
                                onMouseDown={el.value !== "" ? (e) => onSearchClick(e) : null}
                            >
                                <Icon 
                                    iconType="fontAwesome"
                                    // iconName={el.name} 
                                    icon="faSearch"
                                    iconSize="lg"
                                    classNameOpt="searchIcon"
                                    isHover={searchIsHover}
                                />
                            </div>
                        </div>
                    )
                })}
            </>
            )
        }
    }

    const renderClassName = (opt: string, isHovering: string | null, active: string) => {
        if(opt === "blogCategory"){
            if(active === "on"){
                return "blog-info-board-active-category";
            }else{
                return "h17-black-lustria-cursor-animation";
            }
        }
    }

    const renderCategoriesList = () => {
        return(
            <>
                {props.categoryList.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            onMouseDown={(e) => onClickCategory(el.key, e)}
                        >
                            <H17 className={renderClassName("blogCategory", el.isHover, el.active)}>{el.categoryName}</H17>
                            {i !== categoriesListForBlog.length - 1 ? <EH10/> : null}
                        </div>
                    )
                })}
            </>
        )
    }

    const renderTagsList = () => {
        return(
            <>
                {props.tagsList.map((el, i) => {
                    return(
                        <div
                            key={i}
                            className="blog-info-board-tag"
                            onMouseDown={(e) => onClickTag(el.key, null, e)}
                        >
                            <TagItem
                               tagName={el.tagName}
                               active={el.active}
                            />
                        </div>
                    )
                })}
            </>
        )
    }

    const renderRecentPostsDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="blog-info-board-loading-error" 
                    // style={{height: `100%`}}
                >
                    <LoadingVersion2         
                        color="black"
                        width={14}
                        height={14}
                    />
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    <BlogRecentPosts
                        recentPostsArray={data.items}
                        clearState={props.clearState}
                        clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                        activateBlogItem={props.activateBlogItem}
                        activateBlogCategory={props.activateBlogCategory}
                        activateBlogTag={props.activateBlogTag}
                        activateRecentPost={props.activateRecentPost}
                    />
                </>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="blog-info-board-loading-error" 
                    // style={{height: `100%`}}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    }

    const renderSocialMedia = () => {
        return(
            <div className="blog-info-board-icons">
                {socialMediaIcons.map((el, i) => {
                    return(
                        <React.Fragment key={i}>
                            <Icon 
                                key={i}
                                iconType="fontAwesomeWithAnimatedBackground"
                                iconName={el.name} 
                                icon={el.iconKey} 
                                iconSize="1x"
                                onMouseEnter
                                onMouseLeave
                                onMouseDown
                                classNameOpt="socMedIconForBlog"
                                classNameBackground="background-for-blog-list-standard-page-icon"
                            />
                        </React.Fragment>
                    )
                })}
            </div>
        )
    } 

    /**
     * Markup
     */

    return(
        <div className="blog-info-board">
            <div>
                {renderSearchForm()}
            </div>
            <EH40/>
            <div className="blog-info-board-person-info-wrapper">
                <div className="blog-info-board-person-image">
                    <img src={Images.PHOTO_19}/>
                </div>
                <EH20/>
                <H17 className="h17-black-lustria">Naomi Hernandez</H17>
                <EH10/>
                <H13 className="h13-nobel-lustria">Associate Director, SEO</H13>
            </div>
            <EH40/>
            <div className="blog-info-board-recent-post-wrapper">
                <H22 className="h22-black-poppins">Recent posts</H22>
                <EH20/>
                {renderRecentPostsDataContent(props.recentPostsList)}
            </div>
            <EH40/>
            <div className="blog-info-board-categories-wrapper">
                <H22 className="h22-black-poppins">Categories</H22>
                <EH20/>
                {renderCategoriesList()}
            </div>
            <EH40/>
            <div className="blog-info-board-follow-us-wrapper">
                <H22 className="h22-black-poppins">Follow us</H22>
                <EH20/>
                {renderSocialMedia()}
            </div>
            <EH40/>
            <div className="blog-info-board-tags-wrapper">
                <H22 className="h22-black-poppins">Tags</H22>
                <EH20/>
                {renderTagsList()}
            </div>
        </div>
    );
}

export default withRouter(BlogInfoBoard);
 