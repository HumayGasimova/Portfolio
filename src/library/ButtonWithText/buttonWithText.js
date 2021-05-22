/**
 * Libraries
 */

import React, {
    useState
} from 'react';

/**
 * Styles
 */

import './buttonWithText.scss';

/**
 * Utility
 */

import {
    H15
} from '../../components/UtilityComponents';

/**
 * ButtonWithText component definition and export
 */

export const ButtonWithText = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */

    const handleMouseEnter = () => {
        setIsHovering("on");
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "arrowWithTextPartArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "arrowWithTextPartText"){
            switch(isHovering){
                case 'init':
                    return "text";
                case 'on':
                    return "text-hover-on";
                case 'off':
                    return "text-hover-off";
            }
        }
    }

    const onMouseDownHandler = (e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;
        
        if(e.button !== 1){
            // Scroll to the top of the page on left mouse click

            window.scrollTo(0, 0);
        }else{
            // Open the template page on scroll wheel click  

            props.setUnmountComponentValues(false, props.currentPagePathName);

            // Fire up unmountComponent epic
            
            props.unmountComponent(null, null,  props.page, e.button);
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="arrow-with-text"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={renderClassName("arrowWithTextPartArrow", isHovering)}>
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
            <div 
                className={renderClassName("arrowWithTextPartText", isHovering)}
                onMouseDown={(e) => onMouseDownHandler(e)}
            >
                <H15 className="h15-black-poppins">{props.buttonText}</H15>
            </div>
        </div>
    );
}

export default ButtonWithText;
