export type HeaderImagesProps = {
    headerImages: HeaderImagesObj,
    fetchHeaderImagesArray: () => void,
    fetchHeaderImagesSuccess: (array: Array<HeaderImagesItem>) => {array: Array<HeaderImagesItem>}
}

type HeaderImagesObj = {
    error: any,
    items: Array<HeaderImagesItem>,
    loading: boolean
}

export type HeaderImagesItem = {
    alt: string,
    headerText: string,
    id: number,
    imgName: string,
    text1: string,
    text2: string,
    text3: string
}

export type SwitchButtons = {
    id: number, 
    active: boolean,
    isHovering: boolean,
    closeSmoothly: boolean
}

export type MapStateToPropsTypes = {
    headerImages: HeaderImagesObj
}

export type MapDispatchToPropsTypes = {
    fetchHeaderImagesArray: () => void,
    fetchHeaderImagesSuccess: (array: Array<HeaderImagesItem>) => {array: Array<HeaderImagesItem>}
}
