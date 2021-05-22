/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useRef
} from 'react';

/**
 * Styles
 */

import './pieChartItem.scss';

/**
 * Utility
 */

import {
    H19
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useInterval
} from '../../../Hooks/useInterval';


/**
 * PieChartItem component definition and export
 */

export const PieChartItem = (props) => {

    /**
     * State
     */

    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(30);

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    useInterval(() => {
        setValue(value + 1);
    }, value === props.percent ? null : delay)

    const renderClassName = (opt, key) => {
        if(opt === "pieChart"){
            switch(key){
                case 'pieChartsPageSection1Id1':
                case 'pieChartsPageSection2Id1':
                    return "pie-chart-item-id-1";
                case 'pieChartsPageSection1Id2':
                case 'pieChartsPageSection2Id2':
                    return "pie-chart-item-id-2";
                case 'pieChartsPageSection1Id3':
                case 'pieChartsPageSection2Id3':
                    return "pie-chart-item-id-3";
                case 'pieChartsPageSection1Id4':
                case 'pieChartsPageSection2Id4':
                    return "pie-chart-item-id-4";
            }
        }
    }
    
//     const calcPercent = (percent) => {
//         let dash = 72 * percent / 100;
//         let gap = 72 - dash;
//         return `${dash} ${gap}`
//     }
    
    /**
     * Markup
     */

    return(
        <div className="pie-chart-item">
            <div className="pie-chart-item-chart-wrapper">
                <svg width="100%" height="100%" viewBox="0 0 60 60">
                    <circle 
                        className={renderClassName("pieChart", props.chartKey)}
                        cx="30" 
                        cy="30" 
                        r="15.91549430918954"
                        fill="transparent" 
                        stroke={props.chartColor}
                        strokeWidth="0.7" 
                        strokeDasharray={`${props.percent} ${100 - props.percent}`}
                        strokeDashoffset="25"
                        // strokeDashoffset="18" // by default strokeDashoffset = 0 and the line starts at 90deg, 
                                            // to move at 0deg we should calc 90 deg of the circumference (2pr => 2 * 3.1415 * 11.5 = 72)
                                            // which equals (72 + 90deg / 360deg = 18)              
                    >
                    </circle>
                </svg>
                <div className="pie-chart-item-percent">
                    <H19 className="h19-black-poppins">{value}</H19>
                    <H19 className="h19-black-poppins">%</H19>
                </div>
            </div>
            <div className="pie-chart-item-header">
                <H19 className="h19-black-poppins">{props.header}</H19>
            </div>
        </div>
    );
}

export default PieChartItem;
 