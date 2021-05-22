/**
 * Libraries
 */

import React, {
    useState
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
 * Styles
 */

import './section1DataItem.scss';

/**
 * Utility
 */

import {
    H25,
    H40,
    EH20
} from '../../UtilityComponents';

/**
 * Section1DataItem component definition and export
 */

export const Section1DataItem = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
     * Methods
     */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const arrowOnClick = (path, e) => {
        switch(e.button){
            case 0:
                // Open the link on left mouse click
                props.history.push(props.match.url + path)
                return;
            case 1:
                // Open the link in a new window on scroll wheel click
                window.open(props.match.url + path, "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    /**
     * Markup
     */

    return(
        <div className="section-1-data-item">
            <H40 className="h40-black-teko">{props.header}</H40>
            <EH20/>
            <H25 className="h25-nobel-lustria">{props.text}</H25>
            <CSSTransition
                in={isHovering} 
                timeout={7000}
                // mountOnEnter
                // unmountOnExit
                classNames={{
                    enter: ``,
                    enterActive: `arrow-wrapper-lengthen`,
                    exit: ``,
                    exitActive: `arrow-wrapper-shorten`,
                }}
            > 
                <div 
                    className="arrow-wrapper"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={(e) => arrowOnClick(props.path, e)}
                >
                    <div className="arrow-horizontal-line"></div>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default withRouter(Section1DataItem);
 