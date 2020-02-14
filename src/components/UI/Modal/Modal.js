import React, { Fragment } from "react";

import calsses from './Modal.module.css';
import Backdop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Fragment>
        <Backdop show={props.show} clicked={props.modalClosed}/>
        <div
            className={calsses.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            >
            {props.children}
        </div>
    </Fragment>
);

export default modal;