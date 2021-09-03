import * as React from 'react';

import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type BannerPageProps = {
    bannerPage: GeneralTypes.BannerPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    clearArchiveData: () => void,
    fetchBannerPageSection1Data: () => {},
    fetchBannerPageSection1DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection2Data: () => {},
    fetchBannerPageSection2DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection3Data: () => {},
    fetchBannerPageSection3DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection4Data: () => {},
    fetchBannerPageSection4DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection5Data: () => {},
    fetchBannerPageSection5DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection6Data: () => {},
    fetchBannerPageSection6DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection7Data: () => {},
    fetchBannerPageSection7DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection8Data: () => {},
    fetchBannerPageSection8DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    setBannerPageSection4IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setBannerPageSection6IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setBannerPageSection7IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    bannerPage: GeneralTypes.BannerPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean
}

export type MapDispatchToPropsTypes = {
    fetchBannerPageSection1Data: () => {},
    fetchBannerPageSection1DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection2Data: () => {},
    fetchBannerPageSection2DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection3Data: () => {},
    fetchBannerPageSection3DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection4Data: () => {},
    fetchBannerPageSection4DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection5Data: () => {},
    fetchBannerPageSection5DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection6Data: () => {},
    fetchBannerPageSection6DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection7Data: () => {},
    fetchBannerPageSection7DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    fetchBannerPageSection8Data: () => {},
    fetchBannerPageSection8DataSuccess: (array: Array<GeneralTypes.BannerItemObj>) => {array: Array<GeneralTypes.BannerItemObj>},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setBannerPageSection4IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setBannerPageSection6IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setBannerPageSection7IsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
