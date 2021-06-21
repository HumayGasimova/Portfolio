/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './video.scss';

/**
 * Utility
 */

import {
    H17
} from '../../UtilityComponents';

/**
 * Video
 */

import * as Videos from'../../../constants/videos';

/**
 * Types
 */

import * as Types from './videoTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * Video component definition and export
 */

export const Video: React.FC<Types.VideoProps> = (props) => {

    /**
     * State
     */

    const videoRef = React.useRef(null);
    const [url, setUrl] = React.useState<string>("");
    const previousUrl = React.useRef<string>(url);
    const [videoIsPlaying, setVideoIsPlaying] = React.useState<boolean>(false);
   
    /**
     * Methods
     */

    React.useEffect(() => {
        let video = (document.getElementById(`${props.videoKey}Video`) as HTMLVideoElement);
        
        setUrl(loadVideo(props.videoKey));

        // Play video

        if(props.playVideo){
            video.play();
        }
        
        if (previousUrl.current !== url && videoRef.current) {
            videoRef.current.load();
            previousUrl.current = url;
        }

        // Event Listeners
        
        video.addEventListener('ended', videoOnFinish);
        video.addEventListener('play', videoOnPlay);

        return () =>  {
            // Cleaning the unmounted component

            video.removeEventListener('ended', videoOnFinish);
            video.removeEventListener('play', videoOnPlay);
        }
    }, [props.videoKey]);

    /**
     * Markup
     */

    const videoOnPlay = () => {
        setVideoIsPlaying(true);
    }

    const loadVideo = (videoKey: string) => {
        switch(videoKey){
            case 'teamWorkMp4':
                return Videos.TEAM_WORK;
            case 'blogListVideo1':
                return Videos.BLOG_LIST_VIDEO_1;
            case 'blogListVideo2':
                return Videos.BLOG_LIST_VIDEO_2;
            case 'blogListVideo3':
                return Videos.BLOG_LIST_VIDEO_3;
            default:
                return "";
        }
    }

    const videoOnFinish = () => {
        
        setVideoIsPlaying(false);
        
        if(props.videoOnFinish){
            /**
             * When the video is over, hide the video itself and show
             * the video cover (for videoWithCover component)
             */

            props.videoOnFinish(false);
        }
    }

    return(
        <div className="video">
            <video 
                id={`${props.videoKey}Video`}
                ref={videoRef}
                controls
                style={props.videoHeight ? {height: props.videoHeight} : null}
            >
                <source src={loadVideo(props.videoKey)} type="video/mp4"/>
            </video>
            {videoIsPlaying ? 
            <div className="video-copyrights">
                <H17 className="h17-nobel-lora">Video by cottonbro from Pexels</H17>
            </div> : null}
        </div>
    )
}

export default Video;
 