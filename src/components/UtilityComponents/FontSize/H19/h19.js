/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h19.scss';

/**
 * H19 component definition and export
 */

export const H19 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className : "h19"}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
        >
           {props.children}
        </div>
    );
}

export default H19;
 