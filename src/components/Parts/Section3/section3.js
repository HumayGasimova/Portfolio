/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './section3.scss';

/**
 * Components
 */

import Testimonials from '../Testimonials/testimonials';
import TeamInformation from '../TeamInformation/teamInformation';

/**
 * Section3 component definition and export
 */

export const Section3 = () => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    /**
     * Markup
     */

    return(
        <div className="section-3">
            <Testimonials/>
            <TeamInformation/>
        </div>
    );
}

export default Section3;
 