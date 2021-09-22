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
    section1: {
        inputForm: {},
        getDirectionResponse: {
            item: {},
            loading: false,
            error: null
        }
    },
    section2: {
        inputForm: {},
        subscribeResponse: {
            item: {},
            loading: false,
            error: null
        }
    }, 
    section3: {
        inputForm: {},
        submitResponse: {
            item: {},
            loading: false,
            error: null
        }
    }
}

const initInputFormForContactFormPage = (state, action) => {
    switch(action.opt){
        case 'section1InputForm':
            return {
                ...state,
                section1: {
                    ...state.section1,
                    inputForm: action.obj
                }
            }
        case 'section2InputForm':
            return {
                ...state,
                section2: {
                    ...state.section2,
                    inputForm: action.obj
                }
            }
        case 'section3InputForm':
            return {
                ...state,
                section3: {
                    ...state.section3,
                    inputForm: action.obj
                }
            }
        default:
            return {...state}
    }
} 

const setInputFiledValueAndCheckValidationForContactFormPage = (state, action) => {
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
        case 'section1InputForm':
            return {
                ...state,
                section1: {
                    ...state.section1,
                    inputForm: updatedInputFieldObj
                }
            };
        case 'section2InputForm':
            return {
                ...state,
                section2: {
                    ...state.section2,
                    inputForm: updatedInputFieldObj
                }
            };
        case 'section3InputForm':
            return {
                ...state,
                section3: {
                    ...state.section3,
                    inputForm: updatedInputFieldObj
                }
            };
        default:
            return {...state}
    }
}

