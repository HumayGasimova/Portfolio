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

/**
 * Styles
 */

import './searchResultPage.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Toolbar from '../../Parts/Toolbar/toolbar';
import Input from '../../../library/Input/input';
import Icon from '../../SmallParts/Icon/icon';
import SearchItem from '../../SmallParts/SearchItem/searchItem';
import Pagination from '../../Parts/Pagination/pagination';
import Footer from '../../Parts/Footer/footer';
import BackToTop from '../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../actions';

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
    H15,
    H45,
    H65,
    EH10,
    EH50
} from '../../UtilityComponents';

import * as Utility from '../../../utility';

import uuid from "uuid";

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

import {
    searchThroughWebsiteSearchInputForm
} from '../../../constants/inputForm';

/**
 * SearchResultPage component definition and export
 */

export const SearchResultPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [searchIsHover, setSearchIsHover] = useState("init");
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Init imput forms

        props.initSearchInputFormThroughWebsite(searchThroughWebsiteSearchInputForm);

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Show Component data if the search value exists

        setComponentData();

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.searchResultPage.searchInputFormResponse.loading]);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("searchResultPage");

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
                        page="searchResultPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="searchResultPage"
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
                        page="searchResultPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="searchResultPage"
                    />
                </>
            )
        }
    }

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("on")
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'searchIcon':
                setSearchIsHover("off")
                break;
        }
    }

    const setComponentData = () => {
        if(!Utility.isObjEmpty(props.searchResultPage.searchInputFormResponse.item)){
            setShowComponent(true);
        }else{
            setShowComponent(false);
        }
    }

    const onSearchClick = (e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        if(e.button !== 1){

            searchHandler();
            
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */

            // props.setUnmountComponentValues(true, "search-result");

            // Fire up unmountComponent epic
        
            // props.unmountComponent(null, null,  props.page, e.button);
        }
    }

    const searchHandler = () => {
        
        let info;

        /**
         * Check if the input form is valid, if it is valid 
         * then initialize input fields (state), if it is not valid
         * then show needed error messages
         */
    
        props.searchThroughWebsite();

        // Collect all the information you neet to post

        info = {
            id: uuid(),
            searchValue: `${props.searchResultPage.searchInputForm.inputsArray.find(x => x.controlName === "search").value}`,
            page: "blogListStandardPage" //by default
        }

        console.log("Form", info)
        // Search the information
        
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
        // Fetch mock data (not required to run -> npm run server)

            // postReplyFakeData(props.fakeData, props.cardIdFromPathname, info);
        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchSearchThroughWebsiteResutData(info, props.searchResultPage.activePageId);
        }
        
        // Clear input fields (visually) if the form is valid

        if(props.searchResultPage.searchInputForm.formIsValid){
            clearInputValue("searchThroughWebsiteInputFormSearch");
        }

        // Clear input field (visually) if the entered value does not match to the rules of that field

        props.searchResultPage.searchInputForm.inputsArray.map(el => {
            if(!el.validField){
                clearInputValue(el.inputID);
            }
        });
    }

    const inputChangeHandler = (e, inputFieldId, inputForm) => {
        // Set input value and check validation

        props.setInputFiledValueAndCheckValidationThroughWebsite(props.searchResultPage.searchInputForm, e, inputFieldId, `${inputForm}`);
    }

    const clearInputValue = (fieldId) => {
        // Clear input value

        document.getElementById(fieldId).value = '';
    }

    const renderSearchForm = (searchInputForm) => {
        if(searchInputForm.inputsArray){
            return(
                <>{searchInputForm.inputsArray.map((el, i)=>{
                    return(
                        <div 
                            key={i} 
                            className="search-result-page-search-wrapper"
                        >
                            <Input
                                className="search-result-page-search-input"
                                onChange={(event) => inputChangeHandler(event, el.id, 'searchInputForm')}
                                elementType={el.elementType}
                                rows={el.elementConfig.rows}
                                validField={el.validField}
                                touched={el.touched}
                                erroeMessages={el.errorMessage}
                                inputID={el.inputID}
                                textareaID={el.textareaID}
                                placeholder={el.elementConfig.placeholder}
                                options={el.elementConfig.options}
                            />
                            <div
                                className="search-result-page-search-button"
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

    const setPageData = (page, opt) => {
        switch(opt){
            case 'clearState':
                switch(page){
                    case 'blogListStandardPage':
                        return props.clearBlogListSingleItemStateForBlogListStandardPage;
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
        }
    }

    const renderResult = (arr) => {
        return(
            <div className="search-result-page-result-wrapper">{arr.map((el, i) => {
                return(
                    <div 
                        key={i}
                        // className="search-result-page-item"
                    >
                        <SearchItem
                            elData={el}
                            clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                            clearState={setPageData(props.searchResultPage.searchInputFormResponse.item.searchInfo.page, "clearState")}
                            activateBlogItem={setPageData(props.searchResultPage.searchInputFormResponse.item.searchInfo.page, "activateBlogItem")}
                            activateBlogCategory={setPageData(props.searchResultPage.searchInputFormResponse.item.searchInfo.page, "activateBlogCategory")}
                            activateBlogTag={setPageData(props.searchResultPage.searchInputFormResponse.item.searchInfo.page, "activateBlogTag")}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderSearchResultDataContent = (data) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="search-result-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    {renderResult(data.item.searchResult.searchResultData)}
                    <Pagination
                        page="searchResultPage"
                        infoFromSearch={props.searchResultPage.searchInputFormResponse.item.searchInfo}
                        activePageNumber={props.searchResultPage.activePageId}
                        pagesArray={props.searchResultPage.pagesArray}
                        fetchPageData={props.fetchSearchThroughWebsiteResutData}
                        // fakeData={FakeData.blogListStandardPage}
                        // fetchFakeData={(fakeData, activePageId) => fetchFakeData(fakeData, activePageId)}
                        activatePageNumber={props.activatePageNumberForSearchResultPage}
                    />
                </>
            )
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="search-result-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
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
        <div className="search-result-page" id="searchResultPage">
            {renderToolbars()}
            <div className="search-result-page-wrapper">
                <div className="search-result-page-header">
                    <H45 className="h45-nero-lustria">Search results for: {showComponent ? props.searchResultPage.searchInputFormResponse.item?.searchInfo.searchValue : ""}</H45>
                </div>
                <div className="grey-line"/>
                <div className="search-result-page-data">
                    <H65 className="h65-black-poppins">New search:</H65>
                    {renderSearchForm(props.searchResultPage.searchInputForm)}
                    <EH10/>
                    <H15 className="h13-nobel-lustria-animated">If you are not happy with the results below please do another search</H15>
                    <EH50/>
                    {showComponent ? renderSearchResultDataContent(props.searchResultPage.searchInputFormResponse) : null}
                </div>
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            searchResultPage: Selectors.getSearchResultPageState(state),
        };
    },
    (dispatch) => {
        return {
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            initSearchInputFormThroughWebsite: bindActionCreators(Actions.initSearchInputFormThroughWebsite, dispatch),
            fetchSearchThroughWebsiteResutData: bindActionCreators(Services.fetchSearchThroughWebsiteResutData, dispatch),
            setInputFiledValueAndCheckValidationThroughWebsite: bindActionCreators(Actions.setInputFiledValueAndCheckValidationThroughWebsite, dispatch),
            searchThroughWebsite: bindActionCreators(Actions.searchThroughWebsite, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            clearBlogListSingleItemStateForBlogListStandardPage: bindActionCreators(Actions.clearBlogListSingleItemStateForBlogListStandardPage, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
            activatePageNumberForSearchResultPage: bindActionCreators(Actions.activatePageNumberForSearchResultPage, dispatch),
        };
    }
)(SearchResultPage);
 