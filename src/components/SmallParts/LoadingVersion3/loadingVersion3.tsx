/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './loadingVersion3.scss';

/**
 * Types
 */

import * as Types from './loadingVersion3Types';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * LoadingVersion3 component definition and export
 */

export const LoadingVersion3: React.FC<Types.LoadingVersion3Props> = (props) => {
    
    /**
     * Markup
     */

    return(
        <div className="loading-version-3">
            <div className="loader" style={{color: `${props.color}`}}></div>
        </div>
    );
}

export default LoadingVersion3;
 