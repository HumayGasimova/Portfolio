import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

export type Section1DataItemProps = {
    header: string,
    history: History,
    location: Location,
    match: match,
    path: string,
    text: string,
    staticContext: undefined
}
