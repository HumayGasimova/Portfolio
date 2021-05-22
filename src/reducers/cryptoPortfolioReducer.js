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
    menuItems: [],
    menuFullscreenItems: [],
    photoViewerForPictureBoardTextItemOpen: false,
    photoViewerForBigImagesOpen: false,
    photoViewerForBigSliderOpen: false,
    photoViewerForSmallImagesOpen: false,
    photoViewerForSmallSliderOpen: false,
    photoViewerForGalleryOpen: false,
    photoViewerForSmallGalleryOpen: false,
    photoViewerForPortfolioProjectShowcaseOpen: false,
    photoViewerForBlogListStandardPageOpen: false,
    photoViewerImagesArray: [],
    // swiper: {
    //     slides: [],
    //     _slides: [],
    //     activeIndex: 0,
    //     translate: 0,
    //     transition: 0.45,
    //     rerender: false
    // },
    // itemsCoordinateRange: {
    //     id: 1,
    //     updated: false
    // },
    sidebarState: "init",
    unmountComponent: {
        state: false,
        gotoPage: '',
        prevPage: ''
    },
    menuDotsState: {
        page: "",
        state: "init"
    },
    historyPopFromItem: "scrollToTop",
    showBackToTop: false,
    fullScreenState: false
}

const initMenuItems = (state, action) => {
    return {
        ...state,
        menuItems: action.array,
    };
}

const initMenuFullscreenItems = (state, action) => {
    return {
        ...state,
        menuFullscreenItems: action.array,
    };
}


