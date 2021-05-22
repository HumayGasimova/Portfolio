/**
 * Libraries
 */

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './tabs.scss';

/**
 * Utility
 */

import {
    H17
} from '../../UtilityComponents';

/**
 * Tabs component definition and export
 */

export const Tabs = (props) => {
    /**
     * State
     */

    const section1Column1Tab1 = useRef();
    const section1Column1Tab2 = useRef();
    const section1Column1Tab3 = useRef();
    const section1Column2Tab1 = useRef();
    const section1Column2Tab2 = useRef();
    const section1Column2Tab3 = useRef();
    const section2Tab1 = useRef();
    const section2Tab2 = useRef();
    const section2Tab3 = useRef();
    const section2Tab4 = useRef();
    const resizeRef = useRef();
    const transitionRef = useRef();
    const [widthOfTab, setWidthOfTab] = useState(0);
    const [relode, setRelode] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        // Set underline width for active tab

        if(props.tabsKey === "section1Column1" && props.array.length !== 0){
            let tabInfo = section1Column1Tab1.current.getBoundingClientRect()
            setWidthOfTab(tabInfo.width);
        }
        if(props.tabsKey === "section1Column2" && props.array.length !== 0){
            let tabInfo = section1Column2Tab1.current.getBoundingClientRect()
            setWidthOfTab(tabInfo.width);
        }
        if(props.tabsKey === "section2" && props.array.length !== 0){
            let tabInfo = section2Tab1.current.getBoundingClientRect()
            setWidthOfTab(tabInfo.width);
        }

        // Calculate tabs header holder coordinates 

        setTabCoordinateRange();

        // Event Listeners
    
        const smooth = () => {
            transitionRef.current();
        }

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
        }

    }, [props.tabsCoordinateRange.tabs[0].updated, relode]);

    useEffect(() => {
        resizeRef.current = handleResize;
        transitionRef.current = smoothTransition;
    });

    useEffect(() => {
        // Set the transition property to the initial value if its value is 0
        
        if(props.tabsKey === "section1Column1" && props.tabsUnderlineStyleValues?.transition === 0)
            props.updateTabsUnderlinesStyleValues("section1Column1",{
                ...props.tabsUnderlineStyleValues,
                transition: 0.45
            });
        if(props.tabsKey === "section1Column2" && props.tabsUnderlineStyleValues?.transition === 0){
            props.updateTabsUnderlinesStyleValues("section1Column2",{
                ...props.tabsUnderlineStyleValues,
                transition: 0.45
            });
        }
        if(props.tabsKey === "section2" && props.tabsUnderlineStyleValues?.transition === 0){
            props.updateTabsUnderlinesStyleValues("section2",{
                ...props.tabsUnderlineStyleValues,
                transition: 0.45
            });
        }
    }, [props.tabsUnderlineStyleValues?.transition]);

    const smoothTransition = () => {
        if(props.tabsKey === "section1Column1" && props.tabsUnderlineStyleValues){
            props.updateTabsUnderlinesStyleValues("section1Column1",{
                ...props.tabsUnderlineStyleValues,
                transition: 0
            });
        }
        if(props.tabsKey === "section1Column2" && props.tabsUnderlineStyleValues){
            props.updateTabsUnderlinesStyleValues("section1Column2",{
                ...props.tabsUnderlineStyleValues,
                transition: 0
            });
        }
        if(props.tabsKey === "section2" && props.tabsUnderlineStyleValues){
            props.updateTabsUnderlinesStyleValues("section2",{
                ...props.tabsUnderlineStyleValues,
                transition: 0
            });
        }
    }

    const handleResize = () => {
        // Update tabs header holder coordinates on window resize
        
        setTabCoordinateRange();
        props.updateTabsUnderlinesStyleValues(`${props.tabsKey}`,{
            ...props.tabsUnderlineStyleValues,
            transition: 0.45
        });
        setRelode(!relode)
    }

    const setTabCoordinateRange = () => {
        // Remember tab header holder coordinates

        let headerHolderCoordinateRange = [];
        if(props.page === "tabsPage"){
            headerHolderCoordinateRange = props.array.map(el => {
                return evaluateCoordinates(el.id)
            });
        }

        props.rememberCoordinateRange(props.tabsKey, headerHolderCoordinateRange);
    }
    
    const evaluateCoordinates = (tabId) => {
        // Calculate tabs header holder coordinates
        
        let tabHeaderHolder = setRef(`${props.tabsKey}Tab${tabId}`);
    
        let updatedTabsHeaderCoordinateRange = {
            id: tabId,
            key: props.tabsKey,
            topCoordinate: window.scrollY + tabHeaderHolder.current.getBoundingClientRect().top,
            bottomCoordinate: window.scrollY + tabHeaderHolder.current.getBoundingClientRect().bottom,
            leftCoordinate: window.scrollX + tabHeaderHolder.current.getBoundingClientRect().left,
            rightCoordinate: window.scrollX + tabHeaderHolder.current.getBoundingClientRect().right,
            width: tabHeaderHolder.current.getBoundingClientRect().width,
            updated: true
        };
        return updatedTabsHeaderCoordinateRange;
    }

    const handleMouseMove = (e) => {
        /**
         * Check if the coordinates of the cursor are inside which tab,
         * and move the underline under the corresponding tab.
         */
        
        let pageX = e.pageX;
        let pageY = e.pageY;
        
        props.tabsCoordinateRange.tabs.map((el, i) => {
         
            if(el.leftCoordinate < pageX && pageX < el.rightCoordinate && 
                el.topCoordinate < pageY && pageY < el.bottomCoordinate){

                if(props.tabsCoordinateRange.tabs){
                    props.updateTabsUnderlinesStyleValues(`${props.tabsKey}`,{
                        width: widthOfTab,
                        translateX: el.leftCoordinate - props.tabsCoordinateRange.tabs[0].leftCoordinate,
                        transition: 0,
                        rendered: true
                    });
                    setWidthOfTab(el.width)
                }
                // props.setIsHoverTab("on", el.id);
            }else { 
                // props.setIsHoverTab("off", el.id);
            }
        })
    }

    const handleMouseLeave = (opt, tabsKey) => {
        switch(opt){
            case 'tabsHeader':

                // After exiting a tab, move the underline under the active tab

                let activeTabId = props.array.find(item => item.active === "on").id;
                let activeTabIndex = props.tabsCoordinateRange.tabs.findIndex(item => item.id === activeTabId);
                let activeTabLeftCoordinate = props.tabsCoordinateRange.tabs.find(item => item.id === activeTabId).leftCoordinate;
                let firstTabLeftCoordinate = props.tabsCoordinateRange.tabs[0].leftCoordinate;
                let translateX = activeTabIndex === 0 ? 0 : activeTabLeftCoordinate - firstTabLeftCoordinate;

                let tab = setRef(`${props.tabsCoordinateRange.tabs[activeTabIndex].key}Tab${props.tabsCoordinateRange.tabs[activeTabIndex].id}`);
                setWidthOfTab(tab.current.getBoundingClientRect().width);

                if(props.tabsKey === "section1Column1"){
                    props.updateTabsUnderlinesStyleValues(`section1Column1`,{
                        width: widthOfTab,
                        translateX: translateX,
                        transition: 0,
                        rendered: true
                    });
                }
                if(props.tabsKey === "section1Column2"){
                    props.updateTabsUnderlinesStyleValues(`section1Column2`,{
                        width: widthOfTab,
                        translateX: translateX,
                        transition: 0,
                        rendered: true
                    });
                }
                if(props.tabsKey === "section2"){
                    props.updateTabsUnderlinesStyleValues(`section2`,{
                        width: widthOfTab,
                        translateX: translateX,
                        transition: 0,
                        rendered: true
                    });
                }
                break;
        }
    }

    const tabItemOnClick = (e, path, id) => {
        switch(e.button){
            case 0:
                // Show and remember data of chosen tab on left mouse click

                let tab = setRef(`${props.tabsKey}Tab${id}`);

                setWidthOfTab(tab.current.getBoundingClientRect().width);
                props.setActiveTab("on", id);
                return;
            case 1:
                // Open current page in a new window on scroll wheel click
                window.open(path , "_blank");
                return;
            case 2:
                // Do nothing on right mouse click 
                return;
        }
    }

    const setRef = (tabKey) => {
        switch(tabKey){
            case 'section1Column1Tab1':
                return section1Column1Tab1;
            case 'section1Column1Tab2':
                return section1Column1Tab2;
            case 'section1Column1Tab3':
                return section1Column1Tab3;
            case 'section1Column2Tab1':
                return section1Column2Tab1;
            case 'section1Column2Tab2':
                return section1Column2Tab2;
            case 'section1Column2Tab3':
                return section1Column2Tab3;
            case 'section2Tab1':
                return section2Tab1;
            case 'section2Tab2':
                return section2Tab2;
            case 'section2Tab3':
                return section2Tab3;
            case 'section2Tab4':
                return section2Tab4;
        }
    }

    const renderTabsHeader = () => {
        return(
            <div 
                className="tabs-header-items"
                onMouseLeave={() => handleMouseLeave("tabsHeader", props.tabsKey)}
            >{props.array.map((el, i) => {
                return(
                    <div
                        key={i}
                        ref={setRef(`${props.tabsKey}Tab${el.id}`)}
                        className={i === 0 ? "tabs-header-item-first" : "tabs-header-item"}
                        onMouseDown={(e) => tabItemOnClick(e, props.location.pathname, el.id)}
                    >
                        <H17 className="h17-black-poppins">{el.header}</H17>
                    </div>
                )
            })}</div>
        )
    }

    const renderText = () => {
        if(props.array.length !== 0){
            let activeTabObj = props.array.find(item => item.active === "on");
            return(
                <div className="tabs-text">
                    <H17 className="h17-nobel-lustria">{activeTabObj.text}</H17>
                </div>
            ) 
        }
    }

    const renderLinesStyle = (tabKey) => {
        switch(tabKey){
            case 'section1Column1':
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlineStyleValues?.translateX}px`,
                    transition: `transform ${props.tabsUnderlineStyleValues?.transition}s ease-out`,
                };
            case "section1Column2":
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlineStyleValues?.translateX}px`,
                    transition: `transform ${props.tabsUnderlineStyleValues?.transition}s ease-out`,
                  
                };
            case 'section2':
                return {
                    width: `${widthOfTab}px`,
                    transform: `translateX(${props.tabsUnderlineStyleValues?.translateX}px`,
                    transition: `transform ${props.tabsUnderlineStyleValues?.transition}s ease-out`,
                };
        }
    }

    /**
     * Markup
     */

    return(
        <div className="tabs">
            {renderTabsHeader()}
            <div className="tabs-gray-line-wrapper">
                <div className="tabs-gray-line-long"/>
                <div 
                    className="tabs-black-line-short"
                    style={renderLinesStyle(props.tabsKey)}
                />
            </div>
            {renderText()}
        </div>
    );
}

export default withRouter(Tabs);
