/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './h22.scss';

/**
 * H22 component definition and export
 */

export const H22 = (props) => {

    /**
     * Markup
     */

    return(
        <div 
            className={props.className ? props.className : "h22"}
            onClick={props.onClick}
        >
           {props.children}
        </div>
    );
}

export default H22;
 