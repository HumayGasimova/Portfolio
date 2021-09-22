import * as actionTypes from '../constants/actionTypes';

export function fetchSearchThroughWebsiteResutDataBegin() {
    return { 
        type: actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_BEGIN
    };
};

export function fetchSearchThroughWebsiteResutDataSuccess(obj) {
    return { 
        type: actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_SUCCESS,
        obj: obj
    };
};

export function fetchSearchThroughWebsiteResutDataFailur(err) {
    return { 
        type: actionTypes.FETCH_SEARCH_THROUGH_WEBSITE_DATA_FAILURE,
        err: err
    };
};

export function initSearchInputFormThroughWebsite(obj) {
    return { 
        type: actionTypes.INIT_SEARCH_INPUT_FORM_THROUGH_WEBSITE,
        obj: obj
    };
};

export function setInputFiledValueAndCheckValidationThroughWebsite(obj, _event, inputFieldId, formName) {
    return { 
        type: actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_THROUGH_WEBSITE,
        obj: obj,
        _event: _event,
        inputFieldId: inputFieldId,
        formName: formName
    };
};

export function searchThroughWebsite() {
    return { 
        type: actionTypes.SEARCH_THROUGH_WEBSITE
    };
};

export function initSearchResultPagePagination(numOfPages) {
    return { 
        type: actionTypes.INIT_SEARCH_RESULT_PAGE_PAGINATION,
        numOfPages: numOfPages
    };
};

export function activatePageNumberForSearchResultPage(activePageId) {
    return { 
        type: actionTypes.ACTIVATE_PAGE_NUMBER_FOR_SEARCH_RESULT_PAGE,
        activePageId: activePageId
    };
};