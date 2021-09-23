import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

/**
 * BlogListStandardPage
 */ 

export type BlogListStandardPage = {
    activeCategory: ActiveCategoryObj,
    activeItem: ActiveItemObj,
    activePageId: number,
    activeTag: ActiveTagObj,
    categoriesList: Array<CategoriesListItem>,
    commentReplyInputForm: CommentReplyInputFormObj,
    commentsIconCicked: boolean,
    error: any,
    items: Array<BlogListStandardPageItem>,
    loading: boolean,
    navigation: NavigationObj,
    pagesArray: Array<PagesArrayItem>,
    postBlogContent: PostBlogContentObj,
    recentPosts: RecentPostsObj,
    tagsList: Array<TagsItem>,
    triggerCommentReplyButtonVal: false
}

type ActiveCategoryObj = {
    activated: string, 
    categoryName: string
}

type ActiveItemObj = {
    activated: string,
    cardType: string | undefined,
    itemKey: string
}

type ActiveTagObj = {
    activated: string, 
    tagName: string
}

export type CategoriesListItem = {
    active: string,
    categoryName: string,
    id: number,
    isHover: string,
    key: string,
}

type CommentReplyInputFormObj = {

}

export type BlogListStandardPageItem = {
    cardId?: string,
    cardType: string,
    categories: Array<CategoriesItem>,
    comments: Array<CommentsItem>,
    coverImage: CoverImageObj,
    date: string,
    header: string,
    id: number,
    key: string,
    numberOfComments: number,
    numberOfLikes: number,
    path: string,
    tags: Array<TagsItem>,
    text: Array<PostBlogContentItemObjText> | string,
    userLikedThePost: boolean,
    imagesArray?: Array<ImagesArrayItem>,
    swiper?: SwiperObj,
    linkText?: string,
    quoteText?: string,
    quoteAuthor?: string,
    audioKey?: string,
    videoKey?: string,
    loading?: boolean,
    active?: boolean
}

export type CategoriesItem = {
    id: number,
    isHover: string,
    key: string,
    label: string,
    path?: string,
    active?: boolean
}

export type SwiperObj = {
    slides: Array<any>,
    _slides: Array<any>,
    activeIndex: number,
    translate: number,
    transition: number,
    rerender: boolean
}

export type CommentsItem = {
    authorImage: AuthorImageObj,
    authorName: string,
    date: string,
    id: number | string,
    repliesArray: Array<CommentsItem>,
    text: string
}

export type ImagesArrayItem = {
    id?: number,
    key: string,
    isHover?: string,
    imageName?: string,
    folderName?: string,
    alt?: string
}

type AuthorImageObj = {
    alt: string,
    id: string,
    imageName: string,
    isHover: string,
    key: string
}

export type CoverImageObj = {
    alt: string,
    folderName?: string,
    id: number,
    imageName: string,
    isHover: string,
    key: string
}

export type TagsItem = {
    id: number,
    isHover: string,
    key: string,
    path?: string,
    tagName: string,
    active?: string
}

type NavigationObj = {
    error: any,
    items: Array<NavigationItemObj>,
    loading: boolean
}

type NavigationItemObj = {

}

export type PagesArrayItem = {
    id: number, 
    active: boolean
}

export type PostBlogContentObj = {
    error: any,
    item: BlogListStandardPageItem,
    loading: boolean
}

export type PostBlogContentItemObjText = {
    textPart: string,
    type: string
}

type RecentPostsObj = {
    error: any,
    item: Array<RecentPostsItem>,
    loading: boolean
}

type RecentPostsItem = {
    active: boolean,
    cardType: string,
    categories: Array<CategoriesItem>,
    comments: Array<CommentsItem>,
    coverImage: CoverImageObj,
    date: string,
    header: string,
    id: number,
    key: string,
    linkText: string,
    numberOfComments: number,
    numberOfLikes: number,
    path: string,
    text: string,
    userLikedThePost: boolean
}

/**
 * Input Form
 */ 

export type InputForm = {
    formIsValid: boolean,
    inputsArray: Array<InputsArrayItem>
}

type InputsArrayItem = {
    id: number,
    inputFieldName: string,
    elementType: string,
    elementConfig: ElementConfigObj,
    value: string,
    validation?: Array<ValidationItem>,
    validField: boolean,
    touched: boolean,
    errorMessage: Array<any>,
    type: string,
    inputID: string,
    controlName: string
}

type ElementConfigObj = {
    type?: string,
    placeholder?: string,
    options?: Array<any>,
    rows?: string
}

type ValidationItem = {
    required?: boolean,
    valid?: boolean,
    isEmail?: boolean
}

/**
 * Archive Obj
 */ 

export type ArchiveObj = {
    category: string | null,
    disableLoadMoreButton: boolean,
    error: any,
    errorMoreData: any,
    items: Array<ArchiveItem>,
    loading: boolean,
    loadingMoreData: boolean
}

