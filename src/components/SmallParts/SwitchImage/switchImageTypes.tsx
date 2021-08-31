import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type SwitchImageProps = {
    alt: string,
    component: string,
    id: number,
    imagesArray: Array<GeneralTypes.ImagesArrayItem>,
    imgCoordinateRange: GeneralTypes.ItemsCoordinateRange,
    option: string,
    path: string,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    rememberCoordinateRange: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
