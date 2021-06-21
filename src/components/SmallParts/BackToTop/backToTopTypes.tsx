import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

export type BackToTopProps = {
    history: History,
    location: Location,
    match: match,
    staticContext: undefined
}
