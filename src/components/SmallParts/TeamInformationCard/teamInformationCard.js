/**
 * Libraries
 */

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

/**
 * Styles
 */

import './teamInformationCard.scss';

/**
 * Components
 */

import Icon from '../../SmallParts/Icon/icon';

/**
 * Utility
 */

import {
    H15,
    H25,
    EW20,
    EH25,
    EH40,
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Constants
 */

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
 * TeamInformationCard component definition and export
 */

export const TeamInformationCard = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);
    const [infoCardPadding, setInfoCardPadding] = useState({
        left: 0,
        right: 0
    });

    /**
     * Methods
     */

    useEffect(()=>{
        // Set info cart padding values

        switch(props.version){
            case 'version1':
            case 'version2':
                setInfoCardPadding({
                    left: 40,
                    right: 20
                })
                break;
            case 'version3':
                setInfoCardPadding({
                    left: 40,
                    right: 40
                })
                break;
        }
        
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        // Set the height of the curtain on window resize
        
        let cardHeight = document.getElementById(props.imgKey).clientHeight;
        setCardHeight(cardHeight);
    }

    const handleMouseEnter = () => {
        setIsHovering("on");
        handleResize();
    }

    const handleMouseLeave = () => {
        setIsHovering("off");
    }

    const loadPhoto = (img) => {
        switch(img){
            case 'Photo1':
                return Images.PHOTO_1; 
            case 'Photo2':
                return Images.PHOTO_2; 
            case 'Photo3':
                return Images.PHOTO_3; 
            case 'Photo4':
                return Images.PHOTO_4;
            case 'Photo5':
                return Images.PHOTO_5;
            case 'Photo6':
                return Images.PHOTO_6; 
            case 'Photo7':
                return Images.PHOTO_7; 
            case 'Photo8':
                return Images.PHOTO_8; 
            case 'Photo9':
                return Images.PHOTO_9;
            case 'Photo10':
                return Images.PHOTO_10;
            case 'Photo11':
                return Images.PHOTO_11; 
            case 'Photo12':
                return Images.PHOTO_12; 
            case 'Photo13':
                return Images.PHOTO_13; 
            case 'Photo14':
                return Images.PHOTO_14;
            case 'Photo15':
                return Images.PHOTO_15;
            case 'Photo16':
                return Images.PHOTO_16; 
            case 'Photo17':
                return Images.PHOTO_17; 
            case 'Photo18':
                return Images.PHOTO_18; 
            case 'Photo19':
                return Images.PHOTO_19;
            case 'Photo20':
                return Images.PHOTO_20;
            case 'Photo21':
                return Images.PHOTO_21;
            default:
                return "";
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "teamInfoCard"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "team-information-card-info-hover-on";
                case 'off':
                    return "team-information-card-info-hover-off"
            }
        }
        if(opt === "teamCardImage"){
            switch(isHovering){
                case 'init':
                    return "team-information-card-image";
                case 'on':
                    return "team-information-card-image-hover-on";
                case 'off':
                    return "team-information-card-image-hover-off"
            }
        }
    }

    const renderSocialMediaIcons = () => {
        return(
            <div className="team-information-card-icons-wrapper">{socialMediaIcons.map((el, i) => {
               return(
                    <div 
                        key={i}
                        className="team-information-card-icon-wrapper"
                    >
                        <Icon 
                            key={i}
                            iconType="fontAwesome"
                            iconName={el.name} 
                            icon={el.iconKey} 
                            iconSize="1x"
                            instaName={props.instaName}
                            onMouseEnter
                            onMouseLeave
                            onMouseDown
                            classNameOpt="socMedIcon"
                        />
                        <EW20/>
                    </div>
               ) 
            })}
            </div>
        )
    }

    const renderInformationAboutMemeber = (version) => {
       switch(version) {
            case 'version1':
                return(
                    <>
                        <H25 className="h25-white-teko">{props.name}</H25>
                        <H15 className="h15-white-lustria">{props.position}</H15>
                        <EH25/>
                        {renderSocialMediaIcons()}
                        <EH40/>
                    </>
                );
            case 'version2':
                return(
                    <>
                        <H25 className="h25-white-teko">{props.name}</H25>
                        <EH40/>
                    </>
                );
            case 'version3':
                return(
                    <>
                        <H25 className="h25-white-teko">{props.name}</H25>
                        <H15 className="h15-white-lustria">{props.position}</H15>
                        <EH25/>
                        {renderSocialMediaIcons()}
                        <EH40/>
                        <EH40/>
                </>
                );
       }
    }

    /**
     * Markup
     */

    return(
        <div 
            id="team-information-card"
            className="team-information-card"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={renderClassName("teamCardImage", isHovering)}>
                <img 
                    id={props.imgKey}
                    src={loadPhoto(props.photo)}
                    alt={props.alt}
                />
            </div>
            <div 
                className={renderClassName("teamInfoCard", isHovering)}
                style={{
                    height: `${cardHeight}px`,
                    width:`calc(100% - ${infoCardPadding.right + infoCardPadding.left}px)`,
                    padding: `0px ${infoCardPadding.right}px 0px ${infoCardPadding.left}px`,
                    alignItems: props.version === "version3" ? "center" : "left"
                }}
            >
                {renderInformationAboutMemeber(props.version)}
            </div>
        </div>
    );
}

export default TeamInformationCard;
 