const photoViewerOpen = (state, action) => {    
    switch(action.option){
        case 'pictureBoardForTextItem':
            return {
                ...state,
                photoViewerForPictureBoardTextItemOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'bigImages':
            return {
                ...state,
                photoViewerForBigImagesOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'bigSlider':
            return {
                ...state,
                photoViewerForBigSliderOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallImages':
            return {
                ...state,
                photoViewerForSmallImagesOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallSlider':
            return {
                ...state,
                photoViewerForSmallSliderOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'gallery':
            return {
                ...state,
                photoViewerForGalleryOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'smallGallery':
            return {
                ...state,
                photoViewerForSmallGalleryOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'portfolioProjectShowcase':
            return {
                ...state,
                photoViewerForPortfolioProjectShowcaseOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'blogListStandardPage':
            return {
                ...state,
                photoViewerForBlogListStandardPageOpen: action.val,
                photoViewerImagesArray: action.array
            };
        case 'all':
            return {
                ...state,
                photoViewerForPictureBoardTextItemOpen: action.val,
                photoViewerForBigImagesOpen: action.val,
                photoViewerForBigSliderOpen: action.val,
                photoViewerForSmallImagesOpen: action.val,
                photoViewerForSmallSliderOpen: action.val,
                photoViewerForGalleryOpen: action.val,
                photoViewerForSmallGalleryOpen: action.val,
                photoViewerForPortfolioProjectShowcaseOpen: action.val,
                photoViewerForBlogListStandardPageOpen: action.val,
                photoViewerImagesArray: action.array
            }
        default:
            return state;
    }
}

const prevImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let lastImage = updatedPhotoViewerImagesArray[updatedPhotoViewerImagesArray.length - 1];
    updatedPhotoViewerImagesArray.pop();
    updatedPhotoViewerImagesArray.unshift(lastImage);

    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const nextImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let currentImage = updatedPhotoViewerImagesArray[0];
    updatedPhotoViewerImagesArray.shift();
    updatedPhotoViewerImagesArray.push(currentImage);
    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const setIsHoveringMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    if(action.val === "on"){
        let toolbarItem = {...updatedMenuItems.find(item => item.id === action.id), isHover: action.val};
        let itemIndex = updatedMenuItems.findIndex(item => item.id === action.id);
        updatedMenuItems.splice(itemIndex, 1, toolbarItem);
    }else{
        updatedMenuItems = updatedMenuItems.map(el => {
            return{
                ...el,
                isHover: action.val
            }
        });

        updatedMenuItems.map((el, i) => {
            updatedMenuItems[i].options.map((el2, i2) => {
                updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                    updatedMenuItems[i].options[i2].array[i3].isHover = "init";
                    updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                        updatedMenuItems[i].options[i2].array[i3].subOptions[i4].isHover = "init";
                    })
                })
            })
        })
        // console.log(updatedMenuItems)
    }
    return {
        ...state,
        menuItems: updatedMenuItems,
    };
}

const setIsHoveringToolbarOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    
    if(action.val === "on"){
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);
    }else{
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);

            updatedMenuItems.map((el, i) => {
                updatedMenuItems[i].options.map((el2, i2) => {
                    updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                        // updatedMenuItems[i].options[i2].array[i3].isHover = "init";
                        updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                            updatedMenuItems[i].options[i2].array[i3].subOptions[i4].isHover = "init";
                        })
                    })
                })
            })
    }
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setIsHoveringToolbarSubOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // console.log(action.pathOfIds)
    if(action.val === "on"){
        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .find(item => item.id === action.pathOfIds[2]),
            isHover: action.val
        }
        
        let subOptionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }else{
        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .find(item => item.id === action.pathOfIds[2]),
            isHover: action.val
        }

        let subOptionItemIndex = updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.isHover === "on").options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setIsHoveringMenuFullscreenItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
    
    let item = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.id),
        isHover: action.val
    }

    let itemIndex = updatedMenuFullscreenItems.findIndex(item => item.id === action.id);
    updatedMenuFullscreenItems.splice(itemIndex, 1, item);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setActivityOfToolbarOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // let previouslyActiveToolbarItemId = updatedMenuItems.find(item => item.active === true).id;
    // let previouslyActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.active === true);
    let hoveredToolbarItemId = updatedMenuItems.find(item => item.isHover === "on").id;
    // if(previouslyActiveToolbarItemId !== hoveredToolbarItemId){
    //     let objPrevActiveToolbarItem = {...updatedMenuItems.find(item => item.id === previouslyActiveToolbarItemId), active: false};
    //     let objPrevActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === previouslyActiveToolbarItemId);
    //     updatedMenuItems.splice(objPrevActiveToolbarItemIndex, 1, objPrevActiveToolbarItem);
        

    // updatedMenuItems.map((el, i) => {
    //     updatedMenuItems[i].active = false;
    //     updatedMenuItems[i].options.map((el2, i2) => {
    //         updatedMenuItems[i].options[i2].active = false;
    //         updatedMenuItems[i].options[i2].array.map((el3, i3) => {
    //             updatedMenuItems[i].options[i2].array[i3].active = false;
    //             updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
    //                 updatedMenuItems[i].options[i2].array[i3].subOptions[i4].active = false;
    //             })
    //         })
    //     })
    // })

    let objNewActiveToolbarItem = {...updatedMenuItems.find(item => item.id === hoveredToolbarItemId), active: true};
    let objNewActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === hoveredToolbarItemId);
    updatedMenuItems.splice(objNewActiveToolbarItemIndex, 1, objNewActiveToolbarItem);
        
    let optionObj = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]),
        active: true
    }

    let optionObjIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .findIndex(item => item.id === action.pathOfIds[0]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .splice(optionObjIndex, 1, optionObj);

    let optionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]),
        active: true
    }

    let optionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .findIndex(item => item.id === action.pathOfIds[1]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .splice(optionItemIndex, 1, optionItem);

    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setActivityOfToolbarSubOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    // let previouslyActiveToolbarItemId = updatedMenuItems.find(item => item.active === true).id;
    // let previouslyActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.active === true);
    let hoveredToolbarItemId = updatedMenuItems.find(item => item.isHover === "on").id;
    // if(previouslyActiveToolbarItemId !== hoveredToolbarItemId){
    //     let objPrevActiveToolbarItem = {...updatedMenuItems.find(item => item.id === previouslyActiveToolbarItemId), active: false};
    //     let objPrevActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === previouslyActiveToolbarItemId);
    //     updatedMenuItems.splice(objPrevActiveToolbarItemIndex, 1, objPrevActiveToolbarItem);

    // updatedMenuItems.map((el, i) => {
    //     updatedMenuItems[i].active = false;
    //     updatedMenuItems[i].options.map((el2, i2) => {
    //         updatedMenuItems[i].options[i2].active = false;
    //         updatedMenuItems[i].options[i2].array.map((el3, i3) => {
    //             updatedMenuItems[i].options[i2].array[i3].active = false;
    //             updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
    //                 updatedMenuItems[i].options[i2].array[i3].subOptions[i4].active = false;
    //             })
    //         })
    //     })
    // })

    let objNewActiveToolbarItem = {...updatedMenuItems.find(item => item.id === hoveredToolbarItemId), active: true};
    let objNewActiveToolbarItemIndex = updatedMenuItems.findIndex(item => item.id === hoveredToolbarItemId);
    updatedMenuItems.splice(objNewActiveToolbarItemIndex, 1, objNewActiveToolbarItem);
    // }

    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         return{
    //             ...el2,
    //             active: false
    //         }
    //     })
    // })
    
    // updatedMenuItems[previouslyActiveToolbarItemIndex].options.map((el, i) => {
    //     updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array.map((el2, i2) => {
    //         updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions = updatedMenuItems[previouslyActiveToolbarItemIndex].options[i].array[i2].subOptions.map((el3, i3) => {
    //             return{
    //                 ...el3,
    //                 active: false
    //             }
    //         })
    //     })
    // })

    let optionObj = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]),
        active: true
    }

    let optionObjIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .findIndex(item => item.id === action.pathOfIds[0]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .splice(optionObjIndex, 1, optionObj);

    let optionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]),
        active: true
    }
    
    let optionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .findIndex(item => item.id === action.pathOfIds[1]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .splice(optionItemIndex, 1, optionItem);
    
    let subOptionItem = {
        ...updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .find(item => item.id === action.pathOfIds[2]),
        active: true
    }
    
    let subOptionItemIndex = updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .findIndex(item => item.id === action.pathOfIds[2]);
        
    updatedMenuItems
        .find(item => item.isHover === "on").options
        .find(item => item.id === action.pathOfIds[0]).array
        .find(item => item.id === action.pathOfIds[1]).subOptions
        .splice(subOptionItemIndex, 1, subOptionItem);
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setActivityOfMenuFullscreenItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
    
    updatedMenuFullscreenItems = updatedMenuFullscreenItems.map((el, i) => {
        return {
            ...el,
            active: false
        }
    })
    
    let item = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.id),
        active: action.val
    }

    let itemIndex = updatedMenuFullscreenItems.findIndex(item => item.id === action.id);
    updatedMenuFullscreenItems.splice(itemIndex, 1, item);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setIsHoveringMenuFullscreenOptionItem = (state, action) => {
    let updatedMenuFullscreenItems = [...state.menuFullscreenItems];
console.log(action.pathOfIds)
    let optionItem = {
        ...updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .find(item => item.id === action.pathOfIds[2]),
        isHover: action.val
    }
    
    let optionItemIndex = updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .findIndex(item => item.id === action.pathOfIds[2]);
        
    updatedMenuFullscreenItems
        .find(item => item.id === action.pathOfIds[0]).options
        .find(item => item.id === action.pathOfIds[1]).array
        .splice(optionItemIndex, 1, optionItem);

    return {
        ...state,
        menuFullscreenItems: updatedMenuFullscreenItems
    };
}

