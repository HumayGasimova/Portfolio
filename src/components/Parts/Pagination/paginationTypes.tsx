import * as GeneralTypes from '../../../reducers/generalTypes';

export type PaginationProps = {
    page: string,
    pagesArray: Array<GeneralTypes.PagesArrayItem>,
    activePageNumber: number,
    fakeData?: Array<GeneralTypes.BlogListStandardPageItem>,
    filterParam?: string,
    infoFromSearch?: GeneralTypes.SearchInfoObj, 
    activatePageNumber: (activePageId: number) => {activePageId: number},
    fetchFakeData: (fakeData: Array<GeneralTypes.BlogListStandardPageItem>, activePageId: number , page: string | GeneralTypes.SearchInfoObj, optionName: string) => void,
    fetchPageData: (a: GeneralTypes.SearchInfoObj | number, b: number | string, c?: string) => void 
    // | (info: Info, activePageId: number) => void | 
    // (activePageId: number, page: string, category: string) => void | 
    // (activePageId: number, page: string, tag: string) => void
}
