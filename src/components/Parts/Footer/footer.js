/**
 * Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

/**
 * Styles
*/

import './footer.scss';

/**
 * Utility
*/

import {
    H15,
    H17,
    H22,
    H40,
    EH5,
    EH10,
    EH20,
    EH30,
    EH90
} from '../../UtilityComponents';

/**
 * Images
*/

import * as Images from '../../../constants/images';

/**
 * Footer component definition and export
*/

export const Footer = (props) => {

    /**
     * Methods
    */

    useEffect(() => { 
    }, []);

    const feedOnClick = () => {
        window.open("https://twitter.com/", '_blank');
    }

    /**
     * Markup
    */

    return(
        <div className="footer">
            <div className="footer-info">
                <EH90/>
                <div className="footer-info-wrapper">
                    <div className="footer-info-section">
                        <H40 className="h40-white-balsamiq">crypto.</H40>
                        <EH20/>
                        <H17 className="h17-nobel-lustria">Mei no docendi quem munere sea sanctus sed at, sint primis utroque, duo pri cu mel velit.</H17>
                    </div>
                    <div className="footer-info-section">
                        <EH10/>
                        <H22 className="h22-white-poppins">Contact</H22>
                        <EH20/>
                        <EH5/>
                        <H17 className="h17-nobel-lustria">New York 620 Eighth Avenue</H17>
                        <EH5/>
                        <H17 className="h17-nobel-lustria-animation">office@agencyname.com</H17>
                        <EH5/>
                        <H17 className="h17-nobel-lustria-animation">office@youremail.com</H17>
                        <EH5/>
                        <div className="footer-info-section-wrapper">
                            <H17 className="h17-nobel-lustria">Phone :</H17>
                            <H17 className="h17-nobel-lustria-animation">&nbsp;&nbsp; +1 986 777 3776</H17>
                        </div>
                        <EH5/>
                        <div className="footer-info-section-wrapper">
                            <H17 className="h17-nobel-lustria">Phone :</H17>
                            <H17 className="h17-nobel-lustria-animation">&nbsp;&nbsp; +1 756 888 3644</H17>
                        </div>
                    </div>
                    <div className="footer-info-section">
                        <EH10/>
                        <H22 className="h22-white-poppins">Twitter Feed</H22>
                        <EH20/>
                        <EH5/>
                        <div className="footer-info-section-feed-wrapper">
                            <a 
                                href="https://twitter.com/"
                                target="_blank"
                            >@RobWattCT</a>&nbsp;&nbsp;
                            Hi there, thank you for writing in and choosing our themes! We don’t have precise dates, but since we ar…
                        </div>
                        <H17 
                            className="h17-nobel-lustria-animation"
                            onClick={feedOnClick}
                        >https://t.co/70En9g7CzX</H17>
                        <H17 
                            className="h17-nobel-lustria-animation"
                            onClick={feedOnClick}
                        >3 months ago</H17>
                    </div>
                    <div className="footer-info-section">
                        <EH10/>
                        <H22 className="h22-white-poppins">Our Offices</H22>
                        <EH20/>
                        <EH5/>
                        <div className="footer-info-map" /** onClick go to aboutUs page */> 
                            <img src={Images.MAP}/>
                        </div>
                    </div>
                </div>
                <EH90/>
            </div>
            <div className="footer-copyright">
                <EH30/>
                <H15 className="h15-nobel-lustria">Copyright Elated Themes All Rights Reserved</H15>
                <EH30/>
            </div>
        </div>
    );
}

export default Footer;
 