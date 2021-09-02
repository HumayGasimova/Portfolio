import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type HomeProps = {
    photoViewerForPictureBoardTextItemOpen: boolean,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
}

export type MapStateToPropsTypes = {
    photoViewerForPictureBoardTextItemOpen: boolean,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
}
