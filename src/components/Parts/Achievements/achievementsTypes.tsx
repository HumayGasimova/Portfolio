export type AchievementsComponentProps = {
    achievementsData: AchievementsData,
    fetchAchievementsData: () => void,
    fetchAchievementsDataSuccess: (array: Array<AchievementsDataObj>) => {array: Array<AchievementsDataObj>},
}

type AchievementsData = {
    error: any,
    items: Array<AchievementsDataObj>,
    loading: boolean
}

type AchievementsDataObj = {
    id: number,
    achievement: string,
    number: number
}


export type MapStateToPropsTypes = {
    achievementsData: AchievementsData;
}

export type MapDispatchToPropsTypes = {
    fetchAchievementsData: () => void,
    fetchAchievementsDataSuccess: (array: Array<AchievementsDataObj>) => {array: Array<AchievementsDataObj>},
}
