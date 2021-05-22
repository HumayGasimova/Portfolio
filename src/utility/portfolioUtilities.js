import * as Utility from './';

export const findPathOfIds = (path) => {
    let updatedPath = path.split("/");
    if(path === ""){
        return [1, 11, 111];
    }

    //First element of updatedPath array
    
    switch(updatedPath[0]){
        // case 'portfolio-gallery':
        case 'portfolio-category':
        case 'about-us':
        case 'process':
        case 'happy-team':
        case 'list-standard-blog-category':
        case 'list-standard-blog-tag':
        case 'blog-list-standard-item':
        case 'search-result':
            return [];
        case 'portfolio-gallery':
            return [1, 12, 125];
        case 'two-columns':
            return [2, 22, 221];
        case 'two-columns-wide':
            return [2, 22, 222];
        case 'three-columns':
            return [2, 22, 223];
        case 'three-columns-wide':
            return [2, 22, 224];
        case 'four-columns':
            return [2, 22, 225];
        case 'four-columns-wide':
            return [2, 22, 226];
        case 'five-columns-wide':
            return [2, 22, 227];
        case 'overlay':
            return [2, 23, 231];
        case 'overlay-with-info':
            return [2, 23, 232];
        case 'simple-overlay':
            return [2, 23, 233];
        case 'slide-from-image-left':
            return [2, 23, 234];
        case 'switch-image':
            return [2, 23, 235];
        case 'portfolio-standard':
            return [2, 24, 241];
        case 'gallery':
            return [2, 24, 242]; 
        case 'gallery-with-space':
            return [2, 24, 243];
        case 'stone-wall':
            return [2, 24, 244];
        case 'stone-wall-wide':
            return [2, 24, 245];
        case 'metro':
            return [2, 24, 246];
        case 'pinterest-3-columns':
            return [2, 24, 247];
        case 'blog-list-standard':
            return [4, 41, 411];
        case 'accordions':
            return [6, 61, 611];
        case 'tabs':
            return [6, 61, 612];
        case 'call-to-action':
            return [6, 61, 613];
        case 'testimonials':
            return [6, 61, 614];
        case 'team':
            return [6, 61, 615];
        case 'contact-form':
            return [6, 61, 616];
        case 'icon-with-text':
            return [6, 61, 617];
        case 'banner':
            return [6, 61, 618];
        case 'buttons':
            return [6, 61, 619];
        case 'pricing-tables':
            return [6, 62, 621];
        case 'pie-charts':
            return [6, 62, 622];
        case 'counters':
            return [6, 62, 623];
        case 'countdown':
            return [6, 62, 624];
        case 'clients':
            return [6, 62, 625];
        case 'progress-bar':
            return [6, 62, 626];
        case 'google-maps':
            return [6, 62, 627];
        case 'headings':
            return [6, 63, 631];
        case 'lists':
            return [6, 63, 632];
        case 'highlights':
            return [6, 63, 633];
        case 'dropcaps':
            return [6, 63, 634];
        case 'columns':
            return [6, 63, 635];
        case 'blockquote':
            return [6, 63, 636];
        case 'text-marquee':
            return [6, 64, 641];
        case 'scroll-slider':
            return [6, 64, 642];
        case 'portfolio-project-showcase':
            return [6, 64, 644];

    }

    //Second element of updatedPath array

    switch(updatedPath[1]){
        // case '':
        //     return [1, 11, 111];
        case 'big-images':
            return [2, 21, 213];
        case 'big-slider':
            return [2, 21, 214];
        case 'small-images':
            return [2, 21, 215];
        case 'small-slider':
            return [2, 21, 216];
        case 'gallery':
            return [2, 21, 217];
        case 'small-gallery':
            return [2, 21, 218];
        case 'standard-post':
            return [4, 41, 415, 4151];
        // default:
        //     return [];
    }
}

export const activateBlogCategory = (path) => {
    let updatedPath = path.split("/");
    return {
        page: pathToKey(updatedPath[0]),
        categoryName: updatedPath[1]
    }
}

export const activateBlogTag = (path) => {
    let updatedPath = path.split("/");
    return {
        page: pathToKey(updatedPath[0]),
        tagName: updatedPath[1]
    }
}

