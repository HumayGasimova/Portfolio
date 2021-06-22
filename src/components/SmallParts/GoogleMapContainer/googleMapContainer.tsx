/**
 * Libraries
 */

import * as React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

/**
 * Styles
 */

import './googleMapContainer.scss';

/**
 * Types
 */

import * as Types from './googleMapContainerTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * GoogleMapContainer component definition and export
 */

export const GoogleMapContainer: React.FC<Types.GoogleMapContainerProps> = (props) => {

    /**
     * Methods
     */

    React.useEffect(() => {
    }, []);

    /**
     * Markup
     */

    return(
        <Map
            google={props.google}
            zoom={14}
            // style={{
                // width: `${props.mapWidth}`,
                // height: `${props.mapHeight}`
            // }}
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
    apiKey: ""
})(GoogleMapContainer);

// export default GoogleApiWrapper(
//     (props: any) => ({
//       apiKey: "<your_key>"
//     }
// ))(GoogleMapContainer)
