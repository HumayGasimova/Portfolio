export type ButtonsPageCardItemProps = {
    currentPagePathName: string,
    data: ButtonsPageCardItemDataObj,
    page: string,
    setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => {val: boolean, path: string, prevPage: string},
    unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => {repeatedKey: string, repeatedPath: string, page: string, button: number}
}

type ButtonsPageCardItemDataObj = {
    buttonType: string,
    buttonText: string | null,
    header: string,
    id: number,
    key: string,
    text: string
}