export const pathToKey = (path) => {
    let _path = path;
    let _pathToArray = _path.split("-");
    _pathToArray = _pathToArray
                    .map(el => Utility.firstLetterToUppercase(el))
                    .join("");

    return Utility.firstLetterToLowercase(_pathToArray);
}

export const categoryPathToKey = (path) => {
    let category = path;
    let categoryToArray = category.split("");
    let indexOfSlash = categoryToArray.findIndex(item => item === "-");
    if(indexOfSlash !== -1){
        categoryToArray.splice(indexOfSlash, 1)
        let lowerToUpperCase = categoryToArray[indexOfSlash].toUpperCase();
        categoryToArray.splice(indexOfSlash, 1, lowerToUpperCase);
        category = categoryToArray.join("");
    }
    return category;
}

export const categoryKeyToPath = (key) => {
    let categoryToArray = key.split("");

    let hasDash = categoryToArray.some(x => x === "-");
    if(hasDash) return "The key cannot be converted to path";
    let indexOfUpperCaseLetter;
    indexOfUpperCaseLetter = categoryToArray.map((item, i) => {
        if(item === item.toUpperCase()){
            return i;
        }else{
            return false;
        }
    })
    indexOfUpperCaseLetter = indexOfUpperCaseLetter.find(item => item !== false);
    if(indexOfUpperCaseLetter){
        categoryToArray.splice(indexOfUpperCaseLetter, 1, categoryToArray[indexOfUpperCaseLetter].toLowerCase());
        categoryToArray.splice(indexOfUpperCaseLetter, 0, "-");
    }
    return categoryToArray.join("");
}

export const categoryFromLocationPathname = (path) => {
    console.log(path)
    let arr = path.split("/");
    if(arr.length === 4 && arr[2] === "portfolio-category"){
        return categoryPathToKey(arr[3]);
    }else{
        return;
    }
}

export const removeDublicatesFromArray = (data) => {
    return data.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
}

export const changeKeyToLabel = (val) => {
    let label = val.split("");
    let firstLetter = label[0].toUpperCase();
    let indexOfUppercase = label.map(el => el === el.toUpperCase()).findIndex(item => item === true);
    if(indexOfUppercase !== -1) label.splice(indexOfUppercase, 0, " ");
    label.splice(0, 1, firstLetter);
    return label.join("");
}

export const setWidthOfImage = (page, screenWidth, opt) => {
    let width;
    switch(page){
        case 'twoColumnsPage':
            if(screenWidth > 1200){
                width = 535;
            }else if(screenWidth <= 1200 && screenWidth > 905){
                width = 400;
            }else if(screenWidth <= 905 && screenWidth > 710){
                width = 300;
            }else if(screenWidth <= 710){
                width = 200;
            }
            break;
        case 'threeColumnsPage':
            if(screenWidth > 1250){
                width = 370;
            }else if(screenWidth <= 1250 && screenWidth > 1030){
                width = 300;
            }else if(screenWidth <= 1030 && screenWidth > 890){
                width = 250;
            }else if(screenWidth <= 890 && screenWidth > 734){
                width = 200;
            }else if(screenWidth <= 734 && screenWidth > 600){
                width = 250;
            }else if(screenWidth <= 600){
                width = 200;
            }
            break;
        case 'fourColumnsPage':
            if(screenWidth > 1250){
                width = 270;
            }else if(screenWidth <= 1250 && screenWidth > 1165){
                width = 250;
            }else if(screenWidth <= 1165 && screenWidth > 960){
                width = 200;
            }else if(screenWidth <= 960 && screenWidth > 734){
                width = 300;
            }else if(screenWidth <= 734 && screenWidth > 600){
                width = 250;
            }else if(screenWidth <= 600){
                width = 200;
            }
            break;
    }
   
    if(opt === "widthWithPaddingRight"){
        width = width + 30;
    }
    return width;
}

