/**
 * Libraries
 */

import * as React from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
 * Styles
 */

import './searchItem.scss';

/**
 * Utility
 */

import {
    H15,
    H17,
    H19
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * Types
 */

import * as Types from './searchItemTypes';
import * as GeneralTypes from '../../../reducers/generalTypes';

/**
 * SearchItem component definition and export
 */

export const SearchItem: React.FC<Types.SearchItemProps> = (props) => {
    
    /**
     * Methods
     */
   
    React.useEffect(() => {
    }, []);

    const loadImg = (imgKey: string) => {
        switch(imgKey){
            case 'blogCardLinkPostCoverImg3':
                return Images.SEARCH_RESULT_IMG_1;
            case 'blogCardAudioPostCoverImg4':
                return Images.SEARCH_RESULT_IMG_2;
            case 'blogCardStandardPostCoverImg3':
                return Images.SEARCH_RESULT_IMG_3;
            case 'blogCardVideoPostCoverImg1':
                return Images.SEARCH_RESULT_IMG_4;
            case 'blogCardQuotePostCoverImg4':
                return Images.SEARCH_RESULT_IMG_5;
            case 'blogCardGalleryPostCoverImg5':
                return Images.SEARCH_RESULT_IMG_6;
            case 'blogCardQuotePostCoverImg3':
                return Images.SEARCH_RESULT_IMG_7;
            default:
                return "";
        }
    }

    const onClickHandler = (e: React.MouseEvent, path: string, key: string) => {

        // Do nothing on right mouse click 

        if(e.button === 2) return;

        if(e.button !== 1){
            /**
             *  Clear unnecessary information of the unmounted component, 
             *  and render the data of the selected blog item on left mouse click 
             */ 

            props.clearState();
            props.clearActivityOfMenuItems(null);
            props.activateBlogItem("active", key, null);
            props.activateBlogCategory("deactive", "");
            props.activateBlogTag("deactive", "");
            props.history.push(`/crypto-portfolio/${path}`);

        }else{
            // Open selected blog item in a new window on scroll wheel click

            window.open(`/crypto-portfolio/${path}` , "_blank");
        }
    }

    /**
     * Markup
     */

    return(
        <div className="search-item">
            <div className="search-item-image">
                <img src={loadImg(props.elData.coverImage.key)}/>
            </div>
            <div className="search-item-info">
                <div 
                    className="search-item-info-header"
                    onMouseDown={(e) => onClickHandler(e, props.elData.path, props.elData.cardId)}
                >
                    <H19 className="h19-black-lustria">{props.elData.header}</H19>
                </div>
                <H15 className="h15-nobel-lustria">{`${(props.elData.text[0] as GeneralTypes.PostBlogContentItemObjText).textPart.substring(0, 182)}...`}</H15>
            </div>
        </div>
    );
}

export default withRouter(SearchItem);
 