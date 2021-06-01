/**
 * Actions
 */

import * as Actions from "../actions";
import axiosInstance from "../axiosInstance";
import axios from "axios";

/**
 * Utility
 */

import * as Utility from "../utility";

export function fetchHeaderImagesArray() {
    return dispatch => {
        dispatch(Actions.fetchHeaderImagesBegin());
        return fetch("http://localhost:3005/api/headerImagesArray")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json);
                dispatch(Actions.fetchHeaderImagesSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                dispatch(Actions.fetchHeaderImagesFailur(error))
            });
    };
}

export function fetchSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchSection1DataBegin());
        return fetch("http://localhost:3005/api/section1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSection1DataFailur(error))
            });
    };
}

export function fetchPictureBoard() {
    return dispatch => {
        dispatch(Actions.fetchPictureBoardBegin());
        return fetch("http://localhost:3005/api/section2/pictureBoard")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPictureBoardSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPictureBoardFailur(error))
            });
    };
}

export function fetchOurProcessData() {
    return dispatch => {
        dispatch(Actions.fetchOurProcessDataBegin());
        return fetch("http://localhost:3005/api/section2/ourProcess")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchOurProcessDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchOurProcessDataFailur(error))
            });
    };
}

export function fetchTestimonials() {
    return dispatch => {
        dispatch(Actions.fetchTestimonialsBegin());
        return fetch("http://localhost:3005/api/section3/testimonials")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTestimonialsSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTestimonialsFailur(error))
            });
    };
}

export function fetchTeamInformation() {
    return dispatch => {
        dispatch(Actions.fetchTeamInformationBegin());
        return fetch("http://localhost:3005/api/section3/teamInformation")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTeamInformationSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTeamInformationFailur(error))
            });
    };
}

export function fetchStatisticsData() {
    return dispatch => {
        dispatch(Actions.fetchStatisticsDataBegin());
        return fetch("http://localhost:3005/api/section4/statisticsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchStatisticsDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchStatisticsDataFailur(error))
            });
    };
}

export function fetchAchievementsData() {
    return dispatch => {
        dispatch(Actions.fetchAchievementsDataBegin());
        return fetch("http://localhost:3005/api/section4/achievementsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchAchievementsDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchAchievementsDataFailur(error))
            });
    };
}

export function fetchBigImagesPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchBigImagesPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/big-images/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBigImagesPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBigImagesPortfolioFailur(error))
            });
    };
}

export function fetchBigSliderPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchBigSliderPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/big-slider/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBigSliderPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBigSliderPortfolioFailur(error))
            });
    };
}

export function fetchSmallImagesPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchSmallImagesPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/small-images/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSmallImagesPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSmallImagesPortfolioFailur(error))
            });
    };
}

export function fetchSmallSliderPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchSmallSliderPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/small-slider/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSmallSliderPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSmallSliderPortfolioFailur(error))
            });
    };
}

export function fetchGalleryPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchGalleryPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/gallery/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchGalleryPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchGalleryPortfolioFailur(error))
            });
    };
}

export function fetchSmallGalleryPortfolio(id) {
    return dispatch => {
        dispatch(Actions.fetchSmallGalleryPortfolioBegin());
        return fetch(`http://localhost:3005/api/portfolio-item/small-gallery/${id}`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSmallGalleryPortfolioSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSmallGalleryPortfolioFailur(error))
            });
    };
}

export function fetchPortfolioGalleryPage() {
    return dispatch => {
        dispatch(Actions.fetchPortfolioGalleryPageBegin());
        return fetch(`http://localhost:3005/api/portfolio-gallery-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPortfolioGalleryPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPortfolioGalleryPageFailur(error))
            });
    };
}

export function fetchArchive(category, step) {
    return dispatch => {
        if(step === 1){
            dispatch(Actions.fetchArchiveBegin());
        }else{
            dispatch(Actions.loadMoreArchiveDataBegin());
        }
        return fetch(`http://localhost:3005/api/portfolio-category/${category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                step: step
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                console.log("JSON",json)
                if(step === 1){
                    dispatch(Actions.fetchArchiveSuccess(json.archiveData));
                    dispatch(Actions.setArchiveCategory(json.category));
                    dispatch(Actions.loadMoreDisableButtonStateForArchive(json.disableLoadMoreButton));
                }
                else{
                    dispatch(Actions.loadMoreArchiveDataSuccess(json.archiveData));
                    dispatch(Actions.loadMoreDisableButtonStateForArchive(json.disableLoadMoreButton));
                }
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                if(step === 1){
                    dispatch(Actions.fetchArchiveFailur(error))
                }else{
                    dispatch(Actions.loadMoreArchiveDataFailur(error))
                }
            });
    };
}

export function fetchSwitchImagePage() {
    return dispatch => {
        dispatch(Actions.fetchSwitchImagePageBegin());
        return fetch(`http://localhost:3005/api/switch-image-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSwitchImagePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSwitchImagePageFailur(error))
            });
    };
}

export function fetchSimpleOverlayPage() {
    return dispatch => {
        dispatch(Actions.fetchSimpleOverlayPageBegin());
        return fetch(`http://localhost:3005/api/simple-overlay-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSimpleOverlayPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSimpleOverlayPageFailur(error))
            });
    };
}

