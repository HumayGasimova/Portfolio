/**
 * Libraries
 */

import * as React from 'react';

import * as PropTypes from 'prop-types';

/**
 * Components
 */

/**
 * Styles
 */

import './button.scss';

/**
 * Button component definition and export
 */

const Button = (props) => {

    /**
     * Methods
     */

    // componentDidMount() {
    //     this.buttonRef.current.addEventListener("click", e => {
   
    //     });
    // }
    
    /**
     * Markup
     */

    return(
        <>{props.outerDivClassName ? 
            <div className={props.outerDivClassName}>
                <button 
                    className={props.className}
                    onClick={props.onClick}
                    onMouseDown={props.onMouseDown}
                    type={props.type}
                    disabled={props.disabled}
                    // ref={buttonRef}
                    id={props.id}
                    // style={{ width: `${props.width}`, height: `${props.height}`, borderRadius: `${props.borderRadius}`}}
                    >
                        {props.text}
                        {props.children}
                </button>
            </div> : 
            <button 
                className={props.className}
                onClick={props.onClick}
                onMouseDown={props.onMouseDown}
                type={props.type}
                disabled={props.disabled}
                // ref={buttonRef}
                id={props.id}
                // style={{ width: `${props.width}`, height: `${props.height}`, borderRadius: `${props.borderRadius}`}}
            >
                    {props.text}
                    {props.children}
            </button>
        }</>   
    );
}

// Button.propTypes = {
//     type: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     disabled: PropTypes.bool.isRequired,
//     width: PropTypes.string.isRequired,
//     height: PropTypes.string.isRequired,
//     borderRadius: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired
// }

export default Button;
