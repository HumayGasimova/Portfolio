/**
 * Libraries
 */

import * as React from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './clientsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
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
    H45,
    EH90
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
 * Types
 */

import * as Types from './clientsPageTypes';
import * as GeneralTypes from '../../../../reducers/generalTypes';

/**
 * ClientsPage component definition and export
 */

export const ClientsPage: React.FC<Types.ClientsPageProps> = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = React.useState<boolean>(false);
    
    /**
     * Methods
     */

    React.useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "", null);

        // Fetch data for the component

        if(props.clientsPage.section1Data.swiper1.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchClientsPageSection1Swiper1DataSuccess(FakeData.clientsPageSec1Swiper1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchClientsPageSection1Swiper1Data();
            }
        }

        if(props.clientsPage.section1Data.swiper2.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchClientsPageSection1Swiper2DataSuccess(FakeData.clientsPageSec1Swiper2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchClientsPageSection1Swiper2Data();
            }
        }

        if(props.clientsPage.section2Data.swiper1.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchClientsPageSection2Swiper1DataSuccess(FakeData.clientsPageSec2Swiper1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchClientsPageSection2Swiper1Data();
            }
        }

        if(props.clientsPage.section2Data.swiper2.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchClientsPageSection2Swiper2DataSuccess(FakeData.clientsPageSec2Swiper2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchClientsPageSection2Swiper2Data();
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

    const handleOnWheel = (e: MouseEvent) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("clientsPage");

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
                        page="clientsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="clientsPage"
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
                        page="clientsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="clientsPage"
                    />
                </>
            )
        }
    }

    const renderClassName = (opt: string, section: string) => {
        if(opt === "sectionWrapper"){
            switch(section){
                case 'section1':
                    return "clients-page-section1-wrapper";
                case 'section2':
                    return "clients-page-section2-wrapper";
            }
        }
       
    }
    
    const renderBackgroundColor = (section: string) => {
        switch(section) {
            case 'section1':
                return 'transparent';
            case 'section2':
                return 'black';
            default:
                return 'white';
        }
    }
    
    const renderLoadingBackgroundColor = (section: string) => {
        switch(section) {
            case 'section1':
                return 'black';
            case 'section2':
            default:
                return 'white';
        }
    }

    const renderSwiperWidth = (size: number) => {
        if(size <= 1410){
            return 80;
        }else{
            return 260;
        }
    }

    const renderSlidesNumber = (size: number) => {
        if(size > 950){
            return 5;
        } else if(size <= 950 && size > 530){
            return 3;
        } else if(size <= 530){
            return 1;
        }
    }

    const renderClientsPageSwiperData = (section: string, swiper: string, data: GeneralTypes.ClientsPageSectionSwiperDataObj) => {
        let paddingLeftRight = renderSwiperWidth(size.width);
        let numberOfSlides = renderSlidesNumber(size.width);
        if(section === "section1"){
            switch(swiper) {
                case 'swiper1':
                    return(
                        <>
                            {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                            process.env.ENVIRONMENT === Environment.PRODUCTION && props.clientsPage.section1Data.swiper1.items.length !== 0 ? 
                            <Swiper
                                component="clientsPageSection1Swiper1"
                                contentArray={data.items}
                                content={data}
                                translateWidth={(size.width-paddingLeftRight)/numberOfSlides}
                                showNumbersOfSlides={numberOfSlides}
                                setSwiperState={props.setSwiperStateForClientsPageSection1Swiper1}
                                swiperData={data.swiper}
                                onlyImages
                                // autoPlay
                            /> : null}
                        </>
                    );
                case 'swiper2':
                    return(
                        <>
                            {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                            process.env.ENVIRONMENT === Environment.PRODUCTION && props.clientsPage.section1Data.swiper2.items.length !== 0 ? 
                            <Swiper
                                component="clientsPageSection1Swiper2"
                                contentArray={data.items}
                                content={data}
                                translateWidth={(size.width-paddingLeftRight)/numberOfSlides}
                                showNumbersOfSlides={numberOfSlides}
                                setSwiperState={props.setSwiperStateForClientsPageSection1Swiper2}
                                swiperData={data.swiper}
                                onlyImages
                                // autoPlay
                            /> : null}
                        </>
                    )
            }
        }
        if(section === "section2"){
            switch(swiper) {
                case 'swiper1':
                    return(
                        <>
                            {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                            process.env.ENVIRONMENT === Environment.PRODUCTION && props.clientsPage.section2Data.swiper1.items.length !== 0 ? 
                            <Swiper
                                component="clientsPageSection2Swiper1"
                                contentArray={data.items}
                                content={data}
                                translateWidth={(size.width-paddingLeftRight)/numberOfSlides}
                                showNumbersOfSlides={numberOfSlides}
                                setSwiperState={props.setSwiperStateForClientsPageSection2Swiper1}
                                swiperData={data.swiper}
                                onlyImages
                                autoPlay
                            /> : null} 
                        </>
                    );
                case 'swiper2':
                    return(
                        <>
                            {process.env.ENVIRONMENT !== Environment.PRODUCTION ||
                            process.env.ENVIRONMENT === Environment.PRODUCTION && props.clientsPage.section2Data.swiper2.items.length !== 0 ? 
                            <Swiper
                                component="clientsPageSection2Swiper2"
                                contentArray={data.items}
                                content={data}
                                translateWidth={(size.width-paddingLeftRight)/numberOfSlides}
                                showNumbersOfSlides={numberOfSlides}
                                setSwiperState={props.setSwiperStateForClientsPageSection2Swiper2}
                                swiperData={data.swiper}
                                onlyImages
                                autoPlay
                            /> : null} 
                        </>
                    )
            }
        }
    }

    const renderCountdownDataSectionContent = (section: string, swiper: string, data: GeneralTypes.ClientsPageSectionSwiperDataObj) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="clients-page-loading-error" 
                    style={{
                        height: `${size.height/6}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color={renderLoadingBackgroundColor(section)}/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            return(
                <>
                    {renderClientsPageSwiperData(section, swiper, data)}
                </>
            );
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="clients-page-loading-error" 
                    style={{
                        height: `${size.height/6}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    }

    const renderCountdownPageDataContent = (section: string, obj: GeneralTypes.ClientsPageSectionDataObj) => {
        return(
            <div className={renderClassName("sectionWrapper", section)}>
                {renderCountdownDataSectionContent(section, "swiper1", obj.swiper1)}
                <EH90/>
                {renderCountdownDataSectionContent(section, "swiper2", obj.swiper2)}
            </div>
        )
    } 

    /**
     * Markup
     */

    return(
        <div className="clients-page" id="clientsPage">
            {renderToolbars()}
            <div className="clients-page-wrapper">
                <div className="clients-page-header">
                    <H45 className="h45-nero-lustria">Clients</H45>
                </div>
                <div className="grey-line"/>
                {renderCountdownPageDataContent("section1", props.clientsPage.section1Data)}
                {renderCountdownPageDataContent("section2", props.clientsPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect<Types.MapStateToPropsTypes, Types.MapDispatchToPropsTypes>(
    (state) => {
        return {
            clientsPage: Selectors.getClientsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchClientsPageSection1Swiper1Data: bindActionCreators(Services.fetchClientsPageSection1Swiper1Data, dispatch),
            fetchClientsPageSection1Swiper1DataSuccess: bindActionCreators(Actions.fetchClientsPageSection1Swiper1DataSuccess, dispatch),
            fetchClientsPageSection1Swiper2Data: bindActionCreators(Services.fetchClientsPageSection1Swiper2Data, dispatch),
            fetchClientsPageSection1Swiper2DataSuccess: bindActionCreators(Actions.fetchClientsPageSection1Swiper2DataSuccess, dispatch),
            fetchClientsPageSection2Swiper1Data: bindActionCreators(Services.fetchClientsPageSection2Swiper1Data, dispatch),
            fetchClientsPageSection2Swiper1DataSuccess: bindActionCreators(Actions.fetchClientsPageSection2Swiper1DataSuccess, dispatch),
            fetchClientsPageSection2Swiper2Data: bindActionCreators(Services.fetchClientsPageSection2Swiper2Data, dispatch),
            fetchClientsPageSection2Swiper2DataSuccess: bindActionCreators(Actions.fetchClientsPageSection2Swiper2DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setSwiperStateForClientsPageSection1Swiper1: bindActionCreators(Actions.setSwiperStateForClientsPageSection1Swiper1, dispatch),
            setSwiperStateForClientsPageSection1Swiper2: bindActionCreators(Actions.setSwiperStateForClientsPageSection1Swiper2, dispatch),
            setSwiperStateForClientsPageSection2Swiper1: bindActionCreators(Actions.setSwiperStateForClientsPageSection2Swiper1, dispatch),
            setSwiperStateForClientsPageSection2Swiper2: bindActionCreators(Actions.setSwiperStateForClientsPageSection2Swiper2, dispatch),
        };
    }
)(ClientsPage);
 