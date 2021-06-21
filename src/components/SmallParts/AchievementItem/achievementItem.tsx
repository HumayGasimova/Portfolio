/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './achievementItem.scss';

/**
 * Utility
 */

import {
    H17
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
 * Types
 */

import * as Types from './achievementItemTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * AchievementItem component definition and export
 */

export const AchievementItem: React.FC<Types.AchievementItemProps> = (props) => {

    /**
     * State
     */

    const [value, setValue] = React.useState(0);
    const [delay, setDelay] = React.useState(70);

    /**
     * Methods
     */
   
    useInterval(() => {
        setValue(value + 1);
    }, value === props.number ? null : delay)

    /**
     * Markup
     */

    return(
        <div className="achievement-item">
            <div 
                className="achievement-item-number"
                style={{color: `${props.numberColor}`}}
            >
                {value}
                <div 
                    className="achievement"
                    style={{color: `${props.achievementColor}`}}
                >
                    {props.achievement}
                </div>
            </div>
            {props.text ? 
            <div className="achievement-item-text">
                <H17 className="h17-nobel-lustria">{props.text}</H17>
            </div>: null}
        </div>
    );
}

export default AchievementItem;
 