export type TeamInformationProps = {
    teamInformation: TeamInformationObj,
    fetchTeamInformation: () => void,
    fetchTeamInformationSuccess: (array: Array<TeamInformationItemsItem>) => {array: Array<TeamInformationItemsItem>}
}

type TeamInformationObj = {
    error: any,
    items: Array<TeamInformationItemsItem>,
    loading: boolean
}

type TeamInformationItemsItem = {
    alt: string,
    hover: boolean,
    id: number,
    instaName: string,
    key: string,
    name: string,
    path: string,
    photo: string,
    position: string
}

export type MapStateToPropsTypes = {
    teamInformation: TeamInformationObj,
}

export type MapDispatchToPropsTypes = {
    fetchTeamInformation: () => void,
    fetchTeamInformationSuccess: (array: Array<TeamInformationItemsItem>) => {array: Array<TeamInformationItemsItem>}
}