export function fetchSlideFromImageLeftPage() {
    return dispatch => {
        dispatch(Actions.fetchSlideFromImageLeftPageBegin());
        return fetch(`http://localhost:3005/api/slide-from-image-left-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSlideFromImageLeftPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSlideFromImageLeftPageFailur(error))
            });
    };
}

export function fetchOverlayPage() {
    return dispatch => {
        dispatch(Actions.fetchOverlayPageBegin());
        return fetch(`http://localhost:3005/api/overlay-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchOverlayPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchOverlayPageFailur(error))
            });
    };
}

export function fetchOverlayWithInfoPage() {
    return dispatch => {
        dispatch(Actions.fetchOverlayWithInfoPageBegin());
        return fetch(`http://localhost:3005/api/overlay-with-info-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchOverlayWithInfoPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchOverlayWithInfoPageFailur(error))
            });
    };
}
//
export function fetchStandardPage() {
    return dispatch => {
        dispatch(Actions.fetchStandardPageBegin());
        return fetch(`http://localhost:3005/api/standard-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchStandardPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchStandardPageFailur(error))
            });
    };
}

export function fetchGalleryPage() {
    return dispatch => {
        dispatch(Actions.fetchGalleryPageBegin());
        return fetch(`http://localhost:3005/api/gallery-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchGalleryPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchGalleryPageFailur(error))
            });
    };
}

export function fetchGalleryWithSpacePage() {
    return dispatch => {
        dispatch(Actions.fetchGalleryWithSpacePageBegin());
        return fetch(`http://localhost:3005/api/gallery-with-space-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchGalleryWithSpacePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchGalleryWithSpacePageFailur(error))
            });
    };
}

export function fetchStoneWallPage() {
    return dispatch => {
        dispatch(Actions.fetchStoneWallPageBegin());
        return fetch(`http://localhost:3005/api/stone-wall-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchStoneWallPageSuccess(json));
                let itemsState = Utility.getArrayOfEmptyVal(json.length);
                dispatch(Actions.initItemsStylesStateForStoneWallPage(itemsState));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchStoneWallPageFailur(error))
            });
    };
}

export function fetchStoneWallWidePage() {
    return dispatch => {
        dispatch(Actions.fetchStoneWallWidePageBegin());
        return fetch(`http://localhost:3005/api/stone-wall-wide-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchStoneWallWidePageSuccess(json));
                let itemsState = Utility.getArrayOfEmptyVal(json.length);
                dispatch(Actions.initItemsStylesStateForStoneWallWidePage(itemsState));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchStoneWallWidePageFailur(error))
            });
    };
}

export function fetchMetroPage() {
    return dispatch => {
        dispatch(Actions.fetchMetroPageBegin());
        return fetch(`http://localhost:3005/api/metro-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchMetroPageSuccess(json));
                let itemsState = Utility.getArrayOfEmptyVal(json.length);
                dispatch(Actions.initItemsStylesStateForMetroPage(itemsState));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchMetroPageFailur(error))
            });
    };
}

export function fetchPinterest3ColumnsPage() {
    return dispatch => {
        dispatch(Actions.fetchPinterest3ColumnsPageBegin());
        return fetch(`http://localhost:3005/api/pinterest-3-columns-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPinterest3ColumnsPageSuccess(json));
                let itemsState = Utility.getArrayOfEmptyVal(json.length);
                dispatch(Actions.initItemsStylesStateForPinterest3ColumnsPage(itemsState));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPinterest3ColumnsPageFailur(error))
            });
    };
}

export function fetchTwoColumnsWidePage() {
    return dispatch => {
        dispatch(Actions.fetchTwoColumnsWidePageBegin());
        return fetch(`http://localhost:3005/api/two-columns-wide-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTwoColumnsWidePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTwoColumnsWidePageFailur(error))
            });
    };
}

export function fetchThreeColumnsWidePage() {
    return dispatch => {
        dispatch(Actions.fetchThreeColumnsWidePageBegin());
        return fetch(`http://localhost:3005/api/three-columns-wide-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchThreeColumnsWidePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchThreeColumnsWidePageFailur(error))
            });
    };
}

export function fetchFourColumnsWidePage() {
    return dispatch => {
        dispatch(Actions.fetchFourColumnsWidePageBegin());
        return fetch(`http://localhost:3005/api/four-columns-wide-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchFourColumnsWidePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchFourColumnsWidePageFailur(error))
            });
    };
}

export function fetchFiveColumnsWidePage() {
    return dispatch => {
        dispatch(Actions.fetchFiveColumnsWidePageBegin());
        return fetch(`http://localhost:3005/api/five-columns-wide-page`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchFiveColumnsWidePageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchFiveColumnsWidePageFailur(error))
            });
    };
}

