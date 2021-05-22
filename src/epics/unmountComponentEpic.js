/**
 * Operators
 */

import { 
    of
} from 'rxjs';

import { 
    mergeMap, 
    delay 
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
 * Epic
 */

export const unmountComponentEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.UNMOUNT_COMPONENT),
        mergeMap(action => {
            document.getElementById("html").style.scrollBehavior = null;
            console.log(action.page)
            if(action.button !== 1){
                return of(
                    Actions.gotoNewPage(action.repeatedKey, action.repeatedPath, action.page, action.button)
                ).pipe(
                    delay(1000)
                )
            }else{
                return of(
                    Actions.gotoNewPage(action.repeatedKey, action.repeatedPath, action.page, action.button)
                )
            }
            
        })
    )

export default unmountComponentEpic;
