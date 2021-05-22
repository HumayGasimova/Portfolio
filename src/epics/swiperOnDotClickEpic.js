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

export const swiperOnDotClickEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.SWIPER_ON_DOT_CLICK_START),
        mergeMap(action => {

            // if(action.opt === "next"){
            //     translate = props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
            // } 
            // if(action.opt === "prev"){
            //     translate = 0;
            // }
            // console.log("S",state$.value.testimonialsPage.section1Data.swiper._slides)
            if(action.opt === "testimonialsPageSection1"){
                return of(
                    Actions.setSwiperStateForTestimonialsPageSection1(action.slides, action._updatedSlides, action.activeIndex, action.translate, action.transition, true)
                )
            }
          
        })
    )

export default swiperOnDotClickEpic;
