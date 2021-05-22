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

import './switchImage.scss';

/**
 * Utility
 */

import * as Utility from '../../../utility';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * SwitchImage component definition and export
 */

export const SwitchImage = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [imgToLoad, setImgToLoad] = useState({});
 
    /**
     * Methods
     */

    useEffect(() => {
        // Set cover image information

        setImgToLoad(props.imagesArray[0]);

        // Calculate image holder coordinates 

        setImageCoordinateRange();

        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
        }
    }, [props.imgCoordinateRange.updated]);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // Update image holder coordinates on window resize
        
        setImageCoordinateRange();
    }
   
    const handleMouseMove = (e) => {

        /**
         * Split the image holder into equal parts equal to the number of elements in imagesArray,
         * and remember the coordinates of each part. Then check if the cursor coordinates are 
         * inside the part and then render the corresponding image.
         */

        let pageX = e.pageX;
        let pageY = e.pageY;

        // Check if inside the image holder
        if(props.imgCoordinateRange.leftCoordinate < pageX && pageX < props.imgCoordinateRange.rightCoordinate &&
            props.imgCoordinateRange.topCoordinate < pageY && pageY < props.imgCoordinateRange.bottomCoordinate
        ){
            let selectedDivDividedByImagesNumber = Math.round(props.imgCoordinateRange.width / props.imagesArray.length);
            let coordinatesArray = Utility.getArrayOfEmptyVal(props.imagesArray.length);
            coordinatesArray = coordinatesArray.map((el, i) => props.imgCoordinateRange.leftCoordinate + i * selectedDivDividedByImagesNumber);
            coordinatesArray.map((el, i) => {
                if(i !== coordinatesArray.length - 1){
                    // Check if inside the calculated corresponding part

                    if(coordinatesArray[i] < pageX && pageX < coordinatesArray[i + 1]){
                        setImgToLoad(props.imagesArray[i]);
                    }
                }else{
                    // Check if inside the calculated corresponding part

                    if(coordinatesArray[i] < pageX && pageX < props.imgCoordinateRange.rightCoordinate){
                        setImgToLoad(props.imagesArray[i]);
                    }
                }
               
            })
        }
    }

    const setImageCoordinateRange = () => {
        //Remember image holder coordinates

        let imgCoordinateRange = evaluateCoordinates();

        props.rememberCoordinateRange(props.id, imgCoordinateRange);
    }

    const evaluateCoordinates = () => {
        //Calculate image holder coordinates

        let switchImage = document.getElementById(`switchImage${props.id}`);
        let updatedImgCoordinateRange = {
            id: props.id,
            topCoordinate: switchImage.offsetTop,
            bottomCoordinate: switchImage.offsetTop + switchImage.offsetHeight,
            leftCoordinate: switchImage.offsetLeft,
            rightCoordinate: switchImage.offsetLeft + switchImage.offsetWidth,
            width: switchImage.offsetWidth,
            updated: true
        };
        return updatedImgCoordinateRange;
    }

    const loadImg = (key) => {
        switch(key) {
            case 'bw1':
                return Images.BW_1;
            case 'bw2':
                return Images.BW_2;
            case 'bw3':
                return Images.BW_3;
            case 'bw4':
                return Images.BW_4;
            case 'bw5':
                return Images.BW_5;
            case 'bw6':
                return Images.BW_6;
            case 'bw7':
                return Images.BW_7;
            case 'bw8':
                return Images.BW_8;
            case 'bw9':
                return Images.BW_9;
            case 'bw10':
                return Images.BW_10;
            case 'bw11':
                return Images.BW_11;
            case 'bw12':
                return Images.BW_12;
            case 'bw13':
                return Images.BW_13;
            case 'bw14':
                return Images.BW_14;
            case 'bw15':
                return Images.BW_15;
            case 'bw16':
                return Images.BW_16;
            case 'bw17':
                return Images.BW_17;
            case 'bw18':
                return Images.BW_18;
            case 'bw19':
                return Images.BW_19;
            case 'bw20':
                return Images.BW_20;
            case 'col1':
                return Images.COL_1;
            case 'col2':
                return Images.COL_2;
            case 'col3':
                return Images.COL_3;
            case 'col4':
                return Images.COL_4;
            case 'col5':
                return Images.COL_5;
            case 'col6':
                return Images.COL_6;
            case 'col7':
                return Images.COL_7;
            case 'col8':
                return Images.COL_8;
            case 'col9':
                return Images.COL_9;
            case 'col10':
                return Images.COL_10;
            case 'col11':
                return Images.COL_11;
            case 'col12':
                return Images.COL_12;
            case 'col13':
                return Images.COL_13;
            case 'col14':
                return Images.COL_14;
            case 'col15':
                return Images.COL_15;
            case 'col16':
                return Images.COL_16;
            case 'col17':
                return Images.COL_17;
            case 'col18':
                return Images.COL_18;
            case 'col19':
                return Images.COL_19;
            case 'col20':
                return Images.COL_20;
            case 'col21':
                return Images.COL_21;
            case 'col22':
                return Images.COL_22;
            case 'col23':
                return Images.COL_23;
            case 'col24':
                return Images.COL_24;
            case 'col25':
                return Images.COL_25;
            case 'col26':
                return Images.COL_26;
            case 'col27':
                return Images.COL_27;
            case 'col28':
                return Images.COL_28;
            case 'col29':
                return Images.COL_29;
            case 'col30':
                return Images.COL_30;
            case 'col31':
                return Images.COL_31;
            case 'col32':
                return Images.COL_32;
            case 'col33':
                return Images.COL_33;
            case 'col34':
                return Images.COL_34;
            case 'col35':
                return Images.COL_35;
            case 'col36':
                return Images.COL_36;
            case 'col37':
                return Images.COL_37;
            case 'col38':
                return Images.COL_38;
            case 'col39':
                return Images.COL_39;
            case 'col40':
                return Images.COL_40;
            case 'col41':
                return Images.COL_41;
            case 'col42':
                return Images.COL_42;
            case 'col43':
                return Images.COL_43;
            case 'col44':
                return Images.COL_44;
            case 'col45':
                return Images.COL_45;
            case 'col46':
                return Images.COL_46;
            case 'id1BigSlider1': 
                return Images.ID_1_BIG_SLIDER_1;
            case 'id1BigSlider2': 
                return Images.ID_1_BIG_SLIDER_2;
            case 'id1BigSlider3': 
                return Images.ID_1_BIG_SLIDER_3;
            case 'id1BigSlider4': 
                return Images.ID_1_BIG_SLIDER_4;
            case 'id1BigSlider5': 
                return Images.ID_1_BIG_SLIDER_5;
            case 'id2BigSlider1': 
                return Images.ID_2_BIG_SLIDER_1;
            case 'id2BigSlider2': 
                return Images.ID_2_BIG_SLIDER_2;
            case 'id2BigSlider3': 
                return Images.ID_2_BIG_SLIDER_3;
            case 'id2BigSlider4': 
                return Images.ID_2_BIG_SLIDER_4;
            case 'id2BigSlider5': 
                return Images.ID_2_BIG_SLIDER_5;
            case 'id2BigSlider6': 
                return Images.ID_2_BIG_SLIDER_6;
            case 'id3BigSlider1': 
                return Images.ID_3_BIG_SLIDER_1;
            case 'id3BigSlider2': 
                return Images.ID_3_BIG_SLIDER_2;
            case 'id3BigSlider3': 
                return Images.ID_3_BIG_SLIDER_3;
            case 'id3BigSlider4': 
                return Images.ID_3_BIG_SLIDER_4;
            case 'id3BigSlider5': 
                return Images.ID_3_BIG_SLIDER_5;
            case 'id3BigSlider6': 
                return Images.ID_3_BIG_SLIDER_6;
            case 'id3BigSlider7': 
                return Images.ID_3_BIG_SLIDER_7;
            case 'id1SmallImages1':
                return Images.ID_1_SMALL_IMAGES_1;
            case 'id1SmallImages2':
                return Images.ID_1_SMALL_IMAGES_2;
            case 'id1SmallImages3':
                return Images.ID_1_SMALL_IMAGES_3;
            case 'id1SmallImages4':
                return Images.ID_1_SMALL_IMAGES_4;
            case 'id1SmallImages5':
                return Images.ID_1_SMALL_IMAGES_5;
            case 'id2SmallImages1':
                return Images.ID_2_SMALL_IMAGES_1;
            case 'id2SmallImages2':
                return Images.ID_2_SMALL_IMAGES_2;
            case 'id3SmallImages1':
                return Images.ID_3_SMALL_IMAGES_1;
            case 'id3SmallImages2':
                return Images.ID_3_SMALL_IMAGES_2;
            case 'id3SmallImages3':
                return Images.ID_3_SMALL_IMAGES_3;
            case 'id4SmallImages1':
                return Images.ID_4_SMALL_IMAGES_1;
            case 'id4SmallImages2':
                return Images.ID_4_SMALL_IMAGES_2;
            case 'id4SmallImages3':
                return Images.ID_4_SMALL_IMAGES_3;
            case 'id1BigImages1':
                return Images.ID_1_BIG_IMAGES_1;
            case 'id1BigImages2':
                return Images.ID_1_BIG_IMAGES_2;
            case 'id1BigImages3':
                return Images.ID_1_BIG_IMAGES_3;
            case 'id1BigImages4':
                return Images.ID_1_BIG_IMAGES_4;
            case 'id1BigImages5':
                return Images.ID_1_BIG_IMAGES_5;
            case 'id2BigImages1':
                return Images.ID_2_BIG_IMAGES_1;
            case 'id2BigImages2':
                return Images.ID_2_BIG_IMAGES_2;
            case 'id2BigImages3':
                return Images.ID_2_BIG_IMAGES_3;
            case 'id2BigImages4':
                return Images.ID_2_BIG_IMAGES_4;
            case 'id2BigImages5':
                return Images.ID_2_BIG_IMAGES_5;
            case 'id2BigImages6':
                return Images.ID_2_BIG_IMAGES_6;
            case 'id1SmallGallery1':
                return Images.ID_1_SMALL_GALLERY_1;
            case 'id1SmallGallery2':
                return Images.ID_1_SMALL_GALLERY_2;
            case 'id1SmallGallery3':
                return Images.ID_1_SMALL_GALLERY_3;
            case 'id1SmallGallery4':
                return Images.ID_1_SMALL_GALLERY_4;
            case 'id1SmallGallery5':
                return Images.ID_1_SMALL_GALLERY_5;
            case 'id1SmallGallery6':
                return Images.ID_1_SMALL_GALLERY_6;
            case 'id2SmallGallery1':
                return Images.ID_2_SMALL_GALLERY_1;
            case 'id2SmallGallery2':
                return Images.ID_2_SMALL_GALLERY_2;
            case 'id2SmallGallery3':
                return Images.ID_2_SMALL_GALLERY_3;
            case 'id2SmallGallery4':
                return Images.ID_2_SMALL_GALLERY_4;
            case 'id3SmallGallery1':
                return Images.ID_3_SMALL_GALLERY_1;
            case 'id3SmallGallery2':
                return Images.ID_3_SMALL_GALLERY_2;
            case 'id3SmallGallery3':
                return Images.ID_3_SMALL_GALLERY_3;
            case 'id3SmallGallery4':
                return Images.ID_3_SMALL_GALLERY_4;
            case 'id3SmallGallery5':
                return Images.ID_3_SMALL_GALLERY_5;
            case 'id3SmallGallery6':
                return Images.ID_3_SMALL_GALLERY_1;
            case 'id1Gallery1':
                return Images.ID_1_GALLERY_1;
            case 'id1Gallery2':
                return Images.ID_1_GALLERY_2;
            case 'id1Gallery3':
                return Images.ID_1_GALLERY_3;
            case 'id1Gallery4':
                return Images.ID_1_GALLERY_4;
            case 'id1Gallery5':
                return Images.ID_1_GALLERY_5;
            case 'id1Gallery6':
                return Images.ID_1_GALLERY_6;
            case 'id2Gallery1':
                return Images.ID_2_GALLERY_1;
            case 'id2Gallery2':
                return Images.ID_2_GALLERY_2;
            case 'id2Gallery3':
                return Images.ID_2_GALLERY_3;
            case 'id2Gallery4':
                return Images.ID_2_GALLERY_4;
            case 'id2Gallery5':
                return Images.ID_2_GALLERY_5;
            case 'id3Gallery1':
                return Images.ID_3_GALLERY_1;
            case 'id3Gallery2':
                return Images.ID_3_GALLERY_2;
            case 'id3Gallery3':
                return Images.ID_3_GALLERY_3;
            case 'id3Gallery4':
                return Images.ID_3_GALLERY_4;
            case 'id3Gallery5':
                return Images.ID_3_GALLERY_5;
            case 'id3Gallery6':
                return Images.ID_3_GALLERY_6;
            case 'id1SmallSlider1': 
                return Images.ID_1_SMALL_SLIDER_1;
            case 'id1SmallSlider2': 
                return Images.ID_1_SMALL_SLIDER_2;
            case 'id1SmallSlider3': 
                return Images.ID_1_SMALL_SLIDER_3;
            case 'id1SmallSlider4': 
                return Images.ID_1_SMALL_SLIDER_4;
            case 'id1SmallSlider5': 
                return Images.ID_1_SMALL_SLIDER_5;
            case 'id1SmallSlider6': 
                return Images.ID_1_SMALL_SLIDER_6;
            case 'id2SmallSlider1': 
                return Images.ID_2_SMALL_SLIDER_1;
            case 'id2SmallSlider2': 
                return Images.ID_2_SMALL_SLIDER_2;
            case 'id2SmallSlider3': 
                return Images.ID_2_SMALL_SLIDER_3;
            case 'id2SmallSlider4': 
                return Images.ID_2_SMALL_SLIDER_4;
            case 'id2SmallSlider5': 
                return Images.ID_2_SMALL_SLIDER_5;
            case 'id3SmallSlider1': 
                return Images.ID_3_SMALL_SLIDER_1;
            case 'id3SmallSlider2': 
                return Images.ID_3_SMALL_SLIDER_2;
            case 'id3SmallSlider3': 
                return Images.ID_3_SMALL_SLIDER_3;
            case 'id3SmallSlider4': 
                return Images.ID_3_SMALL_SLIDER_4;
            default:
                return "";
        }
    }

    const renderClassName = (opt) => {
        switch(opt) {
            case 'pictureBoard':
                return 'picture-board-image-item';
            case 'portfolioGallery':
                return "portfolio-gallery-image-item";
            case 'switchImagePage':
                return "switch-image-page-image-item";
        }
    }

    const pictureBoardItemOnClick = (e, path) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("pageHG", props.component);

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */

            props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click

            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic

        props.unmountComponent(null, null, props.component, e.button);
    }

    /**
     * Markup
     */

    return(
        <div 
            className={renderClassName(props.component)}
            id={`switchImage${props.id}`}
            onMouseDown={(e) => pictureBoardItemOnClick(e, props.path)}
        >
            <div className={props.option === "colorful" ? "picture-board-image" : "picture-board-image-black-and-white"}>
                <img 
                    src={loadImg(imgToLoad.key)} 
                    alt={imgToLoad.alt}
                />
            </div>
        </div>
    );
}

export default withRouter(SwitchImage);
