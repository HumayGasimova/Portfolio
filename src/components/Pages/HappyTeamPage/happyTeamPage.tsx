/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './happyTeamPage.scss';

/**
 * Types
 */

import * as Types from './happyTeamPageTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * HappyTeamPage component definition and export
 */

export const HappyTeamPage: React.FC<Types.HappyTeamPageProps> = (props) => {

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
 