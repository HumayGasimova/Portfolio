import * as GeneralTypes from '../../../reducers/generalTypes';

export type ProjectShowcaseItemProps = {
    component: string,
    data: ProjectShowcaseItemDataObj,
    items: Array<ProjectShowcaseItemDataObj>,
    photoViewerForProjectShowcaseItemOpen: boolean,
    photoViewerOpen: (option: string, val: boolean, array: Array<any>) => {option: string, val: boolean, array: Array<any>},
    setProjectShowcaseIsHoveringCategory: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    setProjectShowcaseIsHoveringTag: (val: string, key: string, id: number) => {val: string, key: string, id: number},
    updateAnimation: (key: string, val: boolean) => {key: string, val: boolean},
    updateStyleValues: (key: string, obj: ProjectShowcaseItemDataStyleObj) => {key: string, obj: ProjectShowcaseItemDataStyleObj}
}

export type ProjectShowcaseItemDataObj = {
    backgroundImage: ProjectShowcaseBackgroundImageObj,
    categories: Array<GeneralTypes.CategoriesItem>,
    date: string,
    header: string,
    id: number,
    imagesArray: Array<GeneralTypes.ImagesArrayItem>,
    key: string,
    tags: Array<GeneralTypes.TagsItem>,
    text: string
}

type ProjectShowcaseBackgroundImageObj = {
    animation: boolean,
    id: number,
    imageName: string,
    key: string,
    style: ProjectShowcaseItemDataStyleObj
}

type ProjectShowcaseItemDataStyleObj = {
    rendered: boolean,
    transition: number,
    width: number
}