import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type TeamInformationCardProps = {
    alt: string,
    imgKey: string,
    instaName: string,
    name: string,
    photo: string,
    position: string,
    version: string
}

export type InfoCardPadding = {
    left: number,
    right: number
}
