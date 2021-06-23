import * as GeneralTypes from '../../../reducers/generalTypes';

export type PictureBoardTextItemProps = {
    header: string,
    id: number,
    imagesArray: Array<GeneralTypes.ImagesArrayItem>,
    option: string,
    text: string,
    photoViewerOpen: (option: string, val: boolean, array: Array<GeneralTypes.ImagesArrayItem>) => {option: string, val: boolean, array: Array<GeneralTypes.ImagesArrayItem>}
}


export type MapStateToPropsTypes = {
   
}

export type MapDispatchToPropsTypes = {
    photoViewerOpen: (option: string, val: boolean, array: Array<GeneralTypes.ImagesArrayItem>) => {option: string, val: boolean, array: Array<GeneralTypes.ImagesArrayItem>}
}
