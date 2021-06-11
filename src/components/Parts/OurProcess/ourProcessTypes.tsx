export type OurProcessProps = {
    component: string,
    data: DataObj,
    header?: string
}

type DataObj = {
    items: Array<DataItemsItem>,
    loading: boolean,
    error: any
}

type DataItemsItem = {
    header: string,
    id: number,
    img: string,
    text?: string
}
