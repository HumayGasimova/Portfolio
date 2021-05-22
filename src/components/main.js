/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    Route,
    Switch
} from 'react-router-dom';

import {
    BASE_URL
} from '../environments/environments';

/**
 * Styles
 */

import './main.scss';

/**
 * Components
 */

import Home from './Pages/HomePages/Home/home';
import AboutUsPage from './Pages/AboutUsPage/aboutUsPage';
import ProcessPage from './Pages/ProcessPage/processPage';
import HappyTeamPage from './Pages/HappyTeamPage/happyTeamPage';
import SmallImages from './Pages/PortfolioPages/SmallImages/smallImages';
import BigSlider from './Pages/PortfolioPages/BigSlider/bigSlider';
import BigImages from './Pages/PortfolioPages/BigImages/bigImages';
import SmallGallery from './Pages/PortfolioPages/SmallGallery/smallGallery';
import Gallery from './Pages/PortfolioPages/Gallery/gallery';
import SmallSlider from './Pages/PortfolioPages/SmallSlider/smallSlider';
import PortfolioGallery from './Pages/HomePages/PortfolioGallery/portfolioGallery';
import Archive from './Pages/Archive/archive';
import SwitchImagePage from './Pages/PortfolioPages/SwitchImagePage/switchImagePage';
import SimpleOverlayPage from './Pages/PortfolioPages/SimpleOverlayPage/simpleOverlayPage';
import SlideFromImageLeftPage from './Pages/PortfolioPages/SlideFromImageLeftPage/slideFromImageLeftPage';
import OverlayPage from './Pages/PortfolioPages/OverlayPage/overlayPage';
import OverlayWithInfoPage from './Pages/PortfolioPages/OverlayWithInfoPage/overlayWithInfoPage';
import StandardPage from './Pages/PortfolioPages/StandardPage/standardPage';
import GalleryPage from './Pages/PortfolioPages/GalleryPage/galleryPage';
import GalleryWithSpacePage from './Pages/PortfolioPages/GalleryWithSpacePage/galleryWithSpacePage';
import StoneWallPage from './Pages/PortfolioPages/StoneWallPage/stoneWallPage';
import StoneWallWidePage from './Pages/PortfolioPages/StoneWallWidePage/stoneWallWidePage';
import MetroPage from './Pages/PortfolioPages/MetroPage/metroPage';
import Pinterest3ColumnsPage from './Pages/PortfolioPages/Pinterest3ColumnsPage/pinterest3ColumnsPage';
import TwoColumnsWidePage from './Pages/PortfolioPages/TwoColumnsWidePage/twoColumnsWidePage';
import ThreeColumnsWidePage from './Pages/PortfolioPages/ThreeColumnsWidePage/threeColumnsWidePage';
import FourColumnsWidePage from './Pages/PortfolioPages/FourColumnsWidePage/fourColumnsWidePage';
import FiveColumnsWidePage from './Pages/PortfolioPages/FiveColumnsWidePage/fiveColumnsWidePage';
import TwoColumnsPage from './Pages/PortfolioPages/TwoColumnsPage/twoColumnsPage';
import ThreeColumnsPage from './Pages/PortfolioPages/ThreeColumnsPage/threeColumnsPage';
import FourColumnsPage from './Pages/PortfolioPages/FourColumnsPage/fourColumnsPage';
import AccordionsPage from './Pages/ElementsPages/AccordionsPage/accordionsPage';
import TabsPage from './Pages/ElementsPages/TabsPage/tabsPage';
import CallToActionPage from './Pages/ElementsPages/CallToActionPage/callToActionPage';
import TestimonialsPage from './Pages/ElementsPages/TestimonialsPage/testimonialsPage';
import TeamPage from './Pages/ElementsPages/TeamPage/teamPage';
import ContactFormPage from './Pages/ElementsPages/ContactFormPage/contactFormPage';
import IconWithTextPage from './Pages/ElementsPages/IconWihTextPage/iconWithTextPage';
import BannerPage from './Pages/ElementsPages/BannerPage/bannerPage';
import ButtonsPage from './Pages/ElementsPages/ButtonsPage/buttonsPage';
import PricingTablesPage from './Pages/ElementsPages/PricingTablesPage/pricingTablesPage';
import PieChartsPage from './Pages/ElementsPages/PieChartsPage/pieCartsPage';
import CountersPage from './Pages/ElementsPages/CountersPage/countersPage';
import CountdownPage from './Pages/ElementsPages/CountdownPage/countdownPage';
import ClientsPage from './Pages/ElementsPages/ClientsPage/clientsPage';
import ProgressBarPage from './Pages/ElementsPages/ProgressBarPage/progressBarPage';
import GoogleMapsPage from './Pages/ElementsPages/GoogleMapsPage/googleMapsPage';
import HeadingsPage from './Pages/ElementsPages/HeadingsPage/headingsPage';
import ListsPage from './Pages/ElementsPages/ListsPage/listsPage';
import HighlightsPage from './Pages/ElementsPages/HighlightsPage/highlightsPage';
import DropcapsPage from './Pages/ElementsPages/DropcapsPage/dropcapsPage';
import ColumnsPage from './Pages/ElementsPages/ColumnsPage/columnsPage';
import BlockquotePage from './Pages/ElementsPages/BlockquotePage/blockquotePage';
import TextMarqueePage from './Pages/ElementsPages/TextMarqueePage/textMarqueePage';
import ScrollSliderPage from './Pages/ElementsPages/ScrollSliderPage/scrollSliderPage';
import PortfolioProjectShowcase from './Pages/ElementsPages/PortfolioProjectShowcase/portfolioProjectShowcase';
import BlogListStandardPage from './Pages/BlogPages/BlogListStandardPage/blogListStandardPage';
import PostSinglesStandardPage from './Pages/BlogPages/PostSinglesStandardPage/postSinglesStandardPage';
import SearchResultPage from './Pages/SearchResultPage/searchResultPage';