export function fetchTwoColumnsPage(step, category, screenWidth, numOfItemsInArray, itemsStyleValuesObj) {
    return dispatch => {
        if(step === 1){
            dispatch(Actions.fetchTwoColumnsPageBegin());
        }else{
            dispatch(Actions.loadMoreTwoColumnsPageBegin());
        }
        return fetch(`http://localhost:3005/api/two-columns-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                step: step
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                let categories = [];
                categories = json.twoColumnsData
                    .map(el => {
                        return el.categories
                    })
                    .flat()
                    .map((el, i) => {
                        return el.key
                    })
                categories = Utility.removeDublicatesFromArray(categories);
                categories = categories.map((el, i) => {
                    return {
                        id: i + 2,
                        key: el,
                        label: `${Utility.changeKeyToLabel(el)}.`,
                        isHover: "init",
                        active: false
                    }
                })
                categories.unshift({
                    id: 1,
                    key: "showAll",
                    label: "Show all.",
                    isHover: "init",
                    active: true
                });
                if(category){
                    categories = categories.map(el => {
                        if(el.key === category){
                            return {
                                ...el,
                                active: true
                            }
                        }else{
                            return {
                                ...el,
                                active: false
                            }
                        }
                    })
                }
                let itemsState;
                dispatch(Actions.fetchTwoColumnsPageSuccess(json.twoColumnsData));
                if(step === 1){
                    itemsState = Utility.getArrayOfEmptyVal(json.twoColumnsData.length);
                    dispatch(Actions.initItemsStylesStateForTwoColumnsPage(itemsState));
                }else{
                    // let lengthOfItemsStyleValuesObj = Object.keys(itemsStyleValuesObj).length;
                    itemsState = Utility.getArrayOfEmptyVal(json.twoColumnsData.length - numOfItemsInArray);
                    // if(lengthOfItemsStyleValuesObj + 4 <= json.twoColumnsData.length){
                    //     itemsState.splice(-(lengthOfItemsStyleValuesObj - json.twoColumnsData.length + 4), lengthOfItemsStyleValuesObj - json.twoColumnsData.length + 4)
                    // }
                    dispatch(Actions.addMoreItemsStylesStateForTwoColumnsPage(itemsState));
                }
                dispatch(Actions.setCategoriesTwoColumnsPage(categories));
                dispatch(Actions.loadMoreTwoColumnsPageSuccess());
                dispatch(Actions.loadMoreDisableButtonStateForTwoColumnsPage(json.disableLoadMoreButton));
                if(step > 1 && category !== "showAll"){
                    let addedElemntsArray = json.twoColumnsData.slice(json.twoColumnsData.length-4, json.twoColumnsData.length);
                    let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(json.twoColumnsData, category);
                    let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("twoColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
                    
                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-3}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-3}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-2}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-2}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-1}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4-1}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*4}`)?.translateY));

                }else if(step > 1 && category === "showAll"){
                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-3}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: 1,
                        translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-4, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-4),
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-3}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-4)));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-2}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: 1,
                        translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-3),
                        translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-3),
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-2}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-3)));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4-1}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: 1,
                        translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-2, "atTheBeginning"),
                        translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-2),
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4-1}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-2)));

                    dispatch(Actions.updateItemsStyleValuesTwoColumnsPage(`img${step*4}`,{
                        width: Utility.setWidthOfImage("twoColumnsPage", screenWidth),
                        scale: 1,
                        translateX: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "X", step*4-1),
                        translateY: Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-1),
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForTwoColumnsPage(`img${step*4}`, Utility.calcTranslateCoordinates("twoColumnsPage", screenWidth, "Y", step*4-1)));
                }
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                if(step === 1){
                    dispatch(Actions.fetchTwoColumnsPageFailur(error));
                }else{
                    dispatch(Actions.loadMoreTwoColumnsPageFailur(error));
                }
            });
    };
}

