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

import './countersPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import AchievementItem from '../../../SmallParts/AchievementItem/achievementItem';
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
 * Types
 */

import * as Types from './countersPageTypes';
import * as GeneralTypes from '../../../../reducers/generalTypes';

/**
 * CountersPage component definition and export
 */

export const CountersPage: React.FC<Types.CountersPageProps> = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = React.useState<boolean>(false);
    const [showComponentSection1, setShowComponentSection1] = React.useState<boolean>(false);
    const [showComponentSection2, setShowComponentSection2] = React.useState<boolean>(false);
    const [showComponentSection3, setShowComponentSection3] = React.useState<boolean>(false);
    
    /**
     * Methods
     */

    React.useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "", null);

        // Fetch data for the component

        if(props.countersPage.section1Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchCountersPageSection1DataSuccess(FakeData.countersPageSec1);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchCountersPageSection1Data();
            }
        }

        if(props.countersPage.section2Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchCountersPageSection2DataSuccess(FakeData.countersPageSec2);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchCountersPageSection2Data();
            }
        }

        if(props.countersPage.section3Data.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchCountersPageSection3DataSuccess(FakeData.countersPageSec3);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchCountersPageSection3Data();
            }
        }

        // On init render section 1

        setShowComponentSection1(true);

        // Scroll to the top of the screen

        let timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    
        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.countersPage.section2Data.items.length,
        props.countersPage.section3Data.items.length]);

    const handleOnWheel = (e: MouseEvent) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("countersPage");
        let countersPageSection2 = document.getElementById("countersPageSection2");
        let countersPageSection3 = document.getElementById("countersPageSection3");

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
        
        if(props.countersPage.section2Data.items.length !== 0){
            // Render the component only when it appears on the screen
           
            if(scrollHeight >= countersPageSection2.offsetTop - size.height/2 - 400){
                setShowComponentSection2(true);
            }
            
              // Render the component only when it appears on a vertically oriented screen
            
              if(size.width - size.height < 0){
                if(scrollHeight >= countersPageSection2.offsetTop - size.height/2 - 900){
                    setShowComponentSection2(true);
                }
            }
        }

        if(props.countersPage.section3Data.items.length !== 0){
            // Render the component only when it appears on the screen

            if(scrollHeight >= countersPageSection3.offsetTop - size.height/2 - 400){
                setShowComponentSection3(true);
            }

            // Render the component only when it appears on a vertically oriented screen

            if(size.width - size.height < 0){
                if(scrollHeight >= countersPageSection3.offsetTop - size.height/2 - 900){
                    setShowComponentSection3(true);
                }
            }
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
                        page="countersPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="countersPage"
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
                        page="countersPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="countersPage"
                    />
                </>
            )
        }
    }
    
    const renderBackgroundColor = (section: string) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
                return 'black';
            case 'section3':
            default:
                return 'white';
        }
    }
    
    const renderLoadingBackgroundColor = (section: string) => {
        switch(section) {
            case 'section1':
            case 'section3':
                return 'black';
            case 'section2':
            default:
                return 'white';
        }
    }

    const renderCountersPageSection1Data = (data: GeneralTypes.CountersPageSectionObj) => {
        return(
            <div className="counters-page-section1-data-items">{data.items.map((el, i) => {
                if(showComponentSection1){
                    return(
                        <AchievementItem
                            key={i}
                            number={el.number}
                            achievement={el.achievement}
                            numberColor="rgba(155, 155, 155, 0.4)"
                            achievementColor="black"
                        />
                    )
                }
            })}</div>
        )
    }

    const renderCountersPageSection2Data = (data: GeneralTypes.CountersPageSectionObj) => {
        return(
            <div className="counters-page-section2-data-items">{data.items.map((el, i) => {
                if(showComponentSection2){
                    return(
                        <AchievementItem
                            key={i}
                            number={el.number}
                            achievement={el.achievement}
                            numberColor="rgb(78, 78, 78)"
                            achievementColor="white"
                        />
                    )
                }
            })}</div>
        )
    }
    
    const renderCountersPageSection3Data = (data: GeneralTypes.CountersPageSectionObj) => {
        return(
            <div className="counters-page-section3-data-items">{data.items.map((el, i) => {
                if(showComponentSection3){
                    return(
                        <AchievementItem
                            key={i}
                            number={el.number}
                            achievement={el.achievement}
                            numberColor="rgb(239, 239, 239)"
                            achievementColor="black"
                            text={el.text}
                        />
                    )
                }
            })}</div>
        )
    }

    const renderCountersPageDataContent = (section: string, data: GeneralTypes.CountersPageSectionObj) => {
        if(data.loading && !data.error){
            return(
                <div 
                    className="counters-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color={renderLoadingBackgroundColor(section)}/>
                </div>
            )
        }
        if(!data.loading && !data.error){
            switch(section){
                case 'section1':
                    return(
                        <div
                            id="countersPageSection1"
                        >
                            {renderCountersPageSection1Data(data)}
                        </div>
                    );
                case 'section2':
                    return(
                        <div
                            id="countersPageSection2"
                        >
                            {renderCountersPageSection2Data(data)}
                        </div>
                    );
                case 'section3':
                    return(
                        <div
                            id="countersPageSection3"
                        >
                            {renderCountersPageSection3Data(data)}
                        </div>
                    );
            }
        }
        if(!data.loading && data.error){
            return(
                <div 
                    className="counters-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${data.error}`}</H15>
                </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="counters-page" id="countersPage">
            {renderToolbars()}
            <div className="counters-page-wrapper">
                <div className="counters-page-header">
                    <H45 className="h45-nero-lustria">Counters</H45>
                </div>
                <div className="grey-line"/>
                {renderCountersPageDataContent("section1", props.countersPage.section1Data)}
                {renderCountersPageDataContent("section2", props.countersPage.section2Data)}
                {renderCountersPageDataContent("section3", props.countersPage.section3Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect<Types.MapStateToPropsTypes, Types.MapDispatchToPropsTypes>(
    (state) => {
        return {
            countersPage: Selectors.getCountersPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchCountersPageSection1Data: bindActionCreators(Services.fetchCountersPageSection1Data, dispatch),
            fetchCountersPageSection1DataSuccess: bindActionCreators(Actions.fetchCountersPageSection1DataSuccess, dispatch),
            fetchCountersPageSection2Data: bindActionCreators(Services.fetchCountersPageSection2Data, dispatch),
            fetchCountersPageSection2DataSuccess: bindActionCreators(Actions.fetchCountersPageSection2DataSuccess, dispatch),
            fetchCountersPageSection3Data: bindActionCreators(Services.fetchCountersPageSection3Data, dispatch),
            fetchCountersPageSection3DataSuccess: bindActionCreators(Actions.fetchCountersPageSection3DataSuccess, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(CountersPage);
 