/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

import uuid from "uuid";

/**
 * Styles
 */

import './contactFormPage.scss';

/**
 * Components
 */

import LoadingVersion2 from '../../../SmallParts/LoadingVersion2/loadingVersion2';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Button from '../../../../library/Button/button';
import Input from '../../../../library/Input/input';
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
    H45,
    EW20,
    EH20,
    EH30
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

import {
    getContactFormPageSection1InputForm,
    getContactFormPageSection2InputForm,
    getContactFormPageSection3InputForm
} from '../../../../constants/inputForm';

/**
 * Constants
 */

import * as FakeData from '../../../../fakeData';
import * as Environment from '../../../../constants/environments';
import { useHistory } from 'react-router';

/**
 * ContactFormPage component definition and export
 */

export const ContactFormPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const history = useHistory()
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");
        
        // Init imput forms

        props.initInputFormForContactFormPage("section1InputForm", getContactFormPageSection1InputForm);
        props.initInputFormForContactFormPage("section2InputForm", getContactFormPageSection2InputForm);
        props.initInputFormForContactFormPage("section3InputForm", getContactFormPageSection3InputForm);
        
        // Scroll to the top of the screen

        window.scrollTo(0, 0);

        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("contactFormPage");

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

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="contactFormPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="contactFormPage"
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
                        page="contactFormPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="contactFormPage"
                    />
                </>
            )
        }
    }

    const onClickHandler = (opt) => {
        let info;
        switch(opt){
            case 'section1InputForm':
                /**
                 * Check if the input form is valid, if it is valid 
                 * then initialize input fields (state), if it is not valid
                 * then show needed error messages
                 */
            
                props.getDirectionContactFormPage();

                // Collect all the information you neet to post

                info = {
                    id: uuid(),
                    fullName: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "fullName").value}`,
                    company: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "company").value}`,
                    email: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
                    // date: Utility.getCurrentDateAndTime(),
                    phone: `${props.contactFormPage.section1.inputForm.inputsArray.find(x => x.controlName === "phone").value}`,
                }

                // Post the information

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)
    
                    props.fetchGetDirectionContactFormPageSuccess(info);
                }else{
                    // Fetch data (required to run -> npm run server)
    
                    props.fetchGetDirectionContactFormPage(info);
                }
               
                // Clear input fields (visually) if the form is valid

                if(props.contactFormPage.section1.inputForm.formIsValid){
                    clearInputValue("getContactFormPageSection1InputFormFullName");
                    clearInputValue("getContactFormPageSection1InputFormCompany");
                    clearInputValue("getContactFormPageSection1InputFormEmail");
                    clearInputValue("getContactFormPageSection1InputFormPhone");
                }

                // Clear input field (visually) if the entered value does not match to the rules of that field

                props.contactFormPage.section1.inputForm.inputsArray.map(el => {
                    if(!el.validField){
                        clearInputValue(el.inputID);
                    }
                });

                break;
            case 'section2InputForm':
                /**
                 * Check if the input form is valid, if it is valid 
                 * then initialize input fields (state), if it is not valid
                 * then show needed error messages
                 */

                props.subscribeContactFormPage();

                // Collect all the information you neet to post

                info = {
                    id: uuid(),
                    email: `${props.contactFormPage.section2.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
                    // date: Utility.getCurrentDateAndTime(),t
                }
               
                // Post the information

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)
    
                    props.fetchSubscribeContactFormPageSuccess(info);
                }else{
                    // Fetch data (required to run -> npm run server)

                    props.fetchSubscribeContactFormPage(info, history);
                }            

                // Clear input fields (visually) if the form is valid

                if(props.contactFormPage.section2.inputForm.formIsValid){
                    clearInputValue("getContactFormPageSection2InputFormEmail");
                }

                // Clear input field (visually) if the entered value does not match to the rules of that field

                props.contactFormPage.section2.inputForm.inputsArray.map(el => {
                    if(!el.validField){
                        clearInputValue(el.inputID);
                    }
                });
                break;
            case 'section3InputForm':
                /**
                 * Check if the input form is valid, if it is valid 
                 * then initialize input fields (state), if it is not valid
                 * then show needed error messages
                 */

                props.submitContactFormPage();

                // Collect all the information you neet to post

                info = {
                    id: uuid(),
                    email: `${props.contactFormPage.section3.inputForm.inputsArray.find(x => x.controlName === "email").value}`,
                    // date: Utility.getCurrentDateAndTime(),t
                }

                // Post the information

                if(process.env.ENVIRONMENT === Environment.PRODUCTION){
                    // Fetch mock data (not required to run -> npm run server)
    
                    props.fetchSubmitContactFormPageSuccess(info);
                }else{
                    // Fetch data (required to run -> npm run server)

                    props.fetchSubmitContactFormPage(info);
                }

                // Clear input fields (visually) if the form is valid

                if(props.contactFormPage.section3.inputForm.formIsValid){
                    clearInputValue("getContactFormPageSection3InputFormEmail");
                }

                // Clear input field (visually) if the entered value does not match to the rules of that field

                props.contactFormPage.section3.inputForm.inputsArray.map(el => {
                    if(!el.validField){
                        clearInputValue(el.inputID);
                    }
                });
                break;
        }
    }

    const inputChangeHandler = (e, inputFieldId, opt, inputForm) => {
        // Uppercase first letter of the input form name

        let updatedInputForm = inputForm.charAt(0).toUpperCase() + inputForm.slice(1);

        // Set input value and check validation

        props.setInputFiledValueAndCheckValidation(props.contactFormPage[opt][inputForm], e, inputFieldId, `${opt}${updatedInputForm}`);
    }

    const clearInputValue = (fieldId) => {
        // Clear input value

        document.getElementById(fieldId).value = '';
    }

    const loadingOnButtonClick = (opt) => {
        if(opt === "getDirection"){
            if(props.contactFormPage.section1.getDirectionResponse.loading && !props.contactFormPage.section1.getDirectionResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <LoadingVersion2 
                            color="black"
                            width={14}
                            height={14}
                        />
                    </div>
                )
            }
            if(!props.contactFormPage.section1.getDirectionResponse.loading && !props.contactFormPage.section1.getDirectionResponse.error){
                // return(
                
                // )
            }
            if(!props.contactFormPage.section1.getDirectionResponse.loading && props.contactFormPage.section1.getDirectionResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <H15 className="h19-nobel-lora">{`${props.contactFormPage.section1.getDirectionResponse.error}`}</H15>
                    </div>
                )
            }
        }
        if(opt === "subscribe"){
            if(props.contactFormPage.section2.subscribeResponse.loading && !props.contactFormPage.section2.subscribeResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <LoadingVersion2 
                            color="white"
                            width={14}
                            height={14}
                        />
                    </div>
                )
            }
            if(!props.contactFormPage.section2.subscribeResponse.loading && !props.contactFormPage.section2.subscribeResponse.error){
                // return(
                
                // )
            }
            if(!props.contactFormPage.section2.subscribeResponse.loading && props.contactFormPage.section2.subscribeResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <H15 className="h19-nobel-lora">{`${props.contactFormPage.section2.subscribeResponse.error}`}</H15>
                    </div>
                )
            }
        }
        if(opt === "submit"){
            if(props.contactFormPage.section3.submitResponse.loading && !props.contactFormPage.section3.submitResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <LoadingVersion2 
                            color="black"
                            width={14}
                            height={14}
                        />
                    </div>
                )
            }
            if(!props.contactFormPage.section3.submitResponse.loading && !props.contactFormPage.section3.submitResponse.error){
                // return(
                
                // )
            }
            if(!props.contactFormPage.section3.submitResponse.loading && props.contactFormPage.section3.submitResponse.error){
                return(
                    <div 
                        className="contact-form-page-loading-error" 
                        // style={{height: `${size.height}px`}}
                    >
                        <H15 className="h19-nobel-lora">{`${props.contactFormPage.section3.submitResponse.error}`}</H15>
                    </div>
                )
            }
        }
    } 

    const renderContactFormPageSection1DataContent = () => {
        if(props.contactFormPage.section1.inputForm.inputsArray){
            return(
                <div className="contact-form-page-section-1-data">
                    <div className="contact-form-page-section-1-data-inputs-wrapper">
                        {props.contactFormPage.section1.inputForm.inputsArray.map((el, i)=>{
                            return(
                                <div 
                                    key={i} 
                                    className="contact-form-page-section-1-form"
                                    style={{
                                        width: `calc(50% - ${i%2 === 0 ? 20 : 0}px)`,
                                        marginRight: `${i%2 === 0 ? 20 : 0}px`
                                    }}
                                >
                                    <Input
                                        className="contact-form-page-section-1-input"
                                        invalidClassName="invalid-contact-form-page-section-1-input"
                                        onChange={(event) => inputChangeHandler(event, el.id, 'section1','inputForm')}
                                        elementType={el.elementType}
                                        rows={el.elementConfig.rows}
                                        validField={el.validField}
                                        touched={el.touched}
                                        erroeMessages={el.errorMessage}
                                        inputID={el.inputID}
                                        textareaID={el.textareaID}
                                        placeholder={el.elementConfig.placeholder}
                                        options={el.elementConfig.options}
                                    />
                                    <EH20/>
                                </div>
                            )
                        })}
                    </div>
                    <EH30/>
                    <Button
                        className="call-to-action-get-direction-black"
                        text="get direction."
                        onClick={() => onClickHandler('section1InputForm')}
                    />
                    <EH20/>
                    {loadingOnButtonClick("getDirection")}
                </div>
            )
        }
    } 
    
    const renderContactFormPageSection2DataContent = () => {
        if(props.contactFormPage.section2.inputForm.inputsArray){
            return(
                <div className="contact-form-page-section-2-data">
                    <div className="contact-form-page-section-2-form-wrapper">{props.contactFormPage.section2.inputForm.inputsArray.map((el, i)=>{
                        return(
                            <div 
                                key={i} 
                                className="contact-form-page-section-2-form"
                            >
                                <Input
                                    className="contact-form-page-section-2-input"
                                    invalidClassName="invalid-contact-form-page-section-2-input"
                                    onChange={(event) => inputChangeHandler(event, el.id, 'section2','inputForm')}
                                    elementType={el.elementType}
                                    rows={el.elementConfig.rows}
                                    validField={el.validField}
                                    touched={el.touched}
                                    erroeMessages={el.errorMessage}
                                    inputID={el.inputID}
                                    textareaID={el.textareaID}
                                    placeholder={el.elementConfig.placeholder}
                                    options={el.elementConfig.options}
                                />
                                <EH20/>
                            </div>
                        )
                    })}
                    <EW20/>
                    <Button
                        className="call-to-action-get-direction-clear"
                        text="subscribe."
                        onClick={() => onClickHandler('section2InputForm')}
                    />
                </div>
                {loadingOnButtonClick("subscribe")}
            </div>
            )
        }
    }

    const renderContactFormPageSection3DataContent = () => {
        if(props.contactFormPage.section2.inputForm.inputsArray){
            return(
                <div className="contact-form-page-section-3-data">{props.contactFormPage.section3.inputForm.inputsArray.map((el, i)=>{
                    return(
                        <div 
                            key={i} 
                            className="contact-form-page-section-3-form"
                        >
                            <Input
                                className="contact-form-page-section-3-input"
                                invalidClassName="invalid-contact-form-page-section-3-input"
                                onChange={(event) => inputChangeHandler(event, el.id, 'section3','inputForm')}
                                elementType={el.elementType}
                                rows={el.elementConfig.rows}
                                validField={el.validField}
                                touched={el.touched}
                                erroeMessages={el.errorMessage}
                                inputID={el.inputID}
                                textareaID={el.textareaID}
                                placeholder={el.elementConfig.placeholder}
                                options={el.elementConfig.options}
                            />
                            <EH20/>
                        </div>
                    )
                })}
                <EH30/>
                <Button
                    className="call-to-action-get-direction-black"
                    text="submit."
                    onClick={() => onClickHandler('section3InputForm')}
                />
                <EH20/>
                {loadingOnButtonClick("submit")}
            </div>
            )
        }
    } 

    /**
     * Markup
     */

    return(
        <div className="contact-form-page" id="contactFormPage">
            {renderToolbars()}
            <div className="contact-form-page-wrapper">
                <div className="contact-form-page-header">
                    <H45 className="h45-nero-lustria">Contact Form</H45>
                </div>
                <div className="grey-line"/>
                {renderContactFormPageSection1DataContent()}
                {renderContactFormPageSection2DataContent()}
                {renderContactFormPageSection3DataContent()}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            contactFormPage: Selectors.getContactFormPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            initInputFormForContactFormPage: bindActionCreators(Actions.initInputFormForContactFormPage, dispatch),
            setInputFiledValueAndCheckValidation: bindActionCreators(Actions.setInputFiledValueAndCheckValidation, dispatch),
            getDirectionContactFormPage: bindActionCreators(Actions.getDirectionContactFormPage, dispatch),
            subscribeContactFormPage: bindActionCreators(Actions.subscribeContactFormPage, dispatch),
            submitContactFormPage: bindActionCreators(Actions.submitContactFormPage, dispatch),
            fetchGetDirectionContactFormPage: bindActionCreators(Services.fetchGetDirectionContactFormPage, dispatch),
            fetchGetDirectionContactFormPageSuccess: bindActionCreators(Actions.fetchGetDirectionContactFormPageSuccess, dispatch),
            fetchSubscribeContactFormPage: bindActionCreators(Services.fetchSubscribeContactFormPage, dispatch),
            fetchSubscribeContactFormPageSuccess: bindActionCreators(Actions.fetchSubscribeContactFormPageSuccess, dispatch),
            fetchSubmitContactFormPage: bindActionCreators(Services.fetchSubmitContactFormPage, dispatch),
            fetchSubmitContactFormPageSuccess: bindActionCreators(Actions.fetchSubmitContactFormPageSuccess, dispatch),
        };
    }
)(ContactFormPage);
 