export function fetchThreeColumnsPage(step, category, screenWidth, numOfItemsInArray, itemsStyleValuesObj) {
    return dispatch => {
        if(step === 1){
            dispatch(Actions.fetchThreeColumnsPageBegin());
        }else{
            dispatch(Actions.loadMoreThreeColumnsPageBegin());
        }
        return fetch(`http://localhost:3005/api/three-columns-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                step: step
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                let categories = [];
                categories = json.threeColumnsData
                    .map(el => {
                        return el.categories
                    })
                    .flat()
                    .map((el, i) => {
                        return el.key
                    })
                categories = Utility.removeDublicatesFromArray(categories);
                categories = categories.map((el, i) => {
                    return {
                        id: i + 2,
                        key: el,
                        label: `${Utility.changeKeyToLabel(el)}.`,
                        isHover: "init",
                        active: false
                    }
                })
                categories.unshift({
                    id: 1,
                    key: "showAll",
                    label: "Show all.",
                    isHover: "init",
                    active: true
                });
                if(category){
                    categories = categories.map(el => {
                        if(el.key === category){
                            return {
                                ...el,
                                active: true
                            }
                        }else{
                            return {
                                ...el,
                                active: false
                            }
                        }
                    })
                }
                let itemsState;
                dispatch(Actions.fetchThreeColumnsPageSuccess(json.threeColumnsData));
                if(step === 1){
                    itemsState = Utility.getArrayOfEmptyVal(json.threeColumnsData.length);
                    dispatch(Actions.initItemsStylesStateForThreeColumnsPage(itemsState));
                }else{
                    // let lengthOfItemsStyleValuesObj = Object.keys(itemsStyleValuesObj).length;
                    itemsState = Utility.getArrayOfEmptyVal(json.threeColumnsData.length - numOfItemsInArray);
                    // if(lengthOfItemsStyleValuesObj + 4 <= json.threeColumnsData.length){
                    //     itemsState.splice(-(lengthOfItemsStyleValuesObj - json.threeColumnsData.length + 4), lengthOfItemsStyleValuesObj - json.threeColumnsData.length + 4)
                    // }
                    dispatch(Actions.addMoreItemsStylesStateForThreeColumnsPage(itemsState));
                }
                dispatch(Actions.setCategoriesThreeColumnsPage(categories));
                dispatch(Actions.loadMoreThreeColumnsPageSuccess());
                dispatch(Actions.loadMoreDisableButtonStateForThreeColumnsPage(json.disableLoadMoreButton));
                if(step > 1 && category !== "showAll"){
                    let addedElemntsArray = json.threeColumnsData.slice(json.threeColumnsData.length-6, json.threeColumnsData.length);
                    let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(json.threeColumnsData, category);
                    let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("threeColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
                    
                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-5}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-4}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-3}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-2}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                        width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                        scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY));

                }else if(step > 1 && category === "showAll"){
                    if(screenWidth > 734){
                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-6, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-6),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-6)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-5, "secondColumn"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-5),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-5)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-4, "thirdColumn"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-4),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-4)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-3, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-3),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-3)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-2, "secondColumn"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-2),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-2)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "X", step*6-1, "thirdColumn"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-1),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, Utility.calcTranslateCoordinates("threeColumnsPage", screenWidth, "Y", step*6-1)));
                    }else if(screenWidth <= 734){
                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-5}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-6, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-6),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-5}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-6)));
                        
                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-4}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-5),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-5),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-4}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-5)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-3}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-4, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-4),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-3}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-4)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-2}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-3),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-3),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-2}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-3)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6-1}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-2, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-2),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6-1}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-2)));

                        dispatch(Actions.updateItemsStyleValuesThreeColumnsPage(`img${step*6}`,{
                            width: Utility.setWidthOfImage("threeColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "X", step*6-1),
                            translateY: Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-1),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForThreeColumnsPage(`img${step*6}`, Utility.calcTranslateCoordinates("threeColumnsPageSmallScreen", screenWidth, "Y", step*6-1)));
                    }
                }  
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                if(step === 1){
                    dispatch(Actions.fetchThreeColumnsPageFailur(error));
                }else{
                    dispatch(Actions.loadMoreThreeColumnsPageFailur(error));
                }
            });
    };
}

export function fetchFourColumnsPage(step, category, screenWidth, numOfItemsInArray, itemsStyleValuesObj) {
    return dispatch => {
        if(step === 1){
            dispatch(Actions.fetchFourColumnsPageBegin());
        }else{
            dispatch(Actions.loadMoreFourColumnsPageBegin());
        }
        return fetch(`http://localhost:3005/api/four-columns-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                step: step
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                let categories = [];
                categories = json.fourColumnsData
                    .map(el => {
                        return el.categories
                    })
                    .flat()
                    .map((el, i) => {
                        return el.key
                    })
                categories = Utility.removeDublicatesFromArray(categories);
                categories = categories.map((el, i) => {
                    return {
                        id: i + 2,
                        key: el,
                        label: `${Utility.changeKeyToLabel(el)}.`,
                        isHover: "init",
                        active: false
                    }
                })
                categories.unshift({
                    id: 1,
                    key: "showAll",
                    label: "Show all.",
                    isHover: "init",
                    active: true
                });
                if(category){
                    categories = categories.map(el => {
                        if(el.key === category){
                            return {
                                ...el,
                                active: true
                            }
                        }else{
                            return {
                                ...el,
                                active: false
                            }
                        }
                    })
                }
                let itemsState;
                dispatch(Actions.fetchFourColumnsPageSuccess(json.fourColumnsData));
                if(step === 1){
                    itemsState = Utility.getArrayOfEmptyVal(json.fourColumnsData.length);
                    dispatch(Actions.initItemsStylesStateForFourColumnsPage(itemsState));
                }else{
                    // let lengthOfItemsStyleValuesObj = Object.keys(itemsStyleValuesObj).length;
                    itemsState = Utility.getArrayOfEmptyVal(json.fourColumnsData.length - numOfItemsInArray);
                    // if(lengthOfItemsStyleValuesObj + 4 <= json.fourColumnsData.length){
                    //     itemsState.splice(-(lengthOfItemsStyleValuesObj - json.fourColumnsData.length + 4), lengthOfItemsStyleValuesObj - json.fourColumnsData.length + 4)
                    // }
                    dispatch(Actions.addMoreItemsStylesStateForFourColumnsPage(itemsState));
                }
                dispatch(Actions.setCategoriesFourColumnsPage(categories));
                dispatch(Actions.loadMoreFourColumnsPageSuccess());
                dispatch(Actions.loadMoreDisableButtonStateForFourColumnsPage(json.disableLoadMoreButton));
                if(step > 1 && category !== "showAll"){
                    let addedElemntsArray = json.fourColumnsData.slice(json.fourColumnsData.length-8, json.fourColumnsData.length);
                    let arrayOfAppearAndDisapperElements = Utility.setArrayOfAppearAndDisapperElements(json.fourColumnsData, category);
                    let updatedTranslateCoordinates = Utility.updateTranslateCoordinatesOfAppearElements("fourColumnsPage", arrayOfAppearAndDisapperElements, screenWidth);
                    
                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[0].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-7}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[1].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-6}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[2].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-5}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[3].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-4}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-3}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, updatedTranslateCoordinates.find(item => item.key === `img${step*8-2}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*6-1}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[4].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*6-1}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6-1}`)?.translateY));

                    dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*6}`,{
                        width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                        scale: addedElemntsArray[5].categories.some(el => el.key === category) ? 1 : 0,
                        translateX: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateX,
                        translateY: updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY,
                        transition: 0.45,
                        zIndex: 0,
                        rendered: true
                    }));
                    dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*6}`, updatedTranslateCoordinates.find(item => item.key === `img${step*6}`)?.translateY));

                }else if(step > 1 && category === "showAll"){
                    if(screenWidth > 960){
                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-8, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-8),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-8)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-7, "secondColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-7),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-7)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-6, "thirdColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-6),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-6)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-5, "fourthColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-5),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-5)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-4, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-4),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-4)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-3, "secondColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-3),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-3)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-1}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-2, "thirdColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-2),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-1}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-2)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "X", step*8-1, "fourthColumn"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-1),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8}`, Utility.calcTranslateCoordinates("fourColumnsPage", screenWidth, "Y", step*8-1)));
                    }else if(screenWidth <= 960){
                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-7}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-8, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-8),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-7}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-8)));
                        
                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-6}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-7),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-7),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-6}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-7)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-5}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-6, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-6),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-5}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-6)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-4}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-5),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-5),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-4}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-5)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-3}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-4, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-4),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-3}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-4)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-2}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-3),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-3),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-2}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-3)));
                    
                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8-1}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-2, "atTheBeginning"),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-2),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8-1}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-2)));

                        dispatch(Actions.updateItemsStyleValuesFourColumnsPage(`img${step*8}`,{
                            width: Utility.setWidthOfImage("fourColumnsPage", screenWidth),
                            scale: 1,
                            translateX: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "X", step*8-1),
                            translateY: Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-1),
                            transition: 0.45,
                            zIndex: 0,
                            rendered: true
                        }));
                        dispatch(Actions.setTopPositionOfTheItemForFourColumnsPage(`img${step*8}`, Utility.calcTranslateCoordinates("fourColumnsPageSmallScreen", screenWidth, "Y", step*8-1)));
                    }
                }  
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                if(step === 1){
                    dispatch(Actions.fetchFourColumnsPageFailur(error));
                }else{
                    dispatch(Actions.loadMoreFourColumnsPageFailur(error));
                }
            });
    };
}

