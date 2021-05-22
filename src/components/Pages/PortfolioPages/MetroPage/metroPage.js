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

import './metroPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MetroItem from '../../../SmallParts/MetroItem/metroItem';
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
    H65
} from '../../../UtilityComponents';

import * as Utility from '../../../../utility';

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
 * MetroPage component definition and export
 */

export const MetroPage = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const transitionRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.metroPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchMetroPageSuccess(FakeData.metroPage);
                let itemsState = Utility.getArrayOfEmptyVal(FakeData.metroPage.length);
                props.initItemsStylesStateForMetroPage(itemsState);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchMetroPage();
            }
        }

        // Return to the part of the screen where the link to the selected item is located (items in absolute position)

        let timeout = setTimeout(() => {
            if(!props.metroPage.loading && !props.metroPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemsWrapper = document.getElementById("metroPageItems").offsetTop;
                let itemTopPosition = props.metroPage.itemsTopPosition.find(item => item.key === props.historyPopFromItem).topPosition;
                window.scrollTo(0, itemTopPosition + itemsWrapper - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Set images width, height, transition and translate coordinates

        setImagesState();

        // Event Listeners

        const smooth = e => {
            if(['metro-page-item-id1',
                'metro-page-item-id2',
                'metro-page-item-id3',
                'metro-page-item-id4',
                'metro-page-item-id5',
                'metro-page-item-id6',
                'metro-page-item-id7',
                'metro-page-item-id8',
                'metro-page-item-id9',
                'metro-page-item-id10',
                'metro-page-item-id11'
                ].includes(e.target.className)){
                    transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, [props.metroPage.itemsStyleValues.img1?.rendered]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0

        if(props.metroPage.itemsStyleValues.img1?.transition === 0 ||
            props.metroPage.itemsStyleValues.img2?.transition === 0 ||
            props.metroPage.itemsStyleValues.img3?.transition === 0 ||
            props.metroPage.itemsStyleValues.img4?.transition === 0 ||
            props.metroPage.itemsStyleValues.img5?.transition === 0 ||
            props.metroPage.itemsStyleValues.img6?.transition === 0 ||
            props.metroPage.itemsStyleValues.img7?.transition === 0 ||
            props.metroPage.itemsStyleValues.img8?.transition === 0 ||
            props.metroPage.itemsStyleValues.img9?.transition === 0 ||
            props.metroPage.itemsStyleValues.img10?.transition === 0 ||
            props.metroPage.itemsStyleValues.img11?.transition === 0) {           
            props.updateItemsStyleValuesMetroPage("img1",{
                ...props.metroPage.itemsStyleValues.img1,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img2",{
                ...props.metroPage.itemsStyleValues.img2,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img3",{
                ...props.metroPage.itemsStyleValues.img3,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img4",{
                ...props.metroPage.itemsStyleValues.img4,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img5",{
                ...props.metroPage.itemsStyleValues.img5,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img6",{
                ...props.metroPage.itemsStyleValues.img6,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img7",{
                ...props.metroPage.itemsStyleValues.img7,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img8",{
                ...props.metroPage.itemsStyleValues.img8,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img9",{
                ...props.metroPage.itemsStyleValues.img9,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img10",{
                ...props.metroPage.itemsStyleValues.img10,
                transition: 0.45
            });
            props.updateItemsStyleValuesMetroPage("img11",{
                ...props.metroPage.itemsStyleValues.img11,
                transition: 0.45
            });
        }
    }, [props.metroPage.itemsStyleValues.img1?.transition,props.metroPage.itemsStyleValues.img2?.transition,
        props.metroPage.itemsStyleValues.img3?.transition,props.metroPage.itemsStyleValues.img4?.transition,
        props.metroPage.itemsStyleValues.img5?.transition,props.metroPage.itemsStyleValues.img6?.transition,
        props.metroPage.itemsStyleValues.img7?.transition,props.metroPage.itemsStyleValues.img8?.transition,
        props.metroPage.itemsStyleValues.img9?.transition,props.metroPage.itemsStyleValues.img10?.transition,
        props.metroPage.itemsStyleValues.img11?.transition]);

    const smoothTransition = () => {
        if(props.metroPage.itemsStyleValues.img1){
            props.updateItemsStyleValuesMetroPage("img1",{
                ...props.metroPage.itemsStyleValues.img1,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img2){
            props.updateItemsStyleValuesMetroPage("img2",{
                ...props.metroPage.itemsStyleValues.img2,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img3){
            props.updateItemsStyleValuesMetroPage("img3",{
                ...props.metroPage.itemsStyleValues.img3,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img4){
            props.updateItemsStyleValuesMetroPage("img4",{
                ...props.metroPage.itemsStyleValues.img4,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img5){
            props.updateItemsStyleValuesMetroPage("img5",{
                ...props.metroPage.itemsStyleValues.img5,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img6){
            props.updateItemsStyleValuesMetroPage("img6",{
                ...props.metroPage.itemsStyleValues.img6,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img7){
            props.updateItemsStyleValuesMetroPage("img7",{
                ...props.metroPage.itemsStyleValues.img7,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img8){
            props.updateItemsStyleValuesMetroPage("img8",{
                ...props.metroPage.itemsStyleValues.img8,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img9){
            props.updateItemsStyleValuesMetroPage("img9",{
                ...props.metroPage.itemsStyleValues.img9,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img10){
            props.updateItemsStyleValuesMetroPage("img10",{
                ...props.metroPage.itemsStyleValues.img10,
                transition: 0
            });
        }
        if(props.metroPage.itemsStyleValues.img11){
            props.updateItemsStyleValuesMetroPage("img11",{
                ...props.metroPage.itemsStyleValues.img11,
                transition: 0
            });
        }
    }

    const handleResize = (e) => {
        setImagesState();
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("metroPage");

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

    const setImagesState = () => {
        let metroPageItemsWidth = document.getElementById('metroPageItems')?.clientWidth;

        // Set images state according to the screen width
        
        if(size.width > 1500){
            if(props.metroPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesMetroPage("img1",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img1", 0);
            }
            if(props.metroPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesMetroPage("img2",{
                    width: (metroPageItemsWidth - 120)/5*2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img2", 0);
            }
            if(props.metroPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesMetroPage("img3",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img3", 0);
            }
            if(props.metroPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesMetroPage("img4",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*4 + 120,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img4", 0);
            }
            if(props.metroPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesMetroPage("img5",{
                    width: (metroPageItemsWidth - 120)/5*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 120)/5 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img5", (metroPageItemsWidth - 120)/5 + 40);
            }
            if(props.metroPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesMetroPage("img6",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                    translateY: (metroPageItemsWidth - 120)/5 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img6", (metroPageItemsWidth - 120)/5 + 40);
            }
            if(props.metroPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesMetroPage("img7",{
                    width: (metroPageItemsWidth - 120)/5*2  + 40,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                    translateY: (metroPageItemsWidth - 120)/5 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img7", (metroPageItemsWidth - 120)/5 + 40);
            }
            if(props.metroPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesMetroPage("img8",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                    translateY: (metroPageItemsWidth - 120)/5*2 + 65,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img8", (metroPageItemsWidth - 120)/5*2 + 65);
            }
            if(props.metroPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesMetroPage("img9",{
                    width: (metroPageItemsWidth - 120)/5*2 + 40,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*3 + 80,
                    translateY: (metroPageItemsWidth - 120)/5*2 + 65,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img9", (metroPageItemsWidth - 120)/5*2 + 65);
            }
            if(props.metroPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesMetroPage("img10",{
                    width: (metroPageItemsWidth - 120)/5*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 120)/5*3 + 115,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img10", (metroPageItemsWidth - 120)/5*3 + 115);
            }
            if(props.metroPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesMetroPage("img11",{
                    width: (metroPageItemsWidth - 120)/5,
                    height: 0,
                    translateX: (metroPageItemsWidth - 120)/5*2 + 40,
                    translateY: (metroPageItemsWidth - 120)/5*3 + 100,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img11", (metroPageItemsWidth - 120)/5*3 + 100);
            }
        }
        if(size.width <= 1500 && size.width > 1430){
            if(props.metroPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesMetroPage("img1",{
                    width: (metroPageItemsWidth - 80)/4,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img1", 0);
            }
            if(props.metroPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesMetroPage("img2",{
                    width: (metroPageItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img2", 0);
            }
            if(props.metroPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesMetroPage("img3",{
                    width: (metroPageItemsWidth - 80)/4,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4*3 + 80,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img3", 0);
            }
            if(props.metroPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesMetroPage("img4",{
                    width: (metroPageItemsWidth - 80)/4,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 80)/4 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img4", (metroPageItemsWidth - 80)/4 + 40);
            }
            if(props.metroPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesMetroPage("img5",{
                    width: (metroPageItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 80)/4*2 + 70,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img5", (metroPageItemsWidth - 80)/4*2 + 70);
            }
            if(props.metroPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesMetroPage("img6",{
                    width: (metroPageItemsWidth - 80)/4,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4*3 + 80,
                    translateY: (metroPageItemsWidth - 80)/4 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img6", (metroPageItemsWidth - 80)/4 + 40);
            }
            if(props.metroPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesMetroPage("img7",{
                    width: (metroPageItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4 + 40,
                    translateY: (metroPageItemsWidth - 80)/4 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img7", (metroPageItemsWidth - 80)/4 + 40);
            }
            if(props.metroPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesMetroPage("img8",{
                    width: (metroPageItemsWidth - 80)/4 - 15,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4*2 + 60,
                    translateY: (metroPageItemsWidth - 80)/4*4 + 180,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img8", (metroPageItemsWidth - 80)/4*4 + 180);
            }
            if(props.metroPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesMetroPage("img9",{
                    width: (metroPageItemsWidth - 80)/4*2 + 20,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4*2 + 60,
                    translateY: (metroPageItemsWidth - 80)/4*2 + 70,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img9", (metroPageItemsWidth - 80)/4*2 + 70);
            }
            if(props.metroPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesMetroPage("img10",{
                    width: (metroPageItemsWidth - 80)/4*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 80)/4*4 + 180,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img10", (metroPageItemsWidth - 80)/4*4 + 180);
            }
            if(props.metroPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesMetroPage("img11",{
                    width: (metroPageItemsWidth - 80)/4 - 15,
                    height: 0,
                    translateX: (metroPageItemsWidth - 80)/4*3 + 94,
                    translateY: (metroPageItemsWidth - 80)/4*4 + 180,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img11", (metroPageItemsWidth - 80)/4*4 + 180);
            }
        }
        if(size.width <= 1430 && size.width > 1200){
            if(props.metroPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesMetroPage("img1",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img1", 0);
            }
            if(props.metroPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesMetroPage("img2",{
                    width: (metroPageItemsWidth - 40)/3*2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/3 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img2", 0);
            }
            if(props.metroPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesMetroPage("img3",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                    translateY: (metroPageItemsWidth - 40)/3 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img3", (metroPageItemsWidth - 40)/3 + 40);
            }
            if(props.metroPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesMetroPage("img4",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                    translateY: (metroPageItemsWidth - 40)/3*2 + 100,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img4", (metroPageItemsWidth - 40)/3*2 + 100);
            }
            if(props.metroPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesMetroPage("img5",{
                    width: (metroPageItemsWidth - 40)/3*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/3 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img5", (metroPageItemsWidth - 40)/3 + 40);
            }
            if(props.metroPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesMetroPage("img6",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/3*2 + 40,
                    translateY: (metroPageItemsWidth - 40)/3*3 + 165,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img6", (metroPageItemsWidth - 40)/3*3 + 165);
            }
            if(props.metroPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesMetroPage("img7",{
                    width: (metroPageItemsWidth - 40)/3*2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/3*3 + 165,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img7", (metroPageItemsWidth - 40)/3*3 + 165);
            }
            if(props.metroPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesMetroPage("img8",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/3*4 + 225,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img8", (metroPageItemsWidth - 40)/3*4 + 225);
            }
            if(props.metroPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesMetroPage("img9",{
                    width: (metroPageItemsWidth - 40)/3*2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/3 + 40,
                    translateY: (metroPageItemsWidth - 40)/3*4 + 225,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img9", (metroPageItemsWidth - 40)/3*4 + 225);
            }
            if(props.metroPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesMetroPage("img10",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/3*6 + 345,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img10", (metroPageItemsWidth - 40)/3*6 + 345);
            }
            if(props.metroPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesMetroPage("img11",{
                    width: (metroPageItemsWidth - 40)/3,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/3*5 + 285,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img11", (metroPageItemsWidth - 40)/3*5 + 285);
            }
        }
        if(size.width <= 1200 && size.width > 900){
            if(props.metroPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesMetroPage("img1",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img1", 0);
            }
            if(props.metroPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesMetroPage("img2",{
                    width: (metroPageItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2 + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img2", (metroPageItemsWidth - 40)/2 + 40);
            }
            if(props.metroPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesMetroPage("img3",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/2 + 40,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img3", 0);
            }
            if(props.metroPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesMetroPage("img4",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*2 + 100,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img4", (metroPageItemsWidth - 40)/2*2 + 100);
            }
            if(props.metroPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesMetroPage("img5",{
                    width: (metroPageItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*4 + 175,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img5", (metroPageItemsWidth - 40)/2*4 + 175);
            }
            if(props.metroPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesMetroPage("img6",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/2 + 40,
                    translateY: (metroPageItemsWidth - 40)/2*2 + 100,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img6", (metroPageItemsWidth - 40)/2*2 + 100);
            }
            if(props.metroPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesMetroPage("img7",{
                    width: (metroPageItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*3 + 140,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img7", (metroPageItemsWidth - 40)/2*3 + 140);
            }
            if(props.metroPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesMetroPage("img8",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*8 + 438,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img8", (metroPageItemsWidth - 40)/2*8 + 438);
            }
            if(props.metroPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesMetroPage("img9",{
                    width: (metroPageItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*6 + 357,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img9", (metroPageItemsWidth - 40)/2*6 + 357);
            }
            if(props.metroPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesMetroPage("img10",{
                    width: (metroPageItemsWidth - 40)/2*2 + 40,
                    height: 0,
                    translateX: 0,
                    translateY: (metroPageItemsWidth - 40)/2*9 + 480,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img10", (metroPageItemsWidth - 40)/2*9 + 480);
            }
            if(props.metroPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesMetroPage("img11",{
                    width: (metroPageItemsWidth - 40)/2,
                    height: 0,
                    translateX: (metroPageItemsWidth - 40)/2 + 40,
                    translateY: (metroPageItemsWidth - 40)/2*8 + 438,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img11", (metroPageItemsWidth - 40)/2*8 + 438);
            }
        }
        if(size.width <= 900){
            if(props.metroPage.itemsStyleValues.img1?.rendered){
                props.updateItemsStyleValuesMetroPage("img1",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: 0,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img1", 0);
            }
            if(props.metroPage.itemsStyleValues.img2?.rendered){
                props.updateItemsStyleValuesMetroPage("img2",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth + 40,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img2", metroPageItemsWidth + 40);
            }
            if(props.metroPage.itemsStyleValues.img3?.rendered){
                props.updateItemsStyleValuesMetroPage("img3",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth + metroPageItemsWidth/2 + 80,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img3", metroPageItemsWidth + metroPageItemsWidth/2 + 80);
            }
            if(props.metroPage.itemsStyleValues.img4?.rendered){
                props.updateItemsStyleValuesMetroPage("img4",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*2 + metroPageItemsWidth/2 + 120,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img4",  metroPageItemsWidth*2 + metroPageItemsWidth/2 + 120);
            }
            if(props.metroPage.itemsStyleValues.img5?.rendered){
                props.updateItemsStyleValuesMetroPage("img5",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*3 + metroPageItemsWidth/2 + 170,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img5", metroPageItemsWidth*3 + metroPageItemsWidth/2 + 170);
            }
            if(props.metroPage.itemsStyleValues.img6?.rendered){
                props.updateItemsStyleValuesMetroPage("img6",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*4 + metroPageItemsWidth/2 + 290,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img6", metroPageItemsWidth*4 + metroPageItemsWidth/2 + 290);
            }
            if(props.metroPage.itemsStyleValues.img7?.rendered){
                props.updateItemsStyleValuesMetroPage("img7",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*5 + metroPageItemsWidth/2 + 340,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img7", metroPageItemsWidth*5 + metroPageItemsWidth/2 + 340);
            }
            if(props.metroPage.itemsStyleValues.img8?.rendered){
                props.updateItemsStyleValuesMetroPage("img8",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*6 + 370,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img8", metroPageItemsWidth*6 + 370);
            }
            if(props.metroPage.itemsStyleValues.img9?.rendered){
                props.updateItemsStyleValuesMetroPage("img9",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*7 + 420,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img9", metroPageItemsWidth*7 + 420);
            }
            if(props.metroPage.itemsStyleValues.img10?.rendered){
                props.updateItemsStyleValuesMetroPage("img10",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*8 + 470,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img10", metroPageItemsWidth*8 + 470);
            }
            if(props.metroPage.itemsStyleValues.img11?.rendered){
                props.updateItemsStyleValuesMetroPage("img11",{
                    width: metroPageItemsWidth,
                    height: 0,
                    translateX: 0,
                    translateY: metroPageItemsWidth*8 + metroPageItemsWidth/2 + 500,
                    transition: 0,
                    rendered: true
                });
                props.setTopPositionOfTheItemForMetroPage("img11", metroPageItemsWidth*8 + metroPageItemsWidth/2 + 500);
            }
        }
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="metroPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="metroPage"
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
                        page="metroPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="metroPage"
                    />
                </>
            )
        }
    }

    const renderMetroPageItemStyle = (id) => {
        switch(id){
            case 1:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img1?.width}`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img2?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img2?.translateX}px, ${props.metroPage.itemsStyleValues.img2?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img2?.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img3?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img3?.translateX}px, ${props.metroPage.itemsStyleValues.img3?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img3?.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img4?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img4?.translateX}px, ${props.metroPage.itemsStyleValues.img4?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img4?.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img5?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img5?.translateX}px, ${props.metroPage.itemsStyleValues.img5?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img5?.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img6?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img6?.translateX}px, ${props.metroPage.itemsStyleValues.img6?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img6?.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img7?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img7?.translateX}px, ${props.metroPage.itemsStyleValues.img7?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img7?.transition}s ease-out`,
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img8?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img8?.translateX}px, ${props.metroPage.itemsStyleValues.img8?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img8?.transition}s ease-out`,
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img9?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img9?.translateX}px, ${props.metroPage.itemsStyleValues.img9?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img9?.transition}s ease-out`,
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img10?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img10?.translateX}px, ${props.metroPage.itemsStyleValues.img10?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img10?.transition}s ease-out`,
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img11?.width}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img11?.translateX}px, ${props.metroPage.itemsStyleValues.img11?.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img11?.transition}s ease-out`,
                };
        }
    }

    const renderMetroPageItemsStyleHeight = () => {
        if(size.width > 1500){
            return 4*props.metroPage.itemsStyleValues.img1?.width + 4*40;
        }
        if(size.width <= 1500 && size.width > 1430){
            return 5*props.metroPage.itemsStyleValues.img1?.width + 5*40 - 5;
        }
        if(size.width <= 1430 && size.width > 1200){
            return 8*props.metroPage.itemsStyleValues.img1?.width + 4*40 + 20;
        }
        if(size.width <= 1200 && size.width > 900){
            return 10*props.metroPage.itemsStyleValues.img1?.width + 12*40 - 4;
        }
        if(size.width <= 900){
            return 9*props.metroPage.itemsStyleValues.img1?.width + props.metroPage.itemsStyleValues.img1?.width/2 + 13*40 + 10;
        }
    }
    
    const renderMetroPageData = () => {
        return(
            <div 
                id="metroPageItems"
                className="metro-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${renderMetroPageItemsStyleHeight()}px`
                }}
            >{props.metroPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        style={renderMetroPageItemStyle(el.id)}
                    >
                        <MetroItem
                            page="metroPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            setIsHoveringCategory={props.setMetroPageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderMetroContent = () => {
        if(props.metroPage.loading && !props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.metroPage.loading && !props.metroPage.error){
            return(
                <div className="metro-page-wrapper">
                    {renderMetroPageData()}
                </div>
            )
        }
        if(!props.metroPage.loading && props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.metroPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <div className="metro-page2" id="metroPage">
            {renderToolbars()}
            <div className="metro-page-header">
                <H65 className="h65-nero-poppins">Metro</H65>
            </div> 
            {renderMetroContent()}
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            metroPage: Selectors.getMetroPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            fetchMetroPageSuccess: bindActionCreators(Actions.fetchMetroPageSuccess, dispatch),
            initItemsStylesStateForMetroPage: bindActionCreators(Actions.initItemsStylesStateForMetroPage, dispatch),
            setMetroPageIsHoveringCategory: bindActionCreators(Actions.setMetroPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValuesMetroPage: bindActionCreators(Actions.updateItemsStyleValuesMetroPage, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setTopPositionOfTheItemForMetroPage: bindActionCreators(Actions.setTopPositionOfTheItemForMetroPage, dispatch)
        };
    }
)(MetroPage);
 