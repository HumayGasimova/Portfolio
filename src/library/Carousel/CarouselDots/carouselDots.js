/**
 * Libraries
 */

import React from 'react';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './carouselDots.scss';

/**
 * Components
 */

import CarouselDot from './CarouselDot/carouselDot';

/**
 * CarouselDots component definition and export
 */

export const CarouselDots = (props) => {

    /**
     * Methods
     */
   
    const renderDots = () => {
        return(<>{props.slides.map((el, i) => {
            return(
                <CarouselDot key={i} active={props.activeIndex === i} />
            )
        })}</>)
    }

    /**
     * Markup
     */

    return(
            <div className="carousel-dots">
                {renderDots()}
            </div>
    );
}

export default connect(
    (state) => {
        return {
            // singleStory: Selectors.getSingleStoryState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            // startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            // initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
        };
    }
)(CarouselDots);
 