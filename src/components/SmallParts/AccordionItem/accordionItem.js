/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './accordionItem.scss';

/**
 * Components
 */

import Icon from '../Icon/icon';

/**
 * Utility
 */

import {
    H17,
    H19
} from '../../UtilityComponents';

/**
 * AccordionItem component definition and export
 */

export const AccordionItem = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const handleMouseEnter = (style, id) => {
        switch(style){
            case 'hoverBlackAndWhite': 
                props.setIsHoverAccordionItem("on", id);
                break;
        }
    }

    const handleMouseLeave = (style, id) => {
        switch(style){
            case 'hoverBlackAndWhite': 
                props.setIsHoverAccordionItem("off", id);
                break;
        }
    }
    
    const renderClassName = (style, opt, isHovering, isActive) => {
        if(style === "simple"){
            if(opt === "background"){
                return "accordion-item-simple";
            }
            if(opt === "header"){
                return "h19-nero-poppins";
            }
        }
        if(style === "hoverBlackAndWhite"){
            if(opt === "background"){
                if(isActive === "on"){
                    return "accordion-item-black-and-white-hover-on";
                }
                switch(isHovering){
                    case 'init':
                        return "accordion-item-black-and-white";
                    case 'on':
                        return "accordion-item-black-and-white-hover-on";
                    case 'off':
                        return "accordion-item-black-and-white-hover-off"
                }
            }
            if(opt === "header"){
                if(isActive === "on"){
                    return "h19-black-poppins-white-hover-on";
                }
                switch(isHovering){
                    case 'init':
                        return "h19-nero-poppins";
                    case 'on':
                        return "h19-black-poppins-white-hover-on";
                    case 'off':
                        return "h19-black-poppins-white-hover-off"
                }
            }
        }
        if(opt === "collapsibleArea"){
            switch(isActive){
                case 'init':
                    return "accordion-item-text";
                case 'on':
                    return "accordion-item-text-open";
                case 'off':
                    return "accordion-item-text-close"
            }
        }
    }

    const onClickHandler = () => {
        // Activate accordion item

        let val = props.obj.active === "init" || props.obj.active === "off" ? "on" : "off";
        props.activateAccordionItem(val, props.obj.id, props.option);
    }

    /**
     * Markup
     */

    return(
        <>
            <div 
                className={renderClassName(props.style, "background", props.obj.isHover, props.obj.active)}
                onMouseEnter={props.hoverEffect ? () => handleMouseEnter(props.style, props.obj.id) : null} 
                onMouseLeave={props.hoverEffect ? () => handleMouseLeave(props.style, props.obj.id) : null}
                onClick={onClickHandler}
            >
                <H19 className={renderClassName(props.style, "header", props.obj.isHover, props.obj.active)}>{props.obj.header}</H19>
                <Icon
                    iconType={props.iconType}
                    hoverEffect={props.hoverEffect}
                    isHover={props.obj.isHover}
                    isActive={props.obj.active}
                    onMouseEnter
                    onMouseLeave
                    onMouseDown
                />
            </div>
            <div className={renderClassName(null, "collapsibleArea", null, props.obj.active)}>
                <H17 className="h17-nobel-lustria">{props.obj.text}</H17>
            </div> 
        </>
    );
}

export default AccordionItem;
