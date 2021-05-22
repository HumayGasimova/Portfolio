/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
 * Styles
 */

import './toolbar.scss';

/**
 * Components
 */

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';
import Sidebar from '../Sidebar/sidebar';
import Backdrop from '../../../library/Backdrop/backdrop';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H19,
    EH10,
    EH20
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

import {
    menuItemsArray
} from '../../../constants/menuItems';

/**
 * Toolbar component definition and export
 */

export const Toolbar = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [menuDots, setMenuDots] = useState([1,2,3,4,5,6,7,8,9]);
    const [isHovering, setIsHovering] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [toolbarItemData, setToolbarItemData] = useState({});
    const [showOptionsLessThan3Regular, setShowOptionsLessThan3Regular] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Initialize menu items

        props.initMenuItems(menuItemsArray);

        // Hide sidebar component

        if(size.width > 1120){
            props.setSidebarState("init");
        }
    }, []);

    const handleMouseEnterMenuIcon = () => {
        setIsHovering(true);
    }

    const handleMouseLeaveMenuIcon = () => {
        setIsHovering(false);
    }

    const handleMouseEnterToolbarItem = (opt, data, id) => {
        props.setIsHoveringMenuItem("on", id);
        switch(opt){
            case 'regular':
                /**
                 * For the regular version of toolbar, display the menu
                 * item options box depending on the number of elements
                 * in the menu item options array and remember the
                 * necessary data
                 */

                if(data.options.length > 2){
                    setShowOptions(true);
                    setToolbarItemData(data);
                }else{
                    setShowOptionsLessThan3Regular(true);
                }
                return;
        }
    }

    const handleMouseLeaveToolbarItem = (opt, data) => {
        props.setIsHoveringMenuItem("off");
        switch(opt){
            case 'regular':
                if(data.options.length > 2){
                    setShowOptions(false);
                    setToolbarItemData({});
                }else{
                    setShowOptionsLessThan3Regular(false);
                }
                return;
        }
    }

    const itemOnClick = (opt, path, pathOfIds, e, idOfFirstObj, itemId) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        if(e.button !== 1){
            // Menu option or suboption on left mouse click

            /**
             * Check if the menu option or suboption is active. If it is active,
             * do nothing, and if it is inactive, initialize and clean some
             * properties, activate the menu option or suboption, add fading
             * effect on the unmounted component and remember information of 
             * unmounted component
             */

            switch(opt){
                case 'optionItem':
                    currentItemId = props.menuItems
                        .find(item => item.active === true)?.options
                        .find(item => item.active === true).array
                        .find(item => item.active === true).id;
                       
                        if(currentItemId === pathOfIds[1]){
                            return;
                        }else{
                            console.log("itemId",itemId);
                            if(itemId === "blogListStandard" && props.blogListStandardPage.activeCategory.activated === "active"){
                                props.activateListStandardBlogCategory("deactive", "");
                                props.setUnmountComponentValues(false, path);
                            }
                            else if(itemId === "blogListStandard" && props.blogListStandardPage.activeItem.activated === "active"){
                                props.activateListStandardBlogItem("deactive", "", "");
                                props.setUnmountComponentValues(false, path);
                            }
                            else if(itemId === "blogListStandard" && props.blogListStandardPage.activeTag.activated === "active"){
                                props.activateListStandardBlogTag("deactive", "", "");
                                props.setUnmountComponentValues(false, path);
                            }
                            else{
                                props.setUnmountComponentValues(true, path);
                            }
                            props.setHistoryPopFromPortfolioItem("scrollToTop");
                            props.clearActivityOfMenuItems();
                            props.setActivityOfToolbarOptionItem(pathOfIds);
                        }
                    break;
                case 'subOptionItem': 
                    let currentItemId;
                    let updatedPathOfIds = [...pathOfIds];

                    updatedPathOfIds.unshift(idOfFirstObj);

                    let menuItemIsActive = props.menuItems.filter(item => item.active === true);

                    if(menuItemIsActive.length !== 0){
                        let suboptions = props.menuItems
                            .find(item => item.active === true)?.options
                            .find(item => item.active === true).array
                            .find(item => item.active === true).subOptions;

                        if(suboptions.length !== 0) currentItemId = suboptions.find(item => item.active === true).id;
                    }              
                  
                    if(currentItemId === updatedPathOfIds[3]){
                        return;
                    }else{
                        props.setUnmountComponentValues(true, path);
                        props.setHistoryPopFromPortfolioItem("scrollToTop");
                        props.clearActivityOfMenuItems();
                        props.setActivityOfToolbarSubOptionItem(pathOfIds);
                    }
                    break;
            }
        }else{
            // Remember information of unmounted component on scroll wheel click

            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        props.unmountComponent(null, null, null, e.button);
    }

    const menuOnClick = () => {
        //Sidebar menu on click handler

        switch(props.sidebarState){
            case 'open':
                return props.setSidebarState("close");
            case 'close':
                return props.setSidebarState("open");
        }
        props.setSidebarState("open");
    }

    const menuDotsOnClick = (page) => {
        // in progress...
        switch(page){
            case 'home':
            case 'bigImages':
            case 'bigSlider':
            case 'gallery':
            case 'smallGallery':
            case 'smallImages':
            case 'smallSlider':
            case 'archive':
            case 'galleryPage':
            case 'galleryWithSpacePage':
            case 'overlayPage':
            case 'overlayWithInfoPage':
            case 'simpleOverlayPage':
            case 'slideFromImageLeftPage':
            case 'standardPage':
            case 'stoneWallPage':
            case 'stoneWallWidePage':
            case 'switchImagePage':
            case 'metroPage':
            case 'twoColumnsWidePage':
            case 'threeColumnsWidePage':
            case 'fourColumnsWidePage':
            case 'fiveColumnsWidePage':
            case 'twoColumnsPage':
            case 'threeColumnsPage':
            case 'fourColumnsPage':
            case 'accordionsPage':
            case 'tabsPage':
            case 'callToActionPage':
            case 'testimonialsPage':
            case 'teamPage':
            case 'contactFormPage':
            case 'iconWithTextPage':
            case 'bannerPage':
            case 'buttonsPage':
            case 'pricingTablesPage':
            case 'pieChartsPage':
            case 'countersPage':
            case 'countdownPage':
            case 'clientsPage':
            case 'progressBarPage':
            case 'googleMapsPage':
            case 'listsPage':
            case 'highlightsPage':
            case 'dropcapsPage':
            case 'columnsPage':
            case 'blockquotePage':
            case 'textMarqueePage':
            case 'scrollSliderPage':
            case 'portfolioProjectShowcasePage':
            case 'searchResultPage':
                // props.setMenuDotsState("on", page)
                // return;
            case 'portfolioGallery':
            case 'switchImage':
                props.setMenuDotsState("on", page)
                return;
        }
    }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-hide";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "text"){
            if(active){
                return "toolbar-option-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "toolbar-option-item-text";
                case 'on':
                    return "toolbar-option-item-text-hover-on";
                case 'off':
                    return "toolbar-option-item-text-hover-off";
            } 
        }
        if(opt === "menuSmallScreenButton"){
            switch(isHovering){
                case 'init':
                    return "toolbar-menu";
                case 'open':
                    return "toolbar-menu-open";
                case 'close':
                    return "toolbar-menu-close";
            }
        }
    }

    const renderMenuDots = () => {
        return(
            <>{menuDots.map((el,i) => {
                if(el === 1 || el === 2 || el === 4){
                    return(
                        <div key={i}>
                            <CSSTransition
                                in={isHovering} 
                                timeout={7000}
                                // mountOnEnter
                                // unmountOnExit
                                classNames={{
                                    enter: '',
                                    enterActive: `toolbar-menu-dot-with-animation-open-${el}`,
                                    exit: '',
                                    exitActive: `toolbar-menu-dot-with-animation-close-${el}`
                                }}
                            > 
                                <div className="toolbar-menu-dot"/>
                            </CSSTransition>
                        </div>
                    )
                }else{
                    return(
                        <div 
                            key={i}
                            className="toolbar-menu-dot"
                        />
                    )
                }
            })}</>
        )
    }

    const logoOnClick = (e) => {      
        switch(e.button){
            case 0:
                // Relode the page on left mouse click
                props.history.push(`/crypto-portfolio`);
                window.location.reload();
                return;
            case 1:
                // Open the page in a new window on scroll wheel click
                window.open(`/crypto-portfolio`, "_blank");
                return;
            case 2:
                // Do nothing on right mouse click
                return;
        }
    }

    const renderToolbar = (option) => {
        // Different versions of the toolbar

        if(option === "regularScreen"){
            return(
                <>
                    <div className="toolbar-regular-screen">
                        <div 
                            className="toolbar-logo"
                            onMouseDown={(e) => logoOnClick(e)}
                        >
                            crypto.
                        </div>
                        <div className="toolbar-wrapper">
                            {renderToolbarItems()}
                            <div 
                                className="toolbar-menu"
                                onClick={() => menuDotsOnClick(props.page)}
                                onMouseEnter={handleMouseEnterMenuIcon} 
                                onMouseLeave={handleMouseLeaveMenuIcon}
                            >
                                {renderMenuDots()}
                            </div>
                        </div>
                    </div>
                    {showOptions ? 
                    <div 
                        className="toolbar-regular-screen-options"
                        onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                        onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                    >
                        <div  className="grey-line"/>
                        <EH20/>
                        <EH10/>
                        {renderToolbarOptions()}
                        <EH10/>
                        <EH20/>
                    </div> : null}
                </>
            )
        }
        if(option === "regularScreenWhite"){
            return(
                <>
                    <div className="toolbar-regular-screen-white">
                        <div 
                            className="toolbar-logo"
                            onMouseDown={(e) => logoOnClick(e)}
                        >
                            crypto.
                        </div>
                        <div className="toolbar-wrapper">
                            {renderToolbarItems()}
                            <div 
                                className="toolbar-menu"
                                onClick={() => menuDotsOnClick(props.page)}
                                onMouseEnter={handleMouseEnterMenuIcon} 
                                onMouseLeave={handleMouseLeaveMenuIcon}
                            >
                                {renderMenuDots()}
                            </div>
                        </div>
                    </div>
                    {showOptions ? 
                    <div 
                        className="toolbar-regular-screen-options"
                        onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                        onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                    >
                        <div  className="grey-line"/>
                        <EH20/>
                        <EH10/>
                        {renderToolbarOptions()}
                        <EH10/>
                        <EH20/>
                    </div> : null}
                </>
            )
        }
        if(option === "regularScreenAnimated"){
            return(
                <div className="wrapper">
                    <CSSTransition
                        in={props.scrollingUp} 
                        timeout={5000}
                        // mountOnEnter
                        // unmountOnExit
                        classNames={{
                            enter: ``,
                            enterActive: `toolbar-regular-screen-animated-open`,
                            exit: ``,
                            exitActive: `toolbar-regular-screen-animated-close`,
                        }}
                    >  
                        <div className={props.scrollingUp ? "toolbar-regular-screen-animated-mounted" : "toolbar-regular-screen-animated-unmounted"}>
                            <div 
                                className="toolbar-logo"
                                onMouseDown={(e) => logoOnClick(e)}
                            >
                                crypto.
                            </div>
                            <div className="toolbar-wrapper">
                                {renderToolbarItems()}
                                <div 
                                    className="toolbar-menu"
                                    onClick={() => menuDotsOnClick(props.page)}
                                    onMouseEnter={handleMouseEnterMenuIcon} 
                                    onMouseLeave={handleMouseLeaveMenuIcon}
                                >
                                    {renderMenuDots()}
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                    {showOptions ? 
                    <CSSTransition
                        in={props.scrollingUp} 
                        timeout={5000}
                        // mountOnEnter
                        // unmountOnExit
                        classNames={{
                            enter: ``,
                            enterActive: `toolbar-regular-screen-animated-options-open`,
                            exit: ``,
                            exitActive: `toolbar-regular-screen-animated-options-close`,
                        }}
                    >  
                        <div 
                            className="toolbar-regular-screen-animated-options"
                            onMouseEnter={() => handleMouseEnterToolbarItem('regular', toolbarItemData, toolbarItemData.id)} 
                            onMouseLeave={() => handleMouseLeaveToolbarItem('regular', toolbarItemData)}
                        >
                            <div  className="grey-line"/>
                            <EH20/>
                            <EH10/>
                            {renderToolbarOptions()}
                            <EH10/>
                            <EH20/>
                        </div>
                    </CSSTransition>  : null}
                </div>
            )
        }
        if(option === "smallScreen"){
            return(
                <>
                    <div className="toolbar-small-screen">
                        <div
                            className={renderClassName("menuSmallScreenButton", props.sidebarState)}
                            onClick={menuOnClick}
                        >
                            <div className="toolbar-menu-first-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                            <div className="toolbar-menu-second-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                            <div className="toolbar-menu-third-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                        </div>
                        <div 
                            className="toolbar-logo"
                            onMouseDown={(e) => logoOnClick(e)}
                        >
                            crypto.
                        </div>
                        <div/>
                    </div>
                </>
            )
        }
        if(option === "smallScreenAnimated"){
            return(
                <CSSTransition
                    in={props.scrollingUp} 
                    timeout={5000}
                    // mountOnEnter
                    // unmountOnExit
                    classNames={{
                        enter: ``,
                        enterActive: `toolbar-small-screen-animated-open`,
                        exit: ``,
                        exitActive: `toolbar-small-screen-animated-close`,
                    }}
                >  
                    <div className={props.scrollingUp ? "toolbar-small-screen-animated-mounted" : "toolbar-small-screen-animated-unmounted"}>
                        <div
                            className={renderClassName("menuSmallScreenButton", props.sidebarState)}
                            onClick={menuOnClick}
                        >
                            <div className="toolbar-menu-first-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                            <div className="toolbar-menu-second-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                            <div className="toolbar-menu-third-line">
                                <div className="toolbar-menu-left-half-line"/>
                                <div className="toolbar-menu-right-half-line"/>
                            </div>
                        </div>
                        <div 
                            className="toolbar-logo"
                            onMouseDown={(e) => logoOnClick(e)}
                        >
                            crypto.
                        </div>
                        <div/>
                    </div>
                </CSSTransition>
            )
        }
        if(option === "toolbarVersion2"){
            return(
                <>
                    <div className="toolbarVersion2-white">
                        <div 
                            className="toolbar-logo"
                            onMouseDown={(e) => logoOnClick(e)}
                        >
                            crypto.
                        </div>
                        <div className="toolbar-wrapper">
                            <div 
                                className="toolbar-menu"
                                onClick={() => menuDotsOnClick(props.page)}
                                onMouseEnter={handleMouseEnterMenuIcon} 
                                onMouseLeave={handleMouseLeaveMenuIcon}
                            >
                                {renderMenuDots()}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    const renderToolbarItems = () => {
        return(
            <div className="toolbar-items">{props.menuItems.map((el,i) => {
                return(
                    <ToolbarItem 
                        key={i}
                        toolbarMainColor={props.toolbarMainColor}
                        onMouseEnter={() => handleMouseEnterToolbarItem('regular', el, el.id)} 
                        onMouseLeave={() => handleMouseLeaveToolbarItem('regular', el)}
                        showOptionsRegular={showOptionsLessThan3Regular}
                        onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                        onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                        itemOnClick={(opt, path, pathOfIds, e, idOfFirstObj, itemId) => itemOnClick(opt, path, pathOfIds, e, idOfFirstObj, itemId)}
                        renderClassName={(opt, isHover) => handleMouseLeaveToolbarOptionItem(opt, isHover)}
                        data={el}
                    />
                )
            })}</div>
        )
    }

    const renderToolbarOptions = () => {
        return(
            <div className="toolbar-regular-screen-options-wrapper">{toolbarItemData.options.map((el, i) => {
                return(
                        <div 
                            key={i} 
                            className="toolbar-option"
                        >
                            <div className="toolbar-option-header-text">
                                <H19 className="h19-matterhorn-teko">{el.header}</H19>
                            </div>
                            {renderToolbarOptionItems(el)}
                        </div>
                )
            })}</div>
        )
    }

    const renderToolbarOptionItems = (obj) => {
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id]
                return(
                    <div 
                        key={i} 
                        className="toolbar-option-item"
                        onMouseDown={(e) => itemOnClick("optionItem", el.path, pathOfIds, e)}
                    >
                        {el.active ? 
                        <div className="arrow-wrapper-active">
                            <div className="arrow-horizontal-line"/>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        {!el.active ? 
                        <div className={renderClassName("arrow", el.isHover)}>
                            <div className="arrow-horizontal-line"/>
                            <div className="arrow-wrapper2">
                                <div className="arrow-top-line"></div>
                                <div className="arrow-bottom-line"></div>
                            </div>
                        </div> : null}
                        <div 
                            className={renderClassName("text", el.isHover, el.active)}
                            onMouseEnter={() => props.setIsHoveringToolbarOptionItem("on", pathOfIds)} 
                            onMouseLeave={() => props.setIsHoveringToolbarOptionItem("off", pathOfIds)}
                        >
                            <H15 className="h15-black-lustria">{el.text}</H15>
                        </div>
                    </div>
                )
            })}</>
        )
    }

    /**
     * Markup
     */

    return(
        <> 
            {renderToolbar(props.style)}
            {props.style !== "toolbarVersion2" ? 
            <Sidebar 
                sidebarState={props.sidebarState}
                logoOnClick={(e) => logoOnClick(e)}
            /> : null}
            <Backdrop
                show={props.sidebarState === "open"}
                onClick={() => props.setSidebarState("close")}
                className="backdrop-home"
            />
        </> 
    );
}

export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state),
            sidebarState: Selectors.getSidebarStateState(state),
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
            unmountComp: Selectors.getUnmountComponentState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuItems: bindActionCreators(Actions.initMenuItems, dispatch),
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch),
            setIsHoveringToolbarOptionItem: bindActionCreators(Actions.setIsHoveringToolbarOptionItem, dispatch),
            setIsHoveringToolbarSubOptionItem: bindActionCreators(Actions.setIsHoveringToolbarSubOptionItem, dispatch),
            setActivityOfToolbarOptionItem: bindActionCreators(Actions.setActivityOfToolbarOptionItem, dispatch),
            setActivityOfToolbarSubOptionItem: bindActionCreators(Actions.setActivityOfToolbarSubOptionItem, dispatch),
            setSidebarState: bindActionCreators(Actions.setSidebarState, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
        };
    }
)(withRouter(Toolbar));
 