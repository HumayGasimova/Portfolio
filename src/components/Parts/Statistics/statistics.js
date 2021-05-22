/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Styles
 */

import './statistics.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import ProgressBarItem from '../../SmallParts/ProgressBarItem/progressBarItem';

/**
 * Services
 */

import * as Actions from "../../../actions";

/**
 * Services
 */

import * as Services from "../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Utility
 */

import {
    H19,
    H65,
    EH80,
    EH25,
    EW90
} from '../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Statistics component definition and export
 */

export const Statistics = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [showComponent, setShowComponent] = useState(false)

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        if(props.statisticsData.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)
                
                props.fetchStatisticsDataSuccess(FakeData.statisticsData);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchStatisticsData();
            }
        }

        // Event Listeners

        window.addEventListener('scroll', handleScroll);

        // Cleaning the unmounted component
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("statistics");

        // Render the component only when it appears on the screen

        if(scrollHeight >= el.offsetTop - size.height/2 - 400){
            setShowComponent(true);
        }

        // Render the component only when it appears on a vertically oriented screen
        
        if(size.width - size.height < 0){
            if(scrollHeight >= el.offsetTop - size.height/2 - 900){
                setShowComponent(true);
            }
        }
    }

    const renderStatisticsData = () => {
        return(
            <div>{props.statisticsData.items.map((el,i) => {
                return(
                    <ProgressBarItem 
                        key={i}
                        label={el.label}
                        percent={el.percent}
                        component="statistics"
                    />
                )
            })}</div>
        )
    }

    const renderStatistics = () => {
        if(props.statisticsData.loading && !props.statisticsData.error){
            return(
                <div className="statistics-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.statisticsData.loading && !props.statisticsData.error){
            return(
                <>
                    {showComponent ? 
                    <div className="statistics-inner-wrapper">
                        <div className="statistics-wrapper">
                            <H65 className="h65-black-teko">Love Design.</H65>
                            <H65 className="h65-black-lustria">With Your Soul</H65>
                        </div>
                        <EW90/>
                        <EH25/>
                        <EH25/>
                        {renderStatisticsData()}
                    </div> : null}
                </>
            )
        }
        if(!props.statisticsData.loading && props.statisticsData.error){
            return(
                <div className="statistics-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.statisticsData.error}`}</H19>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div 
            className="statistics-outer-wrapper" 
            id="statistics"
        >
            <EH80/>
            {renderStatistics()}
            <EH80/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            statisticsData: Selectors.getStatisticsDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchStatisticsData: bindActionCreators(Services.fetchStatisticsData, dispatch),
            fetchStatisticsDataSuccess: bindActionCreators(Actions.fetchStatisticsDataSuccess, dispatch),
        };
    }
)(Statistics);
 