const setSidebarState = (state, action) => {
    return {
        ...state,
        sidebarState: action.val
    };
}

const activateMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];

    if(action.pathOfIds.length === 3){
        let item = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]),
            active: true
        }
    
        let itemIndex = updatedMenuItems
            .findIndex(item => item.id === action.pathOfIds[0]);
            
        updatedMenuItems
            .splice(itemIndex, 1, item);

        let optionObj = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]),
            active: true
        }
        
        let optionObjIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .splice(optionObjIndex, 1, optionObj);

        let optionItem = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]),
            active: true
        }
        
        let optionItemIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .splice(optionItemIndex, 1, optionItem);
    }
    
    if(action.pathOfIds.length === 4){
        let item = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]),
            active: true
        }
        
        let itemIndex = updatedMenuItems
            .findIndex(item => item.id === action.pathOfIds[0]);
            
        updatedMenuItems
            .splice(itemIndex, 1, item);
        
        let optionObj = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]),
            active: true
        }
        
        let optionObjIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .splice(optionObjIndex, 1, optionObj);

        let optionItem = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]),
            active: true
        }
        
        let optionItemIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .findIndex(item => item.id === action.pathOfIds[2]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .splice(optionItemIndex, 1, optionItem);

        let subOptionItem = {
            ...updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .find(item => item.id === action.pathOfIds[3]),
            active: true
        }
        
        let subOptionItemIndex = updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .findIndex(item => item.id === action.pathOfIds[3]);
            
        updatedMenuItems
            .find(item => item.id === action.pathOfIds[0]).options
            .find(item => item.id === action.pathOfIds[1]).array
            .find(item => item.id === action.pathOfIds[2]).subOptions
            .splice(subOptionItemIndex, 1, subOptionItem);
    }
   
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const clearActivityOfMenuItems = (state, action) => {
    let updatedMenuItems = [...state.menuItems];

    let activeItemPath = action.prevLocationPathOfIds ? action.prevLocationPathOfIds : [];

    if(activeItemPath.length === 0){
        updatedMenuItems.map((el, i) => {
            if(el.active === true){
                activeItemPath.push(el.id);
                updatedMenuItems[i].options.map((el2, i2) => {
                    if(el2.active === true){
                        activeItemPath.push(el2.id);
                        updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                            if(el3.active === true){
                                activeItemPath.push(el3.id);
                                updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                                    if(el4.active === true){
                                        activeItemPath.push(el4.id);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    }
    
    if(activeItemPath.length !== 0){
        let item = updatedMenuItems.filter(item => item.id === +activeItemPath[0]);
        if(item.length !== 0){
            let itemIndex = updatedMenuItems.findIndex(item => item.id === +activeItemPath[0]);
            item = {...item[0], active: false}
        
            updatedMenuItems.splice(itemIndex, 1, item);
          
        }
        let item2 = item.options.filter(item => item.id === +activeItemPath[1]);
        if(item2.length !== 0){
            let itemIndex2 = item.options.findIndex(item => item.id === +activeItemPath[1]);
            item2 = {...item2[0], active: false}
        
            item.options.splice(itemIndex2, 1, item2);
        }
        let item3 = item2.array.filter(item => item.id === +activeItemPath[2]);
        if(item3.length !== 0){
            let itemIndex3 = item2.array.findIndex(item => item.id === +activeItemPath[2]);
            item3 = {...item3[0], active: false}
    
            item2.array.splice(itemIndex3, 1, item3);
        }
        let item4 = item3.subOptions.filter(item => item.id === +activeItemPath[3]);
        if(item4.length !== 0){
            let itemIndex4 = item3.subOptions.findIndex(item => item.id === +activeItemPath[3]);
            item4 = {...item4[0], active: false}
        
            item3.subOptions.splice(itemIndex4, 1, item4);
        }
    }
  
    return {
        ...state,
        menuItems: updatedMenuItems
    };
}

const setUnmountComponentValues = (state, action) => {
     return {
        ...state,
        unmountComponent: {
            state: action.val,
            gotoPage: action.path,
            prevPage: action.prevPage
        }
    };
}

const setMenuDotsState = (state, action) => {
    return {
       ...state,
        menuDotsState: {
            page: action.page,
            state: action.val
        }
   };
}

const setHistoryPopFromPortfolioItem = (state, action) => {
    return {
        ...state,
        historyPopFromItem: action.val
    };
}

const setShowBackToTopComponent = (state, action) => {
    return {
        ...state,
        showBackToTop: action.val
    };
}

const setFullScreenState = (state, action) => {
    return {
        ...state,
        fullScreenState: action.val
    };
}

const cryptoPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_MENU_ITEMS:
            return initMenuItems(state, action); 
        case actionTypes.INIT_MENU_FULLSCREEN_ITEMS:
            return initMenuFullscreenItems(state, action); 
        case actionTypes.PHOTO_VIEWER_OPEN:
            return photoViewerOpen(state, action); 
        case actionTypes.PREV_IMAGE:
            return prevImage(state, action); 
        case actionTypes.NEXT_IMAGE:
            return nextImage(state, action);
        case actionTypes.SET_IS_HOVERING_MENU_ITEM:
            return setIsHoveringMenuItem(state, action); 
        case actionTypes.SET_IS_HOVERING_TOOLBAR_OPTION_ITEM:
            return setIsHoveringToolbarOptionItem(state, action); 
        case actionTypes.SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM:
            return setIsHoveringToolbarSubOptionItem(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_ITEM:
            return setIsHoveringMenuFullscreenItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM:
            return setActivityOfToolbarOptionItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM:
            return setActivityOfToolbarSubOptionItem(state, action); 
        case actionTypes.SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM:
            return setActivityOfMenuFullscreenItem(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM:
            return setIsHoveringMenuFullscreenOptionItem(state, action); 
        case actionTypes.SET_SIDEBAR_STATE:
            return setSidebarState(state, action); 
        case actionTypes.ACTIVATE_MENU_ITEM:
            return activateMenuItem(state, action); 
        case actionTypes.CLEAR_ACTIVITY_OF_MENU_ITEMS:
            return clearActivityOfMenuItems(state, action); 
        case actionTypes.SET_UNMOUNT_COMPONENT_VALUES:
            return setUnmountComponentValues(state, action); 
        case actionTypes.SET_MENU_DOTS_STATE:
            return setMenuDotsState(state, action); 
        case actionTypes.SET_HISTORY_POP_FROM_PORTFOLIO_ITEM:
            return setHistoryPopFromPortfolioItem(state, action);
        case actionTypes.SET_SHOW_BACK_TO_TOP_COMPONENT:
            return setShowBackToTopComponent(state, action);
        case actionTypes.SET_FULLSCREEN_STATE:
            return setFullScreenState(state, action);
        default: 
            return state;
    }
}

export default cryptoPortfolioReducer;
