import * as GeneralTypes from '../../../reducers/generalTypes';

export type PaginationProps = {
    page: string,
    pagesArray: Array<GeneralTypes.PagesArrayItem>,
    activePageNumber: number,
    fakeData?: Array<GeneralTypes.BlogListStandardPageItem>,
    filterParam?: string,
    infoFromSearch?: Info, 
    activatePageNumber: (activePageId: number) => {activePageId: number},
    fetchFakeData: (fakeData: Array<GeneralTypes.BlogListStandardPageItem>, activePageId: number , page: string | Info, optionName: string) => void,
    fetchPageData: (a: Info | number, b: number | string, c?: string) => void 
    // | (info: Info, activePageId: number) => void | 
    // (activePageId: number, page: string, category: string) => void | 
    // (activePageId: number, page: string, tag: string) => void
}

type Info = {
    id: string,
    page: string,
    searchValue: string
}
