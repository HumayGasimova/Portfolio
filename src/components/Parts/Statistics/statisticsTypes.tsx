export type StatisticsProps = {
    statisticsData: StatisticsObj
    fetchStatisticsData: () => void,
    fetchStatisticsDataSuccess: (array: Array<StatisticsItemsItem>) => {array: Array<StatisticsItemsItem>}
}

type StatisticsObj = {
    error: any,
    items: Array<StatisticsItemsItem>,
    loading: boolean
}

type StatisticsItemsItem = {
    id: number,
    label: string,
    percent: number
}

export type MapStateToPropsTypes = {
    statisticsData: StatisticsObj
}

export type MapDispatchToPropsTypes = {
    fetchStatisticsData: () => void,
    fetchStatisticsDataSuccess: (array: Array<StatisticsItemsItem>) => {array: Array<StatisticsItemsItem>}
}
