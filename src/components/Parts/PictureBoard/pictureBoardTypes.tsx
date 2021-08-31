import * as GeneralTypes from '../../../reducers/generalTypes';

export type PictureBoardProps = {
    pictureBoardImagesCooradinateRange: Array<PictureBoardImagesCooradinateRangeItem>,
    pictureBoard: PictureBoardObj,
    rememberCoordinateRangeForPictureBoard: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    forgetCoordinateRangeForPictureBoard: (arr: Array<PictureBoardImagesCooradinateRangeItem>) => {arr: Array<PictureBoardImagesCooradinateRangeItem>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

export type PictureBoardImagesCooradinateRangeItem = {
    id: number,
    updated: false,
    bottomCoordinate?: number,
    leftCoordinate?: number,
    rightCoordinate?: number,
    topCoordinate?: number,
    width?: number
}

type PictureBoardObj = {
    items: Array<PictureBoardObjItem>, 
    loading: boolean, 
    error: any
}

type PictureBoardObjItem = {
    header: string | null,
    id: number,
    key: string,
    option: string,
    path: string,
    pictures: Array<PicturesItem>,
    text:string | null
}

type PicturesItem = {
    alt: string,
    folderName: string,
    id: number,
    imageName: string,
    key: string
}

export type MapStateToPropsTypes = {
    pictureBoard: PictureBoardObj,
    pictureBoardImagesCooradinateRange: Array<PictureBoardImagesCooradinateRangeItem>,
}

export type MapDispatchToPropsTypes = {
    rememberCoordinateRangeForPictureBoard: (id: number, coordinateRange: GeneralTypes.CoordinateRangeObj) => {id: number, coordinateRange: GeneralTypes.CoordinateRangeObj},
    forgetCoordinateRangeForPictureBoard: (arr: Array<PictureBoardImagesCooradinateRangeItem>) => {arr: Array<PictureBoardImagesCooradinateRangeItem>},
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