export type ArchiveItem = {
    categories: Array<CategoriesItem>,
    coverImage: CoverImageObj,
    header: string,
    id: number,
    key: string,
    path: string
}

/**
 * Portfolio Obj
 */ 

export type PortfoliObj = {
    error: any,
    item: PortfolioItemObj,
    loading: boolean,
    swiper?: SwiperObj
}

export type PortfolioItemObj = {
    categories: Array<CategoriesItem>,
    date: string,
    header: string,
    id: number,
    imagesArray: Array<ImagesArrayItem>
    key: string,
    tags: Array<TagsItem>
    text: string
}

/**
 * Columns Page Obj
 */ 

export type ColumnsPageObj = {
    arrayOfDisappearAndAppearElements: Array<ArrayOfDisappearAndAppearElementsItem>,
    categories: Array<CategoriesItem>,
    disableLoadMoreButton: boolean,
    error: any,
    errorMoreData: any,
    items: Array<BannerItemObj>,
    itemsStyleValues: ItemsStyleValuesObj
    itemsTopPosition: Array<ItemsTopPositionItem>
    loadMoreStep: number,
    loading: boolean,
    loadingMoreData: boolean
}

type ArrayOfDisappearAndAppearElementsItem= {
    id: number,
    disappear: boolean
}

export type ItemsStyleValuesObj = {
    rendered: boolean,
    scale?: number,
    transition?: number,
    translateX?: number,
    translateY?: number,
    width?: number,
    zIndex?: number,
    height?: number
}

export type ItemsTopPositionItem = {
    id: string,
    key: string,
    topPosition: number
}

/**
 * Columns Wide Page Obj
 */ 

export type ColumnsWidePageObj = {
    error: any,
    items: Array<BannerItemObj>,
    loading: boolean,
}

export type ItemsCoordinateRange = {
    bottomCoordinate?: number,
    id: number,
    leftCoordinate?: number,
    rightCoordinate?: number,
    topCoordinate?: number,
    updated: boolean,
    width?: number,
    key?: string
}

/**
 * Unmount component
 */

export type UnmountComponent = {
    gotoPage: string,
    prevPage: string | undefined,
    state: boolean
}

/**
 * Menu Items
 */

export type MenuItemsItem = {
    id: number,
    text: string,
    itemId: string,
    path: string | null,
    active: boolean,
    isHover: string,
    hasSubOptions: boolean,
    options: Array<OptionsItem>,
    length?: number
}

export type OptionsItem = {
    id: number,
    active: boolean,
    header: string | null,
    itemId: string | null,
    array: Array<MenuItemsArrayItem>
}

export type MenuItemsArrayItem = {
    id: number,
    text: string,
    itemId: string,
    path: string,
    active: boolean,
    isHover: string,
    subOptions: Array<MenuItemsArrayItem>
}

/**
 * Post Blog Data
 */

export type PostBlogData = {
    id: string,
    pathOfIds: Array<number | string>,
    comment: string,
    fullName: string,
    email: string,
    date: string,
    website: string
}

/**
 * SearchThroughWebsite
 */

export type SearchThroughWebsiteObj = {
    searchInfo: SearchInfoObj,
    searchResult: SearchResultObj
}

export type SearchInfoObj = {
    id: string,
    page: string,
    searchValue: string
}

type SearchResultObj = {
    numberOfPages: number,
    searchResultData: Array<BlogListStandardPageItem>
}

/**
 * Portfolio Item Obj
 */



/**
 * CoordinateRangeObj
 */

export type CoordinateRangeObj = {
    id: number,
    topCoordinate: number,
    bottomCoordinate: number,
    leftCoordinate: number,
    rightCoordinate: number,
    width: number,
    updated: boolean
}

/**
 * SearchResultPage
 */

export type SearchResultPageState = {
    searchInputForm: InputForm,
    searchInputFormResponse: SearchInputFormResponseObj,
    activePageId: number,
    pagesArray: Array<PagesArrayItem>,
}


export type SearchInputFormResponseObj = {
    error: any,
    item: SearchThroughWebsiteObj,
    loading: boolean,
}

/**
 * MenuDostsState
 */

export type MenuDotsStateObj = {
    page: string,
    state: string,
}

/**
 * PortfolioGalleryPage state
 */

export type PortfolioGalleryPageState = {
    items: Array<BannerItemObj>,
    loading: boolean,
    error: any,
    itemsCoordinateRange: Array<ItemsCoordinateRange>
}

/**
 * AccordionsPage state
 */

export type AccordionsPageState = {
    section1Data: Section1DataObj,
    section2Data: Section2DataObj
}

type Section1DataObj = {
    itemsLeftColumn: Array<AccordionItemObj>,
    itemsRightColumn: Array<AccordionItemObj>,
    loading: boolean,
    error: any
}

type Section2DataObj = {
    items: Array<AccordionItemObj>,
    loading: boolean,
    error: any
}

export type AccordionItemObj = {
    active: string,
    header: string,
    id: number,
    key: string,
    text: string,
    isHover?: string
}

/**
 * BannerPage state
 */

