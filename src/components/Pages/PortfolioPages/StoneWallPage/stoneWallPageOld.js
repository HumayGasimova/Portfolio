/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
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

import './stoneWallPageOld.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallItem from '../../../SmallParts/StoneWallItem/stoneWallItem';
import Footer from '../../../Parts/Footer/footer';

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
    H19,
    H65,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * StoneWallPageOld component definition and export
 */

export const StoneWallPageOld = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [prevScreenWidthVal, setPrevScreenWidthVal] = useState(0);
    const [classNameImg1, setClassNameImg1] = useState('stone-wall-page-item-id1');
    const [classNameImg2, setClassNameImg2] = useState('stone-wall-page-item-id2');
    const [classNameImg3, setClassNameImg3] = useState('stone-wall-page-item-id3');
    const [classNameImg4, setClassNameImg4] = useState('stone-wall-page-item-id4');
    const [classNameImg5, setClassNameImg5] = useState('stone-wall-page-item-id5');

    /**
     * Methods
     */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.stoneWallPage.items.length === 0){
            props.fetchStoneWallPage();
        }
        let timeout = setTimeout(() => {
            if(!props.stoneWallPage.loading && !props.stoneWallPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const resize = () => {
            resizeRef.current();
        }
 
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            props.setMenuDotsState("init", "");
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = (e) => {
        setPrevScreenWidthVal(size.width);
        console.log(prevScreenWidthVal, size.width)
        if(size.width > 1200){
            setClassNameImg2("stone-wall-page-item-id2");
            setClassNameImg3("stone-wall-page-item-id3");
            setClassNameImg4("stone-wall-page-item-id4");
            setClassNameImg5("stone-wall-page-item-id5");
        }
        if(size.width < 1200 && size.width > 1027 && prevScreenWidthVal < size.width){
            setClassNameImg2("stone-wall-page-item-id2-animation-expand-screen");
            setClassNameImg3("stone-wall-page-item-id3-animation-expand-screen");
            setClassNameImg4("stone-wall-page-item-id4-animation-expand-screen");
            setClassNameImg5("stone-wall-page-item-id5-animation-expand-screen");
        }
        if(size.width < 1025 && size.width > 840){
            setClassNameImg2("stone-wall-page-item-id2-animation-narrow-screen");
            setClassNameImg3("stone-wall-page-item-id3-animation-narrow-screen");
            setClassNameImg4("stone-wall-page-item-id4-animation-narrow-screen");
            setClassNameImg5("stone-wall-page-item-id5-animation-narrow-screen");
        }
        if(size.width < 840 && size.width > 670 ){
            setClassNameImg2("stone-wall-page-item-id2");
            setClassNameImg3("stone-wall-page-item-id3");
            setClassNameImg4("stone-wall-page-item-id4");
            setClassNameImg5("stone-wall-page-item-id5");
        }
        if(size.width < 670 && size.width > 480 && prevScreenWidthVal < size.width){
            setClassNameImg2("stone-wall-page-item-id2-animation-expand2-screen");
            setClassNameImg3("stone-wall-page-item-id3-animation-expand2-screen");
            setClassNameImg4("stone-wall-page-item-id4-animation-expand2-screen");
            setClassNameImg5("stone-wall-page-item-id5-animation-expand2-screen");
        }
        if(size.width < 670 && size.width > 480 && prevScreenWidthVal > size.width){
            setClassNameImg2("stone-wall-page-item-id2-animation-narrow2-screen");
            setClassNameImg3("stone-wall-page-item-id3-animation-narrow2-screen");
            setClassNameImg4("stone-wall-page-item-id4-animation-narrow2-screen");
            setClassNameImg5("stone-wall-page-item-id5-animation-narrow2-screen");
        }
        if(size.width < 480){
            setClassNameImg2("stone-wall-page-item-id2");
            setClassNameImg3("stone-wall-page-item-id3");
            setClassNameImg4("stone-wall-page-item-id4");
            setClassNameImg5("stone-wall-page-item-id5");
        }
        if(size.width < 1025 && size.width > 770 && prevScreenWidthVal < size.width){
            console.log("long1")

            // setClassNameImg3("stone-wall-page-item-id3-animation-expand-screen");
        }

        // if(size.width < 770 && size.width > 680 && size.width < prevScreenWidthVal){
        //     console.log("short2");
        // }
        // if(size.width < 770 && size.width > 680 && size.width > prevScreenWidthVal){
        //     console.log("long2");
        // }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallPage");
    
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallPage"
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
                        page="stoneWallPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="stoneWallPage"
                    />
                </>
            )
        }
    }

    const renderClassName = (id) => {
        switch(id){
            case 1:
                return classNameImg1;
            case 2:
                return classNameImg2;
            case 3:
                return classNameImg3;
            case 4:
                return classNameImg4;
            case 5:
                return classNameImg5;
        }
    }
    
    const renderStoneWallPageData = () => {
        return(
            <div className="stone-wall-page-items">{props.stoneWallPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-page-item-id${el.id}`}
                        className={renderClassName(el.id)}
                    >
                        <StoneWallItem
                            page="stoneWallPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent} 
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallContent = () => {
        if(props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallPage.loading && !props.stoneWallPage.error){
            return(
                <div className="stone-wall-page-wrapper">
                    <div className="stone-wall-page-header">
                        <H65 className="h65-nero-poppins">Stone Wall</H65>
                    </div> 
                    {renderStoneWallPageData()}
                </div>
            )
        }
        if(!props.stoneWallPage.loading && props.stoneWallPage.error){
            return(
                <div 
                    className="stone-wall-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="stone-wall-page" id="stoneWallPage">
            {renderToolbars()}
            {renderStoneWallContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallPage: Selectors.getStoneWallPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallPage: bindActionCreators(Services.fetchStoneWallPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setStandardPageIsHoveringCategory: bindActionCreators(Actions.setStandardPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(StoneWallPageOld);
 