/**
 * Actions
 */

import * as Actions from '../actions';

/**
 * Selectors
 */

import * as Selectors from '../reducers/selectors';

/**
 * Utilities
 */

import * as Utility from '../utility';

/**
 * Main component definition and export
 */

export const Main = (props) => {
   
    /**
     * Methods
     */

    useEffect(() => {
        /**
         * Set all necessary information when initializing the application 
         */

        // Check environment

        console.log("ENV", process.env.ENVIRONMENT);
        
        // Activate menu item according to the location pathname
        
        let path = props.location.pathname.slice(18);
        let pathOfIds = Utility.findPathOfIds(path);
        props.clearActivityOfMenuItems();
        props.activateMenuItem(pathOfIds);

        // Activate blog category

        let blogCategory = Utility.activateBlogCategory(path);
        
        if(blogCategory.page === "listStandardBlogCategory"){
            props.activateListStandardBlogCategory("active", blogCategory.categoryName);
        }

        // Activate blog tag

        let blogTag = Utility.activateBlogTag(path);

        if(blogCategory.page === "listStandardBlogTag"){
            props.activateListStandardBlogTag("active", blogTag.tagName);
        }

        // Init state for fading effect and remember all necessary information

        props.setArchiveCategory(localStorage.getItem('archiveCategoryHG'));
        props.setUnmountComponentValues(false, '', localStorage.getItem('pageHG'));

        // Previous location pathname

        let prevLocation = props.location.pathname;

        /**
         * Set all necessary information when changing location
         */

        props.history.listen((location, action) => {
            /** 
             * If we returned to the archive page, remember
             * the new category and reload the page
             */
            
            let category = Utility.categoryFromLocationPathname(location.pathname);

            if(action === "POP" && category){
                props.setArchiveCategory(category);
                window.location.reload();
            }

            // Relode window when path is blog-list-standard and selected from the toolbar (nested routes -> react-router)
          
            if (action !== "POP" && location.pathname === "/crypto-portfolio/blog-list-standard"){
                window.location.reload();
            }

            // Activate menu item according to the location pathname
            let prevLocationPathOfIds;

            if(action === "POP"){
                prevLocationPathOfIds = Utility.findPathOfIds(prevLocation.slice(18));
            }
            path = location.pathname.slice(18);
            pathOfIds = Utility.findPathOfIds(path);
            props.clearActivityOfMenuItems(prevLocationPathOfIds); // to clear nested active properties in menuItems array
            props.activateMenuItem(pathOfIds);
            console.log("activateMenuItem", pathOfIds);

            // Close photoViewer for all pages
            props.photoViewerOpen("all", false, []);

            /** 
             * Remember previous pathname
             */

            prevLocation = location.pathname;
        });
    }, []);

    /**
     * Markup
     */

    return(
        <div className={props.unmountComp.state ? "main-unmount" : "main"}>
            <Switch>
                <Route 
                    exact 
                    path={props.match.url + "/search-result"}
                    component={SearchResultPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/video-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/audio-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/quote-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/link-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/gallery-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-list-standard-item/standard-post/:id"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blog-item/standard-post/:id"}
                    component={PostSinglesStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/list-standard-blog-tag/:tag"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/list-standard-blog-category/:category"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact
                    path={props.match.url + "/blog-list-standard"}
                    component={BlogListStandardPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/portfolio-project-showcase"}
                    component={PortfolioProjectShowcase}
                />
                <Route
                    exact 
                    path={props.match.url + "/scroll-slider"}
                    component={ScrollSliderPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/text-marquee"}
                    component={TextMarqueePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/blockquote"}
                    component={BlockquotePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/columns"}
                    component={ColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/dropcaps"}
                    component={DropcapsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/highlights"}
                    component={HighlightsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/lists"}
                    component={ListsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/headings"}
                    component={HeadingsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/google-maps"}
                    component={GoogleMapsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/progress-bar"}
                    component={ProgressBarPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/clients"}
                    component={ClientsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/countdown"}
                    component={CountdownPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/counters"}
                    component={CountersPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/pie-charts"}
                    component={PieChartsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/pricing-tables"}
                    component={PricingTablesPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/buttons"}
                    component={ButtonsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/banner"}
                    component={BannerPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/icon-with-text"}
                    component={IconWithTextPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/contact-form"}
                    component={ContactFormPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/team"}
                    component={TeamPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/testimonials"}
                    component={TestimonialsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/call-to-action"}
                    component={CallToActionPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/tabs"}
                    component={TabsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/accordions"}
                    component={AccordionsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/four-columns"}
                    component={FourColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/three-columns"}
                    component={ThreeColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/two-columns"}
                    component={TwoColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/five-columns-wide"}
                    component={FiveColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/four-columns-wide"}
                    component={FourColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/three-columns-wide"}
                    component={ThreeColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/two-columns-wide"}
                    component={TwoColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/pinterest-3-columns"}
                    component={Pinterest3ColumnsPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/metro"}
                    component={MetroPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/stone-wall-wide"}
                    component={StoneWallWidePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/stone-wall"}
                    component={StoneWallPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/gallery-with-space"}
                    component={GalleryWithSpacePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/gallery"}
                    component={GalleryPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-standard"}
                    component={StandardPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/overlay-with-info"}
                    component={OverlayWithInfoPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/overlay"}
                    component={OverlayPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/slide-from-image-left"}
                    component={SlideFromImageLeftPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/simple-overlay"}
                    component={SimpleOverlayPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/switch-image"}
                    component={SwitchImagePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-category/:category"}
                    render={(props) => (
                        <Archive key={props.match.params.category} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-gallery"}
                    component={PortfolioGallery}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-slider/:id"}
                    render={(props) => (
                        <SmallSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/gallery/:id"}
                    render={(props) => (
                        <Gallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-gallery/:id"}
                    render={(props) => (
                        <SmallGallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-images/:id"}
                    render={(props) => (
                        <BigImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-slider/:id"}
                    render={(props) => (
                        <BigSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-images/:id"}
                    render={(props) => (
                        <SmallImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/happy-team"}
                    component={HappyTeamPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/process"}
                    component={ProcessPage}
                /> 
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUsPage}
                />
                <Route 
                    exact 
                    path={props.match.url + ""}
                    component={Home}
                />
            </Switch>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            unmountComp: Selectors.getUnmountComponentState(state),
            blogListStandardPage: Selectors.getBlogListStandardPageState(state),
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setArchiveCategory: bindActionCreators(Actions.setArchiveCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            activateListStandardBlogCategory: bindActionCreators(Actions.activateListStandardBlogCategory, dispatch),
            activateListStandardBlogTag: bindActionCreators(Actions.activateListStandardBlogTag, dispatch),
        };
    }
)(Main);
 