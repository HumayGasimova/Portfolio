/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h35.scss';

/**
 * H35 component definition and export
 */

export const H35 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className  : "h35"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H35;
 