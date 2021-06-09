export type PhotoViewerProps = {
    component: string,
    fullScreenState: boolean,
    height: number,
    photoViewerImagesArray: Array<PhotoViewerImagesArrayItem>,
    width: number,
    prevImage: () => void,
    nextImage: () => void,
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setFullScreenState: (val: boolean) => {val: boolean}
}

export type PhotoViewerWindowSize = {
    width: number,
    height: number
}

type PhotoViewerImagesArrayItem = {
    alt: string,
    folderName: string,
    id: number,
    imageName: string,
    key: string
}

export type MapStateToPropsTypes = {
    photoViewerImagesArray: Array<PhotoViewerImagesArrayItem>,
    fullScreenState: boolean,
}

export type MapDispatchToPropsTypes = {
    prevImage: () => void,
    nextImage: () => void,
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setFullScreenState: (val: boolean) => {val: boolean}
}
