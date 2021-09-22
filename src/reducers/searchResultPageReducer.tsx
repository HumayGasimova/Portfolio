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
    searchInputForm: {},
    searchInputFormResponse: {
        item: {},
        loading: false,
        error: null
    },
    activePageId: 1,
    pagesArray: [],
}

const fetchSearchThroughWebsiteResutDataBegin = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: true,
            error: null
        }
    };
}

const fetchSearchThroughWebsiteResutDataSuccess = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: false,
            item: action.obj
        }
    };
}

const fetchSearchThroughWebsiteResutDataFailur = (state, action) => {
    return {
        ...state,
        searchInputFormResponse: {
            ...state.searchInputFormResponse,
            loading: false,
            error: action.err,
            item: {}
        }
    };
}

const initSearchInputFormThroughWebsite = (state, action) => {
    return {
        ...state,
        searchInputForm: action.obj
    }
} 

const setInputFiledValueAndCheckValidationThroughWebsite = (state, action) => {
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
        case 'searchInputForm':
            return {
                ...state,
                searchInputForm: updatedInputFieldObj            
            };
        default:
            return {...state}
    }
}

const searchThroughWebsite = (state, action) => {
    let updatedSearchInputForm = {...state.searchInputForm, inputsArray: [...state.searchInputForm.inputsArray]};

    if(state.searchInputForm.formIsValid && state.searchInputForm.inputsArray){        
        updatedSearchInputForm.formIsValid = false;
        updatedSearchInputForm.inputsArray = updatedSearchInputForm.inputsArray.map(el => {
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
        updatedSearchInputForm.inputsArray = updatedSearchInputForm.inputsArray.map((el, i) => {
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
        searchInputForm: updatedSearchInputForm
    }; 
}

const initSearchResultPagePagination = (state, action) => {
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

const activatePageNumberForSearchResultPage = (state, action) => {
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

const searchResultPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_BEGIN:
            return fetchSearchThroughWebsiteResutDataBegin (state, action);
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_SUCCESS:
            return fetchSearchThroughWebsiteResutDataSuccess (state, action);
        case actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_FAILURE:
            return fetchSearchThroughWebsiteResutDataFailur (state, action);
        case actionTypes.INIT_SEARCH_INPUT_FORM_THROUGH_WEBSITE:
            return initSearchInputFormThroughWebsite (state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_THROUGH_WEBSITE:
            return setInputFiledValueAndCheckValidationThroughWebsite (state, action);
        case actionTypes.SEARCH_THROUGH_WEBSITE:
            return searchThroughWebsite (state, action);
        case actionTypes.INIT_SEARCH_RESULT_PAGE_PAGINATION:
            return initSearchResultPagePagination (state, action);
        case actionTypes.ACTIVATE_PAGE_NUMBER_FOR_SEARCH_RESULT_PAGE:
            return activatePageNumberForSearchResultPage(state, action);
        default: 
            return state;
    }
}

export default searchResultPageReducer;
 