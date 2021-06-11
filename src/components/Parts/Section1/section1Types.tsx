export type Section1Props = {
    section1Data: Section1DataObj,
    fetchSection1Data: ()=> void,
    fetchSection1DataSuccess: (array: Array<Section1DataObjItemsItem>) => {array: Array<Section1DataObjItemsItem>}
}

type Section1DataObj = {
    error: any,
    items: Array<Section1DataObjItemsItem>,
    loading: boolean
}

type Section1DataObjItemsItem = {
    header: string,
    id: number,
    path: string,
    text: string
}

export type MapStateToPropsTypes = {
    section1Data: Section1DataObj
}

export type MapDispatchToPropsTypes = {
    fetchSection1Data: ()=> void,
    fetchSection1DataSuccess: (array: Array<Section1DataObjItemsItem>) => {array: Array<Section1DataObjItemsItem>}
}
