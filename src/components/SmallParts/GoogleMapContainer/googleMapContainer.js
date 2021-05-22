/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

/**
 * Styles
 */

import './googleMapContainer.scss';

/**
 * GoogleMapContainer component definition and export
 */

export const GoogleMapContainer = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    /**
     * Markup
     */

    return(
        <Map
            google={props.google}
            zoom={14}
            style={{
                width: `${props.mapWidth}`,
                height: `${props.mapHeight}`
            }}
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }
        />
    );
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyCPjkxzgmKxCOngkKFGByXX-1xASP8LUuA'
})(GoogleMapContainer);
