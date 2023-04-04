import { 
    History, 
    Location 
} from 'history';

import { 
    match 
} from 'react-router';

import * as GeneralTypes from '../../../../reducers/generalTypes';

export type ScrollSliderPageProps = {
    scrollSliderPage: GeneralTypes.ScrollSliderPageState,
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
    history: History,
    location: Location,
    match: match,
    staticContext: undefined,
    fetchScrollSliderPageData: () => void,
    fetchScrollSliderPageDataSuccess: (array: Array<GeneralTypes.ScrollSliderItem>) => {array: Array<GeneralTypes.ScrollSliderItem>},
    rememberCoordinateRangeOfScrollSliderForScrollSliderPage: (key: string, coordinateRange: Array<GeneralTypes.ScrollSliderItem>) => {key: string, coordinateRange: Array<GeneralTypes.ScrollSliderItem>},
    updateScrollSlidersStyleValuesScrollSliderPage: (sliderKey: string, obj: GeneralTypes.ItemsStyleValuesObj) => {sliderKey: string, obj: GeneralTypes.ItemsStyleValuesObj},
    // forgetCoordinateRangeOfScrollSliderForScrollSliderPage: ƒ (),
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type MapStateToPropsTypes = {
    // scrollSliderPage: Selectors.getScrollSliderPageState(state),
    menuDotsState: GeneralTypes.MenuDotsStateObj,
    showBackToTop: boolean,
}

export type MapDispatchToPropsTypes = {
   
    fetchScrollSliderPageData: () => void,
    fetchScrollSliderPageDataSuccess: (array: Array<GeneralTypes.ScrollSliderItem>) => {array: Array<GeneralTypes.ScrollSliderItem>},
    rememberCoordinateRangeOfScrollSliderForScrollSliderPage: (key: string, coordinateRange: Array<GeneralTypes.ScrollSliderItem>) => {key: string, coordinateRange: Array<GeneralTypes.ScrollSliderItem>},
    updateScrollSlidersStyleValuesScrollSliderPage: (sliderKey: string, obj: GeneralTypes.ItemsStyleValuesObj) => {sliderKey: string, obj: GeneralTypes.ItemsStyleValuesObj},
    // forgetCoordinateRangeOfScrollSliderForScrollSliderPage: bindActionCreators(Actions.forgetCoordinateRangeOfScrollSliderForScrollSliderPage, dispatch),
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number},
    setMenuDotsState: (val: string, page: string) => {val: string, page: string},
    setShowBackToTopComponent: (val: boolean) => {val: boolean}
}
