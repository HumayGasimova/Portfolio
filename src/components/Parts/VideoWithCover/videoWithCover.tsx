/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './videoWithCover.scss';

/**
 * Components
 */

import Video from '../Video/video';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Types
 */

import * as Types from './videoWithCoverTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * VideoWithCover component definition and export
 */

export const VideoWithCover: React.FC<Types.VideoWithCoverProps> = (props) => {

    /**
     * State
     */

    const [isHoveringPlayButton, setIsHoveringPlayButton] = React.useState<string>("init");
    const [videoShown, setVideoShown] = React.useState<boolean>(false);

    /**
     * Methods
     */

    React.useEffect(() => {
    }, []);

    /**
     * Markup
     */

    const renderClassName = (isHovering: string) => {
        switch(isHovering){
            case 'init':
                return "video-play-button";
            case 'on':
                return "video-play-button-hover-on";
            case 'off':
                return "video-play-button-hover-off"
        }       
    }

    const handleMouseEnter = () => {
        setIsHoveringPlayButton("on");
    }

    const handleMouseLeave = () => {
        setIsHoveringPlayButton("off");
    }

    const loadImg = (imgKey: string) => {
        switch(imgKey){
            case 'teamWorkImg':
                return Images.VIDEO_COVER_IMG_1;
            default:
                return "";
        }
    }

    const showVideo = (e) => {
        switch(e.button){
            case 0: 
                // Play video on left mouse click
                setVideoShown(true);
                return;
            case 1:
                // Open the website (from which the vidoe was downloaded) in a new window on scroll wheel click
                window.open("https://www.pexels.com/", "_blank");
                return;
            case 2:
                // Do nothing on right mouse click
                return;
        }      
    }

    return(
        <div className="video-with-cover">
            {!videoShown ? 
            <div className="video-wrapper">
                <img src={loadImg(props.coverImageKey)}/>
                <div className="video-play-button-wrapper">
                    <div 
                        className={renderClassName(isHoveringPlayButton)}
                        onMouseDown={(e) => showVideo(e)}
                        onMouseEnter={() => handleMouseEnter()} 
                        onMouseLeave={() => handleMouseLeave()}
                    >
                    </div>
                </div>
            </div> : null}
            {videoShown ?
            <div className="video-copyrights-wrapper">
                <Video
                    videoKey={props.videoKey}
                    videoHeight="400px"
                    playVideo
                    videoOnFinish={setVideoShown}
                />
            </div> 
            : null}
        </div>
    );
}

export default VideoWithCover;
 