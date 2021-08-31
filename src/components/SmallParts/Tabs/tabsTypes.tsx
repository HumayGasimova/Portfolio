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
    array: Array<TabsItem>,
    page: string,
    tabsKey: string,
    tabsCoordinateRange: TabsCoordinateRangeObj,
    tabsUnderlineStyleValues: GeneralTypes.ItemsStyleValuesObj,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    rememberCoordinateRange: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    setActiveTab: (val: string, id: number) => {val: string, id: number}
    setIsHoverTab: (val: string, id: number) => {val: string, id: number}
    updateTabsUnderlinesStyleValues: (tabsKey: string, obj: GeneralTypes.ItemsStyleValuesObj) => {tabsKey: string, obj: GeneralTypes.ItemsStyleValuesObj}
}

type TabsItem = {
    active: string,
    header: string,
    id: number,
    isHover: string,
    key: string,
    text: string
}

type TabsCoordinateRangeObj = {
    tabKey: string,
    tabs: Array<GeneralTypes.ItemsCoordinateRange>
}
