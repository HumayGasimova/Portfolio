/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

/**
 * Styles
 */

import './audio.scss';

/**
 * Utility
 */

import {
    H17
} from '../../UtilityComponents';

/**
 * Audio
 */

import * as Audios from '../../../constants/audios';

/**
 * Audio component definition and export
 */

export const Audio = (props) => {

    /**
     * State
     */

    const [audioIsPlaying, setAudioIsPlaying] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        let audio = document.getElementById(`${props.audioKey}Audio`);
        
        // Event Listeners

        audio.addEventListener('play', audioOnPlay);
        audio.addEventListener('ended', audioOnFinish);

        return () =>  {
            // Cleaning the unmounted component

            audio.removeEventListener('play', audioOnPlay);
            audio.removeEventListener('ended', audioOnFinish);
        }
    }, []);

    const loadAudio = (opt) => {
        switch(opt){
            case 'ukuleleMp3':
                return Audios.UKULELE_MP3;
            case 'creativeMindsMp3':
                return Audios.CREATIVE_MIND_MP3;
            case 'aDayToRememberMp3':
                return Audios.A_DAY_TO_REMEMBER_MP3;
            case 'adventureMp3':
                return Audios.ADVENTURE_MP3;
            case 'inspireMp3':
                return Audios.INSPIRE_MP3;
        }
    }

    const audioOnPlay = () => {
        setAudioIsPlaying(true);
    }

    const audioOnFinish = () => {
        setAudioIsPlaying(false);
    }

    /**
     * Markup
     */

    return(
        <div className="audio-wrapper">
            <audio 
                className="audio"
                controls 
                id={`${props.audioKey}Audio`}
            >
                <source src={loadAudio(props.audioKey)} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
            {audioIsPlaying ? <div className="audio-copyrights">
                <H17 className="h17-nobel-lora">Music: https://www.bensound.com</H17>
            </div> : null}
        </div>
    );
}

export default Audio;
 