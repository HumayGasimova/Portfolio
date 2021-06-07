import { 
    createSelector 
} from 'reselect';

const getMenuItems = (state) => state.home.menuItems;

export const getMenuItemsState = createSelector(
    [getMenuItems],
    (x) => x
);

const getMenuFullScreenItems = (state) => state.home.menuFullscreenItems;

export const getMenuFullScreenItemsState = createSelector(
    [getMenuFullScreenItems],
    (x) => x
);

const getHeaderImages = (state) => state.headerImages;

export const getHeaderImagesState = createSelector(
    [getHeaderImages],
    (x) => x
);

const getSection1Date = (state) => state.section1;

export const getSection1DateState = createSelector(
    [getSection1Date],
    (x) => x
);

const getPictureBoardItems = (state) => state.section2.pictureBoard;

export const getPictureBoardItemsState = createSelector(
    [getPictureBoardItems],
    (x) => x
);

const getOurProcessData = (state) => state.section2.ourProcess;

export const getOurProcessDataState = createSelector(
    [getOurProcessData],
    (x) => x
);

const getPhotoViewerForPictureBoardTextItemOpen = (state) => state.home.photoViewerForPictureBoardTextItemOpen;

export const getPhotoViewerForPictureBoardTextItemOpenState = createSelector(
    [getPhotoViewerForPictureBoardTextItemOpen],
    (x) => x
);

const getPhotoViewerImagesArray = (state) => state.home.photoViewerImagesArray;

export const getPhotoViewerImagesArrayState = createSelector(
    [getPhotoViewerImagesArray],
    (x) => x
);

const getTestimonials = (state) => state.section3.testimonials;

export const getTestimonialsState = createSelector(
    [getTestimonials],
    (x) => x
);

// const getSwiperData = (state) => state.home.swiper;

// export const getSwiperDataState = createSelector(
//     [getSwiperData],
//     (x) => x
// );

const getFullScreenState = (state) => state.home.fullScreenState;

export const getFullScreenStateState = createSelector(
    [getFullScreenState],
    (x) => x
);

const getTeamInformation = (state) => state.section3.teamInformation;

export const getTeamInformationState = createSelector(
    [getTeamInformation],
    (x) => x
);

const getStatisticsData = (state) => state.section4.statisticsData;

export const getStatisticsDataState = createSelector(
    [getStatisticsData],
    (x) => x
);

const getAchievementsData = (state) => state.section4.achievementsData;

export const getAchievementsDataState = createSelector(
    [getAchievementsData],
    (x) => x
);

const getSidebarState = (state) => state.home.sidebarState;

export const getSidebarStateState = createSelector(
    [getSidebarState],
    (x) => x
);

const getSmallImagesPortfolio = (state) => state.smallImagesPortfolio;

export const getSmallImagesPortfolioState = createSelector(
    [getSmallImagesPortfolio],
    (x) => x
);

const getPhotoViewerForSmallImagesOpen = (state) => state.home.photoViewerForSmallImagesOpen;

export const getPhotoViewerForSmallImagesOpenState = createSelector(
    [getPhotoViewerForSmallImagesOpen],
    (x) => x
);

const getPictureBoardImagesCooradinateRange = (state) => state.section2.pictureBoardImagesCooradinateRange;

export const getPictureBoardImagesCooradinateRangeState = createSelector(
    [getPictureBoardImagesCooradinateRange],
    (x) => x
);

const getBigSliderPortfolio = (state) => state.bigSliderPortfolio;

export const getBigSliderPortfolioState = createSelector(
    [getBigSliderPortfolio],
    (x) => x
);

const getPhotoViewerForBigSliderOpen = (state) => state.home.photoViewerForBigSliderOpen;

export const getPhotoViewerForBigSliderOpenState = createSelector(
    [getPhotoViewerForBigSliderOpen],
    (x) => x
);

const getBigImagesPortfolio = (state) => state.bigImagesPortfolio;

export const getBigImagesPortfolioState = createSelector(
    [getBigImagesPortfolio],
    (x) => x
);

const getPhotoViewerForBigImagesOpen = (state) => state.home.photoViewerForBigImagesOpen;

export const getPhotoViewerForBigImagesOpenState = createSelector(
    [getPhotoViewerForBigImagesOpen],
    (x) => x
);

const getSmallGalleryPortfolio = (state) => state.smallGalleryPortfolio;

export const getSmallGalleryPortfolioState = createSelector(
    [getSmallGalleryPortfolio],
    (x) => x
);

const getPhotoViewerForSmallGalleryOpen = (state) => state.home.photoViewerForSmallGalleryOpen;

export const getPhotoViewerForSmallGalleryOpenState = createSelector(
    [getPhotoViewerForSmallGalleryOpen],
    (x) => x
);

const getGalleryPortfolio = (state) => state.galleryPortfolio;

export const getGalleryPortfolioState = createSelector(
    [getGalleryPortfolio],
    (x) => x
);

