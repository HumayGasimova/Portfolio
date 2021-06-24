import * as React from 'react';
import * as GeneralTypes from '../../../reducers/generalTypes';

export type SearchItemProps = {
    data: GeneralTypes.MenuItemsItem,
    showOptions: boolean,
    key: number,
    itemOnClick: (opt: string, path: string, pathOfIds: Array<number>, e: React.MouseEvent, idOfFirstObj: number, itemId: string) => void,
    onMouseEnter: (id: React.MouseEvent) => void,
    onMouseLeave: () => void,
    onMouseEnterAndLeaveOptionItem: (val: string, pathOfIds: Array<number>) => void,
    onMouseEnterAndLeaveSubOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>}
}
