export type PhotoViewerTypes = {
    component: string,
    fullScreenState: boolean,
    height: number,
    photoViewerImagesArray: Array<photoViewerImagesArrayItem>,
    width: number,
    nextImage: () => void
    prevImage: () => void
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>}
    setFullScreenState: (val: boolean) => {val: boolean}
}

export type PhotoViewerWindowSize = {
    width: number,
    height: number
}

type photoViewerImagesArrayItem = {
    alt: string,
    folderName: string,
    id: number,
    imageName: string,
    key: string
}
