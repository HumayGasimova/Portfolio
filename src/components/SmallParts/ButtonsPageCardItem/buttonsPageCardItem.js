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

import './buttonsPageCardItem.scss';

/**
 * Components
 */

import Button from '../../../library/Button/button';
import ButtonWithText from '../../../library/ButtonWithText/buttonWithText';

/**
 * Utility
 */

import {
    H15,
    H17,
    H22,
    H35,
    EH30
} from '../../UtilityComponents';

/**
 * ButtonsPageCardItem component definition and export
 */

export const ButtonsPageCardItem = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    const handleMouseEnter = () => {
        setIsHovering("on");
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "buttons-page-card-item-button-type-arrow-wrapper";
                case 'on':
                    return "buttons-page-card-item-button-type-arrow-wrapper-lengthen";
                case 'off':
                    return "buttons-page-card-item-button-type-arrow-wrapper-shorten";
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

    const renderButtons = (buttonType) => {
        switch(buttonType){
            case 'arrow': 
                return(
                <div
                    className={renderClassName("arrow", isHovering)}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={(e) => onMouseDownHandler(e)}
                >
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
                );
            case 'arrowWithText': 
                return(
                    <ButtonWithText 
                        buttonText={props.data.buttonText}
                        setUnmountComponentValues={props.setUnmountComponentValues}
                        unmountComponent={props.unmountComponent}
                        currentPagePathName={props.currentPagePathName}
                    />
                );
            case 'buttonOutline': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-outline"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonSolid': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-solid"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonSmall': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-small"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonMedium': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-medium"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
            case 'buttonLarge': 
                return(
                    <div className="buttons-page-card-item-button-wrapper">
                        <Button
                            className="buttons-page-large"
                            text="get direction."
                            onMouseDown={(e) => onMouseDownHandler(e)}
                        />
                    </div>
                );
        }
    }

    /**
     * Markup
     */

    return(
        <div className="buttons-page-card-item">
            <H35 className="h35-black-poppins">{props.data.header}</H35>
            <EH30/>
            {props.page === "buttonsPageSection1" ?
            <div className="buttons-page-card-item-section1-text-wrapper">
                <H17 className="h17-nobel-lustria">{props.data.text}</H17>
            </div> : 
            <div className="buttons-page-card-item-section2-text-wrapper">
                <H22 className="h22-nobel-lustria">{props.data.text}</H22>
            </div>}
            {renderButtons(props.data.buttonType)}
        </div>
    );
}

export default ButtonsPageCardItem;
 