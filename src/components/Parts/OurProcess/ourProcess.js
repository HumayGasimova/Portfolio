/**
 * Libraries
 */

import React, {
    useEffect
} from 'react';

/**
 * Styles
 */

import './ourProcess.scss';

/**
 * Components
 */

import Loading from '../../SmallParts/Loading/loading';

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
    H17,
    H19,
    H25,
    H45,
    EH10,
    EH25
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * OurProcess component definition and export
 */

export const OurProcess = (props) => {

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const renderImg = (opt) => {
        switch(opt){
            case 'sketch':
                return Images.SKETCH;
            case 'sketchGif':
                return Images.SKETCH_GIF;
            case 'process':
                return Images.PROCESS;
            case 'development':
                return Images.DEVELOPMENT;
            case 'developmentGif':
                return Images.DEVELOPMENT_GIF;
            case 'design':
                return Images.DESIGN;
            case 'evaluation':
                return Images.EVALUATION;
            case 'evaluationGif':
                return Images.EVALUATION_GIF;
            default: 
                return "";
        }
    }

    const renderOurProcessItems = () => {
        return(
            <div className="our-process-items">{props.data.items.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="our-process-item"
                    >
                        <img src={renderImg(el.img)}/>
                        <EH25/>
                        <H25 className="h25-black-teko">{el.header}</H25>
                        {props.component === "iconWithTextPageSection2" ? 
                        <div className="our-process-item-text">
                            <EH10/>
                            <H17 className="h17-nobel-lustria">{el.text}</H17>
                        </div>
                        : null}
                    </div>
                )
            })}</div>
        )
    }

    const renderOurProcess = () => {
        if(props.data.loading && !props.data.error){
            return(
                <div className="our-process-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.data.loading && !props.data.error){
            return(
                <>
                    {renderOurProcessItems()}
                </>
            )
        }
        if(!props.data.loading && props.data.error){
            return(
                <div className="our-process-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.data.error}`}</H19>
                </div>
            )
        }
    }

    /**
     * Markup
     */

    return(
        <div className="our-process">
            {props.header ? 
            <H45 className="h45-black-lustria">{props.header}</H45>
            : null}
            {renderOurProcess()}
        </div>
    );
}

export default OurProcess;
 