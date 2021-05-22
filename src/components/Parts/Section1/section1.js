/**
 * Libraries
 */

import React, {
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

import './section1.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';
import Section1DateItem from '../../SmallParts/Section1DateItem/section1DataItem';

/**
 * Actions
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
    EH20
} from '../../UtilityComponents';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Section1 component definition and export
 */

export const Section1 = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component

        if(props.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchSection1DataSuccess(FakeData.sec1);
            }else{
                // Fetch data (required to run -> npm run server)
                
                props.fetchSection1Data();
            }
        }
 
    }, []);

    const renderSection1DataItems = () => {
        return(
            <div className="section-1-data-items">{props.section1Data.items.map((el,i) => {
                return(
                    <div key={i}>
                        <EH20/>
                        <Section1DateItem
                            header={el.header}
                            text={el.text}
                            path={el.path}
                        />
                        <EH20/>
                    </div>
                )
            })}</div>
        )
    }

    const renderSection1 = () => {
        if(props.section1Data.loading && !props.section1Data.error){
            return(
                <div className="section1-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.section1Data.loading && !props.section1Data.error){
            return(
                <>
                    {renderSection1DataItems()}
                </>
            )
        }
        if(!props.section1Data.loading && props.section1Data.error){
            return(
                <div className="section1-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.section1Data.error}`}</H19>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="section-1">
            {renderSection1()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            section1Data: Selectors.getSection1DateState(state)
        };
    },
    (dispatch) => {
        return {
            fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            fetchSection1DataSuccess: bindActionCreators(Actions.fetchSection1DataSuccess, dispatch),
        };
    }
)(Section1);
 