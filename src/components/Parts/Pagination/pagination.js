/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './pagination.scss';

/**
 * Utility
 */

import {
    H15
} from '../../UtilityComponents';

/**
 * Constants
 */

import * as Environment from '../../../constants/environments';

/**
 * Pagination component definition and export
 */

export const Pagination = (props) => {

    /**
     * State
     */

    const [leftArrowIsHovering, setLeftArrowIsHovering] = useState("init");
    const [rightArrowIsHovering, setRightArrowIsHovering] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
      

        return () =>  {
            // Cleaning the unmounted component


        }
    }, []);

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'leftArrowPaginatio':
                setLeftArrowIsHovering("on");
                break;
            case 'rightArrowPaginatio':
                setRightArrowIsHovering("on");
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'leftArrowPaginatio':
                setLeftArrowIsHovering("off");
                break;
            case 'rightArrowPaginatio':
                setRightArrowIsHovering("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(['page'].includes(opt)){
            if(active) {
                return "h15-black-poppins-cursor";
            }else {
                return "h15-nobel-poppins-cursor";
            }
        }
        if(opt === "leftArrowPaginatio"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "rightArrowPaginatio"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
    }

    const onPageClickHandler = (e, opt, pageID) => {
        // Do nothing on right mouse click
        
        if(e.button === 2) return;

        // Storing data in local storage 

        // localStorage.setItem("archiveCategoryHG", key);
        // localStorage.setItem("pageHG", props.page);

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */
            let _pageId;
            switch(opt){
                case 'pageNumber':
                    _pageId = pageID;
                    break;
                case 'leftArrow':
                    _pageId = pageID - 1;
                    break;
                case 'rightArrow':
                    _pageId = pageID + 1;
                    break;
            }
     
            // Fetch data for the component

            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchFakeData(props.fakeData, _pageId, props.page, props.filterParam);
            
            }else{
                // Fetch data (required to run -> npm run server)
                if(props.page === "searchResultPage"){
                    props.fetchPageData(props.infoFromSearch, _pageId);
                }else{
                    props.fetchPageData(_pageId, props.page, props.filterParam);
                }
            }

            props.activatePageNumber(_pageId);
            
            window.scrollTo(0, 0);
            // props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click
        
            // props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        // props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderPages = () => {
        return(
            <div className="pages-wrapper">
                {props.pagesArray.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className="page"
                            onMouseDown={(e) => onPageClickHandler(e, "pageNumber", el.id)}
                        >
                            <H15 className={renderClassName("page", null, el.active)}>{el.id}</H15>
                        </div>
                    )
                })}
            </div>
        )
    }
    
    /**
     * Markup
     */

    return(
        <div className="pagination">
            {props.activePageNumber !== 1 ? 
              <div 
                className={renderClassName("leftArrowPaginatio", leftArrowIsHovering)}
                onMouseEnter={() => handleMouseEnter("leftArrowPaginatio")} 
                onMouseLeave={() => handleMouseLeave("leftArrowPaginatio")}
                style={{transform: "rotate(180deg)"}}
                onMouseDown={(e) => onPageClickHandler(e, "leftArrow", props.activePageNumber)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div> : null}          
            {renderPages()}
            {props.activePageNumber !== props.pagesArray.length ? 
                <div 
                    className={renderClassName("rightArrowPaginatio", rightArrowIsHovering)}
                    onMouseEnter={() => handleMouseEnter("rightArrowPaginatio")} 
                    onMouseLeave={() => handleMouseLeave("rightArrowPaginatio")}
                    onMouseDown={(e) => onPageClickHandler(e, "rightArrow", props.activePageNumber)}
                >
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div> : null}
        </div>
    );
}

export default Pagination;
 