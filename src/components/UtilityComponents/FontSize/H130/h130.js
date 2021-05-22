/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h130.scss';

/**
 * H130 component definition and export
 */

export const H130 = (props) => {

    /**
     * Markup
     */

    return(
        <div className={props.className ? props.className : "h130"}>
           {props.children}
        </div>
    );
}

export default H130;
 