export function fetchAccordionsPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchAccordionsPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/accordions-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchAccordionsPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchAccordionsPageSection1DataFailur(error))
            });
    };
}

export function fetchAccordionsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchAccordionsPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/accordions-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchAccordionsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchAccordionsPageSection2DataFailur(error))
            });
    };
}

export function fetchTabsPageSection1Column1Data() {
    return dispatch => {
        dispatch(Actions.fetchTabsPageSection1Column1DataBegin());
        return fetch(`http://localhost:3005/api/tabs-page/section1/column1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTabsPageSection1Column1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTabsPageSection1Column1DataFailur(error))
            });
    };
}

export function fetchTabsPageSection1Column2Data() {
    return dispatch => {
        dispatch(Actions.fetchTabsPageSection1Column2DataBegin());
        return fetch(`http://localhost:3005/api/tabs-page/section1/column2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTabsPageSection1Column2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTabsPageSection1Column2DataFailur(error))
            });
    };
}

export function fetchTabsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchTabsPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/tabs-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTabsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTabsPageSection2DataFailur(error))
            });
    };
}

export function fetchTestimonialsPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchTestimonialsPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/testimonials-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTestimonialsPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTestimonialsPageSection1DataFailur(error))
            });
    };
}

export function fetchTestimonialsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchTestimonialsPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/testimonials-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTestimonialsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTestimonialsPageSection2DataFailur(error))
            });
    };
}

export function fetchTestimonialsPageSection3Data() {
    return dispatch => {
        dispatch(Actions.fetchTestimonialsPageSection3DataBegin());
        return fetch(`http://localhost:3005/api/testimonials-page/section3`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTestimonialsPageSection3DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTestimonialsPageSection3DataFailur(error))
            });
    };
}

export function fetchTeamPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchTeamPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/team-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTeamPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTeamPageSection1DataFailur(error))
            });
    };
}

export function fetchTeamPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchTeamPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/team-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTeamPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTeamPageSection2DataFailur(error))
            });
    };
}

export function fetchTeamPageSection3Data() {
    return dispatch => {
        dispatch(Actions.fetchTeamPageSection3DataBegin());
        return fetch(`http://localhost:3005/api/team-page/section3`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTeamPageSection3DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTeamPageSection3DataFailur(error))
            });
    };
}

export function fetchGetDirectionContactFormPage(info) {
    return dispatch => {
        dispatch(Actions.fetchGetDirectionContactFormPageBegin());
        return fetch(`http://localhost:3005/api/get-direction-contact-form-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchGetDirectionContactFormPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchGetDirectionContactFormPageFailur(error))
            });
    };
}

export function fetchSubscribeContactFormPage(info, history) {
    return dispatch => {
        dispatch(Actions.fetchSubscribeContactFormPageBegin());
// return fetch(`http://localhost:3005/api/subscribe-contact-form-page`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify({
//         info: info
//     })
// })

        axiosInstance(history).post(
            `http://localhost:3005/api/subscribe-contact-form-page`,
             {
                info
             }
        )
            // .then(handleErrors)
// .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSubscribeContactFormPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSubscribeContactFormPageFailur(error))
            });
    };
}

