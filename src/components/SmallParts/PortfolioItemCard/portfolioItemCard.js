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

import './portfolioItemCard.scss';

/**
 * Components
 */

import SwitchImage from '../SwitchImage/switchImage';

/**
 * Utility
 */

import {
    H15,
    H19,
    EH10,
    EH30
} from '../../UtilityComponents';

/**
 * PortfolioItemCard component definition and export
 */

export const PortfolioItemCard = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
    }, []);

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioItemCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
                break;
            case 'arrow':
                setIsHovering("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'portfolioItemCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
            case 'arrow':
                setIsHovering("off");
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "portfolioItemCategory"){
            switch(isHovering){
                case 'init':
                    return "h15-nobel-lustria-animated";
                case 'on':
                    return "h15-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h15-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "portfolio-item-card-arrow-wrapper";
                case 'on':
                    return "portfolio-item-card-arrow-wrapper-lengthen";
                case 'off':
                    return "portfolio-item-card-arrow-wrapper-shorten"
            }
        }
    }

    const onClickHandler = (path, key, e) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage 

        localStorage.setItem("archiveCategoryHG", key);
        localStorage.setItem("pageHG", props.component);

        // Clear archive data
        
        props.clearArchiveData();

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */ 

            props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click 

            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        props.unmountComponent(key, path, props.component, e.button);
    }

    const renderCategories = (obj) => {
        return(
            <div className="portfolio-item-card-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="portfolio-item-card-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`portfolioItemCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`portfolioItemCategory`, null, pathOfIds)} 
                    >
                        {i !== 0 ? <div className="portfolio-item-card-category-slash">/</div> : null}
                        <H15 className={renderClassName("portfolioItemCategory", el.isHover)}>{el.label}</H15>
                    </div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <>
            <div className="portfolio-item-card-image">
                <SwitchImage  
                    component={props.component}
                    id={props.obj.id}
                    option={props.obj.option}
                    imagesArray={props.obj.pictures}
                    alt={props.obj.alt}
                    path={props.obj.path}
                    rememberCoordinateRange={props.rememberCoordinateRange}
                    imgCoordinateRange={props.imgCoordinateRange}
                    setUnmountComponentValues={props.setUnmountComponentValues}
                    unmountComponent={props.unmountComponent}
                />
            </div>
            <EH30/>
            {renderCategories(props.obj)}
            <EH10/>
            <H19 className="h19-nero-poppins">{props.obj.portfolioType}</H19>
            <div 
                className={renderClassName("arrow", isHovering)}
                onMouseEnter={() => handleMouseEnter("arrow")} 
                onMouseLeave={() => handleMouseLeave("arrow")} 
                onMouseDown={(e) => onClickHandler(props.obj.path, null, e)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper2">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
            <EH30/>
        </>
    );
}

export default PortfolioItemCard;
 