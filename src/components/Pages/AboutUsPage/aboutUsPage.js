/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './aboutUsPage.scss';

/**
 * AboutUsPage component definition and export
 */

export const AboutUsPage = () => {

    /**
     * Methods
     */

    useEffect(() => {
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
 