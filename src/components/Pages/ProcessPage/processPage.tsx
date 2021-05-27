/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './processPage.scss';

/**
 * ProcessPage component definition and export
 */

export const ProcessPage = () => {

    /**
     * Methods
     */

    React.useEffect(() => {
        // Scroll to the top of the screen
        
        window.scrollTo(0, 0);
    }, []);

    /**
     * Markup
     */

    return(
        <div className="process-page">
            ProcessPage
        </div>
    );
}

export default ProcessPage;
 