export const calcTranslateCoordinates = (page, screenWidth, coordinate, elIndex, position) => {
    if(position === "atTheBeginning") return 0;
    let widthOfElement;
    switch(page) {
        case 'twoColumnsPage':
            widthOfElement = setWidthOfImage(page, screenWidth);
            if(coordinate === "X") return widthOfElement + 30;
            if(coordinate === "Y") return calculateTranslateYForTwoColumnsPage(page, elIndex, screenWidth);
            break;
        case 'threeColumnsPage':
            widthOfElement = setWidthOfImage(page, screenWidth);
            if(coordinate === "X"){
                if(position === "secondColumn"){
                    return widthOfElement + 30;
                }else if(position === "thirdColumn"){
                    return 2*widthOfElement + 60;
                }
            }
            if(coordinate === "Y") return calculateTranslateYForThreeColumnsPage(page, elIndex, screenWidth);
            break;
        case 'threeColumnsPageSmallScreen':
            widthOfElement = setWidthOfImage("threeColumnsPage", screenWidth);
            if(coordinate === "X") return widthOfElement + 30;
            if(coordinate === "Y") return calculateTranslateYForThreeColumnsPageSmallScreen("threeColumnsPage", elIndex, screenWidth);
            break;
        case 'fourColumnsPage':
            widthOfElement = setWidthOfImage(page, screenWidth);
            if(coordinate === "X"){
                if(position === "secondColumn"){
                    return widthOfElement + 30;
                }else if(position === "thirdColumn"){
                    return 2*widthOfElement + 60;
                }else if(position === "fourthColumn"){
                    return 3*widthOfElement + 90;
                }
            }
            if(coordinate === "Y") return calculateTranslateYForFourColumnsPage(page, elIndex, screenWidth);
            break;
        case 'fourColumnsPageSmallScreen':
            widthOfElement = setWidthOfImage("fourColumnsPage", screenWidth);
            if(coordinate === "X") return widthOfElement + 30;
            if(coordinate === "Y") return calculateTranslateYForFourColumnsPageSmallScreen("fourColumnsPage", elIndex, screenWidth);
            break;
    }
    
}

export const setArrayOfAppearAndDisapperElements = (itemsArray, category) => {
    let arrayOfAppearAndDisapperElements = [];
    itemsArray.map(el => {
        let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === category);
        if(checkIfElementHasSelectedCategory){
            arrayOfAppearAndDisapperElements.push({
                id: el.id,
                disappear: false
            })
        }else{
            arrayOfAppearAndDisapperElements.push({
                id: el.id,
                disappear: true
            })
        }
    })
    return arrayOfAppearAndDisapperElements;
}
export const updateArrayOfTwoColumnsData = (itemsArray, category) => {
    if(category === "showAll") return itemsArray
    let updatedItemsArray = [];
    itemsArray.map((el, i) => {
        let checkIfElementHasSelectedCategory = el.categories.some(item => item.key === category);
        if(checkIfElementHasSelectedCategory){
            updatedItemsArray.push({
               ...el,
            })
        }else{
            updatedItemsArray.push(false)
        }
    })
    updatedItemsArray = updatedItemsArray
                        .filter(item => item !== false)
                        // .map((el, i) => {
                        //     return{
                        //         ...el,
                        //         id: i+1
                        //     }
                        // });
    return updatedItemsArray;
}
export const updateTranslateCoordinatesOfAppearElements = (page, arrayOfDisappearAndAppearElements, screenWidth) => {
    let appearElementsArray = [];
    arrayOfDisappearAndAppearElements.map(el => {
        if(!el.disappear){
            appearElementsArray.push(el);
        }
    })
    switch(page){
        case 'twoColumnsPage':
            appearElementsArray = appearElementsArray.map((el, i) => {
                let translateX = (i%2 === 0 ? 0 : setWidthOfImage(page, screenWidth, "widthWithPaddingRight"));
                let translateY = calculateTranslateYForTwoColumnsPage(page, i, screenWidth);
               
                return {
                    id: el.id,
                    key: `img${el.id}`,
                    translateX: translateX,
                    translateY: translateY
                };
            });
            break;
        case 'threeColumnsPage':
            appearElementsArray = appearElementsArray.map((el, i) => {
                let translateX = calculateTranslateXForThreeColumnsPage(page, i, screenWidth);
                let translateY = calculateTranslateYForThreeColumnsPage(page, i, screenWidth);
                
                return {
                    id: el.id,
                    key: `img${el.id}`,
                    translateX: translateX,
                    translateY: translateY
                };
            });
            break;
        case 'threeColumnsPageSmallScreen':
            appearElementsArray = appearElementsArray.map((el, i) => {
                let translateX = (i%2 === 0 ? 0 : setWidthOfImage("threeColumnsPage", screenWidth, "widthWithPaddingRight"));
                let translateY = calculateTranslateYForThreeColumnsPageSmallScreen("threeColumnsPage", i, screenWidth);
                
                return {
                    id: el.id,
                    key: `img${el.id}`,
                    translateX: translateX,
                    translateY: translateY
                };
            });
            break;
        case 'fourColumnsPage':
            appearElementsArray = appearElementsArray.map((el, i) => {
                let translateX = calculateTranslateXForFourColumnsPage(page, i, screenWidth);
                let translateY = calculateTranslateYForFourColumnsPage(page, i, screenWidth);
                
                return {
                    id: el.id,
                    key: `img${el.id}`,
                    translateX: translateX,
                    translateY: translateY
                };
            });
            break;
        case 'fourColumnsPageSmallScreen':
            appearElementsArray = appearElementsArray.map((el, i) => {
                let translateX = (i%2 === 0 ? 0 : setWidthOfImage("fourColumnsPage", screenWidth, "widthWithPaddingRight"));
                let translateY = calculateTranslateYForFourColumnsPageSmallScreen("fourColumnsPage", i, screenWidth);
                
                return {
                    id: el.id,
                    key: `img${el.id}`,
                    translateX: translateX,
                    translateY: translateY
                };
            });
            break;
    }
  return appearElementsArray;
}

