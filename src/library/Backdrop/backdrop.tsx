/**
 * Libraries
 */

import * as React from 'react';

/**
 * Styles
 */

import './backdrop.scss';

/**
 * Button component definition and export
 */

const Backdrop = (props) => (
    props.show ? <div onClick={props.onClick} className={props.className}>{props.children}</div> : null
);

export default Backdrop;
