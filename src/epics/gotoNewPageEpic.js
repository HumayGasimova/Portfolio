/**
 * Operators
 */

import { 
    of,
    empty 
} from 'rxjs';

import { 
    mergeMap
  } from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
 * Constants
 */

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
 * Utility
 */

import * as Utility from '../utility';

/**
 * Epic
 */

export const gotoNewPageEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.GO_TO_NEW_PAGE),
        mergeMap(action => {
            let category = state$.value.archive.category;
            let categoryToPath;
            if(state$.value.archive.category){
                categoryToPath = Utility.categoryKeyToPath(category);
            }
            if(action.repeatedKey === category && action.page === "archive"){
                if(action.button === 0){
                    return of(
                        Actions.setUnmountComponentValues(false, action.repeatedPath)
                    )
                }
                if(action.button === 1){  
                    window.open(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`, "_blank");
                    return empty();
                }
            }else{
                console.log(action.page)
                if(action.button === 0){
                    dependencies$.history.push(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`, {
                                                                                                                        page: action.page, 
                                                                                                                        category: categoryToPath
                                                                                                                    });
                }
                if(action.button === 1){
                    window.open(`/crypto-portfolio/${state$.value.home.unmountComponent.gotoPage}`, "_blank");
                }
                return empty();
            }
        })
    )

export default gotoNewPageEpic;