export function fetchSubmitContactFormPage(info) {
    return dispatch => {
        dispatch(Actions.fetchSubmitContactFormPageBegin());
        return fetch(`http://localhost:3005/api/submit-contact-form-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSubmitContactFormPageSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSubmitContactFormPageFailur(error))
            });
    };
}

export function fetchIconWithTextPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchIconWithTextPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/icon-with-text/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchIconWithTextPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchIconWithTextPageSection1DataFailur(error))
            });
    };
}

export function fetchIconWithTextPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchIconWithTextPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/icon-with-text/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchIconWithTextPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchIconWithTextPageSection2DataFailur(error))
            });
    };
}

export function fetchBannerPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection1DataFailur(error))
            });
    };
}

export function fetchBannerPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection2DataFailur(error))
            });
    };
}

export function fetchBannerPageSection3Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection3DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section3`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection3DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection3DataFailur(error))
            });
    };
}

export function fetchBannerPageSection4Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection4DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section4`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection4DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection4DataFailur(error))
            });
    };
}

export function fetchBannerPageSection5Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection5DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section5`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection5DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection5DataFailur(error))
            });
    };
}

export function fetchBannerPageSection6Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection6DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section6`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection6DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection6DataFailur(error))
            });
    };
}

export function fetchBannerPageSection7Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection7DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section7`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection7DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection7DataFailur(error))
            });
    };
}

export function fetchBannerPageSection8Data() {
    return dispatch => {
        dispatch(Actions.fetchBannerPageSection8DataBegin());
        return fetch(`http://localhost:3005/api/banner-page/section8`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBannerPageSection8DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBannerPageSection8DataFailur(error))
            });
    };
}

export function fetchButtonsPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchButtonsPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/buttons-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchButtonsPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchButtonsPageSection1DataFailur(error))
            });
    };
}

export function fetchButtonsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchButtonsPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/buttons-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchButtonsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchButtonsPageSection2DataFailur(error))
            });
    };
}

export function fetchPricingTablesPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchPricingTablesPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/pricing-tables-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPricingTablesPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPricingTablesPageSection1DataFailur(error))
            });
    };
}

export function fetchPricingTablesPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchPricingTablesPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/pricing-tables-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPricingTablesPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPricingTablesPageSection2DataFailur(error))
            });
    };
}

export function fetchPieChartsPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchPieChartsPageSection1DataBegin());
        return fetch(`http://localhost:3005/api/pie-charts-page/section1`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPieChartsPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPieChartsPageSection1DataFailur(error))
            });
    };
}

export function fetchPieChartsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchPieChartsPageSection2DataBegin());
        return fetch(`http://localhost:3005/api/pie-charts-page/section2`)
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPieChartsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPieChartsPageSection2DataFailur(error))
            });
    };
}

export function fetchCountersPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchCountersPageSection1DataBegin());
        return fetch("http://localhost:3005/api/counters-page/section1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchCountersPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchCountersPageSection1DataFailur(error))
            });
    };
}

export function fetchCountersPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchCountersPageSection2DataBegin());
        return fetch("http://localhost:3005/api/counters-page/section2")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchCountersPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchCountersPageSection2DataFailur(error))
            });
    };
}

export function fetchCountersPageSection3Data() {
    return dispatch => {
        dispatch(Actions.fetchCountersPageSection3DataBegin());
        return fetch("http://localhost:3005/api/counters-page/section3")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchCountersPageSection3DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchCountersPageSection3DataFailur(error))
            });
    };
}

export function fetchCountdownPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchCountdownPageSection1DataBegin());
        return fetch("http://localhost:3005/api/countdown-page/section1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchCountdownPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchCountdownPageSection1DataFailur(error))
            });
    };
}

export function fetchCountdownPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchCountdownPageSection2DataBegin());
        return fetch("http://localhost:3005/api/countdown-page/section2")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchCountdownPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchCountdownPageSection2DataFailur(error))
            });
    };
}

export function fetchClientsPageSection1Swiper1Data() {
    return dispatch => {
        dispatch(Actions.fetchClientsPageSection1Swiper1DataBegin());
        return fetch("http://localhost:3005/api/clients-page/section1/swiper1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchClientsPageSection1Swiper1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchClientsPageSection1Swiper1DataFailur(error))
            });
    };
}

export function fetchClientsPageSection1Swiper2Data() {
    return dispatch => {
        dispatch(Actions.fetchClientsPageSection1Swiper2DataBegin());
        return fetch("http://localhost:3005/api/clients-page/section1/swiper2")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchClientsPageSection1Swiper2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchClientsPageSection1Swiper2DataFailur(error))
            });
    };
}

export function fetchClientsPageSection2Swiper1Data() {
    return dispatch => {
        dispatch(Actions.fetchClientsPageSection2Swiper1DataBegin());
        return fetch("http://localhost:3005/api/clients-page/section2/swiper1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchClientsPageSection2Swiper1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchClientsPageSection2Swiper1DataFailur(error))
            });
    };
}