export type BannerPageState = {
    section1Data: BannerPageSectionObj,
    section2Data: BannerPageSectionObj,
    section3Data: BannerPageSectionObj,
    section4Data: BannerPageSectionObj,
    section5Data: BannerPageSectionObj,
    section6Data: BannerPageSectionObj,
    section7Data: BannerPageSectionObj,
    section8Data: BannerPageSectionObj
}

type BannerPageSectionObj = {
    items: Array<BannerItemObj>,
    loading: boolean,
    error: any
}

export type BannerItemObj = {
    id: number,
    key: string,
    path: string,
    header?: string,
    coverImage?: CoverImageObj,
    active?: string,
    text?: string,
    isHover?: string,
    curtainBackgroundColor?: string,
    headerColor?: string,
    textColor?: string,
    arrowIsHovering?: string,
    categories?: Array<CategoriesItem>,
    option?: string,
    portfolioType?: string,
    pictures?: Array<ImagesArrayItem>,
    alt?: string,
}

/**
 * BlockquotePage state
 */

export type BlockquotePageState= {
    items: Array<BlockquoteItem>,
    loading: boolean,
    error: any,
}

export type BlockquoteItem = {
    blockquote: string,
    id: number,
    key: string,
    text: string
}

/**
 * ButtonsPage state
 */

export type ButtonsPageState= {
    section1Data: ButtonsPageSectionObj,
    section2Data: ButtonsPageSectionObj
}

export type ButtonsPageSectionObj = {
    items: Array<ButtonsItemObj>,
    loading: boolean,
    error: any
}

export type ButtonsItemObj = {
    buttonText: string
    buttonType: string,
    header: string,
    id: number,
    key: string,
    text: string
}

/**
 * ClientsPage state
 */

export type ClientsPageState = {
    section1Data: ClientsPageSectionDataObj,
    section2Data: ClientsPageSectionDataObj
}

export type ClientsPageSectionDataObj = {
    swiper1: ClientsPageSectionSwiperDataObj,
    swiper2: ClientsPageSectionSwiperDataObj
}

export type ClientsPageSectionSwiperDataObj = {
    items: Array<ClientsSectionSwiperItem>,
    loading: boolean,
    error: any,
    swiper: SwiperObj
}

export type ClientsSectionSwiperItem = {
    id: number,
    imageName: string,
    isHover: string,
    key: string
}

/**
 * ColumnsPage state
 */

export type ColumnsPageState = {
    items: Array<ColumnsPageItem>,
    loading: boolean,
    error: any,
}

export type ColumnsPageItem = {
    data: Array<ColumnsPageDataItem>
    header: string,
    id: number,
    key: string,
}

export type ColumnsPageDataItem = {
    columnWidth: number,
    id: number,
    text: string
}

/**
 * ContactFormPage state
 */

export type ContactFormPageState = {
    section1: ContactFormPageSection1,
    section2: ContactFormPageSection2, 
    section3: ContactFormPageSection3
}

type ContactFormPageSection1 = {
    inputForm: InputForm,
    getDirectionResponse: DirectionResponseObj
}

type ContactFormPageSection2 = {
    inputForm: InputForm,
    subscribeResponse: SubscribeResponseObj
}

type ContactFormPageSection3 = {
    inputForm: InputForm,
    submitResponse: SubmitResponseObj   
}

type DirectionResponseObj = {
    item: DirectionResponseItemObj,
    loading: boolean,
    error: any
}

export type DirectionResponseItemObj = {
    company: string,
    email: string,
    fullName: string,
    id: string,
    phone: string
}

type SubscribeResponseObj = {
    item: SubscribeResponseItemObj,
    loading: boolean,
    error: any
}

export type SubscribeResponseItemObj = {
    config: AxiosRequestConfig,
    data: SubscribeResponseItemDataObj,
    headers: any,
    request: any
    status: number,
    statusText: string
}

type SubscribeResponseItemDataObj = {
    id: string,
    email: string,
}

type SubmitResponseObj = {
    item: SubmitResponseItemObj,
    loading: boolean,
    error: any
}

export type SubmitResponseItemObj = {
    id: string,
    email: string
}

/**
 * CountdownPage state
 */

export type CountdownPageState = {
    section1Data: CountdownPageSectionObj,
    section2Data: CountdownPageSectionObj
}
 
export type CountdownPageSectionObj = {
    items: Array<CountdownPageSectionItem>,
    loading: boolean,
    error: any
}

export type CountdownPageSectionItem = {
    id: number,
    key: string,
    countdownValue: Array<CountdownValueItem>,
    startDate: CountdownPageDateObj,
    endDate: CountdownPageDateObj,
    nextMonth: CountdownPageNextMonthObj    
}

type CountdownValueItem = {
    id: number,
    key: string
    name: string
    val: number
}

export type CountdownPageDateObj = {
    day: string,
    month: string,
    year: string
}

export type CountdownPageNextMonthObj = {
    month: string,
    leapYear: boolean   
}
