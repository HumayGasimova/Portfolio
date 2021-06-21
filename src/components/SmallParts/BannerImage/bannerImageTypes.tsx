import * as GeneralTypes from '../../../reducers/generalTypes';

export type BannerImageProps = {
    currentPagePathName: string,
    obj: BannerImageObj,
    page: string,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

type BannerImageObj = {
    coverImage: GeneralTypes.CoverImageObj,
    curtainBackgroundColor: string,
    header: string,
    headerColor: string,
    id: number,
    key: string,
    path: string,
    text: string,
    textColor: string
}
