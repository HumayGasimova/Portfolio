/**
 * Constants
 */

import * as actionTypes from "../constants/actionTypes";

/**
 * Utility
 */

import * as Utility from "../utility";
import uuid from "uuid";

/**
 * Initial State
 */

export const initialState = {
    items: [],
    postBlogContent: {
        item: {},
        loading: false,
        error: null,
    },
    navigation: {
        items: [],
        loading: false,
        error: null,
    },
    recentPosts: {
        items: [],
        loading: false,
        error: null,
    },
    loading: false,
    error: null,
    activeItem: {
        activated: "init",
        itemKey: "",
        cardType: ""
    },
    activeCategory: {
        activated: "init",
        categoryName: ""
    },
    activeTag: {
        activated: "init",
        tagName: ""
    },
    categoriesList: [],
    tagsList: [],
    activePageId: 1,
    pagesArray: [],
    triggerCommentReplyButtonVal: false,
    commentReplyInputForm: {},
    commentsIconCicked: false
}

const fetchBlogListStandardPageDataBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchBlogListStandardPageDataSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchBlogListStandardPageDataFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const fetchPostBlogDataBegin = (state, action) => {
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            loading: true,
            error: null
        }
    };
}

const fetchPostBlogDataSuccess = (state, action) => {    
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            loading: false,
            item: action.obj
        }
    };
}

const fetchPostBlogDataFailur = (state, action) => {
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            loading: false,
            error: action.err,
            item: {}
        }
    };
}

const fetchBlogNavigationForBlogListStandardPageDataBegin = (state, action) => {
    return {
        ...state,
        navigation: {
            ...state.navigation,
            loading: true,
            error: null
        }
    };
}

const fetchBlogNavigationForBlogListStandardPageDataSuccess = (state, action) => {    
    return {
        ...state,
        navigation: {
            ...state.navigation, 
            loading: false,
            items: action.array
        }
    };
}

const fetchBlogNavigationForBlogListStandardPageDataFailur = (state, action) => {
    return {
        ...state,
        navigation: {
            ...state.navigation, 
            loading: false,
            error: action.err,
            items: []
        }
    };
}

const fetchBlogRecentPostsForBlogListStandardPageDataBegin = (state, action) => {
    return {
        ...state,
        recentPosts: {
            ...state.recentPosts,
            loading: true,
            error: null
        }
    };
}

const fetchBlogRecentPostsForBlogListStandardPageDataSuccess = (state, action) => {    
    return {
        ...state,
        recentPosts: {
            ...state.recentPosts, 
            loading: false,
            items: action.array
        }
    };
}

const fetchBlogRecentPostsForBlogListStandardPageDataFailur = (state, action) => {
    return {
        ...state,
        recentPosts: {
            ...state.recentPosts, 
            loading: false,
            error: action.err,
            items: []
        }
    };
}

const activateListStandardBlogCategory = (state, action) => {
    let updatedActiveCategory = {
        ...state.activeCategory,
        activated: action.categoryIsActive,
        categoryName: action.categoryName
    };

    let updatedCategoriesList = [...state.categoriesList];

    updatedCategoriesList = updatedCategoriesList.map(el => {
        return {
            ...el,
            active: "off"
        }
    });

    if(!!action.categoryName){
        let category = {...updatedCategoriesList.find(item => item.key === action.categoryName), active: "on"};
        let categoryIndex = updatedCategoriesList.findIndex(item => item.key === action.categoryName);
        
        updatedCategoriesList.splice(categoryIndex, 1, category);
    }
  
    return {
        ...state,
        activeCategory: updatedActiveCategory,
        categoriesList: updatedCategoriesList
    }
} 

const activateListStandardBlogTag = (state, action) => {
    let updatedActiveTag = {
        ...state.activeTag,
        activated: action.tagIsActive,
        tagName: action.tagName
    };

    let updatedTagsList = [...state.tagsList];

    updatedTagsList = updatedTagsList.map(el => {
        return {
            ...el,
            active: "off"
        }
    });

    if(!!action.tagName){
        let tag = {...updatedTagsList.find(item => item.key === action.tagName), active: "on"};
        let tagIndex = updatedTagsList.findIndex(item => item.key === action.tagName);
        
        updatedTagsList.splice(tagIndex, 1, tag);
    }
  
    return {
        ...state,
        activeTag: updatedActiveTag,
        tagsList: updatedTagsList
    }
} 

const initCategoriesForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        categoriesList: action.array
    }
}

const initTagsForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        tagsList: action.array
    }
}

const blogListCardCategoryIsHoverForBlogListStandardPage = (state, action) => {
    let updatedItems = [...state.items];

    let card = {...updatedItems.find(item => item.key === action.cardKey)};
    let cardIndex = updatedItems.findIndex(item => item.key === action.cardKey);

    let updatedCategories = [...card.categories];
    let category = {...updatedCategories.find(item => item.key === action.categoryKey), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.key === action.categoryKey);

    updatedCategories.splice(categoryIndex, 1, category);

    card = {...card, categories: updatedCategories}
    updatedItems.splice(cardIndex, 1, card);

    return {
        ...state,
        items: updatedItems
    }
}

const blogPostSingleItemCategoryIsHoverForBlogListStandardPage = (state, action) => {
    let updatedCategories = [...state.postBlogContent.item.categories];

    let category = {...updatedCategories.find(item => item.key === action.categoryKey), isHover: action.val};
    let categoryIndex = updatedCategories.findIndex(item => item.key === action.categoryKey);

    updatedCategories.splice(categoryIndex, 1, category);
    
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            item: {
                ...state.postBlogContent.item,
                categories: updatedCategories
            }
        }
    }
}

const setSwiperStateForBlogListStandardPage = (state, action) => {

    let updatedItems = [...state.items];

    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
    };
    
    let card = updatedItems.filter(item => item.key === action.cardKey);

    if(card.length !== 0){
        card = {...card[0], swiper: updatedSwiper};
        let cardIndex = updatedItems.findIndex(item => item.key === action.cardKey);
        
        updatedItems.splice(cardIndex, 1, card);
    }
    
    return {
        ...state,
        items: updatedItems
    };
}

const setSwiperStateOfBlogPostSingleItemForBlogListStandardPage = (state, action) => {

    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
    };
    
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            item: {
                ...state.postBlogContent.item,
                swiper: updatedSwiper
            }
        }
    };
}

const initBlogPagination = (state, action) => {
    let updatedPagesArray = Utility.getArrayOfEmptyVal(action.numOfPages);
    updatedPagesArray = updatedPagesArray.map((el, i) => {
        return {
            id: i + 1,
            active: i + 1 === state.activePageId ? true : false
        }
    })

    return {
        ...state,
        pagesArray: updatedPagesArray
    };
}

const activatePageNumberForBlogListStandardPage = (state, action) => {
    let updatedPagesArray = [...state.pagesArray];
    updatedPagesArray = updatedPagesArray.map((el, i) => {
        return {
            ...el,
            active: false
        }
    })

    let page = {...updatedPagesArray.find(item => item.id === action.activePageId), active: true};
    let pageIndex = updatedPagesArray.findIndex(item => item.id === action.activePageId);

    updatedPagesArray.splice(pageIndex, 1, page);
    
    return {
        ...state,
        activePageId: action.activePageId,
        pagesArray: updatedPagesArray
    };
}

const activateListStandardBlogItem = (state, action) => {
    let updatedActiveItem = {
        ...state.activeItem,
        activated: action.itemIsActive,
        itemKey: action.itemKey,
        cardType: action.cardType,
    };

    // let updatedCategoryList = [...state.categoriesList];

    // updatedCategoryList = updatedCategoryList.map(el => {
    //     return {
    //         ...el,
    //         active: "off"
    //     }
    // })

    // let category = {...updatedCategoryList.find(item => item.key === action.categoryName), active: "on"};
    // let categoryIndex = updatedCategoryList.findIndex(item => item.key === action.categoryName);
    
    // updatedCategoryList.splice(categoryIndex, 1, category)

    return {
        ...state,
        activeItem: updatedActiveItem
    }
}

