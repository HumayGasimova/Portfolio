import * as GeneralTypes from '../../../reducers/generalTypes';

export type BannerImageProps = {
    currentPagePathName: string,
    obj: GeneralTypes.BannerItemObj,
    page: string,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
