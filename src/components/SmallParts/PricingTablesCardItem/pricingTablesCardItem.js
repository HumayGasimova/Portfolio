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

import './pricingTablesCardItem.scss';

/**
 * Components
 */

import ButtonWithText from '../../../library/ButtonWithText/buttonWithText';

/**
 * Utility
 */

import {
    H17,
    H19,
    H35,
    H65
} from '../../UtilityComponents';


/**
 * PricingTablesCardItem component definition and export
 */

export const PricingTablesCardItem = (props) => {

    /**
     * State
     */

    const [isHovering, setIsHovering] = useState("init");

    /**
     * Methods
     */
   
    useEffect(() => {
    }, []);

    const renderCurrency = (currency) => {
        switch(currency){
            case 'AZE':
                return "₼"
            case 'USD':
                return "$";
            case 'EUR':
                return "€";
            default:
                return "₼";
        }
    }

    /**
     * Markup
     */

    return(
        <div className="pricing-tables-page-card-item">
            <H35 className="h35-black-poppins">{props.data.header}</H35>
            <div className="pricing-tables-page-card-item-price-wrapper">
                <H35 className="h35-black-poppins">{renderCurrency(props.data.price.currency)}</H35>
                <H65 className="h65-black-poppins">{props.data.price.value}</H65>
                <H19 className="h19-black-poppins">/</H19>
                <H19 className="h19-black-poppins">{props.data.price.option}</H19>
            </div>
            <div className="pricing-tables-page-card-item-description">
                <H17 className="h17-nobel-lustria">for the new users</H17>
            </div>
            <ButtonWithText
                buttonText={props.data.buttonText}
                setUnmountComponentValues={props.setUnmountComponentValues}
                unmountComponent={props.unmountComponent}
                currentPagePathName={props.currentPagePathName}
            />
        </div>
    );
}

export default PricingTablesCardItem;
 