const clearBlogListSingleItemStateForBlogListStandardPage = (state, action) => {
    console.log("CLEARSTATE")
    return {
        ...state,
        postBlogContent: {
            item: {},
            loading: false,
            error: null,    
        }
    }
}

const triggerCommentReplyButtonForBlogListStandardPage = (state, action) => {

    return {
        ...state,
        triggerCommentReplyButtonVal: !state.triggerCommentReplyButtonVal
    }
}

const initInputFormOfBlogCommentReplyForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        commentReplyInputForm: action.obj
    }
}

const setInputFiledValueAndCheckValidationForBlogListStandardPage = (state, action) => {
    let updatedInputFieldObj = {...action.obj, inputsArray: [...action.obj.inputsArray]};
    let inputField = updatedInputFieldObj.inputsArray.find(x => x.id === action.inputFieldId);
    let inputFieldIndex = updatedInputFieldObj.inputsArray.findIndex(x => x.id === action.inputFieldId);
    inputField = {
        ...inputField, 
        value: action._event.target.value,
        validation: Utility.checkValidity(action._event.target.value, inputField.validation),
        touched: true
    };

    inputField = {
        ...inputField, 
        errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
        validField: Utility.checkValidityOfField(inputField.validation),
    }
   
    updatedInputFieldObj.inputsArray.splice(inputFieldIndex, 1, inputField)

    let checkIfFormIsValid = updatedInputFieldObj.inputsArray.map(el => el.validField === true);
    updatedInputFieldObj = {...updatedInputFieldObj, formIsValid: checkIfFormIsValid.every(x => x === true)};

    switch(action.formName) {
        case 'commentReplyInputForm':
            return {
                ...state,
                commentReplyInputForm: updatedInputFieldObj
            };
        default:
            return {...state}
    }
}

const replyCommentBlogListStandardPage = (state, action) => {
    let updatedReplyInputForm = {...state.commentReplyInputForm, inputsArray: [...state.commentReplyInputForm.inputsArray]};

    if(state.commentReplyInputForm.formIsValid && state.commentReplyInputForm.inputsArray){
        // info = {
        //     id: uuid(),
        //     pathOfIds: props.pathOfIdsToComment,
        //     comment: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "comment").value}`,
        //     fullName: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "fullName").value}`,
        //     email: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "email").value}`,
        //     date: Utility.getCurrentDateAndTime(),
        //     website: `${props.inputFormFieldsArray.inputsArray.find(x => x.controlName === "website").value}`,
        // }
        // updatedSingleStory.comments.push(comment);
        // updatedReplyInputForm.inputsArray = updatedReplyInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedReplyInputForm.formIsValid = false;
        updatedReplyInputForm.inputsArray = updatedReplyInputForm.inputsArray.map(el => {
            return {
                ...el, 
                value: '', 
                validField: el.validation.length !== 0 ? false : true, 
                touched: false,
                validation: el.validation.map(el2 => {
                    return{
                        ...el2,
                        valid: false
                    }
                })
            }
        });
    }else{
        updatedReplyInputForm.inputsArray = updatedReplyInputForm.inputsArray.map((el, i) => {
            if(Utility.checkValidityOfField(el.validation)){
                return {
                    ...el, 
                    touched: false,
                    errorMessage: []
                }
            }else{
                return {
                    ...el, 
                    touched: true,
                    errorMessage: ["Fill the field"]
                }
            }
        })
    }
    return {
        ...state,
        commentReplyInputForm: updatedReplyInputForm
    }; 
}

const increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage = (state, action) => {
    let updatedItems = [...state.items];
    
    let item = updatedItems.find(item => item.key === action.cardKey);

    if(!!item){
        item = {
            ...item,
           numberOfLikes: item.numberOfLikes + 1,
           userLikedThePost: true
        }
        let itemIndex = updatedItems.findIndex(item => item.key === action.cardKey);
    
        updatedItems.splice(itemIndex, 1, item);
    }

    return {
        ...state,
        items: updatedItems
    }; 
}

const decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage = (state, action) => {
    let updatedItems = [...state.items];

    let item = updatedItems.find(item => item.key === action.cardKey);

    if(!!item){
        item = {
            ...item,
           numberOfLikes: item.numberOfLikes - 1,
           userLikedThePost: false
        }
        let itemIndex = updatedItems.findIndex(item => item.key === action.cardKey);
    
        updatedItems.splice(itemIndex, 1, item);
    }

    return {
        ...state,
        items: updatedItems
    }; 
}

const increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage = (state, action) => {
    let updatedItem = {
        ...state.postBlogContent.item,
        numberOfLikes: state.postBlogContent.item.numberOfLikes + 1,
        userLikedThePost: true
    };

    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            item: updatedItem
        }
    }; 
}

const decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage = (state, action) => {
    let updatedItem = {
        ...state.postBlogContent.item,
        numberOfLikes: state.postBlogContent.item.numberOfLikes - 1,
        userLikedThePost: false
    };
    
    return {
        ...state,
        postBlogContent: {
            ...state.postBlogContent,
            item: updatedItem
        }
    }; 
}

const setCommentsButtonClickedStateForBlogListStandardPage = (state, action) => {
    return {
        ...state,
        commentsIconCicked: action.val
    }; 
}

const activateRecentPostForBlogListStandardPage = (state, action) => {
    let updatedRecentPosts = [...state.recentPosts.items];
    let recentPost;
    let recentPostIndex;

    updatedRecentPosts = updatedRecentPosts.map(el => {
        return({
            ...el,
            active: false
        })
    });

    if(action.postKey){
        recentPost = {...updatedRecentPosts.find(item => item.key === action.postKey), active: action.val};
        recentPostIndex = updatedRecentPosts.findIndex(item => item.key === action.postKey);

        updatedRecentPosts.splice(recentPostIndex, 1, recentPost);
    }else if(action.postPath){
        recentPost = updatedRecentPosts.find(item => item.path === action.postPath);

        if(!!recentPost){
            recentPost = {...recentPost, active: action.val};
            recentPostIndex = updatedRecentPosts.findIndex(item => item.path === action.postPath);

            updatedRecentPosts.splice(recentPostIndex, 1, recentPost);
        }
    }
   
    return {
        ...state,
        recentPosts: {
            ...state.recentPosts,
            items: updatedRecentPosts
        }
    }; 
}

const blogListStandardPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ACTIVATE_LIST_STANDARD_BLOG_CATEGORY:
            return activateListStandardBlogCategory (state, action);
        case actionTypes.ACTIVATE_LIST_STANDARD_BLOG_TAG:
            return activateListStandardBlogTag (state, action);
        case actionTypes.INIT_CATEGORIES_FOR_BLOG_LISTS_STANDARD_PAGE:
            return initCategoriesForBlogListStandardPage (state, action);
        case actionTypes.INIT_TAGS_FOR_BLOG_LISTS_STANDARD_PAGE:
            return initTagsForBlogListStandardPage (state, action);
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN:
            return fetchBlogListStandardPageDataBegin (state, action);
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS:
            return fetchBlogListStandardPageDataSuccess (state, action); 
        case actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE:
            return fetchBlogListStandardPageDataFailur (state, action);
        case actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN:
            return fetchBlogNavigationForBlogListStandardPageDataBegin (state, action);
        case actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS:
            return fetchBlogNavigationForBlogListStandardPageDataSuccess (state, action); 
        case actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE:
            return fetchBlogNavigationForBlogListStandardPageDataFailur (state, action);
        case actionTypes.FETCH_BLOG_RECENT_POSTS_FOR_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN:
            return fetchBlogRecentPostsForBlogListStandardPageDataBegin (state, action);
        case actionTypes.FETCH_BLOG_RECENT_POSTS_FOR_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS:
            return fetchBlogRecentPostsForBlogListStandardPageDataSuccess (state, action); 
        case actionTypes.FETCH_BLOG_RECENT_POSTS_FOR_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE:
            return fetchBlogRecentPostsForBlogListStandardPageDataFailur (state, action);
        case actionTypes.FETCH_POST_BLOG_DATA_BEGIN:
            return fetchPostBlogDataBegin (state, action);
        case actionTypes.FETCH_POST_BLOG_DATA_SUCCESS:
            return fetchPostBlogDataSuccess (state, action); 
        case actionTypes.FETCH_POST_BLOG_DATA_FAILURE:
            return fetchPostBlogDataFailur (state, action);
        case actionTypes.BLOG_LIST_CARD_CATEGORY_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE:
            return blogListCardCategoryIsHoverForBlogListStandardPage(state, action);
        case actionTypes.BLOG_POST_SINGLE_ITEM_CATEGORY_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE:
            return blogPostSingleItemCategoryIsHoverForBlogListStandardPage (state, action);
        case actionTypes.SET_SWIPER_STATE_FOR_BLOG_LIST_STANDARD_PAGE:
            return setSwiperStateForBlogListStandardPage(state, action);
        case actionTypes.SET_SWIPER_STATE_OF_BLOG_POST_SINGLE_ITEM_FOR_BLOG_LIST_STANDARD_PAGE:
            return setSwiperStateOfBlogPostSingleItemForBlogListStandardPage (state, action);
        case actionTypes.INIT_BLOG_PAGINATION:
            return initBlogPagination (state, action);
        case actionTypes.ACTIVATE_PAGE_NUMBER_FOR_BLOG_LIST_STANDARD_PAGE:
            return activatePageNumberForBlogListStandardPage(state, action);
        case actionTypes.ACTIVATE_LIST_STANDARD_BLOG_ITEM:
            return activateListStandardBlogItem (state, action);
        case actionTypes.CLEAR_BLOG_LIST_SINGLE_ITEM_STATE_FOR_BLOG_LIST_STANDARD_PAGE:
            return clearBlogListSingleItemStateForBlogListStandardPage (state, action);
        case actionTypes.TRIGGER_COMMENT_REPLY_BUTTON_FOR_BLOG_LIST_STANDARD_PAGE:
            return triggerCommentReplyButtonForBlogListStandardPage (state, action);
        case actionTypes.INIT_INPUT_FORM_OF_BLOG_COMMENT_REPLY_FOR_BLOG_LIST_STANDARD_PAGE:
            return initInputFormOfBlogCommentReplyForBlogListStandardPage (state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_FOR_BLOG_LIST_STANDARD_PAGE:
            return setInputFiledValueAndCheckValidationForBlogListStandardPage (state, action);
        case actionTypes.REPLY_COMMENT_BLOG_LIST_STANDARD_PAGE:
            return replyCommentBlogListStandardPage (state, action);
        case actionTypes.INCREASE_THE_NUMBER_OF_LIKES_OF_THE_POST_CARD_FOR_BLOG_LIST_STANDARD_PAGE:
            return increaseTheNumberOfLikesOfThePostCardForBlogListStandardPage (state, action);
        case actionTypes.DECREASE_THE_NUMBER_OF_LIKES_OF_THE_POST_CARD_FOR_BLOG_LIST_STANDARD_PAGE:
            return decreaseTheNumberOfLikesOfThePostCardForBlogListStandardPage (state, action);
        case actionTypes.INCREASE_THE_NUMBER_OF_LIKES_OF_THE_POST_SINGLE_ITEM_FOR_BLOG_LIST_STANDARD_PAGE:
            return increaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage (state, action);
        case actionTypes.DECREASE_THE_NUMBER_OF_LIKES_OF_THE_POST_SINGLE_ITEM_FOR_BLOG_LIST_STANDARD_PAGE:
            return decreaseTheNumberOfLikesOfThePostSingleItemForBlogListStandardPage (state, action);
        case actionTypes.SET_COMMENTS_BUTTON_CLICKED_STATE_FOR_BLOG_LIST_STANDARD_PAGE:
            return setCommentsButtonClickedStateForBlogListStandardPage (state, action);
        case actionTypes.ACTIVATE_RECENT_POST_FOR_BLOG_LIST_STANDARD_PAGE:
            return activateRecentPostForBlogListStandardPage (state, action);
        default: 
            return state;
    }
}

export default blogListStandardPageReducer;
