import * as GeneralTypes from '../../../reducers/generalTypes';

export type Section2Props = {
    ourProcessDate: OurProcessDateObj,
    pictureBoard: PictureBoardObj,
    fetchOurProcessData: () => void,
    fetchOurProcessDataSuccess: (array: Array<OurProcessDateObjItemsItem>) => {array: Array<OurProcessDateObjItemsItem>},
    fetchPictureBoard: () => void,
    fetchPictureBoardSuccess: (array: Array<PictureBoardObjItemsItem>) => {array: Array<PictureBoardObjItemsItem>}

}

type OurProcessDateObj = {
    error: any,
    items: Array<OurProcessDateObjItemsItem>,
    loading: boolean
}

type OurProcessDateObjItemsItem = {
    header: string,
    id: number,
    img: string
}

type PictureBoardObj = {
    error: any,
    items: Array<PictureBoardObjItemsItem>,
    loading: boolean
}

type PictureBoardObjItemsItem = {
    header: string | null,
    id: number,
    key: string,
    option: string,
    path: string,
    pictures: Array<GeneralTypes.ImagesArrayItem>,
    text: string | null
}

export type MapStateToPropsTypes = {
    ourProcessDate: OurProcessDateObj,
    pictureBoard: PictureBoardObj,
}

export type MapDispatchToPropsTypes = {
    fetchOurProcessData: () => void,
    fetchOurProcessDataSuccess: (array: Array<OurProcessDateObjItemsItem>) => {array: Array<OurProcessDateObjItemsItem>},
    fetchPictureBoard: () => void,
    fetchPictureBoardSuccess: (array: Array<PictureBoardObjItemsItem>) => {array: Array<PictureBoardObjItemsItem>}
}
