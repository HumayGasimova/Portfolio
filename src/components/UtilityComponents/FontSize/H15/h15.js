/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h15.scss';

/**
 * H15 component definition and export
 */

export const H15 = (props) => {

    /**
     * Markup
     */

    return(
        <div className={props.className ? props.className : "h15"}>
           {props.children}
        </div>
    );
}

export default H15;
 