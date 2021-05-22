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

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './sidebar.scss';

/**
 * Components
 */

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Sidebar component definition and export
 */

export const Sidebar = (props) => {

    /**
     * State
     */

    const [showOptions, setShowOptions] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const handleMouseEnterSidebarItem = (data, id) => {
        props.setIsHoveringMenuItem("on", id);
        setShowOptions(true);
    }

    const handleMouseLeaveSidebarItem = (data) => {
        props.setIsHoveringMenuItem("off");
        setShowOptions(false);
    }

    const itemOnClick = (opt, path, pathOfIds, e, idOfFirstObj, itemId) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        if(e.button !== 1){
            // Menu option or suboption on left mouse click
          
            let currentItemId;
            
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
                            props.setSidebarState("init");
                    
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
                        props.setSidebarState("init");
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

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {props.menuItems.map((el, i) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            data={el}
                            onMouseEnter={() => handleMouseEnterSidebarItem(el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveSidebarItem(el)}
                            showOptions={showOptions}
                            onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                            onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                            itemOnClick={(opt, path, pathOfIds, e, idOfFirstObj, itemId) => itemOnClick(opt, path, pathOfIds, e, idOfFirstObj, itemId)}
                        />
                    )
            })}</div>
        )
    }
    
    const renderClassName = (state) => {
       switch(state){
            case 'init':
                return "sidebar";
            case 'open':
                return "sidebar-open";  
            case 'close':
                return "sidebar-close";
       }
    }
    
    /**
     * Markup
     */

    return(
        <div className={renderClassName(props.sidebarState)}>
            <div 
                className="sidebar-logo"
                onMouseDown={(e) => props.logoOnClick(e)}
            >
                crypto.
            </div>
            {renderSidebarItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state),
            blogListStandardPage: Selectors.getBlogListStandardPageState(state)
        };
    },
    (dispatch) => {
        return {
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch),
            setIsHoveringToolbarOptionItem: bindActionCreators(Actions.setIsHoveringToolbarOptionItem, dispatch),
            setIsHoveringToolbarSubOptionItem: bindActionCreators(Actions.setIsHoveringToolbarSubOptionItem, dispatch),
            setActivityOfToolbarOptionItem: bindActionCreators(Actions.setActivityOfToolbarOptionItem, dispatch),
            setActivityOfToolbarSubOptionItem: bindActionCreators(Actions.setActivityOfToolbarSubOptionItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            setSidebarState: bindActionCreators(Actions.setSidebarState, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch),
            activateListStandardBlogItem: bindActionCreators(Actions.activateListStandardBlogItem, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
        };
    }
)(withRouter(Sidebar));
 