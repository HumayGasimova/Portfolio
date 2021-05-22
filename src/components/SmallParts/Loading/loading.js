/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './loading.scss';

/**
 * Loading component definition and export
 */

export const Loading = (props) => {

    /**
     * Markup
     */

    return(
        <div className="loading">
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
            <div style={{background: `${props.color}`}}></div>
        </div>
    );
}

export default Loading;
 