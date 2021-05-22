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

import './projectShowcaseItem.scss';

/**
 * Utility
 */

import {
    H19,
    H22,
    H65,
    EH10,
    EH20,
    EH30
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';
import PhotoViewer from '../../Parts/PhotoViewer/photoViewer';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
 * ProjectShowcaseItem component definition and export
 */

export const ProjectShowcaseItem = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = useRef();
    const transitionRef = useRef();
 
    /**
     * Methods
     */

    useEffect(() => {
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        const smooth = () => {
            transitionRef.current();
        }
        
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);
        window.addEventListener('wheel', handleOnWheel);
        
        return () =>  {
            // Cleaning the unmounted component

            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('wheel', handleOnWheel);
        }
      
    }, [props.data.backgroundImage.animation]);
    
    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0
        
        if(props.data.key === "portfolioProjectShowcasePageId1" && props.data.backgroundImage.style.transition === 0){
            props.updateStyleValues("portfolioProjectShowcasePageId1",{
                ...props.data.backgroundImage.style,
                transition: 0.45
            });
        }
        if(props.data.key === "portfolioProjectShowcasePageId2" && props.data.backgroundImage.style.transition === 0){
            props.updateStyleValues("portfolioProjectShowcasePageId2",{
                ...props.data.backgroundImage.style,
                transition: 0.45
            });
        }
        if(props.data.key === "portfolioProjectShowcasePageId3" && props.data.backgroundImage.style.transition === 0){
            props.updateStyleValues("portfolioProjectShowcasePageId3",{
                ...props.data.backgroundImage.style,
                transition: 0.45
            });
        }
      
    }, [props.data.backgroundImage.style.transition]);

    const smoothTransition = () => {
        if(props.data.key === "portfolioProjectShowcasePageId1" ){
            props.updateStyleValues("portfolioProjectShowcasePageId1",{
                ...props.data.backgroundImage.style,
                transition: 0
            });
        }
        if(props.data.key === "portfolioProjectShowcasePageId2") {
            props.updateStyleValues("portfolioProjectShowcasePageId2",{
                ...props.data.backgroundImage.style,
                transition: 0
            });
        }
        if(props.data.key === "portfolioProjectShowcasePageId3" ){
            props.updateStyleValues("portfolioProjectShowcasePageId3",{
                ...props.data.backgroundImage.style,
                transition: 0
            });
        }
    }
    
    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let portfolioProjectShowcasePageId1BackgroundImg1 = document.getElementById("portfolioProjectShowcasePageId1BackgroundImg1");
        let portfolioProjectShowcasePageId2BackgroundImg1 = document.getElementById("portfolioProjectShowcasePageId2BackgroundImg1");
        let portfolioProjectShowcasePageId3BackgroundImg1 = document.getElementById("portfolioProjectShowcasePageId3BackgroundImg1");

        // Start transition effect only when it appears on the screen

        if(props.data.key === "portfolioProjectShowcasePageId1"){
            if(scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop - size.height){
                
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 60,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop - size.height && 
                scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5 - size.height){
           
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 75,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", true);

            }else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*2 - size.height){
             
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 80,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*2 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*3 - size.height){
            
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 85,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", true);
            }else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*3 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*4 - size.height){
            
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 90,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", false);
            }else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + size.height/5*4 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId1BackgroundImg1.offsetTop){
            
                props.updateStyleValues("portfolioProjectShowcasePageId1",{
                    width: 100,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId1", true);
            }
            else if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop + portfolioProjectShowcasePageId1BackgroundImg1.offsetHeight){
                props.updateAnimation("portfolioProjectShowcasePageId1", false);
            }
        }

        if(props.data.key === "portfolioProjectShowcasePageId2"){
            if(scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop - size.height){
                
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 60,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop - size.height && 
                scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5 - size.height){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 75,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", true);

            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5 - size.height && 
                    scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*2 - size.height){
                        
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 80,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*2 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*3 - size.height){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 85,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", true);

            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*3 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*4 - size.height){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 90,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + size.height/5*4 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId2BackgroundImg1.offsetTop){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId2",{
                    width: 100,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId2", true);
                
            }else if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop + portfolioProjectShowcasePageId2BackgroundImg1.offsetHeight){
                props.updateAnimation("portfolioProjectShowcasePageId2", false);
            }
        }

        if(props.data.key === "portfolioProjectShowcasePageId3"){
            if(scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop - size.height){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 60,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop - size.height && 
                scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5 - size.height){
                    
                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 75,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", true);

            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5 - size.height && 
                    scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*2 - size.height){

                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 80,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*2 - size.height && 
                    scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*3 - size.height){

                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 85,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", true);

            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*3 - size.height && 
                scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*4 - size.height){

                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 90,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", false);

            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + size.height/5*4 - size.height && 
                    scrollHeight < portfolioProjectShowcasePageId3BackgroundImg1.offsetTop){

                props.updateStyleValues("portfolioProjectShowcasePageId3",{
                    width: 100,
                    transition: 0,
                    rendered: !props.data.backgroundImage.style.rendered
                });
                props.updateAnimation("portfolioProjectShowcasePageId3", true);
                
            }else if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop + portfolioProjectShowcasePageId3BackgroundImg1.offsetHeight){
                props.updateAnimation("portfolioProjectShowcasePageId3", false);
            }
        }
            // Render the component only when it appears on a vertically oriented screen
            
            // if(size.width - size.height < 0){
            //     if(scrollHeight >= portfolioProjectShowcasePageId1BackgroundImg1.offsetTop - size.height/2 - 900){
            //         setPortfolioProjectShowcasePageId1BackgroundImg1OnScreen(true);
            //     }
            // }else{

            // }

            // if(size.width - size.height < 0){
            //     if(scrollHeight >= portfolioProjectShowcasePageId2BackgroundImg1.offsetTop - size.height/2 - 900){
            //         setPortfolioProjectShowcasePageId2BackgroundImg1OnScreen(true);
            //     }
            // }else{

            // }

            // if(size.width - size.height < 0){
            //     if(scrollHeight >= portfolioProjectShowcasePageId3BackgroundImg1.offsetTop - size.height/2 - 900){
            //         setPortfolioProjectShowcasePageId3BackgroundImg1OnScreen(true);
            //     }
            // }else{

            // }
        // }

    }

    const handleResize = () => {
        // Set the height of the curtain on window resize

    }

    const handleMouseEnter = (opt, key, id) => {
        switch(opt){
            case 'projectShowcaseCategory': 
                props.setProjectShowcaseIsHoveringCategory("on", key, id);
                break;
            case 'projectShowcaseTag': 
                props.setProjectShowcaseIsHoveringTag("on", key, id);
                break;
        }
    }

    const handleMouseLeave = (opt, key, id) => {
        switch(opt){
            case 'projectShowcaseCategory': 
                props.setProjectShowcaseIsHoveringCategory("off", key, id);
                break;
            case 'projectShowcaseTag': 
                props.setProjectShowcaseIsHoveringTag("off", key, id);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'portfolioProjectShowcasePageId1Img1':
                return Images.ID_2_BIG_IMAGES_5;
            case 'portfolioProjectShowcasePageId1Img2':
                return Images.ID_2_BIG_IMAGES_4;
            case 'portfolioProjectShowcasePageId1Img3':
                return Images.ID_2_BIG_IMAGES_3;
            case 'portfolioProjectShowcasePageId2Img1':
                return Images.ID_3_GALLERY_1;
            case 'portfolioProjectShowcasePageId2Img2':
                return Images.ID_3_GALLERY_3;
            case 'portfolioProjectShowcasePageId2Img3':
                return Images.ID_3_GALLERY_4;
            case 'portfolioProjectShowcasePageId3Img1':
                return Images.ID_1_SMALL_SLIDER_2;
            case 'portfolioProjectShowcasePageId3Img2':
                return Images.ID_1_SMALL_SLIDER_5;
            case 'portfolioProjectShowcasePageId3Img3':
                return Images.ID_1_SMALL_SLIDER_1;
            default:
                return "";
        }
    }

    // const stoneWallOnClick = (e, path) => {
    //     // Do nothing on right mouse click

    //     if(e.button === 2) return;

    //     // Storing data in local storage

    //     localStorage.setItem("pageHG", props.page);

    //     if(e.button !== 1){
    //         /**
    //          * Add fading effect on the unmounted component and remember 
    //          * information of the unmounted component on left mouse click 
    //          */

    //         props.setUnmountComponentValues(true, path);
    //     }else{
    //         // Remember information of the unmounted component on scroll wheel click

    //         props.setUnmountComponentValues(false, path);
    //     }
    //     // Fire up unmountComponent epic
        
    //     props.unmountComponent(null, null,  props.page, e.button);
    // }

    const renderClassName = (opt, isHovering) => {
        if(opt === "projectShowcaseCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "projectShowcaseTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
    }

    const loadBackgroundImage = (key) => {
        let img;
        switch(key){
            case 'portfolioProjectShowcasePageId1BackgroundImg1':
                if(size.width > 1180){
                    img = Images.ID_2_BIG_IMAGES_1;
                }
                if(size.width <= 1180 && size.width > 790){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_MID_SCREEN_IMG_1;
                }
                if(size.width <= 790 && size.width > 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SMALL_SCREEN_IMG_1;
                }
                if(size.width <= 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SUPER_SMALL_SCREEN_IMG_1;
                }
                return img;
            case 'portfolioProjectShowcasePageId2BackgroundImg1':
                if(size.width > 1180){
                    img = Images.ID_3_GALLERY_5;
                }
                if(size.width <= 1180 && size.width > 790){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_MID_SCREEN_IMG_2;
                }
                if(size.width <= 790 && size.width > 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SMALL_SCREEN_IMG_2;
                }
                if(size.width <= 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SUPER_SMALL_SCREEN_IMG_2;
                }
                return img;
            case 'portfolioProjectShowcasePageId3BackgroundImg1':
                if(size.width > 1180){
                    img = Images.ID_1_SMALL_SLIDER_6;
                }
                if(size.width <= 1180 && size.width > 790){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_MID_SCREEN_IMG_3;
                }
                if(size.width <= 790 && size.width > 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SMALL_SCREEN_IMG_3;
                }
                if(size.width <= 520){
                    img = Images.PROJECT_SHOWCASE_BACKGROUND_SUPER_SMALL_SCREEN_IMG_3;
                }
                return img;
            default:
                return "";
            }
    }

    const openPhotoViewer = (items, activeKey) => {

        let array = [];
       
        items.map((el, i) => {
            el.imagesArray.map(el => array.push(el))
        })
        array = array.map((el, i) => {
            return{
                ...el,
                id: i + 1
            }
        });

        let activeIndex = array.find(item => item.key === activeKey).id - 1;
        let slidesForPhotoViewer = [...array];
        let removedSlides = [];
        
        /**
         * Rearrange the elements in array so that the element
         * with active index becomes first and the rest are
         * lined up in the correct order
         */

        slidesForPhotoViewer.map((el, i) => {
            if(i < activeIndex){
                removedSlides.push(el);
            }
        })
        slidesForPhotoViewer.splice(0, activeIndex)
      
        if(removedSlides.length !== 0){
            slidesForPhotoViewer.push(removedSlides);
        }

        slidesForPhotoViewer = slidesForPhotoViewer.flat();
        

        // Open photo viewer for the component

        props.photoViewerOpen(props.component, true, slidesForPhotoViewer);
    }

    const renderProjectShowcaseImages = (imagesArray) => {
        return(
            <div className="project-showcase-images">{imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-image"
                    >
                        <img 
                            src={loadImg(el.key)}
                            onClick={() => openPhotoViewer(props.items, el.key)}
                        />
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderCategories = (categories, key) => {
        return(
            <div className="project-showcase-categories">{categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-category"
                        // onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`projectShowcaseCategory`, key, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`projectShowcaseCategory`, key, el.id)} 
                    >
                        <H19 className={renderClassName(`projectShowcaseCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = (tags, key) => {
        return(
            <div className="project-showcase-tags">{tags.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-tag"
                        onMouseEnter={() => handleMouseEnter(`projectShowcaseTag`, key, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`projectShowcaseTag`, key, el.id)} 
                    >
                        <H19 className={renderClassName(`projectShowcaseTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const setLeftAndRightPadding = (windowWidth) => {
        if(windowWidth > 1120){
            return 260;
        }
        if(windowWidth <= 1120){
            return 80;
        }
    }

    /**
     * Markup
     */

    return(
        <div className="project-showcase">
            <div className="project-showcase-haeder">
                <H65 className="h65-nero-poppins">{props.data.header}</H65>
            </div>
            <EH10/>
            <div className="project-showcase-info-wrapper">
                <div className="project-showcase-text-wrapper">
                    <H22 className="h22-nobel-lustria">{props.data.text}</H22>
                </div>
                <div className="project-showcase-category-date-tags-wrapper">
                    <div className="project-showcase-categories-wrapper">
                        <H22 className="h22-nero-poppins">Category:</H22>
                        {renderCategories(props.data.categories, props.data.key)}
                    </div>
                    <div className="project-showcase-date-wrapper">
                        <H22 className="h22-nero-poppins">Date:</H22>&nbsp;&nbsp;
                        <H19 className="h19-nobel-lustria">{props.data.date}</H19>
                    </div>
                    <div className="project-showcase-tags-wrapper">
                        <H22 className="h22-nero-poppins">Tags:</H22>
                        {renderTags(props.data.tags, props.data.key)}
                    </div>
                </div>
            </div>
            <EH30/>
            {renderProjectShowcaseImages(props.data.imagesArray)}
            <div 
                className="project-showcase-background"
                id={props.data.backgroundImage.key}
                style={{
                    backgroundImage: `url(${loadBackgroundImage(props.data.backgroundImage.key)})`,
                    width: `calc(${props.data.backgroundImage.style.width}% + ${setLeftAndRightPadding(size.width)}px)`,
                    transition: `width ${props.data.backgroundImage.style.transition}s ease-out`,
                }}
            />
            {props.photoViewerForProjectShowcaseItemOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component={props.component}
            /> : null}
        </div>
    );
}

export default ProjectShowcaseItem;
