/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './testimonials.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Swiper from '../../../library/Swiper/swiper';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H45,
    EH25,
    EH80,
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Testimonials component definition and export
 */

export const Testimonials = (props) => {

    /**
     * State
     */

    const size = useWindowSize();

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component
        
        if(props.testimonials.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)
                
                props.fetchTestimonialsSuccess(FakeData.testimonials);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchTestimonials();
            }
        }
        
    }, [props.testimonials.items.length]);

    /**
     * Markup
     */

    const renderTestimonialsDataContent = () => {
        if(props.testimonials.loading && !props.testimonials.error){
            return(
                <div 
                    className="testimonials-loading-error" 
                    style={{height: `${size.height/2}px`,}}
                >
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.testimonials.loading && !props.testimonials.error){
            return(
                <>
                    <EH80/>
                    <H45 className="h45-white-lustria">Testimonials</H45>
                    <EH25/>
                    {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                    process.env.ENVIRONMENT === Environment.PRODUCTION && props.testimonials.items.length !== 0 ? 
                    <Swiper 
                        component="testimonials"
                        contentArray={props.testimonials.items}
                        content={props.testimonials}
                        translateWidth={size.width - 130}
                        showNumbersOfSlides={1}
                        setSwiperState={props.setSwiperStateForHomePage}
                        swiperData={props.testimonials.swiper}
                        autoPlay
                    /> : null} 
                    <EH80/>
                </>
            )
        }
        if(!props.testimonials.loading && props.testimonials.error){
            return(
                <div 
                    className="testimonials-loading-error" 
                    style={{height: `${size.height/2}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.testimonials.error}`}</H15>
                </div>
            )
        }
    } 
    
    return(
        <div className="testimonials">
            {renderTestimonialsDataContent()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            testimonials: Selectors.getTestimonialsState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTestimonials: bindActionCreators(Services.fetchTestimonials, dispatch),
            fetchTestimonialsSuccess: bindActionCreators(Actions.fetchTestimonialsSuccess, dispatch),
            setSwiperStateForHomePage: bindActionCreators(Actions.setSwiperStateForHomePage, dispatch),
        };
    }
)(Testimonials);
 