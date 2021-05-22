/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h25.scss';

/**
 * H25 component definition and export
 */

export const H25 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className : "h25"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H25;
 