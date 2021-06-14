export type StatisticsProps = {
    statisticsData: StatisticsDataObj
    fetchStatisticsData: () => void,
    fetchStatisticsDataSuccess: (array: Array<StatisticsItemsItem>) => {array: Array<StatisticsItemsItem>}
}

type StatisticsDataObj = {
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
    statisticsData: StatisticsDataObj
}

export type MapDispatchToPropsTypes = {
    fetchStatisticsData: () => void,
    fetchStatisticsDataSuccess: (array: Array<StatisticsItemsItem>) => {array: Array<StatisticsItemsItem>}
}
