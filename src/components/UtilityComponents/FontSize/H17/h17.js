/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h17.scss';

/**
 * H17 component definition and export
 */

export const H17 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className : "h17"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H17;
 