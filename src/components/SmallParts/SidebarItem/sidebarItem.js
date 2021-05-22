/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './sidebarItem.scss';

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
 * SidebarItem component definition and export
 */

export const SidebarItem = (props) => {
    
    /**
     * Methods
     */

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "sidebarArrow"){
            switch(isHovering){
                case 'init':
                    return "sidebar-item-arrow-wrapper";
                case 'on':
                    return "sidebar-item-arrow-wrapper-hover-on";
                case 'off':
                    return "sidebar-item-arrow-wrapper-hover-off";
            }
        }
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
                return "sidebar-option-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "sidebar-option-item-text";
                case 'on':
                    return "sidebar-option-item-text-hover-on";
                case 'off':
                    return "sidebar-option-item-text-hover-off";
            }
        }
    }

    const renderOptions = () => {
        return(
            <div className="sidebar-item-options-wrapper">{props.data.options.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        className="sidebar-option"
                    >
                        <div className="sidebar-option-header-text">
                            <H19 className="h19-matterhorn-teko">{el.header}</H19>
                        </div>
                        {renderOptionItems(el)}
                    </div>
                )
            })}</div>
        )
    }

    const renderOptionItems = (obj) => {
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                if(el.subOptions.length === 0){
                    return(
                        <div 
                            key={i} 
                            className="sidebar-option-item"
                            onMouseDown={(e) => props.itemOnClick("optionItem", el.path, pathOfIds, e, null, el.itemId)}
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
                                onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)} 
                                onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                            >
                                <H15 className="h15-black-lustria">{el.text}</H15>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        <div 
                            key={i} 
                            className="sidebar-option-item-with-sub-option"
                            onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)}
                            onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                        >
                            <div className="item-wrapper">
                                <div className="sidebar-option-item-text-and-arrow-wrapper">
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
                                    <div className={renderClassName("text", el.isHover, el.active)}>
                                        <H15 className="h15-black-lustria">{el.text}</H15>
                                    </div>
                                </div>
                                <div className={renderClassName("sidebarArrow", el.isHover, el.active)}>
                                    <div className="sidebar-item-arrow-top-line"/>
                                    <div className="sidebar-item-arrow-bottom-line"/>
                                </div>
                            </div>
                        
                            {el.isHover === "on" ? renderSubOptions(el.subOptions, pathOfIds): null}
                        </div>
                    )
                }
            })}</>
        )
    }

    const renderSubOptions = (subOptions, pathOfIds) => {
        return(
            <>
                <EH10/>
                <div className="grey-line"/>
                <div 
                    className="sidebar-item-sub-options"
                    onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                >
                    <EH20/>
                    {subOptions.map((el, i) => {
                        let updatedPathOfIds = [...pathOfIds];
                        updatedPathOfIds.push(el.id);
                        return(
                            <div 
                                key={i} 
                                className="sidebar-sub-option-item"
                                onMouseDown={(e) => props.itemOnClick("subOptionItem", el.path, updatedPathOfIds, e, props.data.id)}
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
                                    onMouseEnter={() => props.onMouseEnterAndLeaveSubOptionItem("on", updatedPathOfIds)} 
                                    onMouseLeave={() => props.onMouseEnterAndLeaveSubOptionItem("off", updatedPathOfIds)}
                                >
                                    <H15 className="h15-black-lustria">{el.text}</H15>
                                </div>           
                            </div>
                        )})}
                </div>
            </>
        )
    }

    /**
     * Markup
     */

    return(
     
        <div 
            className="sidebar-item-wrapper"
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
           >
            <div className={props.data.active ? `sidebar-item-active` : `sidebar-item`}>
                <div className="item-wrapper">
                    {props.data.text}
                    <div className={renderClassName("sidebarArrow", props.data.isHover, props.data.active)}>
                        <div className="sidebar-item-arrow-top-line"/>
                        <div className="sidebar-item-arrow-bottom-line"/>
                    </div>
                </div>
                
            </div>
            {props.showOptions && props.data.isHover === "on" ? 
            <div 
                className="sidebar-item-options"
                onMouseLeave={props.onMouseLeave}
            >
                <div className="grey-line"/>
                {renderOptions()}
                <EH20/>
            </div> : null}
        </div>
    );
}
 
export default SidebarItem;
 