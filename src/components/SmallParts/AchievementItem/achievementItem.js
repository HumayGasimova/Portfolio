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
 * AchievementItem component definition and export
 */

export const AchievementItem = (props) => {

    /**
     * State
     */

    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(70);

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
 