export type SimpleOverlayImageProps = {
    alt: string,
    header: string,
    id: number,
    imageKey: string,
    isHover: string,
    page: string,
    path: string,
    currentPagePathName?: string,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}
