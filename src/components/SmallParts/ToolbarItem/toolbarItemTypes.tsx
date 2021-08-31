import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../reducers/generalTypes';

export type ToolbarItemProps = {
    data: GeneralTypes.MenuItemsItem,
    showOptionsRegular: boolean,
    toolbarMainColor: string,
    itemOnClick: (opt: string, path: string, pathOfIds: Array<number>, e: React.MouseEvent, idOfFirstObj: number | null, itemId: string | undefined) => void,
    onMouseEnterAndLeaveOptionItem: (val: string, pathOfIds: Array<number>) => void,
    onMouseEnterAndLeaveSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    onMouseEnter: (id: React.MouseEvent) => void,
    onMouseLeave: () => void
}