export function fetchClientsPageSection2Swiper2Data() {
    return dispatch => {
        dispatch(Actions.fetchClientsPageSection2Swiper2DataBegin());
        return fetch("http://localhost:3005/api/clients-page/section2/swiper2")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchClientsPageSection2Swiper2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchClientsPageSection2Swiper2DataFailur(error))
            });
    };
}

export function fetchProgressBarPageSection1Column1Data() {
    return dispatch => {
        dispatch(Actions.fetchProgressBarPageSection1Column1DataBegin());
        return fetch("http://localhost:3005/api/section4/statisticsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchProgressBarPageSection1Column1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchProgressBarPageSection1Column1DataFailur(error))
            });
    };
}

export function fetchProgressBarPageSection1Column2Data() {
    return dispatch => {
        dispatch(Actions.fetchProgressBarPageSection1Column2DataBegin());
        return fetch("http://localhost:3005/api/section4/statisticsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchProgressBarPageSection1Column2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchProgressBarPageSection1Column2DataFailur(error))
            });
    };
}

export function fetchProgressBarPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchProgressBarPageSection2DataBegin());
        return fetch("http://localhost:3005/api/section4/statisticsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchProgressBarPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchProgressBarPageSection2DataFailur(error))
            });
    };
}

export function fetchHeadingsPageData() {
    return dispatch => {
        dispatch(Actions.fetchHeadingsPageDataBegin());
        return fetch("http://localhost:3005/api/headings-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchHeadingsPageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchHeadingsPageDataFailur(error))
            });
    };
}

export function fetchListsPageSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchListsPageSection1DataBegin());
        return fetch("http://localhost:3005/api/lists-page/section1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchListsPageSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchListsPageSection1DataFailur(error))
            });
    };
}

export function fetchListsPageSection2Data() {
    return dispatch => {
        dispatch(Actions.fetchListsPageSection2DataBegin());
        return fetch("http://localhost:3005/api/lists-page/section2")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchListsPageSection2DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchListsPageSection2DataFailur(error))
            });
    };
}

export function fetchHighlightsPageData() {
    return dispatch => {
        dispatch(Actions.fetchHighlightsPageDataBegin());
        return fetch("http://localhost:3005/api/highlights-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchHighlightsPageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchHighlightsPageDataFailur(error))
            });
    };
}
//
export function fetchDropcapsPageData() {
    return dispatch => {
        dispatch(Actions.fetchDropcapsPageDataBegin());
        return fetch("http://localhost:3005/api/dropcaps-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchDropcapsPageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchDropcapsPageDataFailur(error))
            });
    };
}

export function fetchColumnsPageData() {
    return dispatch => {
        dispatch(Actions.fetchColumnsPageDataBegin());
        return fetch("http://localhost:3005/api/columns-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchColumnsPageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchColumnsPageDataFailur(error))
            });
    };
}

export function fetchBlockquotePageData() {
    return dispatch => {
        dispatch(Actions.fetchBlockquotePageDataBegin());
        return fetch("http://localhost:3005/api/blockquote-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchBlockquotePageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBlockquotePageDataFailur(error))
            });
    };
}

export function fetchScrollSliderPageData() {
    return dispatch => {
        dispatch(Actions.fetchScrollSliderPageDataBegin());
        return fetch("http://localhost:3005/api/scroll-slider-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchScrollSliderPageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchScrollSliderPageDataFailur(error))
            });
    };
}

export function fetchPortfolioProjectShowcasePageData() {
    return dispatch => {
        dispatch(Actions.fetchPortfolioProjectShowcasePageDataBegin());
        return fetch("http://localhost:3005/api/portfolio-project-showcase-page")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPortfolioProjectShowcasePageDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPortfolioProjectShowcasePageDataFailur(error))
            });
    };
}

export function fetchBlogListStandardPageData(activePageId) {
    return dispatch => {
        dispatch(Actions.fetchBlogListStandardPageDataBegin());
        return fetch(`http://localhost:3005/api/blog-list-standard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                activePageId: activePageId
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)

                // Update userLikedThePost property, according to the posts that user liked

                let updatedJson = [...json.blogListStandardPage];
                let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
                userPostsLikedArray.map((el, i) => {
                    let item = updatedJson.filter(item => item.key === el);
                    if(item.length !== 0){
                        let itemIndex = updatedJson.findIndex(item => item.key === el);
                        let obj = {
                            ...item[0],
                            numberOfLikes: item[0].numberOfLikes + 1,
                            userLikedThePost: true
                        }
                        updatedJson.splice(itemIndex, 1, obj);
                    }
                });

                dispatch(Actions.fetchBlogListStandardPageDataSuccess(updatedJson));
                dispatch(Actions.initBlogPagination(json.numberOfPages));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchBlogListStandardPageDataFailur(error))
            });
    };
}

export function fetchStandardPostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/standard-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });
            
            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchGalleryPostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/gallery-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });

            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchLinkPostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/link-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });

            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchQuotePostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/quote-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });

            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchAudioPostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/audio-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });

            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchVideoPostBlogData(id, info) {
    return dispatch => {
        dispatch(Actions.fetchPostBlogDataBegin());
        return fetch(`http://localhost:3005/api/blog-item/video-post/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            // console.log(json)

            // Update userLikedThePost property, according to the posts that user liked

            let updatedJson = {...json};
            let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
            userPostsLikedArray.map((el, i) => {
                if(updatedJson.cardId === el){
                    updatedJson = {
                        ...updatedJson,
                        numberOfLikes: json.numberOfLikes + 1,
                        userLikedThePost: true
                    }
                }
            });

            dispatch(Actions.fetchPostBlogDataSuccess(updatedJson));
            dispatch(Actions.activateListStandardBlogItem("active", updatedJson.cardId, updatedJson.cardType));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchPostBlogDataFailur(error))
        });
    };
}

