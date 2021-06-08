/**
 * BlogListStandardPage
 */ 

export interface BlogListStandardPage {
    activeCategory: ActiveCategoryObj;
    activeItem: ActiveItemObj;
    activePageId: number;
    activeTag: ActiveTagObj;
    categoriesList: Array<CategoriesListItem>;
    commentReplyInputForm: CommentReplyInputFormObj;
    commentsIconCicked: boolean;
    error: any;
    items: Array<BlogListStandardPageItem>;
    loading: boolean;
    navigation: NavigationObj;
    pagesArray: Array<PagesArrayItem>;
    postBlogContent: PostBlogContentObj;
    recentPosts: RecentPostsObj;
    tagsList: Array<TagsListItem>;
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
    cardType: string,
    categories: Array<Categories>,
    comments: Array<Comments>,
    coverImage: CoverImageObj,
    date: string,
    header: string,
    id: number,
    key: string,
    numberOfComments: number,
    numberOfLikes: number,
    path: string,
    tags: Array<TagsItem>,
    text: string,
    userLikedThePost: boolean
}

type Categories = {
    id: number,
    isHover: string,
    key: string,
    label: string,
    path: string
}

export type Comments = {
    authorImage: AuthorImageObj,
    authorName: string,
    date: string,
    id: number,
    repliesArray: Array<Comments>,
    text: string
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
    folderName: string,
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

type PagesArrayItem = {
    id: number, 
    active: boolean
}

type PostBlogContentObj = {
    error: any,
    item: PostBlogContentItemObj,
    loading: boolean
}

type PostBlogContentItemObj = {
}

type RecentPostsObj = {
    error: any,
    item: Array<RecentPostsItem>,
    loading: boolean
}

type RecentPostsItem = {
    active: boolean,
    cardType: string,
    categories: Array<Categories>,
    comments: Array<Comments>,
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

type TagsListItem = {
    active: string,
    id: number,
    isHover: string,
    key: string,
    tagName: string
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
