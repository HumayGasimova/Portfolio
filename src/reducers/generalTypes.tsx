/**
 * BlogListStandardPage
 */ 

export interface BlogListStandardPage {
    activeCategory: ActiveCategory;
    activeItem: ActiveItem;
    activePageId: number;
    activeTag: ActiveTag;
    categoriesList: Array<CategoriesListItem>;
    commentReplyInputForm: CommentReplyInputForm;
    commentsIconCicked: boolean;
    error: any;
    items: Array<BlogListStandardPageItem>;
    loading: boolean;
    navigation: Navigation;
    pagesArray: Array<PagesArrayItem>;
    postBlogContent: PostBlogContent;
    recentPosts: RecentPosts;
    tagsList: Array<TagsListItem>;
    triggerCommentReplyButtonVal: false
}

type ActiveCategory = {
    activated: string, 
    categoryName: string
}

type ActiveItem = {
    activated: string,
    cardType: string | undefined,
    itemKey: string
}

type ActiveTag = {
    activated: string, 
    tagName: string
}

type CategoriesListItem = {
    active: string,
    categoryName: string,
    id: number,
    isHover: string,
    key: string,
}

type CommentReplyInputForm = {

}

export type BlogListStandardPageItem = {
    cardType: string,
    categories: Array<Categories>,
    comments: Array<Comments>,
    coverImage: CoverImage,
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

type Comments = {
    authorImage: AuthorImage,
    authorName: string,
    date: string,
    id: number,
    repliesArray: Array<Comments>,
    text: string
}

type AuthorImage = {
    alt: string,
    id: string,
    imageName: string,
    isHover: string,
    key: string
}

type CoverImage = {
    alt: string,
    folderName: string,
    id: number,
    imageName: string,
    isHover: string,
    key: string
}

type TagsItem = {
    id: number,
    isHover: string,
    key: string,
    path: string,
    tagName: string
}

type Navigation = {
    error: any,
    items: Array<NavigationItem>,
    loading: boolean
}

type NavigationItem = {

}

type PagesArrayItem = {
    id: number, 
    active: boolean
}

type PostBlogContent = {
    error: any,
    item: PostBlogContentItem,
    loading: boolean
}

type PostBlogContentItem = {
}

type RecentPosts = {
    error: any,
    item: Array<RecentPostsItem>,
    loading: boolean
}

type RecentPostsItem = {
    active: boolean,
    cardType: string,
    categories: Array<Categories>,
    comments: Array<Comments>,
    coverImage: CoverImage,
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
