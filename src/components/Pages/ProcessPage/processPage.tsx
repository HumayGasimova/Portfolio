/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './processPage.scss';

/**
 * Types
 */

import * as Types from './processPageTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * ProcessPage component definition and export
 */

export const ProcessPage: React.FC<Types.ProcessPageProps> = (props) => {

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
 