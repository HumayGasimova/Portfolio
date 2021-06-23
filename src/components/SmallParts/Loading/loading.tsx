/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './loading.scss';

/**
 * Types
 */

import * as Types from './loadingTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * Loading component definition and export
 */

export const Loading: React.FC<Types.LoadingProps> = (props) => {
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
 