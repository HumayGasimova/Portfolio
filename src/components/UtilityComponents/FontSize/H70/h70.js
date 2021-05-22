/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h70.scss';

/**
 * H70 component definition and export
 */

export const H70 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className  : "h70"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H70;
 