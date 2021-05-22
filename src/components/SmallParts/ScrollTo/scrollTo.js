/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import { withRouter } from "react-router-dom";

export const ScrollToTop = (props) => {
    /**
     * Methods
     */

    useEffect(() => {
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