const calculateTranslateYForTwoColumnsPage = (page, i, screenWidth) => {
    switch(i){
        case 2:
        case 3:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 4:
        case 5:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 6:
        case 7:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 8:
        case 9:
            return 4 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 10:
        case 11:
            return 5 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 12:
        case 13:
            return 6 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 14:
        case 15:
            return 7 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 16:
        case 17:
            return 8 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateXForThreeColumnsPage = (page, i, screenWidth) => {
    switch(i){
        case 0:
        case 3:
        case 6:
        case 9:
        case 12:
        case 15:
            return 0;
        case 1:
        case 4:
        case 7:
        case 10:
        case 13:
        case 16:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 2:
        case 5:
        case 8:
        case 11:
        case 14:
        case 17:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateYForThreeColumnsPage = (page, i, screenWidth) => {
    switch(i){
        case 3:
        case 4:
        case 5:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 6:
        case 7:
        case 8:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 9:
        case 10:
        case 11:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 12:
        case 13:
        case 14:
            return 4 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 15:
        case 16:
        case 17:
            return 5 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateYForThreeColumnsPageSmallScreen = (page, i, screenWidth) => {
    switch(i){
        case 2:
        case 3:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 4:
        case 5:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 6:
        case 7:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 8:
        case 9:
            return 4 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 10:
        case 11:
            return 5 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 12:
        case 13:
            return 6 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 14:
        case 15:
            return 7 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 16:
        case 17:
            return 8 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateXForFourColumnsPage = (page, i, screenWidth) => {
    switch(i){
        case 0:
        case 4:
        case 8:
        case 12:
        case 16:
            return 0;
        case 1:
        case 5:
        case 9:
        case 13:
        case 17:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 2:
        case 6:
        case 10:
        case 14:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 3:
        case 7:
        case 11:
        case 15:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateYForFourColumnsPage = (page, i, screenWidth) => {
    switch(i){
        case 4:
        case 5:
        case 6:
        case 7:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 8:
        case 9:
        case 10:
        case 11:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 12:
        case 13:
        case 14:
        case 15:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 16:
        case 17:
            return 4 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

const calculateTranslateYForFourColumnsPageSmallScreen = (page, i, screenWidth) => {
    switch(i){
        case 2:
        case 3:
            return setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 4:
        case 5:
            return 2 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 6:
        case 7:
            return 3 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 8:
        case 9:
            return 4 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 10:
        case 11:
            return 5 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 12:
        case 13:
            return 6 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 14:
        case 15:
            return 7 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        case 16:
        case 17:
            return 8 * setWidthOfImage(page, screenWidth, "widthWithPaddingRight");
        default:
            return 0;
    }
}

export function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
