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

import './scrollSlider.scss';

/**
 * Components
 */

import Button from '../..//library/Button/button';

/**
 * Actions
 */

// import * as Actions from '../../../../actions';

/**
 * Services
 */

// import * as Services from "../../../../service";

/**
 * Selectors
 */

// import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import {
    H15,
    H17,
    H25,
    H45,
    H65,
    EW10,
    EH20,
    EH60
} from '../../components/UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../Hooks/useWindowSize';

/**
 * Constants
 */

import * as Images from '../../constants/images';

/**
 * ScrollSlider component definition and export
 */

export const ScrollSlider = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [initHeight, setInitHeight] = useState("350px");       
    const [componentUpdated, setComponentUpdated] = useState(false);    
    
    /**
     * Methods
     */

    useEffect(() => {
        // Prevent scrolling y axis on scrolSlider component

        document.getElementById('scrollSlider').onwheel = () => false;

        // Calculate slider container coordinates 
      
        setSlideContainerCoordinateRange();
        setInitHeight("auto");

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        const smooth = () => {
            transitionRef.current();
        }

        if(props.mouseOnSlider){
            window.addEventListener('wheel', handleOnWheel);
        }else{
            window.removeEventListener('wheel', handleOnWheel);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            if(props.mouseOnSlider){
                window.removeEventListener('wheel', handleOnWheel);
            }
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
        }
    }, [props.mouseOnSlider, componentUpdated]);

    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0

        if(props.scrollSlidersStyleValues.slider1?.transition === 0){
            props.updateScrollSlidersStyleValues("scrollSlider1",{
                ...props.scrollSlidersStyleValues.slider1,
                transition: 2
            });
        }

    }, [props.scrollSlidersStyleValues.slider1.transition]);

    const smoothTransition = () => {
        props.updateScrollSlidersStyleValues("scrollSlider1",{
            ...props.scrollSlidersStyleValues.slider1,
            transition: 0
        });
    }

    const handleResize = () => {
        // Update slider container coordinates on window resize
        
        setSlideContainerCoordinateRange();

        props.updateScrollSlidersStyleValues("scrollSlider1",{
            translateX: 0,
            transition: props.scrollSlidersStyleValues["slider1"].transition,
            rendered: true
        });

        setComponentUpdated(!componentUpdated)
    }

    const setSlideContainerCoordinateRange = () => {
        //Remember slider container coordinates

        let sliderContainerCoordinateRange = evaluateCoordinates();

        props.rememberCoordinateRange(props.sliderKey, sliderContainerCoordinateRange);
    }

    const evaluateCoordinates = () => {
   
        //Calculate slider container coordinates

        let sliderContainer = document.getElementById(`scrollSlider`);
        let sliderContainerCoordinateRange = props.sliderContainersCoordinateRange.find(item => item.key === props.sliderKey);

        let updatedSliderCoordinateRange = {
            key: props.sliderKey,
            topCoordinate: sliderContainer.offsetTop,
            bottomCoordinate: sliderContainer.offsetTop + sliderContainer.offsetHeight,
            leftCoordinate: sliderContainer.offsetLeft,
            rightCoordinate: sliderContainer.offsetLeft + sliderContainer.offsetWidth,
            width: sliderContainer.offsetWidth,
            updated: !sliderContainerCoordinateRange.updated,
            rendered: true
        };

        return updatedSliderCoordinateRange;
    }

    const handleOnWheel = (e) => {
        // Check scroll direction

        let scrollSliderWidth = document.getElementById("scrollSlider").offsetWidth;
        
        if(!checkScrollDirectionIsUp(e)){
            props.updateScrollSlidersStyleValues("scrollSlider1",{
                translateX: scrollSliderWidth - Math.abs(props.scrollSlidersStyleValues["slider1"].translateX - scrollSliderWidth/props.sliderContent.length) > size.width ? 
                            props.scrollSlidersStyleValues["slider1"].translateX - scrollSliderWidth/props.sliderContent.length : 
                            -(scrollSliderWidth-size.width),
                transition: props.scrollSlidersStyleValues["slider1"].transition,
                rendered: true
            });
        }else{
            props.updateScrollSlidersStyleValues("scrollSlider1",{
                translateX: props.scrollSlidersStyleValues["slider1"].translateX >= 0 ? 0 : props.scrollSlidersStyleValues["slider1"].translateX + scrollSliderWidth/props.sliderContent.length,
                transition: props.scrollSlidersStyleValues["slider1"].transition,
                rendered: true
            });
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }
  
    const loadImg = (key) => {
        switch(key) {
            case 'scrollSliderPageImg1':
                return Images.SCROLL_SLIDER_IMG_1;
            case 'scrollSliderPageImg2':
                return Images.SCROLL_SLIDER_IMG_2;
            case 'scrollSliderPageImg3':
                return Images.SCROLL_SLIDER_IMG_3;
            case 'scrollSliderPageImg4':
                return Images.SCROLL_SLIDER_IMG_4;
            case 'scrollSliderPageImg5':
                return Images.SCROLL_SLIDER_IMG_5;
            case 'scrollSliderPageImg6':
                return Images.SCROLL_SLIDER_IMG_6;
            default:
                return "";
        }
    }

    /**
     * Markup
     */

    return(
        <div 
            className="scroll-slider" 
            id="scrollSlider"
            style={{
                height: `${initHeight}`,
                flexDirection: `${props.orientation}`,
                transform: `translateX(${props.scrollSlidersStyleValues.slider1?.translateX}px)`,
                transition: `transform ${props.scrollSlidersStyleValues.slider1?.transition}s ease`,
            }}
        >
           {props.sliderContent.map((el, i) => {
                if(el.option === "text"){
                    return(
                        <div 
                            key={i}
                            className="scroll-slider-item-text"
                        >
                            <H65 className="h65-black-poppins-scroll-slider">{el.header1}</H65>
                            <H65 className="h65-black-lustria-scroll-slider">{el.header2}</H65>
                            <EH20/>
                            <H25 className="h25-nobel-lustria">{el.text}</H25>
                            <EH60/>
                            <Button
                                className="buttons-page-medium"
                                text="get direction."
                                onMouseDown={(e) => onMouseDownHandler(e)}
                            />
                            {size.width < 900 ? null : <EH60/>}
                        </div>
                    )
                }else if(el.option === "image"){
                    return(
                        <div 
                            key={i}
                            className="scroll-slider-item-image"
                            style={{
                                margin: `0px ${i === props.sliderContent.length - 1 ? 0 : 10}px 0px 10px`
                            }}
                        >
                            <img 
                                src={loadImg(el.key)}
                                alt={el.alt}
                            />
                        </div>
                    )
                }
            })}
        </div>   
    );
}

export default ScrollSlider;
 