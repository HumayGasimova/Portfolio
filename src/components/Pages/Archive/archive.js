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

import './archive.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import LoadingVersion2 from '../../SmallParts/LoadingVersion2/loadingVersion2';
import Toolbar from '../../Parts/Toolbar/toolbar';
import Button from '../../../library/Button/button';
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
    H19,
    H22,
    H35,
    H45,
    EH10,
    EH30,
    EH70
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Images
 */
import * as Images from '../../../constants/images';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Archive component definition and export
 */

export const Archive = (props) => {

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

        // Fetch data for the component

        if(props.archive.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                let category = props.match.params.category;
                let categoryToArray = category.split("");
                let indexOfSlash = categoryToArray.findIndex(item => item === "-");
                if(indexOfSlash !== -1){
                    categoryToArray.splice(indexOfSlash, 1)
                    let lowerToUpperCase = categoryToArray[indexOfSlash].toUpperCase();
                    categoryToArray.splice(indexOfSlash, 1, lowerToUpperCase);
                    category = categoryToArray.join("");
                }
              
                let archiveObj = {...FakeData.archive.find(item => item.category === category)};
                let takeItems = 1 * 4;
                
                if(takeItems > archiveObj.archiveData.length){
                    archiveObj.disableLoadMoreButton = true;
                }else{
                    archiveObj.archiveData = archiveObj.archiveData.slice(0, takeItems)
                }
                
                props.fetchArchiveSuccess(archiveObj.archiveData);
                props.setArchiveCategory(archiveObj.category);
                props.loadMoreDisableButtonStateForArchive(archiveObj.disableLoadMoreButton);

            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchArchive(props.match.params.category, 1);
            }
        }

        // Return to the part of the screen where the link to the selected item is located

        let timeout = setTimeout(() => {
            if(!props.archive.loading && !props.archive.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("archive");

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

    const loadImg = (key) => {
        switch(key) {
            case 'graphicDesignCover1':
            case 'designCover1':
                return Images.ARCHIVE_COVER_PIC_1;
            case 'graphicDesignCover2':
                return Images.ARCHIVE_COVER_PIC_2;
            case 'graphicDesignCover3':
            case 'architectureCover3':
            case 'editorialCover4':
                return Images.ARCHIVE_COVER_PIC_3;
            case 'graphicDesignCover4':
            case 'architectureCover5':
            case 'editorialCover6':
                return Images.ARCHIVE_COVER_PIC_4;
            case 'graphicDesignCover5':
            case 'editorialCover3':
            case 'designCover3':
                return Images.ARCHIVE_COVER_PIC_5;
            case 'graphicDesignCover6':
            case 'artDirectionCover4':
                return Images.ARCHIVE_COVER_PIC_6;
            case 'graphicDesignCover7':
            case 'designCover2':
            case 'musicCover3':
                return Images.ARCHIVE_COVER_PIC_7;
            case 'artDirectionCover1':
            case 'lifestyleCover3':
                return Images.ARCHIVE_COVER_PIC_8;
            case 'artDirectionCover2':
            case 'designCover6':
                return Images.ARCHIVE_COVER_PIC_9;
            case 'artDirectionCover3':
            case 'musicCover1':
            case 'architectureCover1':
                return Images.ARCHIVE_COVER_PIC_10;
            case 'designCover4':
            case 'lifestyleCover4':
                return Images.ARCHIVE_COVER_PIC_11;
            case 'designCover5':
            case 'editorialCover5':
                return Images.ARCHIVE_COVER_PIC_12;
            case 'musicCover2':
            case 'lifestyleCover2':
            case 'editorialCover2':
                return Images.ARCHIVE_COVER_PIC_13;
            case 'musicCover4':
                return Images.ARCHIVE_COVER_PIC_14;
            case 'architectureCover2':
            case 'editorialCover1':
                return Images.ARCHIVE_COVER_PIC_15;
            case 'architectureCover4':
                return Images.ARCHIVE_COVER_PIC_16;
            case 'lifestyleCover1':
                return Images.ARCHIVE_COVER_PIC_17;
            case 'lifestyleCover5':
                return Images.ARCHIVE_COVER_PIC_18;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("on", id);
                break;
            case 'archiveCategory': 
                props.setArchiveIsHoveringCategory("on", pathOfIds);
                break;   
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'image': 
                props.setArchiveIsHoveringImage("off", id);
                break;
            case 'archiveCategory': 
                props.setArchiveIsHoveringCategory("off", pathOfIds);
                break;     
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "archive-image-curtain";
                case 'on':
                    return "archive-image-curtain-hover-on";
                case 'off':
                    return "archive-image-curtain-hover-off"
            }
        }
        if(opt === "archiveCategory"){
            switch(isHovering){
                case 'init':
                    return "h22-nero-lustria-cursor";
                case 'on':
                    return "h22-nero-lustria-nobel-hover-on";
                case 'off':
                    return "h22-nero-lustria-nobel-hover-off"
            }
        }
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="archive"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="archive"
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
                        page="archive"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="archive"
                    />
                </>
            )
        }
    }

    const onClickHandler = (opt, path, key, e) => {
        // Do nothing on right mouse click 

        if(e.button === 2) return;

        // Storing data in local storage 

        localStorage.setItem("archiveCategoryHG", opt === "goToArchive" ? key : props.archive.category);
        localStorage.setItem("pageHG", "archive");
        
        // Clear archive data 

        if(opt === 'goToArchive' && props.archive.category !== key && e.button !== 1){
            props.clearArchiveData();
        }

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */ 

            props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click 
            
            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        props.unmountComponent(key, path, "archive", e.button);
    }
   
    const loadMoreDataOnClick = (categoryFromParam, step) => {
        if(process.env.ENVIRONMENT === Environment.PRODUCTION){
            // Fetch mock data (not required to run -> npm run server)

            let category = categoryFromParam;
            let categoryToArray = category.split("");
            let indexOfSlash = categoryToArray.findIndex(item => item === "-");
            if(indexOfSlash !== -1){
                categoryToArray.splice(indexOfSlash, 1)
                let lowerToUpperCase = categoryToArray[indexOfSlash].toUpperCase();
                categoryToArray.splice(indexOfSlash, 1, lowerToUpperCase);
                category = categoryToArray.join("");
            }

            let archiveObj = {...FakeData.archive.find(item => item.category === category)};
            let takeItems = step * 4;

            if(takeItems > archiveObj.archiveData.length){
                archiveObj.disableLoadMoreButton = true;
            }else{
                archiveObj.archiveData = archiveObj.archiveData.slice(0, takeItems)
            }
            
            props.loadMoreArchiveDataSuccess(archiveObj.archiveData);
            props.loadMoreDisableButtonStateForArchive(archiveObj.disableLoadMoreButton);

        }else{
            // Fetch data (required to run -> npm run server)

            props.fetchArchive(categoryFromParam, 2)
        }
    }

    const renderCategories = (obj) => {
        return(
            <div className="archive-item-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="archive-item-category"
                        onMouseDown={(e) => onClickHandler("goToArchive", el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`archiveCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`archiveCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="archive-item-category-slash">/</div> : null}
                        <H22 className={renderClassName("archiveCategory", el.isHover)}>{el.label}</H22>
                    </div>
                )
            })}</div>
        )
    }

    const renderArchiveData = () => {
        return(
            <div className="archive-date-items">{props.archive.items.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="archive-date-item"
                        id={el.key}
                    >
                        <div 
                            className="archive-image"
                            onMouseDown={(e) => onClickHandler("goToPortfolioItem", el.path, null, e)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.coverImage.key)}/>
                            <div className={renderClassName(`image`, el.coverImage.isHover)}/>
                        </div>
                        <EH30/>
                        <H35 className="h35-nero-poppins">{el.header}</H35>
                        <EH10/>
                        {renderCategories(el)}
                        <EH70/>
                    </div>
                )
            })}
            {renderLoadMoreButton()}
            </div>
        )
    }

    const renderLoadMoreButton = () => {
        if(props.archive.loadingMoreData && !props.archive.errorMoreData){
            return(
                <div 
                    className="archive-button-load-more-loading-error"
                >
                    <LoadingVersion2 
                        color="rgb(37, 37, 37)"
                        width={18}
                        height={18}
                    />
                </div>
            )
        }
        if(!props.archive.loadingMoreData && !props.archive.errorMoreData){
            return(
                <div className="archive-button-load-more">
                    <Button
                        className="archive-load-more"
                        text="load more."
                        onClick={() => loadMoreDataOnClick(props.match.params.category, 2)}
                        disabled={props.archive.disableLoadMoreButton}
                    />
                </div> 
            )
        }
        if(!props.archive.loadingMoreData && props.archive.errorMoreData){
            return(
                <div 
                    className="archive-button-load-more-loading-error" 
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    } 

    const renderArchiveContent = () => {
        if(props.archive.loading && !props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.archive.loading && !props.archive.error){
            return(
                <div className="archive-wrapper">
                    <div className="archive-header">
                        <H45 className="h45-nero-lustria">Archive</H45>
                    </div>
                    <div className="grey-line"/>
                    {renderArchiveData()}
                </div>
            )
        }
        if(!props.archive.loading && props.archive.error){
            return(
                <div 
                    className="archive-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.archive.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="archive" id="archive">
            {renderToolbars()}
            {renderArchiveContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archive: Selectors.getArchiveState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchArchive: bindActionCreators(Services.fetchArchive, dispatch),
            fetchArchiveSuccess: bindActionCreators(Actions.fetchArchiveSuccess, dispatch),
            loadMoreDisableButtonStateForArchive: bindActionCreators(Actions.loadMoreDisableButtonStateForArchive, dispatch),
            loadMoreArchiveDataSuccess: bindActionCreators(Actions.loadMoreArchiveDataSuccess, dispatch),
            loadMoreDisableButtonStateForArchive: bindActionCreators(Actions.loadMoreDisableButtonStateForArchive, dispatch),
            setArchiveCategory: bindActionCreators(Actions.setArchiveCategory, dispatch),
            setArchiveIsHoveringImage: bindActionCreators(Actions.setArchiveIsHoveringImage, dispatch),
            setArchiveIsHoveringCategory: bindActionCreators(Actions.setArchiveIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(Archive);
 