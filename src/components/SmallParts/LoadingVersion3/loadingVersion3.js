/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './loadingVersion3.scss';

/**
 * LoadingVersion3 component definition and export
 */

export const LoadingVersion3 = (props) => {

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
 