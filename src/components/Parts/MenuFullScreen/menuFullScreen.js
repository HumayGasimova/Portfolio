/**
 * Libraries
 */

import React, {
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

import './menuFullScreen.scss';

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
    H70,
    EH10
} from '../../UtilityComponents';

/**
 * Constants
 */

import {
    menuFullscreenItemsArray
} from '../../../constants/menuFullscreenItems';

/**
 * MenuFullScreen component definition and export
 */

export const MenuFullScreen = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Init menu items

        props.initMenuFullscreenItems(menuFullscreenItemsArray);
    }, []);
    
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
                return "menu-fullscreen-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "menu-fullscreen-item-text";
                case 'on':
                    return "menu-fullscreen-item-text-hover-on";
                case 'off':
                    return "menu-fullscreen-item-text-hover-off";
            }
        }
        if(opt === "optionItem"){
            switch(isHovering){
                case 'init':
                    return "h15-white-poppins-animated";
                case 'on':
                    return "h15-white-poppins-nobel-hover-on";
                case 'off':
                    return "h15-white-poppins-nobel-hover-off";
            }
        }
    }

    const menuFullscreenSubOptionOnClick = (e, path) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage 

        localStorage.setItem("pageHG", props.page);

        // Close menu

        props.setMenuDotsState("off", props.page);

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

        props.unmountComponent(null, null, props.page, e.button);
    }


    const menuFullScreenItemOnClick = (e, id, hasOptions, path) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        if(!hasOptions){
            // Storing data in local storage

            localStorage.setItem("pageHG", props.page);

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

            props.unmountComponent(null, null, props.page, e.button);
        }else{
            if(e.button !== 1){
                // Highlight the selected option

                props.setActivityOfMenuFullscreenItem("on", id);
            }
        }
    }

    const renderMenuFullscreenItems = () => {
        return(
            <div className="menu-fullscreen-items">{props.menuFullscreenItems.map((el,i) => {
                return(
                    <div 
                        key={i} 
                        className={`menu-fullscreen-item${i+1}`}
                        onMouseDown={(e) => menuFullScreenItemOnClick(e, el.id, el.hasOptions, el.path)}
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
                            onMouseEnter={() => props.setIsHoveringMenuFullscreenItem("on", el.id)} 
                            onMouseLeave={() => props.setIsHoveringMenuFullscreenItem("off", el.id)}
                        >
                            <H70 className="h70-white-poppins-cursor">{el.text}</H70>
                        </div>
                        {el.active ? renderMenuFullscreenItemOptions(el) : null}
                    </div>
                )
            })}</div>
        )
    }

    const renderMenuFullscreenItemOptions = (obj) => {
        return(
            <div className="menu-fullscreen-item-options">{obj.options.map((el,i) => {
                return(
                    <div key={el.id}>{el.array.map((el1, i1) => {
                        let pathOfIds = [obj.id, el.id, el1.id]
                        return(
                            <div 
                                key={el1.id} 
                                className={`menu-fullscreen-item${i1+1}-option`}
                                onMouseEnter={() => props.setIsHoveringMenuFullscreenOptionItem("on", pathOfIds)} 
                                onMouseLeave={() => props.setIsHoveringMenuFullscreenOptionItem("off", pathOfIds)}
                                onMouseDown={(e) => menuFullscreenSubOptionOnClick(e, el1.path)}
                            >
                                <H15 className={renderClassName("optionItem", el1.isHover)}>{el1.text}</H15>
                                <EH10/>
                            </div>
                        )
                    })}</div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="menu-fullscreen">
            <div className="menu-fullscreen-logo-close-wrapper">
                <div className={props.state === "on"? "menu-fullscreen-logo-appear" : "menu-fullscreen-logo"}>
                    C.
                </div>
                <div 
                    className="menu-fullscreen-close-button"
                    onClick={() => props.setMenuDotsState("off", props.page)}
                >
                    <div className="menu-fullscreen-close-button-first-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                    <div className="menu-fullscreen-close-button-second-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                    <div className="menu-fullscreen-close-button-third-line">
                        <div className="menu-fullscreen-close-button-left-half-line"/>
                        <div className="menu-fullscreen-close-button-right-half-line"/>
                    </div>
                </div>
            </div>
            {renderMenuFullscreenItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuFullscreenItems: Selectors.getMenuFullScreenItemsState(state)
        };
    },
    (dispatch) => {
        return {
            initMenuFullscreenItems: bindActionCreators(Actions.initMenuFullscreenItems, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setIsHoveringMenuFullscreenItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenItem, dispatch),
            setActivityOfMenuFullscreenItem: bindActionCreators(Actions.setActivityOfMenuFullscreenItem, dispatch),
            setIsHoveringMenuFullscreenOptionItem: bindActionCreators(Actions.setIsHoveringMenuFullscreenOptionItem, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
        };
    }
)(withRouter(MenuFullScreen));
 