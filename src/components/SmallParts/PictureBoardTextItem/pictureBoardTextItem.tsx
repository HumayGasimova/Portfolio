/**
 * Libraries
 */

import * as React from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './pictureBoardTextItem.scss';

/**
 * Utility
 */

import {
    H15,
    H40,
    EH10
} from '../../UtilityComponents';

/**
 * Icons
 */

import { 
    faEye
} from '@fortawesome/free-solid-svg-icons';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Types
 */

import * as Types from './pictureBoardTextItemTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';
 
/**
 * PictureBoardTextItem component definition and export
 */

export const PictureBoardTextItem: React.FC<Types.PictureBoardTextItemProps> = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = React.useState(false);

    /**
     * Methods
     */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const iconOnClick = (array: Array<GeneralTypes.ImagesArrayItem>) => {
        props.photoViewerOpen('pictureBoardForTextItem', true, array);
    }

    /**
     * Markup
     */

    return(
        <div 
            className="picture-board-text-item"
            onClick={() => iconOnClick(props.imagesArray)}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="picture-board-text-item-text-wrapper">
                <H15 className="h15-nobel-lustria-animation">{props.header}</H15>
                <EH10/>
                <H40 className={isHovering ? "h40-white-teko" : "h40-nero-teko"}>{props.text}</H40>
            </div>
            <div className="picture-board-text-item-icon">
                <FontAwesomeIcon 
                    icon={faEye} 
                    size="1x" 
                    color={isHovering ? "white" : "rgb(37, 37, 37)"}
                />
            </div>
        </div>
    );
}

export default connect<null, Types.MapDispatchToPropsTypes>(
   null,
    (dispatch) => {
        return {
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch)
        };
    }
)(PictureBoardTextItem);
