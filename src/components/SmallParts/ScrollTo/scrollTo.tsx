/**
 * Libraries
 */

import * as React from 'react';

import { withRouter } from "react-router-dom";


/**
 * Types
 */

import * as Types from './scrollToTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';
 
/**
 * ScrollToTop component definition and export
 */

export const ScrollToTop: React.FC<Types.ScrollToTopProps> = (props) => {
    /**
     * Methods
     */

    React.useEffect(() => {
        window.scrollTo(0, props.scrollToPosition);
    }, [props.location]);

    /**
     * Markup
     */

    return(
        <React.Fragment/> 
    );
}

export default withRouter(ScrollToTop)