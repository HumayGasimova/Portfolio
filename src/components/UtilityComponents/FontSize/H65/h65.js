/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h65.scss';

/**
 * H65 component definition and export
 */

export const H65 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className  : "h65"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H65;
 