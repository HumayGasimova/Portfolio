/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './bannerPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import BannerImage from '../../../SmallParts/BannerImage/bannerImage';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
import SimpleOverlayImage from '../../../SmallParts/SimpleOverlayImage/simpleOverlayImage';
import SlideFromImageLeft from '../../../SmallParts/SlideFromImageLeft/slideFromImageLeft';
import StandardPortfolioItem from '../../../SmallParts/StandardPortfolioItem/standardPortfolioItem';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import { 
    H15,
    H45
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';

/**
 * BannerPage component definition and export
 */

export const BannerPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.bannerPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection1DataSuccess(FakeData.bannerPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection1Data();
            }
        }

        if(props.bannerPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection2DataSuccess(FakeData.bannerPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection2Data();
            }
        }

        if(props.bannerPage.section3Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection3DataSuccess(FakeData.bannerPageSec3);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection3Data();
            }
        }

        if(props.bannerPage.section4Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection4DataSuccess(FakeData.bannerPageSec4);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection4Data();
            }
        }

        if(props.bannerPage.section5Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection5DataSuccess(FakeData.bannerPageSec5);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection5Data();
            }
        }
        
        if(props.bannerPage.section6Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection6DataSuccess(FakeData.bannerPageSec6);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection6Data();
            }
        }

        if(props.bannerPage.section7Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection7DataSuccess(FakeData.bannerPageSec7);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection7Data();
            }
        }

        if(props.bannerPage.section8Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchBannerPageSection8DataSuccess(FakeData.bannerPageSec8);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchBannerPageSection8Data();
            }
        }

        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("bannerPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="bannerPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bannerPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="bannerPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bannerPage"
                    />
                </>
            )
        }
    }

    const renderBannerPageSection1DataContent = () => {
        if(props.bannerPage.section1Data.loading && !props.bannerPage.section1Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section1Data.loading && !props.bannerPage.section1Data.error){
            return(
                <div className="banner-page-section-1-data">{props.bannerPage.section1Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-1-item"
                        >
                            <BannerImage
                                page="bannerPageSection1"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section1Data.loading && props.bannerPage.section1Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section1Data.error}`}</H15>
                </div>
            )
        }
    } 
    
    const renderBannerPageSection2DataContent = () => {
        if(props.bannerPage.section2Data.loading && !props.bannerPage.section2Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section2Data.loading && !props.bannerPage.section2Data.error){
            return(
                <div className="banner-page-section-2-data">{props.bannerPage.section2Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-2-item"
                        >
                            <BannerImage
                                page="bannerPageSection2"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section2Data.loading && props.bannerPage.section2Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section2Data.error}`}</H15>
                </div>
            )
        }
    }

    const renderBannerPageSection3DataContent = () => {
        if(props.bannerPage.section3Data.loading && !props.bannerPage.section3Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section3Data.loading && !props.bannerPage.section3Data.error){
            return(
                <div className="banner-page-section-3-data">{props.bannerPage.section3Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-3-item"
                        >
                            <OverlayImage
                                page="bannerPageSection3"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}</div>
            )
        }
        if(!props.bannerPage.section3Data.loading && props.bannerPage.section3Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section3Data.error}`}</H15>
                </div>
            )
        }
    } 

    const renderBannerPageSection4DataContent = () => {
        if(props.bannerPage.section4Data.loading && !props.bannerPage.section4Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section4Data.loading && !props.bannerPage.section4Data.error){
            return(
                <div className="banner-page-section-4-data">{props.bannerPage.section4Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-4-item"
                        >
                            <OverlayImage
                                page="bannerPageSection4"
                                obj={el}
                                setIsHoveringCategory={props.setBannerPageSection4IsHoveringCategory}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                currentPagePathName="banner"
                                // clearArchiveData={props.clearArchiveData}
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section4Data.loading && props.bannerPage.section4Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section4Data.error}`}</H15>
                </div>
            )
        }
    } 

    const renderBannerPageSection5DataContent = () => {
        if(props.bannerPage.section5Data.loading && !props.bannerPage.section5Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section5Data.loading && !props.bannerPage.section5Data.error){
            return(
                <div className="banner-page-section-5-data">{props.bannerPage.section5Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-5-item"
                        >
                            <SimpleOverlayImage
                                page="bannerPageSection5"
                                imageKey={el.coverImage.key}
                                alt={el.coverImage.alt}
                                header={el.header}
                                isHover={el.coverImage.isHover}
                                path={el.path}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                id={el.id}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section5Data.loading && props.bannerPage.section5Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section5Data.error}`}</H15>
                </div>
            )
        }
    } 

    const renderBannerPageSection6DataContent = () => {
        if(props.bannerPage.section6Data.loading && !props.bannerPage.section6Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section6Data.loading && !props.bannerPage.section6Data.error){
            return(
                <div className="banner-page-section-6-data">{props.bannerPage.section6Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-6-item"
                        >
                            <SlideFromImageLeft
                                obj={el}
                                page="bannerPageSection6"
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                setIsHoveringCategory={props.setBannerPageSection6IsHoveringCategory}
                                clearArchiveData={props.clearArchiveData}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section6Data.loading && props.bannerPage.section6Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section6Data.error}`}</H15>
                </div>
            )
        }
    } 

    const renderBannerPageSection7DataContent = () => {
        if(props.bannerPage.section7Data.loading && !props.bannerPage.section7Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section7Data.loading && !props.bannerPage.section7Data.error){
            return(
                <div className="banner-page-section-7-data">{props.bannerPage.section7Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-7-item"
                        >
                            <StandardPortfolioItem
                                page="bannerPageSection7"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                setIsHoveringCategory={props.setBannerPageSection7IsHoveringCategory}
                                unmountComponent={props.unmountComponent}
                                clearArchiveData={props.clearArchiveData}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section7Data.loading && props.bannerPage.section7Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'white'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section7Data.error}`}</H15>
                </div>
            )
        }
    } 

    const renderBannerPageSection8DataContent = () => {
        if(props.bannerPage.section8Data.loading && !props.bannerPage.section8Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bannerPage.section8Data.loading && !props.bannerPage.section8Data.error){
            return(
                <div className="banner-page-section-8-data">{props.bannerPage.section8Data.items.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            id={el.key}
                            className="banner-page-section-8-item"
                        >
                            <OverlayImage
                                page="bannerPageSection8"
                                obj={el}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                currentPagePathName="banner"
                            />
                        </div>
                    )
                })}
                </div>
            )
        }
        if(!props.bannerPage.section8Data.loading && props.bannerPage.section8Data.error){
            return(
                <div 
                    className="banner-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: 'rgb(248, 248, 248)'
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${props.bannerPage.section8Data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="banner-page" id="bannerPage">
            {renderToolbars()}
            <div className="banner-page-wrapper">
                <div className="banner-page-header">
                    <H45 className="h45-nero-lustria">Banner</H45>
                </div>
                <div className="grey-line"/>
                {renderBannerPageSection1DataContent()}
                {renderBannerPageSection2DataContent()}
                {renderBannerPageSection3DataContent()}
                {renderBannerPageSection4DataContent()}
                {renderBannerPageSection5DataContent()}
                {renderBannerPageSection6DataContent()}
                {renderBannerPageSection7DataContent()}
                {renderBannerPageSection8DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            bannerPage: Selectors.getBannerPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBannerPageSection1Data: bindActionCreators(Services.fetchBannerPageSection1Data, dispatch),
            fetchBannerPageSection1DataSuccess: bindActionCreators(Actions.fetchBannerPageSection1DataSuccess, dispatch),
            fetchBannerPageSection2Data: bindActionCreators(Services.fetchBannerPageSection2Data, dispatch),
            fetchBannerPageSection2DataSuccess: bindActionCreators(Actions.fetchBannerPageSection2DataSuccess, dispatch),
            fetchBannerPageSection3Data: bindActionCreators(Services.fetchBannerPageSection3Data, dispatch),
            fetchBannerPageSection3DataSuccess: bindActionCreators(Actions.fetchBannerPageSection3DataSuccess, dispatch),
            fetchBannerPageSection4Data: bindActionCreators(Services.fetchBannerPageSection4Data, dispatch),
            fetchBannerPageSection4DataSuccess: bindActionCreators(Actions.fetchBannerPageSection4DataSuccess, dispatch),
            fetchBannerPageSection5Data: bindActionCreators(Services.fetchBannerPageSection5Data, dispatch),
            fetchBannerPageSection5DataSuccess: bindActionCreators(Actions.fetchBannerPageSection5DataSuccess, dispatch),
            fetchBannerPageSection6Data: bindActionCreators(Services.fetchBannerPageSection6Data, dispatch),
            fetchBannerPageSection6DataSuccess: bindActionCreators(Actions.fetchBannerPageSection6DataSuccess, dispatch),
            fetchBannerPageSection7Data: bindActionCreators(Services.fetchBannerPageSection7Data, dispatch),
            fetchBannerPageSection7DataSuccess: bindActionCreators(Actions.fetchBannerPageSection7DataSuccess, dispatch),
            fetchBannerPageSection8Data: bindActionCreators(Services.fetchBannerPageSection8Data, dispatch),
            fetchBannerPageSection8DataSuccess: bindActionCreators(Actions.fetchBannerPageSection8DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setBannerPageSection4IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection4IsHoveringCategory, dispatch),
            setBannerPageSection6IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection6IsHoveringCategory, dispatch),
            setBannerPageSection7IsHoveringCategory: bindActionCreators(Actions.setBannerPageSection7IsHoveringCategory, dispatch),
        };
    }
)(BannerPage);
 