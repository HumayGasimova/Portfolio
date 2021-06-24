import * as GeneralTypes from '../../../reducers/generalTypes';

export type PortfolioItemCardProps = {
    component: string,
    imgCoordinateRange: GeneralTypes.ItemsCoordinateRange,
    obj: GeneralTypes.PortfolioItemObj,
    rememberCoordinateRange: (id: number, coordinateRange: GeneralTypes.ItemsCoordinateRange) => {id: number, coordinateRange: GeneralTypes.ItemsCoordinateRange},
    clearArchiveData?: () => void,
    setIsHoveringCategory: (val: string, pathOfIds: Array<number>) => {val: string, pathOfIds: Array<number>}
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
