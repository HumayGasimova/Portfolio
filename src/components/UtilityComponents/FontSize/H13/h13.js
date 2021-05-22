/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h13.scss';

/**
 * H13 component definition and export
 */

export const H13 = (props) => {

    /**
     * Markup
     */

    return(
        <div className={props.className ? props.className : "h13"}>
           {props.children}
        </div>
    );
}

export default H13;
 