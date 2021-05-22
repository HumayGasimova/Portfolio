/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './section4.scss';

/**
 * Components
 */

import Statistics from '../Statistics/statistics';
import Achievements from '../Achievements/achievements';

/**
 * Section4 component definition and export
 */

export const Section4 = () => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    /**
     * Markup
     */

    return(
        <div className="section-4">
            <Statistics/>
            <Achievements/>
        </div>
    );
}

export default Section4;
 