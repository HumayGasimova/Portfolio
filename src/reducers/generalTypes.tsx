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
    text: PostBlogContentItemObjText | string,
    userLikedThePost: boolean,
    imagesArray?: Array<ImagesArrayItem>,
    swiper?: SwiperObj,
    linkText?: string,
    quoteText?: string,
    quoteAuthor?: string,
    audioKey?: string,
    videoKey?: string,
    loading?: boolean,
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
    id: number,
    key: string,
    isHover?: string,
    imageName: string,
    folderName?: string,
    alt: string
}

type AuthorImageObj = {
    alt: string,
    id: string,
    imageName: string,
    isHover: string,
    key: string
}

type CoverImageObj = {
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

type PostBlogContentObj = {
    error: any,
    item: BlogListStandardPageItem,
    loading: boolean
}

type PostBlogContentItemObjText = {
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
    required: boolean,
    valid: boolean
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
    item: PortfoliItemObj,
    loading: boolean,
    swiper?: SwiperObj
}

export type PortfoliItemObj = {
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
    items: Array<ColumnsPageObjItem>,
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

export type ColumnsPageObjItem = {
    arrowIsHovering: string,
    categories: Array<CategoriesItem>,
    coverImage?: CoverImageObj,
    header?: string,
    id: number,
    key: string,
    option: string,
    path: string,
    portfolioType: string,
    pictures?: Array<ImagesArrayItem>
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
    items: Array<ColumnsPageObjItem>,
    loading: boolean,
}

export type ItemsCoordinateRange = {
    bottomCoordinate: number,
    id: number,
    leftCoordinate: number,
    rightCoordinate: number,
    topCoordinate: number,
    updated: boolean,
    width: number
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

type MenuItemsArrayItem = {
    id: number,
    text: string,
    itemId: string,
    path: string,
    active: boolean,
    isHover: string,
    subOptions: Array<MenuItemsArrayItem>
}
