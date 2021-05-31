/**
 * Libraries
 */

import * as React from 'react';

import { withRouter } from "react-router-dom";

export const ScrollToTop = (props) => {
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
        <React.Fragment /> 
    );
}

export default withRouter(ScrollToTop)