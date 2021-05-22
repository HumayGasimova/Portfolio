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

import './section2.scss';

/**
 * Components
 */

import PictureBoard from '../../Parts/PictureBoard/pictureBoard';
import OurProcess from '../../Parts/OurProcess/ourProcess';

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
   H25,
   H130,
   EH40,
   EH80
} from '../../UtilityComponents';

/**
 * Constants
 */

import * as FakeData from '../../../fakeData';
import * as Environment from '../../../constants/environments';

/**
 * Section2 component definition and export
 */

export const Section2 = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
        // Fetch data for the component
        
        if(props.pictureBoard.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPictureBoardSuccess(FakeData.picBoard);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPictureBoard();
            }
        }

        if(props.ourProcessDate.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchOurProcessDataSuccess(FakeData.ourProcess);
            }else{
                // Fetch data (required to run -> npm run server)
                
                props.fetchOurProcessData();
            }
        }

    }, []);

    const renderClassName = (pictureBoardLoading, pictureBoardError, ourProcessLoading, ourProcessError) => {
        // Style for loading and error cases for different parts of the section

        let opt;

        if(!pictureBoardLoading && !pictureBoardError && !ourProcessLoading && !ourProcessError){
            opt = "noLoadingNoError";
        }
        if(pictureBoardLoading && !pictureBoardError && !ourProcessLoading && !ourProcessError || 
            !pictureBoardLoading && pictureBoardError && !ourProcessLoading && !ourProcessError){
            opt = "pictureBoardLoadingError";
        }
        if(ourProcessLoading && !ourProcessError && !pictureBoardLoading && !pictureBoardError || 
            !ourProcessLoading && ourProcessError && !pictureBoardLoading && !pictureBoardError){
            opt = "ourProcessLoadingError";
        }

        if(pictureBoardLoading && !pictureBoardError && ourProcessLoading && !ourProcessError || 
            !pictureBoardLoading && pictureBoardError && !ourProcessLoading && ourProcessError ||
            pictureBoardLoading && !pictureBoardError && !ourProcessLoading && ourProcessError || 
            !pictureBoardLoading && pictureBoardError && ourProcessLoading && !ourProcessError){
            opt = "pictureBoardAndOurProcessLoadingError";
        }

        switch(opt){
            case 'noLoadingNoError':
                return "section-2";
            case 'pictureBoardLoadingError':
                return "section-2-picture-board-loading-error";
            case 'ourProcessLoadingError':
                return "section-2-our-process-loading-error";
            case 'pictureBoardAndOurProcessLoadingError':
                return "section-2-picture-board-and-our-process-loading-error";
        }
    }

    /**
     * Markup
     */

    return(
        <div className={renderClassName(props.pictureBoard.loading, props.pictureBoard.error, props.ourProcessDate.loading, props.ourProcessDate.error)}>
            <div className="section-2-wrapper">
                <H130 className="h130-white-teko">Work.</H130>
                <EH40/>
                <H25 className="h25-white-lustria">Lorem ipsum dolor sit amet, consectetur ad.</H25>
                <EH80/>
                <PictureBoard/>
                <EH80/>
                <OurProcess
                    component="homeSection2"
                    header="Our Process"
                    data={props.ourProcessDate}
                />
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            pictureBoard: Selectors.getPictureBoardItemsState(state),
            ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPictureBoard: bindActionCreators(Services.fetchPictureBoard, dispatch),
            fetchOurProcessData: bindActionCreators(Services.fetchOurProcessData, dispatch),
            fetchPictureBoardSuccess: bindActionCreators(Actions.fetchPictureBoardSuccess, dispatch),
            fetchOurProcessDataSuccess: bindActionCreators(Actions.fetchOurProcessDataSuccess, dispatch),
        };
    }
)(Section2);
 