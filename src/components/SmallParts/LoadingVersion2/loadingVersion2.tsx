/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './loadingVersion2.scss';


/**
 * Types
 */

import * as Types from './loadingVersion2Types';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * LoadingVersion2 component definition and export
 */

export const LoadingVersion2: React.FC<Types.LoadingVersion2Props> = (props) => {
    
    /**
     * Markup
     */

    return(
        <div className="loading-version-2">
            <div 
                className="bounce1"
                style={{
                    background: `${props.color}`,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}
            />
            <div 
                className="bounce2"
                style={{
                    background: `${props.color}`,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}
            />
            <div 
                className="bounce3" 
                style={{
                    background: `${props.color}`,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}
            />
        </div>
    );
}

export default LoadingVersion2;
 