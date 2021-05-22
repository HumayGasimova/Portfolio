/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h45.scss';

/**
 * H45 component definition and export
 */

export const H45 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className  : "h45"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H45;
 