const getPhotoViewerForGalleryOpen = (state) => state.home.photoViewerForGalleryOpen;

export const getPhotoViewerForGalleryOpenState = createSelector(
    [getPhotoViewerForGalleryOpen],
    (x) => x
);

const getSmallSliderPortfolio = (state) => state.smallSliderPortfolio;

export const getSmallSliderPortfolioState = createSelector(
    [getSmallSliderPortfolio],
    (x) => x
);

const getPhotoViewerForSmallSliderOpen = (state) => state.home.photoViewerForSmallSliderOpen;

export const getPhotoViewerForSmallSliderOpenState = createSelector(
    [getPhotoViewerForSmallSliderOpen],
    (x) => x
);

const getPhotoViewerForBlogListStandardPageOpen = (state) => state.home.photoViewerForBlogListStandardPageOpen;

export const getPhotoViewerForBlogListStandardPageOpenState = createSelector(
    [getPhotoViewerForBlogListStandardPageOpen],
    (x) => x
);

const getPortfolioGalleryPage = (state) => state.portfolioGalleryPage;

export const getPortfolioGalleryPageState = createSelector(
    [getPortfolioGalleryPage],
    (x) => x
);

const getUnmountComponent = (state) => state.home.unmountComponent;

export const getUnmountComponentState = createSelector(
    [getUnmountComponent],
    (x) => x
);

const getMenuDotsState = (state) => state.home.menuDotsState;

export const getMenuDotsStateState = createSelector(
    [getMenuDotsState],
    (x) => x
);

const getArchive = (state) => state.archive;

export const getArchiveState = createSelector(
    [getArchive],
    (x) => x
);

const getHistoryPopFromPortfolioItem = (state) => state.home.historyPopFromItem;

export const getHistoryPopFromPortfolioItemeState = createSelector(
    [getHistoryPopFromPortfolioItem],
    (x) => x
);

const getSwitchImagePage = (state) => state.switchImagePage;

export const getSwitchImagePageState = createSelector(
    [getSwitchImagePage],
    (x) => x
);

const getSimpleOverlayPage = (state) => state.simpleOverlayPage;

export const getSimpleOverlayPageState = createSelector(
    [getSimpleOverlayPage],
    (x) => x
);

const getSlideFromImageLeftPage = (state) => state.slideFromImageLeftPage;

export const getSlideFromImageLeftPageState = createSelector(
    [getSlideFromImageLeftPage],
    (x) => x
);

const getOverlayPage = (state) => state.overlayPage;

export const getOverlayPageState = createSelector(
    [getOverlayPage],
    (x) => x
);

const getOverlayWithInfoPage = (state) => state.overlayWithInfoPage;

export const getOverlayWithInfoPageState = createSelector(
    [getOverlayWithInfoPage],
    (x) => x
);

const getStandardPage = (state) => state.standardPage;

export const getStandardPageState = createSelector(
    [getStandardPage],
    (x) => x
);

const getGalleryPage = (state) => state.galleryPage;

export const getGalleryPageState = createSelector(
    [getGalleryPage],
    (x) => x
);

const getGalleryWithSpacePage = (state) => state.galleryWithSpacePage;

export const getGalleryWithSpacePageState = createSelector(
    [getGalleryWithSpacePage],
    (x) => x
);

const getStoneWallPage = (state) => state.stoneWallPage;

export const getStoneWallPageState = createSelector(
    [getStoneWallPage],
    (x) => x
);

const getStoneWallWidePage = (state) => state.stoneWallWidePage;

export const getStoneWallWidePageState = createSelector(
    [getStoneWallWidePage],
    (x) => x
);

const getMetroPage = (state) => state.metroPage;

export const getMetroPageState = createSelector(
    [getMetroPage],
    (x) => x
);

const getPinterest3ColumnsPage = (state) => state.pinterest3ColumnsPage;

export const getPinterest3ColumnsPageState = createSelector(
    [getPinterest3ColumnsPage],
    (x) => x
);

const getScrollBehavior = (state) => state.home.scrollBehavior;

export const getScrollBehaviorState = createSelector(
    [getScrollBehavior],
    (x) => x
);

const getShowBackToTop = (state) => state.home.showBackToTop;

export const getShowBackToTopState = createSelector(
    [getShowBackToTop],
    (x) => x
);

const getTwoColumnsWidePage = (state) => state.twoColumnsWidePage;

export const getTwoColumnsWidePageState = createSelector(
    [getTwoColumnsWidePage],
    (x) => x
);

const getThreeColumnsWidePage = (state) => state.threeColumnsWidePage;

export const getThreeColumnsWidePageState = createSelector(
    [getThreeColumnsWidePage],
    (x) => x
);

const getFourColumnsWidePage = (state) => state.fourColumnsWidePage;

export const getFourColumnsWidePageState = createSelector(
    [getFourColumnsWidePage],
    (x) => x
);

