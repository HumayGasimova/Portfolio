/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './loadingVersion4.scss';

/**
 * Types
 */

import * as Types from './loadingVersion4Types';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * LoadingVersion4 component definition and export
 */

export const LoadingVersion4: React.FC<Types.LoadingVersion4Props> = (props) => {

    /**
     * Markup
     */

    return(
        <div className="loading-version-4">
            Loading...
        </div>
    );
}

export default LoadingVersion4;
 