/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './happyTeamPage.scss';

/**
 * HappyTeamPage component definition and export
 */

export const HappyTeamPage = () => {

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
        <div className="happy-team-page">
            HappyTeamPage
        </div>
    );
}

export default HappyTeamPage;
 