export function fetchPrevAndNextPostForBlogListItem(page, currentPostKey) {
    let _page;
    switch(page){
        case 'blogListStandardPage':
            _page = "blog-list-standard"
            break;
    }
    return dispatch => {

        switch(page){
            case 'blogListStandardPage':
                dispatch(Actions.fetchBlogNavigationForBlogListStandardPageDataBegin());
                break;
        }
        
        return fetch(`http://localhost:3005/api/${_page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                currentPostKey: currentPostKey
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogNavigationForBlogListStandardPageDataSuccess(json));
                        break;
                }
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogNavigationForBlogListStandardPageDataFailur(error))
                        break;
                }
            });
    };
}

export function fetchBlogCategoriesContentData(activePageId, page, category) {
    let _page;
    let _pageKey;
    switch(page){
        case 'blogListStandardPage':
            _page = "blog-list-standard";
            _pageKey="blogListStandardPage";
            break;
    }
    return dispatch => {

        switch(page){
            case 'blogListStandardPage':
                dispatch(Actions.fetchBlogListStandardPageDataBegin());
                break;
        }
        
        return fetch(`http://localhost:3005/api/${_page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                category: category,
                activePageId: activePageId
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)

                let updatedJson = [...json[_pageKey]];
                let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
                userPostsLikedArray.map((el, i) => {
                    let item = updatedJson.filter(item => item.key === el);
                    if(item.length !== 0){
                        let itemIndex = updatedJson.findIndex(item => item.key === el);
                        let obj = {
                            ...item[0],
                            numberOfLikes: item[0].numberOfLikes + 1,
                            userLikedThePost: true
                        }
                        updatedJson.splice(itemIndex, 1, obj);
                    }
                });

                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogListStandardPageDataSuccess(updatedJson));
                        break;
                }
                dispatch(Actions.initBlogPagination(json.numberOfPages));
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogListStandardPageDataFailur(error))
                        break;
                }
            });
    };
}

export function fetchBlogTagsContentData(activePageId, page, tag) {
    let _page;
    let _pageKey;
    switch(page){
        case 'blogListStandardPage':
            _page = "blog-list-standard";
            _pageKey="blogListStandardPage";
            break;
    }
    return dispatch => {

        switch(page){
            case 'blogListStandardPage':
                dispatch(Actions.fetchBlogListStandardPageDataBegin());
                break;
        }
        
        return fetch(`http://localhost:3005/api/${_page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                tag: tag,
                activePageId: activePageId
            })
        })
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)

                let updatedJson = [...json[_pageKey]];
                let userPostsLikedArray = JSON.parse(localStorage.getItem("userLikedPostsHG")) !== null ? [...JSON.parse(localStorage.getItem("userLikedPostsHG"))] : [];
                userPostsLikedArray.map((el, i) => {
                    let item = updatedJson.filter(item => item.key === el);
                    if(item.length !== 0){
                        let itemIndex = updatedJson.findIndex(item => item.key === el);
                        let obj = {
                            ...item[0],
                            numberOfLikes: item[0].numberOfLikes + 1,
                            userLikedThePost: true
                        }
                        updatedJson.splice(itemIndex, 1, obj);
                    }
                });

                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogListStandardPageDataSuccess(updatedJson));
                        break;
                }
                dispatch(Actions.initBlogPagination(json.numberOfPages));
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogListStandardPageDataFailur(error))
                        break;
                }
            });
    };
}

export function fetchBlogRecentPostsData(page) {
    return dispatch => {
        switch(page){
            case 'blogListStandardPage':
                dispatch(Actions.fetchBlogRecentPostsForBlogListStandardPageDataBegin());
                break;
        }
        return fetch("http://localhost:3005/api/blog-recent-posts")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogRecentPostsForBlogListStandardPageDataSuccess(json));
                        break;
                }
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                switch(page){
                    case 'blogListStandardPage':
                        dispatch(Actions.fetchBlogRecentPostsForBlogListStandardPageDataFailur(error));
                        break;
                }
            });
    };
}

export function fetchSearchThroughWebsiteResutData(info, activePageId) {
    return dispatch => {
        dispatch(Actions.fetchSearchThroughWebsiteResutDataBegin());
        return fetch(`http://localhost:3005/api/search-result-through-website`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                info: info,
                activePageId
            })
        })
        // .then(handleErrors)
        .then(res => res.json()) // to debug instead of json write text
        .then(json => {
            console.log(json)
            
            dispatch(Actions.fetchSearchThroughWebsiteResutDataSuccess(json));
            dispatch(Actions.initSearchResultPagePagination(json.searchResult.numberOfPages));
            // return json;
        })
        .catch(error => {
            console.log("error",error)
            dispatch(Actions.fetchSearchThroughWebsiteResutDataFailur(error))
        });
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
