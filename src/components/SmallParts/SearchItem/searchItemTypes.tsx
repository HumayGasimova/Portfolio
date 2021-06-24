import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type SearchItemProps = {
    elData: GeneralTypes.BlogListStandardPageItem,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    activateBlogCategory: (categoryIsActive: string, categoryName: string) => {categoryIsActive: string, categoryName: string},
    activateBlogItem: (itemIsActive: string, itemKey: string, cardType: string) => {itemIsActive: string, itemKey: string, cardType: string},
    activateBlogTag: (tagIsActive: string, tagName: string) => {tagIsActive: string, tagName: string},
    clearActivityOfMenuItems: (prevLocationPathOfIds: Array<number>) => {prevLocationPathOfIds: Array<number>},
    clearState: () => void
}
