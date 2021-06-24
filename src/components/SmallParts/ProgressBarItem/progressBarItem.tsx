/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './progressBarItem.scss';

/**
 * Utility
 */

import {
    H25,
    EH10,
    EH20
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Types
 */

import * as Types from './progressBarItemTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * ProgressBarItem component definition and export
 */

export const ProgressBarItem: React.FC<Types.ProgressBarItemProps> = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [value, setValue] = React.useState<number>(0);
    const [delay, setDelay] = React.useState<number>(10);

    /**
     * Methods
     */
   
    React.useEffect(() => {
    }, []);

    useInterval(() => {
        setValue(value + 1);
    }, value === props.percent ? null : delay);

    const renderProgressBarWidth = (component: string, screenWidth: number) => {
        switch(component){
            case 'statistics':
                if(screenWidth > 1120){
                    return "450px";
                } else if(screenWidth <= 1120 && screenWidth > 400){
                    return "calc(100vw - 160px)";
                }
            
            case 'progressBarPageSection1Column1':
            case 'progressBarPageSection1Column2':
            case 'progressBarPageSection2':
                return `100%`;
        }
    }

    /**
     * Markup
     */

    return(
        <div className="progress-bar-item">
            <div 
                className="progress-bar-item-wrapper"
                style={{width: `${props.percent}%`}}
            >
                <H25 className="h25-black-teko">{props.label}</H25>
                <div className="progress-bar-item-percent">{`${value}%`}</div>
            </div>
            <div className="progress-bar-item-percent-line-wrapper">
                <div 
                    className="progress-bar-item-percent-line-back"
                    style={{
                        width: `${renderProgressBarWidth(props.component, size.width)}`
                    }}
                />
                <div 
                    className="progress-bar-item-percent-line-top"
                    style={{width: `${props.percent}%`}}
                />
            </div>
            <EH10/>
            <EH20/>
        </div>
    );
}

export default ProgressBarItem;
 