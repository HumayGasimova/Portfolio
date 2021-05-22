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

export const scrollToCommentsSectionEpic = (action$, state$, dependencies$) => 
    action$.pipe(
        ofType(actionTypes.START_SCROLL_TO_COMMENTS_SECTION),
        mergeMap(action => {
            
            let commentsSection = document.getElementById("blogCommentsSectionBlogListStandardPage");
            console.log("commentsSection",state$.value.blogListStandardPage.activeItem.activated)
            // document.getElementById("html").style.scrollBehavior = null;
            // dependencies$.history.push(`/crypto-portfolio/${action.path}`, {page: action.page, category: action.category});
            return empty();
        })
    )

export default scrollToCommentsSectionEpic;
