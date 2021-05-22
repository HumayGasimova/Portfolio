/**
 * Operators
 */

import { 
    of,
    empty 
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
 * Utility
 */

import * as Utility from '../utility';

/**
 * Epic
 */

export const portfolioNavigationOnClickStartEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.PORTFOLIO_NAVIGATION_ON_CLICK_START),
        mergeMap(action => {
            return of(
                Actions.portfolioNavigationOnClick(action.path, action.page, action.category)
            ).pipe(
                delay(2)
            )
        })
    )

export default portfolioNavigationOnClickStartEpic;
