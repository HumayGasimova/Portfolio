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

import './portfolioGallery.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MenuFullScreen from '../../../Parts/MenuFullScreen/menuFullScreen';
import PortfolioItemCard from '../../../SmallParts/PortfolioItemCard/portfolioItemCard';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';
import Example from '../../../Example/example';

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
    EH110
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

// interface PortfolioGalleryProps {
//     archive: Archive;
//     history: any;
//     historyPopFromItem: string;
//     location: any;
//     match: any;
//     menuDotsState: MenuDotsState;
//     portfolioGalleryPage: PortfolioGalleryPage;
//     showBackToTop: boolean;
//     staticContext: any;
//     clearArchiveData: () => void;
//     fetchPortfolioGalleryPage: () => void;
//     fetchPortfolioGalleryPageSuccess: (array: Array<PortfolioGalleryItems>) => void;
//     forgetCoordinateRangeForPortfolioGalleryPage: (arr: Array<PortfolioGalleryItemsCoordinateRange>) => void;
//     rememberCoordinateRangeForPortfolioGalleryPage: (id: number, coordinateRange: PortfolioGalleryItemsCoordinateRange) => void;
//     setMenuDotsState: (val: string, page: string) => void;
//     setPortfolioGalleryPageIsHoveringCategory: (val: string, pathOfIds: Array<number>) => void;
//     setShowBackToTopComponent: (val: boolean) => void;
//     setUnmountComponentValues: (val: boolean, path: string, prevPage: string) => void;
//     unmountComponent: (repeatedKey: string, repeatedPath: string, page: string, button: number) => void;
// }

// interface Archive {
//     category: string;
//     disableLoadMoreButton: boolean;
//     error: any;
//     errorMoreData: any;
//     items?: Array<PortfolioGalleryArchiveItems>;
//     loading: boolean;
//     loadingMoreData: boolean;
// }

// interface PortfolioGalleryPage {
//     error: any;
//     items?: Array<PortfolioGalleryItems>
//     itemsCoordinateRange: Array<PortfolioGalleryItemsCoordinateRange>
//     loading: boolean;
// }

// interface MenuDotsState {
//     page: string;
//     state: string;
// }

// interface PortfolioGalleryArchiveItems {
//     categories: Array<Categories>;
//     coverImage: PortfolioGalleryArchiveItemsCoverImage
//     header: string;
//     id: number;
//     key: string;
//     path: string;
// }

// interface PortfolioGalleryArchiveItemsCoverImage {
//     alt: string;
//     folderName: string;
//     id: number;
//     imageName: string;
//     isHover: string;
//     key: string;
// }

// interface PortfolioGalleryItems {
//     arrowIsHovering: string;
//     categories: Array<Categories>;
//     id: number;
//     key: string;
//     option: string;
//     path: string;
//     pictures: Array<PortfolioGalleryItemsPictures>;
//     portfolioType: string;
// }

// interface Categories {
//     id: number;
//     isHover: string;
//     key: string;
//     label: string;
//     path: string;
// }

// interface PortfolioGalleryItemsPictures {
//     alt: string;
//     folderName: string;
//     id: number;
//     imageName: string;
//     key: string;
// }

// interface PortfolioGalleryItemsCoordinateRange {
//     id: number;
//     leftCoordinate?: number;
//     rightCoordinate?: number;
//     topCoordinate?: number;
//     bottomCoordinate?: number;
//     updated: boolean;
//     width?: number;
// }

/**
 * PortfolioGallery component definition and export
 */

export const PortfolioGallery = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const resizeRef = React.useRef(null);
  
    const initCoordinateRange = [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ]

    /**
     * Methods
     */

    React.useEffect(() => {
        // Init state for fading effect when component will unmount
        console.log(props)
        props.setUnmountComponentValues(false, "", null);

        // Fetch data for the component

        if(props.portfolioGalleryPage.items.length === 0){
            if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                // Fetch mock data (not required to run -> npm run server)

                props.fetchPortfolioGalleryPageSuccess(FakeData.portfolioGallery);
            }else{
                // Fetch data (required to run -> npm run server)

                props.fetchPortfolioGalleryPage();
            }
        }

        // Return to the part of the screen where the link to the selected item is located

        let timeout = setTimeout(() => {
            if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            clearTimeout(timeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    React.useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        props.forgetCoordinateRangeForPortfolioGalleryPage(initCoordinateRange);
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    }

    const renderToolbars = () => {
        return(
            <Toolbar 
                style="toolbarVersion2" 
                toolbarMainColor="white"
                page="portfolioGallery"
            />
        )
    }

    const renderPortfolioGalleryPageItems = () => {
        return(
            <>
                <EH110/>
                <div className="portfolio-gallery-page-items">{props.portfolioGalleryPage.items.map((el, i) => {
                    let imgCoordinateRange = props.portfolioGalleryPage.itemsCoordinateRange.find(item => item.id === el.id);
                    return(
                        <div 
                            key={i}
                            className="portfolio-gallery-page-item"
                            id={el.key}
                        >
                            <PortfolioItemCard
                                component="portfolioGallery"
                                obj={el}
                                rememberCoordinateRange={props.rememberCoordinateRangeForPortfolioGalleryPage}
                                imgCoordinateRange={imgCoordinateRange}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                setIsHoveringCategory={props.setPortfolioGalleryPageIsHoveringCategory}
                                clearArchiveData={props.clearArchiveData}
                            />
                        </div>
                    )
                })}</div>
            </>
        )
    }

    const renderPortfolioGalleryPageData = () => {
        if(props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <>
                    {renderPortfolioGalleryPageItems()}
                </>
            )
        }
        if(!props.portfolioGalleryPage.loading && props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.portfolioGalleryPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
     * Markup
     */

    return(
        <>
            <div className="portfolio-gallery">
                {renderToolbars()}
                <div className="portfolio-gallery-wrapper">
                    <div className="portfolio-gallery-header-wrapper">
                        <div className="header-wrapper">
                            <div className="portfolio-gallery-header-bold">Welcome!</div>
                            <div className="portfolio-gallery-header-text1">Take a Look</div>
                        </div>
                        <div className="portfolio-gallery-header-text2">at Our Portfolio.</div>
                    </div>
                    {renderPortfolioGalleryPageData()}
                </div>
                <Footer/>
            </div>
            {props.menuDotsState.state === "on" ? 
            <MenuFullScreen 
                page="portfolioGallry"
                state={props.menuDotsState.state}
            /> : null}
            {props.showBackToTop ? <BackToTop/> : null}
        </> 
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            fetchPortfolioGalleryPageSuccess: bindActionCreators(Actions.fetchPortfolioGalleryPageSuccess, dispatch),
            rememberCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.rememberCoordinateRangeForPortfolioGalleryPage, dispatch),
            forgetCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.forgetCoordinateRangeForPortfolioGalleryPage, dispatch),
            setPortfolioGalleryPageIsHoveringCategory: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(PortfolioGallery);
 