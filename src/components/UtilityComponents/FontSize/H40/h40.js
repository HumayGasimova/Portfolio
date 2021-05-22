/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h40.scss';

/**
 * H40 component definition and export
 */

export const H40 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className  : "h40"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H40;
 