const getDirectionContactFormPage = (state, action) => {
    let updatedSection1InputForm = {...state.section1.inputForm, inputsArray: [...state.section1.inputForm.inputsArray]};

    if(state.section1.inputForm.formIsValid && state.section1.inputForm.inputsArray){
        // let info = {
        //     id: uuid(),
        //     fullName: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "fullName").value}`,
        //     company: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "company").value}`,
        //     email: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
        //     // date: Utility.getCurrentDateAndTime(),
        //     phone: `${state.section1.inputForm.inputsArray.find(x => x.controlName === "phone").value}`,
        // }
        // updatedSingleStory.comments.push(comment);
        // updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedSection1InputForm.formIsValid = false;
        updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {
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
        updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map((el, i) => {
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
        section1: {
            ...state.section1,
            inputForm: updatedSection1InputForm
        }
    }; 
}

const subscribeContactFormPage = (state, action) => {
    let updatedSection2InputForm = {...state.section2.inputForm, inputsArray: [...state.section2.inputForm.inputsArray]};

    if(state.section2.inputForm.formIsValid && state.section2.inputForm.inputsArray){
        // let info = {
        //     id: uuid(),
        //     email: `${state.section2.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
        //     // date: Utility.getCurrentDateAndTime(),t
        // }
        // updatedSingleStory.comments.push(comment);
        // updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedSection2InputForm.formIsValid = false;
        updatedSection2InputForm.inputsArray = updatedSection2InputForm.inputsArray.map(el => {
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
        updatedSection2InputForm.inputsArray = updatedSection2InputForm.inputsArray.map((el, i) => {
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
        section2: {
            ...state.section2,
            inputForm: updatedSection2InputForm
        }
    }; 
}

const submitContactFormPage = (state, action) => {
    let updatedSection3InputForm = {...state.section3.inputForm, inputsArray: [...state.section3.inputForm.inputsArray]};
    
    if(state.section3.inputForm.formIsValid && state.section3.inputForm.inputsArray){
        // let info = {
        //     id: uuid(),
        //     email: `${state.section3.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
        //     // date: Utility.getCurrentDateAndTime(),t
        // }
        // updatedSingleStory.comments.push(comment);
        // updatedSection1InputForm.inputsArray = updatedSection1InputForm.inputsArray.map(el => {return {...el, value: ''}});
        
        updatedSection3InputForm.formIsValid = false;
        updatedSection3InputForm.inputsArray = updatedSection3InputForm.inputsArray.map(el => {
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
        updatedSection3InputForm.inputsArray = updatedSection3InputForm.inputsArray.map((el, i) => {
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
        section3: {
            ...state.section3,
            inputForm: updatedSection3InputForm
        }
    }; 
}

const fetchGetDirectionContactFormPageBegin = (state, action) => {
    let updateSection1Data = {
        ...state.section1,
        getDirectionResponse: {
            ...state.section1.getDirectionResponse,
            loading: true,
            error: null
        }
    };

    return {
        ...state,
        section1: updateSection1Data
    };
}

const fetchGetDirectionContactFormPageSuccess = (state, action) => {
    let updateSection1Data = {
        ...state.section1,
        getDirectionResponse: {
            ...state.section1.getDirectionResponse,
            loading: false,
            item: action.obj
        }
    };
    
    return {
        ...state,
        section1: updateSection1Data
    };
}

const fetchGetDirectionContactFormPageFailur = (state, action) => {
    let updateSection1Data = {
        ...state.section1,
        getDirectionResponse: {
            ...state.section1.getDirectionResponse,
            loading: false,
            error: action.err,
            item: {}
        }
    };

    return {
        ...state,
        section1: updateSection1Data
    };
}

const fetchSubscribeContactFormPageBegin = (state, action) => {
    let updateSection2Data = {
        ...state.section2,
        subscribeResponse: {
            ...state.section2.subscribeResponse,
            loading: true,
            error: null
        }
    };

    return {
        ...state,
        section2: updateSection2Data
    };
}

const fetchSubscribeContactFormPageSuccess = (state, action) => {
    let updateSection2Data = {
        ...state.section2,
        subscribeResponse: {
            ...state.section2.subscribeResponse,
            loading: false,
            item: action.obj
        }
    };

    return {
        ...state,
        section2: updateSection2Data
    };
}

const fetchSubscribeContactFormPageFailur = (state, action) => {
    let updateSection2Data = {
        ...state.section2,
        subscribeResponse: {
            ...state.section2.subscribeResponse,
            loading: false,
            error: action.err,
            item: {}
        }
    };
    return {
        ...state,
        section2: updateSection2Data
    };
}

const fetchSubmitContactFormPageBegin = (state, action) => {
    let updateSection3Data = {
        ...state.section3,
        submitResponse: {
            ...state.section3.submitResponse,
            loading: true,
            error: null
        }
    };

    return {
        ...state,
        section3: updateSection3Data
    };
}

const fetchSubmitContactFormPageSuccess = (state, action) => {
    let updateSection3Data = {
        ...state.section3,
        submitResponse: {
            ...state.section3.submitResponse,
            loading: false,
            item: action.obj
        }
    };

    return {
        ...state,
        section3: updateSection3Data
    };
}

const fetchSubmitContactFormPageFailur = (state, action) => {
    let updateSection3Data = {
        ...state.section3,
        submitResponse: {
            ...state.section3.submitResponse,
            loading: false,
            error: action.err,
            item: {}
        }
    };
    return {
        ...state,
        section3: updateSection3Data
    };
}

const contactFormPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_INPUT_FORM_FOR_CONTACT_FORM_PAGE:
            return initInputFormForContactFormPage (state, action);
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_FOR_CONTACT_FORM_PAGE:
            return setInputFiledValueAndCheckValidationForContactFormPage (state, action);
        case actionTypes.GET_DIRECTION_CONTACT_FORM_PAGE:
            return getDirectionContactFormPage (state, action);
        case actionTypes.SUBSCRIBE_CONTACT_FORM_PAGE:
            return subscribeContactFormPage (state, action);
        case actionTypes.SUBMIT_CONTACT_FORM_PAGE:
            return submitContactFormPage (state, action);
        case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_BEGIN:
            return fetchGetDirectionContactFormPageBegin (state, action); 
        case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_SUCCESS:
            return fetchGetDirectionContactFormPageSuccess (state, action);
        case actionTypes.FETCH_GET_DIRECTION_CONTACT_FORM_PAGE_FAILURE:
            return fetchGetDirectionContactFormPageFailur(state, action);
        case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_BEGIN:
            return fetchSubscribeContactFormPageBegin (state, action); 
        case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_SUCCESS:
            return fetchSubscribeContactFormPageSuccess (state, action);
        case actionTypes.FETCH_SUBSCRIBE_CONTACT_FORM_PAGE_FAILURE:
            return fetchSubscribeContactFormPageFailur(state, action);
        case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_BEGIN:
            return fetchSubmitContactFormPageBegin (state, action); 
        case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_SUCCESS:
            return fetchSubmitContactFormPageSuccess (state, action);
        case actionTypes.FETCH_SUBMIT_CONTACT_FORM_PAGE_FAILURE:
            return fetchSubmitContactFormPageFailur(state, action);
        default: 
            return state;
    }
}

export default contactFormPageReducer;
