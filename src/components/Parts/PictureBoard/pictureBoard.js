/**
 * Libraries
 */

import React, {
    useEffect,
    useRef
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './pictureBoard.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import PictureBoardTextItem from '../../SmallParts/PictureBoardTextItem/pictureBoardTextItem';
import SwitchImage from '../../SmallParts/SwitchImage/switchImage';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
   H19
} from '../../UtilityComponents';

/**
 * PictureBoard component definition and export
 */

export const PictureBoard = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const initCoordinateRange = [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        }
    ]

    /**
     * Methods
     */

    useEffect(() => {
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // Forget coordinates of all image holders

        props.forgetCoordinateRangeForPictureBoard(initCoordinateRange);
    }

    const renderPictureBoard = () => {
        if(props.pictureBoard.loading && !props.pictureBoard.error){
            return(
                <div className="picture-board-loading-error">
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.pictureBoard.loading && !props.pictureBoard.error){
            return(
                <>
                    {renderPictureBoardItems()}
                </>
            )
        }
        if(!props.pictureBoard.loading && props.pictureBoard.error){
            return(
                <div className="picture-board-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.pictureBoard.error}`}</H19>
                </div>
            )
        }
    } 

    const renderPictureBoardItems = () => {
        return(
            <div className="picture-board-items">{props.pictureBoard.items.map((el,i) => {
                if(el.option === "text"){
                    return(
                        <PictureBoardTextItem 
                            key={i}
                            id={el.id}
                            option={el.option}
                            header={el.header}
                            text={el.text}
                            imagesArray={el.pictures}
                        />
                    )
                }else{
                    // Set the coordinates for the image holder

                    let imgCoordinateRange = props.pictureBoardImagesCooradinateRange.find(item => item.id === el.id);

                    return(
                        <SwitchImage  
                            key={i}
                            component="pictureBoard"
                            id={el.id}
                            option={el.option}
                            imagesArray={el.pictures}
                            alt={el.alt}
                            path={el.path}
                            rememberCoordinateRange={props.rememberCoordinateRangeForPictureBoard}
                            imgCoordinateRange={imgCoordinateRange}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}

                        />
                    )
                }
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="picture-board" id="pictureBoard">
            {renderPictureBoard()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            pictureBoard: Selectors.getPictureBoardItemsState(state),
            pictureBoardImagesCooradinateRange: Selectors.getPictureBoardImagesCooradinateRangeState(state),
        };
    },
    (dispatch) => {
        return {
            rememberCoordinateRangeForPictureBoard: bindActionCreators(Actions.rememberCoordinateRangeForPictureBoard, dispatch),
            forgetCoordinateRangeForPictureBoard: bindActionCreators(Actions.forgetCoordinateRangeForPictureBoard, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch)
        };
    }
)(PictureBoard);
 