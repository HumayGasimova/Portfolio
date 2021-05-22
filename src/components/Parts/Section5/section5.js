/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './section5.scss';

/**
 * Components
 */

import VideoWithCover from '../VideoWithCover/videoWithCover';

/**
 * Section5 component definition and export
 */

export const Section5 = () => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    /**
     * Markup
     */

    return(
        <div className="section-5">
            <VideoWithCover
                coverImageKey="teamWorkImg"
                videoKey="teamWorkMp4"
            />
        </div>
    );
}

export default Section5;
 