const getFiveColumnsWidePage = (state) => state.fiveColumnsWidePage;

export const getFiveColumnsWidePageState = createSelector(
    [getFiveColumnsWidePage],
    (x) => x
);

const getTwoColumnsPage = (state) => state.twoColumnsPage;

export const getTwoColumnsPageState = createSelector(
    [getTwoColumnsPage],
    (x) => x
);

const getThreeColumnsPage = (state) => state.threeColumnsPage;

export const getThreeColumnsPageState = createSelector(
    [getThreeColumnsPage],
    (x) => x
);

const getFourColumnsPage = (state) => state.fourColumnsPage;

export const getFourColumnsPageState = createSelector(
    [getFourColumnsPage],
    (x) => x
);

const getAccordionsPage = (state) => state.accordionsPage;

export const getAccordionsPageState = createSelector(
    [getAccordionsPage],
    (x) => x
);

const getTabsPage = (state) => state.tabsPage;

export const getTabsPageState = createSelector(
    [getTabsPage],
    (x) => x
);

const getTestimonialsPage = (state) => state.testimonialsPage;

export const getTestimonialsPageState = createSelector(
    [getTestimonialsPage],
    (x) => x
);

const getTeamPage = (state) => state.teamPage;

export const getTeamPageState = createSelector(
    [getTeamPage],
    (x) => x
);

const getContactFormPage = (state) => state.contactFormPage;

export const getContactFormPageState = createSelector(
    [getContactFormPage],
    (x) => x
);

const getIconWithTextPage = (state) => state.iconWithTextPage;

export const getIconWithTextPageState = createSelector(
    [getIconWithTextPage],
    (x) => x
);

const getBannerPage = (state) => state.bannerPage;

export const getBannerPageState = createSelector(
    [getBannerPage],
    (x) => x
);

const getButtonsPage = (state) => state.buttonsPage;

export const getButtonsPageState = createSelector(
    [getButtonsPage],
    (x) => x
);

const getPricingTablesPage = (state) => state.pricingTablesPage;

export const getPricingTablesPageState = createSelector(
    [getPricingTablesPage],
    (x) => x
);

const getPieChartsPage = (state) => state.pieChartsPage;

export const getPieChartsPageState = createSelector(
    [getPieChartsPage],
    (x) => x
);

const getCountersPage = (state) => state.countersPage;

export const getCountersPageState = createSelector(
    [getCountersPage],
    (x) => x
);

const getCountdownPage = (state) => state.countdownPage;

export const getCountdownPageState = createSelector(
    [getCountdownPage],
    (x) => x
);

const getClientsPage = (state) => state.clientsPage;

export const getClientsPageState = createSelector(
    [getClientsPage],
    (x) => x
);

const getProgressBarPage = (state) => state.progressBarPage;

export const getProgressBarPageState = createSelector(
    [getProgressBarPage],
    (x) => x
);

const getHeadingsPage = (state) => state.headingsPage;

export const getHeadingsPageState = createSelector(
    [getHeadingsPage],
    (x) => x
);

const getListsPage = (state) => state.listsPage;

export const getListsPageState = createSelector(
    [getListsPage],
    (x) => x
);

const getHighlightsPage = (state) => state.highlightsPage;

export const getHighlightsPageState = createSelector(
    [getHighlightsPage],
    (x) => x
);

const getDropcapsPage = (state) => state.dropcapsPage;

export const getDropcapsPageState = createSelector(
    [getDropcapsPage],
    (x) => x
);

const getColumnsPage = (state) => state.columnsPage;

export const getColumnsPageState = createSelector(
    [getColumnsPage],
    (x) => x
);

const getBlockquotePage = (state) => state.blockquotePage;

export const getBlockquotePageState = createSelector(
    [getBlockquotePage],
    (x) => x
);

const getScrollSliderPage = (state) => state.scrollSliderPage;

export const getScrollSliderPageState = createSelector(
    [getScrollSliderPage],
    (x) => x
);

const getPortfolioProjectShowcasePage = (state) => state.portfolioProjectShowcasePage;

export const getPortfolioProjectShowcasePageState = createSelector(
    [getPortfolioProjectShowcasePage],
    (x) => x
);

const getPhotoViewerForPortfolioProjectShowcaseOpen = (state) => state.home.photoViewerForPortfolioProjectShowcaseOpen;

export const getPhotoViewerForPortfolioProjectShowcaseOpenState = createSelector(
    [getPhotoViewerForPortfolioProjectShowcaseOpen],
    (x) => x
);

const getBlogListStandardPage = (state) => state.blogListStandardPage;

export const getBlogListStandardPageState = createSelector(
    [getBlogListStandardPage],
    (x) => x
);

const getSearchResultPage = (state) => state.searchResultPage;

export const getSearchResultPageState = createSelector(
    [getSearchResultPage],
    (x) => x
);
