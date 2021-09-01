/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './aboutUsPage.scss';

/**
 * Types
 */

import * as Types from './aboutUsPageTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * AboutUsPage component definition and export
 */

export const AboutUsPage: React.FC<Types.AboutUsPageProps> = (props) => {

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
        <div className="about-us-page">
            AboutUsPage
        </div>
    );
}

export default AboutUsPage;
 