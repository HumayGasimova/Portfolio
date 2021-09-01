import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type ProcessPageProps = {
    history: History,
    location: Location,
    match: match,
    staticContext: undefined
}
