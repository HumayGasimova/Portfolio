import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

export type MenuFullScreenProps = {
    history: History,
    location: Location,
    match: match,
    menuFullscreenItems: Array<MenuFullscreenItemsItem>,
    page: string,
    state: string,
    staticContext: undefined,
    initMenuFullscreenItems: (array: Array<MenuFullscreenItemsItem>) => {array: Array<MenuFullscreenItemsItem>}
    setActivityOfMenuFullscreenItem: (val: string, id: number) => {val: string, id: number}
    setIsHoveringMenuFullscreenItem: (val: string, id: number) => {val: string, id: number}
    setIsHoveringMenuFullscreenOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>}
    setMenuDotsState: (val: string, page: string) => {val: string, page: string}
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
}

export type MenuFullscreenItemsItem = {
    id: number,
    text: string,
    itemId: string,
    path: string | null,
    active: boolean,
    isHover: string,
    hasOptions: boolean,
    options: Array<OptionsItem>
}

type OptionsItem = {
    id: number,
    header: string | null,
    itemId: string | null,
    array: Array<ArrayItem>
}

type ArrayItem = {
    id: number,
    text: string,
    itemId: string,
    path: string,
    active: boolean,
    isHover: string,
    subOptions: Array<SubOptionsItem>
}

type SubOptionsItem = {
    id: number,
    text: string,
    itemId: string,
    path: string,
    active: boolean,
    isHover: string,
    subOptions: Array<SubOptionsItem>
}

export type MapStateToPropsTypes = {
    menuFullscreenItems: Array<MenuFullscreenItemsItem>
}

export type MapDispatchToPropsTypes = {
    initMenuFullscreenItems: (array: Array<MenuFullscreenItemsItem>) => {array: Array<MenuFullscreenItemsItem>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setIsHoveringMenuFullscreenItem: (val: string, id: number) => {val: string, id: number},
    setActivityOfMenuFullscreenItem: (val: string, id: number) => {val: string, id: number},
    setIsHoveringMenuFullscreenOptionItem: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

// export interface match<P> {
//     params: P;
//     isExact: boolean;
//     path: string;
//     url: string;
//   }