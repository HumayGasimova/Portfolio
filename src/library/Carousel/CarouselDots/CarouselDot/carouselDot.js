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

import './carouselDot.scss';

/**
 * CarouselDot component definition and export
 */

export const CarouselDot = (props) => {

    /**
     * State
     */

    /**
     * Methods
     */

    /**
     * Markup
     */

    return(
            <div className={props.active ? "carousel-dot-active" : 'carousel-dot'}>
              
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